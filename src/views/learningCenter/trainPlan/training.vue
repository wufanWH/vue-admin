<template>
    <div class="training-container">
        <ul class="title-tab">
            <li>在线学习</li>
            <li>线下培训</li>
            <li>混合培训</li>
        </ul>
        <ul class="status-tab">
            <li>未参与</li>
            <li>已参与</li>
        </ul>
        <div class="main-content">
            <el-row class="main-title">
                <el-col :span="14">
                    计划标题
                </el-col>
                <el-col :span="3">
                    剩余学习时间
                </el-col>
                <el-col :span="2">
                    类型
                </el-col>
                <el-col :span="2">
                    状态
                </el-col>
                <el-col :span="3">
                    操作
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <div class="plan-img">
                        <img src="../../../assets/404_images/img_loading.png" width="120px;" height="80px;">
                    </div>
                    <div class="plan-title">
                        <div class="little-title">
                            情商领导力，6秒钟练就高情商，4小时玩转领导力
                        </div>
                        <div class="main-show">培训目标：让你在游戏中了解情商，6秒钟练就高情商，4小时玩转领导力，提升自身领导力</div>
                        <div class="main-show">645人参加培训</div>

                    </div>
                </el-col>
                <el-col :span="3" class="main-all">
                    4天
                </el-col>
                <el-col :span="2" class="main-all">
                    在线学习
                </el-col>
                <el-col :span="2" class="main-all">
                    未参与
                </el-col>
                <el-col :span="3" class="main-all">
                    <el-button type="primary" @click="nextPage()">查看详情</el-button>
                </el-col>
            </el-row><hr>
            <el-row>
                <el-col :span="14">
                    <div class="plan-img">
                        <img src="../../../assets/404_images/img_loading.png" width="120px;" height="80px;">
                    </div>
                    <div class="plan-title">
                        <div class="little-title">
                            情商领导力，6秒钟练就高情商，4小时玩转领导力
                        </div>
                        <div class="main-show">培训目标：让你在游戏中了解情商，6秒钟练就高情商，4小时玩转领导力，提升自身领导力</div>
                        <div class="main-show">645人参加培训</div>

                    </div>
                </el-col>
                <el-col :span="3" class="main-all">
                    4天
                </el-col>
                <el-col :span="2" class="main-all">
                    在线学习
                </el-col>
                <el-col :span="2" class="main-all">
                    未参与
                </el-col>
                <el-col :span="3" class="main-all">
                    <el-button type="primary" @click="nextPage()">查看详情</el-button>
                </el-col>
            </el-row><hr>
            <el-row>
                <el-col :span="14">
                    <div class="plan-img">
                        <img src="../../../assets/404_images/img_loading.png" width="120px;" height="80px;">
                    </div>
                    <div class="plan-title">
                        <div class="little-title">
                            情商领导力，6秒钟练就高情商，4小时玩转领导力
                        </div>
                        <div class="main-show">培训目标：让你在游戏中了解情商，6秒钟练就高情商，4小时玩转领导力，提升自身领导力</div>
                        <div class="main-show">645人参加培训</div>
                    </div>
                </el-col>
                <el-col :span="3" class="main-all">
                    4天
                </el-col>
                <el-col :span="2" class="main-all">
                    在线学习
                </el-col>
                <el-col :span="2" class="main-all">
                    未参与
                </el-col>
                <el-col :span="3" class="main-all">
                    <el-button type="primary" @click="nextPage()">查看详情</el-button>
                </el-col>
            </el-row><hr>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    nextPage() {
      this.$router.push({ path: '/learning/training/planInfo' })
    }
  }
}
</script>
<style lang="scss" >
.training-container {
  margin-left: 20px;
  max-width: 1200px;
  .title-tab {
    background-color: white;
    line-height: 80px;
    > li {
      display: inline-block;
      margin-right: 30px;
      margin-left: 10px;
    }
  }
  .status-tab {
    line-height: 40px;
    > li {
      display: inline-block;
      margin-left: 10px;
      font-size: 14px;
      margin-right: 20px;
    }
  }
  .main-content {
    background-color: white;
    .main-title {
      line-height: 40px;
      font-size: 14px;
      color: #aaaaaa;
      text-align: center;
    }
    .main-all {
      text-align: center;
    }
    .plan-img {
      display: inline-block;
      margin-left: 10px;
      width: 120px;
    }
    .plan-title {
      display: inline-block;
      margin-left: 10px;
      width: 500px;
    }
    .little-title {
      font-size: 20px;
      line-height: 40px;
      margin-top: -10px;
    }
    .main-show {
      font-size: 14px;
      color: #aaaaaa;
      line-height: 20px;
    }
  }
}
</style>
