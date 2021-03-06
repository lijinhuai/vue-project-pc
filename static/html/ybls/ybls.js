var baseUrl = window.parent.document.getElementById("baseUrl").value;
var areaId = window.parent.document.getElementById("areaId").value;
var deptCode;
var serviceUrl = locationPath();
var token = Cookies.get("Admin-Token");
var showArea = true;
var pcsbm;

$(document).ready(function () {

  var switchDutyAreaHtml = '<div title="责任区显示切换" class="switch-container">' +
    '<input id="switch" type="checkbox" checked class="switch" />' +
    '<label for="switch" onclick="toggleSwitch()"> </label> ' +
    '</div>'

  $("body").append(switchDutyAreaHtml)

  // 页面地图数据切换事件绑定
  initOperatorMenuEvent();

  // 页面初始数据
  setTimeout(function () {
    initData();
  }, 0)


  deptCode = Cookies.get('deptCode');
  if (deptCode == '310116000000') {
    pcsbm = '310116560000'
    $(".dept-box a").bind("click", function () {
      pcsbm = $(this).children('.dept-num').attr("id");
      if (showArea) {
        queryAreaList(pcsbm)
      }
      loadLocations(this);
    })
    $(".hide").removeClass("hide")
  } else {
    pcsbm = deptCode
    $("#" + deptCode).parent().parent().removeClass("hide");
    $("#" + deptCode).parent().parent().parent().removeClass("hide")
  }
});


function toggleSwitch() {
  showArea = !document.getElementById('switch').checked
  if (showArea) {
    queryAreaList(pcsbm)
  } else {
    var overlays = map.getOverlayLayer().getOverlays();
    for (var i in overlays) {
      if (overlays[i].id && 'xq' == overlays[i].id.substr(0, 2)) {
        var polygon = overlays[i];
        map.getOverlayLayer().removeOverlay(polygon);
      }
    }
  }
}

function toggleSwitchDesc() {
  var showAreaDesc = !document.getElementById('switchDesc').checked
  if (showAreaDesc) {
    $('#areaDesc').show();
    $('#areaDesc').removeClass('animated zoomOutRight');
    $('#areaDesc').addClass('animated zoomInRight');
  } else {
    $('#areaDesc').removeClass('animated zoomInRight');
    $('#areaDesc').addClass('animated zoomOutRight');
  }
}

// 页面初始化需要加载的数据
function initData() {
  // 页面默认的定位信息数据加载
  loadDefaultLocations();

  // 清除超时警员定位标注
  setInterval(function () {
    clearPoliceLocation();
  }, 1000 * 30);

  // 加载警员定位数据
  loadPoliceLatestLocations();

  createEventSource(successCallBack);

  if (areaId) {
    $.ajax({
      headers: {
        Authorization: Cookies.get("Admin-Token")
      },
      type: "post",
      url: baseUrl + "/dutyArea/queryAreaById",
      data: {
        "areaId": areaId,
      },
      success: function (data) {
        var area = data.data
        var switchDutyDescHtml =
          '<div class="desc" id="areaDesc" style="display:none">' +
          '<div class="desc_title">责任区简介</div>' +
          '<div class="desc-content">' + area.areaDesc + '</div>' +
          '</div>' +
          '<div title="责任区简介显示切换" class="switch-container" style="bottom: 30px;">' +
          '<input id="switchDesc" type="checkbox" class="switch" checked/>' +
          '<label for="switchDesc" onclick="toggleSwitchDesc()"> </label> ' +
          '</div>'
        $("body").append(switchDutyDescHtml)
        $('#areaDesc').show();
        $('#areaDesc').removeClass('animated zoomOutRight');
        $('#areaDesc').addClass('animated zoomInRight');
      },
      error: function () {}
    });

  }
}

function initOperatorMenuEvent() {

  // 地图展示数据类型切换
  $(".operator-radio").click(function () {

    console.info("click");

    var name = $(this).attr("name");
    var checked = $(this).is(":checked");

    if (checked) {
      $(this).parent(".operator-label").removeClass("off");
      $(this).parent(".operator-label").addClass("on");
    } else {
      $(this).parent(".operator-label").removeClass("on");
      $(this).parent(".operator-label").addClass("off");
    }


    // 选中实有力量
    if (name == 'operator-police' && checked) {
      showPoliceLocations();
    }
    // 取消实有力量
    if (name == 'operator-police' && !checked) {
      hiddenPoliceLocations();
    }
  });

}

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

function hiddenPoliceLocations() {
  var overlays = map.getOverlayLayer().getOverlays();
  for (var i in overlays) {
    if (overlays[i].type == "police") {
      overlays[i].visible(false);
      overlays[i].removeLabel();
    }
  }
}



