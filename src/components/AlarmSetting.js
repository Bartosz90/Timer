import React from "react";
import "./../styles/alarm.sass";

const AlarmSettings = ({ change, mins, secs, click }) => {
  return (
    <form className="form" onSubmit={click}>
      <input
        type="number"
        name="quantity"
        min="0"
        max="59"
        value={mins}
        onChange={e => change(e, "min")}
      />
      <input
        type="number"
        name="quantity"
        min="0"
        max="59"
        value={secs}
        onChange={e => change(e, "sec")}
      />
      <button type="submit" onClick={click}>
        Set Alarm
      </button>
    </form>
  );
};

export default AlarmSettings;
