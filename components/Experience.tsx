import React from 'react'
import { ClockCircleOutlined, SafetyCertificateOutlined, ScheduleOutlined } from '@ant-design/icons'
import { Avatar, Divider, List, Space } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

const Experience = () => {
  const data = [
    {
      href: 'https://www.codemobiles.com/biz/training_consult.php',
      title: `Codemobiles Co., Ltd`,
      avatar: '/assets/images/codemobiles-logo.svg',
      description: 'Software house, Tech company, Training, Outsource',
      content:
        'My first journy, Codemobiles is softwere company there have many product and that give me the opportunity to work in many tech stack. and here teach me to be Full stack developer for the reason that have to develop frontend and backend also by my self.',
      displayImage1: '/assets/images/codemobiles-01.svg',
      displayImage2: '/assets/images/codemobiles-02.png',
      role: 'Developer',
      hireType: 'Full Time',
      experience: '3 Years'
    },
    {
      href: '#',
      title: `Looking for new opportunity and new challenge`,
      avatar: '',
      description: '',
      content: '',
      displayImage1: '',
      displayImage2: '',
      role: '-',
      hireType: '-',
      experience: '-'
    }
  ]

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )
  return (
    <section id='experience' className='py-10'>
      <Divider orientation='right'>
        <h4>1. Experience</h4>
      </Divider>

      <List
        itemLayout='vertical'
        size='large'
        dataSource={data}
        // footer={
        //   <div>
        //     <p>{`Even currently my journey is short but doesn't mean my energy and my vision is short`}</p>
        //   </div>
        // }
        renderItem={(item) => (
          <List.Item
            className='flex flex-col md:flex-row gap-4'
            key={item.title}
            actions={[
              <IconText icon={SafetyCertificateOutlined} text={item.role} key='list-vertical-star-o' />,
              <IconText icon={ScheduleOutlined} text={item.hireType} key='list-vertical-star-o' />,
              <IconText icon={ClockCircleOutlined} text={item.experience} key='list-vertical-like-o' />
            ]}
            extra={
              <>
                {item.displayImage1 && (
                  <div className='group/exp'>
                    <Image
                      className='transition delay-200 group-hover/exp:hidden'
                      width={272}
                      height={200}
                      alt='company-01'
                      src={item.displayImage1}
                    />
                    <Image
                      className='transition delay-200 hidden group-hover/exp:block'
                      width={272}
                      height={200}
                      alt='company-02'
                      src={item.displayImage2}
                    />
                  </div>
                )}
              </>
            }>
            <List.Item.Meta
              avatar={item.avatar ? <Avatar size='large' src={item.avatar} /> : <Avatar size='large'>CK</Avatar>}
              title={<Link href={item.href}>{item.title}</Link>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </section>
  )
}

export default Experience
