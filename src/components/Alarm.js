import React from "react";
import "../styles/alarm.sass";

const Alarm = ({ mins, secs, soundOn }) => {
  return (
    <>
      {soundOn ? (
        <h1
          className="counter"
          style={{
            animation: `${soundOn ? "blink .5s infinite" : "none"}`
          }}
        >
          ALERT!
        </h1>
      ) : (
        <h1 className="counter">
          {mins < 10 ? "0" + mins : mins} : {secs < 10 ? "0" + secs : secs}
        </h1>
      )}
    </>
  );
};

export default Alarm;
