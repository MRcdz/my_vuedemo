<template>
  <div class="d-flex justify-content-center my-5">
    <div>
      <h5 class="text-center mb-3">欢迎加入我们</h5>
      <validate-form @form-validate="FormValidateResult" style="width: 300px;">
        <validate-input v-model="emailInput" placeholder="请输入邮箱" :rules="emailRules" type="text" labelText="填写注册邮箱"/>
        <validate-input v-model="username" placeholder="请输入昵称" type="text" labelText="填写昵称"/>
        <validate-input v-model="passwordInput" placeholder="请输入密码" :rules="passwordRules" type="password" labelText="密码"/>
        <validate-input v-model="passwordInput" placeholder="再次确认密码" :rules="passwordRules" type="password" labelText="重复密码"/>
        <p>
          <router-link class="small" to="/login">已有账号，去登陆？</router-link>
        </p>
        <template #submit>
          <button class="btn btn-success" @click.prevent="FormValidateResult">注册</button>
        </template>
      </validate-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RuleProp } from '../components/ValidateInput.vue'
import ValidateForm, { emitter1 } from '../components/ValidateForm.vue'
export default defineComponent({
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    // const store = useStore()
    // const router = useRouter()
    // email
    const emailInput = ref('')
    // password
    const username = ref('')
    const passwordInput = ref('')
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
    // FormValidateResult
    const FormValidateResult = (result:boolean) => {
      console.log(1)
      if (!result) {
        alert('登陆失败！有错误')
        emitter1.emit('clearInput', '')
      } else {
        alert('登陆成功！')
        // router.push('/')
        // store.commit('login')
      }
    }
    return {
      FormValidateResult,
      emailRules,
      passwordRules,
      emailInput,
      username,
      passwordInput
    }
  }
})
</script>

<style>
</style>
