import React from "react"
import "../../css/servicecard.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function ServiceCard({ icon, title, url, description }) {
  return (
    <div className="feature-block-one">
      <div className="inner-box">
        <div className="icon-box">
          <div class="anim-icon">
            <span class="icon icon-1"></span>
            <span class="icon icon-2"></span>
            <span class="icon icon-3"></span>
          </div>
          {icon}
        </div>
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
        <div>
          <AniLink fade to={url} className="btn-primary">
            Learn more
          </AniLink>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
