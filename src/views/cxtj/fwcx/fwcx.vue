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
            <!-- <Col span="8">
                        <FormItem label="房屋属性：" prop="xm">
                          <div class="form-item">
                            <Select v-model="queryForm.mz" clearable>
                              <Option value="beijing">居住房屋</Option>
                              <Option value="shanghai">出租房屋</Option>
                            </Select>
                          </div>
                        </FormItem>
                      </Col>
                      <Col span="8">
                        <FormItem label="房屋结构：" prop="mz">
                          <div class="form-item">
                            <Select v-model="queryForm.mz" clearable>
                              <Option value="beijing">楼房</Option>
                              <Option value="shanghai">平方</Option>
                            </Select>
                          </div>
                        </FormItem>
                      </Col> -->
            <Col span="8">
            <FormItem label="房屋街路巷：" prop="jlxmc">
              <div class="form-item">
                <Input v-model="queryForm.jlxmc"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="门牌号：" prop="yjmlph">
              <div class="form-item">
                <Input v-model="queryForm.yjmlph"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="幢楼号：" prop="bm">
              <div class="form-item">
                <Input></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="房屋室号：" prop="sh">
              <div class="form-item">
                <Input v-model="queryForm.sh"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="日期：" prop="hjdz">
              <div class="form-item">
                <Date-picker type="daterange" placement="bottom-start" placeholder="选择日期" style="width:180px">
                </Date-picker>
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
            <!-- <Col span="8">
                        <FormItem label="居住人姓名：" prop="hjdz">
                          <div class="form-item">
                            <Input v-model="queryForm.csd" ></Input>
                          </div>
                        </FormItem>
                      </Col> -->
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
      <Page :current="pageInfo.pageNum" :total="pageInfo.pages" :page-size="pageInfo.pageSize" @on-change="changePage"></Page>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
import { fetchFwjbxxList } from '@/api/cxtj/rycx'
import Dept from '@/components/Dept.vue'
export default {
  data () {
    return {
      spinShow: false,
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        pages: 0
      },
      queryForm: {},
      columns: [
        {
          title: '房屋地址',
          key: 'mlphxx',
          render: (h, params) => {
            let mlphxx = params.row.mlphxx
            return h(
              'Poptip',
              {
                props: {
                  trigger: 'hover',
                  placement: 'top-start',
                  content: mlphxx
                }
              },
              [h('span', mlphxx.length > 10 ? mlphxx.substring(6) : mlphxx)]
            )
          }
        },
        {
          title: '居村委名称',
          key: 'jcwmc'
        },
        {
          title: '派出所',
          key: 'pcsmc'
        },
        {
          title: '房主姓名',
          key: 'fzxm'
        },
        {
          title: '房主联系电话',
          key: 'fzlxdh'
        },
        {
          title: '房主证件号码',
          key: 'fzzjhm'
        },
        {
          title: '居住房屋类型',
          key: 'jzfwlxText'
        }
      ],
      data: []
    }
  },
  components: {
    Dept
  },
  methods: {
    search () {
      const _self = this
      _self.spinShow = true
      fetchFwjbxxList(this.pageInfo, this.queryForm)
        .then(response => {
          this.data = response.data.data.list
          this.pageInfo.pages = response.data.data.pages
          _self.spinShow = false
        })
        .catch(() => {
          _self.spinShow = false
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
.form-item {
  display: inline-block;
  width: 180px;
}
.ivu-form-item {
  margin-bottom: 5px;
}
</style>


