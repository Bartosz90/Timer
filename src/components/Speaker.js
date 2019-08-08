import React from "react";
import "../styles/speaker.sass";

const Speaker = ({ sound, click, soundOn }) => {
  return (
    <div className="speaker">
      <i
        className="fas fa-volume-down"
        style={{
          animation: `${soundOn ? "shake .5s linear infinite" : "none"}`
        }}
      />
      <button
        onClick={click}
        style={{
          animation: `${soundOn ? "shadow .5s linear infinite" : "none"}`
        }}
      >
        <span />
        <span />
      </button>
      {soundOn && <audio src={sound} loop autoPlay />}
    </div>
  );
};

export default Speaker;
