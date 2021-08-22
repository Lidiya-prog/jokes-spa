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
    addToFavorites(state, joke) {
      if (state.jokes.find((j) => j.id === joke.id)) {
        joke.isActive = true;
        state.jokes.joke = joke;
      }

      //   console.log(state.jokes.joke);
    },
    removeFromFavorites(state, item) {
      if (state.jokes.find((j) => j.id === item.id)) {
        item.isActive = false;
        state.jokes.joke = item;
      }
      //   console.log(item);
    },
    setSearchValueToVuex: (state, searchPhrase) => {
      state.searchValue = searchPhrase;
    },
  },
  state: {
    jokes: [],

    searchValue: "",
  },
  getters: {
    allJokes(state) {
      return state.jokes;
    },
    // allFavorites(state) {
    //   return state.favorites;
    // },
    searchValueGetter(state) {
      return state.searchValue;
    },
  },
});
