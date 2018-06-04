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
          模型
          <div style="position:absolute;top: 14px;">
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
            <Badge overflow-count='9999' count='189'>
              <Card @click.native="handleAdd('1')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
                <!--<p style="font-size: 24px;">9999999</p>-->
                <img class="show_img" src="~@/images/yjs/home/交警短信平台.png" />
                <p>空房用电预警</p>
              </Card>
            </Badge>
            </Col>
            <Col span="4" offset='2'>
            <Badge overflow-count='9999' count='86'>
              <Card @click.native="handleAdd('2')" :bordered="false" class="card" style="text-align: center;background-color: rgba(61, 156, 58, 0.52);cursor: pointer;">
                <img class="show_img" src="~@/images/yjs/home/全国在逃人员新增与撤销档.png" />
                <p>非空房用电预警</p>
              </Card>
            </Badge>
            </Col>
            <Col span="4" offset='2'>
            <Badge overflow-count='9999' count='93'>
              <Card @click.native="handleAdd('3')" :bordered="false" class="card" style="text-align: center;background-color: rgba(63, 58, 156, 0.52);cursor: pointer;">
                <img class="show_img" src="~@/images/yjs/home/全国撤销人员.png" />
                <p>5人以上群租房</p>
              </Card>
            </Badge>
            </Col>
            <Col span="4 " offset='2'>
            <Badge overflow-count='9999' count='7'>
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
            <Badge overflow-count='9999' count='12'>
              <Card @click.native="handleAdd('5')" :bordered="false" class="card" style="text-align: center;background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
                <img class="show_img" src="~@/images/yjs/home/小区停车.png" />
                <p>未登记证件信息</p>
              </Card>
            </Badge>
            </Col>
            <Col span="4" offset='2'>
            <Badge overflow-count='9999' count='779'>
              <Card @click.native="handleAdd('6')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
                <img class="show_img" src="~@/images/yjs/home/通讯录联系人.png" />
                <p>无人居住空房</p>
              </Card>
            </Badge>
            </Col>
            <Col span="4" offset='2'>
            <Badge overflow-count='9999' count='228'>
              <Card @click.native="handleAdd('7')" :bordered="false" class="card" style="text-align: center;background-color: rgba(113, 67, 67, 0.52);cursor: pointer;">
                <img class="show_img " src="~@/images/yjs/home/手机.png" />
                <p>来沪与户籍人员混居</p>
              </Card>
            </Badge>
            </Col>
            <!-- <Col span="4 " offset='2'>
              <Badge overflow-count='9999' count='556'>
                <Card @click.native="handleAdd( '8') " :bordered="false " class="card " style="text-align: center;background-color: rgba(37, 87, 101, 0.52);cursor: pointer; ">
                  <img class="show_img" src="~@/images/yjs/home/手机持有人.png" />
                  <p>手机持有人</p>
                </Card>
              </Badge>
              </Col> -->
          </Row>
          <br />
          <!-- <Row>
              <Col span="4" offset='1'>
              <Badge overflow-count='9999' count='564'>
                <Card @click.native="handleAdd('9')" :bordered="false" class="card" style="text-align: center;background-color: rgba(201, 202, 168, 0.52);cursor: pointer;">
                  <img class="show_img" src="~@/images/yjs/home/七类重点人员.png" />
                  <p>七类重点人员</p>
                </Card>
              </Badge>
              </Col>
              <Col span="4" offset='2'>
              <Badge overflow-count='9999' count='234'>
                <Card @click.native="handleAdd('10')" :bordered="false" class="card" style="text-align: center;background-color: rgba(193, 53, 145, 0.52);cursor: pointer;">
                  <img class="show_img" src="~@/images/yjs/home/终端人员采集.png" />
                  <p>终端人员采集</p>
                </Card>
              </Badge>
              </Col>
              <Col span="4" offset='2'>
              <Badge overflow-count='9999' count='543'>
                <Card @click.native="handleAdd('11')" :bordered="false" class="card" style="text-align: center;background-color: rgba(130, 35, 84, 0.52);cursor: pointer;">
                  <img class="show_img " src="~@/images/yjs/home/终端房屋采集.png" />
                  <p>终端房屋采集</p>
                </Card>
              </Badge>
              </Col>
              <Col span="4 " offset='2'>
              <Badge overflow-count='9999' count='556'>
                <Card @click.native="handleAdd( '12') " :bordered="false " class="card " style="text-align: center;background-color: rgba(157, 46, 179, 0.52);cursor: pointer;">
                  <img class="show_img" src="~@/images/yjs/home/监所人员.png" />
                  <p>监所人员</p>
                </Card>
              </Badge>
              </Col>
            </Row> -->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// import { fetchYjsCxList } from '@/api/yjs/yjscx'
export default {
  data () {
    return {
      divCard: true
    }
  },
  methods: {
    handleAdd (num) {
      this.divCard = false
    },
    back () {
      this.divCard = true
    },
    backToHome () {
      this.$router.push({
        name: 'home_index'
      })
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
}
</style>

