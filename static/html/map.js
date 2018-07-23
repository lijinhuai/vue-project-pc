var baseUrl = window.parent.document.getElementById("baseUrl").value;
var picBaseUrl = window.parent.document.getElementById("txwPicBaseUrl").value;
var carPicBaseUrl = window.parent.document.getElementById("carPicBaseUrl").value;
var mjPicBaseHost = window.parent.document.getElementById("mjPicBaseHost").value;
var rtspServer = window.parent.document.getElementById("rtspServer").value;
var serviceUrl = locationPath();
var pcsdm = window.parent.document.getElementById("pcsdm").value;
var pcsmc = window.parent.document.getElementById("pcsmc").value;
var xqbh = window.parent.document.getElementById("xqbh").value;
var jlxdm = window.parent.document.getElementById("jlxdm").value;
var jcwdm = window.parent.document.getElementById("jcwdm").value;
var name = window.parent.document.getElementById("name").value;
var areaStr = window.parent.document.getElementById("areaStr").value;
var intro = window.parent.document.getElementById("intro").value;


$(document).ready(function () {

  addCommunityPolygon(areaStr);

  // 页面初始数据
  initData();

  // 页面地图数据切换事件绑定
  initOperatorMenuEvent();

  // 右侧菜单上的按钮事件绑定
  initDetailContainerDomEvent();

  loadVehiclePassRecordsAlone();
  setInterval(function () {
    loadVehiclePassRecordsAlone();
  }, 1000 * 30);


  // 清除超时警员定位标注
  setInterval(function () {
    clearPoliceLocation();
  }, 1000 * 30);

  // 清除超时电动车定位标注
  setInterval(function () {
    clearDdcLocation();
  }, 1000 * 30);

  // 清除超时警车定位标注
  setInterval(function () {
    clearJcLocation();
  }, 1000 * 30);

});

// 清除超时警员定位标注
function clearPoliceLocation() {
  //  获取所有图层
  var overlays = map.getOverlayLayer().getOverlays();
  var et = new Date().getTime();
  for (var i in overlays) {
    if (overlays[i].type == "police") {
      // 判断超时时间
      var origin = overlays[i].origin;
      var gt = origin.rksj;

      var st = Date.parse(gt);
      if (et - st > 600000) {
        map.getOverlayLayer().removeOverlay(i);
      }
    }
  }
}

// 清除超时电动车定位标注
function clearDdcLocation() {
  //  获取所有图层
  var overlays = map.getOverlayLayer().getOverlays();
  var et = new Date().getTime();
  for (var i in overlays) {
    if (overlays[i].type == "ddc") {
      // 判断超时时间
      var origin = overlays[i].origin;
      var gt = origin.rksj;

      var st = Date.parse(gt);
      if (et - st > 600000) {
        map.getOverlayLayer().removeOverlay(i);
      }
    }
  }
}

// 清除超时警车定位标注
function clearJcLocation() {
  //  获取所有图层
  var overlays = map.getOverlayLayer().getOverlays();
  var et = new Date().getTime();
  for (var i in overlays) {
    if (overlays[i].type == "jc") {
      // 判断超时时间
      var origin = overlays[i].origin;
      var gt = origin.gpssj;

      var st = Date.parse(gt);
      if (et - st > 600000) {
        map.getOverlayLayer().removeOverlay(i);
      }
    }
  }
}

var loadedHouse = false;
var loadedDwxx = false;

function initOperatorMenuEvent() {

  // 地图展示数据类型切换
  $(".operator-radio").click(function () {

    var name = $(this).attr("name");
    var checked = $(this).is(":checked");

    if (checked) {
      $(this).parent(".operator-label").removeClass("off");
      $(this).parent(".operator-label").addClass("on");
    } else {
      $(this).parent(".operator-label").removeClass("on");
      $(this).parent(".operator-label").addClass("off");
    }

    // 选中更多
    if (name == 'operator-more' && checked) {
      $('#more').show();
      $('#more').removeClass('animated bounceOutUp');
      $('#more').addClass('animated bounceInDown');
    }

    // 取消选中更多
    if (name == 'operator-more' && !checked) {
      $('#more').removeClass('animated bounceInDown');
      $('#more').addClass('animated bounceOutUp');
    }

    // 选中小区简介
    if (name == 'operator-intro' && checked) {
      $('#intro').show('slow');
    }

    // 取消选中小区简介
    if (name == 'operator-intro' && !checked) {
      $('#intro').hide('slow');
    }

    // 选中电动车
    if (name == 'operator-ddc' && checked) {
      showLocationsByType("ddc");
    }

    // 取消电动车
    if (name == 'operator-ddc' && !checked) {
      hiddenLocationsByType("ddc");
    }

    // 选中警车
    if (name == 'operator-jc' && checked) {
      showJcLocations();
    }

    // 取消警车
    if (name == 'operator-jc' && !checked) {
      hiddenJcLocations();
    }

    // 选中实有房屋
    if (name == 'operator-house' && checked) {
      if (loadedHouse) {
        showHouseLocations();
      } else {
        loadHouseLocations();
        loadedHouse = true;
      }

    }

    // 取消选中实有房屋
    if (name == 'operator-house' && !checked) {
      hiddenHouseLocations();
    }

    // 选中实有单位
    if (name == 'operator-dwxx' && checked) {
      if (loadedDwxx) {
        showLocationsByType("dwxx");
      } else {
        loadDwLocations();
        loadedDwxx = true;
      }
    }

    // 取消选中实有单位
    if (name == 'operator-dwxx' && !checked) {
      hiddenLocationsByType("dwxx");
    }

    // 选中小区出入口
    if (name == 'operator-xqxx' && checked) {
      showLocationsByType("xqxx");
    }

    // 取消选中小区出入口
    if (name == 'operator-xqxx' && !checked) {
      hiddenLocationsByType("xqxx");
    }

    // 选中实有安防设施
    if (name == 'operator-camera' && checked) {
      showLocationsByType("camera");
      showLocationsByType("pecc");
      showLocationsByType("xfs");
      showLocationsByType("smoke");
    }

    // 取消选中实有安防设施
    if (name == 'operator-camera' && !checked) {
      hiddenLocationsByType("camera");
      hiddenLocationsByType("pecc");
      hiddenLocationsByType("xfs");
      hiddenLocationsByType("smoke");
    }

    // 选中实有力量
    if (name == 'operator-syll' && checked) {
      showPoliceLocations();
    }
    // 取消选中实有力量
    if (name == 'operator-syll' && !checked) {
      hiddenPoliceLocations();
    }

    // 取消选中动态感知
    if (name == 'operator-dynamic' && !checked) {
      hiddenDynamicData();
    }

    // 选中WIFI嗅探
    if (name == 'operator-wifi' && checked) {
      showLocationsByType("wifi");
    }

    // 取消选中WIFI嗅探
    if (name == 'operator-wifi' && !checked) {
      hiddenLocationsByType("wifi");
    }

    // 选中水闸
    if (name == 'operator-sluice' && checked) {
      showLocationsByType("sluice");
    }

    // 取消选中水闸
    if (name == 'operator-sluice' && !checked) {
      hiddenLocationsByType("sluice");
    }

    // 选中仓库
    if (name == 'operator-warehouse' && checked) {
      showLocationsByType("warehouse");
    }

    // 取消选中仓库
    if (name == 'operator-warehouse' && !checked) {
      hiddenLocationsByType("warehouse");
    }

    // 选中老年活动中心
    if (name == 'operator-seniorcenter' && checked) {
      showLocationsByType("seniorcenter");
    }

    // 取消选中老年活动中心
    if (name == 'operator-seniorcenter' && !checked) {
      hiddenLocationsByType("seniorcenter");
    }

    // 选中监控点位
    if (name == 'operator-jkdw' && checked) {
      showLocationsByType("jkdw");
    }

    // 取消选中监控点位
    if (name == 'operator-jkdw' && !checked) {
      hiddenLocationsByType("jkdw");
    }

    // 选中车库
    if (name == 'operator-garage' && checked) {
      showLocationsByType("garage");
    }

    // 取消选中车库
    if (name == 'operator-garage' && !checked) {
      hiddenLocationsByType("garage");
    }

    // 选中垃圾房
    if (name == 'operator-garbage' && checked) {
      showLocationsByType("garbage");
    }

    // 取消选中垃圾房
    if (name == 'operator-garbage' && !checked) {
      hiddenLocationsByType("garbage");
    }

    // 选中变电站
    if (name == 'operator-substation' && checked) {
      showLocationsByType("substation");
    }

    // 取消选中变电站
    if (name == 'operator-substation' && !checked) {
      hiddenLocationsByType("substation");
    }

    // 选中卫生院
    if (name == 'operator-hospital' && checked) {
      showLocationsByType("hospital");
    }

    // 取消选中卫生院
    if (name == 'operator-hospital' && !checked) {
      hiddenLocationsByType("hospital");
    }

    // 选中污水净化站
    if (name == 'operator-sewage' && checked) {
      showLocationsByType("sewage");
    }

    // 取消选中污水净化站
    if (name == 'operator-sewage' && !checked) {
      hiddenLocationsByType("sewage");
    }

    // 选中水塔
    if (name == 'operator-watertower' && checked) {
      showLocationsByType("watertower");
    }

    // 取消选中水塔
    if (name == 'operator-watertower' && !checked) {
      hiddenLocationsByType("watertower");
    }

    // 选中液化气站
    if (name == 'operator-gas' && checked) {
      showLocationsByType("gas");
    }

    // 取消选中液化气站
    if (name == 'operator-gas' && !checked) {
      hiddenLocationsByType("gas");
    }

    // 选中信号塔
    if (name == 'operator-signaltower' && checked) {
      showLocationsByType("signaltower");
    }

    // 取消选中信号塔
    if (name == 'operator-signaltower' && !checked) {
      hiddenLocationsByType("signaltower");
    }

  });

  $(".operator-title").click(function () {
    if ($(".operator-content").hasClass("off")) {
      $(".operator-content").removeClass("off");
      $(".operator-content").addClass("on");
    } else {
      $(".operator-content").removeClass("on");
      $(".operator-content").addClass("off");
    }
  })
}



// 右侧菜单上的按钮事件绑定
var _data_interval;

function initDetailContainerDomEvent() {

  // 人脸标签页点击
  $(".detail-menu-box #detail1").click(function () {

    // loadFaceMsgData();

    console.info($("#subdetail_face_2").hasClass("hover"));

    // 判断当前选中了那个标签页
    if ($("#subdetail_face_2").hasClass("hover")) {
      // 清除
      clearDataInterval();

      // 加载数据
      loadFaceSimilarData();
      _data_interval = window.setInterval("loadFaceSimilarData()", 5000);
    }

    if ($("#subdetail_face_3").hasClass("hover")) {
      // 清除
      clearDataInterval();

      // 加载数据
      loadFaceSimilarAlarmData();
      _data_interval = window.setInterval("loadFaceSimilarAlarmData()", 5000);
    }
  })

  // 人脸标签页 - 抓拍子标签点击
  $(".detail-content-box #subdetail_face_1").click(function () {
    // loadFaceMsgData();
  })

  // 人脸标签页 - 比中小区子标签点击
  $(".detail-content-box #subdetail_face_2").click(function () {

    // 清除
    clearDataInterval();

    // 加载数据
    loadFaceSimilarData();
    _data_interval = window.setInterval("loadFaceSimilarData()", 5000);
  })

  // 人脸标签页 - 比中报警子标签点击
  $(".detail-content-box #subdetail_face_3").click(function () {

    // 清除
    clearDataInterval();

    // 加载数据
    loadFaceSimilarAlarmData();
    _data_interval = window.setInterval("loadFaceSimilarAlarmData()", 5000);
  })

  // 开门标签页
  $(".detail-menu-box #detail2").click(function () {

    // 清除
    clearDataInterval();

    // 加载数据
    loadDoorData();
    _data_interval = window.setInterval("loadDoorData()", 5000);
  })

  // 过车标签页
  $(".detail-menu-box #detail3").click(function () {

    // 清除
    clearDataInterval();

    // 加载数据
    loadVehiclePassData();
    _data_interval = window.setInterval("loadVehiclePassData()", 5000);
  })

  // WIFI 标签页
  $(".detail-menu-box #detail4").click(function () {

    // 清除
    clearDataInterval();

    // 加载数据
    loadWifiData();
    _data_interval = window.setInterval("loadWifiData()", 5000);
  })

}

function clearDataInterval() {
  if (_data_interval) {
    window.clearInterval(_data_interval);
  }
}

// 取消动态感知
function hiddenDynamicData() {
  if (map && _dynamic_marker) {
    map.getOverlayLayer().removeOverlay(_dynamic_marker);
  }
}

// 页面初始化需要加载的数据
function initData() {

  $("#introContent").text(intro);

  var token = Cookies.get("Admin-Token");

  createEventSource('YT?pcsdm=' + pcsdm + '&xqbh=' + xqbh + '&Authorization=' + token, successCallBack);
  createEventSource('CLBK,RYBK,DDCDW,JCDW?Authorization=' + token, successCallBack);
  var deptCode = Cookies.get('deptCode');
  if (deptCode == 310116000000) {
    createEventSource('JYDW?Authorization=' + token, successCallBack);
  } else {
    createEventSource('JYDW?Authorization=' + token + '&deptCode=' + deptCode, successCallBack);
  }
  // 加载一标六实数据
  loadData(baseUrl + "/houses/amounts", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var ybls = data.data;
      countUp('syrk', ybls.syrk);
      countUp('syfw', ybls.syfw);
      countUp('sydw', ybls.sydw);
      countUp('syafss', ybls.syafss + 8);
      countUp('syllzb', ybls.syllzb);
      countUp('syjq', ybls.syjq);
      countUp('hjry', ybls.hjry);
      countUp('lhry', ybls.lhry);
      countUp('zdry', ybls.zdry);
    }
  })

  loadData(baseUrl + "/houses/fwbq", token, function (data) {
    var code = data.code;
    if (code == 200) {
      drawBarChart(data.data);
    }
  })

  // 页面默认的定位信息数据加载
  loadDefaultLocations();

  // 右侧菜单数据加载
  loadDefaultMenuDatas();

  // 加载警员定位数据
  loadPoliceLatestLocations();

  // 加载电动车定位数据
  loadDdcLatestLocations();

  // 加载警车定位数据
  loadJcLatestLocations();
}

