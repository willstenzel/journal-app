import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import { NewEntry } from "../components/NewEntry";
import { Login } from '../components/auth/Login';

export default (
  <Router>
    <Switch>
      <Route path="/entries/new" exact component={NewEntry} />
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </Router>
);
