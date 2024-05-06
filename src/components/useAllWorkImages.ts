import { graphql, useStaticQuery } from 'gatsby'
import works from '../data/works'

export type WorkImage = { name: string, childImageSharp: any, workId: string }

export function useAllWorkImages() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {glob: "works/*"}}) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(height: 200, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
            }
            relativeDirectory
          }
        }
      }
    }
  `)

  const list = data.allFile.edges.map((edge: any) => ({
    name: edge.node.name,
    childImageSharp: edge.node.childImageSharp,
    workId: edge.node.relativeDirectory.replace(/^works\//, '')
  })).filter((item: WorkImage) => !!item.childImageSharp) as WorkImage[]

  // group by
  const map = new Map<string, WorkImage[]>()
  works.forEach(work => map.set(work.id, []))
  list.forEach(img => map.get(img.workId)?.push(img))
  return map
}
