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
      path: '/',
      name: 'home',
      component: HomeShow
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn,
      meta: {
        redirectAlreadyLogin: true
      }
    },
    {
      path: '/column',
      redirect: '/column/1'
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail
    },
    {
      path: '/create',
      name: 'create',
      component: CreateArticle,
      meta: {
        title: '需要输入密码',
        requireLogin: true
      }
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
