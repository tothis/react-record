import React from 'react'
import { Map } from 'react-amap'

export default class extends React.Component {
    constructor() {
        super()
        this.mapCenter = { longitude: 120, latitude: 30 }
    }

    render() {
        return <div style={{ width: 600, height: 400 }}>
            <Map zoom={5} center={this.mapCenter}/>
        </div>
    }
}
