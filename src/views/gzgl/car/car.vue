<template>
  <FormTable :columns="columns" :fetchList="search()" :queryForm="queryForm">
    <Row slot="form">
      <Col span="8">
      <FormItem label="号牌号码：" prop="plateid">
        <div style="display:inline-block;width:180px;">
          <Input v-model="queryForm.plateid"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
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
      <Col span="8">
      <FormItem label="进入通道：" prop="inroadname">
        <div style="display:inline-block;width:180px;">
          <Input v-model="queryForm.inroadname"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="出场通道：" prop="outroadname">
        <div style="display:inline-block;width:180px;">
          <Input v-model="queryForm.outroadname"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="16">
      <FormItem label="进入时间：" prop="intimeArr">
        <Date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" @on-change="queryForm.intimeArr=$event" placement="bottom-start" placeholder="选择日期" style="width: 200%"></Date-picker>
      </FormItem>
      </Col>
      <Col span="16">
      <FormItem label="出场时间：" prop="outtimeArr">
        <Date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" @on-change="queryForm.outtimeArr=$event" placement="bottom-start" placeholder="选择日期" style="width: 200%"></Date-picker>
      </FormItem>
      </Col>
    </Row>
  </FormTable>
</template>

<script>
import FormTable from '@/components/FormTable.vue'
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
          key: 'intime'
        },
        {
          title: '进入通道',
          key: 'inroadname'
        },
        {
          title: '出场时间',
          key: 'outtime'
        },
        {
          title: '出场通道',
          key: 'outroadname'
        },
        {
          title: '小区名称',
          key: 'parkname'
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
  }
}
</script>

<style lang="less" scoped>
.ivu-form-item {
  margin-bottom: 5px;
}
</style>

