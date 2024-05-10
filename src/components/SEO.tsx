import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

function SEO() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const meta = data.site.siteMetadata

  return (
    <>
      <html lang="zh" />
      <title>{meta.title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={meta.description} />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </>
  )
}

export default SEO
