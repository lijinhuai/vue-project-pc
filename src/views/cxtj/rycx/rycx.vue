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
            <FormItem label="民族：" prop="mzdm">
              <div style="display:inline-block;width:180px;">
                <Select v-model="queryForm.mzdm" style="width:180px" filterable clearable>
                    <Option v-for="dict in dictList.mz" :key="dict.index" :value="dict.key">{{dict.value}}</Option>
                  </Select>
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
            <FormItem label="户籍地址：" prop="hjdz">
              <div style="display:inline-block;width:180px;">
                <Input v-model="queryForm.hjdz"></Input>
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
    <div v-show="data.length>0">
      <Table size="small" :columns="columns" :data="data">
      </Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :current="pageInfo.pageNum" :total="pageInfo.pages" :page-size="pageInfo.pageSize" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
  import Dept from '@/components/Dept.vue'
  import {
    fetchDictList
  } from '@/api/dict'
  import {
    fetchRjbxxList
  } from '@/api/cxtj/rycx'
  export default {
    data () {
      return {
        spinShow: false,
        dictList: {
          mz: []
        },
        pageInfo: {
          pageNum: 1,
          pageSize: 10,
          pages: 0
        },
        queryForm: {
          mzdm: '',
          xm: '',
          zjhm: ''
        },
        columns: [{
          title: '姓名',
          key: 'xm',
          width: '140px'
        },
        {
          title: '性别',
          key: 'xbhz',
          width: '80px'
        },
        {
          title: '民族',
          key: 'mzhz',
          width: '100px'
        },
        {
          title: '出生日期',
          key: 'csrq',
          width: '100px'
        },
        {
          title: '公民身份证号码',
          key: 'zjhm'
        },
        {
          title: '户籍地址',
          key: 'hjdz'
        },
        {
          title: '操作',
          key: 'action',
          width: '120px',
          render: (h, params) => {
            const _self = this
            return h(
                'Button', {
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
    methods: {
      search () {
        const _self = this
        _self.spinShow = true
        fetchRjbxxList(this.pageInfo, this.queryForm)
          .then(response => {
            this.data = response.data.data.list
            this.pageInfo.pages = response.data.data.pages
            _self.spinShow = false
          })
          .catch(() => {
            _self.spinShow = false
          })
      },
      initDict () {
        const _self = this
        fetchDictList('MZ').then(response => {
          _self.dictList.mz = response.data
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


