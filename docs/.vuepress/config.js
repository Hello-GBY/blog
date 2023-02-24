const navbar = require("./config/nav"); //引入导航栏配置
const sidebar = require("./config/sidebar"); //引入侧边栏配置
// const routeConfig = require('./plugins/routeConfig'); //引入路由配置
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  base: "/blog/", // 部署到github会用到的配置
  title: "兵宇的博客",
  theme: defaultTheme({
    // 默认主题配置
    // navbar, //导航
    navbar,
    sidebar: {
        '/dev-experience/': [
            {
              text: 'CSS解决方案',
              link: './css解决方案/css解决方案.md',
              children: [ {
                text: 'CSS规范化',
                link: './css解决方案/CSS规范化.md',
              }],
            },
          ],
          '/reference/': [
            {
              text: 'Reference',
              children: ['/reference/cli.md', '/reference/config.md'],
            },
          ],
    }, //侧边栏
    repo: "https://github.com/Hello-GBY",
    repoLabel: "GitHub",
    displayAllHeaders: false, //展开侧边栏所有的小标题
    sidebarDepth: 1, //提取markdown中h2标题，作为小标题显示在侧边栏上。
    lastUpdated: "最后更新", // 文档更新时间：每个文件git最后提交的时间,
  }),
  head: [
    //         // 这里的 '/' 指向 docs/.vuepress/public 文件目录
    [
      "link",
      {
        rel: "icon",
        href: "/img/witch.ico", //配置网页的小图标，如下图
      },
    ],
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  description: "这是我的第一个 VuePress 站点",
});

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
