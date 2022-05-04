<template>
  <!-- section -->
  <section class="d-flex flex-column align-items-center" style="margin-top: 60px;margin-bottom: 50px;">
    <div style="text-align: center;">
      <img src="http://zhihu.vikingship.xyz/img/callout.10de9efe.svg" style="width: 258px;height: 222px;">
      <h2 class="mb-3">Write as you please and express yourself freely</h2>
      <button type="button" class="btn btn-primary" @click="write">Start Write</button>
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
