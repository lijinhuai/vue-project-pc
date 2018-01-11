<template>
	<div id="lxhm" style="width: 90%;height:100%;position: absolute;top: 30px;left: 5%;z-index: 999;transition: .5s;display: none;">
		<Card :bordered="false" class="background_card">

			<p slot='title' style="font-size: 20px;color: whitesmoke">
				<Icon type="pricetags"></Icon>
				联系号码
				<div style="position: absolute;top: 14px;">
					<div style="margin:0px 0 0 100px;width: 50px;">
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
			<div id="showCardDiv1" style="display: block;">
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='30000'>
					<Card @click.native="handleAdd('1')"  :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/交警短信平台.png" />
						<p >交警短信平台</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='2000'>
					<Card @click.native="handleAdd('2')" :bordered="false" class="card" style="text-align: center;background-color: rgba(61, 156, 58, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/交警短信平台明细.png" />
						<p>交警短信平台明细</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='245'>
					<Card @click.native="handleAdd('3')" :bordered="false" class="card" style="text-align: center;background-color: rgba(63, 58, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/通讯录联系人.png" />
						<p>通讯录联系人</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='1245'>
					<Card @click.native="handleAdd('4')" :bordered="false" class="card" style="text-align: center;background-color: rgba(156, 120, 58, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/手机.png" />
						<p>手机</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='564'>
					<Card @click.native="handleAdd('5')" :bordered="false" class="card" style="text-align: center;background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/手机持有人.png" />
						<p>手机持有人</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			</div>
		</Card>
		<lxhm-com></lxhm-com>
	</div>
</template>
<script>
import lxhmCom from '../zl_components/lxhm_components'
export default {
  components: {
    'lxhm-com': lxhmCom
  },
  methods: {
    close () {
      let lxhm = document.getElementById('lxhm')
      /* eslint-disable no-unused-vars */
      let showContentDiv1 = document.getElementById('showContentDiv1')
      let showcontent1 = document.getElementsByClassName('showcontent1')
      let hiddenCard1 = document.getElementsByClassName('hiddenCard1')
      let hiddenCardDiv1 = document.getElementById('hiddenCardDiv1')
      lxhm.style.opacity = 0
      setTimeout(function () {
        lxhm.style.display = 'none'
      }, 50)
      /* eslint-disable no-undef */
      showCardDiv1.style.display = 'block'
      hiddenCardDiv1.style.display = 'none'
      for (let q = 0; q < showcontent1.length; q++) {
        showcontent1[q].style.display = 'none'
        hiddenCard1[q].style.borderLeft = ''
      }
    },
    handleAdd (num) {
      let showcontent1 = document.getElementsByClassName('showcontent1')
      let hiddenCard1 = document.getElementsByClassName('hiddenCard1')
      let showCardDiv1 = document.getElementById('showCardDiv1')
      let hiddenCardDiv1 = document.getElementById('hiddenCardDiv1')

      for (let j = 1; j < showcontent1.length + 1; j++) {
        if (num === j) {
          showcontent1[j - 1].style.display = 'block'
          hiddenCard1[j - 1].style.borderLeft = '5px solid brown'
        }
      }
      showCardDiv1.style.display = 'none'
      hiddenCardDiv1.style.display = 'block'
    },
    back () {
      let showCardDiv1 = document.getElementById('showCardDiv1')
      let hiddenCardDiv1 = document.getElementById('hiddenCardDiv1')
      let showcontent1 = document.getElementsByClassName('showcontent1')
      let hiddenCard1 = document.getElementsByClassName('hiddenCard1')
      showCardDiv1.style.display = 'block'
      hiddenCardDiv1.style.display = 'none'
      for (let a = 0; a < showcontent1.length; a++) {
        showcontent1[a].style.display = 'none'
        hiddenCard1[a].style.borderLeft = ''
      }
    }
  }
}
</script>

<style>

</style>
