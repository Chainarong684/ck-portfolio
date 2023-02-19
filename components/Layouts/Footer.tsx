import { Typography } from 'antd'
import React from 'react'
import Social from '../Social'

const Footer = () => {
  return (
    <div className='container flex flex-col justify-center items-center py-10 gap-2'>
      <p>Design & Created by</p>
      <p>Chainarong Kieatmingmongkol</p>
      <Social />
    </div>
  )
}

export default Footer
