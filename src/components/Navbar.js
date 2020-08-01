import React, { useState } from "react"
import { Link } from "gatsby"
import Sticky from "react-sticky-el"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"
import links from "../constants/links"
import logo from "../images/fs_banner_logo_bl.png"
import menuIcon from "../images/menu.png"
import MobileNavBar from "./MobileNavBar"

const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <React.Fragment>
      <MobileNavBar onClose={toggleNav} isOpen={isOpen} />

      <Sticky>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.navCenter}>
              <div className={styles.navHeader}>
                <Link to="/">
                  <img
                    className={styles.logo}
                    src={logo}
                    alt="fronsight logo"
                  />
                </Link>

                <img
                  src={menuIcon}
                  alt=""
                  className={styles.menuIcon}
                  onClick={toggleNav}
                />
              </div>
              <ul className={`${styles.navLinks}`}>
                {links.map((item, index) => {
                  return (
                    <li key={index}>
                      <AniLink fade to={item.path}>
                        {item.text}
                      </AniLink>
                    </li>
                  )
                })}
                <a className={styles.phone} href="tel:855-979-9216">
                  (855) 979-9216
                </a>
              </ul>
              {/* <div className={styles.navSocialLinks}>
              {socialIcons.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                )
              })}
            </div> */}
            </div>
          </nav>
        </header>
      </Sticky>
    </React.Fragment>
  )
}

export default Navbar

// ReactDOM.render(
//  <ScrollAwareDiv />,
//  document.getElementById('root')
// );
