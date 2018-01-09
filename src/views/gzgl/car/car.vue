<template>
  <FormTable :columns="columns" :fetchList="search()">
    <Row slot="form">
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
      queryForm: {},
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

