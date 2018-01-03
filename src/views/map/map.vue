<template>
  <div class="main">
    <!-- <div style="text-align:center;background: rgba(12,16,47,0.7);
          height: 40px;
          box-shadow: 0 0 90px 2px rgba(47, 161, 214, 0.6);
          border-style: solid;border-image-source: url(~@/images/big-data/tit1.png);
          border-image-slice: 40 30 0 fill;
          border-image-width: 4px 0px;">
      <img style="width:400px; height:36px;" src="~@/images/big-data/tit.jpg">
      <p style="color: aqua;font-size: 20px;letter-spacing: 1rem;font-weight: bold;margin: -38px 0px 0px 0px;">金山一标六实管理平台</p>
    </div> -->
    <iframe src="static/html/map.html" style="width:100%; height:100%; border: 0px;"></iframe>
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
  /* background: url(~@/images/big-data/bg.jpg) repeat center #112941; */
  height: 100%;
}
/* .main {
  font-size: 14px;
} */
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
