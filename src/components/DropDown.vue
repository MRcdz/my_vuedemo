<template>
  <div class="dropdown">
    <a class="btn btn-sm btn-outline-light dropdown-toggle my-2" data-bs-toggle="dropdown">
      {{title}}
    </a>
    <ul class="dropdown-menu">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 导入 hooks 函数
// import useClickOutside from '@/hooks/useClickOutside'
export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style>
</style>
