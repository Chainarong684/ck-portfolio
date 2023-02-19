import React from 'react'
import { useSelector } from 'react-redux'
import { Kanit } from '@next/font/google'

import { getCurrentTheme } from '@/redux/themeSlice'
import Footer from './Footer'
import Header from './Header'

const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['300', '600'],
  variable: '--font-kanit'
})

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useSelector(getCurrentTheme)

  return (
    <div className={kanit.className} id={theme}>
      <Header />
      <main className='container' id={theme}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
