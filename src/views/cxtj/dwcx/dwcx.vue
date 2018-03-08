<template>
  <FormTable :columns="columns" :fetchList="search()" :queryForm="queryForm">
    <Row slot="form">
      <Col span="8">
      <FormItem label="单位简称：" prop="dwjc">
        <div class="form-item">
          <Input v-model="queryForm.dwjc"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="单位名称：" prop="dwmc">
        <div class="form-item">
          <Input v-model="queryForm.dwmc"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="经营地址：" prop="jydz">
        <div class="form-item">
          <Input v-model="queryForm.jydz"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="法人代表：" prop="frdb">
        <div class="form-item">
          <Input v-model="queryForm.frdb"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="法人证件号码：" prop="frzjhm">
        <div class="form-item">
          <Input v-model="queryForm.frzjhm"></Input>
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
  </FormTable>
</template>

<script>
import config from '@/config/index'
import { fetchDwxxList } from '@/api/cxtj/dwcx'
import FormTable from '@/components/FormTable.vue'
import ImageView from '@/components/ImageView.vue'
export default {
  name: 'dwcx',
  data () {
    return {
      queryForm: {},
      columns: [
        {
          title: '图片',
          key: 'action',
          width: '80px',
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
          width: '130px'
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
          width: '120px'
        },
        {
          title: '法人证件号码',
          key: 'frzjhm'
        },
        {
          title: '治安责任人',
          key: 'zazrr',
          width: '120px'
        },
        {
          title: '治安责任人联系电话',
          key: 'zazrrlxdh',
          width: '170px'
        },
        {
          title: '详情',
          key: 'action',
          width: '120px',
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
      data: []
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
    }
  }
}
</script>
