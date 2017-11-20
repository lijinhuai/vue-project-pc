<template>
  <div v-clickoutside="handleClose">
    <Input @on-focus="handleFocus">
    </Input>
    <transition :name="transition">
      <div v-show="visible" class="treeWarp">
	      <el-tree
          :props="props"
          :load="loadNode"
          lazy
          show-checkbox
          @check-change="handleCheckChange">
        </el-tree>
       </div>
    </transition>
  </div>
</template>
<script>
import clickoutside from '../directives/clickoutside'
export default {
  name: 'Dept',
  directives: { clickoutside },
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    confirm: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String
    },
    elementId: {
      type: String
    }
  },
  data () {
    return {
      props: {
        label: 'name',
        children: 'zones'
      },
      count: 1,
      showClose: false,
      visible: false,
      picker: null,
      internalValue: '',
      disableClickOutSide: false, // fixed when click a date,trigger clickoutside to close picker
      disableCloseUnderTransfer: false, // transfer 模式下，点击Drop也会触发关闭
      currentValue: this.value
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
    // 开启 transfer 时，点击 Drop 即会关闭，这里不让其关闭
    handleTransferClick () {
      if (this.transfer) this.disableCloseUnderTransfer = true
    },
    handleClose () {
      if (this.disableCloseUnderTransfer) {
        this.disableCloseUnderTransfer = false
        return false
      }
      if (this.open !== null) return
      //                if (!this.disableClickOutSide) this.visible = false;
      this.visible = false
      this.disableClickOutSide = false
    },
    handleFocus () {
      if (this.readonly) return
      this.visible = true
    },
    // handleBlur () {
    //   this.visible = false
    // },
    handleInputMouseenter () {
      if (this.readonly || this.disabled) return
      if (this.visualValue && this.clearable) {
        this.showClose = true
      }
    },
    handleInputMouseleave () {
      this.showClose = false
    },

    handleCheckChange (data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    handleNodeClick (data) {
      console.log(data)
    },
    loadNode (node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region1' }, { name: 'region2' }])
      }
      if (node.level > 3) return resolve([])

      var hasChild
      if (node.data.name === 'region1') {
        hasChild = true
      } else if (node.data.name === 'region2') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }

      setTimeout(() => {
        var data
        if (hasChild) {
          data = [{
            name: 'zone' + this.count++
          }, {
            name: 'zone' + this.count++
          }]
        } else {
          data = []
        }

        resolve(data)
      }, 500)
    }
  },
  mounted () {
    if (this.open !== null) this.visible = this.open
  }
}
</script>

<style lang="less" scoped>
.treeWarp {
  width: 100%;
  border: 1px solid #d3d3d3;
  position: absolute;
  z-index: 3;
}
</style>



