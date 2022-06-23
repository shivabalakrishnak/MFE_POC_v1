import React , {Suspense}from "react";
import ReactDOM from "react-dom";

import "./index.scss";

// import CarsX from "Cars_X/CarsX";
import BikesX from "Bykes_X/BikesX";
import Header from "./Header";
import Footer from "./Footer";

import SafeLoading from "./SafeLoading";

const loadScope = (url, scope) => {
  const element = document.createElement("script");
  const promise = new Promise((resolve, reject) => {
    element.src = url;
    element.type = "text/javascript";
    element.async = true;
    element.onload = () => resolve(window[scope]);
    element.onerror = reject;
  });
  document.head.appendChild(element);
  promise.finally(() => document.head.removeChild(element));
  return promise;
};

const loadModule = async (url, scope, module) => {
  try {
    const container = await loadScope(url, scope);
    await __webpack_init_sharing__("default");
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(module);
    return factory();
  } catch (error) {
    console.error("Error loading module:", error);
    throw error;
  }
};

const CarsX = React.lazy(() =>
  loadModule("http://localhost:6997/remoteEntry.js", "Cars_X", "./CarsX")
);

const App = () => (
  <div>
    <Header></Header>
    <div className="flex">
      <div className="bg-gray-200 ">
      <Suspense fallback={<div>loading...</div>}>
        <SafeLoading>
          <CarsX></CarsX>
        </SafeLoading></Suspense>
      </div>
      <div className="bg-gray-200 ">
        <BikesX></BikesX>
      </div>
    </div>

    <Footer></Footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
