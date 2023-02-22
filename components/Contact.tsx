import { getCurrentTheme } from '@/redux/themeSlice'
import { Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
  const theme = useSelector(getCurrentTheme)
  return (
    <section id='contact' className='py-20'>
      <div className='flex flex-col items-center w-[400px] mx-auto gap-y-10 text-center'>
        <h1>Get In Touch</h1>

        <p className=''>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore adipisci voluptatibus explicabo similique
          nostrum, totam neque. Ab veritatis saepe distinctio odit blanditiis, dolorem quas voluptatibus aliquam soluta
          iste exercitationem quidem!
        </p>

        <div>
          <p>“One of my reminder that I have, and try always to keep it that is to rise above little things.”</p>
          <p>( Cr. Dean Koontz )</p>
        </div>

        <Button className={theme === 'light' ? 'btn-light' : 'btn-dark'}>
          <a href='mailto:9k.chainarong@gmail.com'>Glad to see you</a>
        </Button>
      </div>
    </section>
  )
}

export default Contact
