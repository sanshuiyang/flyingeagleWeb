// ref: https://umijs.org/config/
//copy from https://github.com/ant-design/ant-design-pro/blob/master/config/config.js
import os from 'os';
import pageRoutes from './router.config';
import webpackPlugin from './plugin.config.js';
import defaultSettings from '../src/defaultSettings';
import slash from 'slash2';  //将window下的'//' 变为 '\'

const { primaryColor } = defaultSettings;

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
    routes: pageRoutes,
    theme: {
        'primary-color': primaryColor
    },
    chainWebpack: webpackPlugin,
}