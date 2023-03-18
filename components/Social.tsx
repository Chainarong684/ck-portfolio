import React, { useState } from 'react'
import { GithubOutlined, LinkedinOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

import CustomModal from './CustomModal'

const Social = () => {
  const [openedModal, setOpenedModal] = useState(false)
  return (
    <div className='flex gap-x-2'>
      <Link href={'https://gitlab.com/CK.beer'} target='_blank'>
        <Button
          className='flex justify-center items-center hover:scale-125'
          type='text'
          shape='circle'
          icon={<Image alt='git-lab-logo' width={50} height={50} src='/assets/images/gitlab-logo.svg' />}
        />
      </Link>

      <Link href={'https://github.com/Chainarong684'} target='_blank'>
        <Button
          className='flex justify-center items-center hover:scale-125'
          type='text'
          shape='circle'
          icon={<GithubOutlined style={{ fontSize: 20 }} />}
        />
      </Link>

      <Button
        onClick={() => setOpenedModal(true)}
        className='flex justify-center items-center hover:scale-125'
        type='text'
        shape='circle'
        icon={<Image width={25} height={25} alt='line-ic' src='/assets/images/ic-line.svg' />}
      />

      <Link href={'https://www.facebook.com/Chainarong.LEO/'} target='_blank'>
        <Button
          className='flex justify-center items-center hover:scale-125'
          type='text'
          shape='circle'
          icon={<FacebookOutlined style={{ fontSize: 20 }} />}
        />
      </Link>

      <Link href={'https://www.instagram.com/9ckk_/'} target='_blank'>
        <Button
          className='flex justify-center items-center hover:scale-125'
          type='text'
          shape='circle'
          icon={<InstagramOutlined style={{ fontSize: 20 }} />}
        />
      </Link>

      <Link href={'https://www.linkedin.com/in/chainarong-kieatmingmongkol-a97b62266/'} target='_blank'>
        <Button
          className='flex justify-center items-center hover:scale-125'
          type='text'
          shape='circle'
          icon={<LinkedinOutlined style={{ fontSize: 20 }} />}
        />
      </Link>

      <CustomModal isOpened={openedModal} handleClose={() => setOpenedModal(false)}>
        <iframe className='border-none h-[540px] w-full' src='https://line.me/ti/p/leoleoleo684' title='LINE@'></iframe>
      </CustomModal>
    </div>
  )
}

export default Social
