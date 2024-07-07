<template>
    <NuxtLayout>
      <el-config-provider :locale="zhCn">
        <NuxtPage />
      </el-config-provider>
    </NuxtLayout>
</template>
<script setup lang="ts">
import "element-plus/theme-chalk/dark/css-vars.css"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import config from "@/house.json"
const house = {
  avatar: config.avatar,
  description: config.description,
  title: config.title,
  version: config.version,
}
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${house.title}` : house.title;
  },
})
</script>
<style lang="scss">
  @use "~/assets/houseLayout.scss";
</style>
