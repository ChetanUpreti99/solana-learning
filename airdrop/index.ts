import { PublicKey, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";



export const airdrop = async (address: string, amount: number) => {
    const publicKey = new PublicKey(address);
    const connection = new Connection("http://localhost:8899", "confirmed");
    const signature = await connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
    return await connection.confirmTransaction(signature);

}


airdrop("6yfeqRBjG5yQDuPXTDYqGajUpVHvmwtNrZEecu5g8PKL", 10)
    .then((res) => {
        console.log("Airdrop completed", res);
    }).catch((err) => {
        console.error(err);
    });
