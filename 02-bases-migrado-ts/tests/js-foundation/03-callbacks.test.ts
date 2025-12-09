import { getUserById } from '../../src/js-foundation/03-callbacks';


describe('03-callbacks', () => {
    
    test('getUserById should return an error if user does not exist', (done) => {
        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            done();
        });
    });

    test('getUserById should return an existing user', (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
        expect(err).toBeUndefined();
        expect(user?.id).toBe(1);
        expect(user?.name).toBe('John Doe');
        expect(user).toEqual({id: 1, name: 'John Doe'});
        done();
    });
    });


})