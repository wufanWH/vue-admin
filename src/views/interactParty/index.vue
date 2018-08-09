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
@import '../../styles/interactParty.scss';
</style>


