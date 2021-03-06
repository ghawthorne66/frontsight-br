import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, sub, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title} {subtitle}</span>
{/*
        <span>{subtitle}</span>
*/}
        <span className="sub">{sub}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 4px;
    color: var(--primaryColor);
  }
  .sub {
    text-align: center;
    letter-spacing: 5px;
    color: white;
        font-size: 3.9rem;
  }
  .title {
    color: var(--mainBlack);
    font-size: 3.9rem;
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
