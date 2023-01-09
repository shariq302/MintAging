import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Torus from "@toruslabs/torus-embed";

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      infuraId: "wss://mainnet.infura.io/ws/v3/f7494942e54c448aa39ecad379737ade" // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: "wss://mainnet.infura.io/ws/v3/f7494942e54c448aa39ecad379737ade" ,
    }
  },
  binancechainwallet: {
    package: true
  },
  torus: {
    package: Torus, 
  }
 
};
