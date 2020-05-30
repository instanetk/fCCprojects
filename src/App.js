import React from 'react';
import './App.css';
import QuoteBox from './components/quoteBox';
import SolCount from './components/solCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="System">
        <span className="Sun" role="img" aria-label="Sun emoji">☀️</span>
        <span className="Earth" role="img" aria-label="Earth emoji">🌎<span className="Moon" role="img" aria-label="Moon emoji">🌘</span></span>
        </div>
        <SolCount />
        <QuoteBox />
      </header>
    </div>
  );
}

export default App;
