import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='container'>
      <Head>
        <title>CK | Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </div>
  )
}

export default Header