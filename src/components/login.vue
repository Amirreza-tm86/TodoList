<template>
  <form class="formAuth" @submit.prevent="authlogin">
    <div class="mx-auto d-form rounded-2">
      <div>
        <div class="text-center userIcon">
          <font-awesome-icon class="fa-2xl" :icon="['fas', 'user']" />
        </div>
        <div class="d-Authenticate">
          <div class="FormInput">
            <input
              class="input"
              v-model="store.state.LoginEmail"
              type="text"
              placeholder="Login"
              name="email"
              required
            />

            <input
              class="input"
              v-model="store.state.LoginPassword"
              type="password"
              id="password"
              placeholder="password"
              name="psw"
              required
            />
          </div>
        </div>
        <div>
          <div class="d-showpass mt-2">
            <div>
              <input @click="showpass" type="checkbox" />
            </div>
            <div class="ms-1">
              <p class="text t-showpass">show password</p>
            </div>
          </div>
        </div>

        <div class="clearfix">
          <button type="submit" class="authbtn">LOG IN</button>
        </div>
        <div class="d-ErrorAuth">
          <div v-if="store.state.ShowErrorLogin" class="error">
            {{ store.state.ErrorAuth }}
          </div>
        </div>
        <div class="auth-footer mt-4">
          <p class="p-forgetpass m-0">
            <a href="#">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "login",
  data() {
    const store = useStore();

    return {
      store,
    };
  },
  methods: {
    authlogin: function () {
      const login = {
        email: this.store.state.LoginEmail,
        password: this.store.state.LoginPassword,
      };

      const getItem = JSON.parse(sessionStorage.getItem("authenticate"));

      if (
        getItem.email === this.store.state.LoginEmail &&
        getItem.password === this.store.state.LoginPassword
      ) {
        localStorage.setItem("authenticate", JSON.stringify(login));

        window.location.reload();
      } else if (getItem.email !== this.store.state.LoginEmail) {
        this.store.state.ShowErrorLogin = true;

        this.store.state.ErrorAuth = "This Email Not Signed Up!";
      } else if (
        getItem.password !== this.store.state.LoginPassword &&
        getItem.email === this.store.state.LoginEmail
      ) {
        this.store.state.ShowErrorLogin = true;

        this.store.state.ErrorAuth = "This Password is Wrong!";
      } else {
        return true;
      }
    },
    showpass: function () {
      const inp = document.getElementById("password");
      if (inp.type === "password") {
        inp.type = "text";
      } else {
        inp.type = "password";
      }
    },
  },
};
</script>

<style scoped>
@import url("../Style/style.css");
</style>
