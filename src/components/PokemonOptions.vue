<template>
    <section class="options-container">
        <ul>
            <li 
                v-for="{ name, id } in pokemons" 
                :key="id" 
                @click="$emit('selection', id)">
                {{ name }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Pokemon options',
    props: {
        pokemons: {
            type: Array,
            require: true,
        },
    },
};
</script>

<style scoped>
/* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>
