import React, { Component } from "react";
import "./../styles/timer.sass";
import AlarmSetting from "./AlarmSetting";
import Speaker from "./Speaker";
import sound from "../audio/alarm.mp3";
import Alarm from "./Alarm";
import Alert from "./Alert";

class TimerApp extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    alarmMins: 0,
    alarmSecs: 0,
    soundOn: false,
    alarmSet: false,
    alarmCounterMins: 0,
    alarmCounterSecs: 0,
    alarmSetAlert: false,
    alert: { head: "", content: "" }
  };

  componentDidUpdate() {
    if (this.state.seconds >= 60) {
      this.setState({
        seconds: 0,
        minutes: this.state.minutes + 1
      });
    }
    if (this.state.minutes >= 60) {
      this.setState({
        minutes: 0,
        hours: this.state.hours + 1
      });
    }
  }

  handleTimer = action => {
    if (action === "start") {
      this.counter = setInterval(() => {
        this.setState({
          seconds: this.state.seconds + 1
        });
      }, 1000);
    } else if (action === "stop") {
      clearInterval(this.counter);
    } else {
      clearInterval(this.counter);
      this.setState({
        seconds: 0,
        minutes: 0,
        hours: 0
      });
    }
  };

  handleAlarmSetting = (type, action) => {
    if (
      (type === "min" && this.state.alarmMins === 0 && action === "sub") ||
      (type === "sec" && this.state.alarmSecs === 0 && action === "sub")
    ) {
      this.setState({
        alert: { head: "Alert!", content: "Range is 0-59" },
        alarmSetAlert: true
      });
      return;
    }
    if (
      (type === "min" && this.state.alarmMins === 59 && action === "add") ||
      (type === "sec" && this.state.alarmSecs === 59 && action === "add")
    ) {
      this.setState({
        alert: { head: "Alert!", content: "Range is 0-59" },
        alarmSetAlert: true
      });
      return;
    }
    if (type === "min") {
      if (action === "sub") {
        this.setState({
          alarmMins: this.state.alarmMins - 1
        });
      } else {
        this.setState({
          alarmMins: this.state.alarmMins + 1
        });
      }
    } else {
      if (action === "sub") {
        this.setState({
          alarmSecs: this.state.alarmSecs - 1
        });
      } else {
        this.setState({
          alarmSecs: this.state.alarmSecs + 1
        });
      }
    }
  };

  alarmCounter;
  handleAlarm = e => {
    e.preventDefault();

    if (this.state.alarmSet) {
      this.setState({
        alarmSetAlert: true,
        alert: {
          head: "Alarm already set!",
          content: "Press RESET button to start new one."
        }
      });
      return;
    }

    const alarmTime =
      this.state.alarmMins * 60000 + this.state.alarmSecs * 1000;
    this.setState({
      alarmCounterMins: this.state.alarmMins,
      alarmCounterSecs: this.state.alarmSecs,
      alarmMins: 0,
      alarmSecs: 0,
      alarmSet: true
    });
    const counter = setInterval(() => {
      if (this.state.alarmCounterSecs > 0) {
        this.setState({
          alarmCounterSecs: this.state.alarmCounterSecs - 1
        });
      } else if (
        this.state.alarmCounterSecs === 0 &&
        this.state.alarmCounterMins !== 0
      ) {
        this.setState({
          alarmCounterSecs: 59,
          alarmCounterMins: this.state.alarmCounterMins - 1
        });
      } else {
        this.setState({
          alarmCounterSecs: 0,
          alarmCounterMins: 0
        });
        clearInterval(counter);
      }
    }, 1000);
    this.alarmCounter = setTimeout(() => {
      this.setState({ soundOn: true });
    }, alarmTime);
  };

  stopAlarm = () => {
    if (this.state.soundOn) {
      this.setState({
        soundOn: false,
        alarmSet: false
      });
    }
  };

  resetAlarmCounter = () => {
    clearInterval(this.alarmCounter);
    this.setState({
      alarmMins: 0,
      alarmSecs: 0,
      soundOn: false,
      alarmSet: false,
      alarmCounterMins: 0,
      alarmCounterSecs: 0
    });
  };

  handleAlertRemove = () => {
    this.setState({
      alarmSetAlert: false
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="timer">
            <h1>
              {this.state.hours >= 10
                ? this.state.hours
                : "0" + this.state.hours}{" "}
            </h1>{" "}
            :
            <h1>
              {this.state.minutes >= 10
                ? this.state.minutes
                : "0" + this.state.minutes}
            </h1>
            :{" "}
            <h1>
              {this.state.seconds >= 10
                ? this.state.seconds
                : "0" + this.state.seconds}
            </h1>
          </div>
          <button onClick={() => this.handleTimer("start")}>start</button>
          <button onClick={() => this.handleTimer("stop")}>stop</button>
          <button onClick={() => this.handleTimer("reset")}>reset</button>
        </div>
        <AlarmSetting
          change={this.handleAlarmSetting}
          secs={this.state.alarmSecs}
          mins={this.state.alarmMins}
          click={this.handleAlarm}
          reset={this.resetAlarmCounter}
        />
        <Speaker
          sound={sound}
          click={this.stopAlarm}
          soundOn={this.state.soundOn}
        />
        {this.state.alarmSet && (
          <Alarm
            mins={this.state.alarmCounterMins}
            secs={this.state.alarmCounterSecs}
            soundOn={this.state.soundOn}
          />
        )}
        {this.state.alarmSetAlert && (
          <Alert
            click={this.handleAlertRemove}
            alert1={this.state.alert.head}
            alert2={this.state.alert.content}
          />
        )}
      </>
    );
  }
}

export default TimerApp;
