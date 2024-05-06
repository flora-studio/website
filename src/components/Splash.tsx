import { StaticImage } from 'gatsby-plugin-image'
import FaAngleDown from './svg/FaAngleDown'
import * as React from 'react'

function Splash() {
  return (
    <div className="hero min-h-screen bg-base-200 relative">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <StaticImage src="../images/logo.png" alt="logo" layout="fixed" width={96} height={96} />
            </div>
          </div>
          <h1 className="text-5xl font-bold mt-6">Flora Studio</h1>
          <p className="py-6 text-2xl">专注于二次元、独立游戏和软件开发</p>
        </div>
      </div>
      <FaAngleDown
        className="text-primary text-5xl absolute bottom-10 animate-bounce cursor-pointer"
        onClick={() => { window.scroll({ top: window.innerHeight, behavior: 'smooth' }) }}
      />
    </div>
  )
}

export default Splash
