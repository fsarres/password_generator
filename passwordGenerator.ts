import randomstring from 'randomstring'

export function generatePassword(): any{
    let passTest = randomstring.generate({
        length: 15,
        charset: 'alphanumeric'
      });
      return passTest
}

export function usrId():any{
    let userId = randomstring.generate({
      length: 4,
      charset: 'numeric'
    });
    return userId
}


