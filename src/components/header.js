//import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import Dropdown from "./dropdown"

const Header = ({ logo }) => (
  <header>
    <div className="flex-c">
      <Dropdown>
        <a className="dropdown-item nav__link" href="https://canvas-craze.com">Canvas Craze</a>
        <a className="dropdown-item nav__link" href="https://tbakerortho.com">
        Baker Orthodontics</a>
      </Dropdown>
      <Img fluid={logo.childImageSharp.fluid} alt="XWYZ Designs" />
    </div>
  </header>
);

export default Header;
