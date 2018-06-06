<template>
  <div class="index model-mx" style='overflow: hidden;'>
    <div class="back_div" style="width:8%;height:85px;position: absolute;top:-30px;left: 1%;">
      <div title="返回" class="back_home" @click="backToHome()" style="margin-top: 10px;cursor: pointer;width: 100%;">
        <Icon type="chevron-left" color="whitesmoke"></Icon>
        <Icon type="chevron-left" color="whitesmoke"></Icon>
        <Icon type="chevron-left" color="whitesmoke"></Icon>
      </div>
    </div>
    <div style="width: 90%;height:100%;position: absolute;top: 30px;left: 5%;z-index: 10;transition: .5s;">
      <Card :bordered="false" class="background_card">
        <p slot='title' style="font-size: 20px;color: whitesmoke">
          <Icon type="pricetags"></Icon>
          预警模型
          <div v-show="dataCard" style="position:absolute;top: 14px;">
            <div style="margin:0px 0 0 100px;width: 50px;">
              <i class="showi" @click="back()" style="cursor: pointer;margin-left: 10px;">
            							<Icon type="chevron-left" color="#67a29d"></Icon>
            							<Icon type="chevron-left" color="#67a29d"></Icon>
            						</i>
            </div>
          </div>
        </p>
        <!-- <a slot='extra'@click="close">
            				<Icon type="close" style="color: whitesmoke;font-size: 20px;"></Icon>
            			</a> -->
        <div v-show="divCard" id="showCardDiv">
          <br />
          <Row>
            <Col span="4" offset='1'>
            <Badge overflow-count='9999' :count="yjCnt.kfyd">
              <Card @click.native="handleAdd('1')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
                <!--<p style="font-size: 24px;">9999999</p>-->
                <img class="show_img" src="~@/images/yjs/home/交警短信平台.png" />
                <p>空房用电预警</p>
              </Card>
            </Badge>
            </Col>
            <Col span="4" offset='2'>
            <Badge overflow-count='9999' :count="yjCnt.fkfyd">
              <Card @click.native="handleAdd('2')" :bordered="false" class="card" style="text-align: center;background-color: rgba(61, 156, 58, 0.52);cursor: pointer;">
                <img class="show_img" src="~@/images/yjs/home/全国在逃人员新增与撤销档.png" />
                <p>非空房用电预警</p>
              </Card>
            </Badge>
            </Col>
            <Col span="4" offset='2'>
            <Badge overflow-count='9999' :count="yjCnt.rysqz">
              <Card @click.native="handleAdd('3')" :bordered="false" class="card" style="text-align: center;background-color: rgba(63, 58, 156, 0.52);cursor: pointer;">
                <img class="show_img" src="~@/images/yjs/home/全国撤销人员.png" />
                <p>5人以上群租房</p>
              </Card>
            </Badge>
            </Col>
            <Col span="4 " offset='2'>
            <Badge overflow-count='9999' :count="yjCnt.wcndj">
              <Card @click.native="handleAdd( '4') " :bordered="false " class="card " style="text-align: center;background-color: rgba(156, 120, 58, 0.52);cursor: pointer; ">
                <img class="show_img" src="~@/images/yjs/home/涉毒人员（新）.png" />
                <p>未成年人独居</p>
              </Card>
            </Badge>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span="4" offset='1'>
            <Badge overflow-count='9999' :count="yjCnt.wdjzj">
              <Card @click.native="handleAdd('5')" :bordered="false" class="card" style="text-align: center;background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
                <img class="show_img" src="~@/images/yjs/home/小区停车.png" />
                <p>未登记证件信息</p>
              </Card>
            </Badge>
            </Col>
            <Col span="4" offset='2'>
            <Badge overflow-count='9999'  :count="yjCnt.wrjzk">
              <Card @click.native="handleAdd('6')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
                <img class="show_img" src="~@/images/yjs/home/通讯录联系人.png" />
                <p>无人居住空房</p>
              </Card>
            </Badge>
            </Col>
            <Col span="4" offset='2'>
            <Badge overflow-count='9999' :count="yjCnt.hhjzf">
              <Card @click.native="handleAdd('7')" :bordered="false" class="card" style="text-align: center;background-color: rgba(113, 67, 67, 0.52);cursor: pointer;">
                <img class="show_img " src="~@/images/yjs/home/手机.png" />
                <p>来沪与户籍人员混居</p>
              </Card>
            </Badge>
            </Col>
          </Row>
          <br />
        </div>
        <div v-show="dataCard">
          <FormTable ref="formTable" :columns="columns" :show-form="false" :fetch-list="search()"></FormTable>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import {
  fetchKfydCount,
  fetchFkfydCount,
  fetch5rysqzCount,
  fetchWcndjCount,
  fetchWdjzjCount,
  fetchWrjzkCount,
  fetchHhjzfCount,
  fetchKfydList,
  fetchFkfydList,
  fetch5rysqzList,
  fetchWcndjList,
  fetchWdjzjList,
  fetchWrjzkfList,
  fetchHhjzList
} from '@/api/model/model'
import FormTable from '@/components/FormTable.vue'
export default {
  data () {
    return {
      divCard: true,
      dataCard: false,
      columns: [],
      dataList: [],
      yjCnt: {
        kfyd: 0,
        fkfyd: 0,
        rysqz: 0,
        wcndj: 0,
        wdjzj: 0,
        wrjzk: 0,
        hhjzf: 0
      },
      fetchList: Function
    }
  },
  mounted () {
    this.initData()
  },
  components: {
    FormTable
  },
  methods: {
    handleAdd (num) {
      const _self = this
      this.columns = []
      if (num === '1' || num === '2') {
        this.columns = [
          {
            title: '日期',
            key: 'rq',
            width: 100
          },
          {
            title: '房屋地址',
            key: 'dz'
          },
          {
            title: '用电量',
            key: 'ydzl',
            width: 200
          },
          {
            title: '派出所',
            key: 'pcsmc',
            width: 200
          },
          {
            title: '操作',
            key: 'action',
            width: 120,
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
                        name: 'rfgl',
                        query: { fwbm: params.row.fwbm }
                      })
                      window.open(routeData.href, '_blank')
                    }
                  }
                },
              '人房关联'
            )
            }
          }
        ]
      } else {
        this.columns = [
          {
            title: '预警日期',
            key: 'yjrq',
            width: 220
          },
          {
            title: '房屋地址',
            key: 'dz'
          },
          {
            title: '派出所',
            key: 'pcsmc',
            width: 200
          },
          {
            title: '局村委',
            key: 'jcwmc',
            width: 200
          },
          {
            title: '操作',
            key: 'action',
            width: 120,
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
                        name: 'rfgl',
                        query: { fwbm: params.row.fwbm }
                      })
                      window.open(routeData.href, '_blank')
                    }
                  }
                },
              '人房关联'
            )
            }
          }
        ]
      }
      if (num === '1') {
        this.fetchList = fetchKfydList
      } else if (num === '2') {
        this.fetchList = fetchFkfydList
      } else if (num === '3') {
        this.fetchList = fetch5rysqzList
      } else if (num === '4') {
        this.fetchList = fetchWcndjList
      } else if (num === '5') {
        this.fetchList = fetchWdjzjList
      } else if (num === '6') {
        this.fetchList = fetchWrjzkfList
      } else if (num === '7') {
        this.fetchList = fetchHhjzList
      }
      setTimeout(function () {
        _self.$refs.formTable.search()
      }, 0)

      this.divCard = false
      this.dataCard = true
    },
    back () {
      this.divCard = true
      this.dataCard = false
    },
    backToHome () {
      this.$router.push({
        name: 'home_index'
      })
    },
    initData () {
      fetchKfydCount().then(response => {
        this.yjCnt.kfyd = response.data
      })
      fetchFkfydCount().then(response => {
        this.yjCnt.fkfyd = response.data
      })
      fetch5rysqzCount().then(response => {
        this.yjCnt.rysqz = response.data
      })
      fetchWcndjCount().then(response => {
        this.yjCnt.wcndj = response.data
      })
      fetchWdjzjCount().then(response => {
        this.yjCnt.wdjzj = response.data
      })
      fetchWrjzkCount().then(response => {
        this.yjCnt.wrjzk = response.data
      })
      fetchHhjzfCount().then(response => {
        this.yjCnt.hhjzf = response.data
      })
    },
    search () {
      return this.fetchList
    }
  }
}
</script>


