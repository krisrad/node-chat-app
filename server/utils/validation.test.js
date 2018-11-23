var expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', ()=> {
    it ('should allow string with characters', ()=>{
        expect(isRealString('RK')).toBeTruthy();        
        expect(isRealString('Is lord of the rings')).toBeTruthy();        
    })
    it ('should reject non-string values', ()=>{
        expect(isRealString(123)).toBeFalsy();
    })
    it ('should reject string with only spaces', ()=>{
        expect(isRealString(' ')).toBeFalsy();
    })
});