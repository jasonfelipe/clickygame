import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Scorebar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      Current Score: {props.score}
      <br></br>
      High Score: {props.highScore}
    </div>

  </nav>
);

export default Scorebar;
