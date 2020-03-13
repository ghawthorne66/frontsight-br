module.exports = {
 siteMetadata: {
  title: "FrontSight Marketing | Best Plumbing SEO Agency",
  description:
    "Looking for a professional plumber marketing company? Look no further than Front Sight Marketing. Learn more about our web design and pay per click services for hvac and plumbing companies!",
  author: "@toddhagler",
  data: {
    name: "Todd Hagler",
    age: 45
  },
 },
 plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-transition-link`,
],
}

 