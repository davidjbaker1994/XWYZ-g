import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../assets/styles.scss"
import "../assets/styles-responsive.scss"

const Layout = ({ hLogo, fLogo,  children }) => (
  <div id="layout">
    {console.log(hLogo.fixed)}
    {console.log(fLogo.fixed)}
    <Header logo={hLogo.fixed}  />
    <main>
      {children}
    </main>
    <Footer logo={fLogo.fixed}  />
  </div>
);


export default Layout;
