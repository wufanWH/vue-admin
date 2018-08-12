<template>
  <div class="project-container">
    <div class="title-style">
      <div class="button-postion">
        <el-button type="primary" size="small">
          <i class="el-icon-plus"></i>创建计划</el-button>
      </div>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">
          <div>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="name" label="计划名称">
              </el-table-column>
              <el-table-column prop="date" label="日期">
              </el-table-column>
              <el-table-column prop="cycle" label="学习周期">
              </el-table-column>
              <el-table-column prop="participate" label="参与人数">
              </el-table-column>
              <el-table-column prop="complete" label="完成人数">
              </el-table-column>
              <el-table-column prop="undone" label="未完成人数">
              </el-table-column>
              <el-table-column prop="status" label="状态">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="primary">
                    查看
                    <i class="el-icon-caret-bottom"></i>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="未发布" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="进行中" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="已完成" name="fourth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="已结束" name="fifth">结束</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName2: 'first',
      tableData: [
        {
          name: '领导专题培训班',
          date: '2018-06-02',
          cycle: '12',
          participate: '302',
          complete: '205',
          undone: '97',
          status: '进行中'
        },
        {
          name: '领导专题培训班',
          date: '2018-06-02',
          cycle: '12',
          participate: '302',
          complete: '205',
          undone: '97',
          status: '进行中'
        },
        {
          name: '领导专题培训班',
          date: '2018-06-02',
          cycle: '12',
          participate: '302',
          complete: '205',
          undone: '97',
          status: '进行中'
        },
        {
          name: '领导专题培训班',
          date: '2018-06-02',
          cycle: '12',
          participate: '302',
          complete: '205',
          undone: '97',
          status: '进行中'
        },
        {
          name: '领导专题培训班',
          date: '2018-06-02',
          cycle: '12',
          participate: '302',
          complete: '205',
          undone: '97',
          status: '进行中'
        },
        {
          name: '领导专题培训班',
          date: '2018-06-02',
          cycle: '12',
          participate: '302',
          complete: '205',
          undone: '97',
          status: '进行中'
        },
        {
          name: '领导专题培训班',
          date: '2018-06-02',
          cycle: '12',
          participate: '302',
          complete: '205',
          undone: '97',
          status: '进行中'
        },
        {
          name: '领导专题培训班',
          date: '2018-06-02',
          cycle: '12',
          participate: '302',
          complete: '205',
          undone: '97',
          status: '进行中'
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.project-container {
  width: 1200px;
  .title-style {
    margin-left: 30px;
    margin-top: 30px;
    text-align: center;
    .button-postion {
      text-align: right;
      margin-bottom: -40px;
      margin-right: 30px;
    }
    .el-table th div,
    .el-table th > .cell {
      text-align: center;
    }
  }
}
</style>



