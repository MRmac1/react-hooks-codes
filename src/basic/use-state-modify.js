import React, { useState, useRef, useEffect } from 'react'
import { Table, Form, Input, Button, Radio } from 'antd'

export default function StateModify (props) {

  const [params, setParams] = useState({ searchWords: '' })
  const [dataSource, setDataSource] = useState([])

  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }]

  useEffect(() => {
    console.log('params', params);
    fetchList()
  }, [params])

  const fetchList = () => {
    setTimeout(() => {
      setDataSource([
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ])
    }, 1000)
  }

  const onSearchWordsChange = (e) => {
    setParams({ ...params, searchWords: e.target.value })
  }

  return <div>
    <Form layout='inline' style={{ marginBottom: '24px' }}>
      <Form.Item label='searchWords'>
        <Input placeholder='searchWords' onChange={onSearchWordsChange}/>
      </Form.Item>
      <Form.Item label='table-layout'>
        <Radio.Button value="horizontal">1</Radio.Button>
        <Radio.Button value="vertical">2</Radio.Button>
      </Form.Item>
      <Form.Item label='searchWords'>
        <Button type='primary'>查询</Button>
      </Form.Item>
    </Form>
    <Table dataSource={dataSource} columns={columns} />
  </div>
}