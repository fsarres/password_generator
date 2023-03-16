"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usrId = exports.generatePassword = void 0;
const randomstring_1 = __importDefault(require("randomstring"));
function generatePassword() {
    let passTest = randomstring_1.default.generate({
        length: 15,
        charset: 'alphanumeric'
    });
    return passTest;
}
exports.generatePassword = generatePassword;
function usrId() {
    let userId = randomstring_1.default.generate({
        length: 4,
        charset: 'numeric'
    });
    return userId;
}
exports.usrId = usrId;
//# sourceMappingURL=passwordGenerator.js.map