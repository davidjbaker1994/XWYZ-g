module.exports = {
  siteMetadata: {
    title: `XWYZ Designs`,
    description: `North Ga's New Cutting Edge Web Design Co.`,
    author: `XWYZ Designs`,
    siteUrl: `https://xwyz.co`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
        }`
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://xwyz.co',
        sitemap: 'https://xwyz.co/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}
