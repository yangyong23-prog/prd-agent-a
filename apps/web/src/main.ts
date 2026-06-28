import 'meri-plus/theme/index.css';
import 'meri-icon/lib/style.css';
import "./styles.css";

import { VueQueryPlugin } from "@tanstack/vue-query";
import MeriPlus from "meri-plus";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import { createAppRouter } from "./router";

const app = createApp(App);
const router = createAppRouter(import.meta.env.BASE_URL);

app.use(createPinia());
app.use(VueQueryPlugin);
app.use(MeriPlus);
app.use(router);
app.mount("#root");
