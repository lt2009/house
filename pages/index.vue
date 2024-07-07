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
        <houseList :posts="posts" />
      </el-main>
      <el-footer>
        <houseFooter />
      </el-footer>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
  const posts = await queryContent("posts").sort({ date: -1 }).find();
  useHead({
    title: "首页"
  });
</script>