// 加载警员定位数据
function loadPoliceLatestLocations() {

  var token = Cookies.get("Admin-Token");
  var deptCode = Cookies.get("deptCode");

  // 加载警员定位数据
  loadData(baseUrl + "/location/police/locations?deptCode=" + deptCode, token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      showMjGpsData(locations)
    }
  });
}

// 加载电动车定位数据
function loadDdcLatestLocations() {
  var token = Cookies.get("Admin-Token");

  // 加载警员定位数据
  loadData(baseUrl + "/location/ddc/locations", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      showDdcGpsData(locations)
    }
  });
}

// 加载警车车定位数据
function loadJcLatestLocations() {
  var token = Cookies.get("Admin-Token");

  // 加载警员定位数据
  loadData(baseUrl + "/location/jc/locations", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      showJcGpsData(locations)
    }
  });
}

// 警员位置信息展示
function showMjGpsData(data) {

  //  获取所有图层
  var overlays = map.getOverlayLayer().getOverlays();

  // 遍历推送过来的数据集合
  for (var li = 0; li < data.length; li++) {

    var hit = false;
    var location = data[li];
    for (var i in overlays) {
      var lid = "police_" + location.mjjh;
      if (overlays[i].type == "police" && overlays[i].id == lid) {

        // 当前标注打开了窗口， 新添加的标注需要自动打开窗口
        if (_current_marker && _current_marker.id == lid && _current_marker.getInfoWindow() != null) {
          hit = true;
        }

        map.getOverlayLayer().removeOverlay(i);
        break;
      }
    }

    // 地图添加标注
    var marker = addMediumMarker(location.gpsjd, location.gpswd, location.mjjh, "police", location);

    // 如果地图上的警员标注正好打开了 InfoWindow
    if (hit) {
      _current_marker = marker;

      var content = assembleInfoWindowContent("警员信息", baseUrl + "/rjbxx/zps/" + location.sfzh + "?Authorization=" + token, "警员姓名：" + location.mjxm + (location.mjlb == 1 ?
          "（民警）" : "（协管）") + "<br/>警员警号：" + location
        .mjjh + "<br/>手机号码：" + location.sjhm + "<br/>所属机构：" + location.jgmc + "<br/>定位时间：" + location.rksj);

      var lnglat = marker.getPosition();
      marker.openInfoWindow(
        content, {
          size: new IMAP.Size(320, 110),
          position: lnglat,
          autoPan: false,
          offset: new IMAP.Pixel(160, 75),
          anchor: IMAP.Constants.CENTER,
          type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM,
          visible: true
        }
      );
    }
  }
}

// 电动车位置信息展示
function showDdcGpsData(data) {

  //  获取所有图层
  var overlays = map.getOverlayLayer().getOverlays();

  // 遍历推送过来的数据集合
  for (var li = 0; li < data.length; li++) {

    var hit = false;
    var location = data[li];
    for (var i in overlays) {
      var lid = "ddc_" + location.device;
      if (overlays[i].type == "ddc" && overlays[i].id == lid) {
        // 当前标注打开了窗口， 新添加的标注需要自动打开窗口
        if (_current_marker && _current_marker.id == lid && _current_marker.getInfoWindow() != null) {
          hit = true;
        }

        map.getOverlayLayer().removeOverlay(i);
        break;
      }
    }

    // 地图添加标注
    var marker = addMediumMarker(location.lon, location.lat, location.device, "ddc", location);

    // 如果地图上的警员标注正好打开了 InfoWindow
    if (hit) {
      _current_marker = marker;

      var content = assembleInfoWindowContentWithoutPicture("电动车信息", "车牌号码：" + location.palteId + "<br/>车主姓名：" + location
        .name + "<br/>车主手机：" + location.phone + "<br/>定位时间：" + location.rksj);

      var lnglat = marker.getPosition();
      marker.openInfoWindow(
        content, {
          size: new IMAP.Size(320, 110),
          position: lnglat,
          autoPan: false,
          offset: new IMAP.Pixel(160, 75),
          anchor: IMAP.Constants.CENTER,
          type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM,
          visible: true
        }
      );
    }
  }
}

// 警车位置信息展示np
function showJcGpsData(data) {

  //  获取所有图层
  var overlays = map.getOverlayLayer().getOverlays();

  // 遍历推送过来的数据集合
  for (var li = 0; li < data.length; li++) {

    var hit = false;
    var location = data[li];
    for (var i in overlays) {
      var lid = "jc_" + location.clbh;
      if (overlays[i].type == "jc" && overlays[i].id == lid) {
        // 当前标注打开了窗口， 新添加的标注需要自动打开窗口
        if (_current_marker && _current_marker.id == lid && _current_marker.getInfoWindow() != null) {
          hit = true;
        }
        map.getOverlayLayer().removeOverlay(i);
        break;
      }
    }

    // 地图添加标注
    var marker = addMediumMarker(location.gpsjd, location.gpswd, location.clbh, "jc", location);

    // 如果地图上的警员标注正好打开了 InfoWindow
    if (hit) {
      _current_marker = marker;

      var content = assembleInfoWindowContentWithoutPicture("警车信息", "车牌号码：" + location.cphm + "<br/>车辆部门：" + location
        .clbm + "<br/>定位时间：" + location.gpssj);

      var lnglat = marker.getPosition();
      marker.openInfoWindow(
        content, {
          size: new IMAP.Size(320, 110),
          position: lnglat,
          autoPan: false,
          offset: new IMAP.Pixel(160, 75),
          anchor: IMAP.Constants.CENTER,
          type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM,
          visible: true
        }
      );
    }
  }
}


function drawBarChart(chart) {
  var labels = chart.labels;
  var data = chart.datasets[0].data
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('chart'));

  var option = {
    grid: {
      left: 50,
      x: 0,
      y: 0,
      x2: 0,
      y2: 0,
    },
    title: {
      show: false
    },
    color: ['#3398DB'],
    xAxis: {
      show: false,
    },
    yAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#dddee1' // 左边线的颜色
        }
      },
      data: labels
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: data,
      label: {
        normal: {
          show: true //显示数字
        }
      }
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

}


function successCallBack(e) {
  var data = JSON.parse(e.data);
  var code = data.code;
  if (code == 200 && data.dataType == 'YBLS') {
    var ybls = data.data;
    countUp('syrk', ybls.syrk);
    countUp('syfw', ybls.syfw);
    countUp('sydw', ybls.sydw);
    countUp('syafss', ybls.syafss + 8);
    countUp('syllzb', ybls.syllzb);
    countUp('syjq', ybls.syjq);
    countUp('hjry', ybls.hjry);
    countUp('lhry', ybls.lhry);
    countUp('zdry', ybls.zdry);
  } else if (code == 200 && data.dataType == 'YT') {
    showDynamicData(data.data);
    loadFaceMsgCount();
    // loadFaceSimilarCount();
  } else if (code == 200 && data.dataType == 'CLBK') {
    for (var i = 0; i < data.data.length; i++) {
      toastr.options = {
        "closeButton": true,
        "debug": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "0",
        "extendedTimeOut": "0",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      toastr.warning(data.data[i].plateid + " " + data.data[i].parkname, "车辆布控报警消息!");
      alarm();
      loadControlData();
    }

  } else if (code == 200 && data.dataType == 'RYBK') {
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "progressBar": false,
      "positionClass": "toast-bottom-right",
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "0",
      "extendedTimeOut": "0",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    toastr.warning(data.data.xm + " " + data.data.zjhm + "<br/>" + data.data.parkname, "人员布控报警消息!");
    alarm();
    loadControlData();
  } else if (code == 200 && data.dataType == 'JYDW') {
    showMjGpsData(data.data);
  } else if (code == 200 && data.dataType == 'DDCDW') {
    showDdcGpsData(data.data);
  } else if (code == 200 && data.dataType == 'JCDW') {
    showJcGpsData(data.data);
  }
}


function alarm() {
  var audio = document.getElementById("bgMusic");

  //播放(继续播放)
  audio.play();

  // //暂停
  // audio.pause();

  // //停止
  // audio.pause();
  // audio.currentTime = 0;

  // //重新播放
  // audio.currentTime = 0;
  // audio.play();
}

function createEventSource(sseSubscriptionParams, successCallBack) {
  var token = Cookies.get("Admin-Token");
  var url = baseUrl + '/sseEmitter/' + sseSubscriptionParams;
  if (!!window.EventSource) {
    var source = new EventSource(url);
    source.addEventListener('message', function (e) {
      successCallBack(e);
    }, true);
    source.addEventListener('open', function (e) {
      console.log("Connection opened");
    }, true);

    source.addEventListener('error', function (e) {
      console.log("Connection error");
    }, true);

    source.addEventListener('close', function (e) {
      console.log("Connection closed");
    }, true);
  }
}

// 展示推送的动态感知数据 - 抓拍
function showDynamicData(message) {

  // 地图展示动态感知数据
  if ($("#operator-dynamic").is(":checked")) {
    showDynamicDataInMap(message);
  }

  // 刷新右侧菜单中的抓拍信息
  showDynamicDataInFaceMsgMenu(message);
}

var _dynamic_marker;
// 地图展示动态感知数据
function showDynamicDataInMap(message) {

  // 地图展示动态感知 Marker
  addMarkerWithLabel(message.cameraLng, message.cameraLat, message.cameraId, 'dynamic', message);

}

// 地图展示动态感知 Marker
function addMarkerWithLabel(lng, lat, did, type, origin) {
  if (!map) {
    return;
  }

  // 如果已经展示了动态数据，清除数据
  if (_dynamic_marker) {
    map.getOverlayLayer().removeOverlay(_dynamic_marker);
  }

  // marker options
  var path = locationPath();
  var opts = new IMAP.MarkerOptions();
  opts.anchor = IMAP.Constants.BOTTOM_CENTER;
  opts.icon = new IMAP.Icon(
    path + "/static/image/dynamic_16.png", {
      "size": new IMAP.Size(16, 16),
      "offset": new IMAP.Pixel(0, 0)
    }
  );

  // marker location
  var lnglat = new IMAP.LngLat(lng, lat);
  _dynamic_marker = new IMAP.Marker(lnglat, opts);
  _dynamic_marker.id = type + "_" + did;
  _dynamic_marker.type = type;
  map.getOverlayLayer().addOverlay(_dynamic_marker, false);

  var content = assembleLabelContentForDynamicData("动态感知", picBaseUrl + "/face/" + origin.faceImageUrl + ".jpg",
    origin.cameraName + "</br>" + origin.timeBegin);
  // marker label
  _dynamic_marker.setLabel(
    content, {
      "anchor": IMAP.Constants.TOP_CENTER,
      "visible": true,
      "offset": new IMAP.Pixel(0, -134)
    }
  );
}

function assembleLabelContentForDynamicData(title, url, context) {
  var content = "<div class=\"dynamic-container\">"
  content = content + "<div class=\"dynamic-title\">"
  content = content + "<div class=\"dynamic-title-content\">";
  content = content + title;
  content = content + "</div>";
  // content = content + "<span class=\"infowindow-title-close\" onclick=\"closeInfoWindow()\">";
  // content = content + "<i class=\"iconfont\">&#xe603;</i>"
  // content = content + "</span>";
  content = content + "</div>";
  content = content + "<div class=\"dynamic-content\">";
  content = content + "<img class=\"dynamic-content-image\" src=\" " + url +
    "\" onerror=\"this.src='/static/image/default_nophoto.png'\"/>";
  content = content + "<div class=\"dynamic-content-info\">"
  content = content + context;
  content = content + "</div>"
  content = content + "</div>";
  // content = content + "<div class=\"infowindow-marker\">";
  // content = content + "<i class=\"iconfont\">&#xe682;</i>";
  // content = content + "</div>";
  content = content + "</div>";
  return content;
}

// 刷新右侧菜单中的抓拍信息
function showDynamicDataInFaceMsgMenu(message) {

  // 组装 HTML
  var faceMsgItemHtml = assembleFaceMsgItem(message);

  // 插入目标节点
  $("#con_subdetail_face_1").prepend(faceMsgItemHtml);

  // 删除最后一个节点
  $("#con_subdetail_face_1 .con_subdetail_face_1_item").eq(-1).remove();

}

// 右侧菜单数据加载
function loadDefaultMenuDatas() {

  // 右侧菜单人脸识别数据 - 抓拍
  loadFaceMsgData();

  // 右侧菜单人脸识别数据 - 小区
  loadFaceSimilarData();

  //抓拍数量
  loadFaceMsgCount();

  //昨日抓拍数量
  loadFaceMsgCountYestoday();

  //识别数量
  // loadFaceSimilarCount();

  // //昨日识别数量
  // loadFaceSimilarCountYestoday();

  // 右侧菜单人脸识别数据 - 报警
  loadFaceSimilarAlarmData();

  // 右侧菜单开门数据
  loadDoorData();

  // 右侧菜单过车数据
  loadVehiclePassData();

  // WIFI 记录数据
  loadWifiData();

  // 窨井盖数据
  loadYjgData();

  // 烟雾感应数据
  loadYwgyData();

  // 布控报警数据
  loadControlData();

  loadRyCjlx();

}

function loadRyCjlx() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/rjbxx/countCjlx", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var messages = data.data;
      var xz = 0,
        qy = 0,
        xg = 0,
        zx = 0;
      for (var i = 0; i < messages.length; i++) {
        if (messages[i].type == '1') {
          xz += messages[i].cnt
        }
        if (messages[i].type == '2') {
          qy += messages[i].cnt
        }
        if (messages[i].type == '3') {
          xg += messages[i].cnt
        }
        if (messages[i].type == '4') {
          zx += messages[i].cnt
        }
        if (messages[i].type == '5') {
          qy += messages[i].cnt
        }
      }
      countUp('xz', xz)
      countUp('qy', qy)
      countUp('xg', xg)
      countUp('zx', zx)

    }
  });
}

// 窨井盖数据
function loadYjgData() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/xqxx/yjg/locations", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var messages = data.data;
      showYjgData(messages);
    }
  });
}

// 烟雾感应数据
function loadYwgyData() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/xqxx/ywgy/locations", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      for (var i = 0; i < locations.length; i++) {
        if (locations[i].lon != "" && locations[i].lat != "") {
          addMarker(locations[i].lon, locations[i].lat, locations[i].id, "smoke", locations[i]);
        }
      }
      // 右侧菜单中烟雾感应数据展示
      showYwgyData(locations);
    }
  });
}

