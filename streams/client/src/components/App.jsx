import React from "react";
import { Router, Route } from "react-router-dom";

import {
  StreamList,
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamShow,
} from "./streams";
import { Header } from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className={"ui container"}>
      <Router history={history}>
        <Header />
        <Route exact path={"/"} component={StreamList} />
        <Route exact path={"/streams"} component={StreamList} />
        <Route exact path={"/streams/new"} component={StreamCreate} />
        <Route exact path={"/streams/edit/:id"} component={StreamEdit} />
        <Route exact path={"/streams/delete/:id"} component={StreamDelete} />
        <Route exact path={"/streams/show"} component={StreamShow} />
      </Router>
    </div>
  );
};

export { App };
