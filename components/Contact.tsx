import { getCurrentTheme } from '@/redux/themeSlice'
import { Button, Divider, Typography } from 'antd'
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
      <div className='flex flex-col items-center w-[400px] mx-auto'>
        <Typography.Paragraph className=''>
          Hi there, Thank you for taking your valuable time to visit my website. If you have any questions please let me
          know , or just want to say hello, i would like to hear from you.
        </Typography.Paragraph>

        <Typography.Paragraph>
          You can reach me through the contact below. <br /> i appreciate your interest to visit my portfolio and i
          hopefully look forward to hearing from you soon. <br /> Thank you!
        </Typography.Paragraph>

        <Typography.Paragraph>
          <pre>
            “my index is start from Number(zero), so if your index is start at 0 <br /> <u>return</u> we are the same.”
          </pre>
        </Typography.Paragraph>

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
