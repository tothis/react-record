import React, { useState } from 'react'
import { Form, Input, InputNumber, Popconfirm, Table } from 'antd'
import 'antd/dist/antd.css'

const originData = []

for (let i = 0; i < 100; i++) {
    originData.push({
        key: i,
        name: `名称${i}`,
        age: i,
        address: `地址${i}`
    })
}

const EditableCell = (
    {
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }
) => {
    const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0
                    }}
                    rules={[
                        {
                            required: true,
                            message: `请输入${title}!`
                        }
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    )
}

export default () => {
    const [form] = Form.useForm()
    const [data, setData] = useState(originData)
    const [editingKey, setEditingKey] = useState('')

    const isEditing = record => record.key === editingKey

    const edit = record => {
        form.setFieldsValue({ ...record })
        setEditingKey(record.key)
    }

    const cancel = () => {
        setEditingKey('')
    }

    const save = async key => {
        try {
            const row = await form.validateFields()
            const newData = [...data]
            const index = newData.findIndex(item => key === item.key)

            if (index > -1) {
                const item = newData[index]
                newData.splice(index, 1, { ...item, ...row })
                setData(newData)
                setEditingKey('')
            } else {
                newData.push(row)
                setData(newData)
                setEditingKey('')
            }
        } catch (errInfo) {
            console.log('验证失败', errInfo)
        }
    }

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            editable: true
        },
        {
            title: 'age',
            dataIndex: 'age',
            width: '15%',
            editable: true
        },
        {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            editable: true
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record)
                return editable ? (
                    <span>
                        <a href="#/table"
                           onClick={() => save(record.key)}
                           style={{
                               marginRight: 8
                           }}
                        >
                          保存
                        </a>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                          <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <a disabled={editingKey !== ''} onClick={() => edit(record)}>
                        编辑
                    </a>
                )
            }
        }
    ]
    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col
        }

        return {
            ...col,
            onCell: record => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record)
            })
        }
    })
    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell
                    }
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel
                }}
            />
        </Form>
    )
};
