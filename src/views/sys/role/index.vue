<template>
  <imp-panel>
    <h3 class="box-title" slot="header" style="width: 100%;">
      <el-button type="primary" icon="el-icon-plus" @click="newAdd">新增</el-button>
      <el-button type="danger" icon="el-icon-delete" @click="batchDelete">删除</el-button>
    </h3>
    <el-row slot="body" :gutter="24" style="margin-bottom: 20px;">
      <el-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" style="margin-bottom: 20px;">
        <div class="role-tree">
          <el-tree v-if="roleTree" :data="roleTree" ref="roleTree" show-checkbox check-strictly highlight-current @node-click="handleNodeClick" clearable node-key="id" :props="defaultProps">
            <span class="tree-node" slot-scope="{ node, data }">
              <span>{{node.label}}</span>
            <span class="render-content">
                <i class="fa fa-wrench" title="配置权限" @click="(e) => settingPrivilege(e, data.id)"></i>
                <i class="fa fa-trash" @click="(e) => deleteSelected(e, data.id)"></i>
              </span>
            </span>
          </el-tree>
        </div>
      </el-col>
      <el-col :span="18" :xs="24" :sm="24" :md="18" :lg="18">
        <el-card class="box-card">
          <div class="text item">
            <el-form :model="form" ref="form" :rules="rules">
              <el-form-item label="父级" :label-width="formLabelWidth">
                <!-- <el-input v-model="form.parentId" auto-complete="off"></el-input> -->
                <el-select-tree v-model="form.parentId" :treeData="roleTree" :propNames="defaultProps" clearable
                                placeholder="请选择父级">
                </el-select-tree>
              </el-form-item>
              <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="编码" prop="code" :label-width="formLabelWidth">
                <el-input v-model="form.code" auto-complete="off"></el-input>
              </el-form-item>
              <!-- <el-form-item label="排序" :label-width="formLabelWidth">
                <el-slider v-model="form.sort"></el-slider>
              </el-form-item> -->
              <el-form-item label="" :label-width="formLabelWidth">
                <el-button type="primary" @click="onSubmit" v-text="form.id?'修改':'新增'"></el-button>
                <el-button type="info" @click="settingPrivilege($event,form.id)" icon="el-icon-setting" v-show="form.id && form.id!=null">配置权限
                </el-button>
                <el-button type="danger" @click="deleteSelected($event, form.id)" icon="el-icon-delete" v-show="form.id && form.id!=null">删除
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
        <el-dialog title="配置权限" :visible="dialogVisible" append-to-body>
          <div class="select-tree">
            <el-scrollbar tag="div" class='is-empty' wrap-class="el-select-dropdown__wrap" view-class="el-select-dropdown__list">
              <el-tree :data="privilegeTree" ref="privilegeTree" show-checkbox node-key="id" :props="defaultProps">
              </el-tree>
            </el-scrollbar>
          </div>
          <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="configRolePrivileges">确 定</el-button>
                            </span>
        </el-dialog>
      </el-col>
    </el-row>
  </imp-panel>
</template>