// 布控数据
function loadControlData() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/controls", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var messages = data.data;
      showControlData(messages);
    }
  });
}
// 右侧菜单中布控数据展示
function showControlData(messages) {

  var token = Cookies.get("Admin-Token");
  var bkDataHtml = "";
  for (var i = 0; i < messages.length; i++) {
    if (messages[i].bjlb == '1') {
      bkDataHtml = bkDataHtml + "<div class=\"con_control_item\">";
      bkDataHtml = bkDataHtml + " <div class=\"item-content\">";
      bkDataHtml = bkDataHtml + "   <div class=\"item_info\">";
      bkDataHtml = bkDataHtml + "     <div>报警时间：" + messages[i].bjsj + "</div>";
      bkDataHtml = bkDataHtml + "     <div>布控车辆：" + messages[i].hphm + "</div>";
      bkDataHtml = bkDataHtml + "     <div>出现时间：" + messages[i].uploadtime + "</div>";
      bkDataHtml = bkDataHtml + "     <div>出现地点：<i class=\"iconfont\">&#xe651;</i>" + messages[i].parkname +
        "</div>";
      bkDataHtml = bkDataHtml + "   </div>";
      bkDataHtml = bkDataHtml + "  </div>";
      bkDataHtml = bkDataHtml + "</div>";
    } else if (messages[i].bjlb == '2') {
      bkDataHtml = bkDataHtml + "<div class=\"con_control_item\">";
      bkDataHtml = bkDataHtml + " <div class=\"item-content\">";
      bkDataHtml = bkDataHtml + "   <div class=\"item_info\">";
      bkDataHtml = bkDataHtml + "     <div>报警时间：" + messages[i].bjsj + "</div>";
      bkDataHtml = bkDataHtml + "     <div>人员姓名：" + messages[i].xm + "</div>";
      bkDataHtml = bkDataHtml + "     <div>证件号码：" + messages[i].zjhm + "</div>";
      bkDataHtml = bkDataHtml + "     <div>出现时间：" + messages[i].uploadtime + "</div>";
      bkDataHtml = bkDataHtml + "     <div>出现地点：<i class=\"iconfont\">&#xe651;</i>" + messages[i].parkname +
        "</div>";
      bkDataHtml = bkDataHtml + "   </div>";
      bkDataHtml = bkDataHtml + "  </div>";
      bkDataHtml = bkDataHtml + "</div>";
    }

  }

  $("#con_detail_6 .con_control").html(bkDataHtml);
}


// 右侧菜单中消防栓数据展示
function showYjgData(messages) {

  var token = Cookies.get("Admin-Token");
  var yjgDataHtml = "";
  for (var i = 0; i < messages.length; i++) {
    yjgDataHtml = yjgDataHtml + "<div class=\"con_xf_yjg_record_item\" data-pic=\"" + messages[i].crkbh + "\">";
    yjgDataHtml = yjgDataHtml + "  <i class=\"iconfont\">&#xe651;</i>";
    yjgDataHtml = yjgDataHtml + "  <div class=\"item_photo can-click\" onclick=\"showYjgPicDialog(this)\">";
    yjgDataHtml = yjgDataHtml + "    <img src=\"" + baseUrl + "/xqxx/" + messages[i].crkbh +
      "/photo?Authorization=" + token + "\" onerror=\"this.src='/static/image/default_nophoto.png'\">";
    yjgDataHtml = yjgDataHtml + "  </div>";
    yjgDataHtml = yjgDataHtml + "  <div class=\"item_info\">";
    yjgDataHtml = yjgDataHtml + "    <div class=\"item_info_name \">" + messages[i].crkmc + "</div>";
    yjgDataHtml = yjgDataHtml + "    <div class=\"item_info_status item_info_status_success\">正常</div>";
    yjgDataHtml = yjgDataHtml + "  </div>";
    yjgDataHtml = yjgDataHtml + "</div>";
  }

  $("#con_detail_5 #con_subdetail_xf_2").html(yjgDataHtml);
}

function showYjgPicDialog(obj) {

  var pic = $(obj).parent(".con_xf_yjg_record_item").data("pic");
  var content = assembleXfsDialogContent(pic);

  if (_layer_index) {
    layer.close(_layer_index);
  }

  _layer_index = layer.open({
    "type": 1,
    "shade": false,
    "title": false,
    "area": ['768px', '432px'],
    "content": content,
    "moveType": 1,
    "skin": 'layer-custom',
    "cancel": function () {
      layer.close(_layer_index);
    }
  });
}

// 右侧菜单中烟雾感应数据展示
function showYwgyData(messages) {

  var token = Cookies.get("Admin-Token");
  var ywgyDataHtml = "";
  for (var i = 0; i < messages.length; i++) {
    ywgyDataHtml = ywgyDataHtml + "<div class=\"con_xf_ywgy_record_item\">";
    ywgyDataHtml = ywgyDataHtml + "  <div class=\"item_info\">";
    ywgyDataHtml = ywgyDataHtml + "    <div class=\"item_info_name \">" + messages[i].xqmc + "</div>";
    ywgyDataHtml = ywgyDataHtml + "    <div class=\"item_info_name \">" + messages[i].dz + "</div>";
    ywgyDataHtml = ywgyDataHtml + "    <div class=\"item_info_name \"><i class=\"iconfont\">&#xe651;</i>&nbsp;" +
      messages[i].location + "</div>";
    if (messages[i].status === "正常") {
      ywgyDataHtml = ywgyDataHtml + "    <div class=\"item_info_status item_info_success\">" + messages[i].status + "</div>";
    } else {
      ywgyDataHtml = ywgyDataHtml + "    <div class=\"item_info_status item_info_error\">" + messages[i].status + "</div>";
    }
    ywgyDataHtml = ywgyDataHtml + "  </div>";
    ywgyDataHtml = ywgyDataHtml + "</div>";
  }

  $("#con_detail_5 #con_subdetail_xf_3").html(ywgyDataHtml);
}

// WIFI 记录数据
function loadWifiData() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/wifi/records", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var messages = data.data;
      showWifiData(messages);
    }
  });
}

// 展示 WIFI 数据
function showWifiData(messages) {

  var wifiDataHtml = "";
  for (var i = 0; i < messages.length; i++) {
    wifiDataHtml = wifiDataHtml + "<div class=\"con_wifi_item\">";
    wifiDataHtml = wifiDataHtml + " <div>";
    wifiDataHtml = wifiDataHtml + "   <div class=\"con_wifi_item_left\">MAC：</div>";
    wifiDataHtml = wifiDataHtml + "   <div class=\"con_wifi_item_right\">" + messages[i].mac + "</div>";
    wifiDataHtml = wifiDataHtml + " </div>";
    wifiDataHtml = wifiDataHtml + " <div>";
    wifiDataHtml = wifiDataHtml + "   <div class=\"con_wifi_item_left\">时间：</div>";
    wifiDataHtml = wifiDataHtml + "   <div class=\"con_wifi_item_right\">" + messages[i].startTime + "</div>";
    wifiDataHtml = wifiDataHtml + " </div>";
    wifiDataHtml = wifiDataHtml + " <div>";
    wifiDataHtml = wifiDataHtml + "   <div class=\"con_wifi_item_left\">ESSID：</div>";
    wifiDataHtml = wifiDataHtml + "   <div class=\"con_wifi_item_right word_break\">" + messages[i].essid +
      "</div>";
    wifiDataHtml = wifiDataHtml + " </div>";
    wifiDataHtml = wifiDataHtml + "</div>";

  }
  $("#con_detail_4 .con_wifi_items").html(wifiDataHtml);
}

// 加载右侧菜单过车数据
function loadVehiclePassData() {

  // 加载过车数据统计
  loadVehicleStat();

  // 加载过车记录数据
  loadVehiclePassRecords();
}

// 加载过车统计数据
function loadVehicleStat() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/xqtc/stat", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var message = data.data;
      showVehiclePassStatData(message);
    }
  });
}

// 加载过车统计数据
function loadVehiclePassRecords() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/xqtc/records", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var messages = data.data;
      showVehiclePassStatRecords(messages);
    }
  });
}

// 加载过车统计数据
function loadVehiclePassRecordsAlone() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/xqtc/records", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var messages = data.data;
      showVehiclePassStatRecordsAlone(messages)
    }
  });
}

// 展示过车统计记录
function showVehiclePassStatRecords(messages) {
  var passRecordsHtml = "";
  for (var i = 0; i < messages.length; i++) {

    var dtime = messages[i].tm.substring(5);
    var dpic = "";
    var din = "";
    var imageBaseUrl = '';
    if (messages[i].xqbh == "3128271900100000") {
      imageBaseUrl = carPicBaseUrl;
    } else {
      imageBaseUrl = picBaseUrl;
    }
    if (messages[i].status == "进入") {
      dpic = messages[i].inimg;
      din = "item_info_status_entry";
    } else {
      dpic = messages[i].outimg;
    }

    var pcolor = "";
    if (messages[i].platecolor == "黄色") {
      pcolor = "item_info_plate_yellow";
    }
    if (messages[i].platecolor == "白色") {
      pcolor = "item_info_plate_white";
    }
    if (messages[i].plateid.length == 8 && messages[i].platecolor == "黄色") {
      pcolor = "item_info_plate_green";
    }


    passRecordsHtml = passRecordsHtml + "<div class=\"con_vehicle_pass_record_item\" data-pic=\"" + dpic +
      "\" data-cphm=\"" + messages[i].cphm + "\" data-lxdh=\"" + messages[i].lxdh + "\" data-ssxq=\"" + messages[i]
      .ssxq + "\" data-dz=\"" + messages[i].dz + "\" data-clbh=\"" + messages[i].clbh + "\" data-xqbh=\"" + messages[i].xqbh + "\">";
    passRecordsHtml = passRecordsHtml +
      " <div class=\"item_photo can-click\" onclick=\"showVehicleVehiclePicDialog(this)\">";
    passRecordsHtml = passRecordsHtml + "   <img src=\"" + imageBaseUrl + "/car/" + dpic +
      "\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    passRecordsHtml = passRecordsHtml + " </div>";
    passRecordsHtml = passRecordsHtml + " <div class=\"item_info\">";
    passRecordsHtml = passRecordsHtml + "   <div class=\"item_info_plate " + pcolor + "\">" + messages[i].plateid +
      "</div>";
    passRecordsHtml = passRecordsHtml + "   <div>" + dtime + "</div>";
    passRecordsHtml = passRecordsHtml + "   <div class=\"item_info_status " + din + "\">" + messages[i].status +
      "</div>";
    if (messages[i].clly == '小区') {
      passRecordsHtml = passRecordsHtml +
        "   <div class=\"item_info_clly item_info_clly_xq\" onclick=\"showXqVehicleOwnersInfoDialog(this)\">" +
        messages[i].clly + "</div>";
    }
    passRecordsHtml = passRecordsHtml + "  </div>";
    passRecordsHtml = passRecordsHtml + "</div>";
  }
  $("#con_detail_3 .con_vehicle_pass_record").html(passRecordsHtml);
}

// 展示底部过车统计记录
function showVehiclePassStatRecordsAlone(messages) {
  var html = '';
  // $('#dg-container').destroy();
  $('#dg-wrapper').html('');
  for (var i = 0; i < messages.length; i++) {
    var imageBaseUrl = '';
    if (messages[i].xqbh == "3128271900100000") {
      imageBaseUrl = carPicBaseUrl;
    } else {
      imageBaseUrl = picBaseUrl;
    }
    var data = messages[i];
    var dtime = data.tm.substring(10);
    var dpic = "";
    var din = "";
    if (data.status == "进入") {
      dpic = data.inimg;
      din = "item_info_status_entry";
    } else {
      dpic = data.outimg;
    }
    html += "<a class=\"can-click\" data-pic=\"" + dpic + "\" data-xqbh=\"" + messages[i].xqbh +
      "\" onclick=\"showVehicleVehiclePicDialogAlone(this)\"><img src=\"" + imageBaseUrl + "/car/" + dpic +
      "\" onerror=\"this.src='/static/image/default_nophoto.png'\">" +
      "<div>" + data.plateid + " " + dtime + "</div>" +
      "</a>";
  }
  $('#dg-wrapper').append(html);

  $('#dg-container').gallery({
    autoplay: true,
    interval: 3000
  });
}

function showXqVehicleOwnersInfoDialog(obj) {

  var content = assembleXqVehicleOwnersInfoDialogContent(obj);

  if (_layer_index) {
    layer.close(_layer_index);
  }

  _layer_index = layer.open({
    "type": 1,
    "shade": false,
    "title": false,
    "area": ['600px', '180px'],
    "content": content,
    "moveType": 1,
    "cancel": function () {
      layer.close(_layer_index);
    }
  });
}

function assembleXqVehicleOwnersInfoDialogContent(obj, data) {
  var pic = $(obj).parent('.item_info').parent(".con_vehicle_pass_record_item").data("pic");
  var cphm = $(obj).parent('.item_info').parent(".con_vehicle_pass_record_item").data("cphm");
  var lxdh = $(obj).parent('.item_info').parent(".con_vehicle_pass_record_item").data("lxdh");
  var ssxq = $(obj).parent('.item_info').parent(".con_vehicle_pass_record_item").data("ssxq");
  var dz = $(obj).parent('.item_info').parent(".con_vehicle_pass_record_item").data("dz");
  var clbh = $(obj).parent('.item_info').parent(".con_vehicle_pass_record_item").data("clbh");
  var xqbh = $(obj).parent('.item_info').parent(".con_vehicle_pass_record_item").data("xqbh");
  var imageBaseUrl = '';
  if (xqbh == "3128271900100000") {
    imageBaseUrl = carPicBaseUrl;
  } else {
    imageBaseUrl = picBaseUrl;
  }
  var content = "";
  content = content + "<div class='dialog-vehicle-owner-container'>";
  content = content + "<div class='img'>";
  content = content + "<img src='" + imageBaseUrl + "/car/" + pic +
    "' onerror=\"this.src='/static/image/default_nophoto.png'\">";
  content = content + "</div>";
  content = content + "<div class='msg'>";
  content = content + "<div>车牌号码：" + cphm + "</div>";
  content = content + "<div>联系电话：" + lxdh + "</div>";
  content = content + "<div>所属小区：" + ssxq + "</div>";
  content = content + "<div>居住地址：" + dz + "</div>";
  content = content + "<div>车位编号：" + clbh + "</div>";
  content = content + "</div>";
  content = content + "</div>";
  return content;
}

function showVehicleVehiclePicDialogAlone(obj) {

  var pic = $(obj).data("pic");
  var xqbh = $(obj).data("xqbh");
  var content = assembleVehiclePicDialogContent(pic, xqbh);

  if (_layer_index) {
    layer.close(_layer_index);
  }

  _layer_index = layer.open({
    "type": 1,
    "shade": false,
    "title": false,
    "area": ['768px', '432px'],
    "content": content,
    "moveType": 1,
    "skin": 'layer-custom',
    "cancel": function () {
      layer.close(_layer_index);
    }
  });
}


