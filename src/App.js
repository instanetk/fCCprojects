import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import QuoteGen from "./pages/Quotes";
import Sol from "./pages/Sol";
import MarkdownPreviwer from "./pages/Markdown";
import DrumMachine from "./components/DrumMachine";
import Calculator from "./components/Calculator";
import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <div className="App">
      <Router>
        <div id="navbar">
          <NavBar />
        </div>
        <header className="App-header">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/cert/quote" component={QuoteGen} />
            <Route path="/cert/sol" component={Sol} />
            <Route path="/cert/markdown" component={MarkdownPreviwer} />
            <Route path="/cert/drum" component={DrumMachine} />
            <Route path="/cert/calc" component={Calculator} />
            <Route path="/cert/pomodoro" component={Pomodoro} />
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;
