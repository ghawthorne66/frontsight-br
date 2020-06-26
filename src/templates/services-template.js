import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTour/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from '../components/SEO'

const Template = ({ data }) => {
  const {
    name,
    title,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    topics
  } = data.service

  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <SEO title={name} />
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single service"
                  className={styles.image}
                />
              )
            })}
          </div>

          <h1 className={styles.title}> {title}</h1>
          <h2 className={styles.name}> {name}</h2>
          <div className={styles.info}>
            {/* <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p> */}
          </div>
          {/* <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4> */}
          <p className={styles.desc}>{description}</p>
          <h2 className={styles.name}>Learn More</h2>

          <div className={styles.button}>
            <AniLink fade to="/services" className="btn-primary">
              back to services
          </AniLink>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query ($slug:String!) {
 service: contentfulServices (slug:{eq:$slug}){
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
    fluid{
      src
     
    }
    
  }
}
}
`

export default Template
