import { createRouter, createWebHistory } from 'vue-router'
import ColumnDetail from '@/views/ColumnDetail.vue'
import HomeShow from '@/views/HomeShow.vue'
import LogIn from '@/views/LogIn.vue'
import CreateArticle from '@/views/CreateArticle.vue'
import store from './store'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      // 根路径
      path: '/',
      name: 'home',
      component: HomeShow
    },
    {
      // 登录路由
      path: '/login',
      name: 'login',
      component: LogIn,
      meta: {
        redirectAlreadyLogin: true
      }
    },
    {
      // 默认列表1
      path: '/column',
      redirect: '/column/1'
    },
    {
      // 列表路由
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail
    },
    {
      // 创建文章路由
      path: '/create',
      name: 'create',
      component: CreateArticle,
      meta: {
        title: '需要输入密码',
        requireLogin: true
      }
    },
    {
      // 注册页面
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUp.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!store.state.user.isLogin && to.meta.requireLogin) {
    // 未登录，跳转到登录页面
    next({ name: 'login' })
  } else if (store.state.user.isLogin && to.meta.redirectAlreadyLogin) {
    // 已经登录的情况下
    next('/')
  } else {
    next()
  }
})

export default router
