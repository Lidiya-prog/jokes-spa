import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async fetchJokes({ commit }, limit = 10) {
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
  },
  mutations: {
    updateJokes(state, jokes) {
      state.jokes = jokes;
    },
  },
  state: {
    jokes: [],
  },
  getters: {
    allJokes(state) {
      return state.jokes;
    },
  },
});
