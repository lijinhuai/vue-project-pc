<template>
  <div class="body">
    <div class='grain'>
      <div class="datas-container behavior-install-container trend">
        <div class="trend-ope trend clearfix">
          <h3 class="l">一人一档</h3>
        </div>
        <div class="data-container">
          <template v-if="archive.personalInfo.photo!=null">
                  <img style="width: 150px;opacity: 0.9;position: relative;left: 85px;margin-top: 20px;" :src="archive.personalInfo.photo.photoBase64" />
</template>

<template v-else>
  <img style="width: 150px;opacity: 0.9;position: relative;left: 85px;margin-top: 20px;" />
</template>
          <div style="margin-left:60px;">
            <span>姓名：</span> {{archive.personalInfo.xm}} <span style="background-color: #1588ef; padding: 5px; font-size: 12px; border-radius: 3px; margin-left: 30px;">{{archive.personalInfo.syrklbhz}}</span>
          </div>
          <div style="margin-left:60px;">
            <span>性别：</span> {{archive.personalInfo.xbhz}}
          </div>
          <div style="margin-left:30px;">
            <span>证件号码：</span> {{archive.personalInfo.zjhm}}
          </div>
          <div style="margin-left:60px;">
            <span>民族：</span> {{archive.personalInfo.mzhz}}
          </div>
          <div style="margin-left:30px;">
            <span>文化程度：</span> {{archive.personalInfo.whcdhz}}
          </div>
          <div style="margin-left:30px;">
            <span>婚姻状况：</span> {{archive.personalInfo.hyzkhz}}
          </div>
          <div style="margin-left:30px;">
            <span>服务处所：</span> {{archive.personalInfo.fwcs}}
          </div>
          <div style="margin-left:30px;">
            <span>人员标签：</span> <span v-for="rybq in archive.personalInfo.rybqList" :key="rybq.index" style="background-color: #1588ef; padding: 5px; font-size: 12px; border-radius: 3px;">
                {{rybq.name}}</span> &nbsp;
          </div>
          <div style="margin-left:30px;">
            <span>户籍地址：</span> {{archive.personalInfo.hjdz}}
          </div>
          <div style="margin-left:30px;">
            <span>居住地址：</span> {{archive.personalInfo.jzdz}}
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
        </div>
        <div class='pieces'>
          <div class='future_ui__piece' @click="showModal('house')">
            <span>宽带开户</span>
            <div class='line'></div>
            <div class='tip'>
              Broadband Info!
            </div>
          </div>
          <div class='future_ui__piece' @click="showModal('house')">
            <span>住房信息</span>
            <div class='line'></div>
            <div class='tip'>
              House Info!
            </div>
          </div>
          <div class='future_ui__piece' @click="showModal('face')">
            <span>人脸抓拍</span>
            <div class='line'></div>
            <div class='tip'>
              Face Recognition!
            </div>
          </div>
          <div class='future_ui__piece' @click="showModal('vehicle')">
            <span>车辆信息</span>
            <div class='line'></div>
            <div class='tip'>
              Vehicle Info!
            </div>
          </div>
          <div class='future_ui__piece' @click="showModal()">
            <span>单位信息</span>
            <div class='line'></div>
            <div class='tip'>
              Unit Information!
            </div>
          </div>
          <div class='future_ui__piece' @click="showModal('hospital')">
            <span>就诊记录</span>
            <div class='line'></div>
            <div class='tip'>
              Medical Records!
            </div>
          </div>
          <div class='future_ui__piece' @click="showModal()">
            <span>烟感信息</span>
            <div class='line'></div>
            <div class='tip'>
              Smoke Induction!
            </div>
          </div>
          <div class='future_ui__piece' @click="showModal()">
            <span>指纹信息</span>
            <div class='line'></div>
            <div class='tip'>
              Fingerprint!
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
        </div>
      </div>
    </div>
    <Modal v-model="modal.modal_house" height="100%" :styles="{top: '30px',left: '160px',width: 'calc(100vw - 400px)'}">
      <div style="margin: 30px auto; display:flex;">
        <div class="home-ranking-list" style="width: 300px;">
          <h4><label>住房信息</label> <label style="float: right;  font-size: 14px; text-decoration: underline; color: #00d294;">层户结构</label></h4>
          <ul class="data-contents-height">
            <li><label>房屋地址</label> <span>
                              {{archive.houseInfo.mlphxx}}{{archive.houseInfo.sh}}</span></li>
            <li><label>房屋类型</label> <span>
                              {{archive.houseInfo.jzfwlxText}}</span></li>
            <li><label>房主姓名</label> <span>
                              {{archive.houseInfo.fzxm}}</span></li>
            <li><label>证件号码</label> <span>
                              {{archive.houseInfo.fzzjhm}}</span></li>
            <li><label>联系电话</label> <span>
                              {{archive.houseInfo.fzlxdh}}</span></li>
            <li><label>居住类型</label> <span>
                              {{archive.houseInfo.jzlxText}}</span></li>
            <li><label>房屋标签</label>
                              <!-- <span style="background-color: tomato; padding: 5px; font-size: 12px; border-radius: 3px; color: whitesmoke;font-weight: bold;">
                              {{archive.houseInfo.flagRhflText}}
                              </span>
                              &nbsp; -->
                              <span style="background-color: tomato; padding: 5px; font-size: 12px; border-radius: 3px; color: whitesmoke;font-weight: bold;">
                              {{archive.houseInfo.jzfwlxText}}</span>
                              </li>
          </ul>
        </div>
        <div style="width: 300px;">
          <div class="home-ranking-list" style="height: 230px;">
          <h4><label>水电煤信息</label> <label style="float: right;    text-decoration: underline; color: #00d294;">2018-04</label></h4>
          <ul class="data-contents-height">
            <li><b>1</b><label style=" padding-left: 20px;">水</label> <span class="r">
                              <span class="r unchanged"><strong>&nbsp;&nbsp;吨</strong></span> 10.20
              </span>
            </li>
            <li><b>2</b><label style=" padding-left: 20px;">电</label> <span class="r">
                              <span class="r unchanged"><strong>&nbsp;&nbsp;度</strong></span> 155.08
              </span>
            </li>
            <li><b>3</b><label style=" padding-left: 20px;">煤</label> <span class="r">
                              <span class="r unchanged"><strong>&nbsp;&nbsp;m³</strong></span> 27.17
              </span>
            </li>
          </ul>
        </div>
        <div class="home-ranking-list" style="height: 230px;margin-top:10px;">
          <h4><label>宽带开户</label> <label style="float: right;    text-decoration: underline; color: #00d294;"></label></h4>
          <ul class="data-contents-height"  v-for="kdkf in archive.houseInfo.kdkhList" :key="kdkf.index">
            <li><label style=" padding-left: 20px;">宽带账号</label> <span class="r">
                             {{kdkf.prodInstNum}}
              </span>
            </li>
            <li><label style=" padding-left: 20px;">联系人</label> <span class="r">
                              {{kdkf.acntName}}
              </span>
            </li>
          </ul>
        </div>
        </div>

        <div class="home-ranking-list" style="width: 300px;">
          <h4><label>同户人员</label></h4>
          <ul class="data-contents-height">
            <li v-for="person in archive.houseInfo.personList" :key="person.index"><b>{{person.xh}}</b><label style=" padding-left: 20px;">{{person.xm}}</label>
              <span class="r unchanged"><strong>&nbsp;&nbsp;{{person.zjhm}}</strong></span></li>
          </ul>
        </div>
      </div>
    </Modal>
    <Modal v-model="modal.modal_vehicle" height="100%" :styles="{top: '30px',left: '160px',width: 'calc(100vw - 400px)'}">
      <div v-show="!modal.div_vio" style="margin: 30px auto; display:flex;flex-direction: column;">
        <div style="display: flex;">
        <div class="home-ranking-list" style="width: 320px;">
          <h4><label>小区登记车辆</label> <label style="float: right; font-size: 14px; text-decoration: underline; color: #00d294;cursor:pointer;" @click="modal.div_vio=true">违法信息</label></h4>
          <ul class="data-contents-height">
            <li><label>车牌号码</label> <span style="background-color: #1857dc; padding: 5px; font-size: 14px; border-radius: 3px; color: whitesmoke;font-weight: bold;">
                        {{archive.vehicleInfo.cphm}}</span></li>
            <li><label>联系电话</label> <span>
                        {{archive.vehicleInfo.lxdh}}</span></li>
            <li><label>车位编号</label> <span>
                        {{archive.vehicleInfo.clbh}}</span></li>
            <li><label>居住地址</label> <span>
                        {{archive.vehicleInfo.dz}}</span></li>
          </ul>
        </div>
         <div class="home-ranking-list" style="width: 300px; height: 260px;">
          <h4><label>出入信息</label> <label style="float: right; font-size: 14px; text-decoration: underline; color: #00d294;">进出记录</label></h4>
          <div class="bubble">
            <div class="bubble_min ani_auto ani_top_top ani_time_8"></div>
            <div class="bubble_min ani_auto ani_top_top ani_time_12"></div>
            <div class="bubble_min ani_auto ani_top_top ani_time_10"></div>
            <div class="bubble_min ani_auto ani_top_top ani_time_12"></div>
            <div class="bubble_min ani_auto ani_top_top ani_time_8"></div>
            <div class="bubble_list">
              <div class="bubble_item ani_auto ani_8 ani_top_bottom">
                <p><span>出行</span> <i>{{archive.vehicleInfo.outCount}}次</i></p>
              </div>
              <div class="bubble_item ani_auto ani_time_10 ani_bottom_top">
                <p><span>进入</span> <i>{{archive.vehicleInfo.inCount}}次</i></p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div style="display: flex;margin-top:20px;">
        <div class="home-ranking-list" style="width: 640px;">
          <h4><label>车辆进出时段趋势分析</label></h4>
          <ECharts :options="this.archive.vehicleInfo.option" auto-resize style="height:250px;margin-top: -30px;"></ECharts>
        </div>
        </div>
      </div>
      <div v-show="modal.div_vio" style="margin: 30px auto; display:flex;flex-direction: column;">
        <div class="face home-ranking-list" style="width: 100%;">
          <h4><label>违章信息</label> <label style="float: right; font-size: 14px; text-decoration: underline; color: #00d294;cursor:pointer;" @click="modal.div_vio=false">车辆信息</label></h4>
            <Table :columns="vioInfoColumn" :data="archive.vehicleInfo.vioInfoList"></Table>
        </div>
      </div>
    </Modal>
    <Modal v-model="modal.modal_hospital" height="100%" :styles="{top: '30px',left: '160px',width: 'calc(100vw - 400px)'}">
      <div style="margin: 30px auto; display:flex;flex-direction: column;">
        <div class="home-ranking-list" style="width: 100%;">
          <h4><label>门诊信息</label> </h4>
            <Table :columns="mzInfoColumn" :data="archive.mzInfoList"></Table>
        </div>
        <div class="home-ranking-list" style="width: 100%;margin-top:10px;">
          <h4><label>住院信息</label> </h4>
          <Table :columns="zyInfoColumn" :data="archive.zyInfoList"></Table>
        </div>
      </div>
    </Modal>

    <Modal v-model="modal.modal_face" height="100%" :styles="{top: '30px',left: '160px',width: 'calc(100vw - 400px)'}">
      <div style="margin: 30px auto; display:flex;flex-direction: column;">
        <div class="face home-ranking-list" style="width: 100%;">
          <h4><label>人脸抓拍</label> </h4>
            <Table :columns="faceInfoColumn" :data="archive.faceInfoList"></Table>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { fetchArchive } from '@/api/archive/archive'
