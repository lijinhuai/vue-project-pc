<template>
	<div class="content">

	    <div class="nav">
	        <img src="~@/images/ybls_home/返回.png" style="float: left;cursor: pointer;" @click="toHome()">
	        <img src="~@/images/ybls_home/左.png" style="width:160px; height:40px;margin-right: -50px;"/>
	        <img style="width:400px; height:40px;" src="~@/images/ybls_home/标题B.png">
	        <img src="~@/images/ybls_home/右.png" style="width:160px; height:40px;margin-left: -43px;""/>
	    </div>
   		<div class="wrapper-top">
   			<div id='left-top' class="left-top" >
			        <div class="left-top1" style="position: absolute;"></div>
			            <div style="width:180px;height: 15px;line-height: 30px;">
			                <span style="color: white;font-size: 8px;"></span>
			            </div>
			
			            <a class="button_link" style="margin-left: 45px;">
			                <span class="text_top">1884</span>
			                <p class='text_bottom'>标准地址</p>
			                <span class="line line_top"></span>
			                <span class="line line_right"></span>
			                <span class="line line_bottom"></span>
			                <span class="line line_left"></span>
			            </a>
			            <a class="button_link" @click="syfw()">
			                <span class="text_top">1990</span>
			                <p class='text_bottom'>实有房屋</p>
			                <span class="line line_top"></span>
			                <span class="line line_right"></span>
			                <span class="line line_bottom"></span>
			                <span class="line line_left"></span>
			            </a>
			            <a class="button_link" @click="syrk()">
			                <span class="text_top">1884</span>
			                <p class='text_bottom'>实有人口</p>
			                <span class="line line_top"></span>
			                <span class="line line_right"></span>
			                <span class="line line_bottom"></span>
			                <span class="line line_left"></span>
			            </a>
			            <a class="button_link">
			                <span class="text_top">78</span>
			                <p class='text_bottom'>实有单位</p>
			                <span class="line line_top"></span>
			                <span class="line line_right"></span>
			                <span class="line line_bottom"></span>
			                <span class="line line_left"></span>
			            </a>
			            <a class="button_link">
			                <span class="text_top">507</span>
			                <p class='text_bottom'>实有安防设施</p>
			                <span class="line line_top"></span>
			                <span class="line line_right"></span>
			                <span class="line line_bottom"></span>
			                <span class="line line_left"></span>
			            </a>
			            <a class="button_link">
			                <span class="text_top">6</span>
			                <p class='text_bottom'>实有安防力量</p>
			                <span class="line line_top"></span>
			                <span class="line line_right"></span>
			                <span class="line line_bottom"></span>
			                <span class="line line_left"></span>
			            </a>
			            <a class="button_link">
			                <span class="text_top">2000</span>
			                <p class='text_bottom'>实有警情</p>
			                <span class="line line_top"></span>
			                <span class="line line_right"></span>
			                <span class="line line_bottom"></span>
			                <span class="line line_left"></span>
			            </a>
			            <a href="#" class="button_link">
									<span class="text_top">N+</span>
									<p class='text_bottom'>N实</p>
									<span class="line line_top"></span>
									<span class="line line_right"></span>
									<span class="line line_bottom"></span>
									<span class="line line_left"></span>
						</a>
       			</div>
       		 	<div class="mid-top">
		            <div class="mid-top1" style="position: absolute;"></div>
		            <div id="charts3" style="width: 90%;height:100%;margin-left: 10px;margin-top: -20px;"></div>
        		</div>
        	  	<div class="right-top">
		            <div class="right-top1" style="position: absolute;"></div>
		            <div id="charts4" style="width: 90%;height:60%;margin-left: 0px;margin-top: 20px;"></div>
		            <div>
		                <span style="font-size:8px;color: white;margin-left:100px;">性别比例</span>
		                <span style="font-size:8px;color: white;margin-left: 100px;">年龄比例</span>
		            </div>
        		</div>
        		<div class="left-bottom">
		            <div class="left-bottom1" style="position: absolute;">
		            </div>
		            <div id="charts5" style="width: 100%;height:90%;margin-left: 5px;margin-top: 15px;">
            		</div>
       				 <span style="position: relative;top: -70px;font-size:14px;color:white;float:right;right:25px">汉族:{{hz}} </span>
       			</div>
		        <div class="mid-bottom">
		            <div class="mid-bottom1" style="position: absolute;"></div>
		            <div id="charts1" style="width: 90%;height:80%;margin-left:30px;margin-top: 10px;"></div>
		        </div>
		        <div class="right-bottom">
		            <div class="right-bottom1" style="position: absolute;"></div>
		            <div id="charts6" style="width: 90%;height:90%;margin-left:10px;margin-top: 10px;"></div>
        		</div>
		        <div class="bottom-left">
		            <div class="bottom-left1" style="position: absolute;"></div>
		            <img src="~@/images/ybls_home/wsjd.jpg"
		                 style="width: 99%;height: 90%;margin-left: 10px;margin-top: 10px;"/>
		        </div>
		        <div class="bottom-mid">
		            <div class="bottom-mid1" style="position: absolute;"></div>
			            <div class="bmimg1">
			               222
			                <br>
			                <span style="position: relative;top: -50px;font-size:14px">人户分离</span>
			            </div>
			            <div class="bmimg2" >
			                432
			                <br>
			                <span style="position: relative;top: -50px;font-size:14px">出租房屋</span>
			            </div>
			            <div class="bmimg3" >
			                256
			                <br>
			                <span style="position: relative;top: -50px;font-size:14px">群租房</span>
			            </div>
        		</div>
   		</div>
	</div>
