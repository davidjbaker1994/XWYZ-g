import React, {useEffect, useState} from "react"

/*const slogan_p1 = "Making Small Business ";
const slogan_p2 = "Sites Great Again!";
const timeout;
*/

const slogan1 = 'Making Small Business Sites Great Again!';

const AniMessage = ({ handleAnimationCompleted }) => {
  const [blink, setBlink] = useState(true);
  const [subIndex, setSubIndex] = useState(0);
  let timeout;

  
  
  // typeWriter
  useEffect(() => {
    if (subIndex === slogan1.length) {
      handleAnimationCompleted(true);
      return;
    } else if (subIndex === 27) {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (1));
      }, 3000);
    } else {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (1));
      }, Math.max(150, parseInt(Math.random() * 350)));

    }
    
    return () => clearTimeout(timeout);
  }, [subIndex]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);
  //${blink ? "|" : " "}`}
  return (
    <div id="animated-message-container">
      <div>
        <h1>
          {`${slogan1.substring(0, subIndex)}`}<span style={{opacity: blink ? '1' : '0'}}>|</span>
        </h1>
      </div>
    </div>
  );
}

export default AniMessage;
