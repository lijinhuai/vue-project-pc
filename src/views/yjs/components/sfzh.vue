<template>
	<div id="rsfzh" style="width: 90%;height:100%;position: absolute;top: 30px;left: 5%;z-index: 999;transition: .5s;display: none;">
		<Card :bordered="false" class="background_card">

			<p slot='title' style="font-size: 20px;color: whitesmoke">
				<Icon type="pricetags"></Icon>
				人身份证号
				<div style="position: absolute;top: 14px;">
					<div style="margin:0px 0 0 120px;width: 50px;">
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
			<div id="showCardDiv2" style="display: block;">
			<br />
			<Row>
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='30000'>
					<Card @click.native="handleAdd('1')" :bordered="false"  class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/全国在逃人员新增与撤销档.png" />
						<p >在逃人员新增与撤销档</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='2000'>
					<Card @click.native="handleAdd('2')" :bordered="false" class="card" style="text-align: center;background-color: rgba(61, 156, 58, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/全国撤销人员.png" />
						<p>全国撤销人员</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='245'>
					<Card @click.native="handleAdd('3')" :bordered="false" class="card" style="text-align: center;background-color: rgba(63, 58, 156, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/涉毒人员（新）.png" />
						<p>涉毒人员（新）</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='1245'>
					<Card @click.native="handleAdd('4')" :bordered="false" class="card" style="text-align: center;background-color: rgba(156, 120, 58, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/监所人员.png" />
						<p>监所人员</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='564'>
					<Card  @click.native="handleAdd('5')":bordered="false" class="card" style="text-align: center;background-color: rgba(170, 171, 49, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/七类重点人员.png" />
						<p>七类重点人员</p>

					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='234'>
					<Card @click.native="handleAdd('6')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 107, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/终端人员采集.png" />
						<p>终端人员采集</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			</div>
		</Card>
		<sfzh-com></sfzh-com>
	</div>
</template>

<script>
import sfzhCom from '../zl_components/sfzh_components'
export default {
  components: {
    'sfzh-com': sfzhCom
  },
  methods: {
    close () {
      let rsfzh = document.getElementById('rsfzh')
      /* eslint-disable no-unused-vars */
      let showContentDiv2 = document.getElementById('showContentDiv2')
      let showcontent2 = document.getElementsByClassName('showcontent2')
      let hiddenCard2 = document.getElementsByClassName('hiddenCard2')
      let hiddenCardDiv2 = document.getElementById('hiddenCardDiv2')
      rsfzh.style.opacity = 0
      setTimeout(function () {
        rsfzh.style.display = 'none'
      }, 50)
      /* eslint-disable no-undef */
      showCardDiv2.style.display = 'block'
      hiddenCardDiv2.style.display = 'none'
      for (let q = 0; q < showcontent2.length; q++) {
        showcontent2[q].style.display = 'none'
        hiddenCard2[q].style.borderLeft = ''
      }
    },
    handleAdd (num) {
      let showcontent2 = document.getElementsByClassName('showcontent2')
      let hiddenCard2 = document.getElementsByClassName('hiddenCard2')
      let showCardDiv2 = document.getElementById('showCardDiv2')
      let hiddenCardDiv2 = document.getElementById('hiddenCardDiv2')
      for (let j = 1; j < showcontent2.length + 1; j++) {
        if (num === j) {
          showcontent2[j - 1].style.display = 'block'
          hiddenCard2[j - 1].style.borderLeft = '5px solid brown'
        }
      }
      showCardDiv2.style.display = 'none'
      hiddenCardDiv2.style.display = 'block'
    },
    back () {
      let showCardDiv2 = document.getElementById('showCardDiv2')
      let hiddenCardDiv2 = document.getElementById('hiddenCardDiv2')
      let showcontent2 = document.getElementsByClassName('showcontent2')
      let hiddenCard2 = document.getElementsByClassName('hiddenCard2')
      showCardDiv2.style.display = 'block'
      hiddenCardDiv2.style.display = 'none'
      for (let a = 0; a < showcontent2.length; a++) {
        showcontent2[a].style.display = 'none'
        hiddenCard2[a].style.borderLeft = ''
      }
    }
  }
}
</script>

<style>

</style>
