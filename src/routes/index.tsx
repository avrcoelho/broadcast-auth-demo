import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

import { SignIn } from "../pages/SignIn";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
