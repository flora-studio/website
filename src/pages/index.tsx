import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBar from '../components/NavBar'
import Splash from '../components/Splash'
import WorksPanel from '../components/WorksPanel'
import MembersPanel from '../components/MembersPanel'
import Background from '../components/Background'
import ServicePanel from '../components/ServicePanel'
import Footer from '../components/Footer'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Background/>
      <NavBar/>
      <Splash/>
      <main className="px-4 relative">
        <WorksPanel/>
        <MembersPanel/>
        <ServicePanel/>
      </main>
      <Footer/>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
