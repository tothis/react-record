import React from 'react'
import './index.css'

class Father extends React.Component {

    state = {
        sonMessage: null
    }

    message = '父组件数据'

    sonMessage = param => {
        // 子组件向父组件传值必须使用setState修改值 否则父组件不会重新渲染
        this.setState({
            sonMessage: param
        })
    }

    render() {
        return (
            <div>
                <p>子组件数据[{this.state.sonMessage}]</p>
                <Son father={this}/>
            </div>
        )
    }
}

// 子组件对父组件传值 需调用父组件方法
class Son extends React.Component {
    message = '子组件数据'

    constructor(props) {
        super(props)
        this.props.father.sonMessage(this.message)
    }

    render() {
        return (
            <p>
                父组件数据[{this.props.father.message}]
            </p>
        )
    }
}

export default Father
