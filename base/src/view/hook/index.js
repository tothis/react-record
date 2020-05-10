import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'

export default () => {
    // 声明一个新的叫做 count 的 state 变量
    const [count, setCount] = useState(0)
    const [mock, setMock] = useState()

    /**
     * 可把useEffect Hook看做componentDidMount componentDidUpdate和componentWillUnmount组合
     * 即 组件初始化时 组件更新时 组件销毁时 调用
     */
    useEffect(() => {
        axios({
            url: '/data',
            method: 'get'
        }).then(result => {
            console.log(result.data, 777)
            setMock(result.data)
        })
    })

    return (
        <div>
            {JSON.stringify(mock)}<br/>
            <Button onClick={() => setCount(count + 1)}>
                已点击{count}次
            </Button>
        </div>
    )
}
