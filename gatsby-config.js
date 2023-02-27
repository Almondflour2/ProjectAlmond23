/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ProjectAlmond23`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-gatsby-cloud", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Zen Kaku Gothic New`,
        `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'},
    __key: "pages"
  }]
};