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
                <Input v-model="queryForm.lm" placeholder="请输入"></Input>
              </Form-item>
              <Form-item label="门弄牌号">
                <Input v-model="queryForm.mnph" placeholder="请输入"></Input>
              </Form-item>
              <Form-item label="室号">
                <Input v-model="queryForm.sh" placeholder="请输入"></Input>
              </Form-item>
              <Form-item>
                <Button type="primary" @click="searchRfglRoom">搜索</Button>
                <Button type="ghost" @click="clearSearchRfglRoom" style="margin-left: 8px">重置</Button>
              </Form-item>
            </Form>
            <Form v-show="cxlb=='sfz'" :model="queryForm" :label-width="80">
              <Form-item label="身份证号">
                <Input v-model="queryForm.sfzh" placeholder="请输入"></Input>
              </Form-item>
              <Form-item>
                <Button type="primary" @click="searchRfglRoom">搜索</Button>
                <Button type="ghost" @click="clearSearchRfglRoom" style="margin-left: 8px">重置</Button>
              </Form-item>
            </Form>
          </Tab-pane>
          <Tab-pane label="房屋列表" name="fwlb">
            <Table :columns="columns" :data="data" @on-row-click="onRowClick"></Table>
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
        <el-dropdown style="position:absolute;right:10px;">
          <el-button type="primary">
            图例<i class="el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div class="rybq rybq_sk">涉恐</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="rybq rybq_sw">涉稳</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="rybq rybq_xsqk">刑事前科</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="rybq rybq_jsb">精神病</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="rybq rybq_zdsf">重点上访</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="rybq rybq_czcsj">出租车司机</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="rybq rybq_hwzm">回、维、藏民</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="rybq rybq_gbzdry">国保重点人员</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="rybq rybq_sd">涉毒</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="rybq rybq_fzry">犯罪人员</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="rybq rybq_hcsj">货车司机</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="rybq rybq_jwry">境外人员</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
                          <div class="room room_info" v-for="room in floor.rooms" :key="room.index" @click="showRoomDetail(room.dztzm)" :class="{room_active:room.cxfwbj==1,
                                          room_rhyz:room.flagRhfl==0,
                                          room_rhfl:room.flagRhfl==1,
                                          room_rhyz_czfw:room.flagRhfl==0 && room.jzfwlx=='01',
                                          room_rhfl_czfw:room.flagRhfl==1 && room.jzfwlx=='01'
                            }">
                              <span>{{ room.houseRoomNum }}</span>
                              <Poptip trigger="hover" :content="room.jzrsTip">
                                <Badge class-name="badge-jzrs" :count="room.jzrs"></Badge>
                              </Poptip>
                            <!-- <div class="room_rybq" v-for="room in floor.rooms" :key="room.index">
                              <div class="rybq_room rybq_sk"></div>
                              <div class="rybq_room rybq_sw"></div>
                          </div> -->
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
          <Tabs type="card">
            <Tab-pane label="人员列表" name="rylb">
              <Table :columns="room.jzryCloumns" :data="room.jzryData"></Table>
            </Tab-pane>
            <Tab-pane label="居住历史" name="jzls">
              <Timeline>
                <Timeline-item>
                  <p class="time">1976年</p>
                  <p class="content">Apple I 问世</p>
                </Timeline-item>
                <Timeline-item>
                  <p class="time">1984年</p>
                  <p class="content">发布 Macintosh</p>
                </Timeline-item>
                <Timeline-item>
                  <p class="time">2007年</p>
                  <p class="content">发布 iPhone</p>
                </Timeline-item>
                <Timeline-item>
                  <p class="time">2010年</p>
                  <p class="content">发布 iPad</p>
                </Timeline-item>
                <Timeline-item>
                  <p class="time">2011年10月5日</p>
                  <p class="content">史蒂夫·乔布斯去世</p>
                </Timeline-item>
              </Timeline>
            </Tab-pane>
            <Tab-pane label="电力数据" name="dlsj">
              <Dlsj ref="dlsj"></Dlsj>
            </Tab-pane>
            <Tab-pane label="用水数据" name="yssj">
              <Yssj ref="yssj"></Yssj>
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
  fetchRfglRPerson
} from '@/api/cxtj/rfgl'
import PersonPhoto from './components/PersonPhoto.vue'
import Dlsj from './components/Dlsj.vue'
import Yssj from './components/Yssj.vue'
export default {
  name: 'rfgl',
  data () {
    return {
      modal: false,
      cxTab: 'fwcx',
      cxlb: 'tj',
      pageInfo: {
        pageNum: 1,
        pageSize: 5,
        total: 0
      },
      queryForm: {
        lm: '',
        mnph: '',
        sh: '',
        sfzh: ''
      },
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
            return h('span', address.substring(6))
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
                    _self.showRoomDetail(params.row.dztzm)
                    _self.searchRfglHouse(params.row.dztzm)
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
            width: '80px',
            render: (h, params) => {
              return h('span', params.index + 1)
            }
          },
          {
            title: '照片',
            key: 'photo',
            width: '80px',
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
                    uploadList: params.row.photoList
                  }
                })
              }
            }
          },
          {
            title: '人员类别',
            key: 'syrklbhz',
            width: '120px'
          },
          {
            title: '姓名',
            key: 'xm',
            width: '120px'
          },
          {
            title: '证件号码',
            key: 'zjhm'
          },
          {
            title: '服务处所',
            key: 'fwcs'
          },
          {
            title: '户籍地址',
            key: 'hjdz'
          }
        ],
        jzryData: []
      }
    }
  },
  components: {
    PersonPhoto,
    Dlsj,
    Yssj
  },
  created () {},
  activated () {
    let zjhm = this.$route.params.zjhm
    if (zjhm) {
      this.cxlb = 'sfz'
      this.queryForm.sfzh = zjhm
      this.searchRfglRoom()
    }
    let dztzm = this.$route.params.dztzm
    if (dztzm) {
      this.queryForm.dztzm = dztzm
      this.searchRfglRoom()
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
      fetchRfglRPerson(dztzm)
        .then(response => {
          this.room.jzryData = response.data
          this.modal = true
          setTimeout(() => {
            this.$refs.dlsj.showChart()
            this.$refs.yssj.showChart()
          })
        })
        .catch(() => {})
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
    searchRfglHouse (dztzm) {
      fetchRfglHouse(dztzm)
        .then(response => {
          this.house = response.data
        })
        .catch(() => {})
    },
    onRowClick (row) {
      this.searchRfglHouse(row.dztzm)
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
      this.queryForm.dztzm = ''
    },
    cxTab (value) {
      this.queryForm.dztzm = ''
    }
  }
}
</script>

