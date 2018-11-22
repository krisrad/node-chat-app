var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', ()=> {
    it ('should generate the correct message object', ()=>{
        var from = 'Admin';
        var text = 'welcome to chat app';
        var message = generateMessage(from, text);
        expect(message).toMatchObject({from, text});
        expect(typeof message.createdAt).toBe('number');
    })
});

describe('generateLocationMessage', ()=>{
    it ('should generate correct location object', ()=>{
        var from = 'Admin';
        var lat = 1;
        var long = 2;
        var url = 'https://www.google.com/maps?q=1,2';
        var message = generateLocationMessage(from, lat, long);
        expect(message).toMatchObject({from, url});
        expect(typeof message.createdAt).toBe('number');
    });
});