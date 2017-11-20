<template>
<div class="main">
  <div style="text-align:center;background: rgba(12,16,47,0.7);
        height: 40px;
        box-shadow: 0 0 90px 2px rgba(47, 161, 214, 0.6);
        border-style: solid;border-image-source: url(~@/images/big-data/tit1.png);
        border-image-slice: 40 30 0 fill;
        border-image-width: 4px 0px;">
    <img style="width:400px; height:36px;" src="~@/images/big-data/tit.jpg">
    <p style="color: aqua;font-size: 20px;letter-spacing: 1rem;font-weight: bold;margin: -38px 0px 0px 0px;">金山大数据平台</p>
</div>
<div class="wraper-border wraper-left">

    <div class="card-border card-police">
        <div style="display: inline-block;"><img class="police-img pimg" id="police_img" src="${yjcx.photoBase64}">
        </div>

        <div style="display: inline-block;  line-height:2.4rem;padding-left: 10px;vertical-align: top ">
        <span style="color:aqua;">
          姓名 : ${yjcx.mjxm} <br>
          警号 : ${yjcx.mjjh} <br>
          出生日期 : ${yjcx.csrq} <br>
          职务 : ${yjcx.zw}
        </span>
        </div>
        <div style="line-height:2.2rem;"><span style="color:aqua; font-size: 14px;">
        工作单位 : ${yjcx.jgmc}<br></span>
        </div>
    </div>

    <div class="card-border card-zfzb">
        <span style="color:gold; font-size: 16px;line-height: 2.75rem;">装<br>备<br>信<br>息</span>
        <div style="line-height:2.4rem; margin-left: 20px;">
						<span style="color:aqua; font-size: 14px;">
						警务通IMEI : ${yjcx.imei} <br>
						手机号码 : ${yjcx.sjhm} <br>
						122电台 :    ${dt122} <br>
						执法记录仪：  ${zfjly} <br>
						酒精测试仪：  ${jjcsy} <br>
						</span>
            <img style="display: inherit;width: 120px;opacity: 0.7;margin: -30px 0 0 105px;"
                 src="<%=JSPUtils.staticPath%>/img/light.png">
        </div>
    </div>

    <div class="card-border card-ryq">
        <span style="color:gold; font-size: 16px;line-height: 2rem;">荣<br>誉<br>墙</span>
        <div style="line-height:2.2rem; margin-left: 20px;">
						<span style="color:aqua; font-size: 14px;">
						一等功 ：&nbsp;&nbsp;&nbsp;&nbsp;0 次 <br>
						二等功 ：&nbsp;&nbsp;&nbsp;&nbsp;2 次 <br>
						三等功 ：&nbsp;&nbsp;&nbsp;&nbsp;1 次<br>
						</span>
        </div>
        <img style="display: inherit;width: 100px;height: 100px;opacity: 0.7;position: relative;left:15px;"
             src="<%=JSPUtils.staticPath%>/img/xun.png">
    </div>

    <div class="card-border card-tagcanvas">
        <div id="container" class="content">
            <canvas width="250" height="250" id="myCanvas">
                <p>Anything in here will be replaced on browsers that support the canvas element</p>
                <ul>
                    <li><a href="" target="_blank">车辆拖移</a></li>
                    <li><a href="">简易程序</a></li>
                    <li><a href="">三车管理</a></li>
                    <li><a href="">强制措施</a></li>
                    <li><a href="">教育整治</a></li>
                    <li><a href="">勤务签到</a></li>
                    <li><a href="">违法通知书</a></li>
                    <li><a href="">路面盘查</a></li>
                    <li><a href="">违停拍照</a></li>
                    <li><a href="">接处警</a></li>
                    <li><a href="">简易事故</a></li>
                    <li><a href="">源头排查</a></li>
                    <li><a href="">缉查布控</a></li>
                    <li><a href="">隐患巡查</a></li>
                    <li><a href="">路途排查</a></li>
                </ul>
            </canvas>
        </div>
    </div>