<style lang="less" scoped>
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
        // &_info {
        //   width: 100%;
        //   height: 100%;
        // }
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
}
// .rybq {
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
  background-position-y: 5px;
  padding-left: 25px;
  &_room {
    // position: absolute;
    // left: 0px;
    // top: 0px;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position-y: 5px;
  }
  &_sk {
    background-image: url("~@/images/rfgl/rybq/sk.png");
  }
  &_sw {
    background-image: url("~@/images/rfgl/rybq/sw.png");
  }
  &_xsqk {
    background-image: url("~@/images/rfgl/rybq/xsqk.png");
  }
  &_jsb {
    background-image: url("~@/images/rfgl/rybq/jsb.png");
  }
  &_zdsf {
    background-image: url("~@/images/rfgl/rybq/zdsf.png");
  }
  &_czcsj {
    background-image: url("~@/images/rfgl/rybq/czcsj.png");
  }
  &_hwzm {
    background-image: url("~@/images/rfgl/rybq/h、w、zm.png");
  }
  &_gbzdry {
    background-image: url("~@/images/rfgl/rybq/gbzdry.png");
  }
  &_sd {
    background-image: url("~@/images/rfgl/rybq/sd.png");
  }
  &_fzry {
    background-image: url("~@/images/rfgl/rybq/fzry.png");
  }
  &_hcsj {
    background-image: url("~@/images/rfgl/rybq/hcsj.png");
  }
  &_jwry {
    background-image: url("~@/images/rfgl/rybq/jwry.png");
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


