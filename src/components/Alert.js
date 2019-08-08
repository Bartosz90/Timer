import React from "react";
import "../styles/alarm.sass";

const Alert = ({ click, alert1, alert2 }) => {
  return (
    <div className="alert">
      <h1>{alert1}</h1>
      <p>{alert2}</p>
      <button onClick={click}>ok</button>
    </div>
  );
};

export default Alert;
