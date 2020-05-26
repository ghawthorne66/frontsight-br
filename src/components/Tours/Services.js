import React from "react"
import ServiceList from "./ServiceList"
import { useStaticQuery, graphql } from "gatsby"

const getServices = graphql`
  query {
    services: allContentfulServicesExample {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Services = () => {
  const { services } = useStaticQuery(getServices)

  return <ServiceList services={services} />
 
  
  
}

export default Services