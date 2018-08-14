<template>
    <div class="plan-Info">
        <el-row class="plan-top">
            <el-col :span="2" class="text-center back" @click.native="back()">
                <i class="el-icon-arrow-left c-gray"></i>
                <span>返回</span>
            </el-col>
            <el-col :span="4" class="text-center">
                <img src="../../../assets/404_images/img_loading.png" alt="">
            </el-col>
            <el-col :span="18" class="text">
                <span class="l-size">情商领导力， 6秒钟练就高情商，4小时玩转领导力！</span>
                <span class="s-size c-gray">培训目标：让你在游戏中了解情商6秒钟练就高情商，4小时玩转领导力，提升自身领导力，</span>
            </el-col>
        </el-row>
        <div class="plan-intro">
            <el-row>
                <el-col :span="4">
                    <p>
                        <span class="l-size c-gray">总学时：</span>
                        <span class="l-size">147分钟</span>
                    </p>
                    <p>
                        <span class="l-size c-gray">总学分：</span>
                        <span class="l-size">102分</span>
                    </p>
                </el-col>
                <el-col :span="14">
                    <p>
                        <span class="l-size c-gray">已学学时：</span>
                        <span class="l-size">1分钟</span>
                    </p>
                    <p>
                        <span class="l-size c-gray">已获学分：</span>
                        <span class="l-size">0分</span>
                    </p>
                </el-col>
                <el-col :span="6" class="progress">
                    <span class="s-size c-gray">完成进度</span>
                    <el-progress :percentage="1" :stroke-width="10" color="#2CE81B"></el-progress>
                    <span class="m-size c-gray">要求完成日期：2018-12-12</span>
                </el-col>
            </el-row>
            <div class="learn-step-1 learn-step">
                <el-row class="table-header">
                    <el-col :span="16">
                        <i class="iconfont icon-lvzhou_dangqianchangsuo_dingwei">
                            <span>1</span>
                        </i>
                        <span>学习阶段1</span>
                    </el-col>
                    <el-col :span="8" class="text-center">
                        <span class="c-gray">学时：92分钟</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="c-gray m-size">任务1</span>
                        <i class="iconfont icon-benshubook119"></i>
                        <span class="m-size plan-name-limit">企业学习的变革，从个人学习转向组织学习,从个人学习转向组织学习</span>
                    </el-col>
                    <el-col :span="8" class="text-center">
                        <span class="m-size c-gray">速度：</span>
                        <el-progress :percentage="1" :stroke-width="8" color="#2CE81B"></el-progress>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="c-gray m-size">任务2</span>
                        <i class="iconfont icon-benshubook119"></i>
                        <span class="m-size plan-name-limit">浅谈企业大学的运营助推集团化组织创新学习理念</span>
                    </el-col>
                    <el-col :span="8" class="text-center">
                        <span class="m-size c-gray">速度：</span>
                        <el-progress :percentage="1" :stroke-width="8" color="#2CE81B"></el-progress>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="c-gray m-size">任务3</span>
                        <i class="iconfont icon-benshubook119"></i>
                        <span class="m-size plan-name-limit">顺电在云学堂是这样玩的</span>
                    </el-col>
                    <el-col :span="8" class="text-center">
                        <span class="m-size c-gray">速度：</span>
                        <el-progress :percentage="1" :stroke-width="8" color="#2CE81B"></el-progress>
                    </el-col>
                </el-row>
            </div>
            <div class="learn-step-2 learn-step">
                <el-row class="table-header">
                    <el-col :span="16">
                        <i class="iconfont icon-lvzhou_dangqianchangsuo_dingwei">
                            <span>2</span>
                        </i>
                        <span>学习阶段2</span>
                    </el-col>
                    <el-col :span="8" class="text-center">
                        <span class="c-gray">学时：82分钟</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="c-gray m-size">任务1</span>
                        <i class="iconfont icon-pdf"></i>
                        <span class="m-size plan-name-limit">主推师资1.0版11.13</span>
                    </el-col>
                    <el-col :span="8" class="text-center">
                        <span class="m-size c-gray">速度：</span>
                        <el-progress :percentage="1" :stroke-width="8" color="#2CE81B"></el-progress>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="c-gray m-size">任务2</span>
                        <i class="el-icon-edit-outline"></i>
                        <span class="m-size plan-name-limit">乐才平台产品知识</span>
                    </el-col>
                    <el-col :span="8" class="text-center">
                        <span class="m-size c-gray">速度：</span>
                        <el-progress :percentage="1" :stroke-width="8" color="#2CE81B"></el-progress>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    back() {
      this.$router.push({ path: '/learning/training' })
    }
  }
}
</script>
<style lang="scss">
.plan-Info {
  max-width: 1200px;
  .s-size {
    font-size: 12px;
  }
  .l-size {
    font-size: 16px;
  }
  .m-size {
    font-size: 14px;
  }
  .c-gray {
    color: #aaaaaa;
  }
  .c-black {
    color: #666;
  }
  .c-blue {
    color: rgb(17, 125, 248);
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .plan-top {
    padding: 16px;
    margin: 16px;
    width: 100%;
    background-color: #ffffff;
    img {
      width: 100px;
      height: 60px;
    }
    .back {
      height: 60px;
      padding-top: 20px;
      border-right: #e2e2e2 1px solid;
    }
    .back:hover {
      cursor: pointer;
    }
    .text {
      span {
        display: block;
        margin: 10px 0 10px 0;
      }
    }
  }
  .plan-intro {
    padding: 16px;
    background-color: #ffffff;
    margin: 0 16px;
    .progress {
      span {
        display: block;
        margin-top: 10px;
      }
    }
    .table-header {
      background-color: #f2f2f2;
      span {
        display: inline-block;
      }
      .el-col-16 {
        i:before {
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
      .el-col-8 {
        span {
          margin-top: 10px;
        }
      }
    }
    .learn-step {
      border-top: #eeeeee 1px solid;
      border-left: #eeeeee 1px solid;
      border-right: #eeeeee 1px solid;
      margin-top: 16px;
      .plan-name-limit {
        display: inline-block;
        width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .el-progress {
      width: 70%;
      display: inline-block;
    }
    .learn-step-1 {
      .el-row {
        border-bottom: #eeeeee 1px solid;
        padding: 12px;
      }
    }
    .learn-step-2 {
      margin-top: 30px;
      .el-row {
        border-bottom: #eeeeee 1px solid;
        padding: 12px;
      }
    }
    .icon-lvzhou_dangqianchangsuo_dingwei {
      span {
        width: 16px;
        height: 16px;
        font-size: 12px;
        display: inline-block;
        border-radius: 8px;
        background-color: #ffff;
        position: absolute;
        top: 19px;
        left: 19px;
        padding-left: 4px;
        padding-top: 2px;
      }
    }
    .icon-lvzhou_dangqianchangsuo_dingwei:before {
      font-size: 30px;
      color: #3583ef;
      position: relative;
    }
    .icon-pdf {
      color: #c70e01;
    }
    .icon-benshubook119 {
      color: #46a310;
    }
    .el-icon-edit-outline {
      color: #f1db14;
    }
  }
}
</style>


