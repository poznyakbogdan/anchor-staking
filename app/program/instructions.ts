import { Program, web3 } from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import { WmpStaking } from "../../target/types/wmp_staking";
import { getCreateStakePoolAccounts } from "./accounts";
import { getNextId } from "./state";

const program = anchor.workspace.WmpStaking as Program<WmpStaking>;

export async function createStakePool(creator: web3.Signer, mintA: web3.PublicKey, mintB: web3.PublicKey) {
    let id = await getNextId();
    let accounts = await getCreateStakePoolAccounts(creator.publicKey, mintA, mintB, id);
    const tx = await program.methods
      .createStakePool()
      .accounts(accounts)
      .signers([creator])
      .rpc();

    await program.provider.connection.confirmTransaction(tx);
    return accounts.stakePool;
}