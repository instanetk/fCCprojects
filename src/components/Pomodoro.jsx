import React, { Component } from "react";
import "./common/pomodoro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faPlayCircle,
  faPauseCircle,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

class Pomodoro extends Component {
  state = {
    session: 25,
    rest: 5,
    timer: 1500000,
    running: false,
    interval: null,
    paused: false,
  };

  handleSessionControl(time) {
    let { session } = { ...this.state };

    const control = {
      up: function () {
        return (session += 1);
      },
      down: function () {
        return (session -= 1);
      },
    };
    session = control[time]();
    if (session >= 1) {
      this.setState({ session });
    }
  }

  handleBreakControl(time) {
    let { rest } = { ...this.state };

    const control = {
      up: function () {
        return (rest += 1);
      },
      down: function () {
        return (rest -= 1);
      },
    };
    rest = control[time]();
    if (rest >= 1) {
      this.setState({ rest });
    }
  }

  handleRun() {
    let { timer, running, interval } = this.state;
    timer -= 1000;
    if (timer >= 0 && running) {
      this.setState({ timer });
    } else if (running) {
      this.setState({ running: false, interval: null });
      return clearInterval(interval);
    }
  }

  handleStart() {
    let { session, timer, interval, paused } = { ...this.state };

    timer = session * 60 * 1000;
    if (!paused) {
      this.setState({ timer, running: true });
    } else {
      this.setState({ running: true, paused: false });
    }

    if (timer >= 0) {
      interval = setInterval(() => {
        this.handleRun();
      }, 1000);
      this.setState({ interval });
    }
  }

  handlePause() {
    const { interval } = this.state;
    console.log("paused");

    this.setState({ running: false, interval: null, paused: true });
    return clearInterval(interval);
  }
  handleReset() {
    const { interval } = this.state;

    this.setState({
      rest: 5,
      session: 25,
      timer: 1500000,
      running: false,
      interval: null,
      paused: false,
    });
    return clearInterval(interval);
  }
  render() {
    const { session, rest, running, timer } = this.state;
    return (
      <div id="pomodoro">
        <div id="group">
          <div id="break-label">
            <span>Break Length</span>
          </div>
          <div className="control">
            <div id="break-increment">
              <FontAwesomeIcon
                icon={faCaretUp}
                size="2x"
                onClick={() => this.handleBreakControl("up")}
              />
            </div>
            <div id="break-decrement">
              <FontAwesomeIcon
                icon={faCaretDown}
                size="2x"
                onClick={() => this.handleBreakControl("down")}
              />
            </div>
            <div id="break-length">
              <span>{rest}</span>
            </div>
          </div>
        </div>
        <div id="group">
          <div id="session-label">
            <span>Session Length</span>
          </div>
          <div className="control">
            <div id="session-increment">
              <FontAwesomeIcon
                icon={faCaretUp}
                size="2x"
                onClick={() => this.handleSessionControl("up")}
              />
            </div>
            <div id="session-decrement">
              <FontAwesomeIcon
                icon={faCaretDown}
                size="2x"
                onClick={() => this.handleSessionControl("down")}
              />
            </div>
            <div id="session-length">
              <span>{session}</span>
            </div>
          </div>
        </div>
        <div id="timer">
          <div id="timer-label">
            <span>Session</span>
          </div>
          <div id="time-left">
            <span>
              {(() => {
                let remaning = new Date(timer).toISOString().slice(14, 19);
                return remaning;
              })()}
            </span>
          </div>
          <div className="control_circles">
            <div id="start_stop">
              {(() => {
                console.log(running);
                if (!running) {
                  return (
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      size="lg"
                      onClick={() => this.handleStart()}
                    />
                  );
                } else {
                  return (
                    <FontAwesomeIcon
                      icon={faPauseCircle}
                      size="lg"
                      onClick={() => this.handlePause()}
                    />
                  );
                }
              })()}
            </div>
            <div id="reset">
              <FontAwesomeIcon
                icon={faSyncAlt}
                size="lg"
                onClick={() => this.handleReset()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pomodoro;
