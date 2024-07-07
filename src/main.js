import { createApp } from "vue";
import store from '../store/store';
import App from "./App.vue";
import router from '../routes/router';
import './axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import './styles/app.css';

library.add(fas);

createApp(App)
    .use(store).use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");