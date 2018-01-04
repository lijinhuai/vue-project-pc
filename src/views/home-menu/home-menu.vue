<template>
  <div class="container">
    <div class="wraper">
      <div v-if="row.children.length>0" v-for="row in menuList" :key="row.index" class="row">
        <div class="row_title">{{row.title}}</div>
        <div class="row_content">
          <div v-for="cell in row.children" :key="cell.index" class="cell">
            <div class="cell_body" @click="toRouter(cell.name)">
              <ali-icon :type="cell.icon" size="45"></ali-icon>
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
import aliIcon from './components/Icon'
export default {
  computed: {
    menuList () {
      const routerMenuList = this.$store.state.app.menuList
      return routerMenuList
    }
  },
  components: {
    'ali-icon': aliIcon
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
  // background: linear-gradient(45deg, #29528d, #5a8dcf);
  // background-color: #29528d;
  .wraper {
    // background-color: #a2b7d2;
    background: linear-gradient(45deg, #95aac5, #aec6e8);
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
        height: 120px;
        background-color: #f56c6c;
        position: relative;
        right: 20px;
        border-radius: 10%;
        padding: 10px;
        text-align: center;
        display: flex;
        align-items: center;
        font-weight: 450;
      }
      &_content {
        width: 100%;
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .cell {
          width: 60px;
          height: 80px;
          margin: 10px;
          &:hover {
            cursor: pointer;
          }
          &_body {
            text-align: center;
            height: 60px;
            background-color: #6fb1f9;
            border-radius: 50%;
            padding-top: 7px;
          }
          &_footer {
            height: 20px;
            // background-color: #fafbf9;
            text-align: center;
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>