function showVehicleVehiclePicDialog(obj) {

  var pic = $(obj).parent(".con_vehicle_pass_record_item").data("pic");
  var xqbh = $(obj).parent(".con_vehicle_pass_record_item").data("xqbh");
  var content = assembleVehiclePicDialogContent(pic, xqbh);

  if (_layer_index) {
    layer.close(_layer_index);
  }

  _layer_index = layer.open({
    "type": 1,
    "shade": false,
    "title": false,
    "area": ['768px', '432px'],
    "content": content,
    "moveType": 1,
    "skin": 'layer-custom',
    "cancel": function () {
      layer.close(_layer_index);
    }
  });
}

function assembleVehiclePicDialogContent(dpic, xqbh) {
  var imageBaseUrl = ''
  if (xqbh == "3128271900100000") {
    imageBaseUrl = carPicBaseUrl;
  } else {
    imageBaseUrl = picBaseUrl;
  }
  var content = "";
  content = content + "<div class=\"dialog-vehicle-pass-container\">";
  content = content + "<img src=\"" + imageBaseUrl + "/car/" + dpic +
    "\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
  content = content + "</div>";
  return content;
}

// 展示过车统计数据
function showVehiclePassStatData(message) {

  var passStatHtml = "";
  passStatHtml = passStatHtml + "  <div class=\"con_vehicle_pass_stat_total\">";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_left\">车辆登记数：</div>";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_center\">" + message.v_total + "</div>";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_right\">| 外来车辆</div>";
  passStatHtml = passStatHtml + "  </div>";
  passStatHtml = passStatHtml + "  <div>";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_left\">今日进入：</div>";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_center\">" + message.v_entry + "</div>";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_right\">" + message.v_foreign_entry +
    "</div>";
  passStatHtml = passStatHtml + "  </div>";
  passStatHtml = passStatHtml + "  <div>";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_left\">今日外出：</div>";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_center\">" + message.v_exit + "</div>";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_right\">" + message.v_foreign_exit +
    "</div>";
  passStatHtml = passStatHtml + "  </div>";
  passStatHtml = passStatHtml + "  <div>";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_left\">滞留数：</div>";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_center\">" + message.v_detention + "</div>";
  passStatHtml = passStatHtml + "    <div class=\"con_vehicle_pass_stat_right\">" + message.v_foreign_detention +
    "</div>";
  passStatHtml = passStatHtml + "  </div>";

  $("#con_detail_3 .con_vehicle_pass_stat").html(passStatHtml);
}

// 加载抓拍数据 - 报警
function loadFaceSimilarAlarmData() {

  var token = Cookies.get("Admin-Token");

  // 右侧菜单人脸识别数据 - 报警
  loadData(baseUrl + "/face/similar/alarm", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var messages = data.data;
      showMenuContentForFaceSimilarAlarm(messages);
    }
  });
}

// 展示人脸小区
function showMenuContentForFaceSimilarAlarm(messages) {

  // 展示获取到的所有数据
  if ($("#con_subdetail_face_3 .con_subdetail_face_3_item").length == 0) {
    showMenuContentForFaceSimilarAlarmFull(messages);
    return;
  }

  // 展示增量数据
  showMenuContentForFaceSimilarAlarmItem(messages);
}

// 展示增量数据
function showMenuContentForFaceSimilarAlarmItem(messages) {

  var token = Cookies.get("Admin-Token");

  // 倒序获取数据
  for (var i = messages.length - 1; i >= 0; i--) {

    // 判断数据是否存在
    if ($("#con_subdetail_face_3 #face_similar_alarm_item_" + messages[i].faceImageId).length != 0) {
      continue;
    }

    var carameName = messages[i].cameraName;

    // 数据加密
    var mb = $.base64.btoa(JSON.stringify(messages[i]), true);

    var faceSimilarHtml = "";
    faceSimilarHtml = faceSimilarHtml + "<div id=\"face_similar_alarm_item_" + messages[i].faceImageId +
      "\" class=\"con_subdetail_face_3_item\">";
    faceSimilarHtml = faceSimilarHtml + " <div class=\"item-title\">";
    faceSimilarHtml = faceSimilarHtml + "   <i class=\"iconfont\">&#xe651;</i>";
    faceSimilarHtml = faceSimilarHtml + "   <div title=" + carameName + " class=\"item-title-name\">" + carameName + "</div>";
    faceSimilarHtml = faceSimilarHtml + "   <div class=\"item-title-time\">" + messages[i].timeBegin + "</div>";
    faceSimilarHtml = faceSimilarHtml + " </div>";
    faceSimilarHtml = faceSimilarHtml + " <div class=\"item-content\" data-message=\"" + mb + "\">";
    faceSimilarHtml = faceSimilarHtml +
      "   <div class=\"item_avatar can-click\" onclick=\"showFaceSimilarAlarmDialog(this)\">";
    faceSimilarHtml = faceSimilarHtml + "     <img src=\"" + picBaseUrl + "/face/" + messages[i].faceImageUrl +
      ".jpg\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml +
      "   <div class=\"item_avatar can-click\" onclick=\"showFaceSimilarAlarmDialog(this)\">";
    faceSimilarHtml = faceSimilarHtml + "     <img src=\"" + picBaseUrl + "/face/" + messages[i].hitPic +
      ".jpg\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml + "   <div class=\"item_info\">";
    faceSimilarHtml = faceSimilarHtml + "     <div class=\"item_info_contrast\">" + messages[i].similarity + "%" +
      "</div>";
    faceSimilarHtml = faceSimilarHtml + "     <div>" + messages[i].hitXm + "</div>";
    faceSimilarHtml = faceSimilarHtml + "     <div>" + messages[i].hitRepositoryName + "</div>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml + "  </div>";
    faceSimilarHtml = faceSimilarHtml + "</div>";

    // 添加增量数据
    $("#con_subdetail_face_3").prepend(faceSimilarHtml);
  }

  // 删除列表后面的数据
  var tcount = $("#con_subdetail_face_3 .con_subdetail_face_3_item").length;
  if (tcount > 20) {
    var dcount = tcount - 20;
    for (var i = 0; i < dcount; i++) {
      $("#con_subdetail_face_3 .con_subdetail_face_3_item").eq(-1).remove();
    }
  }
}

// 人脸数据(报警)内容展示
function showMenuContentForFaceSimilarAlarmFull(messages) {
  var token = Cookies.get("Admin-Token");

  var faceSimilarHtml = "";
  for (var i = 0; i < messages.length; i++) {

    var carameName = messages[i].cameraName;

    // 数据加密
    var mb = $.base64.btoa(JSON.stringify(messages[i]), true);

    faceSimilarHtml = faceSimilarHtml + "<div id=\"face_similar_alarm_item_" + messages[i].faceImageId +
      "\" class=\"con_subdetail_face_3_item\">";
    faceSimilarHtml = faceSimilarHtml + " <div class=\"item-title\">";
    faceSimilarHtml = faceSimilarHtml + "   <i class=\"iconfont\">&#xe651;</i>";
    faceSimilarHtml = faceSimilarHtml + "   <div title=" + carameName + " class=\"item-title-name\">" + carameName + "</div>";
    faceSimilarHtml = faceSimilarHtml + "   <div class=\"item-title-time\">" + messages[i].timeBegin + "</div>";
    faceSimilarHtml = faceSimilarHtml + " </div>";
    faceSimilarHtml = faceSimilarHtml + " <div class=\"item-content\" data-message=\"" + mb + "\">";
    faceSimilarHtml = faceSimilarHtml +
      "   <div class=\"item_avatar can-click\" onclick=\"showFaceSimilarAlarmDialog(this)\">";
    faceSimilarHtml = faceSimilarHtml + "     <img src=\"" + picBaseUrl + "/face/" + messages[i].faceImageUrl +
      ".jpg\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml +
      "   <div class=\"item_avatar can-click\" onclick=\"showFaceSimilarAlarmDialog(this)\">";
    faceSimilarHtml = faceSimilarHtml + "     <img src=\"" + picBaseUrl + "/face/" + messages[i].hitPic +
      ".jpg\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml + "   <div class=\"item_info\">";
    faceSimilarHtml = faceSimilarHtml + "     <div class=\"item_info_contrast\">" + messages[i].similarity + "%" +
      "</div>";
    faceSimilarHtml = faceSimilarHtml + "     <div>" + messages[i].hitXm + "</div>";
    faceSimilarHtml = faceSimilarHtml + "     <div>" + messages[i].hitRepositoryName + "</div>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml + "  </div>";
    faceSimilarHtml = faceSimilarHtml + "</div>";
  }

  $("#con_subdetail_face_3").html(faceSimilarHtml);
}

// 加载抓拍数据 - 小区
function loadFaceSimilarData() {

  var token = Cookies.get("Admin-Token");

  // 右侧菜单人脸识别数据 - 小区
  loadData(baseUrl + "/face/similar", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var messages = data.data;
      showMenuContentForFaceSimilar(messages);
    }
  });
}

// 展示人脸小区
function showMenuContentForFaceSimilar(messages) {

  // 展示获取到的所有数据
  if ($("#con_subdetail_face_2 .con_subdetail_face_2_item").length == 0) {
    showMenuContentForFaceSimilarFull(messages);
    return;
  }

  // 展示增量数据
  showMenuContentForFaceSimilarItem(messages);
}

// 展示增量数据
function showMenuContentForFaceSimilarItem(messages) {

  var token = Cookies.get("Admin-Token");

  for (var i = messages.length - 1; i >= 0; i--) {

    // 判断数据是否存在
    if ($("#con_subdetail_face_2 #face_similar_item_" + messages[i].faceImageId).length != 0) {
      continue;
    }

    var carameName = messages[i].cameraName;

    // 数据加密
    var mb = $.base64.btoa(JSON.stringify(messages[i]), true);

    var faceSimilarHtml = "";
    faceSimilarHtml = faceSimilarHtml + "<div id=\"face_similar_item_" + messages[i].faceImageId +
      "\" class=\"con_subdetail_face_2_item\">";
    faceSimilarHtml = faceSimilarHtml + " <div class=\"item-title\">";
    faceSimilarHtml = faceSimilarHtml + "   <i class=\"iconfont\">&#xe651;</i>";
    faceSimilarHtml = faceSimilarHtml + "   <div title=" + carameName + " class=\"item-title-name\">" + carameName + "</div>";
    faceSimilarHtml = faceSimilarHtml + "   <div class=\"item-title-time\">" + messages[i].timeBegin + "</div>";
    faceSimilarHtml = faceSimilarHtml + " </div>";
    faceSimilarHtml = faceSimilarHtml + " <div class=\"item-content\" data-message=\"" + mb + "\">";
    faceSimilarHtml = faceSimilarHtml +
      "   <div class=\"item_avatar can-click\" onclick=\"showFaceSimilarDialog(this)\">";
    faceSimilarHtml = faceSimilarHtml + "     <img src=\"" + picBaseUrl + "/face/" + messages[i].faceImageUrl +
      ".jpg\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml +
      "   <div class=\"item_avatar can-click\" onclick=\"showFaceSimilarDialog(this)\">";
    faceSimilarHtml = faceSimilarHtml + "     <img src=\"" + baseUrl + "/face/similar/" + messages[i].hitZjhm +
      "/zp?Authorization=" + token + "\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml + "   <div class=\"item_info\">";
    faceSimilarHtml = faceSimilarHtml + "     <div class=\"item_info_contrast\">" + messages[i].similarity + "%" +
      "</div>";
    faceSimilarHtml = faceSimilarHtml + "     <div>" + messages[i].hitXm + "</div>";
    faceSimilarHtml = faceSimilarHtml + "     <div class=\"can-click\" style=\"display: inline-block;\" title=\"" +
      messages[i].hitZjhm +
      "\" onclick=\"openArchive('" + messages[i].hitZjhm +
      "')\"><img src=\"/static/image/sfz.jpg\" width=\"20\" /></div>";
    faceSimilarHtml = faceSimilarHtml +
      "     <div title=\"历史抓拍次数\" style=\"display: inline-block;padding: 0 10px;\">" + messages[i].historyAppearTimes +
      "次</div>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml + "  </div>";
    faceSimilarHtml = faceSimilarHtml + "</div>";

    // 添加增量数据
    $("#con_subdetail_face_2").prepend(faceSimilarHtml);
  }

  // 删除列表后面的数据
  var tcount = $("#con_subdetail_face_2 .con_subdetail_face_2_item").length;
  if (tcount > 10) {
    var dcount = tcount - 10;
    for (var i = 0; i < dcount; i++) {
      $("#con_subdetail_face_2 .con_subdetail_face_2_item").eq(-1).remove();
    }
  }
}

// 人脸数据(小区)内容展示
function showMenuContentForFaceSimilarFull(messages) {

  var token = Cookies.get("Admin-Token");

  var faceSimilarHtml = "";
  for (var i = 0; i < messages.length; i++) {

    var carameName = messages[i].cameraName;

    // 数据加密
    var mb = $.base64.btoa(JSON.stringify(messages[i]), true);

    faceSimilarHtml = faceSimilarHtml + "<div id=\"face_similar_item_" + messages[i].faceImageId +
      "\" class=\"con_subdetail_face_2_item\">";
    faceSimilarHtml = faceSimilarHtml + " <div class=\"item-title\">";
    faceSimilarHtml = faceSimilarHtml + "   <i class=\"iconfont\">&#xe651;</i>";
    faceSimilarHtml = faceSimilarHtml + "   <div title=" + carameName + " class=\"item-title-name\">" + carameName + "</div>";
    faceSimilarHtml = faceSimilarHtml + "   <div class=\"item-title-time\">" + messages[i].timeBegin + "</div>";
    faceSimilarHtml = faceSimilarHtml + " </div>";
    faceSimilarHtml = faceSimilarHtml + " <div class=\"item-content\" data-message=\"" + mb + "\">";
    faceSimilarHtml = faceSimilarHtml +
      "   <div class=\"item_avatar can-click\" onclick=\"showFaceSimilarDialog(this)\">";
    faceSimilarHtml = faceSimilarHtml + "     <img src=\"" + picBaseUrl + "/face/" + messages[i].faceImageUrl +
      ".jpg\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml +
      "   <div class=\"item_avatar can-click\" onclick=\"showFaceSimilarDialog(this)\">";
    faceSimilarHtml = faceSimilarHtml + "     <img src=\"" + baseUrl + "/face/similar/" + messages[i].hitZjhm +
      "/zp?Authorization=" + token + "\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml + "   <div class=\"item_info\">";
    faceSimilarHtml = faceSimilarHtml + "     <div class=\"item_info_contrast\" title=\"相似度\">" + messages[i].similarity +
      "%" +
      "</div>";
    faceSimilarHtml = faceSimilarHtml + "     <div>" + messages[i].hitXm + "</div>";
    faceSimilarHtml = faceSimilarHtml + "     <div class=\"can-click\" style=\"display: inline-block;\" title=\"" +
      messages[i].hitZjhm +
      "\" onclick=\"openArchive('" + messages[i].hitZjhm +
      "')\"><img src=\"/static/image/sfz.jpg\" width=\"20\" /></div>";
    faceSimilarHtml = faceSimilarHtml +
      "     <div title=\"历史抓拍次数\" style=\"display: inline-block;padding: 0 10px;\">" + messages[i].historyAppearTimes +
      "次</div>";
    faceSimilarHtml = faceSimilarHtml + "   </div>";
    faceSimilarHtml = faceSimilarHtml + "  </div>";
    faceSimilarHtml = faceSimilarHtml + "</div>";
  }

  $("#con_subdetail_face_2").html(faceSimilarHtml);
}

