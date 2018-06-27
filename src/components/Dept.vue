<template>
  <Tree ref="tree" :fetchTreeList="fetchTreeList()" :multiple="multiple" :show-checkbox="showCheckbox" :inputSize="inputSize" :check-strictly="checkStrictly" :default-checked-keys="defaultCheckedKeys"></Tree>
</template>

<script>
import Tree from './Tree'
import { fetchDeptTreeList } from '@/api/dept'
export default {
  name: 'Dept',
  props: {
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
    }
  },
  components: {
    Tree
  },
  methods: {
    fetchTreeList () {
      return fetchDeptTreeList
    },
    setCheckedKeys (keyArr) {
      this.$refs.tree.setCheckedKeys(keyArr)
    },
    resetCheckedNodes () {
      this.$refs.tree.resetCheckedNodes()
    }
  },
  mounted () {
    const _self = this
    this.$refs.tree.$on('input', e => {
      _self.$emit('input', e)
    })
  }
}
</script>
