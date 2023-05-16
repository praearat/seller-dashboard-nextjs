import { Space, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { getAllCarts } from '../api'

const Orders = () => {
  const [orderData, setOrderData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllCarts().then((res) => {
      setOrderData(res.carts)
      setLoading(false)
    })
  }, [])

  // const expandedRowRender

  return (
    <Space direction="vertical" size="middle">
      <Typography.Title level={3}>Orders</Typography.Title>
      <Table
        dataSource={orderData}
        rowKey="id"
        loading={loading}
        columns={[
          {
            title: 'Cart Id',
            dataIndex: 'id',
            key: 'cartId',
          },
          {
            title: 'User Id',
            dataIndex: 'userId',
            key: 'userId',
          },
          {
            title: 'Quantity',
            dataIndex: 'totalQuantity',
            key: 'totalQuantity',
          },
          {
            title: 'Total Price',
            dataIndex: 'total',
            key: 'total',
          },
          {
            title: 'Discounted Price',
            dataIndex: 'discountedTotal',
            key: 'discountedTotal',
          },
        ]}
        expandable={{
          expandedRowRender: (cart) => (
            <Table
              rowKey="id"
              dataSource={cart.products}
              columns={[
                {
                  title: 'Product',
                  dataIndex: 'title',
                  key: 'product',
                },
                {
                  title: 'Price',
                  dataIndex: 'price',
                  key: 'price',
                },
                {
                  title: 'Quantity',
                  dataIndex: 'quantity',
                  key: 'quantity',
                },
                {
                  title: 'Total Price',
                  dataIndex: 'total',
                  key: 'totalPrice',
                },
                {
                  title: 'Discounted Price',
                  dataIndex: 'discountedPrice',
                  key: 'discountedPrice',
                },
              ]}
            />
          ),
        }}
      />
    </Space>
  )
}

export default Orders
