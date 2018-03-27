var baseUrl = window.parent.document.getElementById("baseUrl").value;
var deptCode;
var picBaseUrl = "http://116.228.125.236:18181/";
var serviceUrl = locationPath();
var token = Cookies.get("Admin-Token");

$(document).ready(function () {

  // 页面初始数据
  initData();

  deptCode = Cookies.get('deptCode');
  if (deptCode == '310116000000') {
    $(".dept-box a").bind("click", function () {
      loadLocations(this);
    })
  }
});


// 页面初始化需要加载的数据
function initData() {
  // 页面默认的定位信息数据加载
  loadDefaultLocations();
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
    content = content + "消防编号：" + origin.xfbh + "<br/>样式：" + origin.ys + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;径口直径：" + origin.jkzj + "<br>中队：" + origin.zd + "<br/>坐标：" + lon.substr(
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
