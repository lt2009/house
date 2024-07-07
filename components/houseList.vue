<template>
  <el-space wrap fill>
    <template v-for="article in posts" :key="article._path">
      <houseCard :article="article" />
    </template>
  </el-space>
</template>
<script setup>
  const { posts } = defineProps(['posts']);
</script>
