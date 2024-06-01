/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Yacht Charter`,
    siteUrl: `https://croatiayachtvacation.com`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-transformer-remark", "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "content",
      "path": "./content/"
    },
    __key: "content"
  }, {
    resolve: 'gatsby-omni-font-loader',
    options: {
      enableListener: true,
      preconnect: ['https://fonts.googleapsi.com', 'https://fonts.gstatic.com'],
      web: [
        {
          name: 'DM Sans',
          file: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap'
        }
      ]
    }
  }]
};