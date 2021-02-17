import React, { Component } from 'react'
import Particles from 'react-particles-js'
import useWindowSize from "./use-window-size"



//let sTo;

class CustomParticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFull: false,
      windowWidth: 0,
      numberOfParticles: 93,
      fPSLimit: 60,
      densitySettings: {
        enable: false,
        value_area: 800
      }
    }
  }

  
  componentDidMount() {
    //sTo = setTimeout(this.updateParams, 12000);
    this.updateParams();
  }

  /*
  componentDidUpdate() {
    if (!this.state.showFull) {
      this.setState((prevState) => {
        return {...prevState, showFull: true}
      });
    }
  }

 /* componentWillUnmount() {
    clearTimeout(sTo);
  }
  */

  updateParams = () => {
    const { width } = this.props.winSize;
    const currWindowSize = this.state.windowWidth;
    
    if (currWindowSize === 0 || currWindowSize !== width) {
      this.setState((prevState) => {
        return {...prevState, windowWidth: width}
      });
      if (width < 510) {
        this.setState((prevState) => {
          return {...prevState, numberOfParticles: 21, fPSLimit: 36}
        });
      } else if (width < 930) {
        this.setState((prevState) => {
          return {...prevState, numberOfParticles: 36, fPSLimit: 60}
        });
      }
    }
  }

  render() {
    return (
      <Particles
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
              value: this.state.numberOfParticles, 
              density: { enable: false} //this.state.densitySettings
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
    );
  }
}

const ParticleBg = ({ loadReal }) => {
  console.log(loadReal);
  var windowSize = useWindowSize();
  return (
    <CustomParticles winSize={windowSize} />
  );
  /*if (loadReal) {

    return (
      <CustomParticles winSize={windowSize} />
    );
  } else {
    return(
      <div style={{visibility: 'hidden'}} />
    );
  } */
}


export default ParticleBg;