import React from "react";
import "./../styles/alarm.sass";

const AlarmSettings = ({ change, mins, secs, click, reset }) => {
  return (
    <div className="settings">
      <p>min:</p>{" "}
      <button onClick={() => change("min", "sub")} className="formBtn">
        -
      </button>
      <p className="number">{mins}</p>
      <button onClick={() => change("min", "add")} className="formBtn">
        +
      </button>
      <p>sec:</p>{" "}
      <button onClick={() => change("sec", "sub")} className="formBtn">
        -
      </button>
      <p className="number">{secs}</p>
      <button onClick={() => change("sec", "add")} className="formBtn">
        +
      </button>
      <button onClick={click} className="submit">
        Set Alarm
      </button>
      <button onClick={reset} className="submit">
        reset
      </button>
    </div>
  );
};

export default AlarmSettings;
