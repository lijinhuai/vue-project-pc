<template>
    <Tree ref="tree" :fetchTreeList="fetchTreeList()" @checkChange="handleCheckChange" :multiple="multiple" :check-strictly="checkStrictly" :show-checkbox="showCheckbox" :show-switch="showSwitch" :inputSize="inputSize" :default-checked-keys="defaultCheckedKeys" clearable
      :placeholder="placeholder"></Tree>
</template>

<script>
import Tree from './Tree'
import { fetchDeptTreeList } from '@/api/dept'
export default {
  name: 'Dept',
  props: {
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
    }
  },
  components: {
    Tree
  },
  computed: {
    switch1 () {
      return true
    }
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
    },
    handleCheckChange () {
      this.$emit('checkChange')
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
