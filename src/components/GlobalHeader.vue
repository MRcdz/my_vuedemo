<template>
  <nav class="navbar w-100 navbar-dark bg-primary text-white">
    <div class="container-fluid w-75 py-2">
      <!-- <a class="navbar-brand" href="https://www.baidu.com">者也专栏</a> -->
      <router-link class="navbar-brand" to="/">高仿项目</router-link>
      <!-- 未登录情况 -->
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/login" class="btn btn-outline-light">登陆</router-link>
        </li>
        <li class="list-inline-item">
          <router-link to="/signup" class="btn btn-outline-light">注册</router-link>
        </li>
      </ul>
      <!-- 登陆成功后 -->
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <DropDown :title="`你好 ${user.name}`">
            <DropDownItem @click="create">新建文章</DropDownItem>
            <DropDownItem disabled>编辑资料</DropDownItem>
            <DropDownItem>退出登录</DropDownItem>
          </DropDown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
// 导入vue的api
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { UserProps } from '@/testData'
// 导入子组件
import DropDown from './DropDown.vue'
// 导入dropdownitem 子组件
import DropDownItem from './DropDownItem.vue'
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    DropDown,
    DropDownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup () {
    const router = useRouter()
    const create = () => router.push('/create')
    return {
      create
    }
  }
})
</script>

<style>
</style>
