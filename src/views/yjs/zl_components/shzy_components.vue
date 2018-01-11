<template>
	<div id= 'shzy_components'>
		<div id="hiddenCardDiv5" style="position: absolute;top: 60px;width: 100%;display: none;">
				<div style="float: left;margin-left: 3%;width: 90%;">
					<div id="first_div1" style="display: none;transition: .5s;">
					<Row >
						<Col span="3" offset="1">
							<Card @click.native="changeTab('1')" class="hiddenCard5" :bordered="false" style="background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
							<span>宾旅馆数据</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('2')" class="hiddenCard5" :bordered="false" style="background-color: rgba(61, 156, 58, 0.52);;cursor: pointer;">
							<span>QQ</span>
							</Card>
						</Col>

						<Col span="3" offset="1">
							<Card @click.native="changeTab('3')" class="hiddenCard5" :bordered="false" style="background-color: rgba(63, 58, 156, 0.52);cursor: pointer;">
							<span>卓越网</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('4')" class="hiddenCard5" :bordered="false" style="background-color: rgba(156, 120, 58, 0.52);cursor: pointer;">
							<span>保险车辆</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('5')" class="hiddenCard5" :bordered="false" style="background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
							<span>东方有线</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('6')" class="hiddenCard5" :bordered="false" style="background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
							<span>骨灰盒寄存</span>
							</Card>
						</Col>
						<div id="right_icon" @click="changetoright_1" style="position: absolute;top:15px;right: -60px;cursor: pointer;width:20px;">
							<Icon type="chevron-right" size='20'></Icon>
						</div>
					</Row>
					</div>
					<div id="second_div1" style="display: none;">
					<Row>
						<div id="left_icon" @click="changetoleft_1" style="position: absolute;top:15px;cursor: pointer;width:20px;">
							<Icon type="chevron-left" size='20' ></Icon>
						</div>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('7')" class="hiddenCard5" :bordered="false" style="background-color: rgba(113, 67, 67, 0.52);cursor: pointer;">
							<span>购酒网</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('8')" class="hiddenCard5" :bordered="false" style="background-color: rgba(37, 87, 101, 0.52);cursor: pointer;">
							<span>来伊份</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('9')" class="hiddenCard5" :bordered="false" style="background-color:  rgba(201, 202, 168, 0.52);cursor: pointer;">
							<span>墓地信息</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('10')" class="hiddenCard5" :bordered="false" style="background-color: rgba(193, 53, 145, 0.52);cursor: pointer;">
							<span>宅急送</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('11')" class="hiddenCard5" :bordered="false" style="background-color: rgba(130, 35, 84, 0.52);cursor: pointer;">
							<span>申通快递</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('12')" class="hiddenCard5" :bordered="false" style="background-color: rgba(157, 46, 179, 0.52);cursor: pointer;">
							<span>企业人口</span>
							</Card>
						</Col>
						<div id="right_icon" @click="changetoright_2" style="position: absolute;top:15px;right: -60px;cursor: pointer;width:20px;">
							<Icon type="chevron-right" size='20'></Icon>
						</div>
					</Row>
					</div>
					<div id="third_div1" style="display: none;">
					<Row>
						<div id="left_icon" @click="changetoleft_2" style="position: absolute;top:15px;cursor: pointer;width:20px;">
							<Icon type="chevron-left" size='20' ></Icon>
						</div>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('13')" class="hiddenCard5" :bordered="false" style="background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
							<span>ems</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('14')" class="hiddenCard5" :bordered="false" style="background-color: rgba(61, 156, 58, 0.52);cursor: pointer;">
							<span>第一人民医院</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('15')" class="hiddenCard5" :bordered="false" style="background-color:  rgba(63, 58, 156, 0.52);cursor: pointer;">
							<span>法人信息</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('16')" class="hiddenCard5" :bordered="false" style="background-color: rgba(156, 120, 58, 0.52);cursor: pointer;">
							<span>卫生数据</span>
							</Card>
						</Col>
						<Col span="3"  offset="1">
							<Card @click.native="changeTab('17')" class="hiddenCard5" :bordered="false" style="background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
							<span>网安数据</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('18')" class="hiddenCard5" :bordered="false" style="background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
							<span>学生数据</span>
							</Card>
						</Col>
						<div id="right_icon" @click="changetoright_3" style="position: absolute;top:15px;right: -60px;cursor: pointer;width:20px;">
							<Icon type="chevron-right" size='20'></Icon>
						</div>
					</Row>
					</div>
					<div id="four_div1" style="display: none;">
					<Row>
						<div id="left_icon" @click="changetoleft_3" style="position: absolute;top:15px;cursor: pointer;width:20px;">
							<Icon type="chevron-left" size='20' ></Icon>
						</div>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('19')" class="hiddenCard5" :bordered="false" style="background-color: rgba(113, 67, 67, 0.52);cursor: pointer;">
							<span>圆通快递</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('20')" class="hiddenCard5" :bordered="false" style="background-color: rgba(37, 87, 101, 0.52);cursor: pointer;">
							<span>意外险</span>
							</Card>
						</Col>
					</Row>
					</div>
				</div>
			</div>

		<div id="showContentDiv5">
			<div id="blgsj" class="showcontent5"  style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small" ></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="qq" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="zyw" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="bxcl" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="dfyx" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="ghh" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="gjw" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="lyf" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="mdxx" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="zjs" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="stkd" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="qyrk" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="ems" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="dyrmyy" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="frxx" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="wssj" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="wasj" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="xssj" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="ytkd" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="ywx" class="showcontent5" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
		</div>
	</div>

