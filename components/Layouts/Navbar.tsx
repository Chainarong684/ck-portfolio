import React, { useState } from 'react'
import { Menu, MenuProps, Switch } from 'antd'
import { CloudOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { getCurrentTheme, toggleTheme } from '@/redux/themeSlice'

const Navbar = () => {
  const theme = useSelector(getCurrentTheme)
  const dispatch = useDispatch()

  const [current, setCurrent] = useState('about')

  const handleChangeTheme = () => {
    dispatch(toggleTheme())
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <Link href='#about' scroll={false}>
          0. About
        </Link>
      ),
      key: 'about'
    },
    {
      label: (
        <Link href='#experience' scroll={false}>
          1. Experience
        </Link>
      ),
      key: 'experience'
    },
    {
      label: (
        <Link href='#project' scroll={false}>
          2. Projects
        </Link>
      ),
      key: 'project',
      children: [
        {
          label: (
            <Link href='#project' scroll={false}>
              [0]. Part of me
            </Link>
          ),
          key: 'project:1'
        },
        {
          label: (
            <Link href='#stack' scroll={false}>
              [1]. My Stack
            </Link>
          ),
          key: 'project:2'
        }
      ]
    },
    {
      label: (
        <Link href='#contact' scroll={false}>
          3. Contact
        </Link>
      ),
      key: 'contact'
    }
  ]

  const handleClickMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }

  return (
    <div className='flex items-center justify-between h-[80px]'>
      <div className='flex items-center w-[100px]'>
        <div className='hidden md:flex mr-1'>
          {theme === 'light' ? (
            <CloudOutlined style={{ fontSize: 25 }} />
          ) : (
            <Image width={35} height={35} src='/assets/images/leaf.svg' alt='leaf' />
          )}
        </div>

        <h1>
          <Link href='/'>CK</Link>
        </h1>
      </div>

      <Menu
        id={theme}
        style={{ minWidth: 0, flex: 'auto' }}
        className='w-full justify-center'
        onClick={handleClickMenu}
        selectedKeys={[current]}
        mode='horizontal'
        items={items}
      />

      <Switch
        className='hidden md:flex w-[90px]'
        checked={theme === 'dark'}
        onChange={handleChangeTheme}
        checkedChildren='Nature'
        unCheckedChildren='Cloud'
      />
      <div className='flex md:hidden mr-1' onClick={() => handleChangeTheme()}>
        {theme === 'light' ? (
          <CloudOutlined style={{ fontSize: 25 }} />
        ) : (
          <Image width={35} height={35} src='/assets/images/leaf.svg' alt='leaf' />
        )}
      </div>
    </div>
  )
}

export default Navbar
