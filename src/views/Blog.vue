<template>
  <div class="blog">
    <h1>This is an about page</h1>
    Ceci est un blog
     <CardList :items="getPublishedArticles"/>
  </div>
</template>

<script lang="ts">
import CardList from '../components/CardList.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'Blog',
  components: {
    CardList
  },
  computed: mapGetters(['getPublishedArticles']),
  methods: {
      handleDelete(index) {
          this.$store.commit('DELETE_ARTICLE', index)
    }
  }
}
</script>