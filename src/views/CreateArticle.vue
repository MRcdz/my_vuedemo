<template>
  <div class="container my-4">
    <h2 class="text-center">新建文章</h2>
    <validate-form>
      <validate-input ref="titleRef" v-model="title" placeholder="请输入标题" type="text" labelText="标题"/>
      <validate-input ref="contentsRef" v-model="content" placeholder="请输入内容" type="text" tag="textarea" rows="10" labelText="文章内容"/>
      <template #submit>
        <button type="submit" @click.prevent="onCreate" class="btn btn-primary" style="margin-right: 20px!important;">发表文章</button>
        <button type="submit" @click.prevent="onCancel" class="btn btn-secondary">清空输入</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput from '../components/ValidateInput.vue'
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import useFormatTime from '../hooks/useFormatTime'
export default defineComponent({
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const router = useRouter()
    const titleRef = ref()
    const contentsRef = ref()
    const store = useStore()
    const { columnId } = store.state.user
    const articleInfo = reactive({
      id: new Date().getTime(),
      columnId: columnId,
      title: '',
      content: '',
      createdAt: useFormatTime(new Date())
    })
    const onCreate = () => {
      if (articleInfo.title.trim() === '' || articleInfo.content.trim() === '') {
        alert('标题和内容不能为空！')
      } else {
        if (columnId) {
          store.commit('addArticle', articleInfo)
          router.push({ name: 'column', params: { id: columnId } })
        }
      }
    }
    const onCancel = () => {
      titleRef.value.ipt.value = ''
      contentsRef.value.ipt.value = ''
      titleRef.value.ipt.focus()
    }
    onMounted(() => {
      if (!store.state.user.isLogin) {
        router.push('/login')
      }
      titleRef.value.ipt.focus()
    })
    return {
      ...toRefs(articleInfo),
      onCreate,
      titleRef,
      contentsRef,
      onCancel
    }
  }
})
</script>

<style>
</style>
