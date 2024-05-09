import React from 'react'
import { PlatformIcon } from './svg/platform'
import { StaticImage } from 'gatsby-plugin-image'

function Footer() {
  return <footer className="footer footer-center gap-y-2 p-10 text-base-content rounded relative">
    <nav>
      <div className="grid grid-flow-col">
        <a role="button" className="btn btn-ghost btn-sm btn-circle" href="mailto:maca@florastudio.app">
          <PlatformIcon platform="email" className="text-lg"/>
        </a>
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle">
            <PlatformIcon platform="wechat" className="text-lg"/>
          </div>
          <div tabIndex={0} className="dropdown-content z-[1] p-1 shadow bg-base-100 rounded-box overflow-hidden">
            <StaticImage src="../images/wx.jpg" alt="wechat qrcode" layout="fixed" width={129} height={129} />
          </div>
        </div>
        <a role="button" className="btn btn-ghost btn-sm btn-circle" href="https://space.bilibili.com/688429881" target="_blank" rel="noreferrer">
          <PlatformIcon platform="bilibili" className="text-lg"/>
        </a>
        <a role="button" className="btn btn-ghost btn-sm btn-circle" href="https://www.xiaohongshu.com/user/profile/5bd451818bcbda000162dc20" target="_blank" rel="noreferrer">
          <PlatformIcon platform="xiaohongshu" className="text-lg"/>
        </a>
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle">
            <PlatformIcon platform="tiktok" className="text-lg"/>
          </div>
          <div tabIndex={0} className="dropdown-content z-[1] shadow bg-base-100 rounded-box overflow-hidden">
            <StaticImage src="../images/tiktok.jpg" alt="tiktok qrcode" layout="fixed" width={224} height={272} />
          </div>
        </div>
        <a role="button" className="btn btn-ghost btn-sm btn-circle" href="https://weibo.com/u/6714705016" target="_blank" rel="noreferrer">
          <PlatformIcon platform="weibo" className="text-lg"/>
        </a>
        <a role="button" className="btn btn-ghost btn-sm btn-circle" href="https://www.taptap.cn/developer/252870" target="_blank" rel="noreferrer">
          <PlatformIcon platform="taptap" className="text-lg"/>
        </a>
        <a role="button" className="btn btn-ghost btn-sm btn-circle" href="https://indienova.com/u/florastudio" target="_blank" rel="noreferrer">
          <PlatformIcon platform="indienova" className="text-lg"/>
        </a>
        <a role="button" className="btn btn-ghost btn-sm btn-circle" href="https://florastudio.itch.io/" target="_blank" rel="noreferrer">
          <PlatformIcon platform="itchio" className="text-lg"/>
        </a>
        <a role="button" className="btn btn-ghost btn-sm btn-circle" href="https://afdian.net/a/florastudio" target="_blank" rel="noreferrer">
          <PlatformIcon platform="afadian" className="text-lg"/>
        </a>
      </div>
    </nav>
    <aside>
      <p>Copyright © 2024 Flora Studio</p>
    </aside>
  </footer>
}

export default Footer
