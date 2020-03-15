import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/Layout"
import StyuledHero from "../components/StyledHero"
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import {FaMoneyBillWave,FaMap} from 'react-icon/fa'
import Day from '../components/SingleTour/Day'

const Template = ({data}) => {
 const {
  name,
  price,
  country,
  days,
  description: { description },
  images,
  start,
  journey,
} = data.tour

const [mainImage, ...tourImages] = images
console.log(mainImage)
console.log(tourImages)

return <h1>{name}</h1>
}

export const query = graphql`
query ($slug:String!) {
 tour: contentfulServicesExample (slug:{eq:$slug}){
  name
  price
  country
  days
  start(formatString: "dddd MMMM Do, YYYY")
  description {
    description
  }
  journey {
    day
    info
  }
  images {
    fluid{
      src
    }
    
  }
}
}`

export default Template