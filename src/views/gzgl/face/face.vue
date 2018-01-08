<template>
  <div>
    <Card>
      <p slot="title">
        <Icon type="navicon"></Icon>
        检索条件
      </p>
      <div>
        <Form ref="queryForm" :model="queryForm" :label-width="100" label-position="right" inline>
          <Row>
            <Col span="8">
            <FormItem label="姓名：" prop="xm">
              <div style="display:inline-block;width:180px;">
                <Input v-model="queryForm.xm"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="民族：" prop="mzdm">
              <div style="display:inline-block;width:180px;">
                <Select v-model="queryForm.mzdm" style="width:180px" filterable clearable>
                      <Option v-for="dict in dictList.mz" :key="dict.index" :value="dict.key">{{dict.value}}</Option>
                    </Select>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="公民身份证号：" prop="zjhm">
              <div style="display:inline-block;width:180px;">
                <Input v-model="queryForm.zjhm"></Input>
              </div>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="户籍地址：" prop="hjdz">
              <div style="display:inline-block;width:180px;">
                <Input v-model="queryForm.hjdz"></Input>
              </div>
            </FormItem>
            </Col>
          </Row>
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
      <Table size="small" :columns="columns" :data="data">
      </Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :current="pageInfo.pageNum" :total="pageInfo.total" :page-size="pageInfo.pageSize" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>
