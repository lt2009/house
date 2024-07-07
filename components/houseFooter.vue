<template>
  <el-text>Copyright {{ new Date().getFullYear() }} by {{ house.author }}</el-text>
</template>
<script setup>
  import config from "@/house.json"
  const house = {
    author: config.author,
  };
</script>
