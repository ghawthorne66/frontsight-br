import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
// import Services from "../components/Home/Services"
import Present from "../components/Home/Present"

import StyledHero from "../components/StyledHero"
// import FeaturedTours from "../components/Home/FeaturedTours"
import SEO from '../components/SEO'


export default ({ data }) => (
  <Layout>
   <SEO title="About Us" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Digital Marketing for the HVAC Business"
        info=" Tired of wasting money on mediocre results in your marketing? Congratulations, you've found the solution"
      >
        <AniLink fade to="/services" className="btn-white">
          Learn More
        </AniLink>
      </Banner>
    </StyledHero>
   
    <Present />
    <About />
    {/* <Services /> */}
    {/* <FeaturedTours /> */}
  </Layout>
)
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`