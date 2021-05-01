import React from "react"
import Typewriter from 'typewriter-effect';


const TypingEffect = ({handleAnimationCompleted}) => (
  <div id="type-writer-container">
    <Typewriter
      onInit={(typewriter) => {
      typewriter.typeString('Making Small Business Sites')
      .pauseFor(1000)
      .callFunction(() => {
        handleAnimationCompleted(true);
      })
      .pauseFor(200)
      .typeString(' Great Again!')
      .start();
    }}/>
  </div>
)

export default TypingEffect;
