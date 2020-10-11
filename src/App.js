import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { withUAL } from "ual-reactjs-renderer";

import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default withUAL(App);
