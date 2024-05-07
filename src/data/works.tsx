import React from 'react'
import { Platform } from '../components/svg/platform'

type Work = {
  id: string
  name: string
  desc: React.JSX.Element | string
  links: { platform: Platform, url: string }[]
}

const works: Work[] = [
  {
    id: 'mobrei-house',
    name: '茂灵馆',
    desc: (
      <>
        <p>《灵能百分百》同人游戏，CP：茂灵</p>
        <p>你将扮演小酒窝，阻止五百年后仍因灵幻死亡暴走的茂夫</p>
      </>
    ),
    links: [
      {
        platform: 'windows',
        url: 'http://pan.baidu.com/s/1vmUlc-BOtYPUh6myzi-66w?pwd=0512'
      },
      {
        platform: 'android',
        url: 'http://pan.baidu.com/s/1JN42yQfCrmTWGUy9ZqsmgA?pwd=1010'
      },
      {
        platform: 'bilibili',
        url: ''
      },
      {
        platform: 'wechat',
        url: ''
      },
      {
        platform: 'xiaohongshu',
        url: ''
      },
      {
        platform: 'tiktok',
        url: ''
      },
      {
        platform: 'weibo',
        url: ''
      },
      {
        platform: 'email',
        url: ''
      },
      {
        platform: 'itchio',
        url: ''
      },
      {
        platform: 'taptap',
        url: ''
      },
      {
        platform: 'steam',
        url: ''
      },
      {
        platform: 'indienova',
        url: ''
      },
      {
        platform: 'web',
        url: ''
      },
      {
        platform: 'github',
        url: ''
      }
    ]
  },
  {
    id: 'fishing',
    name: '偷偷钓个鱼',
    desc: '偷偷钓个鱼',
    links: []
  },
  {
    id: 'paotuan',
    name: '跑团 IO',
    desc: '跑团工具',
    links: []
  },
  {
    id: 'es2',
    name: 'ES2 抽卡',
    desc: '偶像梦幻祭 2 抽卡模拟器',
    links: []
  }
]

export default works
