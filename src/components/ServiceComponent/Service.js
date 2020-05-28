import React from "react"
import Image from "gatsby-image"
import styles from "../../css/service.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Service = ({service}) => {
 const data = useStaticQuery(getImage)
 const img = data.file.childImageSharp.fluid

 const { name, price, title, country, days, slug, images } = service
 console.log(data)

 let mainImage = images?images[0].fluid: img



 return (
 <article className={styles.service}>
 <div className={styles.imgContainer} >
 <Image fluid={mainImage} className={styles.img} alt="service image" />
 <AniLink fade className={styles.link} to={`/services/${slug}`}>
 Details
 </AniLink>
 </div>
 <div className={styles.footer}>
 <h3>{name ||'Digital Marketing'}</h3>
 <div className={styles.info}>
 {/* <h4 className={styles.country}>
 <FaMap className={styles.icon} />
 {country || 'USA'}
 </h4> */}
 <div className={styles.details}>
 <h6>{title}</h6>
 </div>
 </div>
 </div>
 </article>
 )
 


}
Service.propTypes = {
  service: PropTypes.shape({
  name:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  country:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  day:PropTypes.number.isRequired,
  images:PropTypes.arrayOf(PropTypes.object).isRequired,


 })
}
export default Service
