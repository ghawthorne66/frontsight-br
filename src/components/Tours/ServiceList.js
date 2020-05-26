import React, { Component } from 'react'
import styles from "../../css/items.module.css"
import Tour from "./Tour"
import Title from "../Title"

export default class TourList extends Component {
 state = {
  services: [],
  sortedTours: []
 }

 componentDidMount() {
  this.setState({
    services: this.props.services.edges,
   sortedTours: this.props.services.edges
  })

 }
 render() {
  return (
   <section className={styles.tours}>
    <Title title="our" subtitle="services" />
    <div className={styles.center}>
    {this.state.sortedTours.map(({ node }) => {
            return <Tour key={node.contentful_id} tour={node} />
          })}

    </div>
   </section>

  )
 }
}

