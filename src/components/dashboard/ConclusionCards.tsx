import {
  getAllCarts,
  getAllProduct,
  getAllUsers,
  getASingleCart,
} from '@/pages/api'
import {
  DollarCircleOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Card, Space, Statistic } from 'antd'
import React, { useEffect, useState } from 'react'

const ConclusionCards = () => {
  const [orders, setOrders] = useState()
  const [inventory, setInventory] = useState()
  const [customers, setCustomers] = useState()
  const [revenue, setRevenue] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllCarts().then((res) => {
      setOrders(res.total)
      setLoading(false)
    })
    getAllProduct().then((res) => {
      setInventory(res.total)
      setLoading(false)
    })
    getAllUsers().then((res) => {
      setCustomers(res.total)
      setLoading(false)
    })
    getASingleCart().then((res) => {
      setRevenue(res.discountedTotal)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <Space size="large">
        <Card>
          <Statistic
            title="Orders"
            value={orders}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ShoppingCartOutlined />}
            loading={loading}
          />
        </Card>
        <Card>
          <Statistic
            title="Inventory"
            value={inventory}
            precision={2}
            valueStyle={{ color: '#c83da8' }}
            prefix={<ShopOutlined />}
            loading={loading}
          />
        </Card>
        <Card>
          <Statistic
            title="Customers"
            value={customers}
            precision={2}
            valueStyle={{ color: '#249ade' }}
            prefix={<UserOutlined />}
            loading={loading}
          />
        </Card>
        <Card>
          <Statistic
            title="Revenue"
            value={revenue}
            precision={2}
            valueStyle={{ color: '#ea8007' }}
            prefix={<DollarCircleOutlined />}
            loading={loading}
          />
        </Card>
      </Space>
    </div>
  )
}

export default ConclusionCards
