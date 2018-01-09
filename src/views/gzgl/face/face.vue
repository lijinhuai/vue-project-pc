<template>
  <FormTable :columns="columns" :fetchList="search()" :queryForm="queryForm">
    <Row slot="form">
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
      <FormItem label="年龄范围：" prop="rec_age_range">
        <div style="display:inline-block;width:180px;">
          <Select v-model="queryForm.rec_age_range" style="width:180px" filterable clearable>
            <Option value="0">小孩</Option>
            <Option value="1">青年</Option>
            <Option value="2">中年</Option>
            <Option value="3">老年</Option>
          </Select>
        </div>
      </FormItem>
      </Col>
      <Col span="8">
      <FormItem label="性别：" prop="rec_gender">
        <div style="display:inline-block;width:180px;">
          <Select v-model="queryForm.rec_gender" style="width:180px" filterable clearable>
            <Option value="1">男</Option>
            <Option value="2">女</Option>
          </Select>
        </div>
      </FormItem>
      </Col>
      <Col span="16">
      <FormItem label="过人时间：" prop="searchDateArr">
        <Date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" @on-change="queryForm.searchDateArr=$event" placement="bottom-start" placeholder="选择日期" style="width: 200%"></Date-picker>
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
      queryForm: {
        searchDateArr: ['', '']
      },
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

