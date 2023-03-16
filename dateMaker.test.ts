import generateDate from './dateMaker';

it('Checks if date has input', ()=>{
    let date = generateDate();
    expect(date).not.toBeNull
    expect(date).not.toBeUndefined();
    expect(date).toBeDefined();
})
