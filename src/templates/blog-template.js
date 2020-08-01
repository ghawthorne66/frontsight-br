import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import StyledHero from "../components/StyledHero"
import SEO from "../components/SEO"
import Sidebar from "../components/Sidebar"

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
    image,
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className="">
            <img
              width="400"
              src={node.data.target.fields.file["en-US"].url}
              alt={node.data.target.fields.title["en-US"]}
            />
          </div>
        )
      },
      "embedded-entry-block": node => {
        const { title, image, text } = node.data.target.fields

        return (
          <div className="new-post">
            <h1>this is other post : {title["en-US"]}</h1>
            <img
              width="400"
              src={image["en-US"].fields.file["en-US"].url}
              alt=""
            />
            {documentToReactComponents(text["en-US"])}
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={title} />
      <StyledHero img={image.fluid} />
      <section className={styles.blog}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="section-title">
                <h2>{title}</h2>
              </div>
              <h6>Published at: {published}</h6>
              <article className={styles.post}>
                {documentToReactComponents(json, options)}
              </article>
              <AniLink fade to="/blog" className="btn-primary">
                all posts
              </AniLink>
            </div>
            <div className="col-md-4 col-sm-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
      image {
        fluid {
          src
        }
      }
    }
  }
`

export default Blog
