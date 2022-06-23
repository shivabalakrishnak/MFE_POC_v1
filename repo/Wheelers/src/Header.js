import React from "react";

import "./Header.scss"

function Header() {
  return (
    <header>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="http://localhost:6997/">Four Wheelers</a>
        <a href="http://localhost:6996/">Two Wheelers</a>
      </div>
    </header>
  );
}

export default Header;
