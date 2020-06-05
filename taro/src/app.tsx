import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import './app.styl'

// 如需在h5环境中开启React Devtools
// 取消以下注释
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为Taro.Config
   *
   * 由于typescript对于object类型推导只能推出Key的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突 需要显示声明类型
   */
  config: Config = {
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

  // 在App类中的render()函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index/>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'))
