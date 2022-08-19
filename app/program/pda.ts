import { web3 } from "@project-serum/anchor";
import { WMP_STAKING_PROGRAM_ID } from "./program-id";

export async function calculateGlobalDataPda(programId: web3.PublicKey = WMP_STAKING_PROGRAM_ID) {
    const prefix = "global-data";
    let seeds = [
        Buffer.from(prefix, "utf-8")
    ];
    return await web3.PublicKey.findProgramAddress(seeds, programId);
}