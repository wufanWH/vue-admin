<template>
  <div class="system-container">
    <el-row class="tac">
      <el-col :span="4">
        <div class="menu-left">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>我的公司</span>
              </template>
              <el-submenu index="1-1">
                <template slot="title">总经办</template>
                <el-menu-item index="1-1-1">助理室</el-menu-item>
              </el-submenu>
              <el-menu-item index="1-2">办公室</el-menu-item>
              <el-menu-item index="1-3">人才开发办</el-menu-item>
              <el-menu-item index="1-4">专项人才处</el-menu-item>
              <el-menu-item index="1-5">职能建设处</el-menu-item>
              <el-menu-item index="1-6">专项人才处</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="main-menu">
          <div class="title-all">
            <div class="title-left">
              <div>
                <span>我的公司</span>
              </div>
              <div>
                <el-button type="text">新增子类</el-button>
              </div>
              <div>编辑</div>
            </div>
            <div class="title-right">
              <div>
                <el-select v-model="value" style="width:110px;">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div>
                <el-button type="primary">新增用户</el-button>
              </div>
              <div>
                <el-input placeholder="搜索员工，账号，手机号" v-model="input23">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </div>
            </div>
          </div><hr style="font-wight:30px;">
          <div>
            <div>
              <ul class="status">
                <li>状态：</li>
                <li>全部</li>
                <li>正常</li>
                <li>禁用</li>
              </ul>
            </div>
            <div class="main-center">
              <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="name" label="姓名">
                </el-table-column>
                <el-table-column prop="account" label="账号">
                </el-table-column>
                <el-table-column prop="department" label="所属部门">
                </el-table-column>
                <el-table-column prop="position" label="所属职位">
                </el-table-column>
                <el-table-column prop="phone" label="手机号">
                </el-table-column>
                <el-table-column prop="status" label="账号状态">
                </el-table-column>
                <el-table-column prop="time" label="更新时间">
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <!-- <el-button type="primary">编辑</el-button> -->
                    <el-select v-model="value1" style="width:90px;color:blue;">
                      <el-option v-for="(item,index) in option1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </div>
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
      activeName: '哈哈',
      checked: true,
      options: [
        {
          value: '1',
          label: '批量操作'
        },
        {
          value: '2',
          label: '禁用'
        },
        {
          value: '3',
          label: '解冻'
        },
        {
          value: '4',
          label: '移动至'
        },
        {
          value: '5',
          label: '导入员工'
        },
        {
          value: '6',
          label: '导出员工'
        },
        {
          value: '7',
          label: '设置角色'
        },
        {
          value: '8',
          label: '重置密码'
        }
      ],
      option1: [
        {
          value: '1',
          label: '编辑'
        },
        {
          value: '2',
          label: '禁用'
        },

        {
          value: '3',
          label: '移动至'
        },

        {
          value: '4',
          label: '设置角色'
        },
        {
          value: '5',
          label: '重置密码'
        },
        {
          value: '6',
          label: '删除账号'
        }
      ],
      value: '1',
      value1: '1',
      tableData3: [
        {
          name: '张三',
          account: 'zhangsan',
          department: '总经办',
          position: '员工',
          phone: '18425612456',
          status: '正常',
          time: '2018-02-18'
        },
        {
          name: '张三',
          account: 'zhangsan',
          department: '总经办',
          position: '员工',
          phone: '18425612456',
          status: '正常',
          time: '2018-02-18'
        },
        {
          name: '张三',
          account: 'zhangsan',
          department: '总经办',
          position: '员工',
          phone: '18425612456',
          status: '正常',
          time: '2018-02-18'
        },
        {
          name: '张三',
          account: 'zhangsan',
          department: '总经办',
          position: '员工',
          phone: '18425612456',
          status: '正常',
          time: '2018-02-18'
        },
        {
          name: '张三',
          account: 'zhangsan',
          department: '总经办',
          position: '员工',
          phone: '18425612456',
          status: '正常',
          time: '2018-02-18'
        },
        {
          name: '张三',
          account: 'zhangsan',
          department: '总经办',
          position: '员工',
          phone: '18425612456',
          status: '正常',
          time: '2018-02-18'
        },
        {
          name: '张三',
          account: 'zhangsan',
          department: '总经办',
          position: '员工',
          phone: '18425612456',
          status: '正常',
          time: '2018-02-18'
        },
        {
          name: '张三',
          account: 'zhangsan',
          department: '总经办',
          position: '员工',
          phone: '18425612456',
          status: '正常',
          time: '2018-02-18'
        }
      ],
      multipleSelection: []
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
.system-container {
  width: 1200px;
  .menu-left {
    margin-top: 30px;
  }
  .main-menu {
    margin-left: 30px;
    margin-top: 30px;
    .title-all {
      //   text-decoration: underline;
      width: 100%;
      .title-left {
        display: inline-block;
        width: 300px;
        font-size: 14px;
        > div {
          display: inline-block;
          margin-right: 20px;
          > span {
            font-weight: 200px;
            font-size: 25px;
          }
        }
      }
      .title-right {
        display: inline-block;
        width: 650px;
        text-align: right;
        font-size: 14px;
        > div {
          display: inline-block;
          margin-left: 10px;
        }
      }
    }
    .el-table th div,
    .el-table th > .cell {
      text-align: center;
    }
    .main-center {
      text-align: center;
    }
    .status {
      text-align: left;
      > li {
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
}
</style>


