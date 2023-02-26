import { getCurrentTheme } from '@/redux/themeSlice'
import { Button, Divider } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { MailOutlined } from '@ant-design/icons'
import Link from 'next/link'

const Contact = () => {
  const theme = useSelector(getCurrentTheme)
  return (
    <section id='contact' className='py-10'>
      <Divider>
        <h4>3. Get In Touch</h4>
      </Divider>
      <div className='flex flex-col items-center w-[400px] mx-auto gap-y-10 text-center'>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore adipisci voluptatibus explicabo similique
          nostrum, totam neque. Ab veritatis saepe distinctio odit blanditiis, dolorem quas voluptatibus aliquam soluta
          iste exercitationem quidem!
        </p>

        <div>
          <p>“One of my reminder that I have, and try always to keep it that is to rise above little things.”</p>
          <p>( Cr. Dean Koontz )</p>
        </div>

        <Link href='mailto:9k.chainarong@gmail.com'>
          <Button className={`flex items-center hover:scale-110 ${theme === 'light' ? 'btn-light' : 'btn-dark'}`}>
            <MailOutlined />
            Glad to see you
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Contact
