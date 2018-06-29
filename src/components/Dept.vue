<template>
  <div class="dept">
    <Tree v-bind:class="{'switch-tree':showSwitch}" ref="tree" :fetchTreeList="fetchTreeList()" @checkChange="handleCheckChange" :multiple="multiple" :show-checkbox="showCheckbox" :inputSize="inputSize" :check-strictly="showSwitch?!switchCheckStrictly:checkStrictly" :default-checked-keys="defaultCheckedKeys" clearable
      :placeholder="placeholder"></Tree>
    <el-tooltip v-show="showSwitch" :content="switchCheckStrictly==true?'包含下级机构':'不包含下级机构'" placement="top">
      <el-switch v-model="switchCheckStrictly" @change="handleSwitchChange">
      </el-switch>
    </el-tooltip>
  </div>
</template>

<script>
import Tree from './Tree'
import { fetchDeptTreeList } from '@/api/dept'
export default {
  name: 'Dept',
  data () {
    return {
      switchCheckStrictly: true
    }
  },
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
    handleSwitchChange () {
      this.resetCheckedNodes()
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

<style>
.dept .switch-tree {
  width: calc(100% - 45px);
  display: inline-block;
}
</style>

