<template>
	<div id="cph" style="width: 90%;height:100%;position: absolute;top: 30px;left: 5%;z-index: 999;transition: .5s;display: none;">
		<Card :bordered="false" class="background_card">

			<p slot='title' style="font-size: 20px;color: whitesmoke">
				<Icon type="pricetags"></Icon>
				车牌号
				<div style="position: absolute;top: 14px;">
					<div style="margin:0px 0 0 80px;width: 50px;">
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
			<div id="showCardDiv3" style="display: block;">
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='30000'>
					<Card @click.native="handleAdd('1')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/小区停车.png" />
						<p >小区停车</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			</div>
		</Card>
		<cph-com></cph-com>
	</div>
</template>

<script>
import cphCom from '../zl_components/cph_components'
export default {
  components: {
    'cph-com': cphCom
  },
  methods: {
    close () {
      /* eslint-disable no-unused-vars */
      let showContentDiv3 = document.getElementById('showContentDiv3')
      let showcontent3 = document.getElementsByClassName('showcontent3')
      let hiddenCard3 = document.getElementsByClassName('hiddenCard3')
      let hiddenCardDiv3 = document.getElementById('hiddenCardDiv3')
      let cph = document.getElementById('cph')
      cph.style.opacity = 0
      setTimeout(function () {
        cph.style.display = 'none'
      }, 50)
      /* eslint-disable no-undef */
      showCardDiv3.style.display = 'block'
      hiddenCardDiv3.style.display = 'none'
      for (let q = 0; q < showcontent3.length; q++) {
        showcontent3[q].style.display = 'none'
        hiddenCard3[q].style.borderLeft = ''
      }
    },
    handleAdd (num) {
      let showcontent3 = document.getElementsByClassName('showcontent3')
      let hiddenCard3 = document.getElementsByClassName('hiddenCard3')
      let showCardDiv3 = document.getElementById('showCardDiv3')
      let hiddenCardDiv3 = document.getElementById('hiddenCardDiv3')
      for (let j = 1; j < showcontent3.length + 1; j++) {
        if (num === j) {
          showcontent3[j - 1].style.display = 'block'
          hiddenCard3[j - 1].style.borderLeft = '5px solid brown'
        }
      }
      showCardDiv3.style.display = 'none'
      hiddenCardDiv3.style.display = 'block'
    },
    back () {
      let showCardDiv3 = document.getElementById('showCardDiv3')
      let hiddenCardDiv3 = document.getElementById('hiddenCardDiv3')
      let showcontent3 = document.getElementsByClassName('showcontent3')
      let hiddenCard3 = document.getElementsByClassName('hiddenCard3')
      showCardDiv3.style.display = 'block'
      hiddenCardDiv3.style.display = 'none'
      for (let a = 0; a < showcontent3.length; a++) {
        showcontent3[a].style.display = 'none'
        hiddenCard3[a].style.borderLeft = ''
      }
    }
  }
}
</script>

<style>

</style>
