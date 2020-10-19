import React, { Component } from "react";
import "./common/calc.css";

class Calculator extends Component {
  state = {
    display: [0],
    hold: [0],
    operand: null,
    sign: false,
  };

  current() {
    if (Array.isArray(this.state.display)) {
      return parseFloat(this.state.display.join(""));
    } else {
      return parseFloat(this.state.display);
    }
  }

  handleNumber(number) {
    const current = [...this.state.display];
    if (current[0] === 0 && current[0] % 1 === 0) {
      console.log("case 1");
      current.shift();
      this.setState({ display: [number] });
    } else if (current.length !== 9) {
      console.log("case 2");
      const update = current.concat(number).join("");
      this.setState({ display: [parseFloat(update)] });
    }
  }

  handleDecimal() {
    const current = [...this.state.display];
    console.log(typeof current[0]);
    if (current[0] % 1 === 0 && typeof current[0] === "number") {
      const update = current.concat(".").join("");
      this.setState({ display: update });
    }
  }

  handleClear() {
    this.setState({
      display: [0],
      hold: [0],
      operand: null,
      sign: false,
    });
  }

  handleSign() {
    const current = [...this.state.display];
    const result = current * -1;
    if (!this.state.sign) {
      this.setState({ sign: true, display: [result] });
    } else {
      this.setState({ sign: false, display: [result] });
    }
  }

  handlePercent() {
    const result = this.current() / 100;
    this.setState({ display: [result] });
  }

  handleOperation(op) {
    const { display, hold, operand } = this.state;
    console.log("handleOp", display[0], hold[0], operand);

    const operation = {
      add: function (a, b) {
        return a + b;
      },
      subtract: function (a, b) {
        // if (operand !== null) {

        // }
        console.log("subtract");
        return a - b;
      },
      multiply: function (a, b) {
        return a * b;
      },
      divide: function (a, b) {
        return a / b;
      },
    };

    operation.subtract.bind(this);

    if (hold[0] === 0 && operand === null) {
      console.log("case 1");
      this.setState({ display: [0], operand: op, hold: [this.current()] });
    } else if (hold[0] !== 0 && display[0] !== 0) {
      console.log("case 2");
      const result = operation[operand](hold[0], this.current());
      this.setState({ display: [result], operand: op, hold: [0] });
    } else {
      console.log("case 3");
      this.setState({ operand: op });
    }
  }
  render() {
    const display = () => {
      if (typeof this.state.display[0] === "string") return this.state.display;

      return Number(this.state.display).toLocaleString("en-US", {
        maximumSignificantDigits: 9,
      });
    };
    const hold = Number(this.state.hold).toLocaleString("en-US", {
      maximumSignificantDigits: 9,
    });
    const ac =
      this.state.display[0] === 0 && this.state.hold[0] === 0 ? "AC" : "C";

    let result;

    switch (display.length) {
      case (7, 8, 9, 10):
        result = "result-nine";
        break;
      case display.length >= 11:
        result = "result-eleven";
        break;
      default:
        result = "result";
    }
    // console.log(display.length, result);
    // const test = [3, "+", 5, "*", 6, "-", 2, "/", 4];
    // console.log(Function(test.join("").toString()));

    const show = () => {
      if (hold === "0") {
        // console.log(true, "display: ", display, "hold: ", hold);
        return display();
      } else if (hold !== "0" && display !== "0") {
        // console.log(false, "display: ", display, "hold: ", hold);
        return display();
      } else {
        console.log("hold");
        return hold;
      }
    };

    return (
      <div>
        <div id="calculator">
          <div id="display">
            <span className={result}>{show()}</span>
          </div>

          <div id="functions">
            <div id="clear" onClick={() => this.handleClear()}>
              <div className="buttonfunc">{ac}</div>
            </div>
            <div id="sign" onClick={() => this.handleSign()}>
              <div className="buttonfunc">
                <span>+/-</span>
              </div>
            </div>
            <div id="percent" onClick={() => this.handlePercent()}>
              <div className="buttonfunc">%</div>
            </div>
          </div>
          <div id="operators">
            <div id="divide" onClick={() => this.handleOperation("divide")}>
              <div className="button">÷</div>
            </div>
            <div id="multiply" onClick={() => this.handleOperation("multiply")}>
              <div className="button">x</div>
            </div>
            <div id="subtract" onClick={() => this.handleOperation("subtract")}>
              <div className="button">-</div>
            </div>
            <div id="add" onClick={() => this.handleOperation("add")}>
              <div className="button">+</div>
            </div>
            <div id="equals" onClick={() => this.handleOperation("equals")}>
              <div className="button">=</div>
            </div>
          </div>
          <div id="numbers">
            <div id="seven" onClick={() => this.handleNumber(7)}>
              <div className="button">7</div>
            </div>
            <div id="eight" onClick={() => this.handleNumber(8)}>
              <div className="button">8</div>
            </div>
            <div id="nine" onClick={() => this.handleNumber(9)}>
              <div className="button">9</div>
            </div>
            <div id="four" onClick={() => this.handleNumber(4)}>
              <div className="button">4</div>
            </div>
            <div id="five" onClick={() => this.handleNumber(5)}>
              <div className="button">5</div>
            </div>
            <div id="six" onClick={() => this.handleNumber(6)}>
              <div className="button">6</div>
            </div>
            <div id="one" onClick={() => this.handleNumber(1)}>
              <div className="button">1</div>
            </div>
            <div id="two" onClick={() => this.handleNumber(2)}>
              <div className="button">2</div>
            </div>
            <div id="three" onClick={() => this.handleNumber(3)}>
              <div className="button">3</div>
            </div>
            <div id="zero" onClick={() => this.handleNumber(0)}>
              <div className="zero">0</div>
            </div>
            <div id="decimal" onClick={() => this.handleDecimal()}>
              <div className="dot">.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
