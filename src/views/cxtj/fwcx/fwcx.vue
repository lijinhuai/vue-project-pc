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
            <FormItem label="路名：" prop="lm">
              <div class="form-item">
                <el-select v-model="queryForm.lm" filterable placeholder="请选择" style="width:100%">
                  <el-option v-for="item in roadDictList" :key="item.index" :label="item.value" :value="item.key">
                  </el-option>
                </el-select>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="门弄牌号：" prop="mnph">
              <div class="form-item">
                <Input v-model="queryForm.mnph"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="室号：" prop="sh">
              <div class="form-item">
                <Input v-model="queryForm.sh"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="房主姓名：" prop="fzxm">
              <div class="form-item">
                <Input v-model="queryForm.fzxm"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="房主证件：" prop="fzzjhm">
              <div class="form-item">
                <Input v-model="queryForm.fzzjhm"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="房屋标签：" prop="fwbq">
              <div style="display:inline-block;width:180px;">
                <Select v-model="queryForm.fwbq" style="width:180px" filterable clearable>
                  <Option value="w">维族居住</Option>
                  <Option value="z">藏族居住</Option>
                  <Option value="qz">5人以上来沪人员群租房</Option>
                  <Option value="wcn">未成年来沪人员独居</Option>
                  <Option value="sfzh">无身份证人员居住</Option>
                  <Option value="kf">空房</Option>
                  <Option value="hh">来沪与本地居民混合居住的</Option>
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
import { fetchFwjbxxList } from '@/api/cxtj/fwcx'
import Dept from '@/components/Dept.vue'
export default {
  name: 'fwcx',
  data () {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      roadDictList: [],
      queryForm: {},
      columns: [
        {
          title: '房屋地址',
          key: 'address',
          render: (h, params) => {
            let address = params.row.mlphxx + params.row.sh
            return h(
              'Poptip',
              {
                props: {
                  trigger: 'hover',
                  placement: 'top-start',
                  content: address
                }
              },
              [h('span', address.length > 10 ? address.substring(6) : address)]
            )
          }
        },
        {
          title: '居村委名称',
          key: 'jcwmc',
          width: '120px'
        },
        {
          title: '派出所',
          key: 'pcsmc',
          width: '120px'
        },
        {
          title: '房主姓名',
          key: 'fzxm',
          width: '120px'
        },
        {
          title: '房主联系电话',
          key: 'fzlxdh',
          width: '140px'
        },
        {
          title: '房主证件号码',
          key: 'fzzjhm',
          width: '180px'
        },
        {
          title: '居住房屋类型',
          key: 'jzfwlxText',
          width: '140px'
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
                        dztzm: params.row.dztzm
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
  activated () {
    let fwbq = this.$route.query.fwbq
    let lm = this.$route.params.lm
    let mnph = this.$route.params.mnph
    if (lm) {
      this.queryForm.lm = lm
    }
    if (mnph) {
      this.queryForm.mnph = mnph
    }
    if (fwbq) {
      this.queryForm.fwbq = fwbq
    }
    if (lm || mnph || fwbq) {
      this.search()
    }
  },
  mounted () {
    if (localStorage.getItem('roadDictList')) {
      this.roadDictList = JSON.parse(localStorage.getItem('roadDictList'))
    }
  },
  methods: {
    search () {
      fetchFwjbxxList(this.pageInfo, this.queryForm)
        .then(response => {
          this.data = response.data.list
          this.pageInfo.total = response.data.total
        })
        .catch(() => {})
    },
    changePage (value) {
      this.pageInfo.pageNum = value
      this.search()
    }
  }
}
</script>

<style lang="less" scoped>
.form-item {
  display: inline-block;
  width: 180px;
}
.ivu-form-item {
  margin-bottom: 5px;
}
</style>

<style lang="less">
.el-input__inner {
  height: 32px;
}
</style>



