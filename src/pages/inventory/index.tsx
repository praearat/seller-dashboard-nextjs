import { Image, Rate, Space, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../api'

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllProduct().then((res) => {
      setInventoryData(res.products)
      setLoading(false)
    })
  }, [])

  return (
    <Space direction="vertical" size="middle">
      <Typography.Title level={3}>Inventory</Typography.Title>
      <Table
        columns={[
          {
            title: 'Thumbnail',
            dataIndex: 'thumbnail',
            key: 'thumbnail',
            render: (thumbnail) => {
              return (
                <Image src={thumbnail} alt="product" style={{ width: 100 }} />
              )
            },
          },
          {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (title) => {
              return <Typography.Link>{title}</Typography.Link>
            },
          },
          {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => {
              return `${price} ฿`
            },
          },
          {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
            render: (rate) => {
              return <Rate value={rate} allowHalf disabled />
            },
          },
          { title: 'Stock', dataIndex: 'stock', key: 'stock' },
          { title: 'Brand', dataIndex: 'brand', key: 'brand' },
          {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
          },
        ]}
        dataSource={inventoryData}
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </Space>
  )
}

export default Inventory
