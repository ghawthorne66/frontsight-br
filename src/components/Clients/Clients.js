import React from "react"
import "./style.css"
import {Link} from 'gatsby'

const Clients = () => (
  <div className="clients">
    <section className="cta-area">
      <h1>Frontsight Marketing offers SEO, HVAC Digital Marketing, and Web Development Services to go Digital
      </h1>
      <ul className="cta-list">
        <li><Link to="/services">
          <h3>Begin</h3>
          <h4>Your Own Business</h4>
          <button type="button" className="btn btn-lg btn-outline-primary cta-service-btn">How Can We Help You</button>
        </Link></li>
        <li><Link to="/services">
          <h3>Grow</h3>
          <h4>Your Existing Business</h4>
          <button type="button" className="btn btn-lg btn-outline-primary cta-service-btn">How Can We Help You</button>

        </Link></li>
      </ul>
    </section>
    <section className="clients-area">
    <h1>Our Happy Clients</h1>
    <div className="container">
      <ul className="brands-list">
        <li>
          <a href="https://fullersplumbing.com/" target="_blank">
            <img src="https://fullersplumbing.com/_nuxt/img/8d1f4af.png"/>
          </a>
        </li>
        <li>
          <a href="https://hawthornephc.com/" target="_blank">
            <img src="https://hawthornephc.com/static/logo-7a052b8ce67970532f99c9d0e9a57836.png"/>
          </a>
        </li>
      </ul>
    </div>
    </section>
  </div>
)

export default Clients
