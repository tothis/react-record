import React from 'react'
import { Link } from 'react-router-dom'
import '../index/index.css'

export default class extends React.Component {
    render() {
        let html =
            <div className="link">
                <Link to={{ pathname: '/map/amap' }}>amap</Link>
                <Link to={{ pathname: '/map/open-layers' }}>open-layers</Link>
            </div>
        return (html)
    }
}
