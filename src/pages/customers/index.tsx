import { Avatar, Space, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { SymbolDisplayPartKind } from 'typescript'
import { getAllUsers } from '../api'

const Customers = () => {
  const [customerData, setCustomerData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllUsers().then((res) => {
      setCustomerData(res.users)
      setLoading(false)
    })
  }, [])

  return (
    <Space direction="vertical" size="middle">
      <Typography.Title level={3}>Customers</Typography.Title>
      <Table
        loading={loading}
        dataSource={customerData}
        columns={[
          {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => {
              return (
                <Avatar
                  src={image}
                  size={40}
                  style={{ borderColor: 'rgba(225, 225, 225, 0.5)' }}
                />
              )
            },
          },
          {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
          },
          {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (address) => {
              return (
                <Typography.Text>
                  {address.address}, {address.city} {address.postalCode}
                </Typography.Text>
              )
            },
          },
        ]}
      />
    </Space>
  )
}

export default Customers
