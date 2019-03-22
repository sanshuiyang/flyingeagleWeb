//这个js工具文件，写帮助组件的工具函数

/*
 * 判断是否是http链接，返回true or false
 */
export function ConversionPath(href) {
    if (href && href.indexOf('http') === 0) {
        return true;
    }
    return false;
};