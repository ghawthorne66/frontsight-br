import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import FAQ from "../components/FAQ/faq"
import SEO from "../components/SEO"
import PageBanner from "../components/PageBanner"
import defaultImg from "../images/breadcrumb-bg.jpeg"

export default function faq({ data }) {
  return (
    <Layout>
      <SEO title="FAQ Page" />
      <PageBanner img={defaultImg} title="FAQ" link1="Home" link2="FAQ" />
      <FAQ />
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "contact-one.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
