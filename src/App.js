import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { withUAL } from "ual-reactjs-renderer";

import Layout from "./components/layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default withUAL(App);
