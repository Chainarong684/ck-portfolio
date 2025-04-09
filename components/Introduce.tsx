import { Typography } from 'antd'
import React from 'react'

const Introduce = () => {
  return (
    <section className='py-20'>
      <div className='flex flex-col items-center text-center'>
        <h4>Hi, my name is</h4>
        <h1>Chainarong Kieatmingmongkol</h1>
        <h2 className='p-5'>A Front end and Back end Developer</h2>
        <Typography.Paragraph className='w-full lg:w-[500px] leading-relaxed'>
          <pre>
            “const = (Programmer or Developer) =&gt; it mean an organism that converts <u>caffeine</u> into code usually
            late at nite.”
          </pre>
        </Typography.Paragraph>
      </div>
    </section>
  )
}

export default Introduce
