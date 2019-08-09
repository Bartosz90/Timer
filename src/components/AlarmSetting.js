import React from "react";
import "./../styles/alarm.sass";

const AlarmSettings = ({ change, mins, secs, click, reset, soundOn }) => {
  return (
    <div className="settings">
      <div className="min">
        <p className="unit">min's:</p> <p className="number">{mins}</p>
        <button onClick={() => change("min", "sub")} className="formBtn">
          -1
        </button>
        <button onClick={() => change("min", "add")} className="formBtn">
          +1
        </button>{" "}
        <button onClick={() => change("min", "add10")} className="formBtn">
          +10
        </button>
      </div>
      <div className="sec">
        <p className="unit">sec's:</p> <p className="number">{secs}</p>
        <button onClick={() => change("sec", "sub")} className="formBtn">
          -1
        </button>
        <button onClick={() => change("sec", "add")} className="formBtn">
          +1
        </button>
        <button onClick={() => change("sec", "add10")} className="formBtn">
          +10
        </button>
      </div>

      <button onClick={click} className="submit">
        Set Alarm
      </button>
      <button
        onClick={reset}
        className="submit"
        style={{
          animation: `${soundOn ? "alert .5s linear infinite" : "none"}`
        }}
      >
        reset
      </button>
    </div>
  );
};

export default AlarmSettings;
