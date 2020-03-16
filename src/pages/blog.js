import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import { graphql } from 'gatsby'
import BlogList from '../components/Blog/BlogList'
import SEO from '../components/SEO'
import BlogBanner from '../components/BlogBanner'


const blog = ({data}) => {
  return (
    <Layout>
     <SEO title='Blog' />
     <StyledHero img={data.blogBcg.childImageSharp.fluid} />
     <BlogBanner
     title="Blog"
        
     />

    <BlogList />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blueprint.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default blog
