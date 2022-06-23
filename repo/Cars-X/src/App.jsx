import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import CarsX from "./CarsX";

const App = () => (
  <div>
    <header className="bg-purple-900 text-white p-3 font-mono text-3xl">
      Cars - Xclsv
    </header>
    <CarsX></CarsX>
    <footer className="bg-purple-900 text-white p-2 font-mono ">
      Copyrights @ Cars - Xclsv
    </footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
