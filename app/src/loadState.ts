import { AppState } from "./state";

export async function loadState() {
    await fetchStakePoolData();

    if (!AppState.walletConnected) return;

    await fetchTokenAData();
    await fetchTokenBData();
    await fetchStakeEntryData();
} 

async function fetchTokenAData() {
    throw new Error("Function not implemented.");
}

async function fetchTokenBData() {
    throw new Error("Function not implemented.");
}

async function fetchStakePoolData() {
    throw new Error("Function not implemented.");
}

async function fetchStakeEntryData() {
    throw new Error("Function not implemented.");
}
