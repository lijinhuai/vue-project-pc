<template>
<div>
  <Card>
            <p slot="title">
                <Icon type="navicon"></Icon>
                检索条件
            </p>
            <div>
                <Form
                    ref="queryForm"
                    :model="queryForm"
                    :label-width="100"
                    label-position="right"
                    :rules="inforValidate"
                    inline
                >
                <Row>
                  <Col span="8">
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
                  </Col>
                  <Col span="8">
                    <FormItem label="房屋街路巷：" prop="bm">
                       <div class="form-item">
                        <Dept></Dept>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="门牌号：" prop="sfzh">
                       <div class="form-item">
                        <Input v-model="queryForm.sfzh" ></Input>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="幢楼号：" prop="bm">
                      <div class="form-item">
                        <Input v-model="queryForm.csd" ></Input>
                       </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="房屋室号：" prop="hjdz">
                      <div class="form-item">
                        <Input v-model="queryForm.hjdz" ></Input>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="日期：" prop="hjdz">
                      <div class="form-item">
                        <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width:180px">
                        </Date-picker>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="房主姓名：" prop="hjdz">
                      <div class="form-item">
                        <Input v-model="queryForm.csd" ></Input>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="房主证件：" prop="hjdz">
                      <div class="form-item">
                        <Input v-model="queryForm.csd" ></Input>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="居住人姓名：" prop="hjdz">
                      <div class="form-item">
                        <Input v-model="queryForm.csd" ></Input>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="居住人证件：" prop="hjdz">
                      <div class="form-item">
                        <Input v-model="queryForm.csd" ></Input>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="居住人户籍：" prop="hjdz">
                      <div class="form-item">
                        <Input v-model="queryForm.csd" ></Input>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="居住人性别：" prop="hjdz">
                      <div class="form-item">
                        <Select v-model="queryForm.mz" clearable>
                          <Option value="beijing">男</Option>
                          <Option value="shanghai">女</Option>
                        </Select>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="居住人民族：" prop="hjdz">
                      <div class="form-item">
                        <Select v-model="queryForm.mz" style="width:180px" clearable>
                          <Option value="beijing">汉族</Option>
                          <Option value="shanghai">维吾尔族</Option>
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
        <Row v-show="data.size>0">
          <Col span="12" offset="16">
           <Page :total="100"></Page>
          </Col>
        </Row>
        <Spin size="large" fix v-if="spinShow"></Spin>
        </div>
</template>
<script>
import Dept from '@/components/Dept.vue'
export default {
  data () {
    return {
      spinShow: false,
      queryForm: {
        xm: '',
        mz: ''
      },
      columns: [
        {
          title: '房屋地址',
          key: 'xm'
        },
        {
          title: '派出所',
          key: 'xb'
        },
        {
          title: '采集时间',
          key: 'mz'
        },
        {
          title: '民警',
          key: 'csrq'
        },
        {
          title: '房主姓名',
          key: 'sfzh'
        },
        {
          title: '房主证件号码',
          key: 'hjdz'
        },
        {
          title: '地址特征码',
          key: 'sqdm'
        },
        {
          title: '房屋结构',
          key: 'scsj'
        },
        {
          title: '房屋属性',
          key: 'csr'
        },
        {
          title: '房屋用途',
          key: 'mj'
        },
        {
          title: '房屋类型',
          key: 'ryzt'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render (row, column, index) {
            return `<i-button type="primary" size="small" @click="show(${index})">人房查询</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`
          }
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
      setTimeout(function () {
        _self.spinShow = false
      }, 1000 * 1)
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


