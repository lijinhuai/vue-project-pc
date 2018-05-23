<template>
  <div>
    <Card>
      <p slot="title">
        <Icon type="navicon"></Icon>
        检索条件
      </p>
      <div>
        <Form ref="queryForm" :model="queryForm" :label-width="100" label-position="right" inline>
          <Row>
            <Col span="8">
            <FormItem label="姓名：" prop="xm">
              <div style="display:inline-block;width:180px;">
                <Input v-model="queryForm.xm"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="公民身份证号：" prop="zjhm">
              <div style="display:inline-block;width:180px;">
                <Input v-model="queryForm.zjhm"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="性别：" prop="xb">
              <div style="display:inline-block;width:180px;">
                <Select v-model="queryForm.xb" style="width:180px" filterable clearable>
                        <Option value="1">男</Option>
                        <Option value="2">女</Option>
                    </Select>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="人员类别：" prop="syrklbdm">
              <div style="display:inline-block;width:180px;">
                <Select v-model="queryForm.syrklbdm" style="width:180px" filterable clearable>
                        <Option value="01">户籍人员</Option>
                        <Option value="02">来沪人员</Option>
                        <Option value="03">境外人员</Option>
                    </Select>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="民族：" prop="mzdm">
              <div style="display:inline-block;width:180px;">
                <Select v-model="queryForm.mzdm" style="width:180px" filterable clearable>
                                <Option v-for="dict in dictList.mz" :key="dict.index" :value="dict.key">{{dict.value}}</Option>
                              </Select>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="人员标签：" prop="rybq">
              <div style="display:inline-block;width:180px;">
                <Select v-model="queryForm.rybq" style="width:180px" filterable clearable>
                                <Option v-for="dict in dictList.rybq" :key="dict.index" :value="dict.key">{{dict.value}}</Option>
                          </Select>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="起止日期：" prop="searchDateArr">
              <Date-picker ref="searchDate" type="datetimerange" format="yyyy-MM-dd" :value="queryForm.searchDateArr" @on-change="queryForm.searchDateStr=$event.join(',')" placement="bottom-start" placeholder="选择日期" style="width: 180px;"></Date-picker>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="派出所：" prop="policeDepts">
              <div class="form-item" style="display:inline-block;width:180px;">
                <Dept v-model="queryForm.policeDepts" placeholder="选择部门"></Dept>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="采集类型：" prop="cjlx">
              <div style="display:inline-block;width:180px;">
                <Select v-model="queryForm.cjlx" style="width:180px" filterable clearable>
                      <Option value="1">新增</Option>
                      <Option value="2">迁移</Option>
                      <Option value="3">修改</Option>
                      <Option value="4">注销</Option>
                  </Select>
              </div>
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12" offset="8">
            <Form-item>
              <Button type="primary" @click="search">查询</Button>
            </Form-item>
            </Col>
          </Row>
        </Form>
      </div>
    </Card>
    <Table size="small" :columns="columns" :data="data">
    </Table>
    <div v-show="data.length>0">
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" show-total @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dept from '@/components/Dept.vue'
import { fetchDbDictList } from '@/api/dict'
import { fetchRjbxxList } from '@/api/cxtj/rycx'
export default {
  name: 'rycx',
  data () {
    return {
      dictList: {
        mz: [],
        rybq: []
      },
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      queryForm: {
        mzdm: '',
        xm: '',
        zjhm: '',
        xb: '',
        syrklbdm: '',
        searchDateArr: '',
        searchDateStr: '',
        policeDepts: '',
        cjlx: ''
      },
      columns: [
        {
          title: '姓名',
          key: 'xm',
          width: 140
        },
        {
          title: '性别',
          key: 'xbhz',
          width: 80
        },
        {
          title: '人员类别',
          key: 'syrklbhz',
          width: 100
        },
        {
          title: '民族',
          key: 'mzhz',
          width: 100
        },
        {
          title: '出生日期',
          key: 'csrq',
          width: 100
        },
        {
          title: '证件号码',
          key: 'zjhm'
        },
        {
          title: '居住地址',
          key: 'jzdz'
        },
        {
          title: '户籍地址',
          key: 'hjdz'
        },
        {
          title: '操作',
          key: 'action',
          width: 100,
          render: (h, params) => {
            const _self = this
            return h(
              'Button',
              {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: function () {
                    _self.$router.push({
                      name: 'rfgl',
                      params: {
                        zjhm: params.row.zjhm
                      }
                    })
                  }
                }
              },
              '人房关联'
            )
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 100,
          render: (h, params) => {
            const _self = this
            return h(
              'Button',
              {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: function () {
                    let routeData = _self.$router.resolve({
                      name: 'archive',
                      query: { zjhm: params.row.zjhm }
                    })
                    window.open(routeData.href, '_blank')
                  }
                }
              },
              '一人一档'
            )
          }
        }
      ],
      data: []
    }
  },
  components: {
    Dept
  },
  mounted () {
    this.initDict()
  },
  activated () {
    let xb = this.$route.query.xb
    let mzdm = this.$route.query.mzdm
    let syrklbdm = this.$route.query.syrklbdm
    if (xb) {
      this.queryForm.xb = xb
    }
    if (mzdm) {
      this.queryForm.mzdm = mzdm
    }
    if (syrklbdm) {
      this.queryForm.syrklbdm = syrklbdm
    }
    if (xb || mzdm || syrklbdm) {
      this.search()
    }
  },
  methods: {
    search () {
      fetchRjbxxList(this.pageInfo, this.queryForm)
        .then(response => {
          this.data = response.data.list
          this.pageInfo.total = response.data.total
        })
        .catch(() => {})
    },
    initDict () {
      const _self = this
      fetchDbDictList('MZ').then(response => {
        _self.dictList.mz = response
      })
      fetchDbDictList('RYBQ').then(response => {
        _self.dictList.rybq = response
      })
    },
    changePage (value) {
      this.pageInfo.pageNum = value
      this.search()
    }
  }
}
</script>

<style lang="less" scoped>
.ivu-form-item {
  margin-bottom: 5px;
}
</style>


