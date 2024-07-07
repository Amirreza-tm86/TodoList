<template>
  <div class="todo-submit">
    <div class="div-com">
      <workoutForm />
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "./Home.vue";
import signin from "./signin.vue";
import { useStore } from "vuex";
import workoutForm from "./workoutForm.vue";
export default {
  name: "headerC",
  components: {
    workoutForm,
    Home,
    signin,
  },
  data() {
    const store = useStore();

    const getitem = localStorage.getItem("user");

    return {
      store,
      getitem,
    };
  },
};
</script>

<style scoped>
@import url("../Style/style.css");
</style>
