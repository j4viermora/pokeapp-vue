const getPokemon = () => {
    const pokemonArr = Array.from(Array(650));
    return pokemonArr.map((_, indx) => {
        return indx + 1;
    });
};

const getPokemonOptions = () => {
    const mixedPokemon = getPokemon().sort(() => Math.random() - 0.5);
    getPokemonsName(mixedPokemon.splice(0, 4));
};

const getPokemonsName = ([a, b, c, d] = []) => {
    console.log(a, b, c, d);
};

export default getPokemonOptions;
