<template>
	<div id= 'lxhm_components'>
		<div id="hiddenCardDiv1" style="position: absolute;top: 60px;width: 100%;display: none;">

				<div style="float: left;margin-left: 1%;width: 90%;">
					<Row >
			            		<Col span='3'offset='3'>
			            			<Card @click.native="changeTab('1')" class="hiddenCard1" :bordered="false" style="background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
										<span>交警短信平台</span>
									</Card>
			            		</Col>
			            		<Col span='3' offset='1'>
			            			<Card @click.native="changeTab('2')" class="hiddenCard1" :bordered="false" style="background-color: rgba(61, 156, 58, 0.52);;cursor: pointer;">
										<span>短信平台明细</span>
									</Card>
			            		</Col>
			            		<Col span="3" offset="1">
									<Card @click.native="changeTab('3')" class="hiddenCard1" :bordered="false" style="background-color: rgba(63, 58, 156, 0.52);cursor: pointer;">
									<span>通讯录联系人</span>
									</Card>
								</Col>
								<Col span="3" offset="1">
									<Card @click.native="changeTab('4')" class="hiddenCard1" :bordered="false" style="background-color: rgba(156, 120, 58, 0.52);cursor: pointer;">
									<span>手机</span>
									</Card>
								</Col>
								<Col span="3" offset="1">
									<Card @click.native="changeTab('5')" class="hiddenCard1" :bordered="false" style="background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
									<span>手机持有人</span>
									</Card>
								</Col>
					</Row>
				</div>
				<!--<div class="hiddenCard1">
			            	<Carousel  loop dots='none' ref='carousel'>
						        <CarouselItem>
						            <div class="demo-carousel">
						            	<Row>
						            	<Col span='3'offset='3'>
					            			<Card @click.native="changeTab('1')" class="hiddenCard1" :bordered="false" style="background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
												<span>交警短信平台</span>
											</Card>
					            		</Col>
					            		<Col span='3' offset='1'>
					            			<Card @click.native="changeTab('2')" class="hiddenCard1" :bordered="false" style="background-color: rgba(61, 156, 58, 0.52);;cursor: pointer;">
												<span>短信平台明细</span>
											</Card>
					            		</Col>
					            		</Row>
						            </div>
						        </CarouselItem>
						        <CarouselItem>
						            <div class="demo-carousel">2</div>
						        </CarouselItem>
						        <CarouselItem>
						            <div class="demo-carousel">3</div>
						        </CarouselItem>
						        <CarouselItem>
						            <div class="demo-carousel">4</div>
						        </CarouselItem>
						    </Carousel>
    			</div>-->
			</div>

		<div id="showcontentDiv1">
			<div id="jjdx" class="showcontent1"  style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="490" :columns="columns1" :data="data1" size="small" ></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="jjdxmx" class="showcontent1" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="490" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="txl" class="showcontent1" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="490" :columns="columns1" :data="data1" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="sj" class="showcontent1" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="490" :columns="columns2" :data="data2" size="small"></Table>
		        	  <div style="margin: 10px;overflow: hidden;">
				        <div style="float: right;">
				          <Page size="small" :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" ></Page>
				        </div>
		      		  </div>
			</div>
			<div id="sjcyr" class="showcontent1" style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="490" :columns="columns1" :data="data1" size="small"></Table>
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
      let hiddenCard1 = document.getElementsByClassName('hiddenCard1')
      let showcontent1 = document.getElementsByClassName('showcontent1')

      for (let i = 1; i < showcontent1.length + 1; i++) {
        if (index === i) {
          showcontent1[i - 1].style.display = 'block'
          hiddenCard1[i - 1].style.borderLeft = '5px solid brown'
        } else {
          showcontent1[i - 1].style.display = 'none'
          hiddenCard1[i - 1].style.borderLeft = ''
        }
      }
    }
  }
}
</script>
<style>

</style>
