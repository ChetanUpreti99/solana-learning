import { PublicKey, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";



export const airdrop = async (address: PublicKey, amount: number) => {
    const connection = new Connection("http://localhost:8899", "confirmed");
    const signature = await connection.requestAirdrop(address, amount * LAMPORTS_PER_SOL);
    return await connection.confirmTransaction(signature);

}

/* 
const walletPublicKey = "6yfeqRBjG5yQDuPXTDYqGajUpVHvmwtNrZEecu5g8PKL"
const publicKey = new PublicKey(walletPublicKey);

airdrop(publicKey, 10)
    .then((res) => {
        console.log("Airdrop completed", res);
    }).catch((err) => {
        console.error(err);
    }); */
