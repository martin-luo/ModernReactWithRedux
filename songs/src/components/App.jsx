import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { SongList } from "./SongList";
import reducers from "../reducers";
import { SongDetails } from "./SongDetails";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <div className={"ui container grid"}>
        <div className={"ui row"}>
          <div className={"column eight wide"}>
            <SongList />
          </div>
          <div className={"column eight wide"}>
            <SongDetails />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export { App };
