import { Button, Divider, List } from 'antd'
import Image from 'next/image'
import React, { ReactHTML, useState } from 'react'
import Stack from './Stack'
import { ExportOutlined } from '@ant-design/icons'
import Link from 'next/link'
import CustomModal from './CustomModal'

const Project = () => {
  const [openedModal, setOpenedModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)

  const data = [
    {
      index: 0,
      image: '/assets/images/projects/posposco.png',
      alt: 'posposco',
      title: 'POSPOS',
      description: 'หน้าเว็บหลักแสดงรายละเอียดโปรแกรมสินค้า บทความและอุปกรณ์รวมถึงระบบสร้างใบเสนอราคา',
      url: 'https://pospos.co',
      tools: 'EJS, MongoDB'
    },
    {
      index: 1,
      image: '/assets/images/projects/goposposco.png',
      alt: 'goposposco',
      title: 'ระบบ Point of sale (POS)',
      description: 'POSPOS ระบบขายสินค้าและบริหารจัดการสต็อกสินค้าและลูกค้า(CRM) แสดงสรุปรายงานต่างๆ',
      url: 'https://go.pospos.co',
      tools: 'Angular, Node.js, MongoDB'
    },
    {
      index: 2,
      image: '/assets/images/projects/shopposposco.png',
      alt: 'shopposposco',
      title: 'ระบบ E-commerce',
      description:
        'ร้านค้าออนไลน์ E-commerce เชื่อมต่อกับระบบ POSPOS แสดงรายการสินค้า รับออเดอร์เมื่อลูกค้าเลือกสินค้าและชำระเงิน',
      url: 'https://shop.pospos.co',
      tools: 'Next.js, Nest.js, MongoDB'
    },
    {
      index: 3,
      image: '/assets/images/projects/hr.png',
      alt: 'hrzoft',
      title: 'HR-Zoft',
      description: 'หน้าเว็บหลัก แสดงข้อมูล บทความ และรายละเอียดของระบบ HR-Zoft',
      url: 'https://hrzoft.com/',
      tools: 'Next.js'
    },
    {
      index: 4,
      image: '/assets/images/projects/gohr.png',
      alt: 'gohrzoft',
      title: 'ระบบ บริหารจัดการทรัพยากรบุคคล(HR)',
      description:
        'บริหารจัดการพนักงาน การเข้า-ออกงาน คำขอต่างๆ แสดงสิทธิและข้อมูลต่างๆของพนักงานในบริษัทรวมถึงสรุปรายงาน',
      url: 'https://go.hrzoft.com/',
      tools: 'React, Nest.js, MongoDB'
    },
    {
      index: 5,
      image: '/assets/images/projects/portal.png',
      alt: 'portal',
      title: 'ระบบ Portal',
      description: 'Admin Portal หน้าบริหารจัดการลูกค้าและการแสดงผลที่หน้าเว็บหลัก บทความ, แพคเกจ, อุปกรณ์',
      url: '',
      tools: 'React, Nest.js, MongoDB'
    },
    {
      index: 6,
      image: '/assets/images/projects/sdu.png',
      alt: 'sdu',
      title: 'ระบบวัดและแสดงผลค่าฝุ่นละอองภายในมหาวิทยาลัยสวนดุสิต',
      description: 'วัดค่าฝุ่นละอองภายในมหาวิทยาลัยโดยรับค่าจากเซนเซอร์และเก็บลงฐานข้อมูล(beta)',
      url: 'http://5911011940035.sci.dusit.ac.th/index.php',
      tools: 'PHP, MySQL, NodeMCU'
    },
    {
      index: 7,
      image: '/assets/images/projects/sdu.png',
      alt: 'stripe',
      title: 'ระบบ Payment Gateway (Stripe)',
      description:
        'การรับชำระเงินที่มาตรฐาน ผ่านบัตรเดบิต-เครดิต ธนาคารภายในหรือนอก และช่องทางชำระเงินออนไลน์รวมถึง QR Scan',
      url: '',
      tools: 'Stripe'
    },
    {
      index: 8,
      image: '/assets/images/projects/sdu.png',
      alt: '2c2p',
      title: 'ระบบ Payment Gateway (2C2P)',
      description:
        'การรับชำระเงินที่มาตรฐาน ผ่านบัตรเดบิต-เครดิต ธนาคารภายในหรือนอก และช่องทางชำระเงินออนไลน์รวมถึง QR Scan',
      url: '',
      tools: '2C2P'
    },
    {
      index: 9,
      image: '/assets/images/projects/policy.jpg',
      alt: 'more',
      title: 'Secret',
      description: 'Another project that can not present by privacy and terms condition of client',
      url: '',
      tools: '🤐'
    }
  ]

  const handleSelectProject = (index: number) => {
    setSelectedProject(index)
    setOpenedModal(true)
  }

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
                onClick={() => handleSelectProject(item.index)}>
                <Image
                  className='rounded-t-xl object-cover object-top h-[150px]'
                  alt={item.alt}
                  width={300}
                  height={150}
                  src={item.image}
                />

                <div className='flex-1 p-2 flex flex-col justify-between'>
                  <div className='flex'>
                    <b>{item.title}</b>
                  </div>
                  <div className='flex-1'>&nbsp;&nbsp;&nbsp;&nbsp;{item.description}</div>
                  <div className='flex items-center justify-between border-t'>
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
            </List.Item>
          )}
        />

        <Divider />
        <Stack />
      </div>

      <CustomModal isOpened={openedModal} handleClose={() => setOpenedModal(false)}>
        {data[selectedProject].title}
        <div className='flex justify-center'>
          <Image src={data[selectedProject].image} width={300} height={300} alt={data[selectedProject].alt} />
        </div>
      </CustomModal>
    </section>
  )
}

export default Project
