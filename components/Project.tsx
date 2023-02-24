import { Card, Divider, List } from 'antd'
import Image from 'next/image'
import React from 'react'
import Stack from './Stack'

const Project = () => {
  const { Meta } = Card
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
    }
  ]

  return (
    <section id='project' className='py-20'>
      <Divider orientation='left'>
        <h4>2. Project</h4>
      </Divider>

      <List
        className='mt-10'
        grid={{
          column: 3,
          gutter: 0,
          xs: 1,
          sm: 2,
          md: 3
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ padding: 5, marginBottom: 0 }}>
            <div>
              {/* <div><Image src='/public/assets/images/hello.jpeg' /></div> */}
              <div>a</div>
            </div>
          </List.Item>
        )}
      />

      <Stack />
    </section>
  )
}

export default Project
