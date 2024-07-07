<template>
  <el-icon class="houseSidebar" :size="50" @click="houseToggle()">
    <ArrowLeft v-if="houseSidebar" />
    <ArrowRight v-else />
  </el-icon>
  <el-link href="/" :underline="false">{{ house.title }}</el-link>
</template>
<script setup>
  import { useDark, useToggle } from "@vueuse/core"
  import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue"
  import config from "@/house.json"
  const house = {
    title: config.title,
  };
  const houseSidebar = useDark({
    selector: ".el-aside",
    storageKey: "houseSidebar",
    valueDark: "houseShow",
    valueLight: "houseHide",
  });
  const houseToggle = useToggle(houseSidebar);
</script>
