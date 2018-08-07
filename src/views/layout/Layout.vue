<template>
  <div class="app-wrapper" :class="classObj">
    <div class="nav-bar">
      <div class="logo"></div>
      <div class="top-nav">
        <el-menu :default-active="$route.matched[0].path" class="el-menu-demo" mode="horizontal" background-color="#3453a5" text-color="#ffffff" active-text-color="#d87813">
          <router-link v-for="(route,index) in routes" :to="route.path" :key="index">
            <el-menu-item :index="route.path" :key="route.name" :base-path="route.path" v-if="route.isFirst">{{route.meta.title}}</el-menu-item>
          </router-link>
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
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img class="user-avatar" :src="img_user">
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu class="user-dropdown" slot="dropdown">
            <router-link class="inlineBlock" to="/">
              <el-dropdown-item>
                Home
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span @click="logout" style="display:block;">LogOut</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
      activeIndex: '1',
      img_user
    }
  },
  computed: {
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
  methods: {
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
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
</style>
