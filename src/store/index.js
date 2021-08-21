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
      jokes.forEach((j) => (j.isActive = false));

      commit("updateJokes", jokes);
    },

    addToFavorites({ commit }, joke) {
      commit("addToFavorites", joke);
    },
    removeFromFavorites({ commit }, item) {
      commit("removeFromFavorites", item);
    },
    getSearchValueToVuex({ commit }, searchPhrase) {
      commit("setSearchValueToVuex", searchPhrase);
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
      if (!state.favorites.find((j) => j.id === joke.id)) {
        joke.isActive = true;
        state.favorites.push(joke);
      }

      console.log(state.favorites);
    },
    removeFromFavorites(state, item) {
      let index = state.favorites.indexOf(item);
      state.favorites.splice(index, 1);
    },
    setSearchValueToVuex: (state, searchPhrase) => {
      state.searchValue = searchPhrase;
    },
  },
  state: {
    jokes: [],
    favorites: [],
    searchValue: "",
  },
  getters: {
    allJokes(state) {
      return state.jokes;
    },
    allFavorites(state) {
      return state.favorites;
    },
    searchValueGetter(state) {
      return state.searchValue;
    },
  },
});
