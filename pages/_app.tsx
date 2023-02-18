import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { createContext, useState } from 'react'

interface ThemeContext {
  theme: string
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContext | null>(null)

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}
