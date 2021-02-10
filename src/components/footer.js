import React from "react"
import Img from "gatsby-image"

const Footer = ({ logo }) => (
  <footer>
    <div>
      <p>Sites x </p>
    </div>
    <div id="xwyz-logo">
      <Img fluid={logo.childImageSharp.fluid} alt="Calhoun GA's Number 1 Web Developement Company" />
    </div>
  </footer>
);

export default Footer;