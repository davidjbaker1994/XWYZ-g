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

  //const dcaron = String.fromCharCode
 
  return(
    <header>
      <div className="flex-c">
        <Dropdown ddIcon={' ˬ'}>
          <ul>
            <li><a href="https://canvas-craze.com">Canvas Craze</a></li>
            <li><a href="https://tbakerortho.com">
          Baker Orthodontics</a>
            </li>
          </ul>
        </Dropdown>
        <Img fixed={data.header_logo.childImageSharp.fixed} alt="XWYZ Designs" />
      </div>
    </header>
  );
}

export default Header;
