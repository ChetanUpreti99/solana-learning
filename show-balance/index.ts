import { PublicKey, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

import { airdrop } from "../airdrop";

export const getBalance = async (publicKey: PublicKey) => {
    try {
        const connection = new Connection("http://localhost:8899", "confirmed");
        const balance = await connection.getBalance(publicKey);
        return balance / LAMPORTS_PER_SOL;

    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }

}





(async () => {
    try {
        const walletKey = "6yfeqRBjG5yQDuPXTDYqGajUpVHvmwtNrZEecu5g8PKL";
        const publicKey = new PublicKey(walletKey);
        let balance = await getBalance(publicKey);
        console.log(`balance`, balance);
        await airdrop(walletKey, 10);
        balance = await getBalance(publicKey);
        console.log(`balance`, balance);
    } catch (error) {
        console.error(error);
    }
})();


