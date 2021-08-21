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
  margin-bottom: 50px;
  height: 30px;
}
</style>
