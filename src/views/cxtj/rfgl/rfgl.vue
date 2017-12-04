<template>
  <div class="spin-col">
    <Row>
      <Col span="8">
      <Card>
        <Tabs type="card" v-model="cxTab">
          <Tab-pane label="房屋查询" name="fwcx">
            <Form :model="queryForm" :label-width="80">
              <Form-item label="路名">
                <Input v-model="queryForm.lm" placeholder="请输入"></Input>
              </Form-item>
              <Form-item label="门弄牌号">
                <Input v-model="queryForm.mnph" placeholder="请输入"></Input>
              </Form-item>
              <Form-item label="室号">
                <Input v-model="queryForm.sh" placeholder="请输入"></Input>
              </Form-item>
              <Form-item>
                <Button type="primary" @click="searchRfglFwAddress">搜索</Button>
                <Button type="ghost" style="margin-left: 8px">重置</Button>
              </Form-item>
            </Form>
          </Tab-pane>
          <Tab-pane label="房屋列表" name="fwlb">
            <Table :columns="columns" :data="data"></Table>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page v-show="data.length>0" :current="pageInfo.pageNum" :total="pageInfo.pages" :page-size="pageInfo.pageSize" @on-change="changePage"></Page>
              </div>
            </div>
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
          <div v-for="floor in fwxx.floors" :key="floor.index" class="floor">
            <Poptip trigger="hover" content="该房屋居住XX人">
              <div v-for="room in floor.rooms" :key="room.index" class="room" @click="showRoomDetail(room.dztzm)">
                <span>{{room.fwsh}}</span>
              </div>
            </Poptip>
          </div>
        </div>
        <Modal v-model="modal" title="房屋信息" @on-ok="ok" @on-cancel="cancel">
          <Tabs type="card">
            <Tab-pane label="人员列表" name="rylb">
              <Table :columns="room.jzryCloumns" :data="room.jzryData"></Table>
            </Tab-pane>
            <Tab-pane label="居住历史" name="jzls">
              <Table :columns="columns" :data="data"></Table>
            </Tab-pane>
          </Tabs>
        </Modal>
      </Card>
      </Col>
    </Row>
    <Spin v-show="loading" fix>
      <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
      <div>Loading</div>
    </Spin>
  </div>
</template>

<script>
import {
  fetchRfglFwAddress,
  fetchRfglFw,
  fetchRfglFwry
} from '@/api/cxtj/rfgl'
export default {
  data () {
    return {
      modal: false,
      cxTab: 'fwcx',
      loading: false,
      pageInfo: {
        pageNum: 1,
        pageSize: 5,
        pages: 0
      },
      queryForm: {},
      columns: [
        {
          title: '序号',
          key: 'xh',
          width: '80px'
        },
        {
          title: '地址',
          key: 'address',
          render: (h, params) => {
            let address = params.row.address
            return h(
              'span',
              address.substring(6)
            )
          }
        },
        {
          title: '操作',
          key: 'actionxh',
          width: '80px',
          render: (h, params) => {
            const _self = this
            return h(
              'Button',
              {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: function () {
                    _self.searchRfglFwxx(params.row.dztzm)
                  }
                }
              },
              '查看'
            )
          }
        }
      ],
      data: [],
      fwxx: [],
      room: {
        jzryCloumns: [
          {
            title: '序号',
            key: 'xh',
            width: '80px'
          },
          {
            title: '证件号码',
            key: 'zjhm'
          },
          {
            title: '居住地址',
            key: 'jzdz'
          }
        ],
        jzryData: []
      }
    }
  },
  methods: {
    ok () {
      // this.$Message.info('点击了确定')
    },
    cancel () {
      // this.$Message.info('点击了取消')
    },
    showRoomDetail (dztzm) {
      this.loading = true
      fetchRfglFwry(dztzm).then(response => {
        this.room.jzryData = response.data.data
        this.modal = true
        this.loading = false
      })
    },
    searchRfglFwAddress () {
      this.loading = true
      fetchRfglFwAddress(this.pageInfo, this.queryForm).then(response => {
        this.data = response.data.data.list
        this.pageInfo.pages = response.data.data.pages
        this.cxTab = 'fwlb'
        this.loading = false
      })
    },
    changePage (value) {
      this.pageInfo.pageNum = value
      this.searchRfglFwAddress()
    },
    searchRfglFwxx (dztzm) {
      this.loading = true
      fetchRfglFw(dztzm).then(response => {
        this.fwxx = response.data.data.fwxx
        this.loading = false
      })
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
        background-color: #8ac6f7;
        display: inline-flex;
        justify-content: center;
        align-items: center;
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

<style scoped>
.pin-icon-load {
  animation: ani-spin 1s linear infinite;
}
@keyframes ani-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spin-col {
  height: 100%;
  position: relative;
  border: 1px solid #eee;
}
</style>


