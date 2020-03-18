import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../../static/logo.svg";
import './index.css';

class Index extends React.Component {
    render() {
        let html =
            <div className="app">
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo"/>
                    {/*跳转路由*/}
                    <Link className="app-link" to={{pathname: '/item'}}>
                        learn react
                    </Link>
                </header>
            </div>;
        return (html);
    }
}

export default Index;
