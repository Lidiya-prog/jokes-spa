<template>
  <input
    type="text"
    placeholder="Enter a word to search for jokes..."
    v-model="searchValue"
    @input="search(searchValue)"
  />
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
    };
  },
  computed: { ...mapGetters(["searchValueGetter"]) },
  methods: {
    ...mapActions(["getSearchValueToVuex"]),
    search(searchPhrase) {
      this.getSearchValueToVuex(searchPhrase);
    },
  },
};
</script>
<style scoped>
/* form { */
/* display: flex; */
/* justify-content: center; */
/* margin-bottom: 50px; */
/* } */
input {
  width: 400px;
  border: 2px solid black;
  height: 30px;
  width: 600px;
  margin: auto auto 50px;
}
@media screen and (max-width: 624px) {
  input {
    width: 95%;
  }
}
</style>
