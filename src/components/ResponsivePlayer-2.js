
import React from 'react'
import ReactPlayer from 'react-player'
import  '../css/player-2.module.css'

const ResponsivePlayer = () => {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/qzZ9rV2s0QE'
          width='100%'
          height='300px'
        />
      </div>
    )
  }
  export default ResponsivePlayer




