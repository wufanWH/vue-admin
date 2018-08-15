<template>
    <div class="course-info-contanier">
        <div class="courseTitle">
            <div class="nav-title">
                <span>当前位置</span>
                <i class="el-icon-arrow-right"></i>
                <span>知识广场</span>
                <i class="el-icon-arrow-right"></i>
                <span>UEUX交互篇</span>
            </div>
            <el-row>
                <el-col :span="8">
                    <div class="imgTitle">
                        <img src="../../../assets/404_images/img_loading.png">
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="textTitle">
                        <div class="first-title">UEUX交互篇</div>
                        <div>联合网易等项目组的多位资深设计总监，UI设计师，UE交互设计师、产品经理大牛倾力打造，带你快速掌握交互设计师所需技能</div>
                        <div class="rateStyle">
                            <el-row>
                                <el-col :span="9">
                                    <el-rate v-model="rate" disabled show-score text-color="#ff9900" score-template="{value}">
                                    </el-rate>
                                </el-col>
                                <el-col :span="9">
                                    <span>标签：交互设计</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="studyStyle">
                            <el-row>
                                <el-col :span="4">
                                    <span>学时：41分钟</span>
                                </el-col>
                                <el-col :span="4">
                                    <span>总学分：40</span>
                                </el-col>
                                <el-col :span="4">
                                    <span>已获得：20</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="buttonStyle">
                            <el-button>马上学习</el-button>
                            <i class="iconfont icon-shoucang"></i>
                            <span>收藏</span>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="courseContent">
            <el-row>
                <el-col :span="18">
                    <div class="courseDetails">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="用户管理" name="first">
                                <div class="introduction">
                                    <div>
                                        <div>适合人群:</div>
                                        <div>零基础从事设计工作的人</div>
                                    </div>
                                    <div>
                                        <div>课程描述:</div>
                                        <div>学习目标:</div>
                                    </div>
                                    <div class="listStyle">
                                        <div>1.了解产品到底是什么;</div>
                                        <div>2.能够掌握Web端与移动端的差异及设计规划</div>
                                        <div>3.了解如何做出好的产品</div>
                                    </div>
                                    <div>
                                        学习建议：
                                    </div>

                                    <div>
                                        同学们可以根据自己发工作时的实际情况，理解并且掌握Web端与移动端的差异及设计规范。
                                    </div>
                                    <div>下载资料：无</div>
                                    <div>素材作业交流贴(附件-无、云盘-无)：http://www.kgc.cn/bbc/post/7865</div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="likeCourse">
                        <div class="little">
                            相关课程
                        </div>
                        <el-row>
                            <el-col :span="8">
                                <img src="../../../assets/404_images/img_loading.png" style="width:80px;height:50px;">
                            </el-col>
                            <el-col :span="12">
                                <div>原创微课-我的爱宠</div>
                                <div>1人学习</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <img src="../../../assets/404_images/img_loading.png" style="width:80px;height:50px;">
                            </el-col>
                            <el-col :span="12">
                                <div>sg</div>
                                <div>0人学习</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="studyCourse">
                        <div class="studyPeople">
                            172人在学习该课程
                        </div>
                        <el-row>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>黑黑</div>
                            </el-col>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>fff</div>
                            </el-col>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>fff</div>
                            </el-col>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>ddd</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>黑黑</div>
                            </el-col>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>fff</div>
                            </el-col>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>fff</div>
                            </el-col>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>ddd</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>黑黑</div>
                            </el-col>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>fff</div>
                            </el-col>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>fff</div>
                            </el-col>
                            <el-col :span="6">
                                <img src="../../../assets/404_images/img_loading.png" style="width:50px;height:50px;">
                                <div>ddd</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      rate: 4.1,
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss">
.course-info-contanier {
  max-width: 1200px;
  margin-left: 30px;
  margin-top: 20px;
  .courseTitle {
    background-color: white;
    width: 100%;
    .nav-title {
      margin-left: 30px;
      line-height: 40px;
      font-size: 14px;
      color: #aaaaaa;
    }
  }
  .imgTitle {
    margin-top: 10px;
    margin-left: 30px;
    > img {
      height: 220px;
      width: 100%;
    }
  }
  .textTitle {
    font-size: 14px;
    margin-left: 40px;
    margin-top: 10px;
    color: #aaaaaa;
    width: 80%;
    .first-title {
      font-size: 30px;
      //   line-height: 50px;
      color: black;
      font-weight: 200;
    }
    .rateStyle {
      margin-top: 20px;
      > .el-col {
        width: 100%;
      }
    }
    .studyStyle {
      margin-top: 20px;
    }
    .buttonStyle {
      margin-top: 20px;
      > button {
        width: 200px;
        background-color: #ff6633;
        color: white;
      }
    }
  }
  .courseContent {
    margin-top: 20px;
    .courseDetails {
      background-color: white;
      height: 500px;
      > el-tabs {
        margin-left: 20px;
      }
      .introduction {
        margin-left: 20px;
        color: #aaaaaa;
        > div {
          margin-top: 20px;
        }
        .listStyle {
          > div {
            margin-top: 20px;
          }
        }
      }
    }
    .likeCourse {
      background-color: white;
      margin-left: 30px;
      height: 200px;
      > .little {
        font-size: 20px;
        font-weight: 300px;
        line-height: 40px;
        margin-left: 20px;
      }
      .el-row {
        width: 100%;
        > .el-col {
          margin-left: 20px;
          margin-top: 20px;
        }
      }
    }
    .studyCourse {
      background-color: white;
      margin-top: 20px;
      margin-left: 30px;
      text-align: center;
      > .studyPeople {
        font-size: 20px;
        line-height: 40px;
      }
      > .el-row {
        // margin-top: 20px;
        > .el-col {
          margin-top: 10px;
          //   margin-left: 10px;
        }
      }
    }
  }
}
</style>


