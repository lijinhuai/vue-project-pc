<template>
	<div id= 'ga_components'>
		<div id="hiddenCardDiv" style="position: absolute;top: 60px;width: 100%;display: none;">

				<div style="float: left;margin-left: 3%;width: 90%;">
					<div id="first_div" style="display: none;">
					<Row >
						<Col span="3" offset='1'>
							<Card @click.native="changeTab('1')" class="hiddenCard" :bordered="false" style="background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
							<span>交警短信平台</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('2')" class="hiddenCard" :bordered="false" style="background-color: rgba(61, 156, 58, 0.52);;cursor: pointer;">
							<span>在逃人员</span>
							</Card>
						</Col>

						<Col span="3" offset="1">
							<Card @click.native="changeTab('3')" class="hiddenCard" :bordered="false" style="background-color: rgba(63, 58, 156, 0.52);cursor: pointer;">
							<span>全国撤销人员</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('4')" class="hiddenCard" :bordered="false" style="background-color: rgba(156, 120, 58, 0.52);cursor: pointer;">
							<span>涉毒人员</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('5')" class="hiddenCard" :bordered="false" style="background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
							<span>小区停车</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('6')" class="hiddenCard" :bordered="false" style="background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
							<span>通讯录联系人</span>
							</Card>
						</Col>
						<div id="right_icon"  @click="changetoright" style="position: absolute;top:15px;right: -60px;cursor: pointer;width:20px;">
							<Icon type="chevron-right" size='20'></Icon>
						</div>
					</Row>
					</div>
					<div id="second_div" style="display: none;transition: .5s;">
					<Row>
						<div id="left_icon" @click="changetoleft" style="position: absolute;top:15px;cursor: pointer;width:20px;">
							<Icon type="chevron-left" size='20' ></Icon>
						</div>
						<Col span="3" offset='1'>
							<Card @click.native="changeTab('7')" class="hiddenCard" :bordered="false" style="background-color: rgba(113, 67, 67, 0.52);cursor: pointer;">
							<span>手机</span>
							</Card>
						</Col>
						<Col span="3" offset='1'>
							<Card @click.native="changeTab('8')" class="hiddenCard" :bordered="false" style="background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
							<span>手机持有人</span>
							</Card>
						</Col>
						<Col span="3" offset='1'>
							<Card @click.native="changeTab('9')" class="hiddenCard" :bordered="false" style="background-color:  rgba(201, 202, 168, 0.52);cursor: pointer;">
							<span>七类重点人员</span>
							</Card>
						</Col>
						<Col span="3" offset='1'>
							<Card @click.native="changeTab('10')" class="hiddenCard" :bordered="false" style="background-color: rgba(193, 53, 145, 0.52);cursor: pointer;">
							<span>终端人员采集</span>
							</Card>
						</Col>
						<Col span="3" offset='1'>
							<Card @click.native="changeTab('11')" class="hiddenCard" :bordered="false" style="background-color: rgba(130, 35, 84, 0.52);cursor: pointer;">
							<span>终端房屋采集</span>
							</Card>
						</Col>
						<Col span="3" offset='1'>
							<Card @click.native="changeTab('12')" class="hiddenCard" :bordered="false" style="background-color: rgba(157, 46, 179, 0.52);cursor: pointer;">
							<span>监所人员</span>
							</Card>
						</Col>
					</Row>
					</div>
				</div>
			</div>

		<div id="showContentDiv">
			<div id="jjdx" class="showcontent"  style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="jjdx_columns" :data="jjdx_data" size="small" ></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="ztry" class="showcontent" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="cxry" class="showcontent" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="sdry" class="showcontent" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="xqtc" class="showcontent" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="txl" class="showcontent" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="sj" class="showcontent" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="sjcyr" class="showcontent" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="qlzdry" class="showcontent" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="zdrycj" class="showcontent" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="zdfwcj" class="showcontent" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="jsry" class="showcontent" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
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
      jjdx_columns: [
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
      ztry_colums: [],
      cxry_colums: [],
      sdry_colums: [],
      xqtc_colums: [],
      txl_colums: [],
      sj_colums: [],
      sjcyr_colums: [],
      qlzdry_colums: [],
      zdrycj_colums: [],
      zdfwcj_colums: [],
      jsry_colums: [],
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
      jjdx_data: [
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
      let hiddenCard = document.getElementsByClassName('hiddenCard')
      let showcontent = document.getElementsByClassName('showcontent')

      for (let i = 1; i < hiddenCard.length + 1; i++) {
        if (index === i) {
          showcontent[i - 1].style.display = 'block'
          hiddenCard[i - 1].style.borderLeft = '5px solid brown'
        } else {
          showcontent[i - 1].style.display = 'none'
          hiddenCard[i - 1].style.borderLeft = ''
        }
      }
    },
    changetoleft () {
      let firstdiv = document.getElementById('first_div')
      let seconddiv = document.getElementById('second_div')
      seconddiv.style.display = 'none'
      firstdiv.style.display = 'block'
    },
    changetoright () {
      let firstdiv = document.getElementById('first_div')
      let seconddiv = document.getElementById('second_div')
      firstdiv.style.display = 'none'
      seconddiv.style.display = 'block'
    }
  }
}
</script>
<style>

</style>
