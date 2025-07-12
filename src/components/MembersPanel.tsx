import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function MembersPanel() {
  return (
    <>
      <div id="members" className="pt-32 pb-12">
        <h2 className="text-center text-4xl font-bold">我们是谁？</h2>
      </div>
      <div className="flex flex-col xs:flex-row gap-4 items-center xs:items-stretch justify-center">
        <div className="w-80 card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <StaticImage src="../images/kara.png" alt="avatar of Kara" layout="fixed" width={80} height={80} />
              </div>
            </div>
            <h2 className="card-title mt-2">Kara</h2>
            <ul className="list-disc text-left">
              <li>策划 & 编剧 & 美术 & 测试</li>
              <li>资深二次元，游戏撰稿人</li>
              <li>就职过多家知名游戏公司</li>
              <li>专攻：休闲、经营、解谜、剧情</li>
            </ul>
          </div>
        </div>
        <div className="w-80 card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <StaticImage src="../images/maca.png" alt="avatar of Maca" layout="fixed" width={80} height={80} />
              </div>
            </div>
            <h2 className="card-title mt-2">Maca</h2>
            <ul className="list-disc text-left">
              <li>程序</li>
              <li>多年软件开发经验</li>
              <li>参与过国民级 APP 研发</li>
              <li>专注于大前端领域</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MembersPanel
