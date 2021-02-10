import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import AniMessage from "../components/AniMessage"
import ContactForm from "../components/ContactForm"

const IndexPage = ({ data }) => (
  <Layout hLogo={data.xwyz_h_logo} fLogo={data.xwyz_f_logo}>
    <SEO title="Home" />
    <div id="outermost-flex-container">
      <div>
        <div id="laptop-icon">
          <Img fixed={data.laptop.childImageSharp.fixed} alt="laptop icon" />
        </div>
      </div>
      <div>
        <AniMessage />
      </div>
      <div>
        <div id="fade-in-container">
          <p>
            Full site coming soon! An engaging UI for navigating websites built by XWYZ Designs is among other features to be included. In the meantime, click on the above dropdown menu to view some great examples of our recent work. Please see the contact form below for business inquiries. 
          </p>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    xwyz_h_logo: file(relativePath: { eq: "images/xwyz-logo.png" }) {
      childImageSharp {
        fixed(width: 108, height: 37) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    xwyz_f_logo: file(relativePath: { eq: "images/xwyz-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    laptop: file(relativePath: { eq: "images/laptop.png" }) {
      childImageSharp {
        fixed(width: 180, height: 112) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
