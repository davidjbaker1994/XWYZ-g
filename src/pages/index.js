import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import AniMessage from "../components/AniMessage"
import ContactForm from "../components/ContactForm"

const IndexPage = ({ data }) => {
    return (
    <Layout 
      hLogo={data.header_logo.childImageSharp}
      fLogo={data.footer_logo.childImageSharp} >
      <SEO title="Home" />
      <div id="outermost-flex-container">
        <div>
          <div id="laptop-icon">
            <Img fluid={data.laptop.childImageSharp.fluid} alt="laptop icon" />
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
    );
}

export default IndexPage;

export const query = graphql`
  query HomepageQuery {
    header_logo: file(relativePath: { eq: "images/xwyz-logo.png" }) {
      childImageSharp {
        fixed(width: 102, height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    footer_logo: file(relativePath: { eq: "images/xwyz-logo.png" }) {
      childImageSharp {
        fixed(width: 60, height: 21) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    laptop: file(relativePath: { eq: "images/laptop.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

