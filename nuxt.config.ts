// https://nuxt.com/docs/api/configuration/nuxt-config
import prismjs from "vite-plugin-prismjs"
import config from "./house.json"
const house = {
  url: config.url,
};
export default defineNuxtConfig({
  site: {
    url: house.url,
  },
  modules: [
    "@element-plus/nuxt",
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  css: [
    "element-plus/dist/index.css",
  ],
  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '',
      Sitemap: house.url + "/sitemap.xml",
    },
  },
  vite: {
    plugins: [
      prismjs({
        languages: [
        "css",
        "javascript",
        "html",
        "json",
        "bash",
        "md",
        "cpp",
        ],
        plugins: ["toolbar", "show-language", "copy-to-clipboard"],
        css: true
      })
    ]
  }
})
