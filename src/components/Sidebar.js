import React from "react"
import "../css/sidebar.css"
import { callSvg, mailSvg } from "../images/home/svgs"

function Sidebar(props) {
  return (
    <div className="widget">
      <h4 className="widget-title">Contact Our Team</h4>
      <div>
        <div className="mf-team-contact">
          <p>
            Please feel free to contact us. We will get back to you with 1-2
            business days. Or just call us now.
          </p>
          <div className="mf-contact">
            {callSvg}
            <span>Call Us:</span> (855) 979-9216
          </div>
          <div className="mf-contact">
            {mailSvg}
            <span>Mail Us:</span> info@frontsightmarketing.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
