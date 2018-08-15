<template>
  <div class="app-wrapper" :class="classObj">
    <div class="nav-bar">
      <div class="logo"></div>
      <div class="top-nav">
        <el-menu :default-active="nowpath" class="el-menu-demo" mode="horizontal" router background-color="#3453a5" text-color="#ffffff" active-text-color="#d87813">
          <el-menu-item v-for="route in routes" :index="route.path" :key="route.name" :base-path="route.path" v-if="route.isFirst">{{route.meta.title}}</el-menu-item>
        </el-menu>
      </div>
      <div class="info">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">
          <svg-icon icon-class="business"></svg-icon>我参与项目</el-button>
        <el-badge :value="100" :max="99" class="item">
          <el-button type="primary">
            <svg-icon icon-class="message"></svg-icon>消息</el-button>
        </el-badge>
        <div class="avatar-container">
          <!-- <el-dropdown class="avatar-container" trigger="click"> -->
          <div class="avatar-wrapper" @click="openUserInfo">
            <img class="user-avatar" :src="img_user">
            <i class="el-icon-caret-bottom"></i>
          </div>
          <!-- <el-dropdown-menu class="user-dropdown" slot="dropdown">
            <router-link class="inlineBlock" to="/">
              <el-dropdown-item>
                Home
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span @click="logout" style="display:block;">LogOut</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>-->
        </div>
      </div>
      <div class="user-info-center" v-show="showUserInfo">
        <div class="top">
          <el-row>
            <el-col :span="6" class="close">
              <i class="el-icon-close" @click="openUserInfo"></i>
            </el-col>
            <el-col :span="12"><img :src="img_user" alt=""></el-col>
            <el-col :span="6" class="text-right">
              <span class="login-out" @click="loginOut">退出登录</span>
            </el-col>
          </el-row>
          <p>TATALUOTE</p>
          <el-button round>知识收藏</el-button>
          <el-button round>账号设置</el-button>
        </div>
        <div class="center">
          <el-row class="info">
            <el-col :span="8" class="border-r">
              <span class="l-size c-red">326</span>
              <span>今日学分</span>
            </el-col>
            <el-col :span="8" class="border-r">
              <span class="l-size">326</span>
              <span>本月学分</span>
            </el-col>
            <el-col :span="8">
              <span class="l-size">326</span>
              <span>本年学分</span>
            </el-col>
          </el-row>
          <el-row class="info">
            <el-col :span="8" class="border-r">
              <span class="l-size c-red">2</span>
              <span>今日积分</span>
            </el-col>
            <el-col :span="8">
              <span class="l-size">326</span>
              <span>我的总积分</span>
            </el-col>
          </el-row>
          <el-row class="integral-steps">
            <el-col :span="5">
              <i class="el-icon-star-on">
                <span>3</span>
              </i>
              <span class="min-size">高中生</span>
            </el-col>
            <el-col :span="12">
              <p class="min-size">距离下一等级还差
                <span class="c-red">13</span> 分</p>
              <el-progress :show-text="false" :stroke-width="10" :percentage="80" status="success"></el-progress>
            </el-col>
            <el-col :span="5">
              <i class="el-icon-star-on">
                <span>4</span>
              </i>
              <span class="min-size">大学生</span>
            </el-col>
          </el-row>
        </div>
        <div class="menu">
          <div class="menu-item">
            <span class="menu-title">学习</span>
            <span>我的笔记（0）</span>
            <span>学习知识（0）</span>
          </div>
          <div class="menu-item">
            <span class="menu-title">我参与</span>
            <span>我参与的考核（0）</span>
            <span>我参与的投票（0）</span>
            <span>我参与的测评（0）</span>
          </div>
          <div class="menu-item">
            <span class="menu-title">社区</span>
            <span>我的小组</span>
            <span>我的帖子</span>
          </div>
          <div class="menu-item last-item">
            <span class="menu-title">积分</span>
            <span>获取记录</span>
            <span>兑换记录</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-container" v-if="hasLeftBar"></sidebar>
    <div class="main-container" :class="{ full:!hasLeftBar,shin: isOpened&&hasLeftBar,wid:!isOpened&&hasLeftBar }">
      <navbar v-if="hasLeftBar"></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import { Navbar, Sidebar, AppMain } from './components'
