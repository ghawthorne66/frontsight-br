import React, { useState, useRef } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"



const Layout = ({ children }) => { 
  const [scrollStatus, setScrollStatus] = useState(0)

 
  return (
   
    <main>
     <div className="wrapper">
      <Navbar scrollStatus={scrollStatus}/></div>
      <ScrollContainer setScrollStatus={setScrollStatus} scrollStatus={scrollStatus}>
        {children}
      </ScrollContainer>
      <Footer /> 
    </main>
     
    
  )
}

const ScrollContainer = ({ setScrollStatus, scrollStatus, children }) => {
 const scrollable = useRef(null)

 const onScroll = () => {
  const scrollTop = scrollable.current.scrollTop
  console.log('sdfdsfsd')
  setScrollStatus(scrollTop)
}


 return (
  <div ref={scrollable} onScroll={onScroll} className="scrollcontainer">
   {children}
  </div>
 )
}

export default Layout
