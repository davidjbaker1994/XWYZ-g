import React, {useState, useEffect} from "react"
import Header from "./header"
import Footer from "./footer"
import Particles from 'react-particles-js'; 
import "./new.scss"
import "./new-responsiveness.scss"

const ParticleBackground = ({ loadReal }) => {
  var myParticles = <div style={{visibility: 'hidden'}} />;
  
  if (loadReal) {
    myParticles = <Particles
      params={{
        fpsLimit: 45,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        particles: {
          number: { 
            value: 72, 
            density: { 
              enable: false, 
              value_area: 1000, 
            } 
          }, 
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: "false",
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: false,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
  }
  return myParticles;
}


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
