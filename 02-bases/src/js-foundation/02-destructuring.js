
// console.log(process.env.PORT ?? 3000);

const { USERNAME, USERPROFILE } = process.env;
// console.log(USERNAME, USERPROFILE);
// console.table({USERNAME, USERPROFILE});

const characters = ['Flash', 'Superman', 'Daredevil', 'Batman'];

const [ , , , batman ] = characters;

// console.log(batman);