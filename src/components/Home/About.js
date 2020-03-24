import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Why we're a cut above</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
         
          <button type="button" className="btn-primary">
          <a href="/about">read more</a>
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
