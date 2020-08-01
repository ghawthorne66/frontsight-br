import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import "../../css/serviceitem.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ServiceFlow from "./ServiceFlow"
import ServiceItem from "./ServiceItem"
import {
  reviewSvg,
  webDesignSvg,
  seoSvg,
  digitalMarketingSvg,
} from "../../images/home/svgs"

const getServices = graphql`
  query {
    featuredServices: allContentfulServices(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          sys {
            revision
          }
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedServices = () => {
  const response = useStaticQuery(getServices)
  const services = response.featuredServices.edges

  let tour1 = {}
  let tour2 = {}
  let tour3 = {}

  if (services && services.length > 0) {
    tour1 = services[0].node
    tour1.description =
      "When we talk about managing your reputation, first lets define what Reputation Management actually is."
    tour2 = services[1].node
    tour2.description =
      "ReactJS is one of the best JavaScript libraries which is widely known for its adjustable and extensible nature."
    tour3 = services[2].node
    tour3.description =
      "Frontsight Marketing is leading the way in SEO for the hvac and plumbing industry — and we have the track record to prove it."
  }

  const description4 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, consectetur adipiscing elit, sed do eiusmod tempor incididunt"

  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />

      <div className="container text-center services-list">
        <ul className="row">
          <li className="col-lg-4 col-md-6 col-sm-12">
            <ServiceItem
              icon={reviewSvg}
              title={tour1.name}
              url={`/services/${tour1.slug}`}
              description={tour1.description}
            />
          </li>
          <li className="col-lg-4 col-md-6 col-sm-12">
            <ServiceItem
              icon={webDesignSvg}
              title={tour2.name}
              url={`/services/${tour2.slug}`}
              description={tour2.description}
            />
          </li>
          <li className="col-lg-4 col-md-6 col-sm-12">
            <ServiceItem
              icon={seoSvg}
              title={tour3.name}
              url={`/services/${tour3.slug}`}
              description={tour3.description}
            />
          </li>
          {/* <li className="col-lg-3 col-md-6 col-sm-12">
            <ServiceItem
              icon={digitalMarketingSvg}
              title={"Digital Marketing"}
              url={"#"}
              description={description4}
            />
          </li> */}
        </ul>
      </div>

      {/* <div className={styles.service_flow}>
        <ServiceFlow tour1={tour1} tour2={tour2} tour3={tour3} />
      </div> */}
      {/* <AniLink fade to="/services" className="btn-primary">
        more services
      </AniLink> */}
    </section>
  )
}

export default FeaturedServices
