<template>
  <div class="page-index">
    <div class="banner box">
      <el-carousel height="480px" :autoplay="false">
        <el-carousel-item v-for="(item,index) in carouselSrc" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="user-info">
        <el-row>
          <el-col :span="5" class="user-img">
            <img src="../assets/main_images/guitar.gif" alt="">
            <span>塔塔罗特</span>
          </el-col>
          <el-col :span="9">
            <span>最近参与培训</span>
            <i class="el-icon-arrow-right"></i>
            <span>领导力集训营</span>
          </el-col>
          <el-col :span="10">
            <span>最近学习记录</span>
            <i class="el-icon-arrow-right"></i>
            <span>暂无记录</span>
            <span class="b-blue">去学习吧~</span>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="box news-project">
      <el-row>
        <el-col :span="6" class="colum-1">
          <span>最新培训项目</span>
          <span>一起学习一起成长</span>
          <span class="b-blue-box">查看更多</span>
        </el-col>
        <el-col :span="6" class="colum-2">
          <img src="../assets/404_images/img_loading.png" alt="">
          <p class="p-two-nowarp">领导专题培训班</p>
          <span class="min-bolder">03月20日</span>
          <span class="min-gray">（报名截止：2018-04-04 00:00）</span>
        </el-col>
        <el-col :span="6" class="colum-3">
          <img src="../assets/404_images/img_loading.png" alt="">
          <p>情商领导力，6秒钟练就高情商，4小时玩转领导力</p>
          <p class="summary">培训目标：让你在游戏中了解情商6秒钟练就高情商，4小时玩转领导力，提升自身领导力</p>
          <span class="b-blue-box">查看详情</span>
        </el-col>
        <el-col :span="6" class="colum-2">
          <img src="../assets/404_images/img_loading.png" alt="">
          <p class="p-two-nowarp">情商领导力，6秒钟练就高情商，4小时玩转领导力</p>
          <span class="min-bolder">03月20日</span>
          <span class="min-gray">（报名截止：2018-04-04 00:00）</span>
        </el-col>
      </el-row>
    </div>
    <div class="box recommend-learn">
      <p class="title clearfix">推荐学习
        <span>更多</span>
      </p>
      <el-row>
        <el-col :span="12" class="course">
          <p class="p-title">课程</p>
          <ul>
            <li class="clearfix">
              <div class="course-img">
                <img src="../assets/404_images/img_loading.png" alt="">
                <i class="el-icon-caret-right"></i>
              </div>
              <p class="p-one-nowarp">新零售思维项目之销售管理</p>
              <span class="m-size">234人已学习</span>
              <span class="min-gray rate">
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-off"></i>
                <span>(0)人评价</span>
              </span>
            </li>
            <li class="clearfix">
              <div class="course-img">
                <img src="../assets/404_images/img_loading.png" alt="">
                <i class="el-icon-caret-right"></i>
              </div>
              <p class="p-one-nowarp">新零售思维项目之销售管理</p>
              <span class="m-size">234人已学习</span>
              <span class="min-gray rate">
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-off"></i>
                <span>(0)人评价</span>
              </span>
            </li>
            <li class="clearfix">
              <div class="course-img">
                <img src="../assets/404_images/img_loading.png" alt="">
                <i class="el-icon-caret-right"></i>
              </div>
              <p class="p-one-nowarp">新零售思维项目之销售管理</p>
              <span class="m-size">234人已学习</span>
              <span class="min-gray rate">
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-off"></i>
                <span>(0)人评价</span>
              </span>
            </li>
            <li class="clearfix">
              <div class="course-img">
                <img src="../assets/404_images/img_loading.png" alt="">
                <i class="el-icon-caret-right"></i>
              </div>
              <p class="p-one-nowarp">新零售思维项目之销售管理</p>
              <span class="m-size">234人已学习</span>
              <span class="min-gray rate">
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-off"></i>
                <span>(0)人评价</span>
              </span>
            </li>
          </ul>
        </el-col>
        <el-col :span="12" class="docs">
          <p class="p-title">文档</p>
          <ul>
            <li>
              <el-row>
                <el-col :span="4" class="list-left">
                  <img src="../assets/404_images/img_loading.png" alt="">
                </el-col>
                <el-col :span="15" class="list-middle">
                  <p class="h-size">聚焦业务-整合资源</p>
                  <p class="min-gray">纵是项目，横是能力和平台，要借项目打造能力和平台</p>
                </el-col>
                <el-col :span="5" class="list-right m-size">
                  234人已学习
                </el-col>
              </el-row>
            </li>
            <li>
              <el-row>
                <el-col :span="4" class="list-left">
                  <img src="../assets/404_images/img_loading.png" alt="">
                </el-col>
                <el-col :span="15" class="list-middle">
                  <p class="h-size">聚焦业务-整合资源</p>
                  <p class="min-gray">纵是项目，横是能力和平台，要借项目打造能力和平台</p>
                </el-col>
                <el-col :span="5" class="list-right m-size">
                  234人已学习
                </el-col>
              </el-row>
            </li>
            <li>
              <el-row>
                <el-col :span="4" class="list-left">
                  <img src="../assets/404_images/img_loading.png" alt="">
                </el-col>
                <el-col :span="15" class="list-middle">
                  <p class="h-size">聚焦业务-整合资源</p>
                  <p class="min-gray">纵是项目，横是能力和平台，要借项目打造能力和平台</p>
                </el-col>
                <el-col :span="5" class="list-right m-size">
                  234人已学习
                </el-col>
              </el-row>
            </li>
            <li>
              <el-row>
                <el-col :span="4" class="list-left">
                  <img src="../assets/404_images/img_loading.png" alt="">
                </el-col>
                <el-col :span="15" class="list-middle">
                  <p class="h-size">聚焦业务-整合资源</p>
                  <p class="min-gray">纵是项目，横是能力和平台，要借项目打造能力和平台</p>
                </el-col>
                <el-col :span="5" class="list-right m-size">
                  234人已学习
                </el-col>
              </el-row>
            </li>
            <li>
              <el-row>
                <el-col :span="4" class="list-left">
                  <img src="../assets/404_images/img_loading.png" alt="">
                </el-col>
                <el-col :span="15" class="list-middle">
                  <p class="h-size">聚焦业务-整合资源</p>
                  <p class="min-gray">纵是项目，横是能力和平台，要借项目打造能力和平台</p>
                </el-col>
                <el-col :span="5" class="list-right m-size">
                  234人已学习
                </el-col>
              </el-row>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="box">
      <img class="middle-banner" src="../assets/main_images/index_banner.png" alt="">
    </div>

    <div class="box leader-board">
      <el-row>
        <el-col :span="12">
          <div class="credit">
            <div class="clearfix top-title">
              <span class="b-size">学分榜</span>
              <span class="min-gray m-size">你当前排名20名</span>
              <span class="tab" :class="{'tab-this' : 1===rankType}" @click="rankTypeChange(1)">本季度</span>
              <span class="tab" :class="{'tab-this' : 0===rankType}" @click="rankTypeChange(0)">当月</span>
            </div>
            <el-row class="m-size table-title">
              <el-col :span="4">排名</el-col>
              <el-col :span="4">&nbsp;</el-col>
              <el-col :span="6">姓名</el-col>
              <el-col :span="5">学时</el-col>
              <el-col :span="5">学分</el-col>
            </el-row>
            <el-row class="m-size" v-for="(item,index) in creditData" :key="index">
              <el-col :span="4">
                <span class="ranking" :class="{'color-m-top' : index <= 2}">{{index+1}}</span>
              </el-col>
              <el-col :span="4" v-if="index <= 2"><img :src="item.img" alt=""></el-col>
              <el-col :span="4" v-else>&nbsp;</el-col>
              <el-col :span="6" :class="{'m-top' : index <= 2}">{{item.name}}</el-col>
              <el-col :span="5" :class="{'m-top' : index <= 2}">{{item.learnTime}}学时</el-col>
              <el-col :span="5" :class="{'m-top' : index <= 2}">{{item.learnScore}}分</el-col>
            </el-row>
            <span class="b-blue-box more">查看更多</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="integral">
            <div class="clearfix top-title">
              <span class="b-size">积分排行榜</span>
              <span class="min-gray m-size">你当前排名55名</span>
              <span class="bg-red">积分兑换规则</span>
            </div>
            <el-row class="top-three m-size">
              <el-col :span="8">
                <img :src="integralData[0].img" alt="">
                <span class="block">{{integralData[0].name}}</span>
                <span>{{integralData[0].alias}} | 积分值：{{integralData[0].integral}}</span>
                <div class="rank-two"></div>
              </el-col>
              <el-col :span="8">
                <img class="big-img" :src="integralData[1].img" alt="">
                <span class="block">{{integralData[1].name}}</span>
                <span>{{integralData[1].alias}} | 积分值：{{integralData[1].integral}}</span>
                <div class="rank-one"></div>
              </el-col>
              <el-col :span="8">
                <img :src="integralData[2].img" alt="">
                <span class="block">{{integralData[2].name}}</span>
                <span>{{integralData[2].alias}} | 积分值：{{integralData[2].integral}}</span>
                <div class="rank-three"></div>
              </el-col>
            </el-row>
            <el-row class="m-size table-title">
              <el-col :span="3">排名</el-col>
              <el-col :span="8">姓名</el-col>
              <el-col :span="8">头衔</el-col>
              <el-col :span="5">积分值</el-col>
            </el-row>
            <el-row class="m-size integral-rank"  v-for="(item,index) in integralData" :key="index" v-if="index>2">
              <el-col :span="3"><span  class="ranking">{{index+1}}</span></el-col>
              <el-col :span="8">{{item.name}}</el-col>
              <el-col :span="8">{{item.alias}}</el-col>
              <el-col :span="5"><i class="iconfont icon-jifen"></i>{{item.integral}}</el-col>
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
      rankType: 0,
      carouselSrc: [
        'https://p.qpic.cn/qqconadmin/0/5848e43d7b4f4c3898e46d1042bb414e/0',
        'https://p.qpic.cn/qqconadmin/0/3a981ad59d0a43b5898e66a4e097dc23/0?tp=webp',
        'https://p.qpic.cn/qqconadmin/0/d6d3a944badc4e7381c58b6f7da9b866/0?tp=webp',
        'https://p.qpic.cn/qqconadmin/0/73e6fd89840f4abbb3d4713782cec696/0?tp=webp'
      ],
      creditData: [
        {
          name: '詹同少女',
          img:
            'http://' +
            document.location.host +
            '/src/assets/main_images/guitar.gif',
          learnTime: '365',
          learnScore: '36'
        },
        {
          name: '詹同少女',
          img:
            'http://' +
            document.location.host +
            '/src/assets/main_images/guitar.gif',
          learnTime: '365',
          learnScore: '36'
        },
        {
          name: '詹同少女',
          img:
            'http://' +
            document.location.host +
            '/src/assets/main_images/guitar.gif',
          learnTime: '365',
          learnScore: '36'
        },
        {
          name: '詹同少女',
          img: '../assets/main_images/guitar.gif',
          learnTime: '365',
          learnScore: '36'
        },
        {
          name: '詹同少女',
          img: '../assets/main_images/guitar.gif',
          learnTime: '365',
          learnScore: '36'
        },
        {
          name: '詹同少女',
          img: '../assets/main_images/guitar.gif',
          learnTime: '365',
          learnScore: '36'
        },
        {
          name: '詹同少女',
          img: '../assets/main_images/guitar.gif',
          learnTime: '365',
          learnScore: '36'
        },
        {
          name: '詹同少女',
          img: '../assets/main_images/guitar.gif',
          learnTime: '365',
          learnScore: '36'
        },
        {
          name: '詹同少女',
          img: '../assets/main_images/guitar.gif',
          learnTime: '365',
          learnScore: '36'
        }
      ],
      integralData: [
        {
          name: '王啊平',
          alias: '导师',
          integral: '453',
          img:
            'http://' +
            document.location.host +
            '/src/assets/main_images/guitar.gif'
        },
        {
          name: '斯顿',
          alias: '导师',
          integral: '400',
          img:
            'http://' +
            document.location.host +
            '/src/assets/main_images/guitar.gif'
        },
        {
          name: '邬桑',
          alias: '导师',
          integral: '400',
          img:
            'http://' +
            document.location.host +
            '/src/assets/main_images/guitar.gif'
        },
        {
          name: '张三芬',
          alias: '大学士',
          integral: '365',
          img: ''
        },
        {
          name: '王菊花',
          alias: '大学士',
          integral: '256',
          img: ''
        },
        {
          name: '张沙',
          alias: '书生',
          integral: '202',
          img: ''
        },
        {
          name: '王禹',
          alias: '书生',
          integral: '201',
          img: ''
        },
        {
          name: '欧阳',
          alias: '书生',
          integral: '200',
          img: ''
        },
        {
          name: '李胜男',
          alias: '学童',
          integral: '182',
          img: ''
        },
        {
          name: '齐达内',
          alias: '学童',
          integral: '152',
          img: ''
        }
      ]
    }
  },
  methods: {
    rankTypeChange(index) {
      this.rankType = index
    }
  }
}
</script>
<style lang="scss">
.page-index {
  width: 100%;
  background-color: #ffffff;
  .b-blue {
    color: #4d50ee;
  }
  .tab-this {
    border-bottom: #4d50ee 4px solid;
    color: #4d50ee;
  }
  .b-blue-box {
    width: 90px;
    color: #4d50ee;
    display: block;
    padding: 8px 12px;
    border: #4d50ee 1px solid;
    font-size: 14px;
    text-align: center;
  }
  .b-blue-box:hover {
    cursor: pointer;
  }
  .p-two-nowarp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .min-gray {
    font-size: 12px;
    color: #666666;
  }
  .min-bolder {
    font-size: 12px;
    font-weight: 600;
  }
  .p-one-nowarp {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .m-size {
    font-size: 14px;
  }
  .h-size {
    font-size: 16px;
  }
  .b-size {
    font-size: 20px;
  }
  .box {
    width: 1200px;
    margin: auto;
    padding-top: 16px;
  }
  .banner {
    position: relative;
    .el-carousel {
      width: 100%;
      img {
        width: 1200px;
        height: 470px;
      }
      .el-carousel__indicators {
        left: 85%;
      }
    }
    .user-info {
      width: 560px;
      height: 80px;
      background-color: #ffffff;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 99;
      text-align: center;
      padding: 12px;
      span {
        display: inline-block;
        margin: 8px 8px 0 8px;
        font-size: 12px;
      }
      span {
        cursor: pointer;
      }
      .user-img {
        img {
          width: 30px;
          height: 30px;
          border-radius: 15px;
        }
        span {
          display: block;
          color: #333333;
        }
      }
      .el-col span:first-child {
        display: block;
        color: #666666;
      }
      i {
        border: #aaaaaa 1px solid;
        font-size: 12px;
      }
    }
  }
  .news-project {
    .el-col {
      padding: 12px;
    }
    .colum-1 {
      text-align: center;
      span {
        display: block;
        font-size: 12px;
        color: #666666;
        margin-top: 20px;
      }
    }
    .colum-1 span:first-child {
      font-size: 24px;
      font-weight: 600;
      color: #333333;
      margin-top: 30px;
    }
    .colum-1 span:last-child {
      margin: auto;
      margin-top: 20px;
      color: #4d50ee;
    }
    .colum-2 {
      img {
        width: 100%;
        height: 150px;
      }
      p {
        font-size: 18px;
        display: block;
        height: 50px;
        line-height: 25px;
        margin: 10px 0 0 0;
      }
      span {
        display: inline-block;
        margin-top: 10px;
      }
    }
    .colum-3 {
      img {
        width: 100px;
        height: 60px;
      }
      .summary {
        font-size: 14px;
        color: #666666;
        line-height: 20px;
        height: 60px;
      }
    }
  }
  .clearfix {
    *zoom: 1;
  }
  .recommend-learn {
    .p-title {
      font-size: 22px;
      margin-top: 0;
    }
    .el-col {
      padding: 16px;
    }
    .title {
      display: block;
      width: 100%;
      text-align: center;
      padding: 12px 0;
      border-bottom: #e2e2e2 4px solid;
      font-size: 26px;
      font-weight: 400;
      span {
        font-size: 18px;
        color: #4d50ee;
        font-weight: normal;
        display: block;
        float: right;
      }
      span:hover {
        cursor: pointer;
      }
    }
    .course {
      ul {
        padding: 0;
        margin: 0;
        li:hover {
          border: #e2e2e2 1px solid;
          box-shadow: 0px 0px 5px 2px #e2e2e2e2;
        }
        li {
          display: inline-block;
          padding: 6px;
          width: 272px;
          .course-img {
            position: relative;
            img {
              width: 260px;
              height: 160px;
            }
            i {
              display: block;
              font-size: 20px;
              height: 20px;
              width: 20px;
              background-color: rgba($color: #000000, $alpha: 0.7);
              position: absolute;
              bottom: 4px;
              left: 0;
              color: #ffffff;
            }
          }
          .rate {
            display: inline-block;
            float: right;
          }
        }
      }
    }
    .docs {
      ul {
        padding: 0;
        margin: 0;
        li {
          display: block;
          padding: 16px 0;
          border-bottom: #e2e2e2 1px dashed;
          .el-col {
            padding: 0;
          }
          .list-left {
            img {
              width: 50px;
              height: 50px;
            }
          }
          .list-middle {
            p {
              margin: 0 0 10px 0;
            }
          }
        }
      }
    }
  }
  .middle-banner {
    width: 1200px;
    height: 150px;
  }
  .leader-board {
    padding-bottom: 30px;
    .top-title {
      padding: 0 0 0 12px;
      border-bottom: #e2e2e2 1px solid;
      span {
        display: inline-block;
        padding: 12px;
      }
      .tab {
        float: right;
        padding-top: 17px;
      }
      .tab:hover {
        cursor: pointer;
      }
      .bg-red {
        float: right;
        background-color: #c51515;
        color: #ffffff;
        padding: 5px;
        font-size: 12px;
        margin-top: 15px;
      }
    }
    .ranking {
        display: block;
        width: 20px;
        height: 20px;
        background-color: #eeeeee;
        margin: auto;
        padding: 2px;
      }
    .table-title {
      border-bottom: #e2e2e2 1px solid;
    }
    .credit {
      height: 666px;
      border: #f2f2f2 1px solid;
      box-shadow: 0px 0px 5px 2px #f2f2f2;
      .el-row {
        padding: 12px;
        text-align: center;
        border-bottom: #e2e2e2 1px dashed;
      }
      .top-title {
        border-left: #4d50ee 4px solid;
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
      }
      .more {
        margin: auto;
        margin-top: 12px;
        margin-bottom: 12px;
      }
    }
    .integral {
      height: 666px;
      border: #f2f2f2 1px solid;
      box-shadow: 0px 0px 5px 2px #f2f2f2;
      margin-left: 16px;
      .el-row {
        padding: 12px;
        text-align: center;
        border-bottom: #e2e2e2 1px dashed;
      }
      .integral-rank{
          padding: 18px !important;
      }
      .top-title {
        border-left: #f59c17 4px solid;
      }
      .top-three{
        border-bottom: #e2e2e2 1px solid;
        padding-bottom: 0;
        img{
          width: 50px;
          height: 50px;
          border-radius: 25px;
          margin-top: 10px;
        }
        .big-img{
          width: 60px;
          height: 60px;
          border-radius: 30px;
          margin-top: 0;
        }
        span{
          display: block;
          margin: 10px 0;
        }
        .rank-one{
          width: 40px;
          height: 40px;
          background-color: #2a2dbb;
          margin: auto;
        }
        .rank-two{
          width: 40px;
          height: 30px;
          background-color: #2a2dbb;
          margin: auto;
          margin-top: 20px;
        }
        .rank-three{
          width: 40px;
          height: 20px;
          background-color: #8db4e0;
          margin: auto;
          margin-top: 30px;
        }
      }
      .icon-jifen{
        color: #2a2dbb;
      }
    }

    .m-top {
      margin-top: 15px;
    }
    .color-m-top {
      margin-top: 15px;
      background-color: #4d50ee !important;
      color: #ffffff;
    }
  }
}
</style>

