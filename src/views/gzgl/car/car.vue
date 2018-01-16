<template>
  <!-- <FormTable :columns="columns" :fetchList="search()" :queryForm="queryForm" advanced>
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
      <FormItem label="过车时间：" prop="searchDateArr">
        <Date-picker ref="searchDate" type="datetimerange" format="yyyy-MM-dd HH:mm" :value="queryForm.searchDateArr" @on-change="queryForm.searchDateArr=$event" placement="bottom-start" placeholder="选择日期" style="width: 150%;"></Date-picker>
      </FormItem>
      </Col>
    </Row>
    <Row slot="advancedForm">
      <Col span="12">
      <FormItem label="进入通道：" prop="inroadname">
        <div style="display:inline-block;width:180px;">
          <Input v-model="queryForm.inroadname"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="12">
      <FormItem label="出场通道：" prop="outroadname">
        <div style="display:inline-block;width:180px;">
          <Input v-model="queryForm.outroadname"></Input>
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
  </FormTable> -->
  <FormCard :columns="columns" :fetchList="search()" :queryForm="queryForm">
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
      <FormItem label="过车时间：" prop="searchDateArr">
        <Date-picker ref="searchDate" type="datetimerange" format="yyyy-MM-dd HH:mm" :value="queryForm.searchDateArr" @on-change="queryForm.searchDateArr=$event" placement="bottom-start" placeholder="选择日期" style="width: 150%;"></Date-picker>
      </FormItem>
      </Col>
    </Row>
  </FormCard>
</template>

<script>
import FormTable from '@/components/FormTable.vue'
import FormCard from './components/FormCard.vue'
import Photo from '../components/Photo.vue'
import { fetchCarList } from '@/api/recognition/recognition'
export default {
  name: 'car',
  data () {
    return {
      queryForm: {
        searchDateArr: ['', ''],
        intimeArr: ['', ''],
        outtimeArr: ['', '']
      },
      columns: [
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
        },
        {
          title: '号牌号码',
          key: 'plateid',
          render: (h, params) => {
            var platecolor = params.row.platecolor
            var baseStyle = 'color: whitesmoke;font-size: 16px;padding: 5px;'
            var style = 'background-color: #0a5eef;'
            if (platecolor === '黄色') {
              style =
                baseStyle +
                'color: black !important;background-color: #ef910a;'
            } else {
              style = baseStyle + style
            }
            return h(
              'span',
              {
                attrs: {
                  style: style
                }
              },
              params.row.plateid
            )
          }
        },
        {
          title: '时间',
          key: 'tm',
          width: '180px;'
        },
        {
          title: '小区名称',
          key: 'parkname'
        }
      ]
    }
  },
  components: {
    FormTable,
    FormCard
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
    this.queryForm.searchDateArr = [start, end]
    this.$refs.searchDate.emitChange(this.queryForm.searchDateArr)
  }
}
</script>

