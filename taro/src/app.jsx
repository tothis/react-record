import Taro, {Component} from '@tarojs/taro'
import Index from './pages/index'

import './app.styl'

// 如需在h5环境开启React Devtools 取消以下注释
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

    config = {
        pages: [
            'pages/index/index'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        }
    }

    componentDidMount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    componentDidCatchError() {
    }

    render() {
        return (
            <Index/>
        )
    }
}

Taro.render(<App/>, document.getElementById('app'))
