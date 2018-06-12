<template>
  <imp-panel>
    <!-- <h3 class="box-title" slot="header" style="width: 100%;">
      <el-row style="width: 100%;">
        <el-col :span="12">
          <router-link :to="{ path: 'userAdd'}">
            <el-button type="primary" icon="plus">新增</el-button>
          </router-link>
        </el-col>
        <el-col :span="12">
          <div class="el-input" style="width: 200px; float: right;">
            <i class="el-input__icon el-icon-search"></i>
            <input type="text" placeholder="输入用户名称" v-model="searchKey" @keyup.enter="search($event)"
                   class="el-input__inner">
          </div>
        </el-col>
      </el-row>
    </h3> -->
    <div slot="body">
      <el-table
        :data="tableData.rows"
        border
        style="width: 100%"
        v-loading="listLoading"
        @selection-change="handleSelectionChange">
        <el-table-column
          prop="id"
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          label="照片" width="76">
          <template slot-scope="scope">
            <img :src='scope.row.avatar' style="height: 35px;vertical-align: middle;" alt="">
          </template>
        </el-table-column>
        <el-table-column
          prop="code"
          label="警员编码">
        </el-table-column>
        <el-table-column
          prop="username"
          label="登录名称">
        </el-table-column>
        <el-table-column
          prop="trueName"
          label="用户姓名">
        </el-table-column>
        <el-table-column
          prop="email"
          label="手机号码">
        </el-table-column>
         <el-table-column
          prop="dept.name"
          label="所在机构">
        </el-table-column>
        <el-table-column
          label="状态">
          <template slot-scope="scope">
            {{ scope.row.status===1 ? '已激活' : '未激活' }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button
              size="small"
              type="default"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="small"
              type="primary"
              icon="el-icon-setting"
              @click="handleRoleConfig(scope.$index, scope.row)">配置角色
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageInfo.pageNum"
        :page-sizes="[5, 10, 20]"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.total">
      </el-pagination>

      <el-dialog title="配置用户角色" v-model="dialogVisible" size="tiny">
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
              node-key="id" v-loading="dialogLoading"
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
</template>

<script>
import panel from '../components/panel.vue'
// import * as api from '../../api'
// import * as sysApi from '../../services/sys'
import { fetchUserList } from '@/api/sys/user'
export default {
  components: {
    'imp-panel': panel
  },
  data () {
    return {
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
        pageSize: 10
      },
      tableData: {
        rows: []
      }
    }
  },
  methods: {
    search () {
      return fetchUserList
    },
    handleSelectionChange (val) {},
    handleRoleConfig (index, row) {
      this.currentRow = row
      this.dialogVisible = true
      // if (this.roleTree.length <= 0) {
      //   sysApi
      //     .roleList({
      //       selectChildren: true
      //     })
      //     .then(res => {
      //       this.roleTree = res
      //     })
      // }
      // this.$http
      //   .get(api.SYS_USER_ROLE + '?id=' + row.id)
      //   .then(res => {
      //     this.$refs.roleTree.setCheckedKeys(res.data)
      //   })
      //   .catch(err => {})
    },
    configUserRoles () {
      // let checkedKeys = this.$refs.roleTree.getCheckedKeys()
      // this.$http
      //   .get(
      //     api.SYS_SET_USER_ROLE +
      //       '?userId=' +
      //       this.currentRow.id +
      //       '&roleIds=' +
      //       checkedKeys.join(',')
      //   )
      //   .then(res => {
      //     this.$message('修改成功')
      //     this.dialogVisible = false
      //   })
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
      this.$router.push({
        path: 'userAdd',
        query: {
          id: row.id
        }
      })
    },
    handleDelete (index, row) {
      // this.$http.get(api.SYS_USER_DELETE + '?userIds=' + row.id).then(res => {
      //   this.loadData()
      // })
    },
    loadData () {
      fetchUserList(this.pageInfo).then(response => {
        this.tableData.rows = response.data.list
        this.pageInfo.total = response.data.total
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
