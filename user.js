"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dateMaker_1 = __importDefault(require("./dateMaker"));
const passwordGenerator_1 = require("./passwordGenerator");
const passwordGenerator_2 = require("./passwordGenerator");
class User {
    constructor(username) {
        this.username = username;
        this.userId = (0, passwordGenerator_2.usrId)();
        this.password = (0, passwordGenerator_1.generatePassword)();
        this.createdDate = (0, dateMaker_1.default)();
    }
    prettyPrint() {
        const lp = ['ID: ' + this.userId, 'Username:' + this.username, 'Password: '
                + this.password, 'Created on: ' + this.createdDate + '\n'];
        for (const element of lp) {
            console.log(element);
        }
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map