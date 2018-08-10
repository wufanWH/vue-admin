import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/findPwd',
    component: () => import('@/views/login/findPassword'),
    hidden: true
  },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    name: '/',
    meta: { title: '首页', index: 1, hasLeftBar: false },
    component: Layout,
    isFirst: true
  },
  {
    path: '/learning',
    name: 'learning',
    meta: { title: '学习中心', index: 2, hasLeftBar: true },
    component: Layout,
    isFirst: true,
    children: [
      {
        path: '',
        name: 'all',
        component: () => import('@/views/learningCenter/index'),
        meta: { title: '概况', icon: 'table' }
      },
      {
        path: 'training',
        name: 'training',
        component: () => import('@/views/learningCenter/index'),
        meta: { title: '培训计划', icon: 'business', group: '成长' }
      },
      {
        path: 'skill',
        name: 'skill',
        component: () => import('@/views/learningCenter/index'),
        meta: { title: '职位技能提升', icon: 'skillup' }
      },
      {
        path: 'assessment',
        name: 'assessment',
        component: () => import('@/views/learningCenter/index'),
        meta: { title: '考核室', icon: 'form' }
      },
      {
        path: 'evaluation',
        name: 'evaluation',
        component: () => import('@/views/learningCenter/index'),
        meta: { title: '测评室', icon: 'form' }
      },
      {
        path: 'myProject',
        name: 'myProject',
        component: () => import('@/views/learningCenter/index'),
        meta: { title: '我参与的项目', icon: 'nested', group: '我参与' }
      },
      {
        path: 'myAssessment',
        name: 'myAssessment',
        component: () => import('@/views/learningCenter/index'),
        meta: { title: '我参与的考核', icon: 'form' }
      },
      {
        path: 'myEvaluation',
        name: 'myEvaluation',
        component: () => import('@/views/learningCenter/index'),
        meta: { title: '我参与的测评', icon: 'form' }
      }
    ]
  },
  {
    path: '/knowSquare',
    name: 'knowSquare',
    component: Layout,
    redirect: '/knowSquare/all',
    meta: { title: '知识广场', index: 3, hasLeftBar: true },
    isFirst: true,
    children: [
      {
        path: 'all',
        name: 'all',
        component: () => import('@/views/konwSquare/index'),
        meta: { title: '全部知识', icon: 'table' }
      },
      {
        path: 'expert',
        name: 'expert',
        component: () => import('@/views/konwSquare/index'),
        meta: { title: '讲师堂', icon: 'tree' }
      }
    ]
  },
  {
    path: '/interactParty',
    name: 'interactParty',
    meta: { title: '互动社区', index: 4, hasLeftBar: false },
    component: Layout,
    isFirst: true,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/interactParty/index')
      }
    ]
  },
  {
    path: '/web',
    name: 'web',
    meta: { title: '网站运营', index: 5, hasLeftBar: true },
    component: Layout,
    redirect: '/web/index',
    isFirst: true,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/web/index'),
        meta: { title: '概况', icon: 'table' }
      },
      {
        path: 'dataStatic',
        name: 'dataStatic',
        component: () => import('@/views/web/index'),
        meta: { title: '数据统计', icon: 'table', group: '数据' }
      },
      {
        path: 'learning',
        name: 'learning',
        component: () => import('@/views/web/index'),
        meta: { title: '公告设置', icon: 'tree', group: '学习' }
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('@/views/web/index'),
        meta: { title: '评论管理', icon: 'tree', group: '广场' }
      },
      {
        path: 'expert',
        name: 'expert',
        component: () => import('@/views/web/index'),
        meta: { title: '专家管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/project',
    name: 'project',
    meta: { title: '项目管理', index: 6, hasLeftBar: true },
    component: Layout,
    isFirst: true
  },
  {
    path: '/resource',
    name: 'resource',
    meta: { title: '资源管理', index: 7, hasLeftBar: true },
    component: Layout,
    isFirst: true
  },
  {
    path: '/system',
    name: 'system',
    meta: { title: '系统管理', index: 8, hasLeftBar: true },
    component: Layout,
    isFirst: true
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'nested',
    meta: {
      title: 'nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'menu1',
        meta: { title: 'menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'menu1-1',
            meta: { title: 'menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'menu1-2',
            meta: { title: 'menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'menu1-2-1',
                meta: { title: 'menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'menu1-2-2',
                meta: { title: 'menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'menu1-3',
            meta: { title: 'menu1-3' }
          }
        ]
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
