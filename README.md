# 这是啥
这个项目是我用`nuxt`写的一个博客网站，但是太烂了，就开源了。这是alpha版本，界面较为简陋。较新版请看beta分支，最终版暂不开源。
# 功能
- [x] 文章自动生成
- [x] twikoo评论（可选）
- [x] 集成配置文件（`house.json`，beta版为`house.js`）
- [x] 文章列表自动渲染
- [x] 暗黑模式切换
- [x] 友链页面
- [x] 基本的侧边栏
- [x] 置顶文章
# 开始使用
## 初始化
安装`nodejs18`并通过`npm install -g yarn`安装`yarn`包管理器，通过在项目根目录执行`yarn`命令安装项目依赖
## 配置
编辑项目根目录下的`house.json`文件，其中：
- `author`是你的昵称
- `comment`是`twikoo`的环境id，若不想使用评论系统可留空。其他评论系统请修改`components/houseComment.vue`
- `links`是友链列表，具体方式看项目根目录`house.json`
- `title`是网站的标题
# 文章
md文件请存储在项目根目录的`content`文件夹内。
- 博文请放在`content/posts`内
- 修改关于界面请编辑`content/about.md`
## md配置
在md文件开头的两行`---`中间填写配置。
- `title`是文章标题
- `date`是文章日期（yyyy-mm-dd）
- `top`是设置是否置顶，`true`为置顶，否则留空
- `description`是文章描述
# 开源协议
本项目使用`Apache-2.0`开源协议。禁止以任何方式对本项目进行二次分发，包括但不限于镜像本项目。
