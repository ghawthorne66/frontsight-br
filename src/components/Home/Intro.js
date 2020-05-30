import React from "react"
import Title from "../Title"
import styles from "../../css/intro.module.css"
import services from "../../constants/intro"
const Intro = () => {
  return (
    <section className={styles.services}>
      <Title title="Surefire"subtitle="Results" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span className={styles.icon}>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Intro
