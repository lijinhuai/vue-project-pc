<template>
	<div id="dz" style="width: 90%;height:100%;position: absolute;top: 30px;left: 5%;z-index: 999;transition: .5s;display: none;">
		<Card :bordered="false" class="background_card">

			<p slot='title' style="font-size: 20px;color: whitesmoke">
				<Icon type="pricetags"></Icon>
				地址
				<div style="position:absolute;top: 14px;">
					<div style="margin:0px 0 0 60px;width: 50px;">
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
			<div id="showCardDiv4" style="display: block;">
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='30000'>
					<Card @click.native="handleAdd('1')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/终端房屋采集.png" />
						<p >终端房屋采集</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			</div>
		</Card>
		<dz-com></dz-com>
	</div>
</template>

<script>
import dzCom from '../zl_components/dz_components'
export default {
  components: {
    'dz-com': dzCom
  },
  methods: {
    close () {
      /* eslint-disable no-unused-vars */
      let showContentDiv4 = document.getElementById('showContentDiv4')
      let showcontent4 = document.getElementsByClassName('showcontent4')
      let hiddenCard4 = document.getElementsByClassName('hiddenCard4')
      let hiddenCardDiv4 = document.getElementById('hiddenCardDiv4')
      let dz = document.getElementById('dz')
      dz.style.opacity = 0
      setTimeout(function () {
        dz.style.display = 'none'
      }, 50)
      /* eslint-disable no-undef */
      showCardDiv4.style.display = 'block'
      hiddenCardDiv4.style.display = 'none'
      for (let q = 0; q < showcontent4.length; q++) {
        showcontent4[q].style.display = 'none'
        hiddenCard4[q].style.borderLeft = ''
      }
    },
    handleAdd (num) {
      let showcontent4 = document.getElementsByClassName('showcontent4')
      let hiddenCard4 = document.getElementsByClassName('hiddenCard4')
      let showCardDiv4 = document.getElementById('showCardDiv4')
      let hiddenCardDiv4 = document.getElementById('hiddenCardDiv4')
      for (let j = 1; j < showcontent4.length + 1; j++) {
        if (num === j) {
          showcontent4[j - 1].style.display = 'block'
          hiddenCard4[j - 1].style.borderLeft = '5px solid brown'
        }
      }
      showCardDiv4.style.display = 'none'
      hiddenCardDiv4.style.display = 'block'
    },
    back () {
      let showCardDiv4 = document.getElementById('showCardDiv4')
      let hiddenCardDiv4 = document.getElementById('hiddenCardDiv4')
      let showcontent4 = document.getElementsByClassName('showcontent4')
      let hiddenCard4 = document.getElementsByClassName('hiddenCard4')
      showCardDiv4.style.display = 'block'
      hiddenCardDiv4.style.display = 'none'
      for (let a = 0; a < showcontent4.length; a++) {
        showcontent4[a].style.display = 'none'
        hiddenCard4[a].style.borderLeft = ''
      }
    }
  }
}
</script>

<style>

</style>
