<template>
  <div>
    <Row>
      <Col span="9">
      <Card>
        <Tabs type="card" v-model="cxTab">
          <Tab-pane label="房屋查询" name="fwcx">
            <div style="margin-bottom:10px;text-align:center;">
              <Radio-group v-model="cxlb">
                <Radio label="tj">条件搜索</Radio>
                <Radio label="sfz">身份证号</Radio>
              </Radio-group>
            </div>
            <Form v-show="cxlb=='tj'" :model="queryForm" :label-width="80">
              <Form-item label="路名">
                <el-select v-model="queryForm.lm" filterable placeholder="请选择" style="width:100%">
                  <el-option v-for="item in roadDictList" :key="item.index" :label="item.value" :value="item.key">
                  </el-option>
                </el-select>
                <!-- <Input v-model="queryForm.lm" placeholder="请输入"></Input> -->
              </Form-item>
              <Form-item label="门弄牌号">
                <Input v-model="queryForm.mnph" placeholder="请输入"></Input>
              </Form-item>
              <Form-item label="室号">
                <Input v-model="queryForm.sh" placeholder="请输入"></Input>
              </Form-item>
              <Form-item>
                <Button type="primary" @click="btnSearchRfglRoom">搜索</Button>
                <Button type="ghost" @click="clearSearchRfglRoom" style="margin-left: 8px">重置</Button>
              </Form-item>
            </Form>
            <Form v-show="cxlb=='sfz'" :model="queryForm" :label-width="80">
              <Form-item label="身份证号">
                <Input v-model="queryForm.sfzh" placeholder="请输入"></Input>
              </Form-item>
              <Form-item>
                <Button type="primary" @click="btnSearchRfglRoom">搜索</Button>
                <Button type="ghost" @click="clearSearchRfglRoom" style="margin-left: 8px">重置</Button>
              </Form-item>
            </Form>
          </Tab-pane>
          <Tab-pane label="房屋列表" name="fwlb">
            <Table :columns="columns" :data="data"></Table>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page v-show="data.length>0" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" @on-change="changePage"></Page>
              </div>
            </div>
          </Tab-pane>
        </Tabs>
      </Card>
      </Col>
      <Col span="15">
      <Card class="house">
        <Affix :offset-top="130">
          <el-dropdown style="position:absolute;right:10px;">
            <el-button type="primary">
              人员标签<i class="el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="rybq in rybqDictList" :key="rybq.index">
                <div class="rybq" :class="rybq.value2" @click="showThisTybq(rybq.value2)">{{rybq.value}}</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </Affix>
        <div class="house-head">
          <div class="head head1"></div>
          <div class="head head4"></div>
          <div class="head head3"></div>
          <div class="head head4"></div>
          <div class="head head2"></div>
        </div>
        <div class="house-body">
          <div class="body-head">{{ house.address }}</div>
          <div class="floor" v-for="floor in house.floors" :key="floor.index">
            <template v-if="floor.rooms.length>0">
                                    <div class="room room_info" v-for="room in floor.rooms" :key="room.index" @click="showRoomDetail(room.fwbm)" :class="{room_active:room.cxfwbj==1,
                                                    room_rhyz:room.flagRhfl==0,
                                                    room_rhfl:room.flagRhfl==1,
                                                    room_rhyz_czfw:room.flagRhfl==0 && room.jzfwlx=='01',
                                                    room_rhfl_czfw:room.flagRhfl==1 && room.jzfwlx=='01'
                                      }">
                                      <div v-for="rybq in room.rybqList" :key="rybq.index" class="rybq_room" :class="rybq.colorPng"></div>
                                      <span>{{ room.houseRoomNum }}</span>
                                      <Poptip trigger="hover" :content="room.jzrsTip">
                                        <Badge class-name="badge-jzrs" :count="room.jzrs"></Badge>
                                      </Poptip>
                                    </div>
</template>

<template v-else>
  <div class="room room_wcdz">
  </div>
</template>
          </div>
          <div class="body-footer">
            <div class="box box_wcdz">未采地址</div>
            <div class="box box_rhyz">人户一致</div>
            <div class="box box_rhfl">人户分离</div>
            <div class="box box_czfw">出租房屋</div>
          </div>
        </div>
        <Modal v-model="modal" title="房屋信息" width="80%" @on-ok="ok" @on-cancel="cancel">
          <Tabs v-model="roomTab" type="card">
            <Tab-pane label="人员列表" name="rylb">
              <Table :columns="room.jzryCloumns" :data="room.jzryData"></Table>
            </Tab-pane>
            <Tab-pane label="居住历史" name="jzls">
              <Table :columns="room.jzryCloumns" :data="room.lsjzryData"></Table>
            </Tab-pane>
            <Tab-pane label="电力数据" name="dlsj">
              <div style="height:350px;">
                <Dlsj ref="dlsj" :data="room.dlsjData"></Dlsj>
              </div>
            </Tab-pane>
            <Tab-pane label="用水数据" name="yssj">
              <Yssj ref="yssj" :data="room.zlssjData"></Yssj>
            </Tab-pane>
          </Tabs>
          <div slot="footer">
            <Button type="primary" @click="modal=false" size="large">确定</Button>
          </div>
        </Modal>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import {
  fetchRfglRoom,
  fetchRfglHouse,
  fetchRfglRPerson,
  fetchRfglRHisPerson,
  fetchZlssj,
  fetchDlsj
} from '@/api/cxtj/rfgl'

