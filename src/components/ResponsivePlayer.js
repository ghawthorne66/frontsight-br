import React from 'react'
import ReactPlayer from 'react-player'
import  '../css/player.css'

const ResponsivePlayer = () => {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=iBzvi4h13Ok'
          width='150%'
          height='150%'
        />
      </div>
    )
  }
  export default ResponsivePlayer
  