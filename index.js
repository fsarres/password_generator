"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataString = void 0;
const user_1 = __importDefault(require("./user"));
let user1 = new user_1.default(' Jose Kirk').prettyPrint();
let user2 = new user_1.default(' John Doe').prettyPrint();
let user3 = new user_1.default(' Mary Fritz').prettyPrint();
let user4 = new user_1.default(' Eliah Lopp').prettyPrint();
exports.dataString = [user1, user2, user3, user4];
//# sourceMappingURL=index.js.map