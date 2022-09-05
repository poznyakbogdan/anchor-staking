import { loadState } from "./loadState";
import { AppState } from "./state";

export async function render() {
    await loadState();
    renderInternal();
}

function renderInternal(){
    if (!AppState.walletConnected) showConnectWallet();

    showStakingUi();
    showTokenAData();  
    showTokenBData();  
}

function showConnectWallet() {
    throw new Error("Function not implemented.");
}
function showStakingUi() {
    throw new Error("Function not implemented.");
}

function showTokenAData() {
    throw new Error("Function not implemented.");
}

function showTokenBData() {
    throw new Error("Function not implemented.");
}