<template>
  <FormTable :columns="columns" :fetchList="search()" :queryForm="queryForm">
    <Row slot="form">
      <Col span="12">
      <FormItem label="号牌号码：" prop="plateid">
        <div style="display:inline-block;width:180px;">
          <Input v-model="queryForm.plateid"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="12">
      <FormItem label="号牌颜色：" prop="platecolor">
        <div style="display:inline-block;width:180px;">
          <Select v-model="queryForm.platecolor" style="width:180px" filterable clearable>
                    <Option value="蓝色">蓝色</Option>
                    <Option value="黄色">黄色</Option>
                    <Option value="绿色">绿色</Option>
                    <Option value="白色">白色</Option>
                    <Option value="其他">其他</Option>
                  </Select>
        </div>
      </FormItem>
      </Col>
      <Col span="12">
      <FormItem label="进入时间：" prop="intimeArr">
        <Date-picker ref="intime" type="datetimerange" format="yyyy-MM-dd HH:mm" :value="queryForm.intimeArr" @on-change="queryForm.intimeArr=$event" placement="bottom-start" placeholder="选择日期" style="width: 150%;"></Date-picker>
      </FormItem>
      </Col>
      <Col span="12">
      <FormItem label="出场时间：" prop="outtimeArr">
        <Date-picker ref="outtime" type="datetimerange" format="yyyy-MM-dd HH:mm" :value="queryForm.outtimeArr" @on-change="queryForm.outtimeArr=$event" placement="bottom-start" placeholder="选择日期" style="width: 150%;"></Date-picker>
      </FormItem>
      </Col>
    </Row>
  </FormTable>
</template>

<script>
import FormTable from '@/components/FormTable.vue'
import Photo from '../components/Photo.vue'
import { fetchCarList } from '@/api/recognition/recognition'
export default {
  name: 'face',
  data () {
    return {
      queryForm: {
        intimeArr: ['', ''],
        outtimeArr: ['', '']
      },
      columns: [
        {
          title: '号牌号码',
          key: 'plateid'
        },
        {
          title: '号牌颜色',
          key: 'platecolor'
        },
        {
          title: '进入时间',
          key: 'intime',
          width: '180px;'
        },
        {
          title: '进入通道',
          key: 'inroadname'
        },
        {
          title: '出场时间',
          key: 'outtime',
          width: '180px;'
        },
        {
          title: '出场通道',
          key: 'outroadname'
        },
        {
          title: '小区名称',
          key: 'parkname'
        },
        {
          title: '图片',
          key: 'action',
          render: (h, params) => {
            if (
              params.row.photoList == null ||
              params.row.photoList.length === 0
            ) {
              return h(
                'span',
                {
                  attrs: {
                    style: 'color:#9ea7b4'
                  }
                },
                '暂无照片'
              )
            } else {
              return h(Photo, {
                props: {
                  uploadList: params.row.photoList
                }
              })
            }
          }
        }
      ]
    }
  },
  components: {
    FormTable
  },
  methods: {
    search () {
      return fetchCarList
    }
  },
  mounted () {
    const start = new Date(new Date(new Date().toLocaleDateString()).getTime())
    const end = new Date(
      new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000
    )
    this.queryForm.intimeArr = [start, end]
    this.$refs.intime.emitChange(this.queryForm.intimeArr)
    this.queryForm.outtimeArr = [start, end]
    this.$refs.outtime.emitChange(this.queryForm.outtimeArr)
  }
}
</script>

<style lang="less" scoped>
.ivu-form-item {
  margin-bottom: 5px;
}
</style>

