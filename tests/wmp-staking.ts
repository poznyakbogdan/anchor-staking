import * as anchor from "@project-serum/anchor";
import { Program, web3 } from "@project-serum/anchor";
import { getInitializeAccounts } from "../app/program/accounts";
import { WmpStaking } from "../target/types/wmp_staking";
import { createAndFundAccounts } from "./accounts-pool";

describe("wmp-staking", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.WmpStaking as Program<WmpStaking>;
  let keypairs: web3.Keypair[] = [];
  let adminKeyPair: web3.Keypair;
  let aliceKeyPair: web3.Keypair;
  let bobKeyPair: web3.Keypair;

  before(async () => {
    keypairs = await createAndFundAccounts(program.provider.connection, 10, 0.5);
    adminKeyPair = keypairs[0];
    aliceKeyPair = keypairs[1];
    bobKeyPair = keypairs[2];

    console.log("Generated accounts:")
    keypairs.forEach(x => 
      console.log(x.publicKey.toBase58()))
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
    const tx = await program.methods.createStakePool().rpc();
    console.log("Your transaction signature", tx);
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
