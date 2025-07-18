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
        <p>你将扮演小酒窝，阻止五百年后仍因灵幻死亡暴走的茂夫。</p>
        <p className="italic text-sm text-base-content/70">发布后广受好评，在小红书、抖音、微博、B 站等多个平台都有玩家单独开帖记录。</p>
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
    desc: (
      <>
        <p>摸鱼必备小游戏</p>
        <p>通过不断钓鱼，来制作料理、解锁图鉴、购买手办、获得宠物以及布置鱼缸吧！</p>
        <p className="italic text-sm text-base-content/70">迄今已有 10w+ 游玩，TapTap 最高排名热门休闲榜 #15</p>
      </>
    ),
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
        <p className="italic text-sm text-base-content/70">发布至今，已帮助 8000 位骰主搭建了自己的骰子。</p>
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
    desc: (
      <>
        <p>《偶像梦幻祭2》抽卡模拟器，缓解抽卡瘾的最佳工具</p>
        <p className="italic text-sm text-base-content/70">截至 2024 年 6 月，总计 25.5w 人使用，用户来自中国、美国、日本、韩国、马来西亚等 50 个国家</p>
        <p className="italic text-sm text-base-content/70">高峰期每半小时同时在线人数 6500+，抽卡次数 20w+</p>
      </>
    ),
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
  },
  {
    id: 'jingnuan',
    name: '鲸暖的小窝',
    desc: (
      <>
        <p>扮演可爱的鲸暖，在海滩上不断寻宝贝壳、乐器碎片、音乐灵感等，并通过谱曲的方式，组合出独属于自己的 BGM 。</p>
        <p>和 Warsic 音乐社团合作的商单。我方主要负责创意的统筹落地、项目的协助管理，以及核心程序实现等重要工作。</p>
        <p className="italic text-sm text-base-content/70">TapTap 最高排名新品榜 #18</p>
      </>
    ),
    links: [
      {
        platform: 'web',
        url: 'https://kino.warsic.cn/'
      },
      {
        platform: 'taptap',
        url: 'https://www.taptap.cn/app/759306'
      },
    ]
  }
]

export default works