// 展示比中图片的对话框
function showFaceSimilarDialog(obj) {
  var message = $.base64.atob($(obj).parent('.item-content').data("message"), true);
  var content = assembleFaceSimilarDialogContent(JSON.parse(message));

  if (_layer_index) {
    layer.close(_layer_index);
  }

  _layer_index = layer.open({
    "type": 1,
    "shade": false,
    "title": false,
    "area": ['780px', '345px'],
    "content": content,
    "moveType": 1,
    "cancel": function () {
      layer.close(_layer_index);
    }
  });
}

// 展示比中图片的对话框
function showFaceSimilarAlarmDialog(obj) {
  var message = $.base64.atob($(obj).parent('.item-content').data("message"), true);
  var content = assembleFaceSimilarDialogContent(JSON.parse(message), 'alarm');

  if (_layer_index) {
    layer.close(_layer_index);
  }

  _layer_index = layer.open({
    "type": 1,
    "shade": false,
    "title": false,
    "area": ['780px', '345px'],
    "content": content,
    "moveType": 1,
    "cancel": function () {
      layer.close(_layer_index);
    }
  });
}


// 比中（小区）对话框内容
function assembleFaceSimilarDialogContent(message, type) {
  var token = Cookies.get("Admin-Token");

  // 性别翻译
  var gender = '其他';
  if (message.recGender == 1) {
    gender = "男";
  } else if (message.recGender == 2) {
    gender = "女";
  }

  // 年龄范围翻译
  var age = "其他";
  if (message.recAgeRang == 0) {
    age = "小孩"
  } else if (message.recAgeRang == 1) {
    age = "青年"
  } else if (message.recAgeRang == 2) {
    age = "中年"
  } else if (message.recAgeRang == 3) {
    age = "老年"
  }

  // 眼镜翻译
  var glasses = "无";
  if (message.recGlasses == 1) {
    glasses = "眼镜";
  } else if (message.recGlasses == 2) {
    glasses = "墨镜";
  }

  var content = "";
  content = content + "<div class='dialog-face-similar-container'>";
  content = content + "<div class='img-1'>";
  content = content + "<img src='" + picBaseUrl + "/face/" + message.faceImageUrl +
    ".jpg' onerror=\"this.src='/static/image/default_nophoto.png'\">";
  content = content + "</div>";
  content = content + "<div class='img-2'>";
  if (type == "alarm") {
    content = content + "<img src=\'" + picBaseUrl + "/face/" + message.hitPic +
      ".jpg' onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    content = content + "</div>";
  } else {
    content = content + "<img src=\"" + baseUrl + "/face/similar/" + message.hitZjhm +
      "/zp?Authorization=" + token + "\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    content = content + "</div>";
  }

  content = content + "<div class='img-3'>";
  content = content + "<img src='" + picBaseUrl + "/face/" + message.pictureUrl +
    ".jpg' onerror=\"this.src='/static/image/default_nophoto.png'\">";
  content = content + "</div>";
  content = content + "<div class='msg-1'>";
  content = content + "<div>位置：" + message.cameraName + "</div>";
  content = content + "<div>时间：" + message.timeBegin + "</div>";
  content = content + "<div>";
  content = content + "特征：";
  if (message.recGender == 1) {
    content = content + "<i class=\"iconfont icon-custom\">&#xe61d;</i>";
  } else {
    content = content + "<i style=\"color: rgb(232, 68, 119);\" class=\"iconfont icon-custom\">&#xe614;</i>";
  }
  content = content + "<span>" + gender + "</span>";
  content = content + "<i class=\"iconfont icon-custom\">&#xe693;</i>";
  content = content + "<span>" + age + "</span>";
  content = content + "<i class=\"iconfont icon-custom\">&#xe98e;</i>";
  content = content + "<span>" + glasses + "</span>";
  content = content + "</div>";
  content = content + "</div>";
  content = content + "<div class='msg-2'>";
  content = content + "<div>姓名：" + message.hitXm + "</div>";
  content = content + "<div>性别：" + gender + "</div>";
  content = content + "<div>身份证号：" + message.hitZjhm + "</div>";
  content = content + "</div>";
  content = content + "<div class='msg-3'>";
  content = content + "<div>比中库：" + message.hitRepositoryName + "</div>";
  content = content + "<div>&nbsp;</div>";
  content = content + "<div>&nbsp;</div>";
  content = content + "</div>";
  content = content + "</div>";
  return content;
}

function loadFaceMsgCount() {

  var token = Cookies.get("Admin-Token");

  loadData(baseUrl + "/face/msg/count", token, function (data) {
    var code = data.code;
    if (code == 200) {
      countUp('face_msg_cnt', data.data)
    }
  });
}

function loadFaceMsgCountYestoday() {

  var token = Cookies.get("Admin-Token");

  loadData(baseUrl + "/face/msg/count/yestoday", token, function (data) {
    var code = data.code;
    if (code == 200) {
      countUp('face_msg_cnt_yestoday', data.data)
    }
  });
}

function loadFaceSimilarCount() {

  var token = Cookies.get("Admin-Token");

  loadData(baseUrl + "/face/similar/count", token, function (data) {
    var code = data.code;
    if (code == 200) {
      countUp('face_similar_cnt', data.data)
    }
  });
}

function loadFaceSimilarCountYestoday() {

  var token = Cookies.get("Admin-Token");

  loadData(baseUrl + "/face/similar/count/yestoday", token, function (data) {
    var code = data.code;
    if (code == 200) {
      countUp('face_similar_cnt_yestoday', data.data)
    }
  });
}




// 加载人脸数据 - 比中
function loadFaceMsgData() {

  var token = Cookies.get("Admin-Token");

  // 右侧菜单人脸识别数据 - 抓拍
  loadData(baseUrl + "/face/msg", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var messages = data.data;
      showMenuContentForFaceMsg(messages);
    }
  });
}

// 人脸数据(抓拍)内容展示
function showMenuContentForFaceMsg(messages) {

  var faceMsgHtml = "";
  for (var i = 0; i < messages.length; i++) {
    faceMsgHtml = faceMsgHtml + assembleFaceMsgItem(messages[i]);
  }

  $("#con_subdetail_face_1").html(faceMsgHtml);
}

function assembleFaceMsgItem(message) {
  var faceMsgItemHtml = "";
  var mb = $.base64.btoa(JSON.stringify(message), true);
  faceMsgItemHtml = faceMsgItemHtml + "<div class=\"con_subdetail_face_1_item\" data-message=\"" + mb +
    "\" data-mid=\"" + message.faceImageId + "\">";
  faceMsgItemHtml = faceMsgItemHtml + " <div class=\"item_avatar can-click\" onclick=\"showFaceMsgDialog(this);\">";
  faceMsgItemHtml = faceMsgItemHtml + "   <img src=\"" + picBaseUrl + "/face/" + message.faceImageUrl +
    ".jpg\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
  faceMsgItemHtml = faceMsgItemHtml + " </div>";
  faceMsgItemHtml = faceMsgItemHtml + " <div class=\"item_info\">";
  faceMsgItemHtml = faceMsgItemHtml + "   <div>" + message.cameraName + "</div>";
  faceMsgItemHtml = faceMsgItemHtml + "   <div>" + message.timeBegin + "</div>";
  faceMsgItemHtml = faceMsgItemHtml + " </div>";
  faceMsgItemHtml = faceMsgItemHtml + "</div>";
  return faceMsgItemHtml;
}

// 展示人脸抓拍对话框
var _layer_index;

function showFaceMsgDialog(obj) {

  var message = $.base64.atob($(obj).parent(".con_subdetail_face_1_item").data("message"), true);
  var content = assembleFaceMsgDialogContent(JSON.parse(message));

  if (_layer_index) {
    layer.close(_layer_index);
  }

  _layer_index = layer.open({
    "type": 1,
    "shade": false,
    "title": false,
    "area": ['605px', '245px'],
    "content": content,
    "moveType": 1,
    "cancel": function () {
      layer.close(_layer_index);
    }
  });
}


//显示开门数据
function showDoorDialog(src) {
  var content = "";
  content = content + "<div class=\"dialog-vehicle-pass-container\">";
  content = content + "<img src=\"" + src +
    "\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
  content = content + "</div>";

  if (_layer_index) {
    layer.close(_layer_index);
  }

  _layer_index = layer.open({
    "type": 1,
    "shade": false,
    "title": false,
    "area": ['768px', '432px'],
    "content": content,
    "moveType": 1,
    "skin": 'layer-custom',
    "cancel": function () {
      layer.close(_layer_index);
    }
  });
}

// 展示抓拍信息对话框
function assembleFaceMsgDialogContent(message) {
  var content = "";
  content = content + "<div class='dialog-face-msg-container'>";
  content = content + "<div class='img-1'>";
  content = content + "<img src='" + picBaseUrl + "/face/" + message.faceImageUrl +
    ".jpg' onerror=\"this.src='/static/image/default_nophoto.png'\">";
  content = content + "</div>";
  content = content + "<div class='img-2'>";
  content = content + "<img src='" + picBaseUrl + "/face/" + message.pictureUrl +
    ".jpg' onerror=\"this.src='/static/image/default_nophoto.png'\">";
  content = content + "</div>";
  content = content + "</div>";
  return content;
}

// 加载开门数据
function loadDoorData() {

  var token = Cookies.get("Admin-Token");

  // 右侧菜单人脸识别数据 - 小区
  loadData(baseUrl + "/accesscards", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var messages = data.data;
      showMenuContentForDoor(messages);
    }
  });
}

// 展示开门数据
function showMenuContentForDoor(messages) {

  // 展示获取到的所有数据
  if ($(".con_door .con_door_item").length == 0) {
    showMenuContentForDoorFull(messages);
    return;
  }

  // 展示增量数据
  showMenuContentForDoorItem(messages);
}


// 展示增量数据
function showMenuContentForDoorItem(messages) {
  for (var i = messages.length - 1; i >= 0; i--) {

    // 判断数据是否存在
    if ($(".con_door #con_door_item_" + messages[i].id).length != 0) {
      continue;
    }

    var doorHtml = "";
    doorHtml = doorHtml + "<div id=\"con_door_item_" + messages[i].id + "\" class=\"con_door_item\">";
    // doorHtml = doorHtml + " <div class=\"item-content\">";
    doorHtml = doorHtml +
      " <div class=\"item_avatar can-click\" onclick=\"showDoorDialog('" + mjPicBaseHost +
      messages[i].photoSmall +
      "');\">";
    doorHtml = doorHtml + "   <img src=\"" + mjPicBaseHost + messages[i].photoSmall +
      "\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    doorHtml = doorHtml + " </div>";
    doorHtml = doorHtml + "   <div class=\"item_info\">";
    doorHtml = doorHtml + "     <div>" + messages[i].name +
      "</div>";
    doorHtml = doorHtml +
      "     <div><i class=\"iconfont\" style=\"color:#F61653\">&#xe651;</i>" + messages[i].address +
      "</div>";
    doorHtml = doorHtml + "     <div>" + messages[i].createdDate + "</div>";
    doorHtml = doorHtml + "     <div><i class=\"iconfont\">&#xe601;</i>" + messages[i].phone + "&nbsp;</div>";
    doorHtml = doorHtml + "   </div>";
    // doorHtml = doorHtml + "  </div>";
    doorHtml = doorHtml + "</div>";

    // 添加增量数据
    $(".con_door").prepend(doorHtml);
  }

  // 删除列表后面的数据
  var tcount = $(".con_door .con_door_item").length;
  if (tcount > 10) {
    var dcount = tcount - 10;
    for (var i = 0; i < dcount; i++) {
      $(".con_door .con_door_item").eq(-1).remove();
    }
  }
}

// 开门内容展示
function showMenuContentForDoorFull(messages) {

  var token = Cookies.get("Admin-Token");

  var doorHtml = "";
  for (var i = 0; i < messages.length; i++) {

    doorHtml = doorHtml + "<div id=\"con_door_item_" + messages[i].id + "\" class=\"con_door_item\">";

    // doorHtml = doorHtml + " <div class=\"item-content\">";
    doorHtml = doorHtml +
      " <div class=\"item_avatar can-click\" onclick=\"showDoorDialog('" + mjPicBaseHost +
      messages[i].photoSmall +
      "');\">";
    doorHtml = doorHtml + "   <img src=\"" + mjPicBaseHost + messages[i].photoSmall +
      "\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
    doorHtml = doorHtml + " </div>";
    doorHtml = doorHtml + "   <div class=\"item_info\">";
    doorHtml = doorHtml + "     <div>" + messages[i].name +
      "</div>";
    doorHtml = doorHtml +
      "     <div><i class=\"iconfont\" style=\"color:#F61653\">&#xe651;</i>" + messages[i].address +
      "</div>";
    doorHtml = doorHtml + "     <div>" + messages[i].createdDate + "</div>";
    doorHtml = doorHtml + "     <div><i class=\"iconfont\">&#xe601;</i>" + messages[i].phone + "&nbsp;</div>";
    // doorHtml = doorHtml + "   </div>";
    doorHtml = doorHtml + "  </div>";
    doorHtml = doorHtml + "</div>";
  }

  $(".con_door").html(doorHtml);
}

