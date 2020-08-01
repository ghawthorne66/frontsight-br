import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"
import defaultImg from "../images/breadcrumb-bg.png"
import PageBanner from "../components/PageBanner"

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <PageBanner img={defaultImg} title="Our Blogs" link1="Home" link2="Blog" />
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
