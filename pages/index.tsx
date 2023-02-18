import { getCurrentTheme, toggleTheme } from '@/redux/themeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'

export default function Home() {
  const theme = useSelector(getCurrentTheme)
  const dispatch = useDispatch()

  return (
    <>
      <div>{theme}</div>
      <Button onClick={() => dispatch(toggleTheme())}>Click</Button>
    </>
  )
}
