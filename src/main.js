import { createApp } from "vue";
import "./style.css";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import router from "./router";
import antd from "ant-design-vue";

const app = createApp(App);

app.use(antd);
app.use(router);

app.mount("#app");
