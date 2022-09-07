import { Program, Provider, web3 } from "@project-serum/anchor";
import { WmpStaking } from "../../target/types/wmp_staking";
import { CustomWalletAdapter } from "./walletAdapter";

export interface ITokenBalance {
    tokenSymbol: string,
    balance: number
}

export interface IStakeEntryData {
    stakeBalance: number,
    rewards: number,
    rewardsPerTokenPaid: number,
    timestamp: Date
}

export interface IStakePoolData {
    xWmpEscrow: web3.PublicKey,
    balance: number,
    timestamp: Date
}

export interface IAppState {
    provider: Provider,
    adapter: CustomWalletAdapter,
    connection: web3.Connection,
    program: Program<WmpStaking>,
    walletConnected: boolean,
    tokenABalance: ITokenBalance,
    tokenBBalance: ITokenBalance,
    stakeEntryData: IStakeEntryData,
    tokenAAddress: web3.PublicKey,
    tokenBAddress: web3.PublicKey,
    stakePoolAddress: web3.PublicKey,
    stakeEntryAddress: web3.PublicKey,
    stakePoolData: IStakePoolData
}

export let AppState = {
    tokenAAddress: new web3.PublicKey("5ZQmcJ6WKbwp49sdcyPQgLJ3QWLCFUsnYKcUhRYPmPE5"),
    tokenBAddress: new web3.PublicKey("Ebjt6jd3zQeEKnhUReorKh3kaDZ6eQzvUKbDCxTfSZbC"),
    stakePoolAddress: new web3.PublicKey("2bSq6w3HyE5SwiVPmVaapwmHNqW6aGnWTt7zpRuvotKy"),
    connection: new web3.Connection("https://api.devnet.solana.com")
} as IAppState;