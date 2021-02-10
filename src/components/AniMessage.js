import React, {useEffect, useState} from "react"

const slogan = "Making Small Business Sites Great Again!";

const AniMessage = () => {
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  
  // typeWriter
  useEffect(() => {
    if (subIndex === slogan.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (1));
    }, Math.max(150, parseInt(Math.random() * 350)));

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
        {`${slogan.substring(0, subIndex)}${blink ? "|" : " "}`}
      </h1>
    </div>
  );
}

export default AniMessage;
