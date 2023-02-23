const nav = [
    // 1.0 仅显示标题到导航栏
    {
        text: '首页',
        link: '/'
    },
    // 2.0 显示标题到导航栏，且显示下拉标题
    {
        text: '关于作者',
        children: [{
                text: 'GitHub',
                link: '',
            },
            {
                text: '掘金',
                link: '',
            }
        ]
    },
    // 3.0 显示标题到导航栏，且分类别显示下拉标题
    {
        text: '面试笔记',
        items: [{
                text: '基础',
                //此处/以docs为根目录
                items: [{
                        text: 'Javascript',
                        link: '/前端/01.Javascript/01.正则表达式',
                        // sidebarDepth: 0,
                    },
                    {
                        text: 'ES6',
                        link: '/PAGE/2019-10-14-js-reg/',
                        // link: '/前端/02.ES6/',
                    },
                ]
            },
        ]
    }
]

module.exports = nav;