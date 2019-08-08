import React from "react";
import "./../styles/alarm.sass";

const AlarmSettings = ({ change, mins, secs, click, reset }) => {
  return (
    <form className="form">
      <label htmlFor="min">min:</label>
      <input
        type="number"
        name="quantity"
        min="0"
        max="59"
        value={mins}
        onChange={e => change(e, "min")}
        id="min"
      />
      <label htmlFor="sec">sec:</label>
      <input
        type="number"
        name="quantity"
        min="0"
        max="59"
        value={secs}
        onChange={e => change(e, "sec")}
        id="sec"
      />
      <button type="submit" onClick={click}>
        Set Alarm
      </button>
      <button onClick={reset}>reset</button>
    </form>
  );
};

export default AlarmSettings;
