<template>
  <div>
    <imp-panel v-show="!showUserForm" @keydown.enter.native="search($event)">
      <div class="box-title" slot="header" style="width: 100%;">
        <el-row style="width: 100%;">
          <el-col :span="6">
            <el-button type="primary" @click="newAdd" icon="el-icon-plus">新增</el-button>
          </el-col>
          <el-col :span="18">
            <el-form inline style="float:right;">
              <el-form-item>
                <el-input type="text" placeholder="用户编码、用户名或姓名" v-model="queryForm.searchContent" prefix-icon="el-icon-search"></el-input>
              </el-form-item>
              <el-form-item>
                <Dept v-model="queryForm.policeDepts" placeholder="选择部门" show-switch show-checkbox></Dept>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
      <div slot="body">
        <el-table :data="tableData.rows" border size="small" style="width: 100%" v-loading="listLoading">
          <!-- <el-table-column prop="id" type="selection" width="50"></el-table-column> -->
          <!-- <el-table-column label="照片" width="76">
                  <template slot-scope="scope">
                   <img :src='scope.row.avatar' style="height: 35px;vertical-align: middle;" alt="">
                  </template>
               </el-table-column> -->
        <el-table-column
          prop="code"
          label="用户编码">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="trueName"
          label="用户姓名">
        </el-table-column>
        <el-table-column
          prop="mobilePhone"
          label="手机号码">
        </el-table-column>
         <el-table-column
          prop="dept.name"
          label="用户部门">
        </el-table-column>
        <el-table-column label="操作" width="320">
<template slot-scope="scope">
  <el-button size="small" type="primary" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">
    编辑
  </el-button>
  <el-button size="small" type="info" icon="el-icon-setting" @click="handleRoleConfig(scope.$index, scope.row)">配置角色
  </el-button>
  <el-button size="small" type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)">删除
  </el-button>
</template>
        </el-table-column>
      </el-table>

      <el-pagination background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageInfo.pageNum"
        :page-sizes="[5, 10, 20]"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.total">
      </el-pagination>

      <el-dialog title="配置用户角色" :visible="dialogVisible" append-to-body>
        <div class="select-tree">
          <el-scrollbar
            tag="div"
            class='is-empty'
            wrap-class="el-select-dropdown__wrap"
            view-class="el-select-dropdown__list">
            <el-tree
              ref="roleTree"
              :data="roleTree"
              show-checkbox
              check-strictly
              node-key="id"
              default-expand-all
              v-loading="dialogLoading"
              :props="defaultProps">
            </el-tree>
          </el-scrollbar>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="configUserRoles">确 定</el-button>
          </span>
      </el-dialog>
    </div>
  </imp-panel>
   <imp-panel v-show="showUserForm" :title="form.id ? '编辑':'新增用户'">
     <h3 class="box-title" slot="header" style="width: 100%;">
        <el-row style="width: 100%;">
          <el-col :span="12">
            <el-button type="default" @click="back">返回</el-button>
          </el-col>
        </el-row>
      </h3>
    <el-form slot="body" ref="form" :model="form" :rules="rules" label-width="180px">
      <el-form-item label="用户编码" prop="code">
        <el-input v-model="form.code"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="用户姓名" prop="trueName">
        <el-input v-model="form.trueName"></el-input>
      </el-form-item>
      <el-form-item label="用户部门" prop="deptCode">
        <dept ref="dept" v-model="form.deptCode" placeholder="选择部门" :multiple="false" show-checkbox check-strictly></dept>
      </el-form-item>
      <el-form-item label="职位" prop="position">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="mobilePhone">
        <el-input v-model="form.mobilePhone"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="note">
        <el-input type="textarea" v-model="form.note"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onEditSubmit" v-if="form.id">保存</el-button>
        <el-button type="primary" @click="onSubmit" v-else>立即创建</el-button>
      </el-form-item>
    </el-form>
  </imp-panel>
</div>
</template>

<script>
import panel from '../components/panel.vue'
import Dept from '@/components/Dept.vue'
import {
  fetchUserList,
  fetchUserRoleIdList,
  userRolesConfig,
  userAdd,
  userEdit,
  userDelete
} from '@/api/sys/user'
import { fetchRoleTreeList } from '@/api/sys/role'
export default {
  name: 'user',
  components: {
    'imp-panel': panel,
    Dept
  },
  data () {
    return {
      queryForm: {},
      currentRow: {},
      dialogVisible: false,
      dialogLoading: false,
      defaultProps: {
        children: 'children',
        label: 'name',
        id: 'id'
      },
      roleTree: [],
      listLoading: false,
      searchKey: '',
      pageInfo: {
        pageNum: 1,
        total: 0,
        pageSize: 5
      },
      tableData: {
        rows: []
      },
      showUserForm: false,
      form: {
        id: null,
        code: '',
        username: '',
        password: '',
        trueName: '',
        deptCode: '',
        position: '',
        mobilePhone: '',
        note: ''
      },
      rules: {
        code: [
          {
            required: true,
            message: '请输入用户编码',
            trigger: 'blur'
          }
        ],
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        trueName: [
          {
            required: true,
            message: '请输入用户姓名',
            trigger: 'blur'
          }
        ],
        deptCode: [
          {
            required: true,
            message: '请选择用户部门',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    clearForm () {
      this.form = {
        id: null,
        code: '',
        username: '',
        password: '',
        trueName: '',
        deptCode: '',
        position: '',
        mobilePhone: '',
        note: ''
      }
      this.$refs.dept.resetCheckedNodes()
    },
    newAdd () {
      this.clearForm()
      this.showUserForm = true
    },
    back () {
      this.clearForm()
      this.showUserForm = false
    },
    handleSelectionChange (val) {},
    handleRoleConfig (index, row) {
      this.currentRow = row
      this.dialogVisible = true
      if (this.roleTree.length <= 0) {
        fetchRoleTreeList().then(res => {
          this.roleTree = res.data
        })
      }
      fetchUserRoleIdList(row.id).then(res => {
        this.$refs.roleTree.setCheckedKeys(res.data)
      })
    },
    configUserRoles () {
      let checkedKeys = this.$refs.roleTree.getCheckedKeys()
      userRolesConfig(this.currentRow.id, checkedKeys.join(',')).then(res => {
        this.$message.success('修改成功')
        this.dialogVisible = false
      })
    },
    handleSizeChange (val) {
      this.pageInfo.pageSize = val
      this.loadData()
    },
    handleCurrentChange (val) {
      this.pageInfo.pageNum = val
      this.loadData()
    },
    handleEdit (index, row) {
      this.currentRow = JSON.parse(JSON.stringify(row))
      this.form = this.currentRow
      this.$refs.dept.setCheckedKeys([row.deptCode])
      this.showUserForm = true
    },
    handleDelete (index, row) {
      userDelete(row.id).then(res => {
        this.loadData()
      })
    },
    search (target) {
      this.loadData()
    },
    onSubmit () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          userAdd(this.form).then(res => {
            this.back()
            this.loadData()
          })
        } else {
          return false
        }
      })
    },
    onEditSubmit () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          userEdit(this.form.id, this.form).then(res => {
            this.back()
            this.loadData()
          })
        } else {
          return false
        }
      })
    },
    loadData () {
      fetchUserList(this.pageInfo, this.queryForm).then(res => {
        this.tableData.rows = res.data.list
        this.pageInfo.total = res.data.total
      })
    }
  },
  created () {
    this.loadData()
  }
}
</script>

<style>
.el-pagination {
  float: right;
  margin-top: 15px;
}
</style>
