import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Background() {
  return (
    <div className="fixed left-0 top-0 right-0 bottom-0" style={{ imageRendering: 'pixelated' }}>
      <StaticImage src="../images/left.png" alt="background image" layout="fixed" className="hidden sm:block absolute bottom-0 origin-bottom-left scale-[2]" />
      <StaticImage src="../images/right.png" alt="background image" layout="fixed" className="hidden sm:block absolute bottom-0 right-0 origin-bottom-right scale-[2]" />
      <div className="w-full h-full backdrop-blur" />
    </div>
  )
}

export default Background
