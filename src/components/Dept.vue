<template>
  <div v-clickoutside="handleClose">
    <Input @on-focus="handleFocus" :placeholder="placeholder" :value="visualValue"></Input>
    <transition :name="transition">
      <div v-show="visible" class="treeWarp">
        <el-tree :data="data" show-checkbox node-key="id" ref="tree" highlight-current :props="defaultProps">
        </el-tree>
      </div>
    </transition>
  </div>
</template>

<script>
import clickoutside from '../directives/clickoutside'
import { fetchDeptTreeList } from '@/api/dept'
export default {
  name: 'Dept',
  directives: {
    clickoutside
  },
  props: {
    value: {
      type: Array,
      default: []
    },
    clearable: {
      type: Boolean,
      default: true
    },
    open: {
      type: Boolean,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      visualValue: '',
      visible: false
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
      this.checkChange()
    },
    handleFocus () {
      if (this.readonly) return
      this.visible = true
    },
    loadNode (node, resolve) {
      fetchDeptTreeList().then(response => {
        this.data = response.data
      })
    },
    checkChange () {
      const checkedNodes = this.$refs.tree.getCheckedNodes()
      const checkedKeys = this.$refs.tree.getCheckedKeys()
      let checkLabels = ''
      let index = 0
      for (var checkedNode of checkedNodes) {
        // if (checkedNode.children.length <= 0) {
        //   continue
        // }
        if (index !== 0) {
          checkLabels += ','
        }
        checkLabels += checkedNode.label
        index++
      }

      let checkedKeysStr = ''
      index = 0
      for (var checkedKey of checkedKeys) {
        if (index !== 0) {
          checkedKeysStr += ','
        }
        checkedKeysStr += '\''
        checkedKeysStr += checkedKey
        checkedKeysStr += '\''
        index++
      }
      this.visualValue = checkLabels
      this.$emit('input', checkedKeysStr)
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



