import * as anchor from "@project-serum/anchor";
import { Program, web3 } from "@project-serum/anchor";
import { createMint } from "@solana/spl-token";
import { assert } from "chai";
import { getCreateStakePoolAccounts, getInitializeAccounts } from "../app/program/accounts";
import { getNextId } from "../app/program/state";
import { WmpStaking } from "../target/types/wmp_staking";
import { createAndFundAccounts } from "./accounts-pool";

describe("wmp-staking", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.WmpStaking as Program<WmpStaking>;
  let keypairs: web3.Keypair[] = [];
  let adminKeyPair: web3.Keypair;
  let aliceKeyPair: web3.Keypair;
  let bobKeyPair: web3.Keypair;
  let mintWMP: web3.PublicKey;
  let mintXWMP: web3.PublicKey;

  before(async () => {
    let connection = program.provider.connection;

    keypairs = await createAndFundAccounts(connection, 10, 1);
    adminKeyPair = keypairs[0];
    aliceKeyPair = keypairs[1];
    bobKeyPair = keypairs[2];

    console.log("Generated accounts:")
    keypairs.forEach(x => 
      console.log(x.publicKey.toBase58()));

    mintWMP = await createMint(connection, adminKeyPair, adminKeyPair.publicKey, adminKeyPair.publicKey, 9);
    mintXWMP = await createMint(connection, adminKeyPair, adminKeyPair.publicKey, adminKeyPair.publicKey, 9);
  });

  it("initialize works", async () => {
    let accounts = await getInitializeAccounts(adminKeyPair.publicKey);
    const tx = await program.methods
      .initialize()
      .accounts(accounts)
      .signers([adminKeyPair])
      .rpc({skipPreflight: true});

    console.log("Your transaction signature", tx);
  });

  it("create_stake_pool works", async () => {
    let id = await getNextId();
    let accounts = await getCreateStakePoolAccounts(bobKeyPair.publicKey, mintWMP, mintXWMP, id);
    const tx = await program.methods
      .createStakePool()
      .accounts(accounts)
      .signers([bobKeyPair])
      .rpc();

    console.log("Your transaction signature", tx);

    let createdStakePool = await program.account.stakePool.fetchNullable(accounts.stakePool);
    assert.deepEqual(createdStakePool.creator, bobKeyPair.publicKey);
    assert.deepEqual(createdStakePool.mintA, accounts.mintA);
    assert.deepEqual(createdStakePool.mintB, accounts.mintB);
    assert.deepEqual(createdStakePool.escrowA, accounts.escrowA);
    assert.deepEqual(createdStakePool.escrowB, accounts.escrowB);
    assert.equal(createdStakePool.id, id);

    let globalData = await program.account.globalData.fetchNullable(accounts.globalData);
    assert.equal(globalData.id, ++id);
  });

  it("create_stake_entry works", async () => {
    const tx = await program.methods.createStakeEntry().rpc();
    console.log("Your transaction signature", tx);
  });

  it("stake works", async () => {
    const tx = await program.methods.stake().rpc();
    console.log("Your transaction signature", tx);
  });

  it("unstake works", async () => {
    const tx = await program.methods.unstake().rpc();
    console.log("Your transaction signature", tx);
  });

  it("claim_rewards works", async () => {
    const tx = await program.methods.claimRewards().rpc();
    console.log("Your transaction signature", tx);
  });
});
