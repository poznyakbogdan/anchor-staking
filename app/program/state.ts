import { Program } from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import { WmpStaking } from "../../target/types/wmp_staking";
import { calculateGlobalDataPda } from "./pda";

export async function getNextId() {
    const program = anchor.workspace.WmpStaking as Program<WmpStaking>;
    let globalDataPda = await calculateGlobalDataPda();
    let data = await program.account.globalData.fetchNullable(globalDataPda[0]);
    return data.id;
}