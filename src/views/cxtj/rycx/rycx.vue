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
          <Page :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dept from '@/components/Dept.vue'
import { fetchDbDictList } from '@/api/dict'
import { fetchRjbxxList } from '@/api/cxtj/rycx'
import { fetchYblsRjbxxList } from '@/api/ybls_home/syrkcx'
import { fetchSyrkRjbxxList } from '@/api/ybls_home/map_syrkcx'
export default {
  name: 'rycx',
  data () {
    return {
      dictList: {
        mz: []
      },
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      queryForm: {
        mzdm: '',
        xm: '',
        zjhm: ''
      },
      columns: [
        {
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

    let hjdz = this.$route.params.hjdz
    if (hjdz) {
      this.queryForm.hjdz = hjdz
      this.yblsSyrkCx()
    }

    let id = this.$route.query.id
    if (id === '1') {
      this.MapSyrkCx()
    } else {
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
    yblsSyrkCx () {
      fetchYblsRjbxxList(this.pageInfo, this.queryForm)
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
    },
    changePage (value) {
      this.pageInfo.pageNum = value
      this.search()
    },
    MapSyrkCx () {
      fetchSyrkRjbxxList(this.pageInfo, this.queryForm)
        .then(response => {
          this.data = response.data.list
          this.pageInfo.total = response.data.total
        })
        .catch(() => {})
    }
  }
}
</script>

<style lang="less" scoped>
.ivu-form-item {
  margin-bottom: 5px;
}
</style>


