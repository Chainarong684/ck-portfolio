import { Button, Divider, List } from 'antd'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Stack from './Stack'
import { ExportOutlined } from '@ant-design/icons'
import Link from 'next/link'
import CustomModal from './CustomModal'

interface ProjectData {
  id: number
  image: string
  alt: string
  title: string
  description: string
  url: string
  tools: string
}

const data: ProjectData[] = [
  {
    id: 0,
    image: '/assets/images/projects/posposco.png',
    alt: 'posposco',
    title: 'POSPOS',
    description: 'หน้าเว็บหลักแสดงรายละเอียดโปรแกรมสินค้า บทความและอุปกรณ์รวมถึงระบบสร้างใบเสนอราคา',
    url: 'https://pospos.co',
    tools: 'EJS, MongoDB'
  },
  {
    id: 1,
    image: '/assets/images/projects/goposposco.png',
    alt: 'goposposco',
    title: 'ระบบ Point of sale (POS)',
    description: 'POSPOS ระบบขายสินค้าและบริหารจัดการสต็อกสินค้าและลูกค้า(CRM) แสดงสรุปรายงานต่างๆ',
    url: 'https://go.pospos.co',
    tools: 'Angular, Node.js, MongoDB'
  },
  {
    id: 2,
    image: '/assets/images/projects/shopposposco.png',
    alt: 'shopposposco',
    title: 'ระบบ E-commerce',
    description: 'ร้านค้าออนไลน์ เชื่อมต่อกับระบบ POSPOS แสดงรายการสินค้า รับออเดอร์เมื่อลูกค้าเลือกสินค้าและชำระเงิน',
    url: 'https://shop.pospos.co',
    tools: 'Next.js, Nest.js, MongoDB'
  },
  {
    id: 3,
    image: '/assets/images/projects/hr.png',
    alt: 'hrzoft',
    title: 'HR-Zoft',
    description: 'หน้าเว็บหลัก แสดงข้อมูล บทความ และรายละเอียดของระบบ HR-Zoft',
    url: 'https://hrzoft.com/',
    tools: 'Next.js'
  },
  {
    id: 4,
    image: '/assets/images/projects/gohr.png',
    alt: 'gohrzoft',
    title: 'ระบบ บริหารจัดการทรัพยากรบุคคล(HR)',
    description: 'บริหารจัดการพนักงานเข้า-ออกงาน แสดงสิทธิและข้อมูลต่างๆของพนักงานในบริษัทรวมถึงสรุปรายงาน',
    url: 'https://go.hrzoft.com/',
    tools: 'React, Nest.js, MongoDB'
  },
  {
    id: 5,
    image: '/assets/images/projects/portal.png',
    alt: 'portal',
    title: 'ระบบ Portal',
    description: 'Admin Portal หน้าบริหารจัดการลูกค้าและการแสดงผลที่หน้าเว็บหลัก บทความ, แพคเกจ, อุปกรณ์',
    url: '',
    tools: 'React, Nest.js, MongoDB'
  },
  {
    id: 6,
    image: '/assets/images/projects/sdu.png',
    alt: 'sdu',
    title: 'ระบบวัดและแสดงผลค่าฝุ่นละอองภายในมหาวิทยาลัยสวนดุสิต',
    description: 'วัดค่าฝุ่นละอองภายในมหาวิทยาลัยโดยรับค่าจากเซนเซอร์และเก็บลงฐานข้อมูล',
    url: 'http://5911011940035.sci.dusit.ac.th/index.php',
    tools: 'PHP, MySQL, NodeMCU'
  },
  {
    id: 7,
    image: '/assets/images/projects/stripe-checkout.png',
    alt: 'stripe',
    title: 'ระบบ Payment Gateway (Stripe)',
    description:
      'การรับชำระเงินที่มาตรฐาน ผ่านบัตรเดบิต-เครดิต ธนาคารภายในหรือนอก และช่องทางชำระเงินออนไลน์รวมถึง QR Scan',
    url: 'https://stripe.com/en-th',
    tools: 'Stripe'
  },
  {
    id: 8,
    image: '/assets/images/projects/2c2p-checkout.png',
    alt: '2c2p',
    title: 'ระบบ Payment Gateway (2C2P)',
    description:
      'การรับชำระเงินที่มาตรฐาน ผ่านบัตรเดบิต-เครดิต ธนาคารภายในหรือนอก และช่องทางชำระเงินออนไลน์รวมถึง QR Scan',
    url: 'https://2c2p.com/',
    tools: '2C2P'
  },
  {
    id: 9,
    image: '/assets/images/projects/gopos.png',
    alt: '2c2p',
    title: 'Landing Page',
    description: 'หน้าเว็บแสดงรายละเอียดสินค้าและอุปกรณ์',
    url: '',
    tools: 'HTML, CSS, Javascript'
  },
  {
    id: 10,
    image: '/assets/images/projects/policy.jpg',
    alt: 'more',
    title: 'More',
    description: 'Another project that can not present by privacy and terms condition of client',
    url: '',
    tools: '🤐'
  }
]

const Project = () => {
  const [projects, setProjects] = useState<ProjectData[]>(data)
  const [openedModal, setOpenedModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectData>()

  const shuffleArray = (arr: ProjectData[]) => {
    const fixedItem = arr.find((item) => item.id === 10)
    const filtered = arr.filter((item) => item.id !== 10)

    const shuffled = [...filtered]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return fixedItem ? [...shuffled, fixedItem] : shuffled
  }

  useEffect(() => {
    const newData = shuffleArray(data)
    setProjects(newData)
  }, [])

  const handleSelectProject = (data: ProjectData) => {
    setSelectedProject(data)
    setOpenedModal(true)
  }

  return (
    <section id='project' className='py-10'>
      <Divider orientation='left'>
        <h4>2. Projects</h4>
      </Divider>

      <div className='lg:mx-40 my-10'>
        <List
          className='w-full'
          grid={{
            column: 3,
            gutter: 0,
            xs: 1,
            sm: 2,
            md: 2
          }}
          dataSource={projects}
          pagination={{
            align: 'center',
            pageSize: 6
          }}
          renderItem={(item) => (
            <List.Item style={{ padding: 10, margin: 0 }}>
              <div
                className='flex flex-col shadow-lg rounded-xl transition hover:scale-105 w-[300px] h-[300px] hover:cursor-pointer mx-auto'
                onClick={() => handleSelectProject(item)}>
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
                  <div className='flex-1 indent-8'>{item.description}</div>
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

      {selectedProject && (
        <CustomModal isOpened={openedModal} handleClose={() => setOpenedModal(false)}>
          {selectedProject.title}
          <div className='flex justify-center'>
            <Image src={selectedProject.image} width={500} height={500} alt={selectedProject.alt} />
          </div>
        </CustomModal>
      )}
    </section>
  )
}

export default Project
