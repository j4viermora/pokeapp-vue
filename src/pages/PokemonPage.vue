<template>
    <h1 v-if="!pokemon">Wait please ...</h1>
    <div v-else>
        <h1>Who is this pokemon?</h1>
        <PokemonImage
            v-bind:pokemonId="pokemon.id"
            v-bind:showPokemon="showPokemon"
        />
        <PokemonOptions 
            :pokemons="pokemonsArr" 
            @selection="checkAnswer"
            />
        <template v-if="showMessage">
            <h2 >{{message}}</h2>
            <button @click="newGame">New game</button>
        </template>
    </div>
</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions.js';

export default {
    name: 'Pokemon page',
    components: {
        PokemonImage,
        PokemonOptions,
    },
    data() {
        return {
            pokemonsArr: [],
            pokemon: null,
            showPokemon: false,
            showMessage: false,
            message: ''
        };
    },
    methods: {
        async mixPokemonArray() {
            try {
                this.pokemonsArr = await getPokemonOptions();
                const rndInt = Math.floor(Math.random() * 4);
                this.pokemon = this.pokemonsArr[rndInt];
            } catch (error) {
                console.log(error);
            }
        },
        checkAnswer(pokemonIdSelect){
            // console.log(pokemonIdSelect)
            this.showPokemon = true
            if(pokemonIdSelect === this.pokemon.id) {
                this.message =`Correct!! ${this.pokemon.name}`
                this.showMessage = true
            }else{
                this.message = `Opss, been ${this.pokemon.name}`
                this.showMessage = true
            }
    
        },
        newGame(){
            this.pokemonsArr =  [];
            this.pokemon = null,
            this.showPokemon = false,
            this.howMessage = false,
            this.message = ''

            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray();
    },
};
</script>

<style scoped>
    button{
        border: none;
        background: cyan;
        color: black;
        padding: 20px 15px 20px 15px;
        border-radius: 5px;
    }
    button:hover{
        background: cadetblue;
        cursor: pointer;
    }
</style>
