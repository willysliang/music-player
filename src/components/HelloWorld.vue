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
    const res2 = await API.getUsers()
    console.log(res2);
    const res = await API.login('zhangsan', '123456')
    console.log(res)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <h1>{{ msg }}</h1>
  <div>{{ userStore.name }}</div>

  <el-icon :size="32" color="#ccc">
    <Edit />
  </el-icon>
  <el-avatar :size="50" src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />

  <div class="card bg-red-400">
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
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}

.card {
	@include flex(column);

	// background-color: red;
}

.read-the-docs {
	color: $color-background;
	background-color: var(--main-bg-color);

	span {
		color: red;
	}
}
</style>
