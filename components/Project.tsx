import { Divider, List } from 'antd'
import Image from 'next/image'
import React from 'react'
import Stack from './Stack'

const Project = () => {
  const data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    },
    {
      title: 'Title 5'
    },
    {
      title: 'Title 6'
    },
    {
      title: 'Title 5'
    },
    {
      title: 'Title 6'
    }
  ]

  return (
    <section id='project' className='py-20'>
      <Divider orientation='left'>
        <h4>2. Project</h4>
      </Divider>

      <List
        className='mx-40 my-10'
        grid={{
          column: 3,
          gutter: 0,
          xs: 1,
          sm: 2,
          md: 3
        }}
        dataSource={data}
        pagination={{
          align: 'center',
          pageSize: 6
        }}
        renderItem={(item) => (
          <List.Item style={{ padding: 10, margin: 0 }}>
            <div className='flex flex-col shadow-lg w-[300px] h-[300px] transition hover:scale-105'>
              <Image className='flex-1' alt='showcase' width={300} height={300} src='/assets/images/hello.jpeg' />
              <div className='flex-1 p-4 flex flex-col justify-between'>
                <div>Lorem ipsum dolor sielit. Perspiciatis sint eveniet</div>
                <div>Hello</div>
              </div>
            </div>
          </List.Item>
        )}
      />
      <Divider />
      <Stack />
    </section>
  )
}

export default Project
