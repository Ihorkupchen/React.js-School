import "./App.css";
import { Redirect, Switch, Route } from "react-router-dom";
import React from "react";
import Employees from "./pages/Employees";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/employees" component={Employees} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
