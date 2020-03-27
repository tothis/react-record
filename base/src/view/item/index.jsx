import React from 'react'
import './index.css'
// https://ant.design/components/button-cn
import { Button,Table  } from 'antd'
import 'antd/dist/antd.css'

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
                <Button type="primary">子组件数据[{this.state.sonMessage}]</Button>
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
        const dataSource = [
            {
                mark: '父数据',
                name: this.props.father.message
            }
        ];

        const columns = [
            {
                title: '描述',
                dataIndex: 'mark'
            },
            {
                title: '数据',
                dataIndex: 'name'
            }
        ];
        return (
            <Table dataSource={dataSource} columns={columns}></Table>
        )
    }
}

export default Father
