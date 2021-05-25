<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CardList :items="items"/>
  </div>
</template>

<script lang="ts">
import CardList from '../components/CardList.vue'
export default {
  name: 'About',
  components: {
    CardList
  },
  data() {
   return {
      items: [
        {
          name: "Mon article 1",
          desc: "lorempapp paa "
        },
        {
          name: "Mon article 2",
          desc: "lorempapp paa "
        },
        {
          name: "Mon article 3",
          desc: "lorempapp paa "
        }
      ]
   }
  }
}
</script>