import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ApiDoc } from "./components/ApiDoc/ApiDoc";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home" component={Layout} />
        <Route path="/apidoc" component={ApiDoc} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
