import { createApp } from "vue";
import "./style.css";
import "ant-design-vue/dist/antd.css";
import antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

app.use(antd);
app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.mount("#app");
