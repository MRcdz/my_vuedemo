<template>
  <li class="dropdown-option" :class="{'is-disabled': disabled}">
    <a :href="skipUrl" class="dropdown-item"><slot></slot></a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropDown',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    skipUrl: {
      type: String,
      default: '#'
    }
  }
})
</script>

<style>
.dropdown-option.is-disabled *{
  color: #ccc;
  pointer-events: none;
  background: transparent;
}
</style>
