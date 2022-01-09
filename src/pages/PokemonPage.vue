<template>
    <h1>Who is this pokemon?</h1>
    <PokemonImage v-bind:pokemonId="1" v-bind:showPokemon="false" />
    <PokemonOptions />
</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions.js';

console.log(getPokemonOptions());

export default {
    name: 'Pokemon page',
    components: {
        PokemonImage,
        PokemonOptions,
    },
};
</script>

<style></style>
