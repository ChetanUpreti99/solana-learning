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
const airdrop_1 = require("../airdrop");
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const walletKey = "6yfeqRBjG5yQDuPXTDYqGajUpVHvmwtNrZEecu5g8PKL";
        const publicKey = new web3_js_1.PublicKey(walletKey);
        let balance = yield (0, exports.getBalance)(publicKey);
        console.log(`balance`, balance);
        yield (0, airdrop_1.airdrop)(walletKey, 10);
        balance = yield (0, exports.getBalance)(publicKey);
        console.log(`balance`, balance);
    }
    catch (error) {
        console.error(error);
    }
}))();
//# sourceMappingURL=index.js.map