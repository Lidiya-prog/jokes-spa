<template>
  <div class="home">
    <Jokes />
  </div>
</template>

<script>
import Jokes from "@/components/Jokes.vue";

export default {
  name: "Home",
  components: {
    Jokes,
  },
};
</script>
