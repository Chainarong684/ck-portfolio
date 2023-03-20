import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Introduce from '@/components/Introduce'
import Project from '@/components/Project'
import { FloatButton } from 'antd'

export default function Home() {
  return (
    <>
      <Introduce />
      <About />
      <Experience />
      <Project />
      <Contact />
      <FloatButton.BackTop visibilityHeight={300} style={{ width: 50, height: 50 }} type='primary' />
    </>
  )
}
