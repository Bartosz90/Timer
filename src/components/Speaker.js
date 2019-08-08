import React from "react";
import "../styles/speaker.sass";

const Speaker = ({ sound, click, play }) => {
  return (
    <div className="speaker">
      <i className="fas fa-volume-down" />
      <audio src={sound} loop={play} autoPlay={play} />
      <button onClick={click}>
        <span />
        <span />
      </button>
    </div>
  );
};

export default Speaker;
