import React from "react"
import Typewriter from 'typewriter-effect';


const TypingEffect = ({handleAnimationCompleted}) => {

  return (
    <div id="type-writer-container">
     <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Making Small Business Sites')
      .pauseFor(2500)
      .typeString(' Great Again!')
      .callFunction(() => {
        handleAnimationCompleted(true);
      })
      .start();
  }}
/>
    </div>
  );
}

export default TypingEffect;
