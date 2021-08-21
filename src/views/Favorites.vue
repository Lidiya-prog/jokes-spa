<template>
  <div class="main">
    <h1 v-if="allFavorites.lenght == 0">This is an about page</h1>
    <div class="cards" v-else>
      <div class="favorites" v-for="item in allFavorites" :key="item.id">
        <!-- <p>{{ favorite.joke || (favorite.setup && favorite.delivery) }}</p> -->
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
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["allFavorites"]),
  methods: { ...mapActions(["removeFromFavorites"]) },
};
</script>
<style scoped>
.card-img {
  width: 1rem;
  height: 1rem;
}
.favorites {
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
.rm {
  background: red;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  height: 25px;
  width: 25px;
}
</style>
