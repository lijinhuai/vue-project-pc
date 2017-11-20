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
                    <FormItem label="姓名：" prop="xm">
                      <div style="display:inline-block;width:180px;">
                        <Input v-model="queryForm.xm" ></Input>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="民族：" prop="mz">
                      <div style="display:inline-block;width:180px;">
                        <Select v-model="queryForm.mz" style="width:180px" clearable>
                          <Option value="beijing">汉族</Option>
                          <Option value="shanghai">维吾尔族</Option>
                        </Select>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="部门：" prop="bm">
                      <div style="display:inline-block;width:180px;">
                        <Dept></Dept>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="公民身份证号：" prop="sfzh">
                      <div style="display:inline-block;width:180px;">
                        <Input v-model="queryForm.sfzh" ></Input>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="日期：" prop="bm">
                      <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 180px">
                      </Date-picker>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="户籍地址：" prop="hjdz">
                      <div style="display:inline-block;width:180px;">
                        <Input v-model="queryForm.hjdz" ></Input>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span="8">
                    <FormItem label="出生地：" prop="hjdz">
                      <div style="display:inline-block;width:180px;">
                        <Input v-model="queryForm.csd" ></Input>
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
          title: '姓名',
          key: 'xm'
        },
        {
          title: '性别',
          key: 'xb'
        },
        {
          title: '民族',
          key: 'mz'
        },
        {
          title: '出生日期',
          key: 'csrq'
        },
        {
          title: '公民身份证号码',
          key: 'sfzh'
        },
        {
          title: '户籍地址',
          key: 'hjdz'
        },
        {
          title: '社区代码',
          key: 'sqdm'
        },
        {
          title: '上传时间',
          key: 'scsj'
        },
        {
          title: '采集人',
          key: 'csr'
        },
        {
          title: '民警',
          key: 'mj'
        },
        {
          title: '人员状态',
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
.ivu-form-item {
  margin-bottom: 5px;
}
</style>


