<template>
  <el-space wrap fill>
    <template v-for="article in top" :key="article._path">
      <houseTopCard :article="article" />
    </template>
    <template v-for="article in posts" :key="article._path">
      <houseCard :article="article" />
    </template>
  </el-space>
</template>
<script setup>
  const { posts } = defineProps(['posts']);
  const { top } = queryContent('posts').sort({
    date: -1,
    top: true
  });
</script>
