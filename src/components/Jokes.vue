<template>
  <div class="cards">
    <div class="jokes" v-for="joke in allJokes" :key="joke.id">
      <p v-if="joke.type === 'single'">{{ joke.joke }}</p>
      <p v-else-if="joke.type === 'twopart'">
        <span>{{ joke.setup }}</span> <br />
        <span>{{ joke.delivery }}</span>
      </p>
      <img
        class="card-img"
        src="../assets/like.svg"
        alt="like"
        @click="addToFavorites(joke)"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Jokes",
  computed: mapGetters(["allJokes"]),
  methods: { ...mapActions(["fetchJokes", "addToFavorites"]) },
  addToFavorites(joke) {
    this.$store.commit("addToFavorites", joke);
  },
  async mounted() {
    this.fetchJokes();
  },
};
</script>
<style scoped>
.card-img {
  width: 1rem;
  height: 1rem;
}
.jokes {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
.card-img {
  align-self: center;
}
p {
  padding-right: 2rem;
  align-items: center;
}
</style>