<style lang="less">
@import "./yjs_public.less";
@import "./yjs_index.less";
.model-mx {
  .card {
    width: 100%;
  }
  .card:hover {
    border-left: 5px solid brown;
    /*transform: rotate(-2deg);*/
  }
  .card p {
    color: white;
  }
  .background_card {
    /*background-color: rgba(15, 20, 63, 0.95);*/
    height: 95%;
    overflow: auto;
    background-image: url(~@/images/yjs/observatory-bg.jpg);
    background-size: cover;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.72);
  }
  .background_card:hover {
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.72);
  }
  .background_card::-webkit-scrollbar {
    width: 0px;
  }
  .background_card img {
    width: 40%;
  }
  .hiddenCard,
  .hiddenCard1,
  .hiddenCard2,
  .hiddenCard3,
  .hiddenCard4,
  .hiddenCard5,
  .hiddenCard6,
  .hiddenCard7,
  .hiddenCard8,
  .hiddenCard9 {
    text-align: center;
  }
  .hiddenCard,
  .hiddenCard1,
  .hiddenCard2,
  .hiddenCard3,
  .hiddenCard4,
  .hiddenCard5,
  .hiddenCard6,
  .hiddenCard7,
  .hiddenCard8,
  .hiddenCard9 span {
    color: white;
  }
  .hiddenCard:hover,
  .hiddenCard1:hover,
  .hiddenCard2:hover,
  .hiddenCard3:hover,
  .hiddenCard4:hover,
  .hiddenCard5:hover,
  .hiddenCard6:hover,
  .hiddenCard7:hover,
  .hiddenCard8:hover,
  .hiddenCard9:hover {
    border-left: 5px solid brown;
  }
  .back_home {
    animation: back_home 1.5s linear infinite;
  }
  @keyframes back_home {
    0% {
      margin-left: 0.5%;
    }
    50% {
      margin-left: 10%;
    }
    100% {
      margin-left: 0.5%;
    }
  }
  .back_div:hover {
    margin-top: 25px;
    transition: 0.5s;
  }
  .showi {
    animation: left_right 1s linear infinite;
  }
  @keyframes left_right {
    0% {
      margin-left: 10px;
    }
    50% {
      margin-left: 15px;
    }
    100% {
      margin-left: 10px;
    }
  }

  .ivu-modal-mask {
    background: transparent;
  }
  .ivu-modal-content {
    background: rgba(29, 51, 121, 0.8);
    height: 90vh;
    border-radius: 0px;
    .ivu-modal-body {
      padding: 5px 40px;
    }
    .ivu-modal-footer {
      display: none;
    }
  }
  .ivu-table-wrapper {
    border: 0px;
  }
  .ivu-table {
    color: white;
    background-color: transparent;
    &:before {
      background-color: transparent;
    }
    &:after {
      background-color: transparent;
    }
    th {
      background-color: transparent;
      border-bottom: 1px solid rgba(67, 104, 199, 0.2);
    }
    td {
      background-color: transparent;
      border-bottom: 1px solid rgba(67, 104, 199, 0.2);
    }
  }
  tr.ivu-table-row-hover td {
    background-color: rgba(255, 255, 255, 0.2);
  }
  table {
    border-color: rgba(67, 104, 199, 0.2);
  }
}
</style>

