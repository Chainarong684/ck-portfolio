import { getCurrentTheme } from '@/redux/themeSlice'
import { Button, Divider } from 'antd'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import Social from './Social'
import { PrinterOutlined } from '@ant-design/icons'

const About = () => {
  const theme = useSelector(getCurrentTheme)

  return (
    <section id='about' className='py-10 h-[600px] relative'>
      <Divider orientation='left'>
        <h4>0. About me</h4>
      </Divider>
      <div className='lg:w-[50%] lg:ml-20'>
        <h1>Chainarong Kieatmingmongkol</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus temporibus impedit, molestiae
          repellat, beatae voluptates asperiores nam iste error quod animi! Error debitis quam voluptas dignissimos,
          eveniet accusamus quasi! Lorem ipsum, dolor sit
        </p>
        <div className='mt-10 flex items-center gap-x-4'>
          <Button className={`flex items-center hover:scale-110 ${theme === 'light' ? 'btn-light' : 'btn-dark'}`}>
            <PrinterOutlined />
            Resume
          </Button>
          <Social />
        </div>
      </div>

      <Image
        className='block lg:hidden mx-auto py-10'
        src='/assets/images/avatar01.JPEG'
        width={150}
        height={200}
        alt='avatar-photo'
      />

      <div className='hidden lg:flex group/box'>
        <div className='absolute w-[280px] h-[350px] top-[250px] right-[290px] border-4 border-solid border-primary-light-600 transition delay-150 group-hover/box:-rotate-12'></div>
        <Image
          className='absolute top-[200px] right-[257px] transition delay-75 group-hover/box:rotate-12'
          src='/assets/images/avatar01.JPEG'
          width={280}
          height={350}
          alt='avatar-photo'
        />
      </div>
    </section>
  )
}

export default About
