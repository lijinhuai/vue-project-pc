<template>
  <Row>
    <Col span="8">
    <Card>
      <Tabs type="card">
        <Tab-pane label="房屋查询" name="fwcx">
          <Form :model="formItem" :label-width="80">
            <Form-item label="路名">
              <Input v-model="formItem.input" placeholder="请输入"></Input>
            </Form-item>
            <Form-item label="门弄牌号">
              <Input v-model="formItem.input" placeholder="请输入"></Input>
            </Form-item>
            <Form-item label="室号">
              <Input v-model="formItem.input" placeholder="请输入"></Input>
            </Form-item>
            <Form-item>
              <Button type="primary">搜索</Button>
              <Button type="ghost" style="margin-left: 8px">重置</Button>
            </Form-item>
          </Form>
        </Tab-pane>
        <Tab-pane label="房屋列表" name="fwlb">
          <Table :columns="columns" :data="data"></Table>
        </Tab-pane>
      </Tabs>
    </Card>
    </Col>
    <Col span="15" offset="1">
    <Card class="house">
      <div class="house-head">
        <div class="head head1"></div>
        <div class="head head4"></div>
        <div class="head head3"></div>
        <div class="head head4"></div>
        <div class="head head2"></div>
      </div>
      <div class="house-body">
        <div v-for="n in 5" :key="n.index" class="floor">
          <Poptip trigger="hover" content="该房屋居住XX人">
            <div v-for="n in 2" :key="n.index" class="room" @click="showRoomDetail">
            </div>
          </Poptip>
        </div>
      </div>
      <Modal v-model="modal" title="房屋信息" @on-ok="ok" @on-cancel="cancel">
        <Tabs type="card">
          <Tab-pane label="人员列表" name="rylb">
            <Table :columns="columns" :data="data"></Table>
          </Tab-pane>
          <Tab-pane label="居住历史" name="jzls">
            <Table :columns="columns" :data="data"></Table>
          </Tab-pane>
        </Tabs>
      </Modal>
    </Card>
    </Col>
  </Row>
</template>

<script>
  export default {
    data () {
      return {
        modal: false,
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        },
        columns: [{
          title: '序号',
          key: 'xh',
          width: '100px'
        },
        {
          title: '地址',
          key: 'address'
        }
        ],
        data: []
      }
    },
    methods: {
      ok () {
        this.$Message.info('点击了确定')
      },
      cancel () {
        this.$Message.info('点击了取消')
      },
      showRoomDetail () {
        this.modal = true
      }
    }
  }
</script>

<style lang="less" scoped>
  .house {
    .house-head {
      display: flex;
      justify-content: center;
      .head {
        width: 77px;
        height: 81px;
        display: inline-block;
      }
      .head1 {
        background-image: url("~@/images/rfgl/wd1.png");
      }
      .head2 {
        background-image: url("~@/images/rfgl/wd2.png");
      }
      .head3 {
        width: 156px;
        background-image: url("~@/images/rfgl/wd3.png");
      }
      .head4 {
        background-image: url("~@/images/rfgl/wd4.png");
      }
    }
    .house-body {
      .floor {
        display: flex;
        justify-content: center;
        .room {
          width: 180px;
          height: 80px;
          background-color: #9ea7b4;
          display: inline-block;
          border: 2px solid #d7dde4;
          margin: 3px;
          transition: all 0.3s;
          &:hover {
            width: 185px;
            height: 85px;
            margin: 0px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>

