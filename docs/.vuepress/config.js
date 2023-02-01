const nav = require('./config/nav'); //引入导航栏配置
const sidebar = require('./config/sidebar'); //引入侧边栏配置
// const routeConfig = require('./plugins/routeConfig'); //引入路由配置

module.exports = {
    title: "郭兵宇的博客",
    description: "好记性不如烂笔头",
    head: [
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        ['link', {
            rel: 'icon',
            href: '/img/witch.ico' //配置网页的小图标，如下图
        }]
    ],
    base: '/blog/', // 部署到github会用到的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    // 顶部导航栏
    themeConfig: {
        displayAllHeaders: false, //展开侧边栏所有的小标题
        sidebarDepth: 1, //提取markdown中h2标题，作为小标题显示在侧边栏上。
        lastUpdated: '最后更新', // 文档更新时间：每个文件git最后提交的时间,
        nav, //导航
        sidebar, //侧边栏
    },
    plugins: [
    //    routeConfig,
    ],
}