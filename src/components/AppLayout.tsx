import { Layout } from 'antd'
import React from 'react'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppSider from './AppSider'

const { Content } = Layout

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <AppHeader />
      <Layout style={{ minHeight: '100vh' }}>
        <AppSider />
        <Layout>
          <Content
            style={{
              margin: '30px 30px 0px',
              padding: '20px 30px 30px',
              background: 'white',
            }}
          >
            {children}
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>
  )
}
export default AppLayout
