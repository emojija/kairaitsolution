import React from 'react'
import WebServices from './WebServices'
import SoftwareServices from'./SoftwareServices'
import AppServices from './AppServices'

export const Services = () => {
  return (
<>
    <WebServices/>
    <SoftwareServices/>
    <AppServices/>
    </>
  )
}

export default Services