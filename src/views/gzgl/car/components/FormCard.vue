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
          <div class="image-container">
            <img class="image" v-for="photo in item.photoList" :key="photo.id" :src="photo.src" />
          </div>
          <div class="card-footer">
            <div class="hphm hphm_blue" v-bind:class="{hphm_yellow:item.platecolor=='黄色'}">{{item.plateid}}</div>
            <div class="time"> {{item.intime}}</div>
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
        pageSize: 6,
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
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;
  .card {
    width: 32%;
    height: 200px;
    display: inline-block;
    margin: 5px;
    .image-container {
      width: 100%;
      .image {
        width: 50%;
        height: 100px;
      }
    }
    .card-footer {
      padding: 0 10px 0 10px;
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
.ivu-card-body {
  padding: 0px;
}
</style>
