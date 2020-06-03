// Import React and ReactDOM libraries.
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import { App } from "./components/App";
import reducers from "./reducers";

// Take the React component and show it on the screen.
ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(reduxThunk))}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
