import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../assets/styles.scss"
import "../assets/styles-responsive.scss"

const Layout = ({ logo,  children }) => (
  <div id="layout">
    <Header logo={logo} />
    <main>
      {children}
    </main>
    <Footer logo={logo}  />
  </div>
);


export default Layout;
