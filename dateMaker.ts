import moment from 'moment';

function generateDate(){
    let now = moment().format('LLLL');
    return now;
}

export default generateDate
