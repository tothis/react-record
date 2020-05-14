import React from 'react'
import './index.css'
// https://ant.design/components/button-cn
import { Button, Table } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'

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
        const a = 'font-weight:bold;color:#fff;background:#606060;padding:5px 0;border-radius:4px 0 0 4px;'
        const b = 'font-weight:bold;color:#fff;background:#ff8585;padding:5px 0;border-radius:0 4px 4px 0;'
        return (
            <div>
                <Button type="primary">子组件数据[{this.state.sonMessage}]</Button>
                <Son father={this}/>
                {console.log(`%c version %c ${process.env.REACT_APP_VERSION} `, a, b)}
                {console.log(`%c build-time %c ${process.env.REACT_APP_BUILD_TIME} `, a, b)}
                {console.log(`%c message %c ${process.env.REACT_APP_MESSAGE} `, a, b)}
            </div>
        )
    }
}

// 子组件对父组件传值 需调用父组件方法
class Son extends React.Component {
    message = '子组件数据'

    state = {
        data: []
    }

    componentDidMount() {
        this.props.father.sonMessage(this.message)
        let dataSource = [
            {
                key: '1', // 没有key 插件会警告⚠
                mark: '父数据',
                name: this.props.father.message
            }
        ]
        axios.get('cityjson')
            .then(result => {
                let value = result.data
                let indexOf = value.indexOf('{')
                dataSource.push({
                    key: '2',
                    mark: '跨域',
                    name: value.substr(indexOf, value.length - indexOf - 1)
                })
                this.setState({
                    data: dataSource
                })
            })
            .catch(result => {
                console.log(result)
            })
    }

    render() {
        const columns = [
            {
                title: '描述',
                dataIndex: 'mark'
            },
            {
                title: '数据',
                dataIndex: 'name'
            }
        ]
        return (
            <Table dataSource={this.state.data} columns={columns}></Table>
        )
    }
}

export default Father
