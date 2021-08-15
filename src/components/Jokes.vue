<template>
  <div>
    <div class="jokes" v-for="joke in allJokes" :key="joke.id">
      <p v-if="joke.type === 'single'">{{ joke.joke }}</p>
      <p v-else-if="joke.type === 'twopart'">
        <span>{{ joke.setup }}</span>
        <span>{{ joke.delivery }}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Jokes",
  computed: mapGetters(["allJokes"]),
  methods: mapActions(["fetchJokes"]),
  async mounted() {
    this.fetchJokes();
  },
};
</script>
<style scoped>
.jokes {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
