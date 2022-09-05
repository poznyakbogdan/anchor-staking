import { web3 } from "@project-serum/anchor";
import { CustomWalletAdapter, getPhantomProvider } from "./walletAdapter";

export interface ITokenBalance {
    tokenSymbol: string,
    balance: number
}

export interface IStakeEntryData {
    stakeBalance: number,
    timestamp: Date
}

export interface IAppState {
    provider: CustomWalletAdapter,
    walletConnected: boolean,
    tokenABalance: ITokenBalance,
    tokenBBalance: ITokenBalance,
    stakeEntryData: IStakeEntryData,
    tokenAAddress: web3.PublicKey,
    tokenBAddress: web3.PublicKey,
    stakePoolAddress: web3.PublicKey,
    stakeEntryAddress: web3.PublicKey,
}

export let AppState = {
    tokenAAddress: new web3.PublicKey("5ZQmcJ6WKbwp49sdcyPQgLJ3QWLCFUsnYKcUhRYPmPE5"),
    tokenBAddress: new web3.PublicKey("Ebjt6jd3zQeEKnhUReorKh3kaDZ6eQzvUKbDCxTfSZbC"),
    stakePoolAddress: new web3.PublicKey("2bSq6w3HyE5SwiVPmVaapwmHNqW6aGnWTt7zpRuvotKy")
} as IAppState;