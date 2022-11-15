<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-31 17:15:11
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-10 18:26:47
 * @ Description: 音乐馆模块 musicHall
 -->

<script setup lang="ts">
import emojiJson from '@util/emoji.json';

const emoji = emojiJson.data
</script>

 <template>
   <div>音乐管理</div>
   <div>{{ emoji }}</div>
   <Child>
     <template #search="{ search }">
       <div v-for="item in search" :key="item">{{ item }}</div>
     </template>
   </Child>
 </template>
