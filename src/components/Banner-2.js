import React from "react"
import styles from "../css/banner-2.module.css"
import VideoPlayer from "../components/ResponsivePlayer-2"

const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.colLeft}>
        <h1>{title}</h1>
        <h3>{info}</h3>
      </div>
      <div className={styles.colRight}>
        <div className={styles.video}>

          <VideoPlayer />
        </div>


        <div className={styles.button}>
          {children}
        </div>



      </div>
    </div>

  )
}

export default Banner
