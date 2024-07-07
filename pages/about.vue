<template>
  <el-container class="houseMain">
    <el-aside>
      <houseSidebar />
    </el-aside>
    <el-container>
      <el-header>
        <houseNavbar />
      </el-header>
      <el-main>
        <el-text size="large">
          <el-icon :size="20">
            <InfoFilled />
          </el-icon>
          关于
        </el-text>
        <ContentDoc />
        <houseComment />
      </el-main>
      <el-footer>
        <houseFooter />
      </el-footer>
    </el-container>
  </el-container>
</template>
<script setup>
  import { InfoFilled } from "@element-plus/icons-vue"
</script>
