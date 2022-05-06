<template>
  <!-- section -->
  <section class="d-flex flex-column align-items-center" style="margin-top: 60px;margin-bottom: 50px;">
    <div style="text-align: center;">
      <img src="../assets/1.jpg" style="width: 258px;height: 222px;margin-bottom: 20px;border-radius: 10px;">
      <h2 class="mb-3">随心发表文章，时刻关注热榜！</h2>
      <button type="button" class="btn btn-primary" @click="write">立即创作</button>
    </div>
  </section>
  <!-- column -->
  <column-list :list="lists"></column-list>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ColumnList from '@/components/ColumnList.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { GlobalDataProps } from '../store'
export default defineComponent({
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const lists = computed(() => store.state.columns)
    const router = useRouter()
    const write = () => {
      router.push('/create')
    }
    return {
      lists,
      write
    }
  }
})
</script>

<style>
</style>
