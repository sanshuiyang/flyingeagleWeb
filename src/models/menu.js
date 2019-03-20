import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';

function formatter(data, parentName) {
    if (!data) {
        return undefined;
    }

    return data
        .map(item => {
            if (!item.name || !item.path) {
                return null;
            }

            let locale = 'menu';
            if (parentName) {
                locale = `${parentName}.${item.name}`;
            } else {
                locale = `menu.${item.name}`;
            }

            const name = item.name;
            const result = {
                ...item,
                name,
                locale,
            };
            if (item.routes) {
                const children = formatter(item.routes, locale);
                result.children = children;
            }
            delete result.routes;
            return result;
        })
        .filter(item => item);
}

const memoizeOneFormatter = memoizeOne(formatter, isEqual);

const filterMenuData = menuData => {
    if (!menuData) {
        return [];
    }

    return menuData
        .filter(item => item.name && !item.hidenInMenu)
        // .map(item=>check)
        .filter(item => item);
}

const getBreadcrumbNameMap = menuData => {
    if (!menuData) {
        return {};
    }

    const routerMap = {};

    const flattenMenuData = data => {
        data.forEach(menuItem => {
            if (menuItem.children) {
                flattenMenuData(menuItem.children);
            }
            routerMap[menuItem.path] = menuItem;
        })
    }
    flattenMenuData(menuData);
    return routerMap;
}

const memoizeOneGetBreadcrumbNameMap = memoizeOne(getBreadcrumbNameMap, isEqual);

export default {
    namespace: 'menu',
    state: {
        menuData: [],
        routerData: [],
        breadcrumbNameMap: {},
    },
    effects: {
        *getMenuData({ payload }, { put }) {
            const { routes } = payload;
            const orignalMenuData = memoizeOneFormatter(routes);
            const menuData = filterMenuData(orignalMenuData);
            const breadcrumbNameMap = memoizeOneGetBreadcrumbNameMap(orignalMenuData);
            console.log("123");
            yield put({
                type: 'save',
                payload: { menuData, breadcrumbNameMap, routerData: routes },
            })
        }
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload,
            }
        }
    }
}