<template>
  <form class="formAuth" @submit.prevent="submitSiginup">
    <div class="mx-auto d-form rounded-2">
      <div class="AuthForm">
        <div class="text-center userIcon">
          <font-awesome-icon class="fa-2xl" :icon="['fas', 'user']" />
        </div>
        <div class="d-Authenticate">
          <div class="FormInput">
            <input
              class="input"
              v-model="store.state.SingupEmail"
              type="text"
              placeholder="sign up"
              name="signup"
              required
            />

            <input
              class="input"
              v-model="store.state.SignupPassword"
              type="password"
              id="password"
              :class="greet"
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
          <button type="submit" class="authbtn">SIGN UP</button>
        </div>
        <div class="d-ErrorAuth">
          <div v-if="store.state.ShowErrorSignup" class="error">
            {{ store.state.ErrorSingUp }}
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "signin",
  data() {
    const store = useStore();
    const greet = false;

    return {
      store,
    };
  },
  methods: {
    submitSiginup: function () {
      const signup = {
        email: this.store.state.SingupEmail,
        password: this.store.state.SignupPassword,
      };

      const SignedUp = JSON.parse(sessionStorage.getItem("authenticate"));

      if (SignedUp) {
        this.store.state.ShowErrorSignup = true;

        this.store.state.ErrorSingUp = "You Already Signed Up!";
      } else {
        localStorage.setItem("authenticate", JSON.stringify(signup));

        sessionStorage.setItem("authenticate", JSON.stringify(signup));

        window.location.reload();
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

    greet: function (event) {
      event.target.className += " borderBottom";
    },
  },
};
</script>

<style scoped>
@import url("../Style/style.css");
</style>
