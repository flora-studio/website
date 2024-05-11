import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `芙露拉工作室 | Flora Studio`,
    siteUrl: `https://florastudio.app`,
    description: '专注于二次元、独立游戏和软件开发',
    image: `/logo.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ['G-204S9ZJ7Q6']
      }
    },
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: [`auto`, `webp`, 'avif'],
          placeholder: `dominantColor`,
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};

export default config;
