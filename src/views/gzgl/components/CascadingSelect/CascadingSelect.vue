<template>
  <div>
    <!-- <input v-model="model" @click="open()" type="text" :class="inputClass" :readonly="readonly" /> -->
    <div v-show="show" class="cascading-address">
      <ul>
        <li v-for="item in areas" :key="item.index" @click="setArea(item.area)" class="label" :class="{'label-success': a === item.area}">
          {{ item.area }}
        </li>
      </ul>
      <ul v-show="pcss.length">
        <li v-for="item in pcss" :key="item.index" @click="setPcs(item)" class="label" :class="{'label-success': p === item.pcsmc}">
          {{ item.pcsmc }}
        </li>
      </ul>
      <ul v-show="communitys.length">
        <li v-for="item in communitys" :key="item.index" @click="setCommunity(item)" class="label" :class="{'label-success': c === item.name}">
          {{ item.name }}
        </li>
      </ul>
      <div v-show="a" class="address-area">
        <label class="text-success">
                  <span class="text-muted">地址：</span> {{ a }} {{ p }} {{ c }}
              </label>
      </div>
      <div class="address-option-footer">
        <!-- <button @click="close()" class="btn btn-link btn-sm">关闭</button>
              <button @click="clear()" class="btn btn-default btn-sm">清空</button> -->
        <button @click="confirm()" class="btn btn-success btn-sm" :disabled="!(p&&c&&a)">确定</button>
      </div>
    </div>
  </div>
</template>


<script lang="babel">
  import addressData from './CascadingSelectData.json'
  export default {
    name: 'cascading',
    props: {
      inputClass: String,
      readonly: Boolean
    },
    data () {
      return {
        a: '',
        p: '',
        c: '',
        pcs: {},
        community: {},
        areas: addressData,
        pcss: [],
        communitys: [],
        show: true
      }
    },
    computed: {
      model () {
        return this.a || this.c || this.p
      }
    },
    methods: {
      init (a, p, c) {
        this.setArea(a)
        for (var i in this.pcss) {
          var pcs = this.pcss[i]
          if (pcs.pcsdm === p) {
            this.setPcs(pcs)
            for (var j in this.communitys) {
              var community = this.communitys[j]
              if (community.jcwdm === c) {
                this.setCommunity(community)
                this.confirm()
              }
            }
          }
        }
      },
      clear () {
        this.a = ''
        this.p = ''
        this.c = ''
        this.pcs = {}
        this.community = {}
        this.cities = []
        this.areas = []
      },
      open () {
        this.show = true
      },
      close () {
        this.show = false
      },
      confirm () {
        // this.close()
        this.$emit('confirm', {
          pcs: this.pcs,
          community: this.community
        })
      },
      setArea (area) {
        this.a = area
        this.p = ''
        this.c = ''
        this.communitys = []
        // 根据选中的 p(省份) 值更新 cities(城市列表)
        var result = this.areas.filter(function (v) {
          return v.area === area
        })
        this.pcss = result[0].pcs || []
      },
      setPcs (pcs) {
        this.p = pcs.pcsmc
        this.c = ''
        var result = this.pcss.filter(function (v) {
          return v.pcsmc === pcs.pcsmc
        })
        this.communitys = result[0].community || []
        this.pcs = pcs
      },
      setCommunity (community) {
        this.c = community.name
        this.community = community
      }
    }
  }
</script>


<style scoped>
.cascading-address {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  position: absolute;
  z-index: 99999;
  /* background: #fff; */
  /* background: rgba(2, 48, 65, 0.7); */
  width: 318px;
  background-image: url(/static/image/marker_dynamic_bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.cascading-address ul {
  padding: 5px;
  /* border-bottom: 1px dotted #ddd; */
  text-align: left;
  border-image-source: url(/static/image/line1.png);
  border-style: solid;
  border-width: 1px 1px;
  border-image-slice: 1 fill;
  border-image-outset: 0.5;
  border-image-repeat: initial;
  margin: 0 10px;
}
.cascading-address ul li {
  font-size: 13px;
  list-style: none;
  display: inline-block;
  margin: 5px 7px;
  cursor: pointer;
}
.cascading-address .form-group {
  margin: 10px;
}
.address-area {
  margin: 10px;
  font-weight: bold;
  text-align: left;
  padding-left: 1rem;
}
.label {
  color: #b2bbc1;
  padding: 0.2em 0.6em 0.3em;
  display: inline;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
}
.label-success {
  font-size: 75%;
  font-weight: bold;
  /* color: #fff; */
  color: #0dc2fd;
  padding: 0.2em 0.6em 0.3em;
  border-radius: 0.25em;
  /* background-color: #5cb85c; */
  /* background-color:#0dc2fd; */
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn-link {
  font-weight: normal;
  color: #337ab7;
  border-radius: 0;
  background: none;
}
.btn-link:hover {
  /* color: #4cae4c !important; */
  color: #0dc2fd !important;
}
.btn-success {
  color: #fff;
  /* background-color: #5cb85c;
      border-color: #4cae4c; */
  border-color: #337ab7;
  background-color: #21597a;
}
.btn-sm {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-sm:hover {
  color: #337ab7;
}
.text-success {
  /* color: #3c763d; */
  color: #40c7da;
}
.address-option-footer {
  padding: 10px 15px;
  /* background-color: #f5f5f5; */
  /* border-top: 1px solid #ddd; */
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  text-align: right;
}
</style>
