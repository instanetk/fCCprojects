import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import QuoteGen from './pages/Quotes';
import Sol from './pages/Sol';
import MarkdownPreviwer from './pages/Markdown';


function App() {
  return (
    <div className="App">
      <Router>
        <div id="navbar">
        <NavBar />
        </div>
      <header className="App-header">
        <Switch>
          <Route path="/cert/quote" component={QuoteGen} />
          <Route path="/cert/sol" component={Sol} /> 
          <Route path="/cert/markdown" component={MarkdownPreviwer} /> 
        </Switch>
     
      </header> 
      </Router>
    </div>
  );
}

export default App;
