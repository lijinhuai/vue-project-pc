<template>
  <FormTable :columns="columns" :fetchList="search()" :queryForm="queryForm">
    <Row slot="form">
      <Col span="8">
      </Col>
      <Col span="8">
      <FormItem label="摄像头ID：" prop="camera_id">
        <div style="display:inline-block;width:180px;">
          <Input v-model="queryForm.camera_id"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="摄像头名称：" prop="name">
        <div style="display:inline-block;width:180px;">
          <Input v-model="queryForm.name"></Input>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="过人时间：" prop="searchDateArr">
        <Date-picker type="datetimerange" v-model="queryForm.searchDateArr" format="yyyy-MM-dd HH:mm" placement="bottom-start" placeholder="选择日期" style="width: 180px;"></Date-picker>
      </FormItem>
      </Col>
    </Row>
  </FormTable>
</template>

<script>
import FormTable from '@/components/FormTable.vue'
import { fetchFaceList } from '@/api/recognition/recognition'
export default {
  name: 'face',
  data () {
    return {
      queryForm: {},
      columns: [
        {
          title: '人脸照片ID',
          key: 'face_image_id'
        },
        {
          title: '摄像头ID',
          key: 'camera_id'
        },
        {
          title: '摄像头名称',
          key: 'name'
        },
        {
          title: '过人时间',
          key: 'time_begin'
        },
        {
          title: '性别',
          key: 'rec_gender'
        },
        {
          title: '年龄范围',
          key: 'rec_age_range'
        }
      ]
    }
  },
  components: {
    FormTable
  },
  methods: {
    search () {
      return fetchFaceList
    }
  }
}
</script>

<style lang="less" scoped>
.ivu-form-item {
  margin-bottom: 5px;
}
</style>

