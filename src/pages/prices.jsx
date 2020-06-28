import React from "react"
import PricePoint from "../components/PricingTable/PricesAlt"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const PriceCheck = () => (
  <Layout>
    <SEO title="pricecheck" noindex="yes"/>
    <PricePoint />
  </Layout>
)

export default PriceCheck
