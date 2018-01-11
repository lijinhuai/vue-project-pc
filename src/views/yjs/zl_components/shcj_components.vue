<template>
	<div id= 'shcj_components'>
		<div id="hiddenCardDiv8" style="position: absolute;top: 60px;width: 100%;display: none;">
				<div style="float: left;margin-left: 3%;width: 90%;">
					<div id="first_div3" style="display: none;transition: .5s;">
					<Row >
						<Col span="3" offset="1">
							<Card @click.native="changeTab('1')" class="hiddenCard8" :bordered="false" style="background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
							<span>宾旅馆数据</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('2')" class="hiddenCard8" :bordered="false" style="background-color: rgba(61, 156, 58, 0.52);;cursor: pointer;">
							<span>保险车辆</span>
							</Card>
						</Col>

						<Col span="3" offset="1">
							<Card @click.native="changeTab('3')" class="hiddenCard8" :bordered="false" style="background-color: rgba(63, 58, 156, 0.52);cursor: pointer;">
							<span>东方有线</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('4')" class="hiddenCard8" :bordered="false" style="background-color: rgba(156, 120, 58, 0.52);cursor: pointer;">
							<span>骨灰盒寄存</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('5')" class="hiddenCard8" :bordered="false" style="background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
							<span>来伊份</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('6')" class="hiddenCard8" :bordered="false" style="background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
							<span>墓地信息</span>
							</Card>
						</Col>
						<div id="right_icon" @click="changetoright_1" style="position: absolute;top:15px;right: -60px;cursor: pointer;width:20px;">
							<Icon type="chevron-right" size='20'></Icon>
						</div>
					</Row>
					</div>
					<div id="second_div3" style="display: none;">
					<Row>
						<div id="left_icon" @click="changetoleft_1" style="position: absolute;top:15px;cursor: pointer;width:20px;">
							<Icon type="chevron-left" size='20' ></Icon>
						</div>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('7')" class="hiddenCard8" :bordered="false" style="background-color: rgba(113, 67, 67, 0.52);cursor: pointer;">
							<span>宅急送</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('8')" class="hiddenCard8" :bordered="false" style="background-color: rgba(37, 87, 101, 0.52);cursor: pointer;">
							<span>申通快递</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('9')" class="hiddenCard8" :bordered="false" style="background-color:  rgba(201, 202, 168, 0.52);cursor: pointer;">
							<span>企业人口</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('10')" class="hiddenCard8" :bordered="false" style="background-color: rgba(193, 53, 145, 0.52);cursor: pointer;">
							<span>ems</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('11')" class="hiddenCard8" :bordered="false" style="background-color: rgba(130, 35, 84, 0.52);cursor: pointer;">
							<span>网安数据</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('12')" class="hiddenCard8" :bordered="false" style="background-color: rgba(157, 46, 179, 0.52);cursor: pointer;">
							<span>圆通快递</span>
							</Card>
						</Col>
						<div id="right_icon" @click="changetoright_2" style="position: absolute;top:15px;right: -60px;cursor: pointer;width:20px;">
							<Icon type="chevron-right" size='20'></Icon>
						</div>
					</Row>
					</div>
					<div id="third_div3" style="display: none;">
					<Row>
						<div id="left_icon" @click="changetoleft_2" style="position: absolute;top:15px;cursor: pointer;width:20px;">
							<Icon type="chevron-left" size='20' ></Icon>
						</div>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('13')" class="hiddenCard8" :bordered="false" style="background-color: rgba(37, 87, 101, 0.52);cursor: pointer;">
							<span>意外险</span>
							</Card>
						</Col>
					</Row>
					</div>
				</div>
			</div>

		<div id="showContentDiv8">
			<div id="blgsj" class="showcontent8"  style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small" ></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="bxcl" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="dfyx" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="ghh" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="dfyx" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="lyf" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="mdxx" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="lyf" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="zjs" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="stkd" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="qyrk" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="ems" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="wasj" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="ytkd" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="ywx" class="showcontent8" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
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
      let hiddenCard8 = document.getElementsByClassName('hiddenCard8')
      let showcontent8 = document.getElementsByClassName('showcontent8')

      for (let i = 1; i < hiddenCard8.length + 1; i++) {
        if (index === i) {
          showcontent8[i - 1].style.display = 'block'
          hiddenCard8[i - 1].style.borderLeft = '5px solid brown'
        } else {
          showcontent8[i - 1].style.display = 'none'
          hiddenCard8[i - 1].style.borderLeft = ''
        }
      }
    },
    changetoleft_1 () {
      let firstdiv3 = document.getElementById('first_div3')
      let seconddiv3 = document.getElementById('second_div3')
      let thirddiv3 = document.getElementById('third_div3')

      firstdiv3.style.display = 'block'
      seconddiv3.style.display = 'none'
      thirddiv3.style.display = 'none'
    },
    changetoleft_2 () {
      let firstdiv3 = document.getElementById('first_div3')
      let seconddiv3 = document.getElementById('second_div3')
      let thirddiv3 = document.getElementById('third_div3')

      seconddiv3.style.display = 'block'
      firstdiv3.style.display = 'none'
      thirddiv3.style.display = 'none'
    },

    changetoright_1 () {
      let firstdiv3 = document.getElementById('first_div3')
      let seconddiv3 = document.getElementById('second_div3')
      let thirddiv3 = document.getElementById('third_div3')

      seconddiv3.style.display = 'block'
      firstdiv3.style.display = 'none'
      thirddiv3.style.display = 'none'
    },
    changetoright_2 () {
      let firstdiv3 = document.getElementById('first_div3')
      let seconddiv3 = document.getElementById('second_div3')
      let thirddiv3 = document.getElementById('third_div3')

      thirddiv3.style.display = 'block'
      firstdiv3.style.display = 'none'
      seconddiv3.style.display = 'none'
    }
  }
}
</script>
<style>

</style>
