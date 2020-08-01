import React from "react"
import "../css/pagebanner.css"

function PageBanner({ img, title, link1, link2 }) {
  return (
    <section
      className="breadcrumb-area pt-140 pb-140 bg_img"
      data-overlay="5"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="breadcrumb-text">
              <h1 className="breadcrumb-title">{title}</h1>
              <p>
                <span>Welcome</span> to our Frontsightmarketing
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-auto">
            <div className="breadcrumb-nav">
              <ul>
                <li>
                  <a href="/">{link1}</a>
                </li>
                <li>|</li>
                <li>{link2}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

//TODO Make breadcrumb title and text as props
export default PageBanner
