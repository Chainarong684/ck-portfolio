import { getCurrentTheme } from '@/redux/themeSlice'
import { Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
  const theme = useSelector(getCurrentTheme)
  return (
    <section id='contact' className='py-20 flex justify-center'>
      <div className='w-[400px] text-center'>
        <h1>Get In Touch</h1>
        <p className='py-10'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore adipisci voluptatibus explicabo similique
          nostrum, totam neque. Ab veritatis saepe distinctio odit blanditiis, dolorem quas voluptatibus aliquam soluta
          iste exercitationem quidem!
        </p>
        <Button className={theme === 'light' ? 'btn-light' : 'btn-dark'}>Say Hello</Button>
      </div>
    </section>
  )
}

export default Contact
