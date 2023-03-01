import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'

import Layout from '@/components/Layouts/Layout'
import { store } from '@/redux/store'

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const theme = store.getState().themeMode.theme
  //   console.log(theme)
  // }, [])

  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'var(--font-kanit)',
            fontSize: 16,
            borderRadius: 0
            // colorText: 'light' === 'light' ? 'var(--primary-light)' : 'var(--primary-dark)'
          }
        }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </Provider>
  )
}
