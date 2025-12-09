// const { getAge, getCrypto } = require('./plugins/index');

// const obj = { name: 'Jhon Doe', birthdate: '1985-10-21' };

const buildMakePerson = (getCrypto, getAge ) => {
    return ({ name, birthdate }) => {
        return {
            id: getCrypto(),
            name: name, 
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}




// const john = buildPerson(obj);
// console.log(john);

module.exports = {
    buildMakePerson
}
