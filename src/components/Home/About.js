import React from "react"
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
          While most marketing companies promise to deliver you results, the fact is a lot of them spend your money to research your specific niche and end up not producing results for you business.
          <p> At FrontSight Digital Marketing we are different: We focus on a business that we know well inside and out! HVAC and Plumbing is a very important business to our comfort and safety, most marketing agencies say they know your business but they really don’t.</p>
          <h5> That's why we’re a Marketing Agency Built by Service Professionals for Service Professionals! 
          </h5>
          <p>

 This is what sets us apart from most marketing professionals out there. Would you trust your own home's HVAC and Plumbing issues to an amature, or to the pros that know what they’re doing?  Schedule a free Marketing Strategy Session with us today and allow us to help your business grow for the future!

          </p>


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
