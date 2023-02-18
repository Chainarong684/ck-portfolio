import { getCurrentTheme, toggleTheme } from '@/redux/themeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import About from '@/components/About'

export default function Home() {
  const theme = useSelector(getCurrentTheme)

  return (
    <>
      <About />
      <div id='experience'></div>
      <div id='project'></div>
      <div id='contact'></div>
    </>
  )
}
