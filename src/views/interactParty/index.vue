<template>

    <el-row class="interact-party">
        <el-col :span="17">
            <div class="grid-content bg-purple">
                <el-row :gutter="16">
                    <el-col :span="16">
                        <div class="grid-content bg-purple">
                            <el-carousel height="300px">
                                <el-carousel-item v-for="item in carouselSrc" :key="item">
                                    <img :src="item" alt="">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple img-banner-center">
                            <img src="https://p.qpic.cn/qqconadmin/0/5848e43d7b4f4c3898e46d1042bb414e/0" alt="">
                            <img src="https://p.qpic.cn/qqconadmin/0/5848e43d7b4f4c3898e46d1042bb414e/0" alt="">
                        </div>
                    </el-col>
                </el-row>
                <div class="interact-content">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">热门话题</el-menu-item>
                        <el-menu-item index="2">最新话题</el-menu-item>
                        <el-menu-item index="3">我的小组</el-menu-item>
                    </el-menu>
                    <div class="line"></div>
                    <div class="topic-box" v-if="activeIndex==='1'">
                        <ul class="topic-ul-content">
                            <li>
                                <div class="content-left fl">
                                    <img src="../../assets/main_images/guitar.gif">
                                </div>
                                <div class="content-right fr">
                                    <span class="topic-title">心理咨询配合塔罗占卜，学以致用在生活中</span>
                                    <div class="content">
                                        <p>生活中很多人大道理都明白，可是当情绪来时就不知道怎么去客观的看问题，如何去控制自己的情绪，如何把心理学放在生活中去运用呢，今天就把你的疑难问题说出来，我以十年的心理实际研究案例结合塔罗占卜给你解答，让你看到人生更多的角度和处理问题的方法。</p>
                                    </div>
                                    <span class="bottom-span">作者：wwwe</span>
                                    <span class="bottom-span">2018-07-13 11:29</span>
                                    <span class="last-right fr">
                                        <i class="iconfont icon-zan"> 2</i>
                                        <i class="iconfont icon-iconfontpinglun"> 9</i>
                                        <i class="el-icon-view"> 18</i>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div class="content-left fl">
                                    <img src="../../assets/main_images/guitar.gif">
                                </div>
                                <div class="content-right fr">
                                    <span class="topic-title">心理咨询配合塔罗占卜，学以致用在生活中</span>
                                    <div class="content">
                                        <p>生活中很多人大道理都明白，可是当情绪来时就不知道怎么去客观的看问题，如何去控制自己的情绪，如何把心理学放在生活中去运用呢，今天就把你的疑难问题说出来，我以十年的心理实际研究案例结合塔罗占卜给你解答，让你看到人生更多的角度和处理问题的方法。</p>
                                    </div>
                                    <span class="bottom-span">作者：wwwe</span>
                                    <span class="bottom-span">2018-07-13 11:29</span>
                                    <span class="last-right fr">
                                        <i class="iconfont icon-zan"> 2</i>
                                        <i class="iconfont icon-iconfontpinglun"> 9</i>
                                        <i class="el-icon-view"> 18</i>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div class="content-left fl">
                                    <img src="../../assets/main_images/guitar.gif">
                                </div>
                                <div class="content-right fr">
                                    <span class="topic-title">心理咨询配合塔罗占卜，学以致用在生活中</span>
                                    <div class="content">
                                        <p>生活中很多人大道理都明白，可是当情绪来时就不知道怎么去客观的看问题，如何去控制自己的情绪，如何把心理学放在生活中去运用呢，今天就把你的疑难问题说出来，我以十年的心理实际研究案例结合塔罗占卜给你解答，让你看到人生更多的角度和处理问题的方法。</p>
                                    </div>
                                    <span class="bottom-span">作者：wwwe</span>
                                    <span class="bottom-span">2018-07-13 11:29</span>
                                    <span class="last-right fr">
                                        <i class="iconfont icon-zan"> 2</i>
                                        <i class="iconfont icon-iconfontpinglun"> 9</i>
                                        <i class="el-icon-view"> 18</i>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div class="content-left fl">
                                    <img src="../../assets/main_images/guitar.gif">
                                </div>
                                <div class="content-right fr">
                                    <span class="topic-title">心理咨询配合塔罗占卜，学以致用在生活中</span>
                                    <div class="content">
                                        <p>生活中很多人大道理都明白，可是当情绪来时就不知道怎么去客观的看问题，如何去控制自己的情绪，如何把心理学放在生活中去运用呢，今天就把你的疑难问题说出来，我以十年的心理实际研究案例结合塔罗占卜给你解答，让你看到人生更多的角度和处理问题的方法。</p>
                                    </div>
                                    <span class="bottom-span">作者：wwwe</span>
                                    <span class="bottom-span">2018-07-13 11:29</span>
                                    <span class="last-right fr">
                                        <i class="iconfont icon-zan"> 2</i>
                                        <i class="iconfont icon-iconfontpinglun"> 9</i>
                                        <i class="el-icon-view"> 18</i>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div class="content-left fl">
                                    <img src="../../assets/main_images/guitar.gif">
                                </div>
                                <div class="content-right fr">
                                    <span class="topic-title">心理咨询配合塔罗占卜，学以致用在生活中</span>
                                    <div class="content">
                                        <p>生活中很多人大道理都明白，可是当情绪来时就不知道怎么去客观的看问题，如何去控制自己的情绪，如何把心理学放在生活中去运用呢，今天就把你的疑难问题说出来，我以十年的心理实际研究案例结合塔罗占卜给你解答，让你看到人生更多的角度和处理问题的方法。</p>
                                    </div>
                                    <span class="bottom-span">作者：wwwe</span>
                                    <span class="bottom-span">2018-07-13 11:29</span>
                                    <span class="last-right fr">
                                        <i class="iconfont icon-zan"> 2</i>
                                        <i class="iconfont icon-iconfontpinglun"> 9</i>
                                        <i class="el-icon-view"> 18</i>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="prev, pager, next" :total="40">
                        </el-pagination>
                    </div>
                    <div class="topic-box" v-if="activeIndex==='2'">
                        最新话题
                    </div>
                    <div class="topic-box" v-if="activeIndex==='3'">
                        我的小组
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="7">
            <div class="grid-content bg-purple right-party">
                <div class="news-box">
                    <span>最新</span>
                    <img src='https://p.qpic.cn/qqconadmin/0/73e6fd89840f4abbb3d4713782cec696/0?tp=webp' alt="">
                    <div class="hot-question">
                        <p>话题一：如果提高业务办理效率，减少投诉？</p>
                        <p>话题二：到底要不要加入初创公司 ？</p>
                    </div>
                </div>
                <div class="interact-user-info">
                    <span class="my-dynamic">我的动态</span>
                    <ul>
                        <li>
                            <span>0</span>
                            <span>话题</span>
                        </li>
                        <li>
                            <span>0</span>
                            <span>回复</span>
                        </li>
                        <li>
                            <span>0</span>
                            <span>小组</span>
                        </li>
                    </ul>
                </div>
                <div class="hot-groups">
                    <span class="hot-grops-title">热门小组</span>
                    <ul>
                        <li>
                            <img class="fl" src="../../assets/main_images/guitar.gif">
                            <span>宏观、行业宏观、行业</span>
                            <span><i class="el-icon-plus"></i>加入小组</span>
                        </li>
                        <li>
                            <img class="fl" src="../../assets/main_images/guitar.gif">
                            <span>宏观、行业宏观、行业</span>
                            <span><i class="el-icon-plus"></i>加入小组</span>
                        </li>
                         <li>
                            <img class="fl" src="../../assets/main_images/guitar.gif">
                            <span>宏观、行业宏观、行业</span>
                            <span><i class="el-icon-plus"></i>加入小组</span>
                        </li>
                         <li>
                            <img class="fl" src="../../assets/main_images/guitar.gif">
                            <span>宏观、行业宏观、行业</span>
                            <span><i class="el-icon-plus"></i>加入小组</span>
                        </li>
                         <li>
                            <img class="fl" src="../../assets/main_images/guitar.gif">
                            <span>宏观、行业宏观、行业</span>
                            <span><i class="el-icon-plus"></i>加入小组</span>
                        </li>
                         <li>
                            <img class="fl" src="../../assets/main_images/guitar.gif">
                            <span>宏观、行业宏观、行业</span>
                            <span><i class="el-icon-plus"></i>加入小组</span>
                        </li>
                         <li>
                            <img class="fl" src="../../assets/main_images/guitar.gif">
                            <span>宏观、行业宏观、行业</span>
                            <span><i class="el-icon-plus"></i>加入小组</span>
                        </li>
                         <li>
                            <img class="fl" src="../../assets/main_images/guitar.gif">
                            <span>宏观、行业宏观、行业</span>
                            <span><i class="el-icon-plus"></i>加入小组</span>
                        </li>
                    </ul>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
  data() {
    return {
      carouselSrc: [
        'https://p.qpic.cn/qqconadmin/0/5848e43d7b4f4c3898e46d1042bb414e/0',
        'https://p.qpic.cn/qqconadmin/0/3a981ad59d0a43b5898e66a4e097dc23/0?tp=webp',
        'https://p.qpic.cn/qqconadmin/0/d6d3a944badc4e7381c58b6f7da9b866/0?tp=webp',
        'https://p.qpic.cn/qqconadmin/0/73e6fd89840f4abbb3d4713782cec696/0?tp=webp'
      ],
      activeIndex: '1',
      currentPage: 1
    }
  },
  methods: {
    handleSelect: function(key) {
      console.log(key)
      this.activeIndex = key
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
.clearfix {
  *zoom: 1;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.tl {
  text-align: left
}
.tr {
  text-align: right;
}
.tc {
  text-align: center;
}
.interact-party {
  width: 1200px;
  margin: auto;
  margin-top: 16px;
  .el-carousel{
      img{
          width: 100%;
          height: 300px;
      }
  }
  .img-banner-center{
    img{
        width: 100%;
        height: 140px;
    }
    img:last-child{
        margin-top: 16px;
    }
  }
  .interact-content{
      margin-top: 16px;
      background-color: #ffffff;
      width: 100%;
      .topic-box{
        padding: 16px;
        .topic-ul-content{
            margin: 0;
            padding: 0;
            li:hover{
                cursor: pointer;
                box-shadow: 0px 0px 6px 6px #e2e2e2e2;
            }
            li{
                display: inline-block;
                .content-left{
                    margin-top: 18px;
                    margin-left: 10px;
                    width: 70px;
                    img{
                        width: 60px;
                        height: 60px;
                        border-radius: 30px;
                    }
                }
                .content-right{
                    margin-top: 18px;
                    width: 718px;
                    padding-right: 12px;
                    .topic-title{
                        font-size: 20px;
                        color: #666666;
                    }
                    .content{
                        margin-top: 14px;
                        font-size: 14px;
                        color: #666666;
                        line-height: 20px;
                    }
                    .last-right{
                        display: inline-block;
                        font-size: 12px;
                        color: #999999;
                        margin-bottom: 18px;
                        i{
                            font-size: 12px;
                            margin-right: 12px;
                        }
                    }
                    .bottom-span{
                        font-size:12px;
                        color: #999999;
                        margin-right:12px;
                    }
                }
            }
        }
        .el-pagination{
            text-align: center;
        }
      }
  }
  .right-party{
    margin-left: 16px;
    .news-box{
        padding: 16px;
        background-color: rgb(79, 101, 143);
        height: 300px;
        color: #ffffff;
        font-size: 14px;
        span{
            display: block;
            margin-bottom: 20px;
            padding-left: 16px;
            font-size: 16px;
            border-left: #ffffff 4px solid;
        }
        img{
            width: 100%;
            height: 150px;
        }
        .hot-question{
            margin-top: 20px;
            line-height: 20px;
            p{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    .interact-user-info{
      margin-top: 19px;
      background-color: #ffffff;
      padding: 16px;
    .my-dynamic{
        display: block;
        margin-bottom: 20px;
        padding-left: 16px;
        font-size: 16px;
        border-left: #5e80ca 4px solid;
        color: #5e80ca;
    }
    ul{
        padding: 0;
        li{
            text-align: center;
            width: 95px;
            display: inline-block;
            span{
                display: block;
                color: #666666;
            }
        }
    }
  }
  .hot-groups{
    margin-top: 19px;
    background-color: #ffffff;
    padding: 16px;
    .hot-grops-title{
        display: inline-block;
        padding-bottom: 16px;
        font-size: 16px;
        border-bottom: #5e80ca 2px solid;
        color: #5e80ca;
    }
    ul{
        margin: 0;
        padding: 0;
        border-top: #f2f2f2 1px solid;
        li{
            margin-top: 18px;
            display: inline-block;
            width: 140px;
            img{
                width: 50px;
                height: 50px;;
            }
            span{
                width: 90px;
                font-size: 14px;
                padding-left: 6px;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            span:last-child{
                margin-top: 8px;
                color: #5e80ca;
                font-size: 12px;
                i{
                    margin-right: 6px;
                }
            }
        }
    }
  }
  }
}

</style>


