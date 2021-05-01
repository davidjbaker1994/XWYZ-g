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
      numberOfParticles: (width < 510) ? 21 : (width < 930) ? 24 : 27, //36L60
      setUp: false
    });
  }

  useEffect(() => {
    if (state.width !== null && state.width === width) return;
    sTo = setTimeout(setUp, 900);
    return () => clearTimeout(sTo);
  }, [state]);

  if (state.setUp) {
    return <div style={{visibility: 'hidden'}} />;
  } else {
    return (
      <Particles
        className="show"
        params={{
          particles: {
            number: { 
              value: state.numberOfParticles, 
              density: { enable: false} 
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