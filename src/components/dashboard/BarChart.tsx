import { getAllCarts } from '@/pages/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Card, Typography } from 'antd'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = () => {
  const [revenueData, setRevenueData] = useState([])
  const [userLabel, setUserLabel] = useState([])

  useEffect(() => {
    getAllCarts().then((res) => {
      setRevenueData(
        res.carts.map((cart) => {
          return cart.discountedTotal
        })
      )
      setUserLabel(
        res.carts.map((cart) => {
          return `csm-${cart.userId}`
        })
      )
    })
  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
        text: 'Revenue per order',
      },
    },
  }

  const labels = userLabel

  const data = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: revenueData.map((revenue) => {
          return revenue
        }),
        backgroundColor: '#f80',
      },
    ],
  }

  return (
    <Card style={{ width: 600 }}>
      <Typography.Title level={5}>Revenue per Order</Typography.Title>
      <Bar options={options} data={data} />
    </Card>
  )
}

export default BarChart
