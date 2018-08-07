<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu mode="vertical" :show-timeout="200" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="$route.matched[0].path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      var routes = this.$router.options.routes
      var childrens = []
      for (var i = 0; i < routes.length; i++) {
        if (
          routes[i].path === this.$route.matched[0].path &&
          this.$route.matched[0].meta.hasLeftBar
        ) {
          childrens = routes[i].children
          break
        }
      }
      return childrens
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
