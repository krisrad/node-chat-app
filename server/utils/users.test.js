const expect = require('expect');
const {Users} = require('./users');


describe('Users', ()=> {
    var users;
    beforeEach(()=>{
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name:'Julie',
            room: 'Node Course'
        }]
    });

    it ('should add new user', ()=>{
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andres',
            room: 'The office fans'
        }
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it ('should return names for Node course', ()=> {
        expect(users.getUserList('Node Course')).toEqual(['Mike', 'Julie']);
    });

    it ('should return names for React course', ()=> {
        expect(users.getUserList('React Course')).toEqual(['Jen']);
    });

    it ('should find a user ', ()=> {
        expect(users.getUser('1')).toMatchObject({
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        });
    });

    it ('should not find a user ', ()=> {
        expect(users.getUser('99')).toBeFalsy();
    });

    it ('should remove a user', ()=> {
        expect(users.removeUser('3')).toMatchObject({
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        });
        expect(users.users.length).toBe(2);
    });

    it ('should not remove a user', ()=> {
        expect(users.removeUser('99')).toBeFalsy();
        expect(users.users.length).toBe(3);
    });
})