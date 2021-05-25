<template>
        <div class="card-container">
            <Card :key="item.name" v-for="(item, index) in items" :item="item" :index="index"/>
        </div>
</template>

<script>
import Card from './Card.vue';

export default {
    name: 'CardList',
    props: ['items'],
    components: {
        Card,
    },
}
</script>

<style lang="scss">
.card-container {
    display: flex;
    justify-content: center;
}


</style>