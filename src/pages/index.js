import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import ParticleBg from "../components/pBackground"
//import AniMessage from "../components/AniMessage"
//import ContactForm from "../components/ContactForm"
import TypingEffect from "../components/typing-effect"
import CForm from "../components/contact-form"

let sTo;

const IndexPage = ({ data }) => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (animationCompleted && showForm) {
      return;
    } else if (animationCompleted) {
      sTo = setTimeout(showContactForm(), 6000);
      return () => clearTimeout(sTo);
    }
  }, [animationCompleted, showForm]);

  /*
  if (animationCompleted) {
    document.getElementById('fade-in-container').classList.toggle('show');
    setTimeout(() => document.getElementById('contact-form-container').classList.toggle('show'), 3000);
  }
  */

  /*

  */
  function completedAnimation(newValue) {
    setAnimationCompleted(newValue);
  }

  function showContactForm() {
    setShowForm(true);
    console.log('should be showing cform');
  }
  
  return (
    <Layout>
      <SEO title="Home" />
      <ParticleBg />
      <div id="outermost-flex-container">
          <div id="laptop-container">
            <div id="laptop-icon">
              <Img fluid={data.laptop.childImageSharp.fluid} alt="laptop icon" />
            </div>
          </div>
         {/* <AniMessage handleAnimationCompleted={completedAnimation} />*/}
         <TypingEffect handleAnimationCompleted={completedAnimation} />
          <div id="fade-in-container" className={animationCompleted ? 'show' : ''}>
            <ul>
              <li>Full site coming soon! An engaging UI for navigating websites built by XWYZ Designs is among other features to be included. </li>
              <li>In the meantime, click on the above dropdown menu to view some great examples of our recent work</li>
              <li>Please see the contact form below for business inquiries. </li>
            </ul>
            

          </div>
          <CForm className={showForm ? 'show' : ''} />
      </div>
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query HomepageQuery {
    laptop: file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

