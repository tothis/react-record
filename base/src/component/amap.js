import React, { Component } from 'react'
import { Map, Marker } from 'react-amap'
import Geolocation from 'react-amap-plugin-geolocation'

// https://elemefe.github.io/react-amap/articles/start
export default class extends Component {
    constructor(props) {
        super(props)
        this.data = props

        // 地图事件
        this.amapEvents = {
            created: instance => {

            }
        }

        // 点位事件
        this.markerEvents = {
            click: markerInstance => {
                this.Position = [markerInstance.lnglat.lng, markerInstance.lnglat.lat]
                this.setState({
                    isShow: true
                })
            }
        }

        // https://lbs.amap.com/api/javascript-api/reference/location/#m_AMap.Geolocation
        this.geolocationConfig = {
            timeout: 100 // 超过10秒后停止定位 默认 无穷大
            , maximumAge: 0 // 定位结果缓存0毫秒 默认 0
            , convert: true // 自动偏移坐标 偏移后的坐标为高德坐标 默认 true
            , showButton: false // 显示定位按钮 默认 true
            , buttonPosition: 'RB' // 定位按钮停靠位置 默认'LB'左下角
            //, events: {
            //     created: o => {
            //         // 获取用户当前精确位置信息
            //         o.getCurrentPosition((status, result) => {
            //             if (result && result.position) {
            //                 console.log(result)
            //             }
            //         })
            //     }
            // }
        }
    }

    render() {
        let { city, center, zoom, status, plugins } = this.data.mapData
        return (
            <Map
                amapkey={process.env.REACT_APP_AMAP_KEY}
                city={city}
                zoom={zoom}
                center={center}
                status={status}
                plugins={plugins}
                events={this.amapEvents}
            >
                {/*<Geolocation {...this.geolocationConfig}/>*/}
                {this.data.mapData.mapMaker.map((item, index) => (
                    <Marker
                        key={index}
                        position={item.lnglat}
                        events={this.markerEvents}
                    />
                ))}
            </Map>
        )
    }
}
