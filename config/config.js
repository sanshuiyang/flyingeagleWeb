// ref: https://umijs.org/config/
//copy from https://github.com/ant-design/ant-design-pro/blob/master/config/config.js
import os from 'os';
// import pageRoutes from './router.config';
import webpackPlugin from './plugin.config.js';
import defaultSettings from '../src/defaultSettings';
import slash from 'slash2';  //将window下的'//' 变为 '\'

const { primaryColor } = defaultSettings;
const { APP_TYPE, TEST } = process.env;

const plugins = [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'flyingeagleWeb',
        dll: true,
    }],
]

export default {
    plugins,
    treeShaking: true,
    //路由配置
    // routes: pageRoutes,
    theme: {
        'primary-color': primaryColor
    },
    ignoreMomentLocale: true,
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    disableRedirectHoist: true,
    cssLoaderOptions: {
        modules: true,
        getLocalIdent: (context, localIdentName, localName) => {
            if (
                context.resourcePath.includes('node_modules') ||
                context.resourcePath.includes('ant.design.pro.less') ||
                context.resourcePath.includes('global.less')
            ) {
                return localName;
            }
            const match = context.resourcePath.match(/src(.*)/);
            if (match && match[1]) {
                const antdProPath = match[1].replace('.less', '');
                const arr = slash(antdProPath)
                    .split('/')
                    .map(a => a.replace(/([A-Z])/g, '-$1'))
                    .map(a => a.toLowerCase());
                return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
            }
            return localName;
        },
    },
    chainWebpack: webpackPlugin,
}