import FaceImage from './components/FaceImage.vue'
import ECharts from 'vue-echarts/components/ECharts'
import config from '@/config/index'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
export default {
  name: 'archive',
  data () {
    return {
      archive: {
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
          hh: '',
          photo: {
            photoBase64: ''
          }
        },
        houseInfo: {
          fwbm: '',
          mlphxx: '',
          sh: '',
          jzfwlxText: '',
          fzzjhm: '',
          fzxm: '',
          fzlxdh: '',
          jzlxText: '',
          personList: [],
          sdm: {}
        },
        vehicleInfo: {
          option: {},
          vioInfoList: []
        },
        mzInfoList: [],
        zyInfoList: [],
        faceInfoList: []
      },
      modal: {
        modal_house: false,
        modal_vehicle: false,
        modal_hospital: false,
        modal_face: false,
        div_vio: false
      },
      mzInfoColumn: [
        {
          title: '就诊时间',
          key: 'jzsj'
        },
        {
          title: '医疗机构名称',
          key: 'yljgmc'
        },
        {
          title: '诊断科室名称',
          key: 'jzksmc'
        },
        {
          title: '疾病诊断名称',
          key: 'jbzdmc'
        }
      ],
      vioInfoColumn: [
        {
          title: '号牌号码',
          key: 'hphm',
          width: 125,
          render: (h, params) => {
            let platecolor = params.row.platecolor
            let color = ''
            if (platecolor === '黄色') {
              color = 'plate_yellow'
            } else if (platecolor === '绿色') {
              color = 'plate_green'
            } else if (platecolor === '白色') {
              color = 'plate_white'
            } else if (platecolor === '蓝色') {
              color = ''
            }
            return h(
              'span',
              {
                attrs: {
                  class: 'plate ' + color
                }
              },
              params.row.hphm
            )
          }
        },
        {
          title: '号牌种类',
          key: 'hpzlText',
          width: 100
        },
        {
          title: '车辆品牌',
          key: 'clpp',
          width: 100
        },
        {
          title: '违法时间',
          key: 'wfsj',
          width: 110
        },
        {
          title: '违法地址',
          key: 'wfdz'
        },
        {
          title: '违法行为',
          key: 'wfxwText'
        },
        {
          title: '罚款金额',
          key: 'fkje',
          width: 100
        }
      ],
      zyInfoColumn: [
        {
          title: '入院时间',
          key: 'rysj'
        },
        {
          title: '医疗机构名称',
          key: 'yljgmc'
        },
        {
          title: '入院科室名称',
          key: 'ryksmc'
        },
        {
          title: '入院诊断名称',
          key: 'ryzdmc'
        },
        {
          title: '入院病区名称',
          key: 'rybqmc'
        }
      ],
      faceInfoColumn: [
        {
          title: '人脸图',
          key: 'action',
          width: 80,
          render: (h, params) => {
            return h(FaceImage, {
              props: {
                faceSrc:
                  config.txwPicBaseUrl +
                  '/face/' +
                  params.row.faceImageUrl +
                  '.jpg',
                pictureSrc:
                  config.txwPicBaseUrl +
                  '/face/' +
                  params.row.pictureUrl +
                  '.jpg'
              }
            })
          }
        },
        {
          title: '抓拍时间',
          key: 'timeBegin'
        },
        {
          title: '位置',
          key: 'cameraName'
        },
        {
          title: '身份证号',
          key: 'hitZjhm'
        },
        {
          title: '姓名',
          key: 'hitXm',
          width: 100
        }
      ]
    }
  },
  components: {
    ECharts,
    FaceImage
  },
  methods: {
    fetchArchive (zjhm) {
      fetchArchive(zjhm).then(response => {
        this.archive = response.data
        this.archive.vehicleInfo.option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            right: '1%'
          },
          xAxis: {
            data: this.archive.vehicleInfo.chart.labels,
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#fff' // 左边线的颜色
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}次',
              textStyle: {
                color: '#fff' // 坐标值得具体的颜色
              }
            },
            splitLine: {
              show: false
            }
          },
          series: [
            {
              name: '进入',
              type: 'line',
              smooth: true,
              data: this.archive.vehicleInfo.chart.datasets[0].data,
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: 'rgb(63, 178, 138)'
                  }
                }
              }
            },
            {
              name: '出行',
              type: 'line',
              smooth: true,
              data: this.archive.vehicleInfo.chart.datasets[1].data,
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: 'rgb(238, 190, 0)'
                  }
                }
              }
            }
          ]
        }
      })
    },
    showModal (modal) {
      if (modal === 'house') {
        this.modal.modal_house = true
      }
      if (modal === 'vehicle') {
        this.modal.modal_vehicle = true
      }
      if (modal === 'hospital') {
        this.modal.modal_hospital = true
      }
      if (modal === 'face') {
        this.modal.modal_face = true
      }
    }
  },
  mounted () {
    let zjhm = this.$route.query.zjhm
    this.fetchArchive(zjhm)
  }
}
</script>

