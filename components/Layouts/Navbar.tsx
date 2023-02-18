import { getCurrentTheme, toggleTheme } from '@/redux/themeSlice'
import { Menu, MenuProps, Switch, Typography } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
          About
        </Link>
      ),
      key: 'about'
    },
    {
      label: (
        <Link href='#experience' scroll={false}>
          Experience
        </Link>
      ),
      key: 'experience'
    },
    {
      label: (
        <Link href='#project' scroll={false}>
          Project
        </Link>
      ),
      key: 'project',
      children: [
        {
          label: 'Option 1',
          key: 'setting:1'
        },
        {
          label: 'Option 2',
          key: 'setting:2'
        }
      ]
    },
    {
      label: (
        <Link href='#contact' scroll={false}>
          Contact
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
        <Image
          width={25}
          height={25}
          src={`/assets/images/${theme === 'light' ? 'bulb-on.svg' : 'bulb-off.svg'}`}
          alt={`${theme === 'light' ? 'bulb-on' : 'bulb-off'}`}
          className='mr-1'
        />
        <h1>CK</h1>
      </div>

      <Menu
        id={theme}
        className='w-full justify-center'
        onClick={handleClickMenu}
        selectedKeys={[current]}
        mode='horizontal'
        items={items}
      />

      <Switch
        className='border border-solid border-white'
        checked={theme === 'dark'}
        onChange={handleChangeTheme}
        checkedChildren='Dark'
        unCheckedChildren='Light'
      />
    </div>
  )
}

export default Navbar
