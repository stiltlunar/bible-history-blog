module.exports = {
  siteMetadata: {
    siteUrl: "https://www.biblehistory.info",
    title: "Bible History Blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog-posts`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
