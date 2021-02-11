import React, {useEffect, useState} from "react"

/*const slogan_p1 = "Making Small Business ";
const slogan_p2 = "Sites Great Again!";
const timeout;
*/

const slogan1 = 'Making Small Business Sites Great Again!';

const AniMessage = () => {
  //const [subIndex1, setSubIndex1] = useState(0);
  //const [subIndex2, setSubIndex2] = useState(0);
  const [blink, setBlink] = useState(true);
  //const [pause, setPause] = useState(true);
  const [subIndex, setSubIndex] = useState(0);
  
  // typeWriter
  useEffect(() => {
    console.log(slogan1.length);
    if (subIndex === slogan1.length) return;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (1));
    }, Math.max(150, parseInt(Math.random() * 350)));


    /*if (subIndex1 < slogan_p1.length) {
      timeout = setTimeout(() => {
        setSubIndex1((prev) => prev + (1));
      }, Math.max(150, parseInt(Math.random() * 350)));
    } else if (subIndex === slogan_p1.length && pause) {
      setPause(false);
      console.log('paused');
      timeout = setTimeout(() => {
        document.getElementById('')
        
      }, 1200);
    }
    
    if (subIndex2 === slogan_p2.length) return;*/

   
    

    return () => clearTimeout(timeout);
  }, [subIndex]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div id="animated-message-container">
      <h1>
        {`${slogan1.substring(0, subIndex)}${blink ? "|" : " "}`}
      </h1>
    </div>
  );
}

export default AniMessage;
