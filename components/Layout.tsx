import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { getCurrentTheme } from '@/redux/themeSlice'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useSelector(getCurrentTheme)

  return (
    <>
      <Header />
      <main id={theme}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
