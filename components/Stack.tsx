import { Collapse } from 'antd'
import React from 'react'

const Stack = () => {
  const { Panel } = Collapse

  return (
    <div id='stack'>
      <Collapse ghost defaultActiveKey={['1', '2', '3', '4', '5']}>
        <Panel header='Frontend Development' key='1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi dolor commodi voluptatum aperiam
          blanditiis voluptatibus id, quo sunt aliquid rem asperiores quidem accusantium perspiciatis illum nihil
          deleniti, totam itaque!
        </Panel>
        <Panel header='Backend Development' key='2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi dolor commodi voluptatum aperiam
          blanditiis voluptatibus id, quo sunt aliquid rem asperiores quidem accusantium perspiciatis illum nihil
          deleniti, totam itaque!
        </Panel>
        <Panel header='Framework' key='3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi dolor commodi voluptatum aperiam
          blanditiis voluptatibus id, quo sunt aliquid rem asperiores quidem accusantium perspiciatis illum nihil
          deleniti, totam itaque!
        </Panel>
        <Panel header='Database' key='4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi dolor commodi voluptatum aperiam
          blanditiis voluptatibus id, quo sunt aliquid rem asperiores quidem accusantium perspiciatis illum nihil
          deleniti, totam itaque!
        </Panel>
        <Panel header='DevOps' key='5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi dolor commodi voluptatum aperiam
          blanditiis voluptatibus id, quo sunt aliquid rem asperiores quidem accusantium perspiciatis illum nihil
          deleniti, totam itaque!
        </Panel>
      </Collapse>
    </div>
  )
}

export default Stack
