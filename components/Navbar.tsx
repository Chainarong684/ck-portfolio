import { getCurrentTheme, toggleTheme } from '@/redux/themeSlice'
import { Menu, MenuProps, Switch } from 'antd'
import Image from 'next/image'
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
      label: 'About',
      key: 'about'
    },
    {
      label: 'Experience',
      key: 'experience'
    },
    {
      label: 'Project',
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
      label: 'Contact',
      key: 'contact'
    }
  ]

  const handleClickMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <Image
          width={25}
          height={25}
          src={`/assets/images/${theme === 'light' ? 'bulb-on.svg' : 'bulb-off.svg'}`}
          alt={`${theme === 'light' ? 'bulb-on' : 'bulb-off'}`}
          className='mr-1'
        />
        <p>CK.</p>
      </div>

      <Menu className='w-full' onClick={handleClickMenu} selectedKeys={[current]} mode='horizontal' items={items} />

      <Switch
        checked={theme === 'dark'}
        onChange={handleChangeTheme}
        checkedChildren='Dark'
        unCheckedChildren='Light'
      />
    </div>
  )
}

export default Navbar
