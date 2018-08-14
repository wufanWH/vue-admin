<template>
    <div class="resource-container">
        <el-row class="tac">
            <el-col :span="4">
                <div class="menu-left">
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>知识分类</span>
                            </template>
                            <el-submenu index="1-1">
                                <template slot="title">一级分类名称1</template>
                                <el-submenu index="1-1-1">
                                    <template slot="title">二级分类名称1</template>
                                    <el-menu-item index="1-1-1-1">三级分类名称</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-submenu index="1-2">
                                <template slot="title">一级分类名称2</template>
                                <el-menu-item index="1-2-1">选项1</el-menu-item>
                                <el-menu-item index="1-2-2">选项2</el-menu-item>
                                <el-menu-item index="1-2-3">选项3</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-3">
                                <template slot="title">一级分类名称3</template>
                                <el-menu-item index="1-3-1">选项1</el-menu-item>
                                <el-menu-item index="1-3-2">选项2</el-menu-item>
                                <el-menu-item index="1-3-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="20">
                <div class="main-menu">
                    <div>
                        <el-button type="primary">新增分类</el-button>
                    </div>
                    <div class="main-center">
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="name" label="名称">
                            </el-table-column>
                            <el-table-column prop="sort" label="排序">
                            </el-table-column>
                            <el-table-column prop="date" label="更新时间">
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="text">编辑</el-button>
                                    <el-button type="text">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'hello',
      tableData: [
        {
          name: '这里只展示一个一级名称1',
          sort: '1',
          date: '2018-08-08'
        },
        {
          name: '这里只展示一个一级名称1',
          sort: '2',
          date: '2018-08-08'
        },
        {
          name: '这里只展示一个一级名称1',
          sort: '3',
          date: '2018-08-08'
        },
        {
          name: '这里只展示一个一级名称1',
          sort: '4',
          date: '2018-08-08'
        },
        {
          name: '这里只展示一个一级名称1',
          sort: '5',
          date: '2018-08-08'
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.resource-container {
  width: 1200px;
  .menu-left {
    margin-top: 30px;
    background-color: white;
  }
  .main-menu {
    background-color: white;
    margin-left: 30px;
    margin-top: 30px;
    .el-table th div,
    .el-table th > .cell {
      text-align: center;
    }
    .main-center {
      text-align: center;
    }
  }
}
</style>
