import {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

    config = {
        navigationBarTitleText: '首页'
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    render() {
        return (
            <View className='load'>
                <div className="square1"></div>
                <div className="square2"></div>
                <div className="square3"></div>
                <div className="square4"></div>
                <div className="square5"></div>
                <div className="square6"></div>
                <div className="square7"></div>
                <div className="square8"></div>
            </View>
        )
    }
}
