import React, { useState } from "react"
import { Link } from "gatsby"
import links from "../constants/links"
import { FaAlignCenter } from "react-icons/fa"
import { FaAlignRight } from "react-icons/fa"
import logo from "../images/fsimages/Surefire-Local-Logo.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <nav className={styles.navbar}>
     <div className={styles.navCenter}>
   <row>
       <div className={styles.navHeader}>
         <img src={logo} alt="frontsight logo" />
         </div>
         <button type="button" className={styles.logoBtn} onClick={toggleNav}>
           <FaAlignRight className={styles.logoIcon} />
         </button>
       
       <div className={styles.navPhoneLinks}>
       <a className={styles.navPhone} href="https://google.com">(888) 188-8889</a>
       </div>
   </row>
   <row>

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
               <AniLink fade to={item.path}>
                 {item.text}
               </AniLink>
             </li>
           )
         })}
       </ul>
   </row>
     </div>
   </nav>
 )
}

export default Navbar
