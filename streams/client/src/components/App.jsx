import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import {
  StreamList,
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamShow,
} from "./streams";
import { Header } from "./Header";

const App = () => {
  return (
    <div className={"ui container"}>
      <BrowserRouter>
        <Header />
        <Route exact path={"/"} component={StreamList} />
        <Route exact path={"/streams"} component={StreamList} />
        <Route exact path={"/streams/new"} component={StreamCreate} />
        <Route exact path={"/streams/edit"} component={StreamEdit} />
        <Route exact path={"/streams/delete"} component={StreamDelete} />
        <Route exact path={"/streams/show"} component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};

export { App };
