import React from "react";
import "../styles/alarm.sass";

const Alert = ({ click }) => {
  return (
    <div className="alert">
      <h1>Alarm already set</h1>
      <p>Press RESET button to set new one.</p>
      <button onClick={click}>ok</button>
    </div>
  );
};

export default Alert;
