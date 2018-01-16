<template>
  <Row>
    <Col span="24">
    <Card>
      <el-collapse slot="title" accordion>
        <el-collapse-item title="检索条件">
          <div>
            <Form ref="queryForm" :model="queryForm" :label-width="100" label-position="right" inline>
              <slot name="form"></slot>
              <el-collapse v-show="advanced" accordion>
                <el-collapse-item title="高级搜索">
                  <slot name="advancedForm"></slot>
                </el-collapse-item>
              </el-collapse>
              <Row>
                <Col span="24">
                <Form-item>
                  <Button type="primary" @click="search">查询</Button>
                </Form-item>
                </Col>
              </Row>
            </Form>
          </div>
        </el-collapse-item>
      </el-collapse>
      <!-- <p >
              <Icon type="navicon"></Icon>
              检索条件
            </p> -->
    </Card>
    </Col>
    <Col span="24">
    <div v-show="data.length>0">
      <div class="card-container">
        <Card class="card" v-for="item in data" :key="item.id">
          <div class="car-container">
            <img class="image" :src="item.photo.src" />
            <div class="info">
              <div class="hphm hphm_blue item" v-bind:class="{hphm_yellow:item.platecolor=='黄色'}">{{item.plateid}}</div>
              <div class="item"> {{item.tm}}</div>
              <div class="status item" v-bind:class="{status_in:item.status=='进入',status_out:item.status=='外出'}"> {{item.status}}</div>
            </div>
          </div>
        </Card>
      </div>
      <div style="margin: 10px;overflow: hidden">
        <div style="text-align:center">
          <Page :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'formCard',
  data () {
    return {
      data: [],
      pageInfo: {
        pageNum: 1,
        pageSize: 8,
        total: 0
      }
    }
  },
  props: {
    columns: {
      type: Array
    },
    fetchList: {
      type: Function
    },
    queryForm: {
      type: Object
    },
    advanced: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    search () {
      this.fetchList(this.pageInfo, this.queryForm)
        .then(response => {
          this.data = response.data.list
          this.pageInfo.total = response.data.total
        })
        .catch(() => {})
    },
    changePage (value) {
      this.pageInfo.pageNum = value
      this.search()
    }
  }
}
</script>

<style lang="less">
.el-collapse-item {
  .el-collapse-item__wrap {
    overflow: visible;
  }
}
.ivu-form {
  .ivu-row {
    .ivu-col {
      .ivu-form-item {
        margin-bottom: 5px;
      }
    }
  }
}
.card-container {
  display: flex; // justify-content: center;
  flex-wrap: wrap;
  .card {
    width: 24%;
    height: 150px;
    display: inline-block;
    margin: 5px;
    .car-container {
      .image {
        height: 100px;
        display: inline-block;
      }
      .info {
        width: 100px;
        display: inline-block;
        .item {
          margin: 5px 5px 5px 5px;
        }
        .status {
          display: inline-block;
          padding: 2px;
          &_in {
            background-color: green;
          }
          &_out {
            background-color: red;
          }
        }
        .hphm {
          font-size: 16px;
          padding: 1px;
          display: inline-block;
          &_blue {
            background-color: #0a5eef;
            color: whitesmoke;
          }
          &_yellow {
            color: black;
            background-color: #ef910a;
          }
        }
      }
    }
  }
}
.ivu-card-body {
  padding: 0px;
}
</style>
