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
<iframe  height="700" width="100%" src="https://msgsndr.com/widget/booking/8LtwT0U11nJ6t8j1uo6w" />

  </Layout>
)

export default Appointment
