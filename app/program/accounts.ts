import { web3 } from "@project-serum/anchor";
import { calculateGlobalDataPda } from "./pda";

export async function getInitializeAccounts(admin: web3.PublicKey) {
    let globalDataPda = await calculateGlobalDataPda();
    return {
        admin,
        globalData: globalDataPda[0],
        systemProgram: web3.SystemProgram.programId
    }
}