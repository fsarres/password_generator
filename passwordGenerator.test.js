"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordGenerator_1 = require("./passwordGenerator");
describe('Generators verification:', () => {
    it('Generates an alphanumeric password 15 character long', () => {
        let password = (0, passwordGenerator_1.generatePassword)();
        expect(password).not.toBeNaN();
        expect(password).not.toBeNull();
    });
    it('Generates an numeric userID 4 character long', () => {
        let usr = (0, passwordGenerator_1.usrId)();
        expect(usr).not.toBeNaN();
        expect(usr).not.toBeNull();
    });
});
//# sourceMappingURL=passwordGenerator.test.js.map