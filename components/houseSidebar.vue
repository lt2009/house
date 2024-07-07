<template>
  <el-col>
    <el-row>
      <el-link :underline="false" href="/">
        <el-icon :size="50">
          <House />
        </el-icon>
      </el-link>
    </el-row>
    <el-row>
      <el-link :underline="false" href="/about">
        <el-icon :size="50">
          <InfoFilled />
        </el-icon>
      </el-link>
    </el-row>
    <el-row>
      <el-link :underline="false" href="/links">
        <el-icon :size="50">
          <Avatar />
        </el-icon>
      </el-link>
    </el-row>
    <el-row>
      <el-icon :size="50" @click="houseToggle()">
        <Moon v-if="houseDark" />
        <Sunny v-else />
      </el-icon>
    </el-row>
  </el-col>
</template>
<script setup>
  import { Avatar, House, InfoFilled, Moon, Sunny } from "@element-plus/icons-vue"
  import { useDark, useToggle } from "@vueuse/core"
  const houseDark = useDark({
      storageKey: 'houseDark',
      valueDark: 'dark',                                                                                                                                                                  valueLight: 'light',
    });
  const houseToggle = useToggle(houseDark);
</script>