<style scoped>
@import "./style.css";
.face.home-ranking-list {
  overflow: auto;
  height: 550px;
}
.home-ranking-list::-webkit-scrollbar {
  width: 6px;
  height: 2px;
}
.home-ranking-list::-webkit-scrollbar-thumb {
  border-radius: 1px;
  background: #2b85e4;
}
.home-ranking-list::-webkit-scrollbar-track {
  border-radius: 1px;
  background: #033447;
}
.dataPic-container.compare .datas-container.trend {
  width: 60%;
}
.dataPic-container .datas-container.trend {
  width: 49%;
  margin: 0 0 30px;
}
.datas-container.trend,
.mainDatas-container.trend {
  background: rgba(29, 51, 121, 0.5);
  padding-bottom: 20px;
  margin: 28px auto 0 20px;
  box-shadow: 0 0 12px rgba(0, 0, 7, 0.4);
  border-radius: 4px;
  width: 320px;
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
  font-size: 14px;
  font-weight: normal;
  line-height: 2rem;
  color: hsla(0, 0%, 100%, 0.7);
}
.data-contents-height {
  box-sizing: border-box;
  /* height: 350px; */
}
.home-ranking-list {
  background: rgba(29, 51, 121, 0.5);
  border-radius: 4px;
  box-shadow: 0 0 16px 8px rgba(3, 2, 8, 0.1);
  margin-right: 15px;
}
.home-ranking-list h4 {
  background: rgba(58, 123, 255, 0.2);
  height: 48px;
  line-height: 48px;
  padding: 0 20px;
  color: rgba(255, 255, 255, 0.8);
}
.home-ranking-list ul {
  padding: 12px 20px;
}
.home-ranking-list ul li {
  font-size: 14px;
  line-height: 46px;
  border-bottom: 1px solid rgba(67, 104, 199, 0.2);
  color: #3690ff;
  list-style: none;
}
.home-ranking-list ul li label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}
.r {
  float: right;
}
.bubble {
  width: 100%;
  height: 370px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.bubble_list {
  width: 63%;
  height: inherit;
  margin: 0 auto;
  position: relative;
}
.bubble_item {
  border-radius: 50%;
  position: absolute;
  display: table;
}
.bubble_item:nth-child(1) {
  width: 85px;
  height: 85px;
  top: 80px;
  right: 108px;
  background: rgba(238, 190, 0, 0.9);
  z-index: 1;
}
.bubble_item p {
  width: inherit;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  color: #fff;
}
.bubble_item:nth-child(2) {
  width: 130px;
  height: 130px;
  top: 10px;
  left: 55px;
  background: rgba(63, 178, 138, 0.9);
  z-index: 2;
}
.bubble_min {
  background: #eaedfc;
  border-radius: 50%;
  position: absolute;
  opacity: 0.5;
}
.bubble_min:nth-child(1) {
  width: 20px;
  height: 20px;
  top: 100px;
  left: 40px;
}
.bubble_min:nth-child(2) {
  width: 90px;
  height: 90px;
  top: 130px;
  left: 110px;
}
.bubble_min:nth-child(3) {
  width: 50px;
  height: 50px;
  top: 90px;
  left: 180px;
}
.bubble_min:nth-child(4) {
  width: 30px;
  height: 30px;
  top: 250px;
  left: 300px;
}
.bubble_min:nth-child(5) {
  width: 30px;
  height: 30px;
  top: 110px;
  right: 200px;
}
.ani_top_top {
  -webkit-animation-name: ani_bubble_top_top;
  -moz-animation-name: ani_bubble_top_top;
  animation-name: ani_bubble_top_top;
}
.ani_time_8 {
  -webkit-animation-duration: 8s;
  -moz-animation-duration: 8s;
  animation-duration: 8s;
}
.ani_time_10 {
  -webkit-animation-duration: 10s;
  -moz-animation-duration: 10s;
  animation-duration: 10s;
}
.ani_time_12 {
  -webkit-animation-duration: 12s;
  -moz-animation-duration: 12s;
  animation-duration: 12s;
}
.ani_auto {
  -webkit-animation-timing-function: linear;
  -webkit-animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -moz-animation-fill-mode: both;
  -moz-animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}
@-webkit-keyframes ani_bubble_top_top {
  0%,
  100%,
  50% {
    -webkit-transform: translateY(0);
  }
  25% {
    -webkit-transform: translateY(15px);
  }
  75% {
    -webkit-transform: translateY(-15px);
  }
}
@-moz-keyframes ani_bubble_top_top {
  0%,
  100%,
  50% {
    -moz-transform: translateY(0);
  }
  25% {
    -moz-transform: translateY(15px);
  }
  75% {
    -moz-transform: translateY(-15px);
  }
}
@keyframes ani_bubble_top_top {
  0% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(-300px);
  }
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

<style lang="less">
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

.plate {
  color: whitesmoke;
  font-size: 16px;
  padding: 3px 6px;
  font-family: monospace;
  background-color: #0a5eef;
  text-align: center;
  width: 100px;
  &_yellow {
    color: black !important;
    background-color: #ef910a;
  }
  &_white {
    color: black !important;
    background-color: #dddddd;
  }
  &_green {
    color: black !important;
    background-color: #3fdc4a;
  }
}
</style>


