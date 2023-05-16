import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Badge,
  Col,
  Drawer,
  Image,
  Layout,
  List,
  Row,
  Space,
  Typography,
} from 'antd'
import { BellOutlined, MailOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { iconSize } from '@/utils/styles'
import { getAllCarts, getAllComments } from '@/pages/api'

const { Header } = Layout
const { Title } = Typography

const StyledHeader = styled(Header)`
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color: white;
`

const AppHeader = () => {
  const [orderData, setOrderData] = useState([])
  const [messageData, setMessageData] = useState([])
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)

  useEffect(() => {
    getAllCarts().then((res) => {
      setOrderData(
        res.carts
          .map((cart) => {
            return cart.products
          })
          .flat()
      )
    })
    getAllComments().then((res) => {
      setMessageData(res.comments)
    })
  }, [])

  return (
    <div>
      <StyledHeader>
        <Row align={'middle'} style={{ height: 70 }}>
          <Col style={{ lineHeight: 0 }}>
            <Avatar src="/logo.png" size={50} />
          </Col>
          <Col flex="auto" style={{ textAlign: 'center' }}>
            <Title level={2} style={{ margin: 0 }}>
              Seller Dashboard
            </Title>
          </Col>
          <Col>
            <Space size="large">
              <Badge count={messageData.length}>
                <MailOutlined
                  style={iconSize}
                  onClick={() => {
                    setMessageOpen(true)
                  }}
                />
              </Badge>
              <Badge count={orderData.length}>
                <BellOutlined
                  style={iconSize}
                  onClick={() => {
                    setNotificationOpen(true)
                  }}
                />
              </Badge>
            </Space>
            <Drawer
              title="Notification"
              open={notificationOpen}
              onClose={() => {
                setNotificationOpen(false)
              }}
            >
              <List
                dataSource={orderData}
                renderItem={(item) => {
                  return (
                    <List.Item>
                      <Typography.Text type="warning" strong>
                        {item.quantity} {item.title}
                      </Typography.Text>{' '}
                      has been ordered!
                    </List.Item>
                  )
                }}
              />
            </Drawer>
            <Drawer
              title="Message"
              open={messageOpen}
              onClose={() => {
                setMessageOpen(false)
              }}
            >
              <List
                dataSource={messageData}
                renderItem={(item) => {
                  return (
                    <List.Item>
                      {item.user.username} sent a message:{' '}
                      <Typography.Text type="success" strong>
                        {item.body}
                      </Typography.Text>
                    </List.Item>
                  )
                }}
              />
            </Drawer>
          </Col>
        </Row>
      </StyledHeader>
    </div>
  )
}

export default AppHeader
