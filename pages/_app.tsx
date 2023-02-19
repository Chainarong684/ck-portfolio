import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'

import { store } from '@/redux/store'
import Layout from '@/components/Layouts/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'var(--font-kanit)',
            fontSize: 16,
            borderRadius: 0
          }
        }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </Provider>
  )
}
