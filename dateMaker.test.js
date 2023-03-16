"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dateMaker_1 = __importDefault(require("./dateMaker"));
it('Checks if date has input', () => {
    let date = (0, dateMaker_1.default)();
    expect(date).not.toBeNull;
    expect(date).not.toBeUndefined();
    expect(date).toBeDefined();
});
//# sourceMappingURL=dateMaker.test.js.map