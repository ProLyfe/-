<template>
      
</template>

<script>
export default {
    name: 'Tuto',
    data () {
        return {
            'message': '',
            'showLogo': true,
            'items': ['Chaise', 'Table', 'Souris']
        }
    },
    methods: {
        onChange() {
            console.log('Le message est' + this.message);
        }
    }
}
</script>
