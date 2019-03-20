//手动配置路由
export default [
    {
        path: '/',
        component: '../layouts/index',
        Routes: ['src/layouts/index'],
        routes: [
            //home
            { path: '/', redirect: '/home' },
            {
                path: 'home',
                name: 'home',
                component: './Home'
            },
            //about
            {
                path: 'about',
                name: 'about',
                component: './About'
            },
            //news
            {
                path: 'news',
                name: 'news',
                component: './News'
            },
            //contact
            {
                path: 'contact',
                name: 'contact',
                component: './Contact'
            },
            //mainBusiness
            {
                path: 'mainBusiness',
                name: 'mainBusiness',
                component: './MainBusiness'
            },
            //successfulCases
            {
                path: 'successfulCases',
                name: 'successfulCases',
                component: './SuccessfulCases'
            },
            //404
            // {
            //     path: '404',
            //     name: '404',
            //     component: '../404'
            // },
        ]
    }
]