</div>
<div class="wraper-border wraper-center">

    <div class="card-border card-gallery" style="height: 175px;">
        <span style="color:gold; font-size: 16px;line-height:2rem;letter-spacing: 1rem;">执<br>法<br>档<br>案</span>
        <div class="container">
            <section id="dg-container" class="dg-container">
                <div id="dg-wrapper" class="dg-wrapper">
                </div>
            </section>
        </div>
    </div>

    <div class="card-border card-map" style="width: 570px;">
        <div id="map" style="width: 250px;height: 250px;margin: 20px 0px 0px -10px;">
        </div>

        <img style="display: inherit;width: 200px;opacity: 0.7;margin: -89px 0 0 160px"
             src="<%=JSPUtils.staticPath%>/img/police.png">

        <div class="xqgk">
            <div class="xqgk-text" style="color:aqua;">
                <span style="color:gold; font-size: 16px;line-height:2rem;letter-spacing: 1rem;">辖区概况</span><br>
                <span>辖区警力:<br><span id="xqjl" style="color: aqua; font-size: 60px;">0</span></span>
                <span>在线战友:<br><span id="zxzy" style="color: lime; font-size: 60px;">0</span></span>
            </div>
        </div>


    </div>

    <div class="card-border card-liquidfill">
        <div class="liquidfill-wraper">
            <div class="liquidfill" id="liquidFill">
            </div>
            <span class="liquidfill-title">执法量</span>
        </div>
        <div class="liquidfill-wraper">
            <div class="liquidfill" id="liquidFill2">
            </div>
            <span class="liquidfill-title">执法量</span>
        </div>
        <div class="liquidfill-wraper">
            <div class="liquidfill" id="liquidFill3">
            </div>
            <span class="liquidfill-title">执法量</span>
        </div>
    </div>


</div>
<div class="wraper-border wraper-right">

    <div class="card-border card-zfjly">
        <div>
            <table id="zfyTable" cellspacing="0" rules="all" border="0"
                   style="width: 100%;  border-bottom: 1px solid rgba(32, 168, 216, 0.45); font-size: 12px;    line-height: 30px;">
                <thead>
                <tr style="height: 40px;">
                    <td colspan="4" style="border: 0;text-align: left">
                        <input id="daterange"
                               name="daterange" class="form-control date-picker" style="width: 120px;"
                               type="text">
                    </td>
                </tr>
                <%-- <tr style="height: 6px;"></tr>--%>
                <tr style="background-color: rgb(238, 238, 238); border-left: 1px solid rgb(204, 204, 204); border-top: 1px solid rgb(204, 204, 204);">
                    <th align="center" scope="col"
                        style="text-align:center;width: 8%; white-space: nowrap; background-color: rgb(238, 238, 238); border-left: 1px solid rgb(204, 204, 204); border-top: 1px solid #4dbd74; padding: 4px;">
                        拍摄日期
                    </th>
                    <th align="center" scope="col"
                        style="text-align:center;width: 5%; white-space: nowrap; background-color: rgb(238, 238, 238); border-left: 1px solid rgb(204, 204, 204); border-top: 1px solid #4dbd74; padding: 4px;">
                        上传日期
                    </th>
                    <th align="center" scope="col"
                        style="text-align:center;width: 6%; white-space: nowrap; background-color: rgb(238, 238, 238); border-left: 1px solid rgb(204, 204, 204); border-top: 1px solid #4dbd74; padding: 4px;">
                        时长
                    </th>
                    <th align="center" scope="col"
                        style="text-align:center;width: 8%; white-space: nowrap; background-color: rgb(238, 238, 238); border-left: 1px solid rgb(204, 204, 204); border-top: 1px solid #4dbd74; padding: 4px;">
                        操作
                    </th>
                </tr>
                </thead>
            </table>
        </div>


    </div>

    <div class="card-border card-radar">
        <div class="btn-group" data-toggle="buttons">
            <label class="btn btn-sm btn-secondary-outline active"> <input
                    type="radio" name="options" id="option6"> 本期
            </label>
            <label class="btn btn-sm btn-secondary-outline"> <input
                    type="radio" name="options" id="option7"> 上期
            </label>
            <label class="btn btn-sm btn-secondary-outline"> <input
                    type="radio" name="options" id="option2"> 本月
            </label>
            <label class="btn btn-sm btn-secondary-outline"> <input
                    type="radio" name="options" id="option5"> 上月
            </label>
            <label class="btn btn-sm btn-secondary-outline"> <input
                    type="radio" name="options" id="option3"> 本年
            </label>
        </div>
        <div id="radar" style="width: 280px;height: 280px;">
        </div>
        <div class="radar-text">
      <span>
        执&nbsp;法&nbsp;量：<span id="zfl"></span> &nbsp;&nbsp;&nbsp;&nbsp;接&nbsp;处&nbsp;警：<span id="jcj">-</span>
      </span>
            <span>
        预&nbsp;警&nbsp;数：<span id="yjs"></span> &nbsp;&nbsp;&nbsp;&nbsp;满&nbsp;意&nbsp;率：<span
                    id="myl"></span>
      </span>
            <span>
        勤务签到：<span id="qwqd"></span>
      </span>
        </div>
    </div>

    <div class="card-border card-video">
        <div id="mediaplayer" style="display: block;">
            <div style="width:100%;height:340px;display:block;">
                <div id="a1_html5" style="width:100%;height:340px;background-color:black;">
                    <video id="video" width="100%" height="340" controls="controls" autoplay>
                    </video>
                </div>
            </div>
        </div>
    </div>


    <div class="card-border card-motor">
        <span style="color:gold; font-size: 16px;letter-spacing: 1rem;">个人风采</span>
        <img style="position: relative; width:100%; margin-top: -20px; opacity: 0.6; z-index: -9999; "
             src="<%=JSPUtils.staticPath%>/img/motor.png">
    </div>



