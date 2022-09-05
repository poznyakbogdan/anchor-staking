import { AppState } from "./state";
import { getPhantomProvider } from "./walletAdapter";

export function registerHandlers() {
    document.querySelector("#connect-wallet button").addEventListener("click", connectWalletHahdler);
}

async function connectWalletHahdler() {
    AppState.provider = getPhantomProvider();
    await AppState.provider.connect();
}