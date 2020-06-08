import React, { Component } from "react";
import "../drumMachine.css";

let keyPad = [
  {
    key: "Q",
    keyCode: 81,
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    keyCode: 87,
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    keyCode: 69,
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    keyCode: 65,
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    keyCode: 83,
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    keyCode: 68,
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    keyCode: 90,
    id: "Kick-n Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    keyCode: 88,
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    keyCode: 67,
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: "",
    };
  }

  handleClick = this.handleClick.bind(this);
  handleKeyPress = this.handleKeyPress.bind(this);

  handleClick(key) {
      this.setState({pressed: key.id});
    document.getElementById(key.key).play();
    console.log("Pad Clicked", key.key);
  }

  handleKeyPress(e) {
    // Handle event
    switch (e.keyCode) {
      case 81:
        console.log();
        document.getElementById(keyPad[0].key).click();
        break;
      case 87:
        console.log();
        document.getElementById(keyPad[1].key).click();
        break;
      case 69:
        console.log();
        document.getElementById(keyPad[2].key).click();
        break;
      case 65:
        console.log();
        document.getElementById(keyPad[3].key).click();
        break;
      case 83:
        console.log();
        document.getElementById(keyPad[4].key).click();
        break;
      case 68:
        console.log();
        document.getElementById(keyPad[5].key).click();
        break;
      case 90:
        console.log();
        document.getElementById(keyPad[6].key).click();
        break;
      case 88:
        console.log();
        document.getElementById(keyPad[7].key).click();
        break;
      case 67:
        console.log();
        document.getElementById(keyPad[8].key).click();
        break;
      default:
    }

    console.log("Key code: " + e.keyCode);
  }

  componentDidMount() {
    // Add Event Listener on compenent mount
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    // Remove event listener on compenent unmount
    window.removeEventListener("keydown", this.handleKeyPress);
  }
  //   handleKeyPress(event) {
  //         // document.getElementById(key.key).play();
  //         // document.addEventListener('keydown', logKey => {
  //         //     console.log("Key Pressed", logKey);
  //         // })
  //         console.log("Key Pressed", event);

  //   }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
            <p>{this.state.pressed}</p>
          {keyPad.map((keyPad) => (
            //You can only pass props to components
            //Use arrow functions to pass arguments to function references
            <div
              className="drum-pad"
              tabIndex="0"
              key={keyPad.keyCode}
              id={keyPad.key + "-pad"}
              onClick={() => this.handleClick(keyPad)}
              onKeyPress={() => this.handleKeyPress(keyPad.key)}
              //   onClick={() => this.setState({pressed: keyPad.key}), () => this.handleKeyPress}
            >
              <span>{keyPad.key}</span>
              <audio
                src={keyPad.url}
                className="clip"
                id={keyPad.key}
                preload="auto"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DrumMachine;
