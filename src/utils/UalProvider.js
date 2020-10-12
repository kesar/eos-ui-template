import { Scatter } from "ual-scatter";
import { TokenPocket } from "ual-token-pocket";

const appName = process.env.REACT_APP_APP_NAME;

const chain = {
  chainId: process.env.REACT_APP_CHAIN_ID,
  rpcEndpoints: [
    {
      protocol: process.env.REACT_APP_RPC_PROTOCOL,
      host: process.env.REACT_APP_RPC_HOST,
      port: process.env.REACT_APP_RPC_PORT,
    },
  ],
};

// Authenticators
const scatter = new Scatter([chain], { appName });
const tokenPocket = new TokenPocket([chain]);

const supportedChains = [chain];
const supportedAuthenticators = [scatter, tokenPocket];

export { appName, supportedChains, supportedAuthenticators };
