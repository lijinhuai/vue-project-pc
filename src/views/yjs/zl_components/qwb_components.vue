<template>
	<div id= 'qwb_components'>
		<div id="hiddenCardDiv6" style="position: absolute;top: 60px;width: 100%;display: none;">
				<div style="float: left;margin-left: 3%;width: 90%;">
					<div id="first_div2" style="display: none;transition: .5s;">
					<Row >
						<Col span="3" offset="1">
							<Card @click.native="changeTab('1')" class="hiddenCard6" :bordered="false" style="background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
							<span>骨灰盒寄存</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('2')" class="hiddenCard6" :bordered="false" style="background-color: rgba(61, 156, 58, 0.52);;cursor: pointer;">
							<span>墓地信息</span>
							</Card>
						</Col>

						<Col span="3" offset="1">
							<Card @click.native="changeTab('3')" class="hiddenCard6" :bordered="false" style="background-color: rgba(63, 58, 156, 0.52);cursor: pointer;">
							<span>ems</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('4')" class="hiddenCard6" :bordered="false" style="background-color: rgba(156, 120, 58, 0.52);cursor: pointer;">
							<span>第一人民医院</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('5')" class="hiddenCard6" :bordered="false" style="background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
							<span>法人信息</span>
							</Card>
						</Col>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('6')" class="hiddenCard6" :bordered="false" style="background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
							<span>卫生数据</span>
							</Card>
						</Col>
						<div id="right_icon" @click="changetoright_1" style="position: absolute;top:15px;right: -60px;cursor: pointer;width:20px;">
							<Icon type="chevron-right" size='20'></Icon>
						</div>
					</Row>
					</div>
					<div id="second_div2" style="display: none;">
					<Row>
						<div id="left_icon" @click="changetoleft_1" style="position: absolute;top:15px;cursor: pointer;width:20px;">
							<Icon type="chevron-left" size='20' ></Icon>
						</div>
						<Col span="3" offset="1">
							<Card @click.native="changeTab('7')" class="hiddenCard6" :bordered="false" style="background-color: rgba(113, 67, 67, 0.52);cursor: pointer;">
							<span>学生数据</span>
							</Card>
						</Col>
					</Row>
					</div>
				</div>
			</div>

		<div id="showContentDiv6">
			<div id="ghh" class="showcontent6"  style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small" ></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="mdxx" class="showcontent6" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="ems" class="showcontent6" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="dyrmyy" class="showcontent6" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="frxx" class="showcontent6" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="wssj" class="showcontent6" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="450" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="xssj" class="showcontent6" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
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
      let hiddenCard6 = document.getElementsByClassName('hiddenCard6')
      let showcontent6 = document.getElementsByClassName('showcontent6')

      for (let i = 1; i < hiddenCard6.length + 1; i++) {
        if (index === i) {
          showcontent6[i - 1].style.display = 'block'
          hiddenCard6[i - 1].style.borderLeft = '5px solid brown'
        } else {
          showcontent6[i - 1].style.display = 'none'
          hiddenCard6[i - 1].style.borderLeft = ''
        }
      }
    },
    changetoleft_1 () {
      let firstdiv2 = document.getElementById('first_div2')
      let seconddiv2 = document.getElementById('second_div2')
      firstdiv2.style.display = 'block'
      seconddiv2.style.display = 'none'
    },
    changetoright_1 () {
      let firstdiv2 = document.getElementById('first_div2')
      let seconddiv2 = document.getElementById('second_div2')
      seconddiv2.style.display = 'block'
      firstdiv2.style.display = 'none'
    }
  }
}
</script>
<style>

</style>
