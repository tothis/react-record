import React, { Component } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

export default class extends Component {
    componentDidMount() {
        new Map({
            target: 'show',
            // 设置图层
            layers: [
                new Tile({
                    source: new OSM()
                })
            ],
            // 设置地图可视区域
            view: new View({
                center: [0, 0], // 中心点
                zoom: 4 // 缩放层级
            })
        })
    }

    render() {
        // 创建地图容器
        return <div id="show" style={{ height: 'calc(100% - 100px)' }}></div>
    }
}
