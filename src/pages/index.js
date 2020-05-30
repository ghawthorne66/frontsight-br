import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import BannerTwo from "../components/Banner-2"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Present from "../components/Home/Present"
import StyledHero from "../components/StyledHero"
import FeaturedServices from "../components/Home/FeaturedServices"
import SEO from '../components/SEO'
import Intro from '../components/Home/Intro'


export default ({ data }) => (

  <Layout>
   <SEO title="Home" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="HVAC and Plumbing Marketing Experts"
        info=" Is your online strategy suffering? Congratulations, you've found the solution"
      >
        <AniLink fade to="/services" className="btn-white">
          Learn More
        </AniLink>
      </Banner>
    </StyledHero>
    <Intro />
   
    <Present />
    <About />
    <Services />
    <FeaturedServices />
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