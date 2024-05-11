import React from 'react'
import FaArrowRight from './svg/FaArrowRight'
import PiPencilCircle from './svg/PiPencilCircle'
import AiOutlineCode from './svg/AiOutlineCode'
import MdDevices from './svg/MdDevices'
import { toggleWork } from '../utils'

function ServicePanel() {
  return (
    <>
      <h2 id="service" className="text-center text-4xl font-bold pt-32 pb-12">帮助你的<span className="text-secondary">创意</span>成为<span className="text-accent">现实</span></h2>
      <div className="card bg-base-100 shadow-xl overflow-hidden max-w-3xl mx-auto">
        <div className="card-body relative">
          {/*<p>我们可为您提供私人定制的服务，包括但不限于：</p>*/}
          <div className="flex items-center gap-2">
            <PiPencilCircle className="flex-none text-6xl" />
            <div>
              <div className="font-bold">约稿</div>
              <div className="text-base-content/50">这是描述这是描述</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineCode className="flex-none text-6xl" />
            <div>
              <div className="font-bold">小游戏、工具定制开发</div>
              <div className="text-base-content/50">类似
                <u className="cursor-pointer" onClick={() => toggleWork('fishing')}>偷偷钓个鱼</u>
                、
                <u className="cursor-pointer" onClick={() => toggleWork('paotuan')}>跑团IO</u>
                、
                <u className="cursor-pointer" onClick={() => toggleWork('es2')}>抽卡模拟器</u>
                等
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdDevices className="flex-none text-6xl" />
            <div>
              <div className="font-bold">网站定制开发</div>
              <div className="text-base-content/50">官网、博客、后台管理系统等，不限类型</div>
            </div>
          </div>
          <p className="mt-8 flex flex-col gap-2 items-center">
            <a className="btn btn-primary btn-wide" href="https://wj.qq.com/s2/14602384/5592/" target="_blank" rel="noreferrer">联系我们<FaArrowRight /></a>
            <span className="text-base-content/50 text-sm">您也可以通过各个社交平台与我们取得联系</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default ServicePanel
