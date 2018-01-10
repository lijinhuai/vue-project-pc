<template>
  <div class="container">
    <div class="wraper">
      <div v-if="row.children.length>0" v-for="row in menuList" :key="row.index" class="row">
        <div class="row_title">{{row.title}}</div>
        <div class="row_content">
          <div v-for="cell in row.children" :key="cell.index" class="cell">
            <div class="cell_body" v-bind:style="cell.style" @click="toRouter(cell.name)">
              <template v-if="cell.icon=='community'||cell.icon=='person'||cell.icon=='car-recognition'">
              <IconFont :type="cell.icon" :size="45" color="white"></IconFont>
              </template>
              <template v-else-if="cell.icon=='person-recognition'">
              <IconFont :type="cell.icon" :size="35" color="white"></IconFont>
              </template>
              <template v-else>
              <IconFont :type="cell.icon" :size="40" color="white"></IconFont>
              </template>
              <!-- <Icon :type="cell.icon" size="50" :key="cell.id"></Icon> -->
            </div>
            <div class="cell_footer">{{cell.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconFont from '@/components/IconFont'
export default {
  computed: {
    menuList () {
      const routerMenuList = this.$store.state.app.menuList
      return routerMenuList
    }
  },
  components: {
    IconFont
  },
  methods: {
    toRouter (routerName) {
      this.$router.push({
        name: routerName
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 30px;
  .wraper {
    display: flex;
    flex-direction: column;
    align-items: center;
    .row {
      display: flex;
      align-items: center;
      margin-top: 15px;
      margin-bottom: 15px;
      width: 100%;
      &_title {
        width: 40px;
        text-shadow: 1px 1px 11px #999;
        border-left: 3px solid #409eff;
        text-align: center;
      }
      &_content {
        width: 100%;
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .cell {
          width: 70px;
          height: 70px;
          margin: 10px;
          &:hover {
            cursor: pointer;
          }
          &_body {
            text-align: center;
            height: 70px;
            background-color:  #409eff;;
            border-radius: 50%;
            padding-top: 16px;
          }
          &_footer {
            text-align: center;
            font-family: cursive;
            padding: 6px;
          }
        }
      }
    }
  }
}
</style>

