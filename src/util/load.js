import React from 'react';
import Loadable from 'react-loadable';
// 通用过场组件 pastDelay属性 在组件加载时间超过delay值时为true
const loadComponent = ({error, pastDelay}) => {
    if (error) { // 加载错误时显示
        return <div>加载错误...</div>;
    } else if (pastDelay) {
        return <div>加载中...</div>;
    } else {
        // 加载时间短于delay(默认200ms) 不显示加载动画
        return null;
    }
};

// 过场组件默认采用通用
export default (router, load = loadComponent) => {
    return Loadable({
        loader: router,
        loading: load,
        delay: 200
    });
}
