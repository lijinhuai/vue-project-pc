<template>
  <div v-show="data.length>0">
    <Table size="small" :columns="columns" :data="data">
    </Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array
    },
    data: {
      type: Array
    },
    PageInfo: {
      type: Object
    }
  }
}
</script>
