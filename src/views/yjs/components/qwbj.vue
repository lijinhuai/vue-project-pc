<template>
	<div id="qwbj" style="width: 90%;height:100%;position: absolute;top: 50px;left: 5%;z-index: 999;transition: .5s;display: none;">
		<Card :bordered="false" class="background_card">

			<p slot='title' style="font-size: 20px;color: whitesmoke">
				<Icon type="pricetags"></Icon>
				区委办局提供数据
				<div style="position: absolute;top: 14px;">
					<div style="margin:0px 0 0 180px;width: 50px;">
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
			<div id="showCardDiv6" style="display: block;">
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='30000'>
					<Card @click.native="handleAdd('1')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/骨灰盒寄存数据.png" />
						<p >骨灰盒寄存数据</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='2000'>
					<Card @click.native="handleAdd('2')" :bordered="false" class="card" style="text-align: center;background-color: rgba(61, 156, 58, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/墓地信息.png" />
						<p>墓地信息</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='245'>
					<Card @click.native="handleAdd('3')" :bordered="false" class="card" style="text-align: center;background-color: rgba(63, 58, 156, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/ems.png" />
						<p>ems</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='1245'>
					<Card @click.native="handleAdd('4')" :bordered="false" class="card" style="text-align: center;background-color: rgba(156, 120, 58, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/第一人民医院.png" />
						<p>第一人民医院</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='564'>
					<Card @click.native="handleAdd('5')" :bordered="false" class="card" style="text-align: center;background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/松江法人信息.png" />

						<p>法人信息</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='234'>
					<Card @click.native="handleAdd('6')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/卫生数据.png" />
						<p>卫生数据</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='543'>
					<Card @click.native="handleAdd('7')" :bordered="false" class="card" style="text-align: center;background-color: rgba(113, 67, 67, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/学生数据.png" />
						<p>学生数据</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			</div>
		</Card>
		<qwb-com></qwb-com>
	</div>
</template>

<script>
import qwbCom from '../zl_components/qwb_components'
export default {
  components: {
    'qwb-com': qwbCom
  },
  methods: {
    close () {
      /* eslint-disable no-unused-vars */
      let showContentDiv6 = document.getElementById('showContentDiv6')
      let showcontent6 = document.getElementsByClassName('showcontent6')
      let hiddenCard6 = document.getElementsByClassName('hiddenCard6')
      let hiddenCardDiv6 = document.getElementById('hiddenCardDiv6')
      let firstdiv2 = document.getElementById('first_div2')
      let seconddiv2 = document.getElementById('second_div2')
      let qwbj = document.getElementById('qwbj')
      qwbj.style.opacity = 0
      setTimeout(function () {
        qwbj.style.display = 'none'
      }, 50)
      /* eslint-disable no-undef */
      showCardDiv6.style.display = 'block'
      hiddenCardDiv6.style.display = 'none'
      firstdiv2.style.display = 'none'
      seconddiv2.style.display = 'none'
      for (let q = 0; q < showcontent6.length; q++) {
        showcontent6[q].style.display = 'none'
        hiddenCard6[q].style.borderLeft = ''
      }
    },
    handleAdd (num) {
      let showcontent6 = document.getElementsByClassName('showcontent6')
      let hiddenCard6 = document.getElementsByClassName('hiddenCard6')
      let showCardDiv6 = document.getElementById('showCardDiv6')
      let hiddenCardDiv6 = document.getElementById('hiddenCardDiv6')
      let firstdiv2 = document.getElementById('first_div2')
      let seconddiv2 = document.getElementById('second_div2')

      showCardDiv6.style.display = 'none'
      hiddenCardDiv6.style.display = 'block'
      for (let j = 1; j < showcontent6.length + 1; j++) {
        if (num === j) {
          showcontent6[j - 1].style.display = 'block'
          hiddenCard6[j - 1].style.borderLeft = '5px solid brown'
        }
      }
      if (num < 7) {
        firstdiv2.style.display = 'block'
      } else {
        seconddiv2.style.display = 'block'
      }
    },
    back () {
      let showCardDiv6 = document.getElementById('showCardDiv6')
      let hiddenCardDiv6 = document.getElementById('hiddenCardDiv6')
      let showcontent6 = document.getElementsByClassName('showcontent6')
      let hiddenCard6 = document.getElementsByClassName('hiddenCard6')
      let firstdiv2 = document.getElementById('first_div2')
      let seconddiv2 = document.getElementById('second_div2')

      showCardDiv6.style.display = 'block'
      hiddenCardDiv6.style.display = 'none'
      firstdiv2.style.display = 'none'
      seconddiv2.style.display = 'none'

      for (let a = 0; a < showcontent6.length; a++) {
        showcontent6[a].style.display = 'none'
        hiddenCard6[a].style.borderLeft = ''
      }
    }
  }
}
</script>

<style>

</style>