</template>
<script>
export default {
  data () {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 9,
        total: 9
      },
      blg_colums: [],
      qq_colums: [],
      zyw_colums: [],
      bxcl_colums: [],
      dfyx_colums: [],
      ghh_colums: [],
      gjw_colums: [],
      lyf_colums: [],
      mdxx_colums: [],
      zjs_colums: [],
      stkd_colums: [],
      qyrk_colums: [],
      ems_colums: [],
      dyrmyy_colums: [],
      frxx_colums: [],
      wssj_colums: [],
      wasj_colums: [],
      xssj_colums: [],
      ytkd_colums: [],
      ywx_colums: [],

      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Time',
          key: 'time'
        }
      ],
      columns2: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Time',
          key: 'time'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
          time: '2016-10-03'
        },
        {
          name: ' Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
          time: '2016-10-03'
        },
        {
          name: ' Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02',
          time: '2016-10-03'
        },
        {
          name: ' Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
          time: '2016-10-03'
        },
        {
          name: ' Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
          time: '2016-10-03'
        },
        {
          name: ' Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
          time: '2016-10-03'
        },
        {
          name: ' Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
          time: '2016-10-03'
        },
        {
          name: ' Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
          time: '2016-10-03'
        },
        {
          name: ' Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
          time: '2016-10-03'
        }
      ],
      data2: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
          time: '2016-10-03'
        },
        {
          name: ' Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
          time: '2016-10-03'
        },
        {
          name: ' Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02',
          time: '2016-10-03'
        }
      ]
    }
  },
  methods: {
    changeTab (index) {
      let hiddenCard5 = document.getElementsByClassName('hiddenCard5')
      let showcontent5 = document.getElementsByClassName('showcontent5')

      for (let i = 1; i < hiddenCard5.length + 1; i++) {
        if (index === i) {
          showcontent5[i - 1].style.display = 'block'
          hiddenCard5[i - 1].style.borderLeft = '5px solid brown'
        } else {
          showcontent5[i - 1].style.display = 'none'
          hiddenCard5[i - 1].style.borderLeft = ''
        }
      }
    },
    changetoleft_1 () {
      let firstdiv1 = document.getElementById('first_div1')
      let seconddiv1 = document.getElementById('second_div1')
      let thirddiv1 = document.getElementById('third_div1')
      let fourdiv1 = document.getElementById('four_div1')
      firstdiv1.style.display = 'block'
      seconddiv1.style.display = 'none'
      thirddiv1.style.display = 'none'
      fourdiv1.style.display = 'none'
    },
    changetoleft_2 () {
      let firstdiv1 = document.getElementById('first_div1')
      let seconddiv1 = document.getElementById('second_div1')
      let thirddiv1 = document.getElementById('third_div1')
      let fourdiv1 = document.getElementById('four_div1')
      seconddiv1.style.display = 'block'
      firstdiv1.style.display = 'none'
      thirddiv1.style.display = 'none'
      fourdiv1.style.display = 'none'
    },
    changetoleft_3 () {
      let firstdiv1 = document.getElementById('first_div1')
      let seconddiv1 = document.getElementById('second_div1')
      let thirddiv1 = document.getElementById('third_div1')
      let fourdiv1 = document.getElementById('four_div1')
      thirddiv1.style.display = 'block'
      firstdiv1.style.display = 'none'
      seconddiv1.style.display = 'none'
      fourdiv1.style.display = 'none'
    },
    changetoright_1 () {
      let firstdiv1 = document.getElementById('first_div1')
      let seconddiv1 = document.getElementById('second_div1')
      let thirddiv1 = document.getElementById('third_div1')
      let fourdiv1 = document.getElementById('four_div1')
      seconddiv1.style.display = 'block'
      firstdiv1.style.display = 'none'
      thirddiv1.style.display = 'none'
      fourdiv1.style.display = 'none'
    },
    changetoright_2 () {
      let firstdiv1 = document.getElementById('first_div1')
      let seconddiv1 = document.getElementById('second_div1')
      let thirddiv1 = document.getElementById('third_div1')
      let fourdiv1 = document.getElementById('four_div1')
      thirddiv1.style.display = 'block'
      firstdiv1.style.display = 'none'
      seconddiv1.style.display = 'none'
      fourdiv1.style.display = 'none'
    },
    changetoright_3 () {
      let firstdiv1 = document.getElementById('first_div1')
      let seconddiv1 = document.getElementById('second_div1')
      let thirddiv1 = document.getElementById('third_div1')
      let fourdiv1 = document.getElementById('four_div1')
      fourdiv1.style.display = 'block'
      firstdiv1.style.display = 'none'
      seconddiv1.style.display = 'none'
      thirddiv1.style.display = 'none'
    }
  }
}
</script>
<style>

</style>
