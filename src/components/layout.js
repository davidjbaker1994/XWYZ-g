import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./new.scss"
import "./new-responsiveness.scss"

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
