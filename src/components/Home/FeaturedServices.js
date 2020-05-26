import React from "react"
import Service from "../ServiceComponent/Service"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getServices = graphql`
  query {
   featuredServices: allContentfulServices(filter: {featured: {eq: true}}) {
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

  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {services.map(({ node }) => {
         return <Service key={node.contentful_id} service={node} />

        }
        
        )}
      </div>

      <AniLink fade to="/services" className="btn-primary">
        more services
      </AniLink>
    </section>
  )
}

export default FeaturedServices
