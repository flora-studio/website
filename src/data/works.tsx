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
        url: 'https://www.bilibili.com/video/BV1vM4m1X72q'
      },
      {
        platform: 'wechat',
        url: 'https://mp.weixin.qq.com/s/QrNqIG7fM5IfsfakNRVK1Q'
      }
    ]
  },
  {
    id: 'fishing',
    name: '偷偷钓个鱼',
    desc: '偷偷钓个鱼',
    links: [
      {
        platform: 'web',
        url: 'https://fishing.florastudio.app/'
      },
      {
        platform: 'taptap',
        url: 'https://www.taptap.cn/app/461749'
      },
      {
        platform: 'itchio',
        url: 'https://florastudio.itch.io/fishing'
      },
      {
        platform: 'bilibili',
        url: 'https://www.bilibili.com/video/BV1b34y1g77M'
      },
      {
        platform: 'wechat',
        url: 'https://mp.weixin.qq.com/s/PPA4XamJNPOyW1mFf2nQQA'
      },
      {
        platform: 'indienova',
        url: 'https://indienova.com/g/fishing--2'
      }
    ]
  },
  {
    id: 'paotuan',
    name: '跑团 IO',
    desc: (
      <>
        <p>不只是骰子，更是跑团解决方案。</p>
        <p>跑团 IO 致力于提供便捷的跑团体验。无需任何代码知识与服务器成本，即可搭建自己的跑团平台/机器人，并享受多种实用的跑团功能。</p>
      </>
    ),
    links: [
      {
        platform: 'web',
        url: 'https://www.paotuan.io/'
      },
      {
        platform: 'github',
        url: 'https://github.com/paotuan/qqchannel-bot'
      },
      {
        platform: 'bilibili',
        url: 'https://www.bilibili.com/video/BV1hY4y1N7Ko'
      },
      {
        platform: 'qq',
        url: 'https://pd.qq.com/s/fjp30g'
      }
    ]
  },
  {
    id: 'es2',
    name: 'ES2 抽卡模拟器',
    desc: '偶像梦幻祭 2 抽卡模拟器',
    links: [
      {
        platform: 'web',
        url: 'https://es2.florastudio.app/'
      },
      {
        platform: 'github',
        url: 'https://flora-studio.github.io/es2/'
      },
      {
        platform: 'bilibili',
        url: 'https://www.bilibili.com/video/BV1xP4y1w7tD'
      },
      {
        platform: 'wechat',
        url: 'https://mp.weixin.qq.com/s/GbU40AtNUwQTb_x7kxAoZA'
      }
    ]
  }
]

export default works
