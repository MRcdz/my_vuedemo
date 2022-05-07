<template>
  <div class="d-flex flex-column justify-content-between">
    <!-- header 头部 -->
    <global-header :user="currentUser"/>
    <!-- router-view -->
    <router-view></router-view>
    <!-- footer 底部 -->
    <global-footer></global-footer>
  </div>
</template>

<script lang="ts">
// 导入vue composition api
import { defineComponent, computed } from 'vue'
// 导入子组件
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'
// 导入 bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { useStore } from 'vuex'
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  },
  setup () {
    // 头部用户登陆验证
    const store = useStore()
    const currentUser = computed(() => store.state.user)
    return {
      currentUser
    }
  }
})
</script>

<style>
html,body {
  height: 100%;
}
#app {
  height: 100%;
}
.isRedBorder {
  border-color: rgba(255, 0, 0, .5)!important;
  box-shadow: 0px 0px 0px 5px rgba(255, 0, 0, .2)!important;
}
.btn {
  box-shadow: none!important;
}
</style>
