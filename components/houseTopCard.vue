<template>
  <el-link :underline="false" :href="props.article._path">
    <el-card :header="title" :footer="format(parseISO(props.article.date), 'yyyy年MM月dd日')">
      <el-text>{{ props.article.description }}</el-text>
    </el-card>
  </el-link>
</template>
<script setup>
  import { format, parseISO } from 'date-fns'
  const title = '[置顶] '+props.article.title;
  const props = defineProps(['article']);
</script>
