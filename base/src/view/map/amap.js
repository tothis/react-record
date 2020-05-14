import React from 'react'
import Geolocation from '@/component/amap/geolocation'
// import geocoder from '@/component/amap/geocoder'

export default class extends React.Component {
    constructor() {
        super()
    }

    mapData = {
        // 定位优先级 city > center 默认地址为当前城市
        city: '北京', // 根据城市名称定位
        // center: { longitude: 120, latitude: 30 }, // 经纬度定位
        zoom: 10, // 地图缩放
        status: { // 是否支持放大拖拽
            zoomEnable: true,
            dragEnable: true
        },
        mapMaker: [ // 标记点
            { lnglat: [116.401728, 39.911984], text: '内容1' },
            { lnglat: [116.436691, 39.921984], text: '内容2' }
        ],
        plugins: ['Scale', 'ToolBar', 'MapType', 'OverView', 'ControlBar']
    }

    render() {
        return <div style={{ height: '80%' }}>
            <Geolocation  mapData={this.mapData}/>
        </div>
    }
}
