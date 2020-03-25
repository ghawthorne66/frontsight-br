import React from "react"
import { Link } from "gatsby"
import "../css/appointment.module.css"

import Layout from "../components/Layout"
import CalendlyEmbed from "../components/CalendlyEmbedReact"
import SEO from "../components/SEO"

const Appointment = () => (
  <Layout>

    <SEO title="appointments"/>
    <h1>Lets Get Started</h1>
    <CalendlyEmbed className="calendly"account="greghawthorne" eventName="discovery-meeting" />
    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default Appointment