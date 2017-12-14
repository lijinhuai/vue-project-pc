<template>
  <div>
    <Card>
      <p slot="title">
        <Icon type="navicon"></Icon>
        检索条件
      </p>
      <div>
        <Form ref="queryForm" :model="queryForm" :label-width="100" label-position="right" inline>
          <Row>
            <Col span="8">
            <FormItem label="路名：" prop="lm">
              <div class="form-item">
                <Input v-model="queryForm.lm"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="门弄牌号：" prop="mnph">
              <div class="form-item">
                <Input v-model="queryForm.mnph"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="室号：" prop="sh">
              <div class="form-item">
                <Input v-model="queryForm.sh"></Input>
              </div>
            </FormItem>
            </Col>
            <FormItem label="门牌类型：" prop="mplx">
              <div class="form-item">
                <Select v-model="queryForm.mplx" style="width:180px" filterable clearable>
                                        <Option v-for="dict in dictList.mlplx" :key="dict.index" :value="dict.key">{{dict.value}}</Option>
                                      </Select>
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
        </Form>
      </div>
    </Card>
    <div v-show="data.length>0">
      <Table size="small" :columns="columns" :data="data">
      </Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
    <Modal v-model="modal" title="门牌申请" :styles="{top: '0px'}" width="80%">
      <Row>
        <Col span="24">
        <Card class="house">
          <div class="house-head">
            <div class="head head1"></div>
            <div class="head head4"></div>
            <div class="head head3"></div>
            <div class="head head4"></div>
            <div class="head head2"></div>
          </div>
          <div class="house-body">
            <div class="body-head">{{house.address}}</div>
            <div class="floor" v-for="floor in house.floors" :key="floor.index">
              <div class="room" v-for="room in floor.rooms" :key="room.index" v-bind:class="{room_notconfirm:room.sfconfirm!=1,room_isconfirm:room.sfconfirm==1}">
                <template v-if="room.ifconfirm==false">

                </template>
                <span>{{room.houseRoomNum}}</span>
                <span v-if="room.sfconfirm==1">地址已确认</span>
                <span v-else>地址未确认</span>
              </div>
            </div>
          </div>
        </Card>
        <Card style="text-align:center;">
          <Form :label-width="80" inline>
            <Form-item label="是否申请">
              <i-switch :disabled="!canSq" v-model="switchVal" size="large">
                <span slot="open">申请</span>
                <span slot="close">取消</span>
              </i-switch>
            </Form-item>
            <Form-item v-show="switchVal" label="号楼数">
              <Input-number :max="10" :min="1" v-model="hlsVal"></Input-number>
            </Form-item>
          </Form>
        </Card>
        </Col>
      </Row>
      <div slot="footer">
        <Button type="ghost" @click="modal=false" size="large">取消</Button>
        <Button type="primary" :disabled="!switchVal" @click="modal=false" size="large">提交</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { fetchDictList } from '@/api/dict'
import { fetchAddressInfoList } from '@/api/address/address'
import { fetchRfglHouse } from '@/api/cxtj/rfgl'
import Dept from '@/components/Dept.vue'
export default {
  name: 'mpsq',
  data () {
    return {
      dictList: {
        mlplx: []
      },
      spinShow: false,
      modal: false,
      switchVal: false,
      canSq: true,
      hlsVal: 1,
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      queryForm: {},
      columns: [
        {
          title: '地址',
          key: 'dz'
          // render: (h, params) => {
          //   let address = params.row.mlphxx + params.row.sh
          //   return h(
          //       'Poptip', {
          //         props: {
          //           trigger: 'hover',
          //           placement: 'top-start',
          //           content: address
          //         }
          //       }, [h('span', address.length > 10 ? address.substring(6) : address)]
          //     )
          // }
        },
        {
          title: '所属社区',
          key: 'jcwmc',
          width: '120px'
        },
        {
          title: '所属责任区',
          key: 'pcsmc',
          width: '120px'
        },
        {
          title: '操作',
          key: 'action',
          width: '120px',
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
                  click: () => {
                    _self.openMpSq(params.row.dztzm)
                  }
                }
              },
              '门牌申请'
            )
          }
        }
      ],
      data: [],
      house: {}
    }
  },
  components: {
    Dept
  },
  mounted () {
    this.initDict()
  },
  methods: {
    search () {
      const _self = this
      _self.spinShow = true
      fetchAddressInfoList(this.pageInfo, this.queryForm)
        .then(response => {
          this.data = response.data.data.list
          this.pageInfo.total = response.data.data.total
          _self.spinShow = false
        })
        .catch(() => {
          _self.spinShow = false
        })
    },
    changePage (value) {
      this.pageInfo.pageNum = value
      this.search()
    },
    initDict () {
      const _self = this
      fetchDictList('MLPLX').then(response => {
        _self.dictList.mlplx = response.data
      })
    },
    openMpSq (dztzm) {
      const _self = this
      _self.canSq = true
      _self.switchVal = false
      _self.hlsVal = 1
      this.spinShow = true
      fetchRfglHouse(dztzm)
        .then(response => {
          this.house = response.data.data
          this.house.floors.map((floor) => {
            floor.rooms.map((room) => {
              console.log(room.sfconfirm)
              if (room.sfconfirm !== '1') {
                _self.canSq = false
              }
            })
          })

          this.spinShow = false
          this.modal = true
        })
        .catch(() => {
          this.spinShow = false
          this.error()
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
    display: flex;
    flex-direction: column;
    align-items: center;
    .body-head {
      width: 364px;
      height: 25px;
      background-color: #dcd7d7;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .floor {
      display: flex;
      justify-content: center;
      width: 368px;
      height: 70px;
      .room {
        width: 100%;
        height: 100%;
        background-color: #8ac6f7;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 2px solid #d7dde4;
        margin: 3px;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.1);
          // background-color: greenyellow;
        }
        &_notconfirm {
          background-color: #f38e7e;
        }
        &_isconfirm {
          background-color: #aede95;
        }
      }
    }
  }
}
</style>

<style lang="less" scoped>
.form-item {
  display: inline-block;
  width: 180px;
}
.ivu-form-item {
  margin-bottom: 5px;
}
</style>


