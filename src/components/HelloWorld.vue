<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import { useMouse } from '@vueuse/core'
import API from '@/api'

const userStore = useUserStore()
userStore.updateName('李四')

defineProps<{ msg: string }>()

const count = ref(0)

const { x, y } = useMouse()

onMounted(async () => {
  try {
    const res = await API.login('zhangsan', '123456')
    console.log(res)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>{{ userStore.name }}</div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more <span>shsj</span>
  </p>

  <h3>测试 vueUse 的鼠标坐标Mouse: {{ x }} x {{ y }}</h3>

  <router-view />
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;

  span {
    color: red;
  }
}
</style>
