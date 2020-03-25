import React from "react"
import { Link } from "gatsby"
import "../css/appointment.module.css"

import Layout from "../components/layout"
import CalendlyEmbed from "../components/CalendlyEmbedReact"
import SEO from "../components/seo"

const Appointment = () => (
  <Layout>
   <section className="section">

    <SEO title="appointments" />
    <h1>Lets Get Started</h1>
    <CalendlyEmbed className="calendly"account="greghawthorne" eventName="discovery-meeting" />
    <Link to="/">Go back to the homepage</Link>

   </section>
  </Layout>
)

export default Appointment