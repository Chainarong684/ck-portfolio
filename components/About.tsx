import { getCurrentTheme } from '@/redux/themeSlice'
import { Button } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ResumeModal from './ResumeModal'
import Social from './Social'

const About = () => {
  const theme = useSelector(getCurrentTheme)
  const [openedResume, setOpenedResume] = useState(false)

  return (
    <section id='about' className='py-20 h-[600px] relative'>
      <div className='w-[50%] ml-20'>
        <h4>Hi, my name is</h4>
        <h1>Chainarong Kieatmingmongkol</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus temporibus impedit, molestiae
          repellat, beatae voluptates asperiores nam iste error quod animi! Error debitis quam voluptas dignissimos,
          eveniet accusamus quasi! Lorem ipsum, dolor sit
        </p>
        <div className='mt-10 flex items-center gap-x-4'>
          <Button onClick={() => setOpenedResume(true)} className={theme === 'light' ? 'btn-light' : 'btn-dark'}>
            Resume
          </Button>
          <Social />
        </div>
      </div>
      <div className='absolute w-[280px] h-[350px] top-[250px] right-[290px] border-4 border-solid border-primary-light-600'></div>
      <Image
        className='absolute top-[200px] right-[250px] hover:origin-top-left hover:rotate-12'
        src='/assets/images/avatar01.JPEG'
        width={280}
        height={350}
        alt='avatar-photo'
      />
      <ResumeModal isOpened={openedResume} handleClose={() => setOpenedResume(false)} />
    </section>
  )
}

export default About
