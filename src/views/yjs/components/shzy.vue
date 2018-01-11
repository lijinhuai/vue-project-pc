<template>
	<div id="shzy" style="width: 90%;height:100%;position: absolute;top: 50px;left: 5%;z-index: 999;transition: .5s;display: none;">
		<Card :bordered="false" class="background_card">

			<p slot='title' style="font-size: 20px;color: whitesmoke">
				<Icon type="pricetags"></Icon>
				社会资源数据
				<div style="position: absolute;top: 14px;">
					<div style="margin:0px 0 0 140px;width: 50px;">
						<i class="showi" @click="back()" style="cursor: pointer;margin-left: 10px;">
							<Icon type="chevron-left" color="#67a29d"></Icon>
							<Icon type="chevron-left" color="#67a29d"></Icon>
						</i>
					</div>
				</div>
			</p>
			<a slot='extra'@click="close">
				<Icon type="close" style="color: whitesmoke"></Icon>
			</a>
			<div id="showCardDiv5" style="display: block;">
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='30000'>
					<Card @click.native="handleAdd('1')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/宾旅馆数据.png" />
						<p >宾旅馆数据</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='2000'>
					<Card @click.native="handleAdd('2')" :bordered="false" class="card" style="text-align: center;background-color: rgba(61, 156, 58, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/QQ.png" />
						<p>QQ</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='245'>
					<Card @click.native="handleAdd('3')" :bordered="false" class="card" style="text-align: center;background-color: rgba(63, 58, 156, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/卓越网.png" />
						<p>卓越网</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='1245'>
					<Card @click.native="handleAdd('4')" :bordered="false" class="card" style="text-align: center;background-color: rgba(156, 120, 58, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/保险车辆.png" />
						<p>保险车辆</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='564'>
					<Card @click.native="handleAdd('5')" :bordered="false" class="card" style="text-align: center;background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/东方有线.png" />
						<p>东方有线</p>

					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='234'>
					<Card @click.native="handleAdd('6')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/骨灰盒寄存数据.png" />
						<p>骨灰盒寄存数据</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='543'>
					<Card @click.native="handleAdd('7')" :bordered="false" class="card" style="text-align: center;background-color: rgba(113, 67, 67, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/购酒网.png" />
						<p>购酒网</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='556'>
					<Card @click.native="handleAdd('8')" :bordered="false" class="card" style="text-align: center;background-color: rgba(37, 87, 101, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/来伊份.png" />
						<p>来伊份</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='564'>
					<Card @click.native="handleAdd('9')" :bordered="false" class="card" style="text-align: center;background-color: rgba(201, 202, 168, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/墓地信息.png" />

						<p>墓地信息</p>

					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='234'>
					<Card @click.native="handleAdd('10')" :bordered="false" class="card" style="text-align: center;background-color: rgba(193, 53, 145, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/宅急送.png" />
						<p>宅急送</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='543'>
					<Card @click.native="handleAdd('11')" :bordered="false" class="card" style="text-align: center;background-color: rgba(130, 35, 84, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/申通快递.png" />
						<p>申通快递</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='556'>
					<Card @click.native="handleAdd('12')" :bordered="false" class="card" style="text-align: center;background-color: rgba(157, 46, 179, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/企业人口.png" />
						<p>企业人口</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='30000'>
					<Card @click.native="handleAdd('13')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/ems.png" />
						<p >ems</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='2000'>
					<Card @click.native="handleAdd('14')" :bordered="false" class="card" style="text-align: center;background-color: rgba(61, 156, 58, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/第一人民医院.png" />
						<p>第一人民医院</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='245'>
					<Card @click.native="handleAdd('15')" :bordered="false" class="card" style="text-align: center;background-color: rgba(63, 58, 156, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/松江法人信息.png" />
						<p>金山法人信息</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='1245'>
					<Card @click.native="handleAdd('16')" :bordered="false" class="card" style="text-align: center;background-color: rgba(156, 120, 58, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/卫生数据.png" />
						<p>卫生数据</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='564'>
					<Card @click.native="handleAdd('17')" :bordered="false" class="card" style="text-align: center;background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/网安数据.png" />
						<p>网安数据</p>

					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='234'>
					<Card @click.native="handleAdd('18')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/学生数据.png" />
						<p>学生数据</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='543'>
					<Card @click.native="handleAdd('19')" :bordered="false" class="card" style="text-align: center;background-color: rgba(113, 67, 67, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/圆通快递.png" />
						<p>圆通快递</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='556'>
					<Card @click.native="handleAdd('20')" :bordered="false" class="card" style="text-align: center;background-color: rgba(37, 87, 101, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/意外险.png" />
						<p>意外险</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			</div>
		</Card>
		<shzy-com></shzy-com>
	</div>
