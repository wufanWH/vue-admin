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
    meta: { title: '首页', index: 1, hasLeftBar: false },
    component: Layout,
    isFirst: true,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/index')
      }
    ]
  },
  {
    path: '/learning',
    name: 'learning',
    redirect: '/learning/all',
    meta: { title: '学习中心', index: 2, hasLeftBar: true },
    component: Layout,
    isFirst: true,
    children: [
      {
        path: 'all',
        name: 'all',
        component: () => import('@/views/learningCenter/index'),
        meta: { title: '概况', icon: 'table' }
      },
      {
        path: 'training',
        component: () => import('@/views/learningCenter/trainPlan/index'),
        meta: { title: '培训计划', icon: 'business', group: '成长' },
        children: [
          {
            path: '',
            name: 'training',
            component: () => import('@/views/learningCenter/trainPlan/training'),
            meta: { title: '培训计划' }
          },
          {
            path: 'planInfo',
            name: 'planInfo',
            component: () => import('@/views/learningCenter/trainPlan/planInfo'),
            meta: { title: '计划详情' }
          }
        ]
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
    meta: { title: '互动社区', index: 4, hasLeftBar: false },
    component: Layout,
    isFirst: true,
    children: [
      {
        path: '/',
        name: 'interactParty',
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
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/web/index'),
        meta: { title: '推荐管理', icon: 'tree', group: '社区' }
      },
      {
        path: 'group',
        name: 'group',
        component: () => import('@/views/web/index'),
        meta: { title: '小组管理', icon: 'tree' }
      },
      {
        path: 'theme',
        name: 'theme',
        component: () => import('@/views/web/index'),
        meta: { title: '话题管理', icon: 'tree' }
      },
      {
        path: 'integral',
        name: 'integral',
        component: () => import('@/views/web/index'),
        meta: { title: '积分管理', icon: 'tree', group: '积分' }
      },
      {
        path: 'reward',
        name: 'reward',
        component: () => import('@/views/web/index'),
        meta: { title: '奖品管理', icon: 'tree' }
      },
      {
        path: 'exchange',
        name: 'exchange',
        component: () => import('@/views/web/index'),
        meta: { title: '兑换订单', icon: 'tree' }
      },
      {
        path: 'rankTitle',
        name: 'rankTitle',
        component: () => import('@/views/web/index'),
        meta: { title: '等级头衔设置', icon: 'tree' }
      },
      {
        path: 'integralRule',
        name: 'integralRule',
        component: () => import('@/views/web/index'),
        meta: { title: '积分规则设置', icon: 'example' }
      }
    ]
  },
  {
    path: '/project',
    name: 'project',
    meta: { title: '项目管理', index: 6, hasLeftBar: true },
    component: Layout,
    isFirst: true,
    redirect: '/project/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/project/index'),
        meta: { title: '在线学习', icon: 'table', group: '项目' }
      },
      {
        path: 'offline',
        name: 'offline',
        component: () => import('@/views/project/index'),
        meta: { title: '线下培训', icon: 'table' }
      },
      {
        path: 'mixing',
        name: 'mixing',
        component: () => import('@/views/project/index'),
        meta: { title: '混合式培训', icon: 'table' }
      },
      {
        path: 'projectDisplay',
        name: 'projectDisplay',
        component: () => import('@/views/project/index'),
        meta: { title: '项目展示', icon: 'table' }
      },
      {
        path: 'arrangementExam',
        name: 'arrangementExam',
        component: () => import('@/views/project/index'),
        meta: { title: '安排考试', icon: 'table', group: '考试' }
      },
      {
        path: 'review',
        name: 'review',
        component: () => import('@/views/project/index'),
        meta: { title: '批阅中心', icon: 'table' }
      },
      {
        path: 'arrangeEvaluation',
        name: 'arrangeEvaluation',
        component: () => import('@/views/project/index'),
        meta: { title: '安排测评', icon: 'table', group: '测评' }
      },
      {
        path: 'examinationFile',
        name: 'examinationFile',
        component: () => import('@/views/project/index'),
        meta: { title: '考试档案', icon: 'table', group: '档案' }
      },
      {
        path: 'employeeProfile',
        name: 'employeeProfile',
        component: () => import('@/views/project/index'),
        meta: { title: '员工档案', icon: 'table' }
      }
    ]
  },
  {
    path: '/resource',
    name: 'resource',
    meta: { title: '资源管理', index: 7, hasLeftBar: true },
    component: Layout,
    redirect: '/resource/index',
    isFirst: true,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/resource/index'),
        meta: { title: '知识分类', icon: 'table' }
      },
      {
        path: 'knowledgeBase',
        name: 'knowledgeBase',
        component: () => import('@/views/resource/index'),
        meta: { title: '知识库', icon: 'table' }
      },
      {
        path: 'knowledgeTag',
        name: 'knowledgeTag',
        component: () => import('@/views/resource/index'),
        meta: { title: '知识标签', icon: 'table' }
      },
      {
        path: 'testPaper',
        name: 'testPaper',
        component: () => import('@/views/resource/index'),
        meta: { title: '试卷库', icon: 'table' }
      },
      {
        path: 'evaluationLibrary',
        name: 'evaluationLibrary',
        component: () => import('@/views/resource/index'),
        meta: { title: '测评库', icon: 'table' }
      },
      {
        path: 'professional',
        name: 'professional',
        component: () => import('@/views/resource/index'),
        meta: { title: '职业技能设置', icon: 'table' }
      },
      {
        path: 'lecturer ',
        name: 'lecturer',
        component: () => import('@/views/resource/index'),
        meta: { title: '讲师管理', icon: 'table' }
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/resource/index'),
        meta: { title: '推荐展示', icon: 'table' }
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: { title: '系统管理', index: 8, hasLeftBar: true },
    component: Layout,
    redirect: '/system/index',
    isFirst: true,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/system/index'),
        meta: { title: '组织架构', icon: 'table' }
      },
      {
        path: 'memberManagement',
        name: 'memberManagement',
        component: () => import('@/views/system/index'),
        meta: { title: '成员管理', icon: 'table' }
      },
      {
        path: 'positionManagement',
        name: 'positionManagement',
        component: () => import('@/views/system/index'),
        meta: { title: '职位管理', icon: 'table' }
      },
      {
        path: 'rolePermissions',
        name: 'rolePermissions',
        component: () => import('@/views/system/index'),
        meta: { title: '角色权限', icon: 'table' }
      },
      {
        path: 'userGroup',
        name: 'userGroup',
        component: () => import('@/views/system/index'),
        meta: { title: '用户组管理', icon: 'table' }
      },
      {
        path: 'creditSetting',
        name: 'creditSetting',
        component: () => import('@/views/system/index'),
        meta: { title: '学分设置', icon: 'table' }
      },
      {
        path: 'moduleControl',
        name: 'moduleControl',
        component: () => import('@/views/system/index'),
        meta: { title: '首页模块控制', icon: 'table' }
      },
      {
        path: 'bannerSet',
        name: 'bannerSet',
        component: () => import('@/views/system/index'),
        meta: { title: '网站banner设置', icon: 'table' }
      },
      {
        path: 'popWindow',
        name: 'popWindow',
        component: () => import('@/views/system/index'),
        meta: { title: '弹窗设置', icon: 'table' }
      }
    ]
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
