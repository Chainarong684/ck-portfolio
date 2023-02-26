import { Button, Divider, List } from 'antd'
import Image from 'next/image'
import React from 'react'
import Stack from './Stack'
import { ExportOutlined } from '@ant-design/icons'

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
    <section id='project' className='py-10'>
      <Divider orientation='left'>
        <h4>2. Projects</h4>
      </Divider>

      <div className='mx-40 my-10'>
        <List
          className='w-full'
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
              <div className='flex flex-col shadow-lg transition hover:scale-105 w-[300px] h-[300px]'>
                <Image alt='showcase' width={300} height={300} src='/assets/images/hello.jpeg' />

                <div className='flex-1 p-2 flex flex-col justify-between'>
                  <div className='flex-1'>Lorem ipsum dolor sielit. Perspiciatis sint eveniet</div>
                  <div className='flex justify-between'>
                    <div className='flex-1'>a</div>
                    <Button
                      className='flex justify-center items-center hover:cursor-pointer'
                      shape='circle'
                      type='text'
                      icon={<ExportOutlined />}
                    />
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />

        <Divider />
        <Stack />
      </div>
    </section>
  )
}

export default Project
