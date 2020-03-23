import React, { Component, useState } from "react"
import { Link } from "gatsby"
import links from "../constants/links"
import { FaAlignCenter } from "react-icons/fa"
import { FaAlignRight } from "react-icons/fa"
import logo from "../images/fsimages/Surefire-Local-Logo.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from 'styled-components'

//Mobile View
const Navbar = () => {
 const [isOpen, setNav] = useState()
 const toggleNav = () => {
   setNav(isOpen => !isOpen)
 }
 //end Mobile View


const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;
const StyledLi = styled.li`
  float: left;
`;
const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;
const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: red;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;
const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: red;
  }
`;
const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;
class Menu extends Component {
  handleClick = action => {
    if (!action) return;
    if (this.props.onClick) this.props.onClick(action);
  };
  render = () => {
    return (
      <StyledUl>
        <StyledLi>
          <StyledA onClick={() => this.handleClick("Home")}>Home</StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA onClick={() => this.handleClick("News")}>Home</StyledA>
        </StyledLi>
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
        <DropDownLi>
          <Dropbtn onClick={() => this.handleClick("DropDown")}>
            DropDown
          </Dropbtn>
          <DropDownContent>
            {" "}
            <SubA onClick={() => this.handleClick("Link1")}>Link 1</SubA>
            <SubA onClick={() => this.handleClick("Link2")}>Link 2</SubA>
            <SubA onClick={() => this.handleClick("Link3")}>Link 3</SubA>
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
    );
  };
}}

export default Menu;