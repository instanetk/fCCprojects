import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/projects/fcc">Home</Link>
        </li>
        <li>
          <Link to="/projects/fcc/quote">Quote Generator</Link>
        </li>
        <li>
          <Link to="/projects/fcc/markdown">Markdown</Link>
        </li>
        <li>
          <Link to="/projects/fcc/drum">Drum Machine</Link>
        </li>
        <li>
          <Link to="/projects/fcc/calc">Calculator</Link>
        </li>
        <li>
          <Link to="/projects/fcc/pomodoro">Pomodoro</Link>
        </li>
        <li>
          <Link to="/projects/fcc/sol">SOL</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
