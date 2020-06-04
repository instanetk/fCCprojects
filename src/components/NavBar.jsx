import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cert">Home</Link>
        </li>
        <li>
          <Link to="/cert/quote">Quote Generator</Link>
        </li>
        <li>
          <Link to="/cert/markdown">Markdown</Link>
        </li>
        <li>
          <Link to="/cert/drumroll">Drumroll Machine</Link>
        </li>
        <li>
          <Link to="/cert/calc">Calculator</Link>
        </li>
        <li>
          <Link to="/cert/podomoro">Podomoro</Link>
        </li>
        <li>
          <Link to="/cert/sol">SOL</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
