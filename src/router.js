// 使用react jsx写法必引
import React from 'react'
// 使用BrowserRouter路由模式 http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html
import {HashRouter, Route} from "react-router-dom"
// loadable
import load from "./util/load"
// 组件
import index from './view/index'
// import item from './view/item'
const item = load(() => import ('./view/item'))

export default () => (
    <HashRouter>
        <Route path="/" component={index}/>
        <Route path="/item" component={item}/>
    </HashRouter>
)
