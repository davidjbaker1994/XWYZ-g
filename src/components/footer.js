import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      footer_logo: file(relativePath: { eq: "xwyz-logo.png" }) {
        childImageSharp {
          fixed(width: 60, height: 21) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`
  );
  return(
    <footer>
      <div>
        <p>Sites x </p>
      </div>
      <div id="xwyz-logo">
        <Img fixed={data.footer_logo.childImageSharp.fixed} alt="Calhoun GA's Top Web Design Company" />
      </div>
    </footer>
  );
}

export default Footer;