import React from "react"
import Title from "../Title"
import "../../css/about.css"
import img from "../../images/painting.jpg"

const About = () => {
  return (
    <section className="about ptb-xs-40">
      <Title title="About" subtitle="Us" />
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-company">
              <span>Welcome</span>
              <h2>Why we're a cut above</h2>

              <p>
                While most marketing companies promise to deliver you results,
                the fact is a lot of them spend your money to research your
                specific niche and end up not producing results for you
                business.
              </p>
              <p>
                At FrontSight Digital Marketing we are different: We focus on a
                business that we know well inside and out! HVAC and Plumbing is
                a very important business to our comfort and safety, most
                marketing agencies say they know your business but they really
                don’t.
              </p>

              <button type="button" className="btn-primary">
                <a href="/about">read more</a>
              </button>
            </div>
          </div>

          <div class="col-lg-5 offset-lg-1 mt-sm-30 mt-xs-30">
            <div class="about-img">
{/*
              <img src={img} alt="about company" />
*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
