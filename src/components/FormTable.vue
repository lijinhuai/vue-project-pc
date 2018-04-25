<template>
  <div>
    <Card>
      <p slot="title">
        <Icon type="navicon"></Icon>
        检索条件
      </p>
      <div>
        <Form ref="queryForm" :model="queryForm" :label-width="100" label-position="right" inline>
          <slot name="form"></slot>
          <el-collapse v-show="advanced" accordion>
            <el-collapse-item title="高级搜索">
              <slot name="advancedForm"></slot>
            </el-collapse-item>
          </el-collapse>
          <Row>
            <Col span="12" offset="8">
            <Form-item>
              <Button type="primary" @click="search">查询</Button>
            </Form-item>
            </Col>
          </Row>
        </Form>
      </div>
    </Card>
    <div v-show="data.length>0">
      <slot name="tableTop"></slot>
      <Table size="small" :columns="columns" :data="data" @on-selection-change="onSelectionChange">
      </Table>
      <slot name="tableBottom"></slot>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :current="pageInfo.pageNum" :total="pageInfo.total"
          :page-size="pageInfo.pageSize" :page-size-opts="paginationPageSizeOpts"
          :size="paginationSize" :simple="paginationSimple"
          :show-total="paginationShowTotal" :show-elevator="paginationShowElevator" :show-sizer="paginationShowSizer"
          :class-name="paginationClassName" :styles="paginationStyles"
          @on-change="changePage" @on-page-size-change="changePageSize" ></Page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formTable',
  data () {
    return {
      data: [],
      pageInfo: {
        pageNum: 1,
        total: 0,
        pageSize: this.paginationPageSize || 10
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
    },
    onSelectionChange: {
      type: Function
    },
    paginationPageSize: {
      type: Number,
      default: 10
    },
    paginationPageSizeOpts: {
      type: Array,
      default: [10, 20, 30, 40]
    },
    paginationSize: {
      type: String
    },
    paginationSimple: {
      type: Boolean,
      default: false
    },
    paginationShowTotal: {
      type: Boolean,
      default: true
    },
    paginationShowElevator: {
      type: Boolean,
      default: false
    },
    paginationShowSizer: {
      type: Boolean,
      default: false
    },
    paginationClassName: {
      type: String
    },
    paginationStyles: {
      type: Object
    }
  },
  methods: {
    search () {
      this.$emit('beforeFetchList')
      this.fetchList(this.pageInfo, this.queryForm)
        .then(response => {
          this.data = response.data.list
          this.pageInfo.total = response.data.total
          this.$emit('afterFetchList')
        })
        .catch(() => {})
    },
    changePage (pageNum) {
      this.pageInfo.pageNum = pageNum
      this.search()
    },
    changePageSize (pageSize) {
      this.pageInfo.pageSize = pageSize
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
</style>
