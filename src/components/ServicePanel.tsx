import React from 'react'
import FaArrowRight from './svg/FaArrowRight'
import PiPencilCircle from './svg/PiPencilCircle'
import AiOutlineCode from './svg/AiOutlineCode'
import VscGame from './svg/VscGame'
import { toggleWork } from '../utils'

function ServicePanel() {
  return (
    <>
      <h2 id="service" className="text-center text-4xl font-bold pt-32 pb-12">帮助你的<span className="text-secondary">创意</span>成为<span className="text-accent">现实</span></h2>
      <div className="card bg-base-100 shadow-xl overflow-hidden max-w-3xl mx-auto">
        <div className="card-body relative flex flex-col gap-4">
          {/*<p>我们可为您提供私人定制的服务，包括但不限于：</p>*/}
          <div className="flex items-start gap-2">
            <VscGame className="flex-none text-6xl" />
            <div>
              <div className="card-title my-1">个人 IP 孵化/同人游戏/ OC 独立游戏制作</div>
              {/*<div className="text-base-content/50 italic text-sm">想为心爱的 OC 制作专属小游戏，却无力从零开始制作？</div>*/}
              {/*<div className="text-base-content/50 italic text-sm">有诸多美好脑洞，可惜没有技术将它们一一实现？</div>*/}
              {/*<div className="text-base-content/50 italic text-sm">只想画画写字，而不愿面对大量繁琐的落地细节？</div>*/}
              <div className="text-base-content/50">我们擅长统筹创意、输出落地方案、跟进项目，直至所有定制化需求全部落地，并持续维护优化后续内容。</div>
              <div className="text-base-content/50">擅长网页小游戏 / RPG Maker，可协助上架 TapTap 等平台。</div>
              <div className="text-base-content/50">相关作品参考：
                <u className="cursor-pointer" onClick={() => toggleWork('jingnuan')}>鲸暖的小窝</u>、
                <u className="cursor-pointer" onClick={() => toggleWork('mobrei-house')}>茂灵馆</u>、
                <u className="cursor-pointer" onClick={() => toggleWork('fishing')}>偷偷钓个鱼</u>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <AiOutlineCode className="flex-none text-6xl" />
            <div>
              <div className="card-title my-1">网站/工具定制开发</div>
              <div className="text-base-content/50">提供官网、博客、后台管理系统等，多种类型的网站/工具定制服务。</div>
              <div className="text-base-content/50">相关作品参考：
                <u className="cursor-pointer" onClick={() => toggleWork('paotuan')}>跑团 IO</u>、
                <u className="cursor-pointer" onClick={() => toggleWork('es2')}>抽卡模拟器</u>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <PiPencilCircle className="flex-none text-6xl" />
            <div>
              <div className="card-title my-1">二次元/游戏的分析/评测</div>
              <div className="text-base-content/50">以创作者的角度，对二次元/游戏的角色/CP/作品框架输出设计报告。</div>
              <div className="text-base-content/50">帮助爱好者深度了解作品，协助从业者宣传作品/了解市场。</div>
              <div className="text-base-content/50">相关作品参考：
                <a href="https://mp.weixin.qq.com/s/KR4S0Wub0dA3w7Q4uJBx1w" target="_blank" rel="noreferrer" className="underline">茂灵 CP 分析</a>、
                <a href="https://weibo.com/ttarticle/p/show?id=2309404696702287479336" target="_blank" rel="noreferrer" className="underline">左马一 CP 分析</a>、
                <a href="https://indienova.com/author/mHENt1sO6028Vdbd/" target="_blank" rel="noreferrer" className="underline">indienova 游戏评测</a>
              </div>
            </div>
          </div>
          <p className="mt-4 flex flex-col gap-2 items-center">
            <a className="btn btn-primary btn-wide" href="https://wj.qq.com/s2/14602384/5592/" target="_blank" rel="noreferrer">联系我们<FaArrowRight /></a>
            <span className="text-base-content/50 text-sm">您也可以通过各个社交平台与我们取得联系</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default ServicePanel