</div>

<div class="wraper-border wraper-bottom">
    <div class="card-border">
        <div class="card">
            <div class="card-block">
                <div class="row">
                    <div class="col-md-12 p-x-1">
                        <h4 class="card-title" style="color: aqua;">年度执法趋势图</h4>
                        <div id="main-chart-date" class="small text-muted"
                             style="margin-top:-10px;"></div>
                    </div>
                </div>
                <div id="main-chart-div" class="chart-wrapper"
                     style="height:130px;margin-top:30px;">
                    <canvas id="main-chart" height="130"></canvas>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<style scoped>
@charset "UTF-8";
* {
  box-sizing: border-box;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: " ";
}

.clearfix:after {
  clear: both;
}

.main {
  background: url(~@/images/big-data/bg.jpg) repeat center #112941;
  height: 100%;
}

.main {
  font-size: 14px;
  /* margin: 8px; */
  /* background: none !important; */
}

.dg-container {
  width: 100%;
  height: 150px;
  position: relative;
}

.dg-wrapper {
  width: 162px;
  height: 120px;
  margin: 0 auto;
  position: relative;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  -o-perspective: 1000px;
  -ms-perspective: 1000px;
  perspective: 1000px;
}

.dg-wrapper a {
  width: 162px;
  height: 120px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0px 5px 10px rgba(33, 150, 243, 0.8);
}

