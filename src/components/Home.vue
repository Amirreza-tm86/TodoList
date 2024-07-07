<template>
  <div class="between-flex d-todolist" v-for="(todo, n) in store.state.todos">
    <div class="flex">
      <input
        :checked="store.state.todos[n].isComplete"
        @click="middle(n)"
        class="accent-stone-900"
        id="checkbox"
        type="checkbox"
      />

      <p class="ml-2 checkboxText" id="todo">{{ todo.todo }}</p>
      <span class="checkbox" />
    </div>
    <div>
      <font-awesome-icon
        @click="store.dispatch('removetodo', n)"
        :icon="['fas', 'circle-xmark']"
        style="height: 18px; cursor: pointer"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import workoutFormVue from "./workoutForm.vue";

export default {
  name: "navVue",
  components: {
    workoutFormVue,
  },
  data() {
    const store = useStore();
    if (localStorage.getItem("todo")) {
      store.dispatch("todo");
    }
    return {
      store,
    };
  },
  methods: {
    showinput: function () {
      return (this.store.state.showinp = !this.store.state.showinp);
    },
    middle: function (x) {
      const list = document.getElementById("todo");
      // this.store.state.isComplete = !this.store.state.isComplete;
      this.store.state.todos[x] = {
        todo: this.store.state.todos[x].todo,
        isComplete: (this.store.state.todos[x].isComplete =
          !this.store.state.todos[x].isComplete),
      };
      const parsed = JSON.stringify(this.store.state.todos);
      localStorage.setItem("todo", parsed);
      for (var i = 0; i < list.length; ++i) {
        list[i].classList.toggle("checked");
      }
    },
    updatetodo: function (x) {
      document.getElementById("todo").value = this.store.state.todos[x].todo;
      console.log(document.getElementById("todo").value);
      if (this.store.state.newtodo) {
        this.store.state.todos[x] = {
          todo: this.store.state.newtodo,
          isComplete: false,
        };
        const parsed = JSON.stringify(this.store.state.todos);
        localStorage.setItem("todo", parsed);
        this.store.state.newtodo = "";
      }
    },
  },
};
</script>

<style scoped>
@import url("../Style/style.css");

.flex {
  display: flex;
}

p {
  font-size: 13px;
  color: black;
}

input[type="checkbox"]:checked + p {
  text-decoration: line-through rgb(64, 64, 141);
}
</style>
