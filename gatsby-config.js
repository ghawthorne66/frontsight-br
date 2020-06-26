require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});
module.exports = {
  siteMetadata: {
    title: "FrontSight Marketing | Best HVAC and Plumbing SEO Agency",
    description:
      "Looking for a professional plumber marketing company? Look no further than Front Sight Marketing. Learn more about our web design and pay per click services for hvac and plumbing companies!",
    author: "@toddhagler",
    twitterUsername: "@frontsightseo",
    image: "/images/banner-logo.png",
    siteUrl: 'https://frontsightmarketing.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.frontsightmarketing.com',
        sitemap: 'https://www.frontsightmarketing.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,

      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      }
    },
    {
      resolve: 'gatsby-plugin-facebook-pixel',
      options: {
        pixelId: '674999336607217',
      },
    },

    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    'gatsby-plugin-next-seo',
      `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
  ],
}

