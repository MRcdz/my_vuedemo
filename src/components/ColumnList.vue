<template>
  <div class="container">
    <div class="row my-3">
      <h3 class="text-center mb-3">专栏详情</h3>
      <div v-for="column in columnList" :key="column.id" class="col-4">
        <div class="card mb-4 shadow-sm">
          <div class="card-body text-center">
            <img :src="column.avatar" class="rounded-circle my-2 border border-light img" :alt="column.title">
            <h5 class="card-title name">{{column.title}}</h5>
            <p class="card-text text-muted desc">{{column.description}}</p>
            <router-link :to="{name: 'column', params: {id: column.id}}" class="btn btn-outline-primary">进入专栏</router-link>
          </div>
        </div>
      </div>
      <div class="text-center mt-3 mb-4"><button type="button" class="btn btn-outline-primary load_more">Loading More</button></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { ColumnProps } from '@/testData'
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        // 发现不存在 avatar 地址为默认图片
        if (!column.avatar) {
          column.avatar = require('@/assets/logo.png')
        }
        // 返回整个 column
        return column
      })
    })
    // setup 最后需要返回 columnList
    return {
      columnList
    }
  }
})
</script>

<style>
.img {
  width: 49px;
  height: 49px;
}
.no_wrap {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desc {
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.enter_column {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.load_more {
  width: 25%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
