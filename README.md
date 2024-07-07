# 这是啥
这个项目是我用nuxt写的一个博客网站，但是太烂了，就开源了。这是alpha版本，界面较为简陋
# 功能
- 文章自动生成
- twikoo评论
- 集成配置文件（house.json，beta版为house.js）
- 文章列表自动渲染
- 暗黑模式切换
- 友链页面
- 基本的侧边栏
# 配置
## 初始化
你肯定知道nuxt项目当然要有nodejs支持了。我用的是nodejs18，其他的没测试<br>
没有yarn请先安装：
```sh
npm install -g yarn
```
然后再安装包。方法你肯定知道了。
## 配
编辑项目根目录下的`house.json`文件，其中：
- `author`是你的昵称
- `comment`是twikoo的envid
- `links`是友链列表
- `title`是网站的标题
# 文章
md文件请存储在项目根目录的content文件夹内。
- 博文请放在content/posts内
- 修改关于界面请编辑content/about.md
## md配置
在md文件开头的两行`---`中间填写配置。
- `title`是文章标题
- `date`是文章日期（yyyy-mm-dd）
- `description`是文章描述
