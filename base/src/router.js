// 使用react jsx写法必引
import React from 'react'
// 使用BrowserRouter路由模式 http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html
import { HashRouter, Route } from 'react-router-dom'
// loadable
import load from './util/load'
// 组件
import index from './view/index'
// import item from './view/item'
const item = load(() => import ('./view/item'))
const clock = load(() => import ('./view/clock'))
const form = load(() => import ('./view/form'))
const multiForm = load(() => import ('./view/multi-form'))
const table = load(() => import ('./view/table'))
const mock = load(() => import ('./view/mock'))
const map = load(() => import ('./view/map'))
const amap = load(() => import ('./view/map/amap'))
const openLayers = load(() => import ('./view/map/open-layers'))
const hook = load(() => import ('./view/hook'))

export default () => (
    <HashRouter>
        {/*<Route path="/" component={index}/>*/}
        {/*<Route path="" component={index}/>*/}
        {/* 路由必须由`/`开头 */}
        <Route component={index}/>
        <Route path="/item" component={item}/>
        <Route path="/clock" component={clock}/>
        <Route path="/form" component={form}/>
        <Route path="/multi-form" component={multiForm}/>
        <Route path="/table" component={table}/>
        <Route path="/mock" component={mock}/>
        <Route path="/map" component={map}/>
        <Route path="/map/amap" component={amap}/>
        <Route path="/map/open-layers" component={openLayers}/>
        <Route path="/hook" component={hook}/>
    </HashRouter>
)
