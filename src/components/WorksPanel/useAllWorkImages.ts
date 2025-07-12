import { graphql, useStaticQuery } from 'gatsby'
import works from '../../data/works'

export type WorkImage = { name: string, thumb: any, picture: any, workId: string }

export function useAllWorkImages() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {glob: "works/*"}}) {
        edges {
          node {
            name
            thumbs: childImageSharp {
              gatsbyImageData(height: 200)
            }
            pictures: childImageSharp {
              gatsbyImageData(height: 1000)
            }
            relativeDirectory
          }
        }
      }
    }
  `)

  const list = data.allFile.edges.map((edge: any) => ({
    name: edge.node.name,
    thumb: edge.node.thumbs,
    picture: edge.node.pictures,
    workId: edge.node.relativeDirectory.replace(/^works\//, '')
  })).filter((item: WorkImage) => !!item.thumb) as WorkImage[]

  // group by
  const map = new Map<string, WorkImage[]>()
  works.forEach(work => map.set(work.id, []))
  list.forEach(img => map.get(img.workId)?.push(img))
  return map
}
