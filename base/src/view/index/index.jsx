import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../static/logo.svg'
import './index.css'

class Index extends React.Component {
    render() {
        let html =
            <div className="link">
                {/* 根路由只能为`/` 为空字符串或省略不写均无效 */}
                <Link style={{ backgroundImage: 'url(' + logo + ')', backgroundPosition: 'center' }}
                      to={{ pathname: '/' }}>index</Link>
                <Link to={{ pathname: 'item' }}>item</Link>
                <Link to={{ pathname: 'clock' }}>clock</Link>
                <Link to={{ pathname: 'form' }}>form</Link>
                <Link to={{ pathname: 'multi-form' }}>multiForm</Link>
                <Link to={{ pathname: 'table' }}>table</Link>
            </div>
        return (html)
    }
}

export default Index
