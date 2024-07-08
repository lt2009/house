<template>
  <el-text size="large">
    <el-icon :size="20">
      <ChatLineRound />
    </el-icon>
    评论
  </el-text>
  <div id="houseComment"></div>
</template>
<script setup lang="ts">
import { ChatLineRound } from "@element-plus/icons-vue"
import config from "@/house.json"
onMounted(async () => {
  await nextTick();
  if (typeof config.comment !== 'undefined' | typeof window !== 'undefined') {
    const twikoo = await import('twikoo');
    twikoo.init({
      envId: config.comment,
      el: '#houseComment',
    });
  }
});
</script>
<style lang="scss">
  @use "~/assets/houseComment.scss";
</style>
