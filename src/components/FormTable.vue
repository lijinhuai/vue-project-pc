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
          <Page :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" show-total @on-change="changePage"></Page>
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
        pageSize: 10,
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
    },
    onSelectionChange: {
      type: Function
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
</style>
