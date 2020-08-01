import React from "react"
import Title from "../Title"
import styles from "../../css/intro.module.css"
import services from "../../constants/intro"
import "../../css/serviceitem.css"
import { analysisSvg, searchEngineSvg, targetSvg } from "../../images/home/svgs"
import ServiceItem from "./ServiceItem"

const Intro = () => {
  let item1 = {}
  let item2 = {}
  let item3 = {}

  if (services && services.length > 0) {
    item1 = services[0]
    item2 = services[1]
    item3 = services[2]
  }

  return (
    <section className={styles.services}>
      <Title title="Surefire" subtitle="Results" />

      <div className="container text-center services-list">
        <ul className="row">
          <li className="col-lg-4 col-md-6 col-sm-12">
            <ServiceItem
              icon={targetSvg}
              title={item1.title}
              url={"#"}
              description={item1.text}
            />
          </li>
          <li className="col-lg-4 col-md-6 col-sm-12">
            <ServiceItem
              icon={searchEngineSvg}
              title={item2.title}
              url={"#"}
              description={item2.text}
            />
          </li>
          <li className="col-lg-4 col-md-6 col-sm-12">
            <ServiceItem
              icon={analysisSvg}
              title={item3.title}
              url={"#"}
              description={item3.text}
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Intro