.dg-wrapper a.dg-transition {
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.dg-wrapper a img {
  display: block;
  width: 160px;
  height: 120px;
}

.dg-wrapper a div {
  text-align: center;
  color: rgba(0, 255, 0, 0.9);
  font-size: 14px;
  width: 100%;
  display: none;
  margin-top: 10px;
}

.dg-wrapper a.dg-center div {
  display: block;
}

.btn-group > .btn {
  position: relative;
  float: left;
}

.btn-secondary-outline {
  color: #ccc;
  background-image: none;
  background-color: transparent;
  border-color: #ccc;
}

.btn-secondary-outline:hover,
.btn-secondary-outline:focus,
.btn-secondary-outline.active {
  color: lime;
  border-color: gold;
}

.btn {
  display: inline-block;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
}

.btn-sm {
  padding: 0.2rem 0.5rem;
  font-size: 0.85rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

[data-toggle="buttons"] > .btn input[type="radio"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.liquidfill-wraper {
  display: inline-block;
  text-align: center;
  padding: 5px;
}

.liquidfill {
  width: 120px;
  height: 120px;
}

.liquidfill-title {
  color: aqua;
}

.wraper-border {
  /*height: 700px;*/
  margin: 10px;
  position: relative;
  display: inline-block;
  border-style: solid;
  border-width: 1px 1px;
  border-image-source: url(~@/images/big-data/border2.png);
  border-image-slice: 40 40 fill;
  border-image-width: 16px 16px;
  border-image-outset: initial;
  border-image-repeat: initial;
  background: none;
  /*background-color: rgba(47, 161, 214, 0.22);*/
  box-shadow: inset 0 0 20px rgba(5, 53, 227, 0.5);
}

.wraper-left {
  /*width: 300px;*/
  /*height: 700px;*/
  padding: 10px;
  float: left;
}

.wraper-center {
  /*width: 500px;*/
  /*height: 700px;*/
  padding: 10px;
  margin-left: 0px;
  margin-right: 0px;
}

.wraper-right {
  /*width: 290px;*/
  /*height: 700px;*/
  width: calc(100vw - 950px);
  position: absolute;
  padding: 10px;
}

.wraper-bottom {
  /*position: absolute;*/
  width: 905px;
  padding: 10px;
  margin-top: 0px;
  display: block;
}

.card-border {
  border-style: solid;
  border-width: 10px 10px;
  border-image-source: url(~@/images/big-data/border.png);
  border-image-slice: 32 32 fill;
  border-image-width: 18px 18px;
  border-image-outset: initial;
  border-image-repeat: initial;
  background: none;
  background-color: rgba(47, 161, 214, 0.22) !important;
  box-shadow: 0 0 20px rgba(5, 192, 227, 0.7);
}

.card-police {
  width: 280px;
}

.police-img {
  width: 95px;
  opacity: 0.8;
  vertical-align: bottom;
}

.card-zfzb {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.card-ryq {
  width: 280px;
  /*height: 138px;*/
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.card-tagcanvas {
  margin-top: 10px;
  width: 280px;
}

.card-map {
  display: inline-block;
  margin-top: 10px;
  position: relative;
}

.xqgk {
  display: inline-block;
  position: absolute;
  bottom: 60px;
  margin-left: 30px;
}

.xqgk-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-liquidfill {
  height: 200px;
  width: 570px;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}

.card-radar {
  height: 545px;
  width: 310px;
  text-align: center;
  float: right;
}

.radar-text {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}

.radar-text span {
  color: aqua;
  text-align: left;
  text-indent: 2rem;
  line-height: 2rem;
}

.card-video {
  width: calc(100% - 320px);
  display: inline-block;
  text-align: center;
  margin-top: 5px;
}

.card-gallery {
  width: 570px;
  height: 195px;
  display: flex;
  align-items: center;
}

.card-motor {
  width: 310px;
  float: right;
  margin-top: 5px;
  text-align: center;
}

.card-motor2 {
  display: inline-block;
  width: 280px;
}

.card-zfjly {
  height: 545px;
  display: inline-block;
  width: calc(100% - 320px);
  min-height: 494px;
  position: relative;
}

.form-control {
  background: none;
  color: lime;
  border: 1px solid gold;
}

.card-zfjly tr,
.card-zfjly th,
.card-zfjly td {
  color: aqua;
  background: none !important;
  text-align: center;
  white-space: nowrap;
}

a[aria-controls="zfyTable"] {
  background: none !important;
  color: lime !important;
  border-color: gold !important;
}
</style>
