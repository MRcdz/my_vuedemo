<template>
  <div class="dropdown" ref="dropdownref">
    <a class="btn btn-sm btn-outline-light dropdown-toggle my-2" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" @click.prevent="toggleOpen">
      {{title}}
    </a>
    <ul class="dropdown-menu" style="display: block;" v-show="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
// 导入 hooks 函数
import useClickOutside from '@/hooks/useClickOutside'
export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    // 定义变量、方法控制下拉菜单隐藏和显示
    const isOpen = ref(false)
    const dropdownref = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    // hooks
    const isClickOutside = useClickOutside(dropdownref)
    watch([isClickOutside], () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })
    // return 出去
    return {
      isOpen,
      toggleOpen,
      dropdownref
    }
  }
})
</script>

<style>
</style>
