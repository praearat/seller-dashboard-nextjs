import React from 'react'
import { Col, Row, Space, Typography } from 'antd'
import ConclusionCards from '@/components/dashboard/ConclusionCards'
import RecentOrders from '@/components/dashboard/RecentOrders'
import BarChart from '@/components/dashboard/BarChart'

const Dashboard = () => {
  return (
    <Space direction="vertical" size="middle">
      <Typography.Title level={3}>Dashboard</Typography.Title>
      <ConclusionCards />
      <Space size="large" align="start">
        <RecentOrders />
        <BarChart />
      </Space>
    </Space>
  )
}

export default Dashboard
