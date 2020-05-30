import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import { NewEntry } from "../components/NewEntry";

export default (
  <Router>
    <Switch>
      <Route path="/entries/new" exact component={NewEntry} />
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);
