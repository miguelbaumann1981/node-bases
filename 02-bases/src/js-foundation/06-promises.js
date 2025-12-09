const { http, axiosGet } = require('./plugins/index');


const getPokemonById = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // const pokemon = await http.get(url);
    const pokemon = await axiosGet(url);

    return pokemon.name;
    
    // throw new Error();
    
    // return fetch(url)
    //     .then((response) => response.json())
    //     // .then(() => {throw new Error()})
    //     .then((pokemon) => pokemon.name)



}


module.exports = getPokemonById;