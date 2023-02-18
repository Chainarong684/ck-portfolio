import React from 'react'

import { useSelector } from 'react-redux'
import { getCurrentTheme } from '@/redux/themeSlice'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useSelector(getCurrentTheme)

  return (
    <div id={theme}>
      <Header />
      <main className='container' id={theme}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
