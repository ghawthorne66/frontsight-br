import React, { Component } from "react"
import Layout from "../components/Layout"
// import StyledHero from "../components/StyledHero"
import PageBanner from "../components/PageBanner"
import SEO from "../components/SEO"
import defaultImg from "../images/breadcrumb-bg.png"
import Clients from "../components/Clients/Clients"

export default class clients extends Component {

  render() {
    return (
      <Layout>
        <SEO title="Clients"/>
        <PageBanner
          img={defaultImg}
          title="Our Clients"
          link1="Home"
          link2="Clients"/>
        <Clients/>
      </Layout>
    )
  }
}
