<template>
  <FormTable ref="formTable" :columns="!showExportData ? columns : exportColumns" @beforeFetchList="beforeSearch" :fetchList="search()" :queryForm="queryForm" :onSelectionChange="onSelectionChange">
    <Row slot="form">
      <Col span="8">
      <FormItem label="单位简称：" prop="dwjc">
        <div class="form-item" style="width:180px;">
          <Input v-model="queryForm.dwjc"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="单位名称：" prop="dwmc">
        <div class="form-item" style="width:180px;">
          <Input v-model="queryForm.dwmc"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="经营地址：" prop="jydz">
        <div class="form-item" style="width:180px;">
          <Input v-model="queryForm.jydz"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="法人代表：" prop="frdb">
        <div class="form-item" style="width:180px;">
          <Input v-model="queryForm.frdb"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="法人证件号码：" prop="frzjhm">
        <div class="form-item" style="width:180px;">
          <Input v-model="queryForm.frzjhm"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="采集类型：" prop="cjlx">
        <div class="form-item" style="width:180px;">
          <Select v-model="queryForm.cjlx" filterable clearable>
                            <Option value="1">新增</Option>
                            <Option value="3">修改</Option>
                            <Option value="4">注销</Option>
                        </Select>
        </div>
      </FormItem>
      </Col>
    </Row>
    <Button slot="tableTop" type="primary" size="large" v-show="showExportData" @click="exportData()"><Icon type="ios-download-outline"></Icon> 导出XML</Button>
  </FormTable>
</template>

<script>
import config from '@/config/index'
import { fetchDwxxList, fetchExportXml } from '@/api/cxtj/dwcx'
import FormTable from '@/components/FormTable.vue'
import ImageView from '@/components/ImageView.vue'
import { Message } from 'element-ui'
export default {
  name: 'dwcx',
  data () {
    return {
      queryForm: {},
      data: [],
      columns: [
        {
          title: '图片',
          key: 'action',
          width: 80,
          render: (h, params) => {
            if (params.row.imageCnt === 0) {
              return h(
                'span',
                {
                  attrs: {
                    style: 'color:#9ea7b4;'
                  }
                },
                '无照片'
              )
            } else {
              return h(ImageView, {
                props: {
                  imageSrc:
                    config.BASE_API +
                    '/dwxx/' +
                    params.row.dwbh +
                    '/photo?Authorization=' +
                    this.$store.state.user.token
                }
              })
            }
          }
        },
        {
          title: '单位简称',
          key: 'dwjc',
          width: 130
        },
        {
          title: '单位名称',
          key: 'dwmc'
        },
        {
          title: '经营地址',
          key: 'jydz'
        },
        {
          title: '法人代表',
          key: 'frdb',
          width: 120
        },
        {
          title: '法人证件号码',
          key: 'frzjhm'
        },
        {
          title: '治安责任人',
          key: 'zazrr',
          width: 120
        },
        {
          title: '治安责任人联系电话',
          key: 'zazrrlxdh',
          width: 170
        },
        {
          title: '详情',
          key: 'action',
          width: 120,
          render: (h, params) => {
            return h(
              'Button',
              {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: function () {
                    var href = window.document.location.href
                    var pname = window.document.location.pathname
                    var pos = href.indexOf(pname)
                    var path = href.substring(0, pos)
                    window.open(path + '/#/company?dwbh=' + params.row.dwbh)
                  }
                }
              },
              '详情'
            )
          }
        }
      ],
      exportColumns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '图片',
          key: 'action',
          width: 80,
          render: (h, params) => {
            if (params.row.imageCnt === 0) {
              return h(
                'span',
                {
                  attrs: {
                    style: 'color:#9ea7b4;'
                  }
                },
                '无照片'
              )
            } else {
              return h(ImageView, {
                props: {
                  imageSrc:
                    config.BASE_API +
                    '/dwxx/' +
                    params.row.dwbh +
                    '/photo?Authorization=' +
                    this.$store.state.user.token
                }
              })
            }
          }
        },
        {
          title: '单位简称',
          key: 'dwjc',
          width: 130
        },
        {
          title: '单位名称',
          key: 'dwmc'
        },
        {
          title: '经营地址',
          key: 'jydz'
        },
        {
          title: '法人代表',
          key: 'frdb',
          width: 120
        },
        {
          title: '法人证件号码',
          key: 'frzjhm'
        },
        {
          title: '治安责任人',
          key: 'zazrr',
          width: 120
        },
        {
          title: '治安责任人联系电话',
          key: 'zazrrlxdh',
          width: 170
        },
        {
          title: '详情',
          key: 'action',
          width: 120,
          render: (h, params) => {
            return h(
              'Button',
              {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: function () {
                    var href = window.document.location.href
                    var pname = window.document.location.pathname
                    var pos = href.indexOf(pname)
                    var path = href.substring(0, pos)
                    window.open(path + '/#/company?dwbh=' + params.row.dwbh)
                  }
                }
              },
              '详情'
            )
          }
        }
      ],
      selection: {
        selectedDwbh: []
      },
      showExportData: false
    }
  },
  components: {
    FormTable,
    ImageView
  },
  mounted () {},
  methods: {
    search () {
      return fetchDwxxList
    },
    beforeSearch () {
      this.changeColumns()
    },
    onSelectionChange (selection) {
      this.selection.selectedDwbh = []
      for (let i in selection) {
        this.selection.selectedDwbh.push(selection[i].dwbh)
      }
    },
    exportData () {
      if (this.selection.selectedDwbh.length !== 0) {
        fetchExportXml(this.selection, this.queryForm.cjlx).then(response => {
          if (response.code === 200) {
            this.$refs.formTable.search()
            Message.success(response.message)
          } else {
            Message.error(response.message)
          }
        })
      }
    },
    changeColumns () {
      if (this.queryForm.cjlx === '1' || this.queryForm.cjlx === '3') {
        this.showExportData = true
      } else {
        this.showExportData = false
      }
    }
  }
}
</script>
