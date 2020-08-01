import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={styles.footer_area}>
      <div className={`${styles.footer_contact} text-center`}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className={`${styles.footer_contact_width} text-left`}>
                <p>
                  <i className="fa fa-map-marker fa-5x custom-spacing"></i>
                  <span>5940 South Rainbow Blvd</span>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className={`${styles.footer_contact_width}`}>
                <p>
                  <i className="fa fa-map-marker fa-5x"></i>
                  <span>#395 Las Vegas, NV 89118</span>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div
                style={{ border: "none" }}
                className={`${styles.footer_contact_width}`}
              >
                <p>
                  <i className="fa fa-clock-o"></i>
                  <span>
                    <a href> Lets Go Together</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.footer_content} ${styles.section_padding}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div
                className={`${styles.footer_textwidget} ${styles.textwidget}`}
              >
                <h2>About Front-Sight</h2>
                <p>We focus on a business that we know well inside and out! HVAC and Plumbing is a very important business to our comfort and safety.</p>
                <h4>Get a Quote</h4>
                <span className={styles.number}>
                  <a
                    className={styles.footer__number}
                    href={"tel:855-979-9216"}
                  >
                    (855) 979-9216
                  </a>
                </span>
              </div>
            </div>

            <div className="col-md-2 col-sm-3">
              <h2>Quick Links</h2>
              <ul className={styles.footer_link}>
                {links.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.path}>{item.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="col-md-2 col-sm-3">
              <h2>Services</h2>
              <ul className={styles.footer_link}>
                <li>
                  <Link to={"/services/reputation-management"}>
                    Reputation Management
                  </Link>
                </li>
                <li>
                  <Link to={"/services/web-design-and-development"}>
                    Web Design and Development
                  </Link>
                </li>
                <li>
                  <Link to={"/services/seo-services"}>SEO</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className={styles.newslatter}></div>
            </div>
          </div>
          <div className={styles.copyright_area}>
            <div className="row">
              <div className={`col-md-8 col-sm-6 ${styles.copyright_text}`}>
                <p>
                  Copyright &copy; Frontsight Digital Marketing Agency{" "}
                  {new Date().getFullYear()}. All rights reserved.
                </p>
              </div>
              <div
                className={`col-md-4 col-sm-6 ${styles.copyright_social} text-right`}
              >
                <ul>
                  {socialIcons.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.icon}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
