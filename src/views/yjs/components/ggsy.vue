<template>
	<div id="ggsy" style="width: 90%;height:100%;position: absolute;top: 50px;left: 5%;z-index: 999;transition: .5s;display: none;">
		<Card :bordered="false" class="background_card">

			<p slot='title' style="font-size: 20px;color: whitesmoke">
				<Icon type="pricetags"></Icon>
				公共事业类数据
				<div style="position: absolute;top: 14px;">
					<div style="margin:0px 0 0 160px;width: 50px;">
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
			<div id="showCardDiv7" style="display: block;">
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='30000'>
					<Card @click.native="handleAdd('1')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/自来水.png" />
						<p >自来水</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='2000'>
					<Card @click.native="handleAdd('2')" :bordered="false" class="card" style="text-align: center;background-color: rgba(61, 156, 58, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/电力数据.png" />
						<p>电力数据</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='245'>
					<Card @click.native="handleAdd('3')" :bordered="false" class="card" style="text-align: center;background-color: rgba(63, 58, 156, 0.52);cursor: pointer;"">
						<img src="~@/images/yjs/home/天然气.png" />
						<p>天然气</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			</div>
		</Card>
		<ggsy-com></ggsy-com>
	</div>
</template>

<script>
import ggsyCom from '../zl_components/ggsy_components'
export default {
  components: {
    'ggsy-com': ggsyCom
  },
  methods: {
    close () {
      /* eslint-disable no-unused-vars */
      let showContentDiv7 = document.getElementById('showContentDiv7')
      let showcontent7 = document.getElementsByClassName('showcontent7')
      let hiddenCard7 = document.getElementsByClassName('hiddenCard7')
      let hiddenCardDiv7 = document.getElementById('hiddenCardDiv7')
      let ggsy = document.getElementById('ggsy')
      ggsy.style.opacity = 0
      setTimeout(function () {
        ggsy.style.display = 'none'
      }, 50)
      /* eslint-disable no-undef */
      showCardDiv7.style.display = 'block'
      hiddenCardDiv7.style.display = 'none'
      for (let q = 0; q < showcontent7.length; q++) {
        showcontent7[q].style.display = 'none'
        hiddenCard7[q].style.borderLeft = ''
      }
    },
    handleAdd (num) {
      let showcontent7 = document.getElementsByClassName('showcontent7')
      let hiddenCard7 = document.getElementsByClassName('hiddenCard7')
      let showCardDiv7 = document.getElementById('showCardDiv7')
      let hiddenCardDiv7 = document.getElementById('hiddenCardDiv7')

      for (let j = 1; j < showcontent7.length + 1; j++) {
        if (num === j) {
          showcontent7[j - 1].style.display = 'block'
          hiddenCard7[j - 1].style.borderLeft = '5px solid brown'
        }
      }
      showCardDiv7.style.display = 'none'
      hiddenCardDiv7.style.display = 'block'
    },
    back () {
      let showCardDiv7 = document.getElementById('showCardDiv7')
      let hiddenCardDiv7 = document.getElementById('hiddenCardDiv7')
      let showcontent7 = document.getElementsByClassName('showcontent7')
      let hiddenCard7 = document.getElementsByClassName('hiddenCard7')
      showCardDiv7.style.display = 'block'
      hiddenCardDiv7.style.display = 'none'
      for (let a = 0; a < showcontent7.length; a++) {
        showcontent7[a].style.display = 'none'
        hiddenCard7[a].style.borderLeft = ''
      }
    }
  }
}
</script>

<style>

</style>
