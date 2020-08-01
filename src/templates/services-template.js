import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import "../css/templates.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"
import defaultImg from "../images/breadcrumb-bg.png"
import PageBanner from "../components/PageBanner"
import Sidebar from "../components/Sidebar"

const Template = ({ data }) => {
  const {
    name,
    // title,
    // price,
    // country,
    // days,
    description: { description },
    // images,
    // start,
  } = data.service

  return (
    <Layout>
      <SEO title={name} />
      <PageBanner img={defaultImg} title={name} link1="Home" link2="Services" />
      <section className="service-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="section-title">
                <h2>{name}</h2>
              </div>
              <p className="">{description}</p>
              <div className="">
                <AniLink fade to="/services" className="btn-primary">
                  back to services
                </AniLink>
              </div>
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
  query($slug: String!) {
    service: contentfulServices(slug: { eq: $slug }) {
      name
      title
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      images {
        fluid {
          src
        }
      }
    }
  }
`

export default Template
