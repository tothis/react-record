import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import 'antd/dist/antd.css'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
}

export default () => {

    const onFinish = values => {
        console.log('success:', values)
    }

    const onFinishFailed = errorInfo => {
        console.log('failed:', errorInfo)
    }

    const forms = new Array

    for (let i = 0; i < 3; i++) {
        forms.push(
            <div key={i}>
                <Form.Item
                    label='用户名'
                    name={'username' + i}
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label='密码'
                    name={'password' + i}
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout} name={'remember' + i} valuePropName='checked'>
                    <Checkbox>记住我</Checkbox>
                </Form.Item>
            </div>
        )
    }

    return (
        <Form
            {...layout}
            name='basic'
            initialValues={{ remember0: true, remember2: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            {forms}

            <Form.Item {...tailLayout}>
                <Button type='primary' htmlType='submit'>
                    提交
                </Button>
            </Form.Item>
        </Form>
    )
}
