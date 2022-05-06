<!-- Login 登陆 -->
<template>
  <div class="d-flex justify-content-center my-5">
    <div>
      <h5 class="text-center">登录</h5>
      <validate-form @form-validate="FormValidateResult" style="width: 300px;">
        <validate-input v-model="emailInput" placeholder="请输入邮箱" :rules="emailRules" type="text" labelText="邮箱"/>
        <validate-input v-model="passwordInput" placeholder="请输入密码" :rules="passwordRules" type="password" labelText="密码"/>
        <p>
          <router-link class="small" to="/signup">还没有账号，去注册？</router-link>
        </p>
        <template #submit></template>
      </validate-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RuleProp } from '../components/ValidateInput.vue'
import ValidateForm, { emitter1 } from '../components/ValidateForm.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    // 邮箱地址验证规则
    const emailRules:RuleProp[] = [
      { type: 'required', message: '请输入邮箱地址！' },
      { type: 'email', message: '你输入的邮箱格式不对！' },
      { type: 'range', message: '邮箱长度应在8位或以上' }
    ]
    // 用户密码验证规则
    const passwordRules:RuleProp[] = [
      { type: 'required', message: '请输入密码！' },
      { type: 'range', message: '密码长度应在6位或以上' }
    ]
    // email
    const emailInput = ref('xxx@qq.com')
    // password
    const passwordInput = ref('111111')
    // FormValidateResult
    const FormValidateResult = (result:boolean) => {
      if (!result) {
        alert('登陆失败！有错误')
        emitter1.emit('clearInput', '')
      } else {
        alert('登陆成功！')
        router.push('/')
        store.commit('login')
      }
    }
    return {
      FormValidateResult,
      emailRules,
      passwordRules,
      emailInput,
      passwordInput
    }
  }
})

</script>

<style>
</style>
