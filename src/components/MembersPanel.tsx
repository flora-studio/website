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
              <li>策划&编剧&美术&测试</li>
              <li>老二次元+同人女</li>
              <li>喜欢稀奇古怪的小游戏</li>
              <li>喜好阅读&写作</li>
              <li>常常沉浸在自己世界的 INTJ</li>
              <li>沉默的话痨</li>
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
              <li>码农</li>
              <li>社恐 INTP</li>
              <li>独立游戏爱好者</li>
              <li>手残且晕 3D</li>
              <li>兴趣广泛，不求甚解</li>
              <li>想创作有意思的东西</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MembersPanel
