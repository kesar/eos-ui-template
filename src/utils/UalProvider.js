import { Scatter } from "ual-scatter";
import { TokenPocket } from "ual-token-pocket";
import { Anchor } from "ual-anchor";

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

const scatter = new Scatter([chain], { appName });
const tokenPocket = new TokenPocket([chain]);
const anchor = new Anchor([chain], {
  appName,
  service: "https://cb.anchor.link",
  disableGreymassFuel: false,
  requestStatus: false,
});

const supportedChains = [chain];
const supportedAuthenticators = [scatter, tokenPocket, anchor];

export { appName, supportedChains, supportedAuthenticators };
