<template>
  <div class="topnav">
    <router-link
      id="link"
      class="link"
      v-if="!getItem"
      :to="!getItem ? '/signin' : '/'"
      >sign up</router-link
    >

    <router-link
      id="link"
      class="link"
      v-if="!getItem"
      :to="!getItem ? '/login' : '/'"
      >Login</router-link
    >
    <p class="me-2 link" v-if="getItem">Hello {{ userwithoutpass }}!</p>

    <router-link class="link" v-if="getItem" :to="getItem ? '/' : '/signin'"
      >Home</router-link
    >

    <router-link
      id="link"
      class="link"
      v-if="getItem"
      :to="!getItem ? '/login' : '/'"
      >Log Out</router-link
    >
  </div>

  <div class="d-FormAuth">
    <div class="d-Todomain h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "vue-router";
import { useStore } from "vuex";
import router from "../../routes/router";
import { getAuth } from "../remove";
export default {
  name: "navVue",
  setup() {
    const store = useStore();
    const currect = window.location.pathname;
    const logout = () => {
      localStorage.removeItem("authenticate");
      window.location.reload();
    };

    const getItem = JSON.parse(localStorage.getItem("authenticate"));
    const userwithoutpass = !getItem
      ? null
      : getItem.email.replace("@gmail.com", "");

    if (!getItem && currect === "/") {
      router.push("/signin");
    }
    if (getItem && currect === "/signin") {
      router.push("/");
    }
    if (getItem && currect === "/login") {
      router.push("/");
    }

    return {
      logout,
      store,
      getItem,
      userwithoutpass,
    };
  },
};
</script>

<style scoped>
@import url("../Style/style.css");
.me-2 {
  margin-left: 0.5rem;
}
</style>