</template>

<script>


import { yblsRyxxData } from '@/api/to_ybls/ryxx'
import { yblsXbxxData } from '@/api/to_ybls/xbxx'
import { yblsNlxxData } from '@/api/to_ybls/nlxx'
import { yblsMzxxData } from '@/api/to_ybls/mzxx'
import { yblsHzData } from '@/api/to_ybls/mzxx'
import Vue from 'vue'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

	export default {
	data(){
		return{
			ryxx:[],
			xbxx:[],
			nlxx:[],
			mzxx:[],
			hz:[]
		}
	},
	mounted(){
		
		
		this.getYblsData()
	},
    methods: {
    	
    	getYblsData(){
    		yblsRyxxData()
	        .then(response => {
	          this.ryxx = response.data
	          this.drawLine();
	        })
	        .catch(() => {
	        }),
	       yblsXbxxData()
	        .then(response => {
	          this.xbxx = response.data
	          
	          this.drawLine();
	        })
	        .catch(() => {
	        }),
	        yblsNlxxData()
	        .then(response => {
	          this.nlxx = response.data
	          this.drawLine();
	        })
	        .catch(() => {
	        }),
	        yblsMzxxData()
	        .then(response => {
	          this.mzxx = response.data
	          this.drawLine();
	        })
	        .catch(() => {
	        }),
	        yblsHzData()
	        .then(response => {
	          this.hz = response.data
	          console.log(this.hz)
	          this.drawLine();
	        })
	        .catch(() => {
	        })
    	},
    	
    	drawLine(){
    		  	let myChart1 = echarts.init(document.getElementById('charts1'));
		        let myChart3 = echarts.init(document.getElementById('charts3'));
		        let myChart4 = echarts.init(document.getElementById('charts4'));
		        let myChart5 = echarts.init(document.getElementById('charts5'));
		        let myChart6 = echarts.init(document.getElementById('charts6'));
    		 myChart4.setOption({
    		 	 tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },

            series: [
                {
                    name: '性别',
                    type: 'pie',
                    center: ['33%', '49%'],
                    radius: ['70%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: this.xbxx[0], name: '男'},
                        {value: this.xbxx[1], name: '女'}

                    ],

                },
                {
                    name: '年龄',
                    type: 'pie',
                    center: ['75%', '48%'],
                    radius: ['70%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: this.nlxx[0], name: '18岁以下'},
                        {value: this.nlxx[1], name: '18岁到40岁'},
                        {value: this.nlxx[2], name: '41岁到65岁'},
                        {value: this.nlxx[3], name: '65岁以上'}
                    ]
                }

            ],
            color: ['#186FF0', '#0AAF9F']
    		 }),
    		 
    		
    		 myChart3.setOption({
    		 	tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },

            grid: {
                left: '3%',
                right: '9%',
                bottom: '1%',
                top: '18%',
                containLabel: true
            },
            xAxis: {
                splitLine: {show: false},

                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'white'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'white',
                        width: 1,   //这里是坐标轴的宽度,可以去掉
                    }
                }

            },
            yAxis: {
                type: 'category',
                data: ['户籍人员', '来沪人员', '境外人员'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'white'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'white',
                        width: 1,   //这里是坐标轴的宽度,可以去掉
                    }
                }
            },
            series: [
                {
                    name: '',
                    type: 'bar',
                    data: this.ryxx,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            color: '#5CABFF'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right'
                        }
                    },


                },
            ]
    		 }),
    		  myChart1.setOption({
    		  	  tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['前科人员', '精神病人', '重点人员总数'],
                textStyle: {    //图例文字的样式
                    color: 'white',
                    fontSize: 12,
                },
                top: '15%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                splitLine: {show: false},
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'white'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'white',
                        width: 1,   //这里是坐标轴的宽度,可以去掉
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['重点人员'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'white'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'white',
                        width: 1,   //这里是坐标轴的宽度,可以去掉
                    }
                }

            },
            series: [
                {
                    name: '前科人员',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 25,

                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [7],
                    itemStyle: {
                        normal: {
                            color: '#5CABFF'
                        }
                    }
                },
                {
                    name: '精神病人',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [4],
                    itemStyle: {
                        normal: {
                            color: '#22DBA9'
                        }
                    }
                },
                {
                    name: '重点人员总数',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [11],
                    itemStyle: {
                        normal: {
                            color: 'darksalmon'
                        }
                    }
                },
            ]
    		  }),
    		   myChart5.setOption({
    		   	 title: {

                textStyle: {
                    color: 'white',
                    fontSize: 14
                },
                left: '10%'
            },
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '20%',
                bottom: '15%',
                top: '12%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['瑶族', '蒙古族', '水族', '回族', '朝鲜族', '土家族', '满族', '苗族', '壮族', '羌族', '侗族'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'white',
                            width: 1,   //这里是坐标轴的宽度,可以去掉
                        }
                    }
                }
            ],
            yAxis: [
                {
                    splitLine: {show: false},
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: 'white',
                            width: 1,   //这里是坐标轴的宽度,可以去掉
                        }
                    }
                }
            ],
            tooltip: {},
            series: [
                {
                    name: '数目',
                    type: 'bar',
                    data: this.mzxx,
                    barWidth: 30,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                //首先定义一个数组
                                var colorList = [
                                    '#10A4E7', '#186FF0', 'bisque', 'burlywood', 'lightcyan',
                                    'darksalmon', '#0AAF9F', '#E89589'
                                ];
                                return colorList[params.dataIndex]
                            },
                            //以下为是否显示
                            label: {
                                show: true,
                                position: 'top'
                            }

                        }
                    },

                },
                {
                    name: '汉族',
                    type: 'pie',
                    center: ['88%', '35%'],
                    radius: ['30%', '40%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: this.hz, name: '汉族'},


                    ]
                },
            ],
            dataZoom: [
                {
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                    handleSize: 10,//滑动条的 左右2个滑动条的大小
                    height: 2,//组件高度
                    left: 20, //左边的距离
                    right: 20,//右边的距离
                    bottom: 15,//右边的距离
                    handleColor: '#ddd',//h滑动图标的颜色
                    handleStyle: {
                        borderColor: "#cacaca",
                        borderWidth: "1",
                        shadowBlur: 2,
                        background: "#ddd",
                        shadowColor: "#ddd",
                    },
                    fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                        //给第一个设置0，第四个设置1，就是垂直渐变
                        offset: 0,
                        color: '#1eb5e5'
                    }, {
                        offset: 1,
                        color: '#5ccbb1'
                    }]),
                    backgroundColor: '#ddd',//两边未选中的滑动条区域的颜色
                    showDataShadow: false,//是否显示数据阴影 默认auto
                    showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
                    handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                    filterMode: 'filter',
                },
                //下面这个属性是里面拖到
                {
                    type: 'inside',
                    show: true,
                    xAxisIndex: [0],
                    start: 1,
                    end: 100
                }
            ]
    		  }),
    		  
    		 myChart6.setOption({
    		 	  /*title: {
             text: '雷达图'
             },*/
            legend: {
                bottom: 5,
                itemWidth: 12,
                itemHeight: 12,
                data: ['沿街店铺经营类别'],
                textStyle: {
                    color: '#fff'
                }
            },
            radar: {
                radius: '60%',
                splitNumber: 8,
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        opacity: .2
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#fff',
                        opacity: .2
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: 'rgba(127,95,132,.3)',
                        opacity: 1,
                        shadowBlur: 45,
                        shadowColor: 'rgba(0,0,0,.5)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 15
                    }
                },
                indicator: [
                    {name: '网吧:1', max: 3},
                    {name: '房屋中介:2', max: 3},
                    {name: '超市:2', max: 3},
                    {name: 'KTV:4', max: 4},
                    {name: '休闲中心:2', max: 3},
                    {name: '市场:1', max: 3},
                ]
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                symbolSize: 0,
                areaStyle: {
                    normal: {
                        shadowBlur: 13,
                        shadowColor: 'rgba(0,0,0,.2)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 10,
                        opacity: 1
                    }
                },
                data: [{
                    value: [1, 2, 2, 4, 2, 1],
                    name: '沿街店铺经营类别'
                }]
            }],
            color: ['rgba(238, 75, 76, 0.6)']
        


    		 })
    		  
    	},
    	
    	toHome(){
    		this.$router.push({
      			  name: 'home_index',
      		})
    	},
      	syrk(){
      		this.$router.push({
      			  name: 'rycx',
	              params: {
	                hjdz:'山阳镇九龙村汀南2400号'
	              }
      		})
      	},
      	syfw(){
      		this.$router.push({
      			  name: 'fwcx',
	              params: {
	                lm:'山阳镇龙轩路',
	                mnph:'1000'
	              }
      		})
      	}
    }
  }
