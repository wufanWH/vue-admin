<template>
    <div class="knowledge-container">
        <div class="menu">
            <div class="type knowledge-type" :class="{'show-nowarp': manu1 }">
                <span class="title">分类</span>
                <span class="menu-item" v-for="(item,index) in knowledgeType" :key="index" @click="changeManu1(index)">
                    <span :class="{'menu-this': index===manu1Index }">{{item}}</span>
                </span>
                <i v-if="knowledgeType && knowledgeType.length>9" :class=" manu1 ?'el-icon-arrow-down':'el-icon-arrow-up'" @click="showMenu1"></i>
            </div>
            <div class="type show-type">
                <span class="title">类型</span>
                <span class="menu-item" v-for="(item,index) in showType" :key="index" @click="changeManu2(index)">
                    <span :class="{'menu-this': index===manu2Index }">{{item}}</span>
                </span>
                <i v-if="showType && showType.length>9" class="el-icon-arrow-down"></i>
            </div>
            <div class="type more">展开全部筛选项</div>
        </div>
        <div class="knowledge-table">
            <p class="table-lable">
                <span :class="{'lable-this': 0===tableIndex }" @click="changeTable(0)">默认排序</span>
                <span :class="{'lable-this': 1===tableIndex }" @click="changeTable(1)">热门</span>
                <span :class="{'lable-this': 2===tableIndex }" @click="changeTable(2)">最新</span>|
                <span>
                    <i class="el-icon-search"></i>
                </span>
                <span>目前已有 256 知识点</span>
            </p>
            <ul class="table-content">
                <li class="table-title">
                    <el-row>
                        <el-col :span="3">图片</el-col>
                        <el-col :span="8">标题</el-col>
                        <el-col :span="3">发布者</el-col>
                        <el-col :span="3">发布时间</el-col>
                        <el-col :span="3">学习人数</el-col>
                        <el-col :span="4">评级</el-col>
                    </el-row>
                </li>
                <li class="info-item">
                    <el-row>
                        <el-col :span="3" class="img">
                            <img src="../../assets/404_images/img_loading.png" alt="">
                        </el-col>
                        <el-col :span="8" class="title">
                            <span>新零售思维项目之销售管理</span>
                            <p>销售不仅是卖产品，更是去管理自己和管理客户的销售不仅是卖产品，更是去管理自己和管理客户的</p>
                        </el-col>
                        <el-col :span="3">
                            <span>管理员</span>
                        </el-col>
                        <el-col :span="3">
                            <span>2018-07-23</span>
                        </el-col>
                        <el-col :span="3">
                            <span>234人</span>
                        </el-col>
                        <el-col :span="4" class="rate">
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-off"></i>
                            <i class="el-icon-star-off"></i>
                            <span>(0)人评价</span>
                        </el-col>
                    </el-row>
                </li>
                <li class="info-item">
                    <el-row>
                        <el-col :span="3" class="img">
                            <img src="../../assets/404_images/img_loading.png" alt="">
                        </el-col>
                        <el-col :span="8" class="title">
                            <span>新零售思维项目之销售管理</span>
                            <p>销售不仅是卖产品，更是去管理自己和管理客户的销售不仅是卖产品，更是去管理自己和管理客户的</p>
                        </el-col>
                        <el-col :span="3">
                            <span>管理员</span>
                        </el-col>
                        <el-col :span="3">
                            <span>2018-07-23</span>
                        </el-col>
                        <el-col :span="3">
                            <span>234人</span>
                        </el-col>
                        <el-col :span="4" class="rate">
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-off"></i>
                            <i class="el-icon-star-off"></i>
                            <span>(0)人评价</span>
                        </el-col>
                    </el-row>
                </li>
                <li class="info-item">
                    <el-row>
                        <el-col :span="3" class="img">
                            <img src="../../assets/404_images/img_loading.png" alt="">
                        </el-col>
                        <el-col :span="8" class="title">
                            <span>新零售思维项目之销售管理</span>
                            <p>销售不仅是卖产品，更是去管理自己和管理客户的销售不仅是卖产品，更是去管理自己和管理客户的</p>
                        </el-col>
                        <el-col :span="3">
                            <span>管理员</span>
                        </el-col>
                        <el-col :span="3">
                            <span>2018-07-23</span>
                        </el-col>
                        <el-col :span="3">
                            <span>234人</span>
                        </el-col>
                        <el-col :span="4" class="rate">
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-off"></i>
                            <i class="el-icon-star-off"></i>
                            <span>(0)人评价</span>
                        </el-col>
                    </el-row>
                </li>
                <li class="info-item">
                    <el-row>
                        <el-col :span="3" class="img">
                            <img src="../../assets/404_images/img_loading.png" alt="">
                        </el-col>
                        <el-col :span="8" class="title">
                            <span>新零售思维项目之销售管理</span>
                            <p>销售不仅是卖产品，更是去管理自己和管理客户的销售不仅是卖产品，更是去管理自己和管理客户的</p>
                        </el-col>
                        <el-col :span="3">
                            <span>管理员</span>
                        </el-col>
                        <el-col :span="3">
                            <span>2018-07-23</span>
                        </el-col>
                        <el-col :span="3">
                            <span>234人</span>
                        </el-col>
                        <el-col :span="4" class="rate">
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-off"></i>
                            <i class="el-icon-star-off"></i>
                            <span>(0)人评价</span>
                        </el-col>
                    </el-row>
                </li>
                <li class="info-item">
                    <el-row>
                        <el-col :span="3" class="img">
                            <img src="../../assets/404_images/img_loading.png" alt="">
                        </el-col>
                        <el-col :span="8" class="title">
                            <span>新零售思维项目之销售管理</span>
                            <p>销售不仅是卖产品，更是去管理自己和管理客户的销售不仅是卖产品，更是去管理自己和管理客户的</p>
                        </el-col>
                        <el-col :span="3">
                            <span>管理员</span>
                        </el-col>
                        <el-col :span="3">
                            <span>2018-07-23</span>
                        </el-col>
                        <el-col :span="3">
                            <span>234人</span>
                        </el-col>
                        <el-col :span="4" class="rate">
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-off"></i>
                            <i class="el-icon-star-off"></i>
                            <span>(0)人评价</span>
                        </el-col>
                    </el-row>
                </li>
            </ul>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="prev, pager, next, sizes, jumper" :total="40">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableIndex: 0,
      manu1: true,
      manu2: false,
      manu1Index: 0,
      manu2Index: 0,
      knowledgeType: [
        '全部',
        '职业素养',
        '人力资源',
        '党政学习',
        '业务知识',
        '领导力',
        '职业素养',
        '人力资源',
        '党政学习',
        '业务知识',
        '领导力',
        '职业素养',
        '人力资源'
      ],
      showType: ['全部', '视频', '音频', '文档', 'PPT']
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {},
    changeManu1(index) {
      this.manu1Index = index
    },
    changeManu2(index) {
      this.manu2Index = index
    },
    showMenu1() {
      if (this.manu1) {
        this.manu1 = false
      } else {
        this.manu1 = true
      }
    },
    changeTable(index) {
      this.tableIndex = index
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss">
.knowledge-container {
  max-width: 1200px;
  .menu {
    margin: 16px;
    padding: 0 16px;
    background-color: #ffffff;
    .show-nowarp {
      white-space: nowrap;
      overflow: hidden;
    }
    .type {
      padding-bottom: 16px;
      font-size: 12px;
      color: #666666;
      border-bottom: #e2e2e2 1px dashed;
      position: relative;
      span:hover {
        cursor: pointer;
      }
      .menu-item,
      .title {
        display: inline-block;
        width: 100px;
        margin-top: 16px;
        span {
          display: inline-block;
          padding: 5px 0;
        }
      }
      i {
        display: block;
        position: absolute;
        right: 0;
        top: 16px;
        width: 30px;
        height: 30px;
        background-color: #fff;
      }

      .menu-this {
        border-bottom: #2533b3 2px solid;
        color: #2533b3;
      }
    }
    .more {
      margin-top: 16px;
      text-align: center;
      color: #aaaaaa;
    }
  }
  .knowledge-table {
    margin: 0 16px;
    .table-lable {
      display: block;
      margin-left: 16px;
      font-size: 14px;
      color: #666666;
      span {
        display: inline-block;
        margin-right: 16px;
      }
      span:hover{
          cursor: pointer;
      }
      .el-icon-search {
        font-size: 16px;
        margin-left: 16px;
      }
      .lable-this {
        color: #2533b3;
      }
    }
    .table-lable span:last-child {
      float: right;
      font-size: 16px;
      color: #aaaaaa;
    }
    .el-pagination {
      background-color: #ffffff;
      text-align: right;
      padding: 20px;
      button {
        border: #e2e2e2 1px solid;
        border-radius: 5px;
        margin: 0 5px;
      }
      li {
        border: #e2e2e2 1px solid;
        border-radius: 5px;
        margin: 0 5px;
      }
    }
    .table-content {
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      li {
        display: block;
        padding: 16px 20px;
        text-align: center;
        font-size: 14px;
        color: #666;
        border-bottom: #e2e2e2 1px dashed;
        img {
          width: 100px;
          height: 60px;
        }
      }
      .table-title {
        font-size: 16px;
      }
      .info-item {
        span {
          display: block;
          margin-top: 8px;
        }
        .title {
          text-align: left;
          span {
            font-size: 16px;
            color: #333333;
          }
          p {
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .rate {
          padding-top: 8px;
          font-size: 12px;
          span {
            display: inline-block !important;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>

