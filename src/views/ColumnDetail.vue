<template>
  <div style="width: 692px;padding: 20px 12px;" class="mx-auto d-flex align-items-center border-bottom mb-4">
    <img :src="info.avatar ? info.avatar : require('@/assets/logo.png')" class="rounded-circle d-block" style="width: 155px;height: 155px;">
    <div class="mx-4">
      <h3>{{info.title}}</h3>
      <p class="text-muted">{{info.description}}</p>
    </div>
  </div>
  <article-list :articles="articleLists"></article-list>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ArticleList from './ArticleList.vue'
import { GlobalDataProps } from '../store'
export default defineComponent({
  components: {
    ArticleList
  },
  setup () {
    const route = useRoute()
    const store = useStore<GlobalDataProps>()
    const info = computed(() => store.getters.getInfo(route))
    const articleLists = computed(() => store.getters.getArticles(route))
    return {
      info,
      articleLists
    }
  }
})
</script>

<style>
</style>
