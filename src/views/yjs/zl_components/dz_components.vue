<template>
	<div id= 'dz_components'>
		<div id="hiddenCardDiv4" style="position: absolute;top: 60px;width: 100%;display: none;">
				<div style="float: left;margin-left: 1%;width: 90%;">
					<Row >
						<Col span="3" offset="1">
							<Card @click.native="changeTab('1')" class="hiddenCard4" :bordered="false" style="background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
							<span>终端房屋采集</span>
							</Card>
						</Col>
					</Row>
				</div>
			</div>

		<div id="showcontentDiv4">
			<div id="zdfwcj" class="showcontent4"  style="z-index: 20;position: absolute;top: 120px;width: 100%;height:80%;display: none;">
			   <Table height="490" :columns="columns1" :data="data1" size="small" ></Table>
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
      let hiddenCard4 = document.getElementsByClassName('hiddenCard4')
      let showcontent4 = document.getElementsByClassName('showcontent4')

      for (let i = 1; i < hiddenCard4.length + 1; i++) {
        if (index === i) {
          showcontent4[i - 1].style.display = 'block'
          hiddenCard4[i - 1].style.borderLeft = '5px solid brown'
        } else {
          showcontent4[i - 1].style.display = 'none'
          hiddenCard4[i - 1].style.borderLeft = ''
        }
      }
    }
  }
}
</script>
<style>

</style>
