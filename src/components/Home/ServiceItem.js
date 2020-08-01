import React from "react"

function ServiceItem({ icon, title, description, url }) {
  return (
    <a className="text-center bg-box text__primary" href={url}>
      {icon}
      <span className="title-style">{title}</span>
      <p>{description}</p>
    </a>
  )
}

export default ServiceItem
