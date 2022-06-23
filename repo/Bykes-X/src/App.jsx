import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import BikesX from "./BikeX";

const App = () => (
  <div>
  <header className="bg-green-600 text-white p-3 font-mono text-3xl">
    MotorBikes - Xclsv
  </header>
  <BikesX></BikesX>
  <footer className="bg-green-600 text-white p-2 font-mono ">
    Copyrights @ Bikes - Xclsv
  </footer>
</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
