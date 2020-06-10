import React, { Component } from "react";

let birthday = [new Date(1986, 0, 26)];
let utc = new Date(Date.now());
const EST = utc.getTimezoneOffset() * (60 * 1000);
let today = Date.now() - EST;
let time = today - birthday[0];
let sol = Math.round(time / (1000 * 3600 * 24)).toLocaleString();
// let sol = new Date(time / (1000 * 3600 * 24)).toLocaleString();
console.log(today, utc.getTimezoneOffset() * (60 * 1000), birthday[0]);
class SolCount extends Component {
  render() {
    return (
      <div>
        <div className="System">
          <span className="Sun" role="img" aria-label="Sun emoji">
            ☀️
          </span>
          <span className="Earth" role="img" aria-label="Earth emoji">
            🌎
            <span className="Moon" role="img" aria-label="Moon emoji">
              🌘
            </span>
          </span>
        </div>
        <h1>SOL {sol}</h1>
      </div>
    );
  }
}

export default SolCount;