</script>

<style scoped>
	 .nav {
            text-align: center;
            height: 40px;
        }
			
        .content {
        	width: 100%;
        	height: 100%;
            background-image: url(~@/images/ybls_home/home-bg.jpg);
        }

        .left-top1 {
            background-color: rgba(37, 16, 231, 0.1);
            width: 99.8%;
            height: 120px;
            margin: 10px 0 0 0px;
            box-shadow: inset 0px 0px 15px 0px rgba(16, 164, 231, 0.84);
        }

        .left-top {
            width: 100%;
            height: 130px;
            margin: 0px 0 0 0px;
            float: left;
        }

        .mid-top1 {

            background-color: rgba(37, 16, 231, 0.1);
            width: 27%;
            height: 200px;
            margin: 0px 0 0 0px;
            box-shadow: inset 0px 0px 15px 0px rgba(16, 164, 231, 0.84);
        }

        .mid-top {
            width: 28%;
            height: 210px;
            margin: 5px 0 0 0px;
            float: left;

        }

        .right-top1 {
            background-color: rgba(37, 16, 231, 0.1);
            width: 30%;
            height: 200px;
            margin: 0px 0 0 0px;
            box-shadow: inset 0px 0px 15px 0px rgba(16, 164, 231, 0.84);
        }

        .right-top {
            width: 31%;
            height: 210px;
            margin: 5px 0 0 -5px;
            float: left;

        }

        .left-bottom1 {
            background-color: rgba(37, 16, 231, 0.1);
            width: 41.5%;
            height: 200px;
            margin: 0px 0 0 0px;
            box-shadow: inset 0px 0px 15px 0px rgba(16, 164, 231, 0.84);
        }

        .left-bottom {
            width: 41%;
            height: 210px;
            margin: 5px 0 0 -5px;
            float: left;
        }

        .mid-bottom1 {
            background-color: rgba(37, 16, 231, 0.1);
            width: 39%;
            height: 140px;
            margin: 0px 0 0 0px;
            box-shadow: inset 0px 0px 15px 0px rgba(16, 164, 231, 0.84);
        }

        .mid-bottom {
            width: 40%;
            height: 150px;
            margin: -5px 0 0 0px;
            float: left;
        }

        .right-bottom1 {
            background-color: rgba(37, 16, 231, 0.1);
            width: 24%;
            height: 325px;
            margin: 0px 0 0 0px;
            box-shadow: inset 0px 0px 15px 0px rgba(16, 164, 231, 0.84);
        }

        .right-bottom {
            width: 25%;
            height: 335px;
            margin: -5px 0 0 -2px;
            float: left;
        }

        .bottom-left1 {
            background-color: rgba(37, 16, 231, 0.1);
            width: 35.3%;
            height: 325px;
            margin: 0px 0 0 0px;
            box-shadow: inset 0px 0px 15px 0px rgba(16, 164, 231, 0.84);
        }

        .bottom-left {
            width: 35%;
            height: 335px;
            margin: -5px 0 0 -5px;
            float: left;
        }

        .bottom-mid1 {
            background-color: rgba(37, 16, 231, 0.1);
            width: 39%;
            height: 180px;
            margin: 0px 0 0 0px;
            box-shadow: inset 0px 0px 15px 0px rgba(16, 164, 231, 0.84);
        }

        .bottom-mid {
            width: 40%;
            height: 200px;
            margin: -190px 0 0 0px;
            float: left;
        }
		
		.bmimg1{
			float:left;background: url(~@/images/ybls_home/Q130.png);width: 130px;height: 130px;background-repeat: no-repeat;margin: 20px 0 0 40px;text-align: center;line-height:130px;color:white;font-size:24px
		}
		.bmimg2{
			float:left;background: url(~@/images/ybls_home/Q130-2.png);width: 130px;height: 130px;background-repeat: no-repeat;margin: 20px 0 0 30px;text-align: center;line-height:130px;color:white;font-size:24px
		}
		.bmimg3{
			float:left;background: url(~@/images/ybls_home/Q130.png);width: 130px;height: 130px;background-repeat: no-repeat;margin: 20px 0 0 30px;text-align: center;line-height:130px;color:white;font-size:24px
		}
        label {
            cursor: pointer;
            background: -webkit-linear-gradient(#2C366B, #2B2E5A);
            color: #eee;
            border-radius: 5px 5px 0 0;
            padding: 1.5% 3%;
            float: left;
            margin-right: 2px;
            font: italic 1em cambria;
        }

        .button_link {
            display: inline-block;
            position: relative;
            text-decoration: none;
            font-size: 15px;
            color: white;
            font-weight: bold;
            width: 9%;
            text-align: center;
            height: 100px;
            line-height: 56px;
            border: 1px solid #1E4A78;
            margin: 5px 20px;

            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-transition: 0.4s;
            -o-transition: 0.4s;
            transition: 0.4s;
            float: left;
            border-radius: 5px;
        }

        .button_link:hover {
            border: 2px solid #98CDFF;
            box-shadow: 0px 8px 30px black;
        }

        .button_link .line {
            display: inline-block;
            background-color: #98CDFF;
            position: absolute;
            -webkit-transition: 0.5s ease;
            -o-transition: 0.5s ease;
            transition: 0.5s ease;
        }

        .button_link .line_top {
            height: 2px;
            width: 0;
            left: -50%;
            top: -2px;
        }

        .button_link:hover .line_top {
            width: 100%;
            left: -2px;
        }

        .button_link .line_right {
            height: 0;
            width: 2px;
            top: -50%;
            right: -2px;
        }

        .button_link:hover .line_right {
            height: 100%;
            top: -2px;
        }

        .button_link .line_bottom {
            width: 2px;
            height: 0;
            bottom: -50%;
            left: -2px;
        }

        .button_link:hover .line_bottom {
            height: 100%;
            bottom: -2px;
        }

        .button_link .line_left {
            height: 2px;
            width: 0;
            right: -50%;
            bottom: -2px;
        }

        .button_link:hover .line_left {
            width: 100%;
            right: -2px;
        }

        .text_bottom {
            margin-top: -20px;
            color: #5CABFF;
        }

        .text_top {
            font-size: 32px;
            color: whitesmoke;
        }
</style>