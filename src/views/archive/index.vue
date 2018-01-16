<template>
  <div class="body">
    <div class='grain'>
      <div class="datas-container behavior-install-container trend">
        <div class="trend-ope trend clearfix">
          <h3 class="l">一人一档</h3>
        </div>
        <div class="data-container">
          <img style="width: 150px;opacity: 0.9;position: relative;left: 75px;margin-top: 20px;" src="@/images/archives/T5101813600002017081019.jpg"></img>
          <div style="margin-left:60px;">
            <span>姓名：</span> {{personalInfo.xm}} <span style="background-color: #1588ef; padding: 5px; font-size: 12px; border-radius: 3px; margin-left: 30px;">{{personalInfo.syrklbhz}}</span>
          </div>
          <div style="margin-left:60px;">
            <span>性别：</span> {{personalInfo.xbhz}}
          </div>
          <div style="margin-left:30px;">
            <span>证件号码：</span> {{personalInfo.zjhm}}
          </div>
          <div style="margin-left:60px;">
            <span>民族：</span> {{personalInfo.mzhz}}
          </div>
          <div style="margin-left:30px;">
            <span>文化程度：</span> {{personalInfo.whcdhz}}
          </div>
          <div style="margin-left:30px;">
            <span>婚姻状况：</span> {{personalInfo.hyzkhz}}
          </div>
          <div style="margin-left:30px;">
            <span>服务处所：</span> {{personalInfo.fwcs}}
          </div>
          <div style="margin-left:30px;">
            <span>人物标签：</span> <span style="background-color: #1588ef; padding: 5px; font-size: 12px; border-radius: 3px;">在逃人员</span>
          </div>
          <div style="margin-left:30px;">
            <span>户籍地址：</span> {{personalInfo.hjdz}}
          </div>
          <div style="margin-left:30px;">
            <span>居住地址：</span> {{personalInfo.jzdz}}
          </div>
        </div>
      </div>
    </div>
    <div class='intro'>
      <div class='center'>
        <div class='core'></div>
        <div class='outer_one'>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
          <div class='outer_one__piece'></div>
        </div>
        <div class='outer_two'>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
          <div class='outer_two__piece'></div>
        </div>
        <div class='outer_three'>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
          <div class='outer_three__piece'></div>
        </div>
        <div class='outer_four'>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
          <div class='outer_four__piece'></div>
        </div>
        <div class='outer_five'>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
          <div class='outer_five__piece'></div>
        </div>
        <div class='pieces'>
          <div class='future_ui__piece'>
            <span>住房信息</span>
            <div class='line'></div>
            <div class='tip'>
              House Info!
            </div>
          </div>
          <div class='future_ui__piece'>
            <span>人脸抓拍</span>
            <div class='line'></div>
            <div class='tip'>
              Face Recognition!
            </div>
          </div>
          <div class='future_ui__piece'>
            <span>车辆信息</span>
            <div class='line'></div>
            <div class='tip'>
              Vehicle Info!
            </div>
          </div>
          <div class='future_ui__piece'>
            <span>单位信息</span>
            <div class='line'></div>
            <div class='tip'>
              Unit Information!
            </div>
          </div>
          <div class='future_ui__piece'>
            <span>就诊记录</span>
            <div class='line'></div>
            <div class='tip'>
              Medical Records!
            </div>
          </div>
          <div class='future_ui__piece'>
            <span>烟感信息</span>
            <div class='line'></div>
            <div class='tip'>
              Smoke Induction!
            </div>
          </div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
          <div class='future_ui__piece blank'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchPersonalInfo } from '@/api/archive/archive'
export default {
  name: 'archive',
  data () {
    return {
      personalInfo: {
        syrklbhz: '',
        zjhm: '',
        xm: '',
        xbhz: '',
        mzhz: '',
        whcdhz: '',
        hyzkhz: '',
        fwcs: '',
        hjdz: '',
        jzdz: '',
        jzfwid: '',
        hh: ''
      }
    }
  },
  methods: {
    fetchPersonalInfo (zjhm) {
      fetchPersonalInfo(zjhm).then(response => {
        this.personalInfo = response.data
      })
    }
  },
  mounted () {
    let zjhm = this.$route.query.zjhm
    this.fetchPersonalInfo(zjhm)
  }
}
</script>

<style scoped>
@import "./style.css";
.dataPic-container.compare .datas-container.trend {
  width: 60%;
}
.dataPic-container .datas-container.trend {
  width: 49%;
  margin: 0 0 30px;
}
.datas-container.trend,
.mainDatas-container.trend {
  background: rgba(62, 69, 131, 0.1);
  padding-bottom: 20px;
  margin: 28px auto 0 20px;
  box-shadow: 0 0 12px rgba(0, 0, 7, 0.4);
  border-radius: 4px;
  width: 300px;
  height: 90%;
  position: relative;
  box-sizing: border-box;
  z-index: 200;
}
.trend-ope {
  background: rgba(62, 69, 131, 0.32);
  height: 52px;
  line-height: 52px;
}
.trend-ope > h3 {
  font-family: montserrat;
  color: rgba(255, 255, 255, 0.7);
  line-height: 49px;
  border-bottom: 3px solid transparent;
  position: relative;
  margin: 0 40px 0 20px;
  font-size: 16px;
}
.behavior-total-data label {
  color: #00d294;
  font-size: 14px !important;
}
.data-container {
  color: #1588ef;
  font-weight: bold;
  font-size: 14px !important;
}
.data-container span {
  font-size: 14px !important;
  font-weight: bold;
  line-height: 2rem;
  color: rgba(255, 255, 255, 0.7);
}
</style>

<style lang="less" scoped>
.body {
  background: url(~@/images/archives/bg-container.jpg) top center no-repeat
    fixed;
  background-size: cover;
  * {
    box-sizing: content-box;
  }
}
.future_ui__piece {
  span {
    font-size: 30px;
  }
}
</style>


