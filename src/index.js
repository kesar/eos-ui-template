import React from 'react';
import ReactDOM from 'react-dom';

// UAL Required Imports
import {UALProvider} from 'ual-reactjs-renderer'
// Authenticator Imports
import {Scatter} from 'ual-scatter'
import {TokenPocket} from 'ual-token-pocket'

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css'

const appName = process.env.REACT_APP_APP_NAME

// Chain
const chain = {
    chainId: process.env.REACT_APP_CHAIN_ID,
    rpcEndpoints: [{
        protocol: process.env.REACT_APP_RPC_PROTOCOL,
        host: process.env.REACT_APP_RPC_HOST,
        port: process.env.REACT_APP_RPC_PORT,
    },
    ],
}

// Authenticators
const scatter = new Scatter([chain], {appName})
const tokenPocket = new TokenPocket([chain])

const supportedChains = [chain]
const supportedAuthenticators = [scatter, tokenPocket]

ReactDOM.render(
    <React.StrictMode>
        <UALProvider chains={supportedChains} authenticators={supportedAuthenticators} appName={appName}>
            <App/>
        </UALProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
