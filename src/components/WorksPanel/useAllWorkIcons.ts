import { graphql, useStaticQuery } from 'gatsby'

export type WorkIcon = { workId: string, childImageSharp: any }

export function useAllWorkIcons() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "work-icons"}}) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(height: 32)
            }
          }
        }
      }
    }
  `)

  const list = data.allFile.edges.map((edge: any) => ({
    workId: edge.node.name,
    childImageSharp: edge.node.childImageSharp,
  })).filter((item: WorkIcon) => !!item.childImageSharp) as WorkIcon[]

  // group by
  const map = new Map<string, WorkIcon>()
  list.forEach(item => map.set(item.workId, item))
  return map
}