import PersonPhoto from './components/PersonPhoto.vue'
import Dlsj from './components/Dlsj.vue'
import Yssj from './components/Yssj.vue'
import Rybq from './components/Rybq.vue'
export default {
  name: 'rfgl',
  data () {
    return {
      rybqDictList: [],
      roadDictList: [],
      modal: false,
      roomTab: '',
      cxTab: 'fwcx',
      cxlb: 'tj',
      pageInfo: {
        pageNum: 1,
        pageSize: 8,
        total: 0
      },
      queryForm: {
        lm: '',
        mnph: '',
        sh: '',
        sfzh: '',
        mlphbm: ''
      },
      columns: [
        {
          title: '序号',
          key: 'xh',
          width: 80
        },
        {
          title: '地址',
          key: 'address',
          render: (h, params) => {
            const _self = this
            let address = params.row.address
            return h(
              'span',
              {
                on: {
                  click: function () {
                    _self.searchRfglHouse(params.row.fwbm, true)
                  }
                },
                attrs: {
                  style: 'cursor:pointer;'
                }
              },
              address.substring(6)
            )
          }
        },
        {
          title: '操作',
          key: 'actionxh',
          width: 80,
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
                    _self.showRoomDetail(params.row.fwbm)
                    _self.searchRfglHouse(params.row.fwbm, false)
                  }
                }
              },
              '查看'
            )
          }
        }
      ],
      data: [],
      house: {},
      room: {
        jzryCloumns: [
          {
            title: '序号',
            key: 'xh',
            width: 80,
            render: (h, params) => {
              return h('span', params.index + 1)
            }
          },
          {
            title: '标签',
            key: 'rybq',
            width: 100,
            // <div class="rybq rybq_sk" @click="showThisTybq('sk')">涉恐</div>
            render: (h, params) => {
              return h(Rybq, {
                props: {
                  rybqList: params.row.rybqList
                }
              })
            }
          },
          {
            title: '照片',
            key: 'photo',
            width: 80,
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
                  '无照片'
                )
              } else {
                return h(PersonPhoto, {
                  props: {
                    uploadList: params.row.photoList,
                    rylb: params.row.syrklbdm
                  }
                })
              }
            }
          },
          {
            title: '人员类别',
            key: 'syrklbhz',
            width: 100
          },
          {
            title: '姓名',
            key: 'xm',
            width: 100
          },
          {
            title: '证件号码',
            key: 'zjhm',
            width: 200
          },
          {
            title: '服务处所',
            key: 'fwcs',
            width: 100
          },
          {
            title: '户籍地址',
            key: 'hjdz'
          },
          {
            title: '操作',
            key: 'action',
            width: 100,
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
                      let routeData = _self.$router.resolve({
                        name: 'archive',
                        query: { zjhm: params.row.zjhm }
                      })
                      window.open(routeData.href, '_blank')
                    }
                  }
                },
              '一人一档'
            )
            }
          }
        ],
        jzryData: [],
        lsjzryData: [],
        dlsjData: {},
        zlssjData: {}
      },
      loadRoomDetailFlag: 0
    }
  },
  components: {
    PersonPhoto,
    Dlsj,
    Yssj,
    Rybq
  },
  created () {},
  mounted () {
    if (localStorage.getItem('rybqDictList')) {
      this.rybqDictList = JSON.parse(localStorage.getItem('rybqDictList'))
    }
    if (localStorage.getItem('roadDictList')) {
      this.roadDictList = JSON.parse(localStorage.getItem('roadDictList'))
    }
  },
  activated () {
    this.initQuery()
  },
  methods: {
    initQuery () {
      let zjhm = this.$route.params.zjhm
      if (zjhm) {
        this.cxlb = 'sfz'
        this.queryForm.sfzh = zjhm
        this.searchRfglRoom()
      }
      let fwbm = this.$route.params.fwbm
      if (fwbm) {
        this.queryForm.fwbm = fwbm
        this.searchRfglRoom()
      }
      let mlphbm = this.$route.query.mlphbm
      if (mlphbm) {
        this.queryForm.mlphbm = mlphbm
        this.searchRfglRoom()
      }
    },
    showRoomDetail (fwbm) {
      this.roomTab = 'rylb'
      if (this.loadRoomDetailFlag === 1) {
        return
      }
      this.loadRoomDetailFlag = 1
      fetchRfglRPerson(fwbm)
        .then(response => {
          this.room.jzryData = response.data
          this.modal = true
          this.loadRoomDetailFlag = 0
        })
        .catch(() => {
          this.loadRoomDetailFlag = 0
        })
      fetchRfglRHisPerson(fwbm)
        .then(response => {
          this.room.lsjzryData = response.data
        })
        .catch(() => {})
      this.room.dlsjData = {}
      fetchDlsj(fwbm)
        .then(response => {
          this.room.dlsjData = response.data
          setTimeout(() => {
            this.$refs.dlsj.showChart()
            var e = document.createEvent('Event')
            e.initEvent('resize', true, true)
            window.dispatchEvent(e)
          })
        })
        .catch(() => {})

      this.room.zlssjData = {}
      fetchZlssj(fwbm)
        .then(response => {
          this.room.zlssjData = response.data
          setTimeout(() => {
            this.$refs.yssj.showChart()
            var e = document.createEvent('Event')
            e.initEvent('resize', true, true)
            window.dispatchEvent(e)
          })
        })
        .catch(() => {})
    },
    btnSearchRfglRoom () {
      this.queryForm.fwbm = ''
      this.queryForm.mlphbm = ''
      this.searchRfglRoom()
    },
    searchRfglRoom () {
      this.house = {}
      fetchRfglRoom(this.pageInfo, this.queryForm)
        .then(response => {
          this.data = response.data.list
          this.pageInfo.total = response.data.total
          this.cxTab = 'fwlb'
        })
        .catch(() => {})
    },
    clearSearchRfglRoom () {
      this.queryForm = {}
    },
    changePage (value) {
      this.pageInfo.pageNum = value
      this.searchRfglRoom()
    },
    ok () {},
    cancel () {},
    searchRfglHouse (fwbm, appLoading) {
      fetchRfglHouse(fwbm, appLoading)
        .then(response => {
          this.house = response.data
        })
        .catch(() => {})
    },
    showThisTybq (rybq) {
      var allObjArr = document.getElementsByClassName('rybq_room')
      for (var i = 0; i < allObjArr.length; i++) {
        allObjArr[i].style.display = 'none'
      }
      var thisObjArr = document.getElementsByClassName('rybq_room ' + rybq)
      for (var j = 0; j < thisObjArr.length; j++) {
        thisObjArr[j].style.display = 'inline'
      }
    }
  },
  watch: {
    cxlb (newVal, oldVal) {
      if (newVal === 'tj') {
        this.queryForm.sfzh = ''
      } else {
        this.queryForm.lm = ''
        this.queryForm.mnph = ''
        this.queryForm.sh = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "./rybq.less";
@wcdz: #ffffff;
@rhyz: #54ff9f;
@rhfl: #daa520;
@czfw: tomato;
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
    .body-footer {
      margin-top: 10px;
      width: 364px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      .box {
        width: 100%;
        height: 100%;
        margin: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #dcd7d7;
        &_wcdz {
          background-color: @wcdz;
        }
        &_rhyz {
          background-color: @rhyz;
        }
        &_rhfl {
          background-color: @rhfl;
        }
        &_czfw {
          background-color: @czfw;
        }
      }
    }
    .floor {
      display: flex;
      justify-content: center;
      width: 368px;
      height: 80px;
      .room {
        width: 100%;
        height: 100%;
        background-color: #8ac6f7;
        border: 2px solid #d7dde4;
        margin: 3px;
        transition: all 0.3s;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &:hover {
          transform: scale(1.1);
          background-color: greenyellow;
          cursor: pointer;
        }
        &_active {
          animation: spangled 1.5s infinite;
          border: #fa9255 2px solid;
          box-shadow: inset 0 -5px 8px -7px rgba(81, 81, 81, 0.8); // background-color: #fa9255;
          @keyframes spangled {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        }
        &_wcdz {
          background-color: @wcdz;
        }
        &_rhyz {
          background-color: @rhyz;
        }
        &_rhyz_czfw {
          background: linear-gradient(45deg, @rhyz 50%, @czfw 50%);
        }
        &_rhfl {
          background-color: @rhfl;
        }
        &_rhfl_czfw {
          background: linear-gradient(45deg, @rhfl 50%, @czfw 50%);
        }
        &_czfw {
          background-color: @czfw;
        }
      }
    }
  }
} // .rybq {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   float: left; // display: inline-flex;
//   // justify-content: center;
//   // align-items: center;
// }
.rybq {
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position-y: 8px;
  padding-left: 25px;
  &_room {
    width: 32px;
    height: 32px;
    background-size: 32px 32px;
    background-repeat: no-repeat;
    display: none;
    position: absolute;
    top: 5px;
    left: 5px;
  }
}
</style>

<style>
.badge-jzrs {
  background: #5cb85c !important;
  position: absolute;
  top: 10px;
  right: 5px;
}
</style>


