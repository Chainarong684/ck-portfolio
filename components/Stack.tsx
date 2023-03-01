import { Collapse } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Stack = () => {
  const { Panel } = Collapse

  const frontend = [
    {
      icon: '/assets/images/stack/ic-angular.svg',
      link: 'https://angular.io/',
      title: 'Angular'
    },
    {
      icon: '/assets/images/stack/ic-nextjs.svg',
      link: 'https://nextjs.org/',
      title: 'NextJs'
    },
    {
      icon: '/assets/images/stack/ic-react.svg',
      link: 'https://reactjs.org/',
      title: 'React'
    },
    {
      icon: '/assets/images/stack/ic-redux.svg',
      link: 'https://redux.js.org/',
      title: 'Redux'
    },
    {
      icon: '/assets/images/stack/ic-html.svg',
      link: '',
      title: 'HTML'
    },
    {
      icon: '/assets/images/stack/ic-css.svg',
      link: '',
      title: 'CSS'
    },
    {
      icon: '/assets/images/stack/ic-javascript.svg',
      link: '',
      title: 'Javascript'
    },
    {
      icon: '/assets/images/stack/ic-typescript.svg',
      link: 'https://www.typescriptlang.org/',
      title: 'Typescript'
    },
    {
      icon: '/assets/images/stack/ic-jquery.svg',
      link: 'https://jquery.com/',
      title: 'Jquery'
    },

    {
      icon: '/assets/images/stack/ic-ejs.svg',
      link: 'https://ejs.co/',
      title: 'EJS'
    },
    {
      icon: '/assets/images/stack/ic-tailwind.svg',
      link: 'https://tailwindcss.com/',
      title: 'Tailwind'
    },
    {
      icon: '/assets/images/stack/ic-ant-design.svg',
      link: 'https://ant.design/',
      title: 'Ant-design'
    },
    {
      icon: '/assets/images/stack/ic-material-ui.svg',
      link: 'https://mui.com/',
      title: 'Material-ui'
    },
    {
      icon: '/assets/images/stack/ic-bootstrap.png',
      link: 'https://getbootstrap.com/',
      title: 'Bootstrap'
    }
  ]
  const backend = [
    {
      icon: '/assets/images/stack/ic-nodejs.svg',
      link: 'https://nodejs.org',
      title: 'NodeJs'
    },
    {
      icon: '/assets/images/stack/ic-nestjs.svg',
      link: 'https://nestjs.com/',
      title: 'Nestjs'
    },
    {
      icon: '/assets/images/stack/ic-swagger.svg',
      link: 'https://swagger.io/',
      title: 'Swagger'
    }
  ]
  const database = [
    {
      icon: '/assets/images/stack/ic-mongodb.svg',
      link: 'https://www.mongodb.com/',
      title: 'MongoDB'
    },
    {
      icon: '/assets/images/stack/ic-mysql.svg',
      link: 'https://www.mysql.com/',
      title: 'Mysql'
    },
    {
      icon: '/assets/images/stack/ic-redis.svg',
      link: 'https://redis.io/',
      title: 'Redis'
    }
  ]
  const devops = [
    {
      icon: '/assets/images/stack/ic-gitlab.svg',
      link: 'https://about.gitlab.com/',
      title: 'GitLab'
    },
    {
      icon: '/assets/images/stack/ic-github.svg',
      link: 'https://github.com/',
      title: 'GitHub'
    },
    {
      icon: '/assets/images/stack/ic-docker.svg',
      link: 'https://www.docker.com/',
      title: 'Docker'
    },
    {
      icon: '/assets/images/stack/ic-pm2.svg',
      link: 'https://pm2.keymetrics.io/',
      title: 'PM2'
    },
    {
      icon: '/assets/images/stack/ic-postman.svg',
      link: 'https://www.postman.com/',
      title: 'Postman'
    }
  ]
  const productivity = [
    {
      icon: '/assets/images/stack/ic-slack.svg',
      link: 'https://slack.com/',
      title: 'Slack'
    },
    {
      icon: '/assets/images/stack/ic-trello.svg',
      link: 'https://trello.com',
      title: 'Trello'
    },
    {
      icon: '/assets/images/stack/ic-figma.svg',
      link: 'https://www.figma.com/',
      title: 'Figma'
    },
    {
      icon: '/assets/images/stack/stripe.svg',
      link: 'https://stripe.com',
      title: 'Stripe'
    },
    {
      icon: '/assets/images/stack/ic-2c2p.png',
      link: 'https://2c2p.com/',
      title: '2C2P'
    }
  ]

  return (
    <div id='stack'>
      <Collapse ghost size='small' defaultActiveKey={['1', '2', '3', '4', '5']}>
        <Panel header='Frontend Development' key='1'>
          <div className='flex flex-wrap gap-4'>
            {frontend.map((item, index) => (
              <Link key={index} href={item.link} target='_blank'>
                <div className='flex flex-col justify-center items-center bg-zinc-200 p-2 rounded-xl duration-150 hover:scale-110 w-[100px] h-[100px]'>
                  <Image className='flex-1 object-contain' width={50} height={50} src={item.icon} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </Panel>
        <Panel header='Backend Development' key='2'>
          <div className='flex flex-wrap gap-4'>
            {backend.map((item, index) => (
              <Link key={index} href={item.link} target='_blank'>
                <div className='flex flex-col justify-center items-center bg-zinc-200 p-2 rounded-xl duration-150 hover:scale-110 w-[100px] h-[100px]'>
                  <Image className='flex-1 object-contain' width={50} height={50} src={item.icon} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </Panel>
        <Panel header='Database' key='3'>
          <div className='flex flex-wrap gap-4'>
            {database.map((item, index) => (
              <Link key={index} href={item.link} target='_blank'>
                <div className='flex flex-col justify-center items-center bg-zinc-200 p-2 rounded-xl duration-150 hover:scale-110 w-[100px] h-[100px]'>
                  <Image className='flex-1 object-contain' width={50} height={50} src={item.icon} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </Panel>
        <Panel header='DevOps' key='4'>
          <div className='flex flex-wrap gap-4'>
            {devops.map((item, index) => (
              <Link key={index} href={item.link} target='_blank'>
                <div className='flex flex-col justify-center items-center bg-zinc-200 p-2 rounded-xl duration-150 hover:scale-110 w-[100px] h-[100px]'>
                  <Image className='flex-1 object-contain' width={50} height={50} src={item.icon} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </Panel>
        <Panel header='Productivity & Other' key='5'>
          <div className='flex flex-wrap gap-4'>
            {productivity.map((item, index) => (
              <Link key={index} href={item.link} target='_blank'>
                <div className='flex flex-col justify-center items-center bg-zinc-200 p-2 rounded-xl duration-150 hover:scale-110 w-[100px] h-[100px]'>
                  <Image className='flex-1 object-contain' width={50} height={50} src={item.icon} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </Panel>
      </Collapse>
    </div>
  )
}

export default Stack
