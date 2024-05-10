import * as React from "react"
import { Link, HeadFC, PageProps, navigate } from 'gatsby'
import { useEffect } from 'react'

const NotFoundPage: React.FC<PageProps> = () => {
  useEffect(() => {
    navigate('/')
  }, [])
  return <main></main>
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
