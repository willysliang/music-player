<script setup lang="ts">
import { usePlayerInit } from '@/store/player'
import { useLocaleHook } from '@/locales/useLocaleHook'

usePlayerInit()

/** 获取 ElementUI 语言 */
const { getElLocale } = useLocaleHook()
</script>

<template>
  <el-config-provider :locale="getElLocale">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>
