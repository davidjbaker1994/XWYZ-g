import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../assets/styles.scss"

const Layout = ({ hLogo, fLogo, children }) => (
  <div id="layout">
    <Header logo={hLogo} />
    <main>
      {children}
    </main>
    <Footer logo={fLogo} />
  </div>
);


export default Layout;
