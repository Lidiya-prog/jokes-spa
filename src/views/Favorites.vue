<template>
  <div class="main">
    <div class="cards" v-if="sortedFavorites.length !== 0">
      <div class="favorites" v-for="item in sortedFavorites" :key="item.id">
        <p v-if="item.type === 'single'">{{ item.joke }}</p>
        <p v-else-if="item.type === 'twopart'">
          <span>{{ item.setup }}</span> <br />
          <span>{{ item.delivery }}</span>
        </p>

        <button class="rm" @click="removeFromFavorites(item)">
          &times;
        </button>
      </div>
    </div>
    <h1 v-else>Здесь пока пусто</h1>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["allJokes"]),
    sortedFavorites() {
      return this.allJokes.filter((elem) => elem.isActive === true);
    },
  },
  methods: { ...mapActions(["removeFromFavorites"]) },
};
</script>
<style scoped>
.cards {
  max-width: 600px;
  margin: auto;
}
.card-img {
  width: 1rem;
  height: 1rem;
}
.favorites {
  border: 2px solid black;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  margin: 30px 20px;
}
.card-img {
  align-self: center;
}
p {
  padding-right: 2rem;
  align-items: center;
}
.rm {
  background: rgb(221, 85, 85);
  border-radius: 50%;
  color: black;
  font-weight: bold;
  height: 25px;
  width: 25px;
  cursor: pointer;
}
</style>