// // 页面默认的定位
// function loadDefaultLocations() {

//   // 加载实有房屋
//   loadHouseLocations();

//   // 加载实有单位
//   loadDwLocations();

//   // 加载小区出入口
//   loadXqxxLocations();

//   // 加载安防措施
//   loadCameraLocations();

//   // 加载 WIFI 嗅探设备
//   loadWifiDeviceLocations();

//   // 加载消防栓位置
//   loadXfsLocations();


// }

// 加载消防栓位置
function loadXfsLocations() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/xqxx/xfs/locations", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      for (var i = 0; i < locations.length; i++) {
        if (locations[i].lon != "" && locations[i].lat != "") {
          addMarker(locations[i].lon, locations[i].lat, locations[i].crkbh, "xfs", locations[i]);
        }
      }

      // 右侧菜单中消防栓数据展示
      showXfsData(locations);
    }
  });
}

// 右侧菜单中消防栓数据展示
function showXfsData(messages) {

  var token = Cookies.get("Admin-Token");

  var xfsDataHtml = "";
  if (jcwdm == '16113006') {
    for (var i = 0; i < messages.length; i++) {
      xfsDataHtml = xfsDataHtml + "<div class=\"con_xf_xfs_record_item\" data-pic=\"" + messages[i].crkbh + "\">";
      xfsDataHtml = xfsDataHtml + "  <i class=\"iconfont\">&#xe651;</i>";
      xfsDataHtml = xfsDataHtml + "  <div class=\"item_photo can-click\" onclick=\"showXfsPicDialog(this)\">";
      xfsDataHtml = xfsDataHtml + "    <img src=\"" + baseUrl + "/xqxx/" + messages[i].crkbh +
        "/photo?Authorization=" + token + "\" onerror=\"this.src='/static/image/default_nophoto.png'\">";
      xfsDataHtml = xfsDataHtml + "  </div>";
      xfsDataHtml = xfsDataHtml + "  <div class=\"item_info\">";
      xfsDataHtml = xfsDataHtml + "    <div class=\"item_info_name \">" + messages[i].crkmc + "</div>";
      if (messages[i].status === "正常") {
        xfsDataHtml = xfsDataHtml + "    <div class=\"item_info_status item_info_success\">" + messages[i].status + "</div>";
      } else {
        xfsDataHtml = xfsDataHtml + "    <div class=\"item_info_status item_info_error\">" + messages[i].status + "</div>";
      }
      xfsDataHtml = xfsDataHtml + "  </div>";
      xfsDataHtml = xfsDataHtml + "</div>";
    }
  } else {
    for (var i = 0; i < messages.length; i++) {
      xfsDataHtml = xfsDataHtml + "<div class=\"con_xf_xfs_record_item\" data-pic=\"" + messages[i].crkbh + "\">";
      xfsDataHtml = xfsDataHtml + "  <i class=\"iconfont\">&#xe651;</i>";
      xfsDataHtml = xfsDataHtml + "  <div class=\"item_info\" style=\"width:218px;\">";
      xfsDataHtml = xfsDataHtml + "    <div class=\"item_info_name \" style=\"width:210px;\">" + messages[i].crkmc + "</div>";
      xfsDataHtml = xfsDataHtml + "    <div class=\"item_info_status\">" + messages[i].status + "</div>";
      xfsDataHtml = xfsDataHtml + "  </div>";
      xfsDataHtml = xfsDataHtml + "</div>";
    }
  }


  $("#con_detail_5 #con_subdetail_xf_1").html(xfsDataHtml);
}

function showXfsPicDialog(obj) {

  var pic = $(obj).parent(".con_xf_xfs_record_item").data("pic");
  var content = assembleXfsDialogContent(pic);

  if (_layer_index) {
    layer.close(_layer_index);
  }

  _layer_index = layer.open({
    "type": 1,
    "shade": false,
    "title": false,
    "area": ['768px', '432px'],
    "content": content,
    "moveType": 1,
    "skin": 'layer-custom',
    "cancel": function () {
      layer.close(_layer_index);
    }
  });
}

function assembleXfsDialogContent(dpic) {
  var token = Cookies.get("Admin-Token");
  var content = "";
  content = content + "<div class=\"dialog-vehicle-pass-container\">";
  content = content + "<img src=\"" + baseUrl + "/xqxx/" + dpic + "/photo?Authorization=" + token +
    "\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
  content = content + "</div>";
  return content;
}


// 加载 WIFI 嗅探设备
function loadWifiDeviceLocations() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/wifi/locations", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      for (var i = 0; i < locations.length; i++) {
        if (locations[i].longitude != "" && locations[i].latitude != "") {
          addMarker(locations[i].longitude, locations[i].latitude, locations[i].equipmentNum, "wifi", locations[
            i]);
        }
      }
    }
  });
}

// 加载安防措施定位
function loadCameraLocations() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/camera/locations", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      for (var i = 0; i < locations.length; i++) {
        if (locations[i].lng != "" && locations[i].lat != "") {
          addMarker(locations[i].lng, locations[i].lat, locations[i].xh, "camera", locations[i]);
        }
      }
    }
  });
}

// 加载小区出入口定位
function loadXqxxLocations() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/xqxx/locations", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      for (var i = 0; i < locations.length; i++) {
        if (locations[i].lon != "" && locations[i].lat != "") {
          addMarker(locations[i].lon, locations[i].lat, locations[i].crkbh, "xqxx", locations[i]);
        }
      }
    }
  });
}

// 加载实有单位
function loadDwLocations() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/dwxx/locations", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      for (var i = 0; i < locations.length; i++) {
        if (locations[i].gdLat != "" && locations[i].gdlon != "") {
          addMarker(locations[i].gdLon, locations[i].gdLat, locations[i].dwbh, "dwxx", locations[i]);
        }
      }
    }
  });
}

// 加载实有房屋
function loadHouseLocations() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/houses/locations", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      if (locations.length > 100) {
        addHouseCluster(locations, "house")
      } else {
        for (var i = 0; i < locations.length; i++) {
          addMarker(locations[i].gpsjd, locations[i].gpswd, locations[i].cjbh, "house", locations[i]);
        }
      }
    }
  });
}

// 加载电子警察
function loadPeccLocations() {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/jkdws/locations?" + "lx=1", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      for (var i = 0; i < locations.length; i++) {
        addMarker(locations[i].lon, locations[i].lat, locations[i].jkdwbh, "pecc", locations[i]);
      }
    }
  });
}

// 根据类别加载小区信息
function loadXqxxLocationsByType(type, typeName) {
  var token = Cookies.get("Admin-Token");
  loadData(baseUrl + "/xqxx/" + type + "/locations", token, function (data) {
    var code = data.code;
    if (code == 200) {
      var locations = data.data;
      for (var i = 0; i < locations.length; i++) {
        addMarker(locations[i].lon, locations[i].lat, locations[i].crkbh, typeName, locations[i]);
      }
    }
  });
}


// 展示某个类型的坐标信息
function showLocationsByType(type) {
  var overlays = map.getOverlayLayer().getOverlays();
  for (var i in overlays) {
    if (overlays[i].type == type) {
      overlays[i].visible(true);
    }
  }
}

// 隐藏某个类型的坐标信息
function hiddenLocationsByType(type) {
  var overlays = map.getOverlayLayer().getOverlays();
  for (var i in overlays) {
    if (overlays[i].type == type) {
      overlays[i].visible(false);
    }
  }

  // close InfoWindow
  if (_current_marker && _current_marker.type == type) {
    _current_marker.closeInfoWindow();
  }
}

// 展示实有房屋位置
function showHouseLocations() {
  if (houseMarkers) {
    //获取点聚合的显示级别数
    var zoom = parseInt(4, 10);
    //获取点聚合的缓冲大小
    var size = parseInt(5, 10);
    //获取点聚合的最小聚合数
    var clusterSum = parseInt(10, 10);
    //获取是否允许点击放大
    var zoomclick = 'true';
    zoomclick = zoomclick == 'true' ? true : false;
    zoom = zoom == -1 ? null : zoom;
    size = size == -1 ? null : size;
    clusterSum = clusterSum == -1 ? null : clusterSum;

    //创建聚合管理对象 并将各参数设置到其中
    map.plugin(['IMAP.DataCluster'], function () {
      houseDataCluster = new IMAP.DataCluster(map, houseMarkers, {
        // styles: sts,
        maxZoom: zoom,
        gridSize: size,
        zoomOnClick: zoomclick,
        minimumClusterSize: clusterSum
      });
    });
  } else {
    var overlays = map.getOverlayLayer().getOverlays();
    for (var i in overlays) {
      if (overlays[i].type == "house") {
        overlays[i].visible(true);
        overlays[i].setLabel(overlays[i].dlbh + "号", {
          "anchor": IMAP.Constants.BOTTOM_CENTER,
          "fontColor": "rgba(255,255,255,.6)",
          "offset": new IMAP.Pixel(0, -15)
        });
      }
    }

  }

}

// 隐藏实有房屋位置
function hiddenHouseLocations() {
  if (houseDataCluster) {
    //清空所有的marker及点聚合对象
    houseDataCluster.setMap(null);
  } else {
    var overlays = map.getOverlayLayer().getOverlays();
    for (var i in overlays) {
      if (overlays[i].type == "house") {
        overlays[i].visible(false);
        overlays[i].removeLabel();
      }
    }
  }
}

//显示警员
function showPoliceLocations() {
  var overlays = map.getOverlayLayer().getOverlays();
  for (var i in overlays) {
    if (overlays[i].type == "police") {
      overlays[i].visible(true);
      overlays[i].setLabel(overlays[i].origin.mjxm, {
        "anchor": IMAP.Constants.BOTTOM_CENTER,
        "fontColor": "rgba(255,255,255,.6)",
        "offset": new IMAP.Pixel(0, -24)
      });
    }
  }
}

//隐藏警员
function hiddenPoliceLocations() {
  var overlays = map.getOverlayLayer().getOverlays();
  for (var i in overlays) {
    if (overlays[i].type == "police") {
      overlays[i].visible(false);
      overlays[i].removeLabel();
    }
  }
}

// 显示警车
function showJcLocations() {
  var overlays = map.getOverlayLayer().getOverlays();
  for (var i in overlays) {
    if (overlays[i].type == "jc") {
      overlays[i].visible(true);
      overlays[i].setLabel(overlays[i].origin.cphm, {
        "anchor": IMAP.Constants.BOTTOM_CENTER,
        "fontColor": "rgba(255,255,255,.6)",
        "offset": new IMAP.Pixel(0, -24)
      });
    }
  }
}

// 隐藏警车
function hiddenJcLocations() {
  var overlays = map.getOverlayLayer().getOverlays();
  for (var i in overlays) {
    if (overlays[i].type == "jc") {
      overlays[i].visible(false);
      overlays[i].removeLabel();
    }
  }
}


// 异步加载数据
function loadData(url, token, callback) {
  $.ajax({
    headers: {
      Authorization: token
    },
    type: "get",
    url: url,
    data: {
      "xqbh": xqbh,
      "jcwdm": jcwdm,
      "pcsdm": pcsdm,
      "jlxdm": jlxdm
    },
    success: function (data) {
      callback(data);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      var status = XMLHttpRequest.status;
      if (status == 403) {
        var loc = locationPath();
        window.parent.location.href = loc;
      }
    }
  });
}

// 右侧菜单切换
function setTab(name, cursel, n) {
  for (i = 1; i <= n; i++) {
    if (i == cursel) {
      $('#' + name + i).addClass('hover')
    } else {
      $('#' + name + i).removeClass('hover')
    }
    // var menu = document.getElementById(name + i);
    var con = document.getElementById("con_" + name + "_" + i);
    // menu.className = i == cursel ? "hover" : "";
    con.style.display = i == cursel ? "block" : "none";
  }
}

// 子菜单切换
function setSubTab(prefix, model, index) {

  // 菜单展示效果
  $("." + prefix + "_" + model).removeClass("hover");
  $("#" + prefix + "_" + model + "_" + index).addClass("hover");

  // 菜单对应内容切换
  $(".con_" + prefix + "_" + model).css('display', 'none');
  $("#con_" + prefix + "_" + model + "_" + index).css('display', 'block');
}

// 添加中等标注 - 动态数据 - 图标气泡类型
function addMediumMarker(lng, lat, did, type, origin) {

  var path = locationPath();
  if (map) {
    var opts = new IMAP.MarkerOptions();
    opts.anchor = IMAP.Constants.BOTTOM_CENTER;
    if (type == "police") {
      opts.icon = new IMAP.Icon(
        path + "/static/image/" + type + "_" + origin.mjlb + "_24.png", {
          "size": new IMAP.Size(24, 24),
          "offset": new IMAP.Pixel(0, 0)
        }
      );
    } else {
      opts.icon = new IMAP.Icon(
        path + "/static/image/" + type + "_24.png", {
          "size": new IMAP.Size(24, 24),
          "offset": new IMAP.Pixel(0, 0)
        }
      );
    }

    var lnglat = new IMAP.LngLat(lng, lat);
    marker = new IMAP.Marker(lnglat, opts);
    marker.id = type + "_" + did;
    marker.type = type;

    map.getOverlayLayer().addOverlay(marker, false);

    // 标注警员或者电动车定位时，标注上增加原始数据
    if (type == "police" || type == "ddc" || type == "jc") {
      marker.origin = origin;
    }

    // 标注为警员时， 处理是标注是否展示以及标签是否展示处理
    if (type == 'police') {
      // 实有立项标签是否选中
      if (!$("#operator-syll").is(":checked")) {
        marker.visible(false);
      } else {
        marker.setLabel(origin.mjxm, {
          "anchor": IMAP.Constants.BOTTOM_CENTER,
          "fontColor": "rgba(255,255,255,.6)",
          "offset": new IMAP.Pixel(0, -24),
        });
      }
    }
    // 标注为电动车时，处理是标注是否展示
    if (type == "ddc") {
      if (!$("#operator-ddc").is(":checked")) {
        marker.visible(false);
      }
    }

    if (type == 'jc') {
      // 警车标签是否选中
      if (!$("#operator-jc").is(":checked")) {
        marker.visible(false);
      } else {
        marker.setLabel(origin.cphm, {
          "anchor": IMAP.Constants.BOTTOM_CENTER,
          "fontColor": "rgba(255,255,255,.6)",
          "offset": new IMAP.Pixel(0, -24)
        });
      }
    }

    // 图标上添加点击事件
    addMarkerClickEvt(type, origin, marker);

    return marker;
  }
}