import SidebarItem from '@/views/layout/components/Sidebar/SidebarItem'
import ResizeMixin from './mixin/ResizeHandler'
import img_user from '@/assets/main_images/guitar.gif'
export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    SidebarItem
  },
  mixins: [ResizeMixin],
  data() {
    return {
      showUserInfo: false,
      activeIndex: '1',
      img_user
    }
  },
  computed: {
    nowpath() {
      var path = ''
      if (this.$route.matched[0].path === '') {
        path = '/'
      } else {
        path = this.$route.matched[0].path
      }
      return path
    },
    isOpened() {
      return this.$store.state.app.sidebar.opened
    },
    sidebar() {
      return this.$store.state.app.sidebar
    },
    hasLeftBar() {
      return this.sidebar.hasThis
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
    routes() {
      return this.$router.options.routes
    }
  },
  mounted() {
    console.log(this.$router)
    console.log(this.$route)
  },
  created() {
    let user_info
    try {
      user_info = JSON.parse(sessionStorage.getItem('userInfo'))
      if (user_info.username) {
        console.log('user_info', user_info)
      } else {
        this.$router.push({ path: '/login' })
      }
    } catch (error) {
      this.$router.push({ path: '/login' })
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    },
    // logout() {
    //   this.$store.dispatch('LogOut').then(() => {
    //     location.reload() // 为了重新实例化vue-router对象 避免bug
    //   })
    // },
    loginOut() {
      sessionStorage.removeItem('userInfo')
      this.$router.push({ path: '/login' })
    },
    openUserInfo() {
      if (this.showUserInfo) {
        this.showUserInfo = false
      } else {
        this.showUserInfo = true
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import 'src/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.text-right {
  text-align: center;
}
.c-red {
  color: #ee5108 !important;
}
.min-size {
  font-size: 12px;
  color: #aaaaaa;
}
.user-info-center {
  width: 320px;
  background-color: #ffffff;
  position: absolute;
  top: 61px;
  right: 0px;
  z-index: 999;
  box-shadow: -2px 2px 5px #e2e2e2e2;
  .top {
    text-align: center;
    padding: 16px;
    border-bottom: #e2e2e2 1px solid;
    .close {
      text-align: left;
    }
    img {
      height: 60px;
      width: 60px;
      border-radius: 30px;
    }
    .login-out {
      font-size: 12px;
      color: #3c6bec;
    }
    .login-out {
      cursor: pointer;
    }
    p {
      font-weight: 600;
    }
    .el-button {
      border: #1242c7 2px solid;
      color: #1242c7;
    }
  }
  .center {
    text-align: center;
    padding: 0 16px;
    border-bottom: #e2e2e2 1px solid;
    .el-row {
      margin: 0 16px;
      border-bottom: #e2e2e2 1px dashed;
    }
    .el-col {
      margin: 16px 0;
    }
    .border-r {
      border-right: #e2e2e2 1px solid;
    }
    span {
      display: block;
      font-size: 1px;
      color: #aaaaaa;
      padding: 8px;
    }
    .l-size {
      font-size: 20px;
      color: #666666;
    }
    .integral-steps {
      border-bottom: #ffffff 0px solid;
      .el-icon-star-on {
        position: relative;
        width: 30px;
        height: 30px;
        span {
          padding: 0;
          margin: 0;
          color: #ffffff;
          position: absolute;
          top: 11px;
          left: 11px;
          font-size: 12px;
        }
      }
      .el-icon-star-on:before {
        font-size: 30px;
        color: #9da4cc;
      }
    }
    p {
      span {
        display: inline;
        padding: 0;
        margin: 0;
      }
    }
  }
  .menu {
    padding: 16px 16px 0 16px;
    .menu-item {
      border-bottom: #e2e2e2 1px solid;
      span {
        display: block;
        margin: 16px;
        font-size: 14px;
        color: #666666;
        padding-left: 10px;
      }
      span:hover {
        cursor: pointer;
      }
      .menu-title {
        border-left: #1242c7 4px solid;
      }
    }
    .last-item {
      border-bottom: #ffffff 0px solid;
    }
  }
}
</style>
