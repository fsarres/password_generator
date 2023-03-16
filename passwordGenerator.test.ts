import { generatePassword, usrId } from "./passwordGenerator";

describe('Generators verification:',() =>{
    it('Generates an alphanumeric password 15 character long', ()=>{
        let password = generatePassword();
        expect(password).not.toBeNaN();
        expect(password).not.toBeNull();
    })

    it('Generates an numeric userID 4 character long', ()=>{
        let usr = usrId();
        expect(usr).not.toBeNaN();
        expect(usr).not.toBeNull();
    })
})
