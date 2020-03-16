import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from 'gatsby'
import Contact from "../components/Contacts/Contact";
import SEO from '../components/SEO'

export default function contact({data}) {
  return (
  <Layout>
   <SEO title='Contact Page' />
   <StyledHero img={data.contactBcg.childImageSharp.fluid}/>
   <Contact />
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
