const path = require('path');

module.exports = {
  siteMetadata: {
    title: `OskarTT website`,
    description: ``,
    author: `Michał Kołodziej`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        utils: path.join(__dirname, 'src/utils'),
        images: path.join(__dirname, 'src/images'),
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Youtube",
        fieldName: "youtube",
        url: "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC2tut2uPQ03NJuWt9vERSlw&key=AIzaSyCYQNff-B28PImGKYyjqBWdu3aYUhIoUY4",
        fetch: (uri, options = {}) =>
          fetch(uri, { ...options, headers: sign(options.headers) }),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
