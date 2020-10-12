import React from "react";
import ReactDOM from "react-dom";
import { UALProvider } from "ual-reactjs-renderer";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "semantic-ui-css/semantic.min.css";
import {
  appName,
  supportedChains,
  supportedAuthenticators,
} from "./utils/UalProvider";

import GlobalContextProvider from "./context/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <UALProvider
        chains={supportedChains}
        authenticators={supportedAuthenticators}
        appName={appName}
      >
        <App />
      </UALProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
