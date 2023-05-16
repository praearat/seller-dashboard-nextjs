import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'

const { Footer } = Layout

const StyledFooter = styled(Footer)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  bottom: 0;
`

const AppFooter = () => {
  return (
    <StyledFooter>
      <span>Terms and Policies</span>
      <span>NPSpace ©2023 Created by Praearat</span>
      <span>npspace@gmail.com</span>
    </StyledFooter>
  )
}

export default AppFooter
