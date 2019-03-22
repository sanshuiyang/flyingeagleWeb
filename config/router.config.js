//手动配置路由
export default [
    {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        routes: [
            //home
            { path: '/', redirect: '/home' },
            {
                path: 'home',
                name: '主页',
                component: './Home'
            },
            //mainBusiness
            {
                path: 'mainBusiness',
                name: '主营业务',
                // component: './MainBusiness'
                routes: [
                    {
                        path: '/mainBusiness/software',
                        name: '软件产品',
                        component: './MainBusiness/Software'
                    },
                    {
                        path: '/mainBusiness/hardware',
                        name: '硬件产品',
                        component: './MainBusiness/Hardware'
                    },
                    {
                        path: '/mainBusiness/solution',
                        name: '解决方案',
                        component: './MainBusiness/Solution'
                    },
                ]
            },
            //successfulCases
            {
                path: 'successfulCases',
                name: '成功案例',
                component: './SuccessfulCases'
            },
            //news
            {
                path: '/news',
                name: '新闻资讯',
                routes:[
                    {
                        path:'/news/company',
                        name:'公司新闻',
                        component:'./News/Company',
                    },
                    {
                        path:'/news/industry',
                        name:'行业动态',
                        component:'./News/Industry',
                    },
                    {
                        path:'/news/staff',
                        name:'员工风采',
                        component:'./News/Staff',
                    }
                ]
            },
            //about
            {
                path: 'about',
                name: '关于翔鹏',
                component: './About'
            },
            //contact
            {
                path: 'contact',
                name: '联系我们',
                component: './Contact'
            },

        ]
    }
]