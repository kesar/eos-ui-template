import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import TransferPage from "./pages/TransferPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/transfer" component={TransferPage} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
