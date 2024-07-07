<template>
  <navVue />
</template>

<script>
import navVue from "./components/navVue.vue";
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    navVue,
    Home
  },
};
</script>

<style>
@import url("./Style/style.css");
</style>