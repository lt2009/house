<template>
  <el-container class="houseMain">
    <el-aside>
      <houseSidebar />
    </el-aside>
    <el-container>
      <el-header>
        <houseNavbar />
      </el-header>
      <el-main class="houseFriends">
        <houseFriend />
        <houseComment />
      </el-main>
      <el-footer>
        <houseFooter />
      </el-footer>
    </el-container>
  </el-container>
</template>
<script setup>
  useHead({
    title: "友情链接"
  });
</script>
<style lang="scss">
  @use "~/assets/houseFriends.scss";
</style>
