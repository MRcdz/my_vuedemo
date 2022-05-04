<template>
  <!-- Article list -->
  <div style="width: 692px;margin: auto;padding: 0 12px;">
    <div class="card mb-3 shadow-sm" v-for="list in articles" :key="list.id">
      <div class="card-body">
        <h4 class="card-title mb-3"><a href="#" class="text-decoration-none text-dark article_title">{{list.title}}</a></h4>
        <div class="d-flex align-items-center">
          <img :src="list.image" v-show="list.image" style="width: 200px;height: 110px;margin-right: 20px;">
          <p class="card-text text-muted">{{list.content}}</p>
        </div>
        <p class="card-text mt-3"><small class="text-muted">{{list.createdAt}}</small></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PostProps } from '../testData'
export default defineComponent({
  props: {
    articles: Array as PropType<PostProps[]>
  }
})
</script>

<style>
.article_title:hover {
  color: #306DF4!important;
}
</style>
