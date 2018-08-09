<template>
    <div class="learning-center">
        <el-row class="top-learn-info">
            <el-col :span="12">
                <div class="grid-content bg-purple score-charts">
                    <p>学分、学时展示</p>
                    <el-button-group>
                        <el-button size="mini" type="primary" plain>本周</el-button>
                        <el-button size="mini">月</el-button>
                        <el-button size="mini">季度</el-button>
                        <span><i class="learn-score"></i> 学分<i class="learn-time"></i> 学时</span>
                        </el-button-group>
                    <div id="learn-chart" class="learn-chart"></div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <div class="top-box box-top-1">
                        <i class="el-icon-more"></i>
                        <div>
                            <i class="el-icon-tickets"></i>
                            <span>12</span>
                        </div>
                        <p>当前所有项目</p>
                    </div>
                    <div class="top-box box-top-2">
                        <i class="el-icon-more"></i>
                        <div>
                            <i class="el-icon-tickets"></i>
                            <span>12</span>
                        </div>
                        <p>当前开设技能提升</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <div class="top-box box-top-3">
                        <i class="el-icon-more"></i>
                        <div>
                            <i class="el-icon-tickets"></i>
                            <span>12</span>
                        </div>
                        <p>我参与项目</p>
                    </div>
                    <div class="top-box box-top-4">
                        <i class="el-icon-more"></i>
                        <div>
                            <i class="el-icon-tickets"></i>
                            <span>12</span>
                        </div>
                        <p>我参与</p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class="learn-content">
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <div class="learning bg-white">
                        <div class="learning-title">
                            <span class="big-title">进行中</span>
                            <i class="circle"></i>
                            <span class="title-list title-this">项目</span>
                            <span class="title-list">学习计划</span>
                            <span class="title-list">线下培训</span>
                            <span class="title-list">混合培训</span>
                            <span class="title-list">考试</span>
                            <span class="title-list">测评</span>
                        </div>
                        <div class="type-content">
                            <ul>
                                <li>
                                    <el-row>
                                        <el-col :span="4"><img src="../../assets/404_images/img_loading.png" alt=""></el-col>
                                        <el-col :span="13" class="list-info">
                                            <p>情商领导力， 6秒钟练就高情商，4小时玩转领导力！</p>
                                            <p>项目－线上培训</p>
                                            <span>截止时间：2018-08-07 16:00</span>
                                            <span>最近一次学习：2018-08-07 16:00</span>
                                        </el-col>
                                        <el-col :span="3">
                                            <el-progress type="circle" :stroke-width="2" :width="60" :percentage="68"></el-progress>
                                        </el-col>
                                        <el-col :span="4">
                                            <el-button type="primary">立即学习</el-button>
                                        </el-col>
                                    </el-row>
                                </li>
                                <li>
                                    <el-row>
                                        <el-col :span="4"><img src="../../assets/404_images/img_loading.png" alt=""></el-col>
                                        <el-col :span="13" class="list-info">
                                            <p>情商领导力， 6秒钟练就高情商，4小时玩转领导力！</p>
                                            <p>项目－线上培训</p>
                                            <span>截止时间：2018-08-07 16:00</span>
                                            <span>最近一次学习：2018-08-07 16:00</span>
                                        </el-col>
                                        <el-col :span="3">
                                            <el-progress type="circle" :stroke-width="2" :width="60" :percentage="68"></el-progress>
                                        </el-col>
                                        <el-col :span="4">
                                            <el-button type="primary">立即学习</el-button>
                                        </el-col>
                                    </el-row>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="news bg-white">
                        <div class="learning-title">
                            <span class="big-title">最新项目</span>
                            <i class="circle"></i>
                            <span class="title-list title-this">项目</span>
                            <span class="title-list">学习计划</span>
                            <span class="title-list">线下培训</span>
                            <span class="title-list">混合培训</span>
                            <span class="title-list">考试</span>
                            <span class="title-list">测评</span>
                        </div>
                        <div class="type-content">
                            <ul>
                                <li>
                                    <el-row>
                                        <el-col :span="8">
                                            <img src="../../assets/404_images/img_loading.png" alt="">
                                        </el-col>
                                        <el-col :span="16" class="content-list-info">
                                            <span class="big-title">领导专题培训班</span>
                                            <span class="registering progerss-start">报名中</span>
                                            <p>培训目标：领导里专题培训班</p>
                                            <div class="course-info">
                                                <span>
                                                    <i class="iconfont icon-icon-test"></i>线上培训</span>
                                                <span>
                                                    <i class="iconfont icon-qunzu"></i>348人已报名</span>
                                                <span>
                                                    <i class="iconfont icon-shizhong"></i>03月30日（报名截止时间：2018-04-04 00:00）</span>
                                            </div>
                                            <el-button size="mini" type="primary">查看详情</el-button>
                                            <span class="no-register">未报名</span>
                                        </el-col>
                                    </el-row>
                                </li>
                                <li>
                                    <el-row>
                                        <el-col :span="8">
                                            <img src="../../assets/404_images/img_loading.png" alt="">
                                        </el-col>
                                        <el-col :span="16" class="content-list-info">
                                            <span class="big-title">情商领导力， 6秒钟练就高情商，4小时玩转领导力！</span>
                                            <span class="registering progerss-going">进行中</span>
                                            <p>培训目标：让你在游戏中了解情商6秒钟练就高情商，4小时玩转领导力，提升自身领导力，提升自身领导力，提升自身领导力</p>
                                            <div class="course-info">
                                                <span>
                                                    <i class="iconfont icon-icon-test"></i>线上培训</span>
                                                <span>
                                                    <i class="iconfont icon-qunzu"></i>348人已报名</span>
                                                <span>
                                                    <i class="iconfont icon-shizhong"></i>03月30日（报名截止时间：2018-04-04 00:00）</span>
                                            </div>
                                            <el-button size="mini" type="info" disabled>报名结束</el-button>
                                            <span class="no-register">未报名</span>
                                        </el-col>
                                    </el-row>
                                </li>
                                <li>
                                    <el-row>
                                        <el-col :span="8">
                                            <img src="../../assets/404_images/img_loading.png" alt="">
                                        </el-col>
                                        <el-col :span="16" class="content-list-info">
                                            <span class="big-title">领导专题培训班</span>
                                            <span class="registering progerss-waiting">等待中</span>
                                            <p>培训目标：领导里专题培训班</p>
                                            <div class="course-info">
                                                <span>
                                                    <i class="iconfont icon-icon-test"></i>线上培训</span>
                                                <span>
                                                    <i class="iconfont icon-qunzu"></i>348人已报名</span>
                                                <span>
                                                    <i class="iconfont icon-shizhong"></i>03月30日（报名截止时间：2018-04-04 00:00）</span>
                                            </div>
                                            <el-button size="mini" type="primary">查看详情</el-button>
                                            <span class="no-register">已报名</span>
                                        </el-col>
                                    </el-row>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <div class="learning-announcement bg-white">
                        <div class="right-colums-title">
                            <span>公告</span>
                            <i class="el-icon-more"></i>
                        </div>
                        <div class="colum-list">
                            <ul>
                                <li>
                                    <p>企业引流型学习项目如何设计？六招，看好了！企业引流型学习项目如何设计？六招，看好了！</p>
                                </li>
                                <li>
                                    <p>企业引流型学习项目如何设计？六招，看好了！</p>
                                </li>
                                <li>
                                    <p>企业引流型学习项目如何设计？六招，看好了！</p>
                                </li>
                                <li>
                                    <p>企业引流型学习项目如何设计？六招，看好了！</p>
                                </li>
                                <li>
                                    <p>企业引流型学习项目如何设计？六招，看好了！</p>
                                </li>
                                <li>
                                    <p>企业引流型学习项目如何设计？六招，看好了！</p>
                                </li>
                                <li>
                                    <p>企业引流型学习项目如何设计？六招，看好了！</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="learing-history bg-white">
                        <div class="right-colums-title">
                            <span>学习历史</span>
                            <i class="el-icon-more"></i>
                        </div>
                        <ul class="history-steps">
                            <li>
                                <i class="icon-circle bg-white"></i>
                                <span class="span-topic">中材国际（南京）中青年创新能力创新能力</span>
                                <span class="time">2015-09-01</span>
                            </li>
                            <li>
                                <i class="icon-circle bg-white"></i>
                                <span class="span-topic">中材国际（南京）中青年创新能力创新能力</span>
                                <span class="time">2015-09-01</span>
                            </li>
                            <li>
                                <i class="icon-circle bg-white"></i>
                                <span class="span-topic">中材国际（南京）中青年创新能力创新能力</span>
                                <span class="time">2015-09-01</span>
                            </li>
                            <li>
                                <i class="icon-circle bg-white"></i>
                                <span class="span-topic">中材国际（南京）中青年创新能力创新能力</span>
                                <span class="time">2015-09-01</span>
                            </li>
                            <li>
                                <i class="icon-circle bg-white"></i>
                                <span class="span-topic">中材国际（南京）中青年创新能力创新能力</span>
                                <span class="time">2015-09-01</span>
                            </li>
                            <li>
                                <i class="icon-circle bg-white"></i>
                                <span class="span-topic">中材国际（南京）中青年创新能力创新能力</span>
                                <span class="time">2015-09-01</span>
                            </li>
                            <li class="list-last">
                                <i class="icon-circle bg-white"></i>
                                <span class="span-last">查看历史记录</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let learnChart = this.$echarts.init(
        document.getElementById('learn-chart')
      )
      // 绘制图表
      learnChart.setOption({
        //          title : {
        //     text: '未来一周气温变化'
        // },
        tooltip: {
          trigger: 'axis'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['7/30', '7/31', '8/1', '8/2', '8/3', '8/4', '8/5'],
            splitLine: {
            show: false
        }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}'
            },
            splitLine: {
            show: false
        }
          }
        ],
        series: [
          {
            name: '学分',
            type: 'line',
            data: [25, 10, 5, 30, 15, 50, 45],
            lineStyle:{
                normal:{
                    color:'#ee9632'
                }
            }
            // markPoint : {
            //     data : [
            //         {type : 'max', name: '最大值'},
            //         {type : 'min', name: '最小值'}
            //     ]
            // },
            // markLine : {
            //     data : [
            //         {type : 'average', name: '平均值'}
            //     ]
            // }
          },
          {
            name: '学时',
            type: 'line',
            data: [0, 5, 20, 10, 30, 20, 40],
            lineStyle:{
                normal:{
                    color:'#6277e9'
                }
            }
            // markPoint : {
            //     data : [
            //         {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
            //     ]
            // },
            // markLine : {
            //     data : [
            //         {type : 'average', name : '平均值'}
            //     ]
            // }
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss">
// 学习中心页面
.bg-white {
  background-color: #ffffff;
}
.learning-center {
  margin-right: 8px;
  max-width: 1200px;
  .el-col .grid-content {
    margin-left: 16px;
  }
  .top-learn-info {
    margin-top: 16px;
    .score-charts {
      height: 300px;
      background-color: #ffffff;
      p {
        margin: 0;
        display: block;
        padding: 12px 16px;
        font-size: 14px;
        font-weight: 600;
        border-left: #6277e9 2px solid;
        border-bottom: #eeeeee 1px solid;
      }
      .learn-chart {
        margin-top: 16px;
        width: 100%;
        height: 220px;
      }
      .el-button-group{
          margin-bottom: -50px;
          width: 100%;
          padding: 0 16px;
          span{
              display: inline-block;
              float: right;
              font-size: 14px;
              margin: 0 8px;
              color: #999999;
               i {
                display: inline-block;
                width: 6px;
                height: 6px;
                border-radius: 3px;
                vertical-align: middle;
                margin: 0 8px;
             }
          }
          .learn-score{
              background-color: #ee9632;
              border: #ee9632 3px solid;
          }
          .learn-time{
              background-color: #6277e9;
              border: #6277e9 3px solid;
          }
      }
    }
    .top-box {
      height: 142px;
      background-color: #ffffff;
      padding: 16px;
      .el-icon-more {
        display: inline-block;
        color: #999999;
        float: right;
      }
      .el-icon-more:hover {
        cursor: pointer;
      }
      div {
        margin-top: 30px;
        margin-left: 20px;
        i {
          width: 20px;
          display: inline-block;
          margin-right: 12px;
          font-size: 20px;
        }
        span {
          font-size: 24px;
          font-weight: 600;
        }
      }
      p {
        margin: 8px 0 0 52px;
        color: #999999;
      }
    }
    .box-top-1 {
      margin-bottom: 16px;
      border-left: #6277e9 2px solid;
      div i {
        color: #6277e9;
      }
    }
    .box-top-2 {
      border-left: #ee9632 2px solid;
      div i {
        color: #ee9632;
      }
    }
    .box-top-3 {
      margin-bottom: 16px;
      border-left: #47ca3b 2px solid;
      div i {
        color: #47ca3b;
      }
    }
    .box-top-4 {
      border-left: #6277e9 2px solid;
      div i {
        color: #6277e9;
      }
    }
  }
  .learn-content {
    margin-top: 16px;
    .learning-title {
      padding: 12px 16px;
      border-left: #6277e9 2px solid;
      border-bottom: #eeeeee 1px solid;
      .big-title {
        font-size: 16px;
        font-weight: 600;
      }
      .title-this {
        color: #6277e9;
      }
      i {
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background-color: #000000;
        border: #000000 2px solid;
        margin: 0 12px;
        vertical-align: middle;
      }
      .title-list {
        font-size: 14px;
        display: inline-block;
        margin-right: 30px;
      }
    }
    .right-colums-title {
      padding: 12px 16px;
      border-left: #6277e9 2px solid;
      border-bottom: #eeeeee 1px solid;
      span {
        font-size: 16px;
        font-weight: 600;
      }
      i {
        display: inline-block;
        color: #999999;
        float: right;
      }
      i:hover {
        cursor: pointer;
      }
    }
    .learning {
      ul {
        padding: 0;
        li {
          display: block;
          font-size: 12px;
          color: #aaaaaa;
          margin: 10px 10px 0 10px;
          padding-bottom: 16px;
          padding-top: 10px;
          border-bottom: #f2f2f2 1px solid;
          .el-col {
            padding: 5px;
          }
          img {
            width: 100%;
            height: 60px;
          }
          .list-info {
            p {
              margin: 0 0 10px 0;
            }
            span {
              margin-right: 8px;
            }
          }
          .list-info p:first-child {
            font-size: 14px;
            color: #666666;
          }
          .el-button {
            width: 100%;
            margin-top: 5px;
          }
        }
      }
    }
    .news {
      margin-top: 16px;
      ul {
        padding: 0;
        li {
          font-size: 12px;
          display: block;
          margin: 10px 10px 0 10px;
          padding-bottom: 16px;
          padding-top: 10px;
          border-bottom: #f2f2f2 1px solid;
          .el-col {
            padding: 5px;
            img {
              width: 100%;
              height: 130px;
            }
          }
          .content-list-info {
            color: #666666;
            .big-title {
              display: inline-block;
              font-size: 18px;
              vertical-align: middle;
              max-width: 80%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .registering {
              display: inline-block;
              margin-left: 12px;
              padding: 3px;
              vertical-align: middle;
              color: #ffffff;
            }
            .progerss-start {
              background-color: #cf1709;
            }
            .progerss-going {
              background-color: #73aff5;
            }
            .progerss-waiting {
              background-color: #eca02d;
            }
            p {
              color: #aaaaaa;
              margin-bottom: 30px;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .course-info {
              margin: 12px 0;
              color: #aaaaaa;
              span {
                display: inline-block;
                margin-right: 8px;
              }
              .iconfont {
                font-size: 12px;
              }
            }
            .no-register {
              color: #aaaaaa;
              margin-left: 12px;
            }
          }
        }
      }
    }
    .learning-announcement {
      ul {
        margin: 16px;
        padding: 0;
        li:hover {
          cursor: pointer;
          color: #6277e9;
        }
        li {
          display: block;
          font-size: 14px;
          height: 30px;
          color: #666666;
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    .learing-history {
      margin-top: 16px;
      .history-steps {
        padding: 0;
        margin: 16px;
        position: relative;
        li:hover {
          cursor: pointer;
          color: #6277e9;
        }
        li {
          font-size: 14px;
          display: block;
          height: 40px;
          border-left: #999999 1px solid;
          i {
            display: inline-block;
            margin-left: -6px;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            border: #6277e9 3px solid;
          }
          span {
            display: inline-block;
            margin-left: 3%;
            vertical-align: middle;
          }
          .span-topic {
            width: 60%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .time {
            width: 28%;
          }
        }
        .list-last {
          border-left: #ffffff 1px solid;
          i {
            border: #cccccc 3px solid;
          }
          .span-last {
            color: #6277e9;
          }
        }
      }
    }
  }
}
</style>


