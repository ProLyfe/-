<template>
    <div class="card">
        <div class="card-img" :style="{backgroundImage:'url(https://picsum.photos/seed/' + index + '/600/600)'}"></div>
        <h2 v-text="item.name"></h2>
        <p v-text="item.desc"></p>
        <button @click="$store.commit('DELETE_ARTICLE', index)">Supprimer</button>
                <!-- <img src="https://picsum.photos/seed/" + item.index + '/200/300' /> -->
    </div>
</template>

<script lang="ts">
export default {
    name: 'Card',
    props: ['item', 'index']
}
</script>

<style lang="scss">
.card {
    margin: 10px;
    padding: 20px;
    border: 2px solid black
}

.card-img {
    width: 100%;
    height: 100px;
    background-size: cover;
}
</style>