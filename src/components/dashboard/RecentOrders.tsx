import { getASingleCart } from '@/pages/api'
import { Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

const RecentOrders = () => {
  const [recentOrderData, setRecentOrderData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getASingleCart().then((res) => {
      setRecentOrderData(res.products)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <Typography.Title level={5}>Recent Orders</Typography.Title>
      <Table
        style={{ width: 500 }}
        columns={[
          {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
          },
          {
            title: 'Price',
            dataIndex: 'discountedPrice',
            key: 'price',
          },
        ]}
        dataSource={recentOrderData}
        loading={loading}
        pagination={false}
      />
    </div>
  )
}

export default RecentOrders
