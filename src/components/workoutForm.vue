<template>
  <div>
    <form @submit.prevent="onsubmit">
      <div class="d-TodoList">
        <div>
          <div>
            <p class="py-3 Todo-txt">Awesome Todo List</p>
          </div>
          <div class="d-BtnInp">
            <div class="d-TodoPt">
              <input
                class="todoInp shadow-inner"
                type="text"
                placeholder="What do you need to do today?"
                required
                id="todo"
                v-model="store.state.newtodo"
                style="outline: none"
              />
            </div>
            <div class="d-TodoBn">
              <button class="todo-btn mx-2">Add</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "workoutForm",
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  methods: {
    onsubmit: function () {
      this.store.dispatch("addtodo");
    },
  },
};
</script>

<style scoped>
@import url("../Style/style.css");
</style>
