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
        <ContentDoc>
          <template v-slot="{ doc }">
            <article>
              <el-col>
                <el-row>
                  <el-text size="large">
                    <el-icon :size="20">
                      <Notebook />
                    </el-icon>
                    {{ doc.title }}
                  </el-text>
                </el-row>
                <el-row>
                  <el-text>
                    <el-icon :size="15">
                      <Avatar />
                    </el-icon>
                    {{ house.author }}
                  </el-text>
                  <el-text>
                    <el-icon :size="15">
                      <Clock />
                    </el-icon>
                    {{ format(parseISO(doc.date), 'yyyy年MM月dd日') }}
                  </el-text>
                </el-row>
              </el-col>
              <ContentRenderer :value="doc" />
              <houseComment />
            </article>
          </template>
          <template #not-found>
            <el-text size="large">
              <el-icon :size="20">
                <Warning />
              </el-icon>
              没有找到这篇文章
            </el-text>
          </template>
        </ContentDoc>
      </el-main>
      <el-footer>
        <houseFooter />
      </el-footer>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
  import Prism from "prismjs"
  import "prism-themes/themes/prism-base16-ateliersulphurpool.light.css"
  import config from "@/house.json"
  import { format, parseISO } from "date-fns"
  import { Avatar, Clock, InfoFilled, Notebook, Warning } from "@element-plus/icons-vue"
  const house = {
    author: config.author,
  };
  onMounted(async () => {
     await nextTick()
     Prism.highlightAll()
  });
</script>
