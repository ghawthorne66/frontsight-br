import React, { Component } from "react"
import Layout from "../components/Layout"
// import StyledHero from "../components/StyledHero"
import PageBanner from "../components/PageBanner"
import Services from "../components/ServiceComponent/Services"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import defaultImg from "../images/breadcrumb-bg.png"

export default class services extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Services" />
        {/* <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} /> */}
        <PageBanner
          img={defaultImg}
          title="Our Services"
          link1="Home"
          link2="Services"
        />
        <Services />
      </Layout>
    )
  }
}

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
