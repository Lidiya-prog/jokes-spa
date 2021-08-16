import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async fetchJokes({ commit }) {
      let baseURL = "https://v2.jokeapi.dev";
      let categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
      let params = ["blacklistFlags=nsfw,religious,racist", "idRange=0-100"];
      const res = await fetch(
        baseURL +
          "/joke/" +
          categories.join(",") +
          "?" +
          params.join("&" + "amount=10")
      );
      const receivedJokes = await res.json();
      const jokes = receivedJokes.jokes;

      commit("updateJokes", jokes);
    },
    // addToFavorites(joke) {
    //   this.favorites.push(joke);
    // },
    addToFavorites({ commit }, joke) {
      commit("addToFavorites", joke);
    },
    removeFromFavorites({ commit }, item) {
      commit("removeFromFavorites", item);
    },
  },
  mutations: {
    updateJokes(state, jokes) {
      state.jokes = jokes;
    },
    // updateFavorites(state, favorites) {
    //   state.favorites = favorites;
    //   console.log(favorites);
    // },
    addToFavorites(state, joke) {
      if (joke.id in state.favorites) {
        return;
      } else {
        state.favorites.push(joke);
      }

      console.log(state.favorites);
    },
    removeFromFavorites(state, item) {
      let index = state.favorites.indexOf(item);
      state.favorites.splice(index, 1);
    },
  },
  state: {
    jokes: [],
    favorites: [],
  },
  getters: {
    allJokes(state) {
      return state.jokes;
    },
    allFavorites(state) {
      return state.favorites;
    },
  },
});
