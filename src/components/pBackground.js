import React, { useState, useEffect } from 'react'
import Particles from 'react-particles-js'
import useWindowSize from "./use-window-size"

let sTo;

const ParticleBg = () => {
  const [state, setState] = useState({
    setUp: true,
    width: null,
    numberOfParticles: 93,
    fPSLimit: 60,
    densitySettings: {
      enable: false,
      value_area: 800
    }
  });

  const { width } = useWindowSize();

  function setUp() {
    console.log('setted Up');
    setState({
      ...state,
      width: width,
      numberOfParticles: (width < 510) ? 21 : (width < 930) ? 36 : 60,
      setUp: false
    });
  }

  useEffect(() => {
    if (state.width !== null && state.width === width) return;
    sTo = setTimeout(setUp, 9000);
    return () => clearTimeout(sTo);
  }, [state]);

  if (state.setUp) {
    return <div style={{visibility: 'hidden'}} />;
  } else {
    console.log(state.numberOfParticles);
    return (
      <Particles
        className="show"
        params={{
         // fpsLimit: this.state.fPSLimit, //You could try changing this around to see if it explains
          //why the react-js-particles is working better than the vue ones in 
          //Gridsome
          /*interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },*/
          particles: {
            number: { 
              value: state.numberOfParticles, 
              density: { enable: false} //state.densitySettings
              /*{ 
                enable: false, 
                value_area: 600, 
              } 
              */
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
            size: {
              random: false,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}

export default ParticleBg;