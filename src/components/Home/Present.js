import React from "react"
import Title from "../Title"
import styles from "../../css/present.module.css"
import ReactPlayer from 'react-player'
 
class Video extends React.Component {
  render() {
    const opts = {
      height: '234',
      width: '384',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: -1
      }
    };
    
 
    return (

     <container className={styles.orangebg}>

     
      <section className={styles.services}>

      <div className={styles.hr}></div>
     
     <Title title="Who We" sub="Are" />
     <div className={styles.center}>
   
      {/* <YouTube className={styles.center}>
        videoId="watch?v=729oQL9uQVo"
        opts={opts}
        onReady={this._onReady}
        onStateChange={this._onPlayerStateChange} 
      /></YouTube> */}
      <ReactPlayer className={styles.center}
          url='https://youtu.be/jv4bPm5-bmE'
          
          // width='110%'
          // height='110%'
        />
      </div>
      
      </section>
      </container>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Video