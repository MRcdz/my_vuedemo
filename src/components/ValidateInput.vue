<template>
  <div class="mb-3" style="position: relative;">
    <label for="exampleInputEmail1" class="form-label" v-if="labelText">{{labelText}}</label>
    <input
      v-if="tag !== 'textarea'"
      :class="{'is-invalid' : error, 'is-valid': success}"
      :value="val"
      @blur="validateInput"
      @input="updateValue"
      class="form-control"
      v-bind="$attrs"
      ref="ipt"
    >
    <textarea
      v-else
      :class="{'is-invalid' : error, 'is-valid': success}"
      :value="val"
      @blur="validateInput"
      @input="updateValue"
      class="form-control"
      v-bind="$attrs"
      ref="ipt"
      style="resize: none;"
    ></textarea>
    <div class="invalid-feedback" v-if="error">{{msg}}</div>
  </div>
</template>

<script lang="ts">
// 导入vue的api
import { defineComponent, reactive, PropType, toRefs, onMounted, onUnmounted, ref } from 'vue'
// emitter
import { emitter, emitter1 } from './ValidateForm.vue'
// email验证正则
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
// 手机号验证正则
const phoneReg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
// 定义接口约束属性类型
export interface RuleProp {
  type: 'required' | 'email' | 'phone' | 'range';
  message: string;
}
export type TagType = 'input | textarea'
export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RuleProp[]>,
    labelText: String,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  },
  // 禁止继承非 props 属性
  inheritAttrs: false,
  setup (props, context) {
    // 验证参数
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      success: false,
      msg: '',
      clearbtn: false
    })
    // 获取input值
    const updateValue = (e: KeyboardEvent) => {
      const targetVal = (e.target as HTMLInputElement).value
      inputRef.val = targetVal
      context.emit('update:modelValue', targetVal)
    }
    // 验证函数
    const validateInput = () => {
      inputRef.clearbtn = false
      if (props.rules) {
        // 每个 rule 进行循环验证，都为 true 才能最后返回真
        const allPassed = props.rules.every(rule => {
          let passed
          inputRef.msg = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'phone':
              passed = phoneReg.test(inputRef.val)
              break
            case 'range':
              passed = (inputRef.val.trim().length <= 13) && (inputRef.val.trim().length > 5)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        inputRef.success = allPassed
        return allPassed
      }
      return true
    }
    const ipt = ref()
    const clearUserInput = () => {
      ipt.value.value = ''
      ipt.value.focus()
    }
    const inputType = ref()
    onMounted(() => {
      emitter.emit('form-item-created', validateInput)
      emitter1.on('clearInput', () => {
        if (inputRef.error) {
          inputRef.val = ''
          ipt.value.focus()
        }
      })
      inputType.value = ipt.value.type
    })
    onUnmounted(() => {
      emitter1.off('clearInput', () => {
        inputRef.val = ''
      })
    })
    // return composition api
    return {
      ...toRefs(inputRef),
      validateInput,
      updateValue,
      ipt,
      clearUserInput,
      inputType
    }
  }
})
</script>

<style>
</style>
