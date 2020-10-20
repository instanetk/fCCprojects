import React, { Component } from "react";

class Pomodoro extends Component {
  state = { time: [1500000, 0], hold: [0, 0] };
  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>Pomodoro</h1>
        <br />
        <h2>
          {time[0] / 1000 / 60} : {time[1]}
        </h2>
      </div>
    );
  }
}

export default Pomodoro;
