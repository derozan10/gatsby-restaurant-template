module.exports = {
  siteMetadata: {
    title: 'Ristretto',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `jqbawep47kul`,
        accessToken: `05d8f5a350e74547b18f4b4f7eb3fcaf129dde9969ce224102b9230ff68e0aaf`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ],
}
