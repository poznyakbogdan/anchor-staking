import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { WmpStaking } from "../target/types/wmp_staking";

describe("wmp-staking", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.WmpStaking as Program<WmpStaking>;

  it("initialize works", async () => {
    const tx = await program.methods.initialize().rpc();
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
