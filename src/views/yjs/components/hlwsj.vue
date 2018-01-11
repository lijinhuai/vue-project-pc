<template>
	<div id="hlw" style="width: 90%;height:100%;position: absolute;top: 50px;left: 5%;z-index: 999;transition: .5s;display: none;">
		<Card :bordered="false" class="background_card">

			<p slot='title' style="font-size: 20px;color: whitesmoke">
				<Icon type="pricetags"></Icon>
				互联网数据
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
			<div id="showCardDiv9" style="display: block;">
			<br />
			<Row >
				<Col span="4" offset='1'>
					<Badge overflow-count='9999' count='30000'>
					<Card @click.native="handleAdd('1')" :bordered="false" class="card" style="text-align: center;background-color: rgba(58, 126, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/QQ.png" />
						<p >QQ</p>
					</Card>
					</Badge>
				</Col>

				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='2000'>
					<Card @click.native="handleAdd('2')" :bordered="false" class="card" style="text-align: center;background-color: rgba(61, 156, 58, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/卓越网.png" />
						<p>卓越网</p>
					</Card>
					</Badge>
				</Col>
				<Col span="4" offset='2'>
					<Badge overflow-count='9999' count='245'>
					<Card @click.native="handleAdd('3')" :bordered="false" class="card" style="text-align: center;background-color: rgba(63, 58, 156, 0.52);cursor: pointer;">
						<img src="~@/images/yjs/home/购酒网.png" />
						<p>购酒网</p>
					</Card>
					</Badge>
				</Col>
			</Row>
			</div>
		</Card>
		<hlw-com></hlw-com>
	</div>
</template>

<script>
import hlwCom from '../zl_components/hlw_components'
export default {
  components: {
    'hlw-com': hlwCom
  },
  methods: {
    close () {
      /* eslint-disable no-unused-vars */
      let showContentDiv9 = document.getElementById('showContentDiv9')
      let showcontent9 = document.getElementsByClassName('showcontent9')
      let hiddenCard9 = document.getElementsByClassName('hiddenCard9')
      let hiddenCardDiv9 = document.getElementById('hiddenCardDiv9')
      let hlw = document.getElementById('hlw')
      hlw.style.opacity = 0
      setTimeout(function () {
        hlw.style.display = 'none'
      }, 50)
       /* eslint-disable no-undef */
      showCardDiv9.style.display = 'block'
      hiddenCardDiv9.style.display = 'none'
      for (let q = 0; q < showcontent9.length; q++) {
        showcontent9[q].style.display = 'none'
        hiddenCard9[q].style.borderLeft = ''
      }
    },
    handleAdd (num) {
      let showcontent9 = document.getElementsByClassName('showcontent9')
      let hiddenCard9 = document.getElementsByClassName('hiddenCard9')
      let showCardDiv9 = document.getElementById('showCardDiv9')
      let hiddenCardDiv9 = document.getElementById('hiddenCardDiv9')

      for (let j = 1; j < showcontent9.length + 1; j++) {
        if (num === j) {
          showcontent9[j - 1].style.display = 'block'
          hiddenCard9[j - 1].style.borderLeft = '5px solid brown'
        }
      }
      showCardDiv9.style.display = 'none'
      hiddenCardDiv9.style.display = 'block'
    },
    back () {
      let showCardDiv9 = document.getElementById('showCardDiv9')
      let hiddenCardDiv9 = document.getElementById('hiddenCardDiv9')
      let showcontent9 = document.getElementsByClassName('showcontent9')
      let hiddenCard9 = document.getElementsByClassName('hiddenCard9')
      showCardDiv9.style.display = 'block'
      hiddenCardDiv9.style.display = 'none'
      for (let a = 0; a < showcontent9.length; a++) {
        showcontent9[a].style.display = 'none'
        hiddenCard9[a].style.borderLeft = ''
      }
    }
  }
}
</script>

<style>

</style>
