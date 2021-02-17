import React, {useState, useEffect} from 'react'
import Particles from 'react-particles-js'
import useWindowSize from "./use-window-size"


const ParticleBackground = ({ loadReal }) => {
  const [state, setState] = useState({
    numberOfParticles: 93,
    winSize: null,
    fPSLimit: 60,
    densitySettings: {
      enable: false,
      value_area: 800
    }
  });
/*
  function checkWindowSize() {
    //for some reason it wouldn't let me use a custom hook
    //inside use effect hence this function
    const winSize = useWindowSize();
    console.log(winSize);
    return winSize;
  }
*/
  var myParticles = <div style={{visibility: 'hidden'}} />;
  var windowSize = useWindowSize();

  useEffect(() => {
    if (state.winSize === null || state.winSize !== windowSize) {
      console.log('equalled null');
      setState({
        ...state,
        winSize: windowSize
      });
      if (windowSize < 510) {
        setState({
          ...state,
          numberOfParticles: 45,
          fPSLimit: 36
        });
      } else if (windowSize < 930) {
        setState({
          ...state,
          numberOfParticles: 54,
          fPSLimit: 60
        });
      }
    }
  }, [state.winSize]);
  
  if (loadReal) {
    myParticles = <Particles
      params={{
        fpsLimit: state.fPSLimit, //You could try changing this around to see if it explains
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
            density: { 
              enable: false, 
              value_area: 600, 
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

export default ParticleBackground;
