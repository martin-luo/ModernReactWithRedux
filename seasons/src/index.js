import React, { Component } from "react";
import ReactDOM from "react-dom";
import { SeasonDisplay } from "./SeasonDisplay";
import { Spinner } from "./Spinner";

class App extends Component {
  // Initialize the state without writing the constructor method.
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    // Get user's current location.
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => this.setState({ lat: coords.latitude }),
      ({ message: errorMessage }) => this.setState({ errorMessage })
    );
  }

  renderContent() {
    const { lat, errorMessage } = this.state;

    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat} />;
    }

    return <Spinner message={"Please accept the location request..."} />;
  }

  render() {
    return this.renderContent();
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
