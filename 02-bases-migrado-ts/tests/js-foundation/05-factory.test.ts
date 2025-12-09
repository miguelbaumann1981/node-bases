import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('05-factory', () => {

    const getUUID = () => '1234';
    const getAge = () => 35;

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({getAge, getUUID});
        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a person', () => {
        const makePerson = buildMakePerson({getAge, getUUID});
        const jhonDoe = makePerson({name: 'Jhon Doe', birthdate: '1985-10-21'});
        expect(jhonDoe).toEqual({
            id: '1234',
            name: 'Jhon Doe',
            birthdate: '1985-10-21',
            age: 35,
        })
    })

});
