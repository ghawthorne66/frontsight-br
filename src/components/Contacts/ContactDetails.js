import React from "react"
import "../../css/contactdetails.css"
import { callSvg, locationSvg, mailSvg } from "../../images/home/svgs"

function ContactDetails(props) {
  return (
    <div class="container contact-details">
      <div class="row">
        <div class="col-md-8 col-lg-8 offset-md-2 text-center">
          <h2>KEEP IN TOUCH</h2>

        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-12 contact pb-60 pt-30">
          <div class="row text-center">
            <div class="col-md-4 col-lg-4 pb-xs-30">
              {" "}
              <i class="ion-android-call icon-circle pos-s">{callSvg}</i>
              <a href="tel:855-979-9216" class="mt-15 i-block">
                (855) 979-9216
              </a>{" "}
            </div>
            <div class="col-md-4 col-lg-4 pb-xs-30">
              {" "}
              <i class="ion-ios-location icon-circle pos-s">{locationSvg}</i>
              <p class="mt-15">
                {" "}
                5940 South Rainbow Blvd
                , <br />#395 Las Vegas, NV 89118.{" "}
              </p>
            </div>
            <div class="col-md-4 col-lg-4 pb-xs-30">
              {" "}
              <i class="ion-ios-email icon-circle pos-s">{mailSvg}</i>
              <a href="mailto:Construc@support.com" class="mt-15 i-block">
                info@frontsightmarketing.com
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