// 添加点标注
function addMarker(lng, lat, did, type, origin) {

  var path = locationPath();
  if (map) {
    var opts = new IMAP.MarkerOptions();
    opts.anchor = IMAP.Constants.BOTTOM_CENTER;
    opts.icon = new IMAP.Icon(
      path + "/static/image/" + type + "_16.png", {
        "size": new IMAP.Size(16, 16),
        "offset": new IMAP.Pixel(0, 0)
      }
    );

    var lnglat = new IMAP.LngLat(lng, lat);
    marker = new IMAP.Marker(lnglat, opts);
    marker.id = type + "_" + did;
    marker.type = type;
    map.getOverlayLayer().addOverlay(marker, false);
    if (type == 'house') {
      marker.dlbh = origin.dlbh;
      marker.setLabel(origin.dlbh + "号", {
        "anchor": IMAP.Constants.BOTTOM_CENTER,
        "fontColor": "rgba(255,255,255,.6)",
        "offset": new IMAP.Pixel(0, -15)
      });
    }
    // 图标上添加点击事件
    addMarkerClickEvt(type, origin, marker);

    return marker;
  }
}


var houseDataCluster, houseMarkers;

var sts = [{
  url: "http://a.amap.com/jsapi_demos/static/images/blue.png",
  size: new IMAP.Size(32, 32),
  offset: new IMAP.Pixel(-16, -16)
}, {
  url: "http://a.amap.com/jsapi_demos/static/images/green.png",
  size: new IMAP.Size(32, 32),
  offset: new IMAP.Pixel(-16, -16)
}, {
  url: "http://a.amap.com/jsapi_demos/static/images/orange.png",
  size: new IMAP.Size(36, 36),
  offset: new IMAP.Pixel(-18, -18)
}, {
  url: "http://a.amap.com/jsapi_demos/static/images/red.png",
  size: new IMAP.Size(48, 48),
  offset: new IMAP.Pixel(-24, -24)
}, {
  url: "http://a.amap.com/jsapi_demos/static/images/darkRed.png",
  size: new IMAP.Size(48, 48),
  offset: new IMAP.Pixel(-24, -24)
}];
//添加点聚合
function addHouseCluster(serchRsusl, type) {
  var path = locationPath();
  var opts = new IMAP.MarkerOptions();
  opts.anchor = IMAP.Constants.BOTTOM_CENTER;
  opts.icon = new IMAP.Icon(
    path + "/static/image/" + type + "_16.png", {
      "size": new IMAP.Size(16, 16),
      "offset": new IMAP.Pixel(0, 0)
    }
  );
  if (map) {
    if (houseDataCluster) {
      //清空所有的marker及点聚合对象
      houseDataCluster.setMap(null);
    }
    houseMarkers = [];
    //循环遍历数据 把数据加载到markers中去 注：数据类型是IMAP.Marker类型
    for (var i = 0; i < serchRsusl.length; i++) {
      (function (i) {
        var poi = serchRsusl[i];
        var lnglat = new IMAP.LngLat(poi.gpsjd, poi.gpswd);
        var marker = new IMAP.Marker(lnglat, opts);
        marker.type = type;
        map.getOverlayLayer().addOverlay(marker, false);
        if (type == 'house') {
          marker.dlbh = poi.dlbh;
          marker.setLabel(poi.dlbh + "号", {
            "anchor": IMAP.Constants.BOTTOM_CENTER,
            "fontColor": "rgba(255,255,255,.6)",
            "offset": new IMAP.Pixel(0, -15),
          });
        }
        // 图标上添加点击事件
        addMarkerClickEvt(type, poi, marker);
        houseMarkers.push(marker);
      })(i);
    }
    //获取点聚合的显示级别数
    var zoom = parseInt(4, 10);
    //获取点聚合的缓冲大小
    var size = parseInt(5, 10);
    //获取点聚合的最小聚合数
    var clusterSum = parseInt(10, 10);
    //获取是否允许点击放大
    var zoomclick = 'true';
    zoomclick = zoomclick == 'true' ? true : false;
    zoom = zoom == -1 ? null : zoom;
    size = size == -1 ? null : size;
    clusterSum = clusterSum == -1 ? null : clusterSum;

    //创建聚合管理对象 并将各参数设置到其中
    map.plugin(['IMAP.DataCluster'], function () {
      houseDataCluster = new IMAP.DataCluster(map, houseMarkers, {
        // styles: sts,
        maxZoom: zoom,
        gridSize: size,
        zoomOnClick: zoomclick,
        minimumClusterSize: clusterSum
      });
    });
  }
}


var _current_marker;

