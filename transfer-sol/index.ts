import { PublicKey, Connection, LAMPORTS_PER_SOL, Keypair, Transaction, SystemInstruction, SystemProgram, sendAndConfirmTransaction } from "@solana/web3.js";
import { airdrop } from "../airdrop";
import { getBalance } from "../show-balance";

/**
[38,234,45,10,29,104,165,64,165,138,82,212,225,255,161,130,157,219,5,230,181,50,121,11,172,180,204,105,4,121,77,121,88,206,170,13,14,100,95,120,191,235,152,139,118,119,225,190,158,179,239,230,15,249,162,34,118,31,3,44,171,42,147,199]
 */


export const transferSol = async (from: Keypair, to: PublicKey, amount: number) => {
    const connection = new Connection("http://localhost:8899", "confirmed");
    const transaction = new Transaction();

    const instruction = SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: amount * LAMPORTS_PER_SOL,
    });
    transaction.add(instruction);
    await sendAndConfirmTransaction(connection, transaction, [from]);
    console.log(`Done`);
}


const secret = Uint8Array.from([189, 29, 179, 24, 22, 89, 157, 60, 22, 78, 11, 154, 54, 104, 56, 221, 56, 179, 202, 3, 29, 166, 121, 204, 202, 115, 255, 100, 27, 165, 22, 204, 3, 239, 157, 96, 4, 231, 194, 139, 81, 94, 96, 102, 104, 99, 8, 117, 81, 56, 153, 226, 217, 203, 1, 255, 45, 44, 71, 71, 162, 67, 184, 254]);
const fromKeyPair = Keypair.fromSecretKey(secret);
console.log(`fromKeyPair`, fromKeyPair.publicKey.toBase58());
const toPublicKey = new PublicKey("6yfeqRBjG5yQDuPXTDYqGajUpVHvmwtNrZEecu5g8PKL");



(async () => {
    try {
        await airdrop(fromKeyPair.publicKey, 100);
        let balance = await getBalance(fromKeyPair.publicKey);
        console.log(`Pre balance`, balance);
        await transferSol(fromKeyPair, toPublicKey, 10);
        balance = await getBalance(fromKeyPair.publicKey);
        console.log(`balance`, balance);
    } catch (error) {
        console.error(error);
    }
})();
