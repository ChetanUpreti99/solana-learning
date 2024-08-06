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
exports.transferSol = void 0;
const web3_js_1 = require("@solana/web3.js");
const airdrop_1 = require("../airdrop");
const show_balance_1 = require("../show-balance");
/**
[38,234,45,10,29,104,165,64,165,138,82,212,225,255,161,130,157,219,5,230,181,50,121,11,172,180,204,105,4,121,77,121,88,206,170,13,14,100,95,120,191,235,152,139,118,119,225,190,158,179,239,230,15,249,162,34,118,31,3,44,171,42,147,199]
 */
const transferSol = (from, to, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = new web3_js_1.Connection("http://localhost:8899", "confirmed");
    const transaction = new web3_js_1.Transaction();
    const instruction = web3_js_1.SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: amount * web3_js_1.LAMPORTS_PER_SOL,
    });
    transaction.add(instruction);
    yield (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [from]);
    console.log(`Done`);
});
exports.transferSol = transferSol;
const secret = Uint8Array.from([189, 29, 179, 24, 22, 89, 157, 60, 22, 78, 11, 154, 54, 104, 56, 221, 56, 179, 202, 3, 29, 166, 121, 204, 202, 115, 255, 100, 27, 165, 22, 204, 3, 239, 157, 96, 4, 231, 194, 139, 81, 94, 96, 102, 104, 99, 8, 117, 81, 56, 153, 226, 217, 203, 1, 255, 45, 44, 71, 71, 162, 67, 184, 254]);
const fromKeyPair = web3_js_1.Keypair.fromSecretKey(secret);
console.log(`fromKeyPair`, fromKeyPair.publicKey.toBase58());
const toPublicKey = new web3_js_1.PublicKey("6yfeqRBjG5yQDuPXTDYqGajUpVHvmwtNrZEecu5g8PKL");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, airdrop_1.airdrop)(fromKeyPair.publicKey, 100);
        let balance = yield (0, show_balance_1.getBalance)(fromKeyPair.publicKey);
        console.log(`Pre balance`, balance);
        yield (0, exports.transferSol)(fromKeyPair, toPublicKey, 10);
        balance = yield (0, show_balance_1.getBalance)(fromKeyPair.publicKey);
        console.log(`balance`, balance);
    }
    catch (error) {
        console.error(error);
    }
}))();
//# sourceMappingURL=index.js.map