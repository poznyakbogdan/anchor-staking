import { Program, web3 } from "@project-serum/anchor";
import { createStakePool, setProgram, setStakePoolRewards } from "../app/program/instructions";
import { WMP_STAKING_PROGRAM_ID } from "../app/program/program-id";
import { tokenAmount } from "../app/program/utils";
import * as artifacts from "../target/types/wmp_staking";

import { setupProvider } from "./setup";


async function main() {
    let wmpAddress = new web3.PublicKey("5ZQmcJ6WKbwp49sdcyPQgLJ3QWLCFUsnYKcUhRYPmPE5");
    let xWmpAddress = new web3.PublicKey("Ebjt6jd3zQeEKnhUReorKh3kaDZ6eQzvUKbDCxTfSZbC");
    
    let {signer, provider} = await setupProvider();
    let program = new Program<artifacts.WmpStaking>(artifacts.IDL, WMP_STAKING_PROGRAM_ID, provider);
    setProgram(program);

    let stakePool = await createStakePool(signer, wmpAddress, xWmpAddress);
    await setStakePoolRewards(stakePool, signer, tokenAmount(1));

    console.log("Stake pool: " + stakePool.toBase58());
}

main()
    .then(() => console.log("ok!"))
    .catch(err => console.error(err));