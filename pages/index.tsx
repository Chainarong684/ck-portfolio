import { Button } from 'antd'
import Head from 'next/head'
import { useContext } from 'react'
import { ThemeContext } from './_app'

export default function Home() {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main id={theme?.theme}>
        <div className='text-center'>Hello {theme?.theme}</div>
        <Button onClick={theme?.toggleTheme}>Click</Button>
      </main>
    </>
  )
}
