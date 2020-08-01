import React from "react"
import "../../css/serviceflow.css"
import image1 from "../../images/up-arrow.png"
import image2 from "../../images/down-arrow.png"
import { reviewSvg, webDesignSvg, seoSvg } from "../../images/home/svgs"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function ServiceFlow({ tour1, tour2, tour3 }) {
  return (
    <div class="auto-container text-center">
      <div class="row clearfix">
        <div class="col-lg-4 col-md-6 col-sm-12 single-column">
          <div
            class="single-item wow fadeInUp animated animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div
              class="shape-layer"
              style={{ backgroundImage: `url(${image2})` }}
            ></div>
            <div class="icon-box">
              <div class="count-box counted">
                <span>1</span>
              </div>
              <AniLink fade to={`/services/${tour1.slug}`}>
                {reviewSvg}
              </AniLink>
            </div>
            <h3>{tour1.name}</h3>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 single-column">
          <div
            class="single-item wow fadeInUp animated animated"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div
              class="shape-layer"
              style={{ backgroundImage: `url(${image1})` }}
            ></div>
            <div class="icon-box">
              <div class="count-box counted">
                <span>2</span>
              </div>
              <AniLink fade to={`/services/${tour2.slug}`}>
                {webDesignSvg}
              </AniLink>
            </div>
            <h3>{tour2.name}</h3>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 single-column">
          <div
            class="single-item wow fadeInUp animated animated"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div class="icon-box">
              <div class="count-box counted">
                <span>3</span>
              </div>
              <AniLink fade to={`/services/${tour3.slug}`}>
                {seoSvg}
              </AniLink>
            </div>
            <h3>{tour3.name}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceFlow
