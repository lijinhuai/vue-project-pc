<template>
	<div id="gajm" class="components_yjs"  style="width: 90%;height:100%;position: absolute;top: 30px;left: 5%;z-index: 10;transition: .5s;display: none;">
		<Card :bordered="false" class="background_card" >

			<p slot='title' style="font-size: 20px;color: whitesmoke">
				<Icon type="pricetags"></Icon>
				公安数据
				<div style="position:absolute;top: 14px;">
					<div style="margin:0px 0 0 100px;width: 50px;">
						<i class="showi" @click="back()" style="cursor: pointer;margin-left: 10px;">
							<Icon type="chevron-left" color="#67a29d"></Icon>
							<Icon type="chevron-left" color="#67a29d"></Icon>
						</i>
					</div>
				</div>
			</p>
			<a slot='extra'@click="close">
				<Icon type="close" style="color: whitesmoke;font-size: 20px;"></Icon>
			</a>
			<div id="showCardDiv" style="display: block;">
			<br />
			<Row>
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='30000' >
					<Card  @click.native="handleAdd('1')"  :bordered="false"  class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
						<!--<p style="font-size: 24px;">9999999</p>-->
						<img class="show_img" src="~@/images/yjs/home/交警短信平台.png" />
						<p>交警短信平台</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='2000'>
					<Card @click.native="handleAdd('2')" :bordered="false" class="card" style="text-align: center;background-color: rgba(61, 156, 58, 0.52);cursor: pointer;">
						<img class="show_img" src="~@/images/yjs/home/全国在逃人员新增与撤销档.png" />
						<p>在逃人员新增与撤销档</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='245'>
					<Card @click.native="handleAdd('3')" :bordered="false" class="card" style="text-align: center;background-color: rgba(63, 58, 156, 0.52);cursor: pointer;"">
						<img class="show_img" src="~@/images/yjs/home/全国撤销人员.png" />
						<p>全国撤销人员</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='1245'>
					<Card @click.native="handleAdd('4')" :bordered="false" class="card" style="text-align: center;background-color: rgba(156, 120, 58, 0.52);cursor: pointer;"">
						<img class="show_img" src="~@/images/yjs/home/涉毒人员（新）.png" />
						<p>涉毒人员</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='564'>
					<Card @click.native="handleAdd('5')" :bordered="false" class="card" style="text-align: center;background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
						<img class="show_img" src="~@/images/yjs/home/小区停车.png" />

						<p>小区停车</p>

					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='234'>
					<Card @click.native="handleAdd('6')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
						<img class="show_img" src="~@/images/yjs/home/通讯录联系人.png" />
						<p>通讯录联系人</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='543'>
					<Card @click.native="handleAdd('7')" :bordered="false" class="card" style="text-align: center;background-color: rgba(113, 67, 67, 0.52);cursor: pointer;"">
						<img class="show_img" src="~@/images/yjs/home/手机.png" />
						<p>手机</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='556'>
					<Card @click.native="handleAdd('8')" :bordered="false" class="card" style="text-align: center;background-color: rgba(37, 87, 101, 0.52);cursor: pointer;"">
						<img class="show_img" src="~@/images/yjs/home/手机持有人.png" />
						<p>手机持有人</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='564'>
					<Card @click.native="handleAdd('9')" :bordered="false" class="card" style="text-align: center;background-color: rgba(201, 202, 168, 0.52);cursor: pointer;">
						<img class="show_img" src="~@/images/yjs/home/七类重点人员.png" />

						<p>七类重点人员</p>

					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='234'>
					<Card @click.native="handleAdd('10')" :bordered="false" class="card" style="text-align: center;background-color: rgba(193, 53, 145, 0.52);cursor: pointer;">
						<img class="show_img" src="~@/images/yjs/home/终端人员采集.png" />
						<p>终端人员采集</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='543'>
					<Card @click.native="handleAdd('11')" :bordered="false" class="card" style="text-align: center;background-color: rgba(130, 35, 84, 0.52);cursor: pointer;"">
						<img class="show_img" src="~@/images/yjs/home/终端房屋采集.png" />
						<p>终端房屋采集</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='556'>
					<Card @click.native="handleAdd('12')" :bordered="false" class="card" style="text-align: center;background-color: rgba(157, 46, 179, 0.52);cursor: pointer;"">
						<img  class="show_img" src="~@/images/yjs/home/监所人员.png" />
						<p>监所人员</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			</div>
		</Card>
		<ga-com></ga-com>
	</div>

</template>

<script>
import gaCom from '../zl_components/ga_components'
export default {
  components: {
    'ga-com': gaCom
  },
  methods: {
    close () {
      let gajm = document.getElementById('gajm')
      /* eslint-disable no-unused-vars */
      let showContentDiv = document.getElementById('showContentDiv')
      let showcontent = document.getElementsByClassName('showcontent')
      let hiddenCard = document.getElementsByClassName('hiddenCard')
      let hiddenCardDiv = document.getElementById('hiddenCardDiv')
      let firstdiv = document.getElementById('first_div')
      let seconddiv = document.getElementById('second_div')
      gajm.style.opacity = 0
      setTimeout(function () {
        gajm.style.display = 'none'
      }, 50)
      /* eslint-disable no-undef */
      showCardDiv.style.display = 'block'
      hiddenCardDiv.style.display = 'none'
      firstdiv.style.display = 'none'
      seconddiv.style.display = 'none'
      for (let q = 0; q < showcontent.length; q++) {
        showcontent[q].style.display = 'none'
        hiddenCard[q].style.borderLeft = ''
      }
    },
    handleAdd (num) {
      let showcontent = document.getElementsByClassName('showcontent')
      let hiddenCard = document.getElementsByClassName('hiddenCard')
      let showCardDiv = document.getElementById('showCardDiv')
      let hiddenCardDiv = document.getElementById('hiddenCardDiv')
      let firstdiv = document.getElementById('first_div')
      let seconddiv = document.getElementById('second_div')
      showCardDiv.style.display = 'none'
      hiddenCardDiv.style.display = 'block'
      for (let j = 1; j < showcontent.length + 1; j++) {
        if (num === j) {
          showcontent[j - 1].style.display = 'block'
          hiddenCard[j - 1].style.borderLeft = '5px solid brown'
        }
      }
      if (num < 7) {
        firstdiv.style.display = 'block'
      } else {
        seconddiv.style.display = 'block'
      }
    },
    back () {
      let showCardDiv = document.getElementById('showCardDiv')
      let hiddenCardDiv = document.getElementById('hiddenCardDiv')
      let showcontent = document.getElementsByClassName('showcontent')
      let hiddenCard = document.getElementsByClassName('hiddenCard')
      let firstdiv = document.getElementById('first_div')
      let seconddiv = document.getElementById('second_div')
      showCardDiv.style.display = 'block'
      hiddenCardDiv.style.display = 'none'
      firstdiv.style.display = 'none'
      seconddiv.style.display = 'none'
      for (let a = 0; a < showcontent.length; a++) {
        showcontent[a].style.display = 'none'
        hiddenCard[a].style.borderLeft = ''
      }
    }
  }
}
</script>

<style>

</style>
