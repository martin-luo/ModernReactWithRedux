import React from "react";
import ReactDOM from "react-dom";

import { SeasonDisplay } from "./SeasonDisplay";
import { Spinner } from "./Spinner";
import { useLocation } from "./userLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();
  let content;

  if (errorMessage && !lat) {
    content = <div>Error: {errorMessage}</div>;
  }

  if (!errorMessage && lat) {
    content = <SeasonDisplay lat={lat} />;
  }

  content = <Spinner message={"Please accept the location request..."} />;

  return content;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
