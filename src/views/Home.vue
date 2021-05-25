<template>
<div class="about">
  <!-- <CardList :items='items' handleDelete="handleDelete"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import CardList from '../components/CardList';
export default {
  name: 'Home',
  components: {
    // CardList
  },
  mounted () {
    this.getMovies();
  },
  data() {
   return {
      movies: [
        
      ],
      methods: {
        getMovies() {
          this.$store.dispatch('GET_MOVIES')
        }
    }
   }
  }
}
</script>
