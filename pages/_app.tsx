import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from '@/redux/store'
import Layout from '@/components/Layouts/Layout'
import { ConfigProvider } from 'antd'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'var(--font-kanit)'
          }
        }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </Provider>
  )
}
