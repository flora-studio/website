import React, { PropsWithChildren, useState } from 'react'
import { Platform, PlatformIcon } from './svg/platform'
import { StaticImage } from 'gatsby-plugin-image'
import { Popover } from 'react-tiny-popover'

function Link({ platform, href }: { platform: Platform, href: string }) {
  const urlProps = href.startsWith('mailto') ? {} : { target: '_blank', rel: 'noreferrer' }
  return (
    <a role="button" className="btn btn-ghost btn-sm btn-circle" href={href} {...urlProps}>
      <PlatformIcon platform={platform} className="text-lg"/>
    </a>
  )
}

function Pop({ platform, children }: PropsWithChildren<{ platform: Platform }>) {
  const [open, setOpen] = useState(false)
  return (
    <Popover
      isOpen={open}
      positions="top"
      padding={4}
      content={
        <div className="z-[1] shadow bg-base-100 rounded-box overflow-hidden">
          {children}
        </div>
      }
      onClickOutside={() => setOpen(false)}
    >
      <a role="button" className="btn btn-ghost btn-sm btn-circle" onClick={() => setOpen(v => !v)}>
        <PlatformIcon platform={platform} className="text-lg"/>
      </a>
    </Popover>
  )
}

function Footer() {
  return <footer className="footer footer-center gap-y-2 py-10 text-base-content rounded relative">
    <nav>
      <div className="grid grid-flow-col">
        <Link platform="email" href="mailto:maca@florastudio.app" />
        <Pop platform="wechat">
          <StaticImage src="../images/wx.jpg" alt="wechat qrcode" layout="fixed" width={129} height={129} />
        </Pop>
        <Link platform="bilibili" href="https://space.bilibili.com/688429881" />
        <Link platform="xiaohongshu" href="https://www.xiaohongshu.com/user/profile/5bd451818bcbda000162dc20" />
        <Pop platform="tiktok">
          <StaticImage src="../images/tiktok.jpg" alt="tiktok qrcode" layout="fixed" width={224} height={272} />
        </Pop>
        <Link platform="weibo" href="https://weibo.com/u/6714705016" />
        <Link platform="taptap" href="https://www.taptap.cn/developer/252870" />
        <Link platform="indienova" href="https://indienova.com/u/florastudio" />
        <Link platform="itchio" href="https://florastudio.itch.io/" />
        <Link platform="afadian" href="https://afdian.net/a/florastudio" />
      </div>
    </nav>
    <aside>
      <p>Copyright © {new Date().getFullYear()} Flora Studio</p>
    </aside>
  </footer>
}

export default Footer
