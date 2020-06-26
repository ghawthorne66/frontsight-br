import React from "react"
import Options from "../components/PricingTable/Options"
import Layout from "../components/Layout"
import SEO from "../components/SEO";
import { GatsbySeo } from 'gatsby-plugin-next-seo';


const Pricing = () => (
  <Layout>
    <GatsbySeo nofollow={true} />
    <SEO title="pricing"/>

    <Options />



  </Layout>
)

export default Pricing
