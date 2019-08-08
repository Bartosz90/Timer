import React, { Component } from "react";
import "./../styles/timer.sass";
import AlarmSetting from "./AlarmSetting";
import Speaker from "./Speaker";
import sound from "../audio/alarm.mp3";

class TimerApp extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    alarmMins: 0,
    alarmSecs: 0,
    alarm: false
  };

  componentDidUpdate() {
    if (this.state.seconds >= 60) {
      this.setState({
        seconds: 0,
        minutes: this.state.minutes + 1
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
        minutes: 0
      });
    }
  };

  handleAlarmSetting = (e, type) => {
    if (type === "min") {
      this.setState({
        alarmMins: e.target.value
      });
    } else {
      this.setState({
        alarmSecs: e.target.value
      });
    }
  };

  handleAlarm = e => {
    e.preventDefault();
    console.log("klik");
  };

  playAlarm = () => {
    this.setState({
      alarm: !this.state.alarm
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>
            0{this.state.minutes} :{" "}
            {this.state.seconds >= 10
              ? this.state.seconds
              : "0" + this.state.seconds}
          </h1>
          <button onClick={() => this.handleTimer("start")}>start</button>
          <button onClick={() => this.handleTimer("stop")}>stop</button>
          <button onClick={() => this.handleTimer("reset")}>reset</button>
        </div>
        <AlarmSetting
          change={this.handleAlarmSetting}
          secs={this.state.alarmSecs}
          mins={this.state.alarmMins}
          click={this.handleAlarm}
        />
        <Speaker sound={sound} click={this.playAlarm} play={this.state.alarm} />
      </>
    );
  }
}

export default TimerApp;
