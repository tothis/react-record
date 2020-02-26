import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
// react组件需要以大小字母开头
ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
