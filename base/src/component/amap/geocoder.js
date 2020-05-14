import React, { Component } from 'react'
import { Map, Marker } from 'react-amap'
import { Input, message } from 'antd'
import 'antd/dist/antd.css'
import './geocoder.css'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                name: '',
                address: '',
                longitude: 116.473083,
                latitude: 39.993762
            },
            searchContent: '' // 搜索框
        }
    }

    // 改变数据通用方法(单层)
    changeData = (value, key) => {
        let { data } = this.state
        data[key] = value
        this.setState({
            data: data
        })
    }

    render() {
        let { data } = this.state
        const selectAddress = {
            created: e => {
                let auto
                let geocoder
                window.AMap.plugin('AMap.Autocomplete', () => {
                    auto = new window.AMap.Autocomplete({ input: 'tipInput' })
                })
                window.AMap.plugin(['AMap.Geocoder'], function() {
                    // eslint-disable-next-line no-undef
                    geocoder = new AMap.Geocoder({
                        radius: 1000, // 以已知坐标为中心点 radius为半径 返回范围内兴趣点和道路信息
                        extensions: 'all' // 返回地址描述以及附近兴趣点和道路信息 默认base
                    })
                })

                // 搜索名称
                window.AMap.plugin('AMap.PlaceSearch', () => {
                    let place = new window.AMap.PlaceSearch({})
                    let that = this
                    window.AMap.event.addListener(auto, 'select', e => {
                        console.log('AMap.PlaceSearch 触发')
                        place.search(e.poi.name)
                        geocoder.getAddress(e.poi.location, function(status, result) {
                            if (status === 'complete') {
                                let address = result.regeocode.formattedAddress
                                    , data = result.regeocode.addressComponent
                                    , name = data.township + data.street + data.streetNumber
                                that.changeData(address, 'address')
                                that.changeData(name, 'name')
                                that.changeData(e.poi.location.lng, 'longitude')
                                that.changeData(e.poi.location.lat, 'latitude')
                            }
                        })
                    })
                })
            },
            click: e => {
                const that = this
                let geocoder

                // 地理编码
                window.AMap.plugin(['AMap.Geocoder'], function() {
                    // eslint-disable-next-line no-undef
                    geocoder = new AMap.Geocoder({
                        radius: 1000, // 以已知坐标为中心点 radius为半径 返回范围内兴趣点和道路信息
                        extensions: 'all' // 返回地址描述以及附近兴趣点和道路信息 默认base
                    })
                    geocoder.getAddress(e.lnglat, function(status, result) {
                        console.log('AMap.Geocoder 触发')
                        if (status === 'complete') {
                            let address = result.regeocode.formattedAddress
                            let data = result.regeocode.addressComponent
                            let name = data.township + data.street + data.streetNumber
                            that.changeData(address, 'address')
                            that.changeData(name, 'name')
                            that.changeData(e.lnglat.lng, 'longitude')
                            that.changeData(e.lnglat.lat, 'latitude')
                            message.success(`经纬度 -> ${data.address}`)
                        }
                    })
                })
            }
        }

        return (
            <div style={{ width: '100%', height: '100%' }}>
                <div id='content' style={{ width: '100%', height: '100%' }}>
                    <Input id='tipInput' style={{ width: 240 }}/>
                    <Map amapkey={process.env.REACT_APP_AMAP_KEY}
                         plugins={['ToolBar', 'Scale']}
                         events={selectAddress}
                         center={[data.longitude, data.latitude]}
                         zoom={15}>
                        <Marker position={[data.longitude, data.latitude]}/>
                    </Map>
                </div>
            </div>
        )
    }
}
