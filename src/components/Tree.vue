<template>
  <div v-clickoutside="handleClose">
    <el-input v-bind:class="{'switch-tree':showSwitch}" v-model="visualValue" @focus="handleFocus" :placeholder="placeholder" :size="inputSize" :clearable="clearable" @clear="handleClear" readonly></el-input>
    <el-tooltip v-show="showSwitch" :content="switchCheckStrictly==true?'包含下级':'不包含下级'" placement="top">
      <el-switch v-model="switchCheckStrictly" @change="handleSwitchChange">
      </el-switch>
    </el-tooltip>
    <transition :name="transition">
      <div v-show="visible" class="treeWarp">
        <el-tree :data="treeData" :show-checkbox="showCheckbox" :check-strictly="showSwitch?!switchCheckStrictly:checkStrictly" :default-checked-keys="defaultCheckedKeys" node-key="id" ref="eltree" :props="defaultProps" highlight-current @check-change="handleCheckChange">
        </el-tree>
      </div>
    </transition>
  </div>
</template>

<script>
import clickoutside from '../directives/clickoutside'
export default {
  name: 'Tree',
  data () {
    return {
      switchCheckStrictly: true,
      treeData: [],
      defaultProps: {
        id: 'id',
        label: 'name',
        children: 'children'
      },
      visualValue: '',
      visible: false,
      treeChecked: {
        keys: []
      }
    }
  },
  directives: {
    clickoutside
  },
  props: {
    fetchTreeList: {
      type: Function
    },
    showSwitch: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: true
    },
    inputSize: {
      type: String
    },
    showCheckbox: {
      type: Boolean,
      default: true
    },
    checkStrictly: {
      type: Boolean,
      default: false
    },
    defaultCheckedKeys: {
      type: Array,
      default () {
        return []
      }
    },
    open: {
      type: Boolean,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    opened () {
      return this.open === null ? this.visible : this.open
    },
    transition () {
      if (
        this.placement === 'bottom-start' ||
        this.placement === 'bottom' ||
        this.placement === 'bottom-end'
      ) {
        return 'slide-up'
      } else {
        return 'slide-down'
      }
    }
  },
  methods: {
    handleClose () {
      if (this.open !== null) return
      this.visible = false
      // this.checkChange()
    },
    handleFocus () {
      if (this.readonly) return
      this.visible = true
    },
    loadNode (node, resolve) {
      this.fetchTreeList().then(res => {
        this.treeData = res.data
      })
    },
    handleCheckChange (data, checked, indeterminate) {
      if (!this.multiple) {
        // 现获取当前选择的id 在数组中的索引
        const index = this.treeChecked.keys.indexOf(data.id)
        // 如果不在数组中，并且数组中已经有一个id 并且checked 为true的时候，代表不能再次选择
        if (index < 0 && this.treeChecked.keys.length === 1 && checked) {
          this.$message({
            message: '只能选择一个节点',
            type: 'error',
            showClose: true
          })
          // 设置已选择的节点为fasle
          this.$refs.eltree.setChecked(data, false)
        } else if (this.treeChecked.keys.length === 0 && checked) {
          // 发现数组为空 并且是已选择
          // 防止数组有值，首先清空，在push
          this.treeChecked.keys = []
          this.treeChecked.keys.push(data.id)
        } else if (
          index >= 0 &&
          this.treeChecked.keys.length === 1 &&
          !checked
        ) {
          // 再次直接进行赋空操作
          this.treeChecked.keys = []
        }
      }
      this.checkChange()
    },
    checkChange () {
      const checkedNodes = this.$refs.eltree.getCheckedNodes()
      const checkedKeys = this.$refs.eltree.getCheckedKeys()
      let checkLabels = ''
      let joinSeparator = ''
      if (this.multiple) {
        joinSeparator = "'"
      }
      let index = 0
      for (var checkedNode of checkedNodes) {
        if (index !== 0) {
          checkLabels += ','
        }
        checkLabels += checkedNode.name
        index++
      }
      let checkedKeysStr = ''
      index = 0
      for (var checkedKey of checkedKeys) {
        if (index !== 0) {
          checkedKeysStr += ','
        }
        checkedKeysStr += joinSeparator
        checkedKeysStr += checkedKey
        checkedKeysStr += joinSeparator
        index++
      }
      this.visualValue = checkLabels
      this.$emit('input', checkedKeysStr)
      this.$emit('checkChange')
    },
    setCheckedKeys (keyArr) {
      this.$refs.eltree.setCheckedKeys([])
      this.$refs.eltree.setCheckedKeys(keyArr)
      if (!this.multiple) {
        this.treeChecked.keys = []
        this.treeChecked.keys.push(keyArr[0])
      }
      this.checkChange()
    },
    resetCheckedNodes () {
      if (!this.multiple) {
        this.treeChecked.keys = []
      }
      this.$refs.eltree.setCheckedKeys([])
    },
    handleClear () {
      this.resetCheckedNodes()
    },
    handleSwitchChange () {
      this.resetCheckedNodes()
    }
  },
  mounted () {
    if (this.open !== null) this.visible = this.open
    this.loadNode()
  }
}
</script>

<style lang="less" scoped>
.treeWarp {
  width: 100%;
  height: 300px;
  border: 1px solid #d3d3d3;
  background-color: white;
  position: absolute;
  z-index: 3;
  overflow: auto;
}
</style>
<style scoped>
.switch-tree {
  width: calc(100% - 45px);
}
</style>
