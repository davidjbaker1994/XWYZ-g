import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import AniMessage from "../components/AniMessage"
import ContactForm from "../components/ContactForm"

const IndexPage = ({ data }) => {
  const lapTop = [
    data.laptop.childImageSharp.fixed,
    {
      ...data.laptopsm.childImageSharp.fixed,
      media: `(min-width: 360px)`,
    },
    {
      ...data.laptoplg.childImageSharp.fixed,
      media: `(min-width: 411px)`
    },
    {
      ...data.laptopxl.childImageSharp.fixed,
      media: `(min-width: 750px)`
    }
  ]
  return (
    <Layout logo={data.xwyz}>
      <SEO title="Home" />
      <div id="outermost-flex-container">
        <div>
          <div id="laptop-icon">
            <Img fixed={lapTop} alt="laptop icon" />
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
    xwyz: file(relativePath: { eq: "images/xwyz-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
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
    laptopsm: file(relativePath: { eq: "images/laptop.png" }) {
      childImageSharp {
        fixed(width: 210, height: 130) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    laptoplg: file(relativePath: { eq: "images/laptop.png" }) {
      childImageSharp {
        fixed(width: 270, height: 144) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    laptopxl: file(relativePath: { eq: "images/laptop.png" }) {
      childImageSharp {
        fixed(width: 450, height: 279) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;


