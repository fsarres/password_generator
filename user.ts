import generateDate from './dateMaker'
import {generatePassword} from './passwordGenerator';
import {usrId} from './passwordGenerator'


class User {
    userId: string;
    username: string;
    password: string;
    createdDate: any;

    constructor(username: string){
        this.username = username;
        this.userId = usrId();
        this.password = generatePassword();
        this.createdDate = generateDate();
    }

        prettyPrint(){
        const lp = ['ID: ' + this.userId, 'Username:' + this.username, 'Password: ' 
        + this.password, 'Created on: ' + this.createdDate + '\n'];
            for (const element of lp) {
                console.log(element);
        }
    }
}

export default User
