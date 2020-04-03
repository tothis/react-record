import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../static/logo.svg'
import './index.css'

class Index extends React.Component {
    render() {
        let html =
            <div className="link">
                {/*跳转路由*/}
                <Link style={{ backgroundImage: 'url(' + logo + ')', backgroundPosition: 'center' }}
                      to={{ pathname: '/' }}>index</Link>
                <Link to={{ pathname: 'item' }}>item</Link>
                <Link to={{ pathname: 'clock' }}>clock</Link>
                <Link to={{ pathname: 'form' }}>form</Link>
            </div>
        return (html)
    }
}

export default Index
