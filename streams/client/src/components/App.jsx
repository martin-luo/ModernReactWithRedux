import React from "react";
import { Router, Route, Switch } from "react-router-dom";

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
        <Switch>
          <Route exact path={"/"} component={StreamList} />
          <Route exact path={"/streams"} component={StreamList} />
          <Route exact path={"/streams/new"} component={StreamCreate} />
          <Route exact path={"/streams/edit/:id"} component={StreamEdit} />
          <Route exact path={"/streams/delete/:id"} component={StreamDelete} />
          <Route exact path={"/streams/:id"} component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export { App };
