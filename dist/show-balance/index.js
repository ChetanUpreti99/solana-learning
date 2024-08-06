"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const web3_js_1 = require("@solana/web3.js");
const getBalance = (publicKey) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = new web3_js_1.Connection("http://localhost:8899", "confirmed");
        const balance = yield connection.getBalance(publicKey);
        return balance / web3_js_1.LAMPORTS_PER_SOL;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
});
exports.getBalance = getBalance;
/*
(async () => {
    try {
        const walletKey = "6yfeqRBjG5yQDuPXTDYqGajUpVHvmwtNrZEecu5g8PKL";
        const publicKey = new PublicKey(walletKey);
        let balance = await getBalance(publicKey);
        console.log(`balance`, balance);
        await airdrop(publicKey, 10);
        balance = await getBalance(publicKey);
        console.log(`balance`, balance);
    } catch (error) {
        console.error(error);
    }
})();
 */
//GN96ad82Stft3iw9aiJaCXWfeM6bRF2NvM54V1ummmw
//# sourceMappingURL=index.js.map