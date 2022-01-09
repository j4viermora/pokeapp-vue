import pokeApi from '../api/pokemonApi';

const getPokemon = () => {
    const pokemonArr = Array.from(Array(650));
    return pokemonArr.map((_, indx) => {
        return indx + 1;
    });
};

const getPokemonOptions = async () => {
    const mixedPokemon = getPokemon().sort(() => Math.random() - 0.5);
    const pokemons = await getPokemonsName(mixedPokemon.splice(0, 4));

    return pokemons;
};

const getPokemonsName = async (ids = []) => {
    try {
        // const { data } = await pokeApi.get(`/3`);

        const promiseArr = ids.map((item) => {
            return pokeApi.get(`/${item}`);
        });

        const result = await Promise.all(promiseArr);
        const pokesInfo = result.map(({ data }) => {
            return {
                name: data.name,
                id: data.order,
            };
        });

        return pokesInfo;
    } catch (error) {
        console.log(error);
    }
};

export default getPokemonOptions;
