<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import type { FormInstance, FormRules } from 'element-plus'

const { iconSize } = useAppStore()
const { isLogin, profile, showLogin } = storeToRefs(useUserStore())
const { login, checkLogin } = useUserStore()

onMounted(() => {
  checkLogin()
})

/***
 * 控制弹层模块切换
 */
const dialogCurrent = ref<number>(1)

/***
 * 表单信息
 * 表单提交
 */
interface IForm {
  phone: string
  password: string
}
const loginForm = reactive<IForm>({} as IForm)
const loginFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  phone: [{ required: true, message: 'Please input phone', trigger: 'blur' }],
  password: [
    { required: true, message: 'Please input pawword', trigger: 'blur' },
    {
      min: 3,
      max: 15,
      message: 'Password length should be 3 to 15',
      trigger: 'blur',
    },
  ],
})
const handleSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      login(loginForm.phone, loginForm.password)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-avatar
    :size="iconSize"
    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
  />
  <span v-if="isLogin" class="text-sm">{{ profile.nickname }}</span>
  <span v-else class="text-sm" @click="showLogin = true">点击登录</span>

  <el-dialog
    v-model="showLogin"
    width="70%"
    append-to-body
    center
    draggable
    align-center
    destroy-on-close
  >
    <template #header="{ titleId, titleClass }">
      <div
        :id="titleId"
        class="flex flex-row justify-around items-center h-12"
        :class="titleClass"
      >
        <div @click="dialogCurrent = 0">扫码登录</div>
        <div @click="dialogCurrent = 1">账号登录</div>
      </div>
    </template>
    <div v-if="dialogCurrent === 1">
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules">
        <el-form-item prop="phone">
          <el-input v-model="loginForm.phone" placeholder="手机号码" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="登录密码"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
      </el-form>
      <button
        style="border-radius: 5px"
        class="button w-full mt-5 py-5"
        @click="handleSubmit(loginFormRef)"
      >
        登录
      </button>
    </div>
  </el-dialog>
</template>
