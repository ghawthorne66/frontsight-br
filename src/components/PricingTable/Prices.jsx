import React from "react"
import { Link } from "gatsby"
import "../../css/prices.module.css"

const PricePoint = () => (
  <div className="intro">
    <h1>
      Follow me on
      <a href="#" target="_blank">
        <img src="#"></img>
      </a>
    </h1>
    <h1 className="title"> Pricing table </h1>
    <div id="container">
      <div className="pricetab">
        <h1> FREE </h1>
        <div className="price">
          <h2> Free </h2>
        </div>
        <div className="infos">
          <h3> Premium Profile Listing </h3>
          <h3> Unlimited File Access </h3>
          <h3> Free Appointments </h3>
          <h3> 0 Bonus Points every month</h3>
          <h3> Customizable Profile Page</h3>
          <h3> 1 month support</h3>
        </div>
        <div className="pricefooter">
          <div className="button">
            <a href="#"> Get started </a>
          </div>
        </div>
      </div>
      <div className="pricetab">
        <h1> STARTER </h1>
        <div className="price">
          <h2> 10$ </h2>
        </div>
        <div className="infos">
          <h3> Premium Profile Listing </h3>
          <h3> Unlimited File Access </h3>
          <h3> Free Appointments </h3>
          <h3> 5 Bonus Points every month</h3>
          <h3> Customizable Profile Page</h3>
          <h3> 2 months support</h3>
        </div>
        <div className="pricefooter">
          <div className="button">
            <a href="#"> Get started </a>
          </div>
        </div>
      </div>
      <div className="pricetabmid">
        <h1> BASIC </h1>
        <div className="pricemid">
          <h2> 30$ </h2>
        </div>
        <div className="infos">
          <h3> Premium Profile Listing </h3>
          <h3> Unlimited File Access </h3>
          <h3> Free Appointments </h3>
          <h3> 20 Bonus Points every month</h3>
          <h3> Customizable Profile Page</h3>
          <h3> 6 months support</h3>
        </div>
        <div className="pricefootermid">
          <div className="buttonmid">
            <a href="#"> Get started </a>
          </div>
        </div>
      </div>
      <div className="pricetab">
        <h1> PREMIUM </h1>
        <div className="price">
          <h2> 50$ </h2>
        </div>
        <div className="infos">
          <h3> Premium Profile Listing </h3>
          <h3> Unlimited File Access </h3>
          <h3> Free Appointments </h3>
          <h3> 30 Bonus Points every month</h3>
          <h3> Customizable Profile Page</h3>
          <h3> 1 year support</h3>
        </div>
        <div className="pricefooter">
          <div className="button">
            <a href="#"> Get started </a>
          </div>
        </div>
      </div>
      <div className="pricetab">
      <h1> VIP </h1>
      <div className="price"> 
        <h2> 100$ </h2> 
      </div>
      <div className="infos">
        <h3> Premium Profile Listing </h3>
        <h3> Unlimited File Access </h3>
        <h3> Free Appointments </h3>
        <h3> 50 Bonus Points every month</h3>
        <h3> Customizable Profile Page</h3>
        <h3> 2 years support</h3>
      </div>
      <div className="pricefooter">
        <div className="button">
          <a href="#"> Get started </a>
        </div>
      </div>
      
      
      
      
      </div>

    </div>
  </div>
)

export default PricePoint
