import React, { Component } from "react"
import styles from "../../css/items.module.css"
import ServiceCard from "./ServiceCard"
import {
  reviewSvg,
  digitalMarketingSvg,
  webDesignSvg,
  seoSvg,
} from "../../images/home/svgs"
import "../../css/servicecard.css"

export default class TourList extends Component {
  state = {
    services: [],
    sortedTours: [],
  }

  componentDidMount() {
    this.setState({
      services: this.props.services.edges,
      sortedTours: this.props.services.edges,
    })
  }

  render() {
    const { sortedTours } = this.state

    let tour1 = {}
    let tour2 = {}
    let tour3 = {}

    if (sortedTours && sortedTours.length > 0) {
      tour1 = sortedTours[0].node
      tour1.description =
        "When we talk about managing your reputation, first lets define what Reputation. Management actually is..."
      tour2 = sortedTours[1].node
      tour2.description =
        "ReactJS is one of the best JavaScript libraries which is widely known for its adjustable and extensible nature..."
      tour3 = sortedTours[2].node
      tour3.description =
        "Frontsight Marketing is leading the way in SEO for the hvac and plumbing industry..."
    }

    // const description4 =
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit"

    return (
      <section className={styles.services}>
        {/* <div className={styles.center}>
          {this.state.sortedTours.map(({ node }) => {
            return <Service key={node.contentful_id} service={node} />
          })}
        </div> */}

        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-4">
              <ServiceCard
                icon={reviewSvg}
                title={tour1.name}
                url={`/services/${tour1.slug}`}
                description={tour1.description}
              />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-4">
              <ServiceCard
                icon={webDesignSvg}
                title={tour2.name}
                url={`/services/${tour2.slug}`}
                description={tour2.description}
              />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-4">
              <ServiceCard
                icon={seoSvg}
                title={tour3.name}
                url={`/services/${tour3.slug}`}
                description={tour3.description}
              />
            </div>
            {/* <div className="col-md-6 col-sm-12">
              <ServiceCard
                icon={digitalMarketingSvg}
                title={"Digital Marketing"}
                url={"#"}
                description={description4}
              />
            </div> */}
          </div>
        </div>
      </section>
    )
  }
}
