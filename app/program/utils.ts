import BN from "bn.js";

const DECIMALS = 9;

export function tokenAmount(amount: number) {
    let amountStr = (amount * 10 ** DECIMALS).toString();
    return new BN(amountStr);
}

export function fromTokenAmount(amount: BN) {
    let amountNumber = amount.toNumber();

    return amountNumber / (10 ** DECIMALS)
}