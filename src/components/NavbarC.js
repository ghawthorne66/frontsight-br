import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../css/navbar.module.css"
import links from "../constants/links"
import { FaAlignCenter } from "react-icons/fa"
import { FaAlignRight } from "react-icons/fa"
import socialIcons from "../constants/social-icons"
import logo from "../images/fsimages/fs_logo_red.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
//   return (
//     <nav className={styles.navbar}>
//      <div className={styles.navCenter}>
//    <row>
//        <div className={styles.navHeader}>
//          <img src={logo} alt="frontsight logo" />
//          </div>
//          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
//            <FaAlignRight className={styles.logoIcon} />
//          </button>
       
//        <div className={styles.navPhoneLinks}>
//        <a className={styles.navPhone} href="https://google.com">(888) 188-8889</a>
//        </div>
//    </row>
//    <row>

//        <ul
//          className={
//            isOpen
//              ? `${styles.navLinks} ${styles.showNav}`
//              : `${styles.navLinks}`
//          }
//        >
//          {links.map((item, index) => {
//            return (
//              <li key={index}>
//                <AniLink fade to={item.path}>
//                  {item.text}
//                </AniLink>
//              </li>
//            )
//          })}
//        </ul>
//    </row>
//      </div>
//    </nav>
//  )
// }

// export default Navbar








  return (
   <nav className={styles.navbar}>
   <img className={styles.logoIcon} src={logo} alt="frontsight logo" />
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
        </div>
              {/* <span>
              <a className={styles.navPhone} href="https://google.com">(888) 188-8889</a>
               </span> */}
     
        {/* <AniLink className="btn-black" fade to="/tours" >
          Learn More
        </AniLink> */}


        {/* //responsive button// */}
        <div className={styles.smTabBar}>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignCenter className={styles.logoIcon} /> 
          </button>
        </div>
 
        <ul
          className={
           isOpen
           ? `${styles.navLinks} ${styles.showNav}`
           : `${styles.navLinks}`
          }
          >
          {links.map((item, index) => {
           return (
            <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
           })}
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
        </div>  */}
      </div>
    </nav>
  )
}

export default Navbar