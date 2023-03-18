import { Button, Divider, List } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import Stack from './Stack'
import { ExportOutlined } from '@ant-design/icons'
import Link from 'next/link'
import CustomModal from './CustomModal'

const Project = () => {
  const [openedModal, setOpenedModal] = useState(false)

  const data = [
    {
      image: '/assets/images/projects/project_sdu.png',
      alt: 'sdu',
      title: 'ระบบวัดและแสดงผลค่าฝุ่นละอองภายในมหาวิทยาลัยสวนดุสิต',
      description: 'วัดค่าฝุ่นละอองภายในมหาวิทยาลัยโดยรับค่าจากเซนเซอร์และเก็บลงฐานข้อมูล(beta)',
      url: 'http://5911011940035.sci.dusit.ac.th/index.php',
      tools: 'PHP, MySQL, NodeMCU'
    },
    {
      image: '/assets/images/projects/posposco.png',
      alt: 'posposco',
      title: 'POSPOS',
      description: 'หน้าเว็บหลักแสดงรายละเอียดโปรแกรมสินค้าและอุปกรณ์รวมถึงระบบสร้างใบเสนอราคา',
      url: 'https://pospos.co',
      tools: '(SSR)EJS, MongoDB'
    }
  ]

  return (
    <section id='project' className='py-10'>
      <Divider orientation='left'>
        <h4>2. Projects</h4>
      </Divider>

      <div className='mx-40 my-10'>
        <List
          className='w-full'
          grid={{
            column: 3,
            gutter: 0,
            xs: 1,
            sm: 2,
            md: 3
          }}
          dataSource={data}
          pagination={{
            align: 'center',
            pageSize: 6
          }}
          renderItem={(item) => (
            <List.Item style={{ padding: 10, margin: 0 }}>
              <div
                className='flex flex-col shadow-lg rounded-xl transition hover:scale-105 w-[300px] h-[300px] hover:cursor-pointer'
                onClick={() => setOpenedModal(true)}>
                <Image
                  className='rounded-t-xl object-cover object-top h-[150px]'
                  alt={item.alt}
                  width={300}
                  height={150}
                  src={item.image}
                />

                <div className='flex-1 p-2 flex flex-col justify-between'>
                  <div className='flex-1'>{item.title}</div>
                  <div className='flex-1'>&nbsp;&nbsp;&nbsp;&nbsp;{item.description}</div>
                  <div className='flex justify-between border-t'>
                    <div className='flex-1'>{item.tools}</div>
                    <Link href={item.url} target='_blank'>
                      <Button
                        className='flex justify-center items-center hover:cursor-pointer'
                        shape='circle'
                        type='text'
                        icon={<ExportOutlined />}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <CustomModal isOpened={openedModal} handleClose={() => setOpenedModal(false)}>
                {item.title}
                <div className='flex justify-center'>
                  <Image src={item.image} width={300} height={300} alt={item.alt} />
                </div>
              </CustomModal>
            </List.Item>
          )}
        />

        <Divider />
        <Stack />
      </div>
    </section>
  )
}

export default Project
