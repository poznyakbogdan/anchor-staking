import { web3 } from "@project-serum/anchor";

function createKeypairs(count: number): web3.Keypair[] {
    let keypairs = [];
    for (let i = 0; i < count; i++) {
        keypairs.push(web3.Keypair.generate());
    }

    return keypairs;
}

async function airdropSol(connection: web3.Connection, recepient: web3.PublicKey, solAmount: number) {
    let signature = await connection.requestAirdrop(recepient, solAmount * 1e9, );
    await connection.confirmTransaction(signature);
}

export async function createAndFundAccounts(connection: web3.Connection, count: number, solAmount: number): Promise<web3.Keypair[]> {
    let keypairs = createKeypairs(count);

    let promises = keypairs.map(async x => await airdropSol(connection, x.publicKey, solAmount));
    await Promise.all(promises);

    return keypairs;
}