<template>
  <el-text size="large">
    <el-icon :size="20">
      <Avatar />
    </el-icon>
    友情链接
  </el-text>
  <el-space warp>
    <template v-for="friend in house.links">
      <el-link :underline="false" :href="friend.link">
        <el-card :footer="friend.description">
          <el-avatar shape="square" size="small" :src="friend.avatar" />
          <el-text size="large">{{ friend.name }}</el-text>
        </el-card>
      </el-link>
    </template>
  </el-space>
</template>
<script setup>
  import { Avatar } from "@element-plus/icons-vue"
  import config from "@/house.json"
  const house = {
    links: config.links,
  };
</script>
