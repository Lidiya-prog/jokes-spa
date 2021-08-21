<template>
  <div>
    <div class="cards">
      <div
        class="jokes"
        :class="{ active: joke.isActive }"
        v-for="joke in sortedJokes"
        :key="joke.id"
      >
        <p v-if="joke.type === 'single'">{{ joke.joke }}</p>
        <p v-else-if="joke.type === 'twopart'">
          <span>{{ joke.setup }}</span> <br />
          <span>{{ joke.delivery }}</span>
        </p>
        <img
          v-if="joke.isActive"
          class="card-img"
          src="../assets/like-active.svg"
          alt="like"
          @click="addToFavorites(joke)"
        />
        <img
          v-else
          class="card-img"
          src="../assets/like.svg"
          alt="like"
          @click="addToFavorites(joke)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Jokes",
  computed: {
    ...mapGetters(["allJokes", "searchValueGetter"]),
    sortedJokes() {
      const searchPhrase = this.searchValueGetter.toLowerCase();
      console.log(this.searchValueGetter);
      return this.searchValueGetter
        ? this.allJokes.filter(
            (elem) =>
              elem.setup?.toLowerCase().includes(searchPhrase) ||
              elem.delivery?.toLowerCase().includes(searchPhrase) ||
              elem.joke?.toLowerCase().includes(searchPhrase)
          )
        : this.allJokes;
    },
  },
  methods: {
    ...mapActions(["fetchJokes", "addToFavorites"]),
    addToFavorites(joke) {
      this.$store.commit("addToFavorites", joke);
    },
  },
  async mounted() {
    if (!this.allJokes.length) {
      this.fetchJokes();
    }
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
.active {
  transition: all 0.5s ease;
  transform: background-color;
  background-color: #42b983;
  opacity: 0.6;
}
</style>