</template>

<script>
import shzyCom from '../zl_components/shzy_components'
export default {
  components: {
    'shzy-com': shzyCom
  },
  methods: {
    close () {
      /* eslint-disable no-unused-vars */
      let showContentDiv5 = document.getElementById('showContentDiv5')
      let showcontent5 = document.getElementsByClassName('showcontent5')
      let hiddenCard5 = document.getElementsByClassName('hiddenCard5')
      let hiddenCardDiv5 = document.getElementById('hiddenCardDiv5')
      let firstdiv1 = document.getElementById('first_div1')
      let seconddiv1 = document.getElementById('second_div1')
      let thirddiv1 = document.getElementById('third_div1')
      let fourdiv1 = document.getElementById('four_div1')
      let shzy = document.getElementById('shzy')
      shzy.style.opacity = 0
      setTimeout(function () {
        shzy.style.display = 'none'
      }, 50)
      /* eslint-disable no-undef */
      showCardDiv5.style.display = 'block'
      hiddenCardDiv5.style.display = 'none'
      firstdiv1.style.display = 'none'
      seconddiv1.style.display = 'none'
      thirddiv1.style.display = 'none'
      fourdiv1.style.display = 'none'
      for (let q = 0; q < showcontent5.length; q++) {
        showcontent5[q].style.display = 'none'
        hiddenCard5[q].style.borderLeft = ''
      }
    },
    handleAdd (num) {
      let showcontent5 = document.getElementsByClassName('showcontent5')
      let hiddenCard5 = document.getElementsByClassName('hiddenCard5')
      let showCardDiv5 = document.getElementById('showCardDiv5')
      let hiddenCardDiv5 = document.getElementById('hiddenCardDiv5')
      let firstdiv1 = document.getElementById('first_div1')
      let seconddiv1 = document.getElementById('second_div1')
      let thirddiv1 = document.getElementById('third_div1')
      let fourdiv1 = document.getElementById('four_div1')
      showCardDiv5.style.display = 'none'
      hiddenCardDiv5.style.display = 'block'
      for (let j = 1; j < showcontent5.length + 1; j++) {
        if (num === j) {
          showcontent5[j - 1].style.display = 'block'
          hiddenCard5[j - 1].style.borderLeft = '5px solid brown'
        }
      }
      if (num < 7) {
        firstdiv1.style.display = 'block'
      } else if (num < 13) {
        seconddiv1.style.display = 'block'
      } else if (num < 19) {
        thirddiv1.style.display = 'block'
      } else {
        fourdiv1.style.display = 'block'
      }
    },
    back () {
      let showCardDiv5 = document.getElementById('showCardDiv5')
      let hiddenCardDiv5 = document.getElementById('hiddenCardDiv5')
      let showcontent5 = document.getElementsByClassName('showcontent5')
      let hiddenCard5 = document.getElementsByClassName('hiddenCard5')
      let firstdiv1 = document.getElementById('first_div1')
      let seconddiv1 = document.getElementById('second_div1')
      let thirddiv1 = document.getElementById('third_div1')
      let fourdiv1 = document.getElementById('four_div1')
      showCardDiv5.style.display = 'block'
      hiddenCardDiv5.style.display = 'none'
      firstdiv1.style.display = 'none'
      seconddiv1.style.display = 'none'
      thirddiv1.style.display = 'none'
      fourdiv1.style.display = 'none'
      for (let a = 0; a < showcontent5.length; a++) {
        showcontent5[a].style.display = 'none'
        hiddenCard5[a].style.borderLeft = ''
      }
    }
  }
}
</script>

<style>

</style>