// 返回首页
function openHome() {
  window.parent.location.href = serviceUrl + "#/home";
}

// 一标六实页面跳转
function openYbls(type) {
  if (type != null && type != '') {
    window.parent.location.href = serviceUrl + "#/ybls_" + type;
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



var dataCluster, markers;

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
function addCluster(serchRsusl, type) {
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
    if (dataCluster && markers.length != 0) {
      //清空所有的marker及点聚合对象
      dataCluster.setMap(null);
    }
    markers = [];

    //循环遍历数据 把数据加载到markers中去 注：数据类型是IMAP.Marker类型
    for (var i = 0; i < serchRsusl.length; i++) {
      (function (i) {
        var poi = serchRsusl[i];
        var lnglat = new IMAP.LngLat(poi.lon, poi.lat);
        var marker = new IMAP.Marker(lnglat, opts);
        marker.type = type;
        // 图标上添加点击事件
        addMarkerClickEvt(type, poi, marker);
        markers.push(marker);
      })(i);
    }
    //获取点聚合的显示级别数
    var zoom = parseInt(4, 10);
    //获取点聚合的缓冲大小
    var size = parseInt(5, 10);
    //获取点聚合的最小聚合数
    var clusterSum = parseInt(20, 10);
    //获取是否允许点击放大
    var zoomclick = 'true';
    zoomclick = zoomclick == 'true' ? true : false;
    zoom = zoom == -1 ? null : zoom;
    size = size == -1 ? null : size;
    clusterSum = clusterSum == -1 ? null : clusterSum;

    //创建聚合管理对象 并将各参数设置到其中
    map.plugin(['IMAP.DataCluster'], function () {
      dataCluster = new IMAP.DataCluster(map, markers, {
        // styles: sts,
        maxZoom: zoom,
        gridSize: size,
        zoomOnClick: zoomclick,
        minimumClusterSize: clusterSum
      });
    });
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
    // 图标上添加点击事件
    addMarkerClickEvt(type, origin, marker);
  }
}



var _current_marker;

function addMarkerClickEvt(type, origin, marker) {

  // 针对不同数据类型添加不同的 InfoWindow
  var content = "";
  var token = Cookies.get("Admin-Token");
  if (type == 'xfunit') {
    var content = "<div class=\"dynamic-container\" style=\width:240px;\">"
    content = content + "<div class=\"dynamic-title\">"
    content = content + "<div class=\"dynamic-title-content\" style=\"padding:0px 10px 6px\">";
    content = content + "实有单位";
    content = content + "</div>";
    content = content + "<span class=\"dynamic-title-close\" onclick=\"closeInfoWindow()\">";
    content = content + "<i class=\"iconfont\">&#xe603;</i>"
    content = content + "</span>";
    content = content + "</div>";
    content = content + "<div class=\"dynamic-content\">";
    content = content + "<div class=\"dynamic-content-info\">"
    var lon = '' + origin.lon;
    var lat = '' + origin.lat;
    content = content + "简称：" + origin.dwjc +
      "&nbsp;&nbsp;&nbsp;&nbsp;<a style=\"color:#86d9fb\" target=\"_blank\" href=\"javascript:;void(0)\" onclick=\"openDwxx(\'" +
      origin.dwbh + "\');\">详&nbsp;&nbsp情</a>" +
      "<br/>名称：" + origin.dwmc + "<br/>地址：" + origin.jydz + "<br/>坐标：" + lon.substr(
        0, 10) +
      "，" + lat.substr(0, 9);
    content = content + "</div>"
    content = content + "</div>";
    // content = content + "<div class=\"infowindow-marker\">";
    // content = content + "<i class=\"iconfont\">&#xe682;</i>";
    // content = content + "</div>";
    content = content + "</div>";
  }

  if (type == 'zdmb') {
    var content = "<div class=\"dynamic-container\" style=\"width:280px;height:150px;\">"
    content = content + "<div class=\"dynamic-title\">"
    content = content + "<div class=\"dynamic-title-content\" style=\"padding:0px 10px 6px\">";
    content = content + "重点目标";
    content = content + "</div>";
    content = content + "<span class=\"dynamic-title-close\" onclick=\"closeInfoWindow()\">";
    content = content + "<i class=\"iconfont\">&#xe603;</i>"
    content = content + "</span>";
    content = content + "</div>";
    content = content + "<div class=\"dynamic-content\">";
    content = content + "<img class=\"dynamic-content-image can-click\" src=\" " + baseUrl + "/dwxx/" + origin.dwbh + "/photo?Authorization=" + token +
      "\" onerror=\"this.src='/static/image/default_nophoto.png'\" onclick=\"showPicDialog(this)\" />";
    content = content + "<div class=\"dynamic-content-info\">"
    var lon = '' + origin.lon;
    var lat = '' + origin.lat;
    content = content + "简称：" + origin.dwjc +
      "&nbsp;&nbsp;&nbsp;&nbsp;<a style=\"color:#86d9fb\" target=\"_blank\" href=\"javascript:;void(0)\" onclick=\"openDwxx(\'" +
      origin.dwbh + "\');\">详&nbsp;&nbsp情</a>" +
      "<br/>名称：" + origin.dwmc + "<br/>地址：" + origin.jydz + "<br/>坐标：" + lon.substr(
        0, 10) +
      "，" + lat.substr(0, 9);
    content = content + "</div>"
    content = content + "</div>";
    // content = content + "<div class=\"infowindow-marker\">";
    // content = content + "<i class=\"iconfont\">&#xe682;</i>";
    // content = content + "</div>";
    content = content + "</div>";
  }

  if (type == 'house') {
    var content = "<div class=\"dynamic-container\" style=\width:240px;\">"
    content = content + "<div class=\"dynamic-title\">"
    content = content + "<div class=\"dynamic-title-content\" style=\"padding:0px 10px 6px\">";
    content = content + "实有房屋";
    content = content + "</div>";
    content = content + "<span class=\"dynamic-title-close\" onclick=\"closeInfoWindow()\">";
    content = content + "<i class=\"iconfont\">&#xe603;</i>"
    content = content + "</span>";
    content = content + "</div>";
    content = content + "<div class=\"dynamic-content\">";
    content = content + "<div class=\"dynamic-content-info\">"
    var lon = '' + origin.lon;
    var lat = '' + origin.lat;
    content = content + "地址：" + origin.mlphxx + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style=\"color:#86d9fb\" target=\"_blank\" href=\"" +
      serviceUrl + "/#/analysis/rfgl?mlphbm=" + origin.mlphbm + "\">详&nbsp;&nbsp情</a><br/>坐标：" + lon.substr(
        0, 10) +
      "，" + lat.substr(0, 9);
    content = content + "</div>"
    content = content + "</div>";
    // content = content + "<div class=\"infowindow-marker\">";
    // content = content + "<i class=\"iconfont\">&#xe682;</i>";
    // content = content + "</div>";
    content = content + "</div>";
  }

  if (type == 'xfs') {
    var content = "<div class=\"dynamic-container\" style=\width:240px;\">"
    content = content + "<div class=\"dynamic-title\">"
    content = content + "<div class=\"dynamic-title-content\" style=\"padding:0px 10px 6px\">";
    content = content + "银行ATM";
    content = content + "</div>";
    content = content + "<span class=\"dynamic-title-close\" onclick=\"closeInfoWindow()\">";
    content = content + "<i class=\"iconfont\">&#xe603;</i>"
    content = content + "</span>";
    content = content + "</div>";
    content = content + "<div class=\"dynamic-content\">";
    content = content + "<div class=\"dynamic-content-info\">"
    var lon = '' + origin.lon;
    var lat = '' + origin.lat;
    content = content + "消防编号：" + origin.xfbh + "<br/>样式：" + origin.ys + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;径口直径：" + origin.jkzj + "<br>中队：" + origin.zd + "<br/>高德坐标：" + lon.substr(
        0, 10) +
      "，" + lat.substr(0, 9);
    content = content + "</div>"
    content = content + "</div>";
    // content = content + "<div class=\"infowindow-marker\">";
    // content = content + "<i class=\"iconfont\">&#xe682;</i>";
    // content = content + "</div>";
    content = content + "</div>";
  }

  if (type == 'atm') {
    var content = "<div class=\"dynamic-container\" style=\width:240px;\">"
    content = content + "<div class=\"dynamic-title\">"
    content = content + "<div class=\"dynamic-title-content\" style=\"padding:0px 10px 6px\">";
    content = content + "银行ATM";
    content = content + "</div>";
    content = content + "<span class=\"dynamic-title-close\" onclick=\"closeInfoWindow()\">";
    content = content + "<i class=\"iconfont\">&#xe603;</i>"
    content = content + "</span>";
    content = content + "</div>";
    content = content + "<div class=\"dynamic-content\">";
    content = content + "<div class=\"dynamic-content-info\">"
    var lon = '' + origin.lon;
    var lat = '' + origin.lat;
    content = content + "银行名称：" + origin.yhmc + "<br/>联系人：" + origin.lxr + "<br>联系电话：" + origin.lxdh + "<br/>坐标：" + lon.substr(
        0, 10) +
      "，" + lat.substr(0, 9);
    content = content + "</div>"
    content = content + "</div>";
    // content = content + "<div class=\"infowindow-marker\">";
    // content = content + "<i class=\"iconfont\">&#xe682;</i>";
    // content = content + "</div>";
    content = content + "</div>";
  }

  if (type == 'gydh') {
    var content = "<div class=\"dynamic-container\" style=\width:240px;\">"
    content = content + "<div class=\"dynamic-title\">"
    content = content + "<div class=\"dynamic-title-content\" style=\"padding:0px 10px 6px\">";
    content = content + "公用电话";
    content = content + "</div>";
    content = content + "<span class=\"dynamic-title-close\" onclick=\"closeInfoWindow()\">";
    content = content + "<i class=\"iconfont\">&#xe603;</i>"
    content = content + "</span>";
    content = content + "</div>";
    content = content + "<div class=\"dynamic-content\">";
    content = content + "<div class=\"dynamic-content-info\">"
    var lon = '' + origin.lon;
    var lat = '' + origin.lat;
    content = content + "电话号码：" + origin.gydhhm + "<br/>坐标：" + lon.substr(
        0, 10) +
      "，" + lat.substr(0, 9);
    content = content + "</div>"
    content = content + "</div>";
    // content = content + "<div class=\"infowindow-marker\">";
    // content = content + "<i class=\"iconfont\">&#xe682;</i>";
    // content = content + "</div>";
    content = content + "</div>";
  }

  if (type == 'camera') {
    var content = "<div class=\"dynamic-container\" style=\width:240px;\">"
    content = content + "<div class=\"dynamic-title\">"
    content = content + "<div class=\"dynamic-title-content\" style=\"padding:0px 10px 6px\">";
    content = content + "监控点位";
    content = content + "</div>";
    content = content + "<span class=\"dynamic-title-close\" onclick=\"closeInfoWindow()\">";
    content = content + "<i class=\"iconfont\">&#xe603;</i>"
    content = content + "</span>";
    content = content + "</div>";
    content = content + "<div class=\"dynamic-content\">";
    content = content + "<div class=\"dynamic-content-info\">"
    var lon = '' + origin.lon;
    var lat = '' + origin.lat;
    content = content + "监控点编号：" + origin.jkdbh + "<br/>"
    content = content + "监控点名称：" + origin.jkdmc + "<br/>" +
      "坐标：" + lon.substr(
        0, 10) +
      "，" + lat.substr(0, 9);
    content = content + "</div>"
    content = content + "</div>";
    // content = content + "<div class=\"infowindow-marker\">";
    // content = content + "<i class=\"iconfont\">&#xe682;</i>";
    // content = content + "</div>";
    content = content + "</div>";
  } else if (type == 'police') {
    content = assembleInfoWindowContent("警员信息", baseUrl + "/rjbxx/zps/" + origin.sfzh + "?Authorization=" + token, "警员姓名：" + origin.mjxm + (origin.mjlb == 1 ?
        "（民警）" : "（协管）") + "<br/>警员警号：" + origin
      .mjjh + "<br/>手机号码：" + origin.sjhm + "<br/>所属机构：" + origin.jgmc + "<br/>定位时间：" + origin.rksj);
  }

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

var _layer_index;

function showPicDialog(obj) {

  var pic = $(obj).attr("src");
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
  if (map && _current_marker) {
    _current_marker.closeInfoWindow();
  }
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

function clearDutyOverlay() {
  var overlays = map.getOverlayLayer().getOverlays();
  for (var i in overlays) {
    if (overlays[i].id && 'xq' == overlays[i].id.substr(0, 2)) {
      var polygon = overlays[i];
      map.getOverlayLayer().removeOverlay(polygon);
    }
  }
}

function clearMarkerByType(type) {
  var overlays = map.getOverlayLayer().getOverlays();
  for (var i in overlays) {
    var polygon = overlays[i];
    if (polygon.type == type) {
      map.getOverlayLayer().removeOverlay(polygon);
    }
  }
}


function queryAreaList(owner) {
  clearDutyOverlay()
  if (areaId) {
    queryAreaByAreaId(areaId)
  } else {
    $.ajax({
      headers: {
        Authorization: Cookies.get("Admin-Token")
      },
      type: "post",
      url: baseUrl + "/dutyArea/queryAreaList",
      data: {
        "deptId": owner,
        "parentCode": owner
      },
      success: function (data) {
        var areaList = data.data
        for (var i = 0; i < areaList.length; i++) {
          var color = random();
          if (areaList[i].areaStr != null && areaList[i].areaStr != "") {
            addPolygon(areaList[i], color);
          }
        }
      },
      error: function () {}
    });
  }

}

function queryAreaByAreaId(areaId) {
  $.ajax({
    headers: {
      Authorization: Cookies.get("Admin-Token")
    },
    type: "post",
    url: baseUrl + "/dutyArea/queryAreaById",
    data: {
      "areaId": areaId,
    },
    success: function (data) {
      var area = data.data
      var color = random();
      if (area.areaStr != null && area.areaStr != "") {
        addPolygon(area, color);
      }
    },
    error: function () {}
  });
}



//添加责任区
function addPolygon(dutyArea, color) {
  var lnglatarr = [];
  var poiots = dutyArea.areaStr.split(",");
  for (var i = 0; i < poiots.length; i++) {
    lnglatarr.push(new IMAP.LngLat(poiots[i], poiots[i + 1]));
    i = i + 1;
  }
  var pgo = new IMAP.PolygonOptions();
  pgo.fillColor = color;
  pgo.fillOpacity = "0.2";
  pgo.strokeColor = color;
  pgo.strokeOpacity = "1";
  pgo.strokeWeight = "2";
  pgo.strokeStyle = IMAP.Constants.OVERLAY_LINE_DASHED;
  var polygon = new IMAP.Polygon(lnglatarr, pgo);
  polygon.id = "xq" + dutyArea.areaId;
  polygon.addEventListener(IMAP.Constants.CLICK, function (e) {
    if (editing) {
      return;
    }
    zoomArea(dutyArea.areaId);
  });
  map.getOverlayLayer().addOverlay(polygon, false);
  var polygoncenter = polygon.getBounds().getCenter();
  var polygoninfomation = dutyArea.areaName;
  var labelInformation = [
    [polygoncenter, polygoninfomation]
  ]
  createLabel(labelInformation);
  return polygon;
}


//随机颜色
function random() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}


//按照区域放大地图
function zoomArea(areaId) {
  var id = "xq" + areaId;
  var overlays = map.getOverlayLayer().getOverlays();
  for (var i in overlays) {
    if (overlays[i].id == id) {
      map.setBestMap(overlays[i].getPath());
    }
  }
}

var labels = [];
//创建label
function createLabel(labelInformation) {
  for (var i = 0, len = labelInformation.length; i < len; i++) {
    var label = new IMAP.Label(labelInformation[i][1], {
      "position": labelInformation[i][0],
      "anchor": IMAP.Constants.CENTER
    });
    label.id = "xqlabel";
    map.getOverlayLayer().addOverlay(label);
    labels.push(label);
  }
}

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

function createEventSource(successCallBack) {
  var token = Cookies.get("Admin-Token");
  var deptCode = Cookies.get('deptCode');
  var url = "";
  if (deptCode == 310116000000) {
    url = baseUrl + '/sseEmitter/JYDW?Authorization=' + token;
  } else {
    url = baseUrl + '/sseEmitter/JYDW?Authorization=' + token + '&deptCode=' + deptCode;
  }
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

function successCallBack(e) {
  var data = JSON.parse(e.data);
  var code = data.code;
  if (code == 200 && data.dataType == 'JYDW') {
    showMjGpsData(data.data);
  }
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

// 添加中等标注 - 动态数据 - 图标气泡类型
function addMediumMarker(lng, lat, did, type, origin) {

  var path = locationPath();
  if (map) {
    var opts = new IMAP.MarkerOptions();
    opts.anchor = IMAP.Constants.BOTTOM_CENTER;
    opts.icon = new IMAP.Icon(
      path + "/static/image/" + type + "_" + origin.mjlb + "_24.png", {
        "size": new IMAP.Size(24, 24),
        "offset": new IMAP.Pixel(0, 0)
      }
    );

    var lnglat = new IMAP.LngLat(lng, lat);
    marker = new IMAP.Marker(lnglat, opts);
    marker.id = type + "_" + did;
    marker.type = type;

    map.getOverlayLayer().addOverlay(marker, false);

    // 标注警员定位时，标注上增加原始数据
    if (type == "police") {
      marker.origin = origin;
    }

    // 标注为警员时， 处理是标注是否展示以及标签是否展示处理
    if (type == 'police') {
      // 实有立项标签是否选中
      if ($("#operator-police").parent("label").hasClass("off")) {
        marker.visible(false);
      } else {
        marker.setLabel(origin.mjxm, {
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