function addMarkerClickEvt(type, origin, marker) {

  // 针对不同数据类型添加不同的 InfoWindow
  var content = "";
  var token = Cookies.get("Admin-Token");
  if (type == "house") {
    var detail = "";
    if (origin.mlphbm != null && origin.mlphbm != '') {
      detail =
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style=\"color:#86d9fb\" target=\"_blank\" href=\"" +
        serviceUrl + "/#/analysis/rfgl?mlphbm=" + origin.mlphbm + "\">详&nbsp;&nbsp情</a>";
    }
    content = assembleInfoWindowContent("实有房屋", baseUrl + "/houses/" + origin.cjbh + "/photo?Authorization=" +
      token, "地址：" + origin.mlph + detail +
      "<br/>经度：" + origin.gpsjd +
      "<br/>纬度：" + origin.gpswd);
  } else if (type == "dwxx") {
    content = assembleInfoWindowContent("实有单位", baseUrl + "/dwxx/" + origin.dwbh + "/photo?Authorization=" + token,
      "简称：" + origin.dwjc +
      "&nbsp;&nbsp;&nbsp;&nbsp;<a style=\"color:#86d9fb\" target=\"_blank\" href=\"javascript:;void(0)\" onclick=\"openDwxx(\'" +
      origin.dwbh + "\');\">详&nbsp;&nbsp情</a><br/>名称：" +
      origin.dwmc + "<br/>坐标：" + origin.gpsLon.substr(0, 8) + "，" + origin.gpsLat.substr(0, 7));
  } else if (type == 'xqxx') {
    content = assembleInfoWindowContent("小区出入口", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "名称：" + origin.crkmc);
  }
  // else if (type == 'camera') {
  // content = showRtspVideoDialog()
  // content = assembleInfoWindowContent("实有安防设施", baseUrl + "/camera/" + origin.xh + "/photo?Authorization=" +
  //   token, "名称：" + origin.name);
  // }
  else if (type == 'xfs') {
    content = assembleInfoWindowContent("消防栓", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" + token,
      "名称：" + origin.crkmc);
  } else if (type == 'smoke') {
    content = assembleInfoWindowContentWithoutPicture("烟雾感应", "安装地址：" + origin.dz);
  } else if (type == 'wifi') {
    content = assembleInfoWindowContentWithoutPicture("WIFI", "安装地址：" + origin.installPoint + "<br/> MAC：" + origin
      .mac);
  } else if (type == 'xfunit') {
    // content = assembleInfoWindowContentWithoutPicture("", "简称：" + origin.dwjc +
    //   "&nbsp;&nbsp;&nbsp;&nbsp;<br/>名称：" +origin.dwmc+"<br/>地址：" +origin.dwszd);
    var content = "<div class=\"dynamic-container\" style=\width:240px;\">"
    content = content + "<div class=\"dynamic-title\">"
    content = content + "<div class=\"dynamic-title-content\" style=\"padding:0px 10px 6px\">";
    content = content + "消防重点单位";
    content = content + "</div>";
    content = content + "<span class=\"dynamic-title-close\" onclick=\"closeInfoWindow()\">";
    content = content + "<i class=\"iconfont\">&#xe603;</i>"
    content = content + "</span>";
    content = content + "</div>";
    content = content + "<div class=\"dynamic-content\">";
    content = content + "<div class=\"dynamic-content-info\">"
    content = content + "简称：" + origin.dwjc +
      "&nbsp;&nbsp;&nbsp;&nbsp;<br/>名称：" + origin.dwmc + "<br/>地址：" + origin.dwszd;
    content = content + "</div>"
    content = content + "</div>";
    // content = content + "<div class=\"infowindow-marker\">";
    // content = content + "<i class=\"iconfont\">&#xe682;</i>";
    // content = content + "</div>";
    content = content + "</div>";
  } else if (type == 'pecc') {
    content = assembleInfoWindowContentWithoutPicture("电子警察", "安装地址：" + origin.jkdmc);
  } else if (type == 'sluice') {
    content = assembleInfoWindowContent("水闸", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'warehouse') {
    content = assembleInfoWindowContent("仓库", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'seniorcenter') {
    content = assembleInfoWindowContent("老年活动中心", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'jkdw') {
    content = assembleInfoWindowContent("监控点位", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'garage') {
    content = assembleInfoWindowContent("车库", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'garbage') {
    content = assembleInfoWindowContent("垃圾房", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'substation') {
    content = assembleInfoWindowContent("变电站", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'hospital') {
    content = assembleInfoWindowContent("卫生院", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'sewage') {
    content = assembleInfoWindowContent("污水净化站", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'watertower') {
    content = assembleInfoWindowContent("水塔", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'gas') {
    content = assembleInfoWindowContent("液化气站", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'signaltower') {
    content = assembleInfoWindowContent("信号塔", baseUrl + "/xqxx/" + origin.crkbh + "/photo?Authorization=" +
      token, "地址：" + origin.crkmc);
  } else if (type == 'police') {
    content = assembleInfoWindowContent("警员信息", baseUrl + "/rjbxx/zps/" + origin.sfzh + "?Authorization=" + token, "警员姓名：" + origin.mjxm + (origin.mjlb == 1 ?
        "（民警）" : "（协管）") + "<br/>警员警号：" + origin
      .mjjh + "<br/>手机号码：" + origin.sjhm + "<br/>所属机构：" + origin.jgmc + "<br/>定位时间：" + origin.rksj);
  } else if (type == 'ddc') {
    content = assembleInfoWindowContentWithoutPicture("电动车信息", "车牌号码：" + origin.palteId + "<br/>车主姓名：" + origin
      .name + "<br/>车主手机：" + origin.phone + "<br/>定位时间：" + origin.rksj);
  } else if (type == 'jc') {
    content = assembleInfoWindowContentWithoutPicture("警车信息", "车牌号码：" + origin.cphm + "<br/>车辆部门：" + origin
      .clbm + "<br/>定位时间：" + origin.gpssj);
  }
  if (type == 'camera') {
    marker.addEventListener(IMAP.Constants.CLICK, function (evt) {
      showRtspVideoDialog(origin.cameraId)
    });
  } else if (type == 'pecc' && (origin.jkdbh === 'ZYDZJC00000008' || origin.jkdbh === 'ZYDZJC00000012' || origin.jkdbh === 'ZYDZJC00000016')) {
    marker.addEventListener(IMAP.Constants.CLICK, function (evt) {
      showRtspVideoDialog(origin.jkdbh)
    });
  } else {
    // 图标点击事件
    if (content != "") {
      marker.addEventListener(IMAP.Constants.CLICK, function (evt) {

        // 如果其他 Marker 打开了消息框，则关闭
        if (_current_marker) {
          _current_marker.closeInfoWindow();
        }

        // 打开消息框
        _current_marker = this;
        var lnglat = this.getPosition();
        this.openInfoWindow(
          content, {
            size: new IMAP.Size(320, 110),
            position: lnglat,
            autoPan: false,
            offset: new IMAP.Pixel(160, 75),
            anchor: IMAP.Constants.CENTER,
            type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM,
            visible: true
          }
        );
      });
    }
  }

}

function assembleInfoWindowContentWithoutPicture(title, context) {
  var content = "<div class=\"infowindow-container\">"
  content = content + "<div class=\"infowindow-title\">"
  content = content + "<div class=\"infowindow-title-content\">";
  content = content + title;
  content = content + "</div>";
  content = content + "<span class=\"infowindow-title-close\" onclick=\"closeInfoWindow()\">";
  content = content + "<i class=\"iconfont\">&#xe603;</i>"
  content = content + "</span>";
  content = content + "</div>";
  content = content + "<div class=\"infowindow-content\">";
  content = content + context;
  content = content + "</div>";
  content = content + "<div class=\"infowindow-marker\">";
  content = content + "<i class=\"iconfont\">&#xe682;</i>";
  content = content + "</div>";
  content = content + "</div>";
  return content;
}

function assembleInfoWindowContent(title, url, context) {
  var content = "<div class=\"infowindow-container\">"
  content = content + "<div class=\"infowindow-title\">"
  content = content + "<div class=\"infowindow-title-content\">";
  content = content + title;
  content = content + "</div>";
  content = content + "<span class=\"infowindow-title-close\" onclick=\"closeInfoWindow()\">";
  content = content + "<i class=\"iconfont\">&#xe603;</i>"
  content = content + "</span>";
  content = content + "</div>";
  content = content + "<div class=\"infowindow-content\">";
  content = content + "<img class=\"infowindow-content-image can-click\" data-pic=\"" + url + "\" src=\" " + url +
    "\" onerror=\"this.src='/static/image/default_nophoto.png'\" onclick=\"showPicDialog(this)\" />";
  content = content + context;
  content = content + "</div>";
  content = content + "<div class=\"infowindow-marker\">";
  content = content + "<i class=\"iconfont\">&#xe682;</i>";
  content = content + "</div>";
  content = content + "</div>";
  return content;
}

function showRtspVideoDialog(cameraId) {

  if (_layer_index) {
    layer.close(_layer_index);
  }

  _layer_index = layer.open({
    "type": 2,
    "shade": false,
    "title": false,
    "area": ['768px', '432px'],
    "content": ['../rtsp/index.html?cameraId=' + cameraId, 'no'],
    "moveType": 1,
    "skin": 'layer-custom',
    "cancel": function () {
      layer.close(_layer_index);
    }
  });
}


function showPicDialog(obj) {

  var pic = $(obj).data("pic");
  var content = assemblePicDialogContent(pic);

  if (_layer_index) {
    layer.close(_layer_index);
  }

  _layer_index = layer.open({
    "type": 1,
    "shade": false,
    "title": false,
    "area": ['768px', '432px'],
    "content": content,
    "moveType": 1,
    "skin": 'layer-custom',
    "cancel": function () {
      layer.close(_layer_index);
    }
  });
}

function assemblePicDialogContent(pic) {
  var content = "";
  content = content + "<div class=\"dialog-vehicle-pass-container\">";
  content = content + "<img src=\"" + pic +
    "\" onerror=\"this.src='/static/image/default_nophoto.png'\"></img>";
  content = content + "</div>";
  return content;
}


// 关闭消息窗
function closeInfoWindow() {
  console.log(_current_marker)
  if (map && _current_marker) {
    _current_marker.closeInfoWindow();
  }
}

// 展示详情
function showInfoWindow(type, origin) {
  if (type == 'house') {
    showHouseInfoWindow(origin);
  }
}

// 展示房屋详情
function showHouseInfoWindow(origin) {
  // console.info(origin);
}

function locationPath() {
  var href = window.document.location.href;
  var pname = window.document.location.pathname;
  var pos = href.indexOf(pname);
  var path = href.substring(0, pos);
  return path;
}

//动态显示数据
function countUp(id, end) {
  var oldCntStr = document.getElementById(id).innerText;
  var oldCnt = oldCntStr.replace(/[,]/g, "");
  var options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  };
  var obj = new CountUp(id, oldCnt, end, 0, 2.5, options);
  obj.start();
}

//打开一标六实详细信息页面
function openYblsDetail() {
  window.open(serviceUrl + "/#/ybls");
}

function showYblsDetail_chart(id) {
  var path = locationPath();
  if (id == 'syrk') {
    window.location.href = "./yw_charts.html"
  } else if (id == 'syfw') {
    window.location.href = "./syfw.html"
  } else if (id == 'sydw') {
    window.location.href = "./sydw.html"
  } else if (id == 'syll') {
    window.open(serviceUrl + "/#/equipment?pcsdm=" + pcsdm + "&pcsmc=" + pcsmc + "&jcwdm=" + jcwdm + "&jlxdm=" + jlxdm + "&name=" + name);
  } else if (id == 'syjq') {
    window.open(serviceUrl + "/#/case?pcsdm=" + pcsdm + "&pcsmc=" + pcsmc + "&xqbh=" + xqbh);
  } else if (id == 'syaf') {
    window.open(serviceUrl + "/#/security?pcsdm=" + pcsdm + "&xqbh=" + xqbh + "&jcwdm=" + jcwdm);
  }

}

//打开重点人员页面
function openZdry() {
  window.open(serviceUrl + "/#/zdry?xqbh=" + xqbh + "&name=" + name);
}
//打开一人一档页面
function openArchive(zjhm) {
  window.open(serviceUrl + "/#/archive?zjhm=" + zjhm);
}

//打开人房关联
function openRfgl(fwbm) {
  window.open(serviceUrl + "#/analysis/rfgl?fwbm=" + fwbm);
}



//打开单位信息页面
function openDwxx(dwbh) {
  window.open(serviceUrl + "/#/company?dwbh=" + dwbh);
}

// 返回首页
function openHome() {
  window.parent.location.href = serviceUrl + "#/home";
}

// 切换小区
function switchCommunity() {
  window.parent.document.getElementById("switchCommunity").click();
}

//添加小区边界
function addCommunityPolygon(areaStr) {
  var lnglatarr = [];
  var poiots = areaStr.split(",");
  for (var i = 0; i < poiots.length; i++) {
    lnglatarr.push(new IMAP.LngLat(poiots[i], poiots[i + 1]));
    i = i + 1;
  }
  lnglatarr.push(new IMAP.LngLat(poiots[0], poiots[1]));
  var pgo = new IMAP.PolygonOptions();
  pgo.strokeColor = "rgba(255,51,51,.8)";
  pgo.strokeOpacity = "1";
  pgo.strokeWeight = "3";
  // pgo.strokeStyle = IMAP.Constants.OVERLAY_LINE_DASHED;
  var polygon = new IMAP.Polyline(lnglatarr, pgo);
  polygon.id = "community";
  map.getOverlayLayer().addOverlay(polygon, false);
  return polygon;
}

function search() {
  var token = Cookies.get("Admin-Token");
  var searchType = $("#searchType").val();
  var searchContent = $("#searchContent").val();
  if (searchContent == '') {
    return;
  }
  $("#search-result").html("");
  if (searchType == 'poi') {
    $("#searchType").change(function () {
      poiSearch.clear()
    })
    poiSearchContent = searchContent
    doPoiSearch(1)
  } else {
    loadData(baseUrl + "/search?searchType=" + searchType + '&searchContent=' + searchContent, token,
      function (data) {
        var code = data.code;
        if (code == 200) {
          var searchItemHtml = "";
          if (data.data.length <= 0) {
            searchItemHtml = searchItemHtml + "<div class=\"con_item\">";
            searchItemHtml = searchItemHtml + " <div class=\"item_info\">";
            searchItemHtml = searchItemHtml + " <div style=\"text-align:center;\">暂无数据</div>";
            searchItemHtml = searchItemHtml + " </div>";
            searchItemHtml = searchItemHtml + "</div>";
          } else {
            if (searchType == 'ry') {
              searchItemHtml = genSearchRyHtml(data.data)
            } else if (searchType == 'fw') {
              searchItemHtml = genSearchFwHtml(data.data)
            } else if (searchType == 'dw') {
              searchItemHtml = genSearchDwHtml(data.data)
            }
          }
          $("#search-result").append(searchItemHtml);
        }
      })
  }

}
var poiSearchContent, poiSearch;

function doPoiSearch(pageNo) {
  if (map) {
    var keyword = poiSearchContent,
      city = chengshi;
    map.plugin(['IMAP.PoiSearch'], function () {
      poiSearch = new IMAP.PoiSearch({
        panel: "search-result",
        map: map,
        pageSize: 5,
        scope: "all"
      });
      poiSearch.setPageNumber(parseInt(pageNo - 1));
      poiSearch.search(keyword, city);
    });
  }
}

function genSearchRyHtml(objList) {
  var searchItemHtml = '';
  for (var i in objList) {
    var obj = objList[i];
    // 数据加密
    var mb = $.base64.btoa(JSON.stringify(obj), true);
    searchItemHtml = searchItemHtml + "<div class=\"con_item\">";
    searchItemHtml = searchItemHtml + " <div class=\"item_info\">";
    searchItemHtml = searchItemHtml + "   <div>证件号码：" + obj.zjhm + "</div>";
    searchItemHtml = searchItemHtml + "   <div>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：" + obj.xm + "</div>";
    searchItemHtml = searchItemHtml + " </div>";
    searchItemHtml = searchItemHtml + " <div class=\"item_operation\">";
    searchItemHtml = searchItemHtml + "   <div data-obj=\"" + mb + "\"><a href=\"javascript:;\" onclick=\"toPosition('" + obj.gpsjd + "','" + obj.gpswd + "','ry',this)\">定位</a></div>";
    searchItemHtml = searchItemHtml + "   <div><a href=\"javascript:;\" onclick=\"openArchive('" + obj.zjhm + "')\">一人一档</a></div>";
    searchItemHtml = searchItemHtml + " </div>";
    searchItemHtml = searchItemHtml + "</div>";
  }
  return searchItemHtml;
}


function genSearchFwHtml(objList) {
  var searchItemHtml = '';
  for (var i in objList) {
    var obj = objList[i];
    var mb = $.base64.btoa(JSON.stringify(obj), true);
    searchItemHtml = searchItemHtml + "<div class=\"con_item\">";
    searchItemHtml = searchItemHtml + " <div class=\"item_info\">";
    searchItemHtml = searchItemHtml + "   <div>房屋地址：" + obj.mlphxx + obj.sh + "</div>";
    searchItemHtml = searchItemHtml + "   <div>房主姓名：" + obj.fzxm + "</div>";
    searchItemHtml = searchItemHtml + " </div>";
    searchItemHtml = searchItemHtml + " <div class=\"item_operation\">";
    searchItemHtml = searchItemHtml + "   <div data-obj=\"" + mb + "\"><a href=\"javascript:;\" onclick=\"toPosition('" + obj.gpsjd + "','" + obj.gpswd + "','fw',this)\">定位</a></div>";
    searchItemHtml = searchItemHtml + "   <div><a href=\"javascript:;\" onclick=\"openRfgl('" + obj.fwbm + "')\">人房关联</a></div>";
    searchItemHtml = searchItemHtml + " </div>";
    searchItemHtml = searchItemHtml + "</div>";
  }
  return searchItemHtml;
}

function genSearchDwHtml(objList) {
  var searchItemHtml = '';
  for (var i in objList) {
    var obj = objList[i];
    var mb = $.base64.btoa(JSON.stringify(obj), true);
    searchItemHtml = searchItemHtml + "<div class=\"con_item\">";
    searchItemHtml = searchItemHtml + " <div class=\"item_info\">";
    searchItemHtml = searchItemHtml + "   <div>单位简称：" + obj.dwjc + "</div>";
    searchItemHtml = searchItemHtml + "   <div>单位地址：" + obj.jydzlmmc + "</div>";
    searchItemHtml = searchItemHtml + " </div>";
    searchItemHtml = searchItemHtml + " <div class=\"item_operation\">";
    searchItemHtml = searchItemHtml + "   <div data-obj=\"" + mb + "\"><a href=\"javascript:;\" onclick=\"toPosition('" + obj.gpsjd + "','" + obj.gpswd + "','dw',this)\">定位</a></div>";
    searchItemHtml = searchItemHtml + "   <div><a href=\"javascript:;\" onclick=\"openDwxx('" + obj.dwbh + "')\">单位信息</a></div>";
    searchItemHtml = searchItemHtml + " </div>";
    searchItemHtml = searchItemHtml + "</div>";
  }
  return searchItemHtml;
}

function toPosition(gpsjd, gpswd, type, obj) {
  map.setCenter(new IMAP.LngLat(gpsjd, gpswd), 15);
  var object = $.base64.atob($(obj).parent().data("obj"), true);
  addSearchMarkerWithLabel(gpsjd, gpswd, type, JSON.parse(object))
}

// 地图展示搜索 Marker
function addSearchMarkerWithLabel(lng, lat, type, origin) {
  var path = locationPath();
  if (map) {
    var opts = new IMAP.MarkerOptions();
    opts.anchor = IMAP.Constants.BOTTOM_CENTER;
    opts.icon = new IMAP.Icon(
      path + "/static/image/dynamic_16.png", {
        "size": new IMAP.Size(16, 16),
        "offset": new IMAP.Pixel(0, 0)
      }
    );

    var lnglat = new IMAP.LngLat(lng, lat);
    marker = new IMAP.Marker(lnglat, opts);
    marker.id = type + "_";
    marker.type = type;
    map.getOverlayLayer().addOverlay(marker, false);
    // 图标上添加点击事件
    addSearchMarkerClickEvt(type, origin, marker);
  }
}

var searchInfoWindow;

function addSearchMarkerClickEvt(type, origin, marker) {

  // 针对不同数据类型添加不同的 InfoWindow
  var content = "";
  var token = Cookies.get("Admin-Token");
  if (type == 'ry') {
    content = "<div class=\"dynamic-container\" style=\"width:280px;height:150px;\">"
    content = content + "<div class=\"dynamic-title\">"
    content = content + "<div class=\"dynamic-title-content\" style=\"padding:0px 10px 6px\">";
    content = content + "人员数据";
    content = content + "</div>";
    content = content + "<span class=\"dynamic-title-close\" onclick=\"closeSearchInfoWindow()\">";
    content = content + "<i class=\"iconfont\">&#xe603;</i>"
    content = content + "</span>";
    content = content + "</div>";
    content = content + "<div class=\"dynamic-content\">";
    content = content + "<div class=\"dynamic-content-info\">"
    content = content + "人员姓名：" + origin.xm + "<br>";
    content = content + "证件号码：" + origin.zjhm + "<br>";
    content = content + "手机号码：" + origin.sjhm + "<br>";
    content = content + "</div>"
    content = content + "</div>";
    content = content + "</div>";
  } else if (type == 'fw') {
    content = "<div class=\"dynamic-container\" style=\"width:280px;height:150px;\">"
    content = content + "<div class=\"dynamic-title\">"
    content = content + "<div class=\"dynamic-title-content\" style=\"padding:0px 10px 6px\">";
    content = content + "房屋数据";
    content = content + "</div>";
    content = content + "<span class=\"dynamic-title-close\" onclick=\"closeSearchInfoWindow()\">";
    content = content + "<i class=\"iconfont\">&#xe603;</i>"
    content = content + "</span>";
    content = content + "</div>";
    content = content + "<div class=\"dynamic-content\">";
    content = content + "<div class=\"dynamic-content-info\">"
    content = content + "房屋地址：" + origin.mlphxx + "<br>";
    content = content + "室号：" + origin.sh + "<br>";
    content = content + "房主姓名：" + origin.fzxm + "<br>";
    content = content + "</div>"
    content = content + "</div>";
    content = content + "</div>";
  } else if (type == 'dw') {
    content = "<div class=\"dynamic-container\" style=\"width:280px;height:150px;\">"
    content = content + "<div class=\"dynamic-title\">"
    content = content + "<div class=\"dynamic-title-content\" style=\"padding:0px 10px 6px\">";
    content = content + "房屋数据";
    content = content + "</div>";
    content = content + "<span class=\"dynamic-title-close\" onclick=\"closeSearchInfoWindow()\">";
    content = content + "<i class=\"iconfont\">&#xe603;</i>"
    content = content + "</span>";
    content = content + "</div>";
    content = content + "<div class=\"dynamic-content\">";
    content = content + "<div class=\"dynamic-content-info\">"
    content = content + "单位名称：" + origin.dwmc + "<br>";
    content = content + "单位简称：" + origin.dwjc + "<br>";
    content = content + "单位地址：" + origin.jydzlmmc + "<br>";
    content = content + "</div>"
    content = content + "</div>";
    content = content + "</div>";
  }

  if (map && searchInfoWindow) {
    map.getOverlayLayer().removeOverlay(searchInfoWindow);
  }

  // 图标点击事件
  if (content != "") {
    // 打开消息框
    var lnglat = marker.getPosition();
    searchInfoWindow = new IMAP.InfoWindow(content, {
      size: new IMAP.Size(320, 110),
      position: lnglat,
      autoPan: false,
      offset: new IMAP.Pixel(160, 30),
      anchor: IMAP.Constants.CENTER,
      type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM,
      visible: true
    });
    marker.addEventListener(IMAP.Constants.CLICK, function (evt) {
      // 打开消息框
      map.getOverlayLayer().addOverlay(searchInfoWindow);

    });
    map.getOverlayLayer().addOverlay(searchInfoWindow);
  }
}

function closeSearchInfoWindow() {
  if (map && searchInfoWindow) {
    map.getOverlayLayer().removeOverlay(searchInfoWindow);
  }
}
