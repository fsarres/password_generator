"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
function generateDate() {
    let now = (0, moment_1.default)().format('LLLL');
    return now;
}
exports.default = generateDate;
//# sourceMappingURL=dateMaker.js.map