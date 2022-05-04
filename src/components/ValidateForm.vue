<template>
  <form class="validate-form-container mb-3" style="position: relative;">
    <slot></slot>
    <div class="submit-area text-center">
      <slot name="submit">
        <button type="submit" @click.prevent="onFormSubmit" class="btn btn-primary">登录</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
// 导入vue的api
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
// 在最新版本当中需要定义其类型
type ValidateFunc = () => boolean
type Emits<EventType extends string | symbol, T> = {
  on(type: EventType, handler: (arg: T) => void): void
  off(type: EventType, handler: (arg: T) => void): void
  emit(type: EventType, arg: T): void
}
// form-item-created 类型定义
type Emitter = Emits<'form-item-created', ValidateFunc>
// clearInput 类型定义
type Emitter1 = Emits<'clearInput', string>
export const emitter:Emitter = mitt()
export const emitter1:Emitter1 = mitt()
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-validate'],
  setup (props, context) {
    // 定义函数数组
    let funcArr:ValidateFunc[] = []
    // 提交按钮派生方法
    const onFormSubmit = () => {
      const result = funcArr.map(func => func()).every(func => func)
      context.emit('form-validate', result)
    }
    // emit callback mitt
    const callback = (func: ValidateFunc) => {
      funcArr.push(func)
    }
    // form-item-created
    emitter.on('form-item-created', callback)
    // onUnmounted
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    // return setup compsition Api
    return {
      onFormSubmit
    }
  }
})
</script>

<style>
</style>
