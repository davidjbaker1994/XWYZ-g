import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./styles.scss"
import "./styles-responsive.scss"

const thisTrue = true;

const Layout = ({ children }) => (
  <div id="layout">
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);


export default Layout;