<script>
import panel from '../components/panel.vue'
import selectTree from '../components/selectTree.vue'
import treeter from '../components/treeter'
import {
  fetchRoleTreeList,
  fetchPrivilegeTreeList,
  fetchRolePrivilegeIdList,
  roleAdd,
  roleUpdate,
  roleDelete,
  rolePrivielgesConfig
} from '@/api/sys/role'
export default {
  mixins: [treeter],
  components: {
    'imp-panel': panel,
    'el-select-tree': selectTree
  },
  data () {
    return {
      dialogLoading: false,
      dialogVisible: false,
      formLabelWidth: '100px',
      defaultProps: {
        id: 'id',
        label: 'name',
        children: 'children'
      },
      roleTree: [],
      privilegeTree: [],
      currRoleId: '',
      form: {
        id: null,
        parentId: null,
        code: '',
        name: '',
        sort: 0
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入角色名称',
            trigger: 'blur'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入角色编码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    configRolePrivileges () {
      let checkedKeys = this.$refs.privilegeTree.getCheckedKeys()
      let checkedNodes = this.$refs.privilegeTree.getCheckedNodes()
      for (let checkedNode of checkedNodes) {
        if (checkedNode.parentId == null || checkedNode.parentId === '') {
          checkedKeys.splice(
            checkedKeys.findIndex(x => x === checkedNode.id),
            1
          )
        }
      }
      rolePrivielgesConfig(
        this.form.id || this.currRoleId,
        checkedKeys.join(',')
      ).then(res => {
        this.$message.success('修改成功')
        this.dialogVisible = false
      })
    },
    handleNodeClick (data) {
      this.form = JSON.parse(JSON.stringify(data))
    },
    newAdd () {
      this.form = {
        id: null,
        parentId: null,
        code: '',
        name: '',
        sort: 0
      }
    },
    batchDelete () {
      var checkKeys = this.$refs.roleTree.getCheckedKeys()
      if (checkKeys == null || checkKeys.length <= 0) {
        this.$message.warning('请选择要删除的权限')
        return
      }
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        roleDelete(checkKeys.join(',')).then(res => {
          this.$message.success('操作成功')
          this.batchDeleteFromTree(this.roleTree, checkKeys)
        })
      })
    },
    onSubmit () {
      if (this.form.id) {
        this.roleUpdate()
      } else {
        this.roleAdd()
      }
    },
    roleAdd () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          roleAdd(this.form).then(res => {
            this.form.id = res.data
            this.$message.success('操作成功')
            this.newAdd()
            this.loadData()
            // var ddd = {
            //   id: this.form.id,
            //   parentId: this.form.parentId,
            //   code: this.form.code,
            //   name: this.form.name,
            //   sort: this.form.sort,
            //   children: []
            // }
            // this.appendTreeNode(this.roleTree, ddd)
            // this.roleTree.push({})
            // this.roleTree.pop()
          })
        } else {
          return false
        }
      })
    },
    roleUpdate () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          roleUpdate(this.form.id, this.form).then(res => {
            this.$message.success('操作成功')
            this.loadData()
          })
        } else {
          return false
        }
      })
    },
    deleteSelected (event, id) {
      event.stopPropagation()
      roleDelete(id)
        .then(res => {
          this.$message.success('操作成功')
          this.deleteFromTree(this.roleTree, id)
          this.newAdd()
        })
        .catch(() => {
          // this.loadData()
        })
    },
    loadData () {
      fetchRoleTreeList().then(response => {
        this.roleTree = []
        this.roleTree.push(...response.data)
      })
    },
    settingPrivilege (event, id) {
      this.currRoleId = id
      this.$refs.roleTree.setCurrentKey(id)
      event.stopPropagation()
      this.dialogVisible = true
      if (this.privilegeTree == null || this.privilegeTree.length <= 0) {
        this.dialogLoading = true
        fetchPrivilegeTreeList().then(res => {
          this.dialogLoading = false
          this.privilegeTree = res.data
        })
      }
      fetchRolePrivilegeIdList(id).then(res => {
        this.$refs.privilegeTree.setCheckedKeys(res.data)
      })
    }
  },
  created () {
    this.loadData()
  }
}
</script>

<style>
.role-tree .el-tree {
  border: 1px solid #d1dbe5 !important;
}
.tree-node {
  -ms-flex: 1;
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.render-content {
  float: right;
  margin-right: 20px;
}
.render-content i.fa {
  margin-left: 10px;
}
.render-content i.fa:hover {
  color: #e6000f;
}
.select-tree .el-scrollbar.is-empty .el-select-dropdown__list {
  padding: 0;
}
.select-tree .el-scrollbar {
  border: 1px solid #d1dbe5;
}
.select-tree .el-tree {
  border: 0;
}
</style>
