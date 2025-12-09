const { getAge, getCrypto } = require('./js-foundation/plugins/index');

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');

const getPokemonById = require('./js-foundation/06-promises');

// getPokemonById(1)
//     .then((pokemon) => console.log(pokemon))
//     .catch((error) =>  console.log('Por favor, intente de nuevo'))
//     .finally(() => console.log('Finally'))



//------ Reference a factory function
// const  { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson(getCrypto, getAge);

// const obj = { name: 'Jhon Doe', birthdate: '1985-10-21' };

// const jhon = makePerson(obj);

// console.log({jhon});

const { buildLogger } = require('./js-foundation/plugins/index');

const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Esto es un error');

