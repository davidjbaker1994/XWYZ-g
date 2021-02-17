import React, {useState, useEffect} from "react"
import Header from "./header"
import Footer from "./footer"
import ParticleBackground from "./particle-background"
import "./new.scss"
import "./new-responsiveness.scss"




const Layout = ({ children }) => {
  const [loadedYet, setLoadedYet] = useState(false);

  function pCaller(){
    setLoadedYet(true);
  }

  useEffect(() => {
    if (!loadedYet) {
      window.addEventListener('load', pCaller());
      return () => window.removeEventListener('load', pCaller());
    }
  }, [loadedYet]);

  return (
    <div id="layout">
      <ParticleBackground loadReal={loadedYet} />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}


export default Layout;
