import React from "react"
import PricePoint from "../components/PricingTable/PricesAlt"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const PriceCheck = () => (
  <Layout>
    <GatsbySeo nofollow={true} />
    <SEO title="pricecheck"/>

    <PricePoint />



  </Layout>
)

export default PriceCheck
