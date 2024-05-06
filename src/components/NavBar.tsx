import React from "react"
import works from '../data/works'
import { StaticImage } from 'gatsby-plugin-image'

function NavBar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-10">
      <div className="flex-1 flex gap-4 pl-6">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <StaticImage src="../images/logo.png" alt="logo" layout="fixed" width={40} height={40} />
          </div>
        </div>
        <a className="text-xl font-bold">Flora Studio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                项目
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none w-40">
                {works.map(work => <li key={work.name}><a>{work.name}</a></li>)}
              </ul>
            </details>
          </li>
          <li><a>成员</a></li>
          <li><a>联系</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
