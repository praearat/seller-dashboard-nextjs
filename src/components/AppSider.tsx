import {
  BarChartOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Menu, Layout } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const { Sider } = Layout

const AppSider = () => {
  const router = useRouter()

  return (
    <Sider width={200} style={{ background: 'white' }}>
      <Menu
        mode="inline"
        style={{ height: '100%' }}
        onClick={(item) => {
          router.push(item.key)
        }}
        items={[
          {
            label: 'Dashboard',
            icon: <BarChartOutlined />,
            key: '/dashboard',
          },
          {
            label: 'Inventory',
            icon: <ShopOutlined />,
            key: '/inventory',
          },
          {
            label: 'Orders',
            icon: <ShoppingCartOutlined />,
            key: '/orders',
          },
          {
            label: 'Customers',
            icon: <UserOutlined />,
            key: '/customers',
          },
        ]}
      />
    </Sider>
  )
}

export default AppSider
