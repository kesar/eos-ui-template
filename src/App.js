import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { UALProvider } from "ual-reactjs-renderer";
import {
  appName,
  supportedAuthenticators,
  supportedChains,
} from "./utils/UalProvider";

import Error from "./features/error";
import Loading from "./features/loading";
import ErrorBoundary from "./components/errorBoundary";

const HomePage = lazy(() => import("./features/home"));
const TransferPage = lazy(() => import("./features/transfer"));

function App() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <UALProvider
          chains={supportedChains}
          authenticators={supportedAuthenticators}
          appName={appName}
        >
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/transfer" component={TransferPage} />
              <Route path="*">Not Found</Route>
            </Switch>
          </Router>
        </UALProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
