//import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import Dropdown from "./dropdown"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      header_logo: file(relativePath: { eq: "xwyz-logo.png" }) {
        childImageSharp {
          fixed(width: 90, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`
  );
  return(
    <header>
      <div className="flex-c">
        <Dropdown>
          <a className="dropdown-item nav__link" href="https://canvas-craze.com">Canvas Craze</a>
          <a className="dropdown-item nav__link" href="https://tbakerortho.com">
          Baker Orthodontics</a>
        </Dropdown>
        <Img fixed={data.header_logo.childImageSharp.fixed} alt="XWYZ Designs" />
      </div>
    </header>
  );
}

export default Header;
