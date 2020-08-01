import React from "react"
import "../css/mobilenavbar.css"
import links from "../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function MobileNavBar({ onClose, isOpen }) {
  return (
    <div
      className={`primary-mobile-nav header-v1 ${isOpen ? "open" : ""}`}
      id="primary-mobile-nav"
      role="navigation"
    >
      <a
        href="#"
        className="close-canvas-mobile-panel"
        onClick={() => onClose()}
      >
        ×
      </a>
      <ul className="menu">
        {links.map((item, index) => {
          return (
            <li key={index} onClick={() => onClose()}>
              <AniLink fade to={item.path}>
                {item.text}
              </AniLink>
            </li>
          )
        })}
        <li onClick={() => onClose()}>
          <a href="tel:855-979-9216">(855) 979-9216</a>
        </li>
      </ul>
    </div>
  )
}

export default MobileNavBar
