<template>
  <div class="home">
    <Search />
    <Jokes />
  </div>
</template>

<script>
import Jokes from "@/components/Jokes.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    Jokes,
    Search,
  },
};
</script>
