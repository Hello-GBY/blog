const navbar = require('./config/nav'); //引入导航栏配置
const sidebar = require('./config/sidebar'); //引入侧边栏配置
// const routeConfig = require('./plugins/routeConfig'); //引入路由配置
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'



export default defineUserConfig({
  lang: 'zh-CN',
  base: '/blog/', // 部署到github会用到的配置
  title: "郭兵宇的个人博客",
  theme: defaultTheme({
    // 默认主题配置
    // navbar, //导航
    navbar: [
        {
            text: '一起进步',
            link: '/一起进步.md'
        },
        {
            text: '企业级实战经验',
            link: '/企业级实战经验/企业级实战经验.md'
        },
        {
            text: '源码原理',
            link: '/源码原理/源码原理.md'
        },
        // NavbarGroup
        {
            text: '个人知识库',
            link: '/个人知识库/readme.md'
        },
        // NavbarGroup
        {
            text: '读书笔记',
            link: '/读书笔记/readme.md'
        }
    ],
    sidebar, //侧边栏
    repo: 'https://github.com/Hello-GBY',
    repoLabel: 'GitHub',
  }),
  description: '这是我的第一个 VuePress 站点',
})

// module.exports = {
//     description: "正在搭建中...",
//     head: [
//         // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
//         ['link', {
//             rel: 'icon',
//             href: '/img/witch.ico' //配置网页的小图标，如下图
//         }]
//     ],
//     markdown: {
//         lineNumbers: true // 代码块显示行号
//     },
//     // 顶部导航栏
//     themeConfig: {
//         displayAllHeaders: false, //展开侧边栏所有的小标题
//         sidebarDepth: 1, //提取markdown中h2标题，作为小标题显示在侧边栏上。
//         lastUpdated: '最后更新', // 文档更新时间：每个文件git最后提交的时间,
//         nav, //导航
//         sidebar, //侧边栏
//     },
//     plugins: [
//     //    routeConfig,
//     ],
// }