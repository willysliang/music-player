<!--
 * @ Author: willysliang
 * @ Create Time: 2022-12-02 17:41:22
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-02 17:44:31
 * @ Description: Emoji 表情包
 -->
<script setup lang="ts">
import emojiJson from './emoji.json'

const emoji = emojiJson.data
</script>

<template>
  <div>{{ emoji }}</div>
</template>
