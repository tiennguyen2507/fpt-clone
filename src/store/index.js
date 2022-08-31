import { createStore } from "vuex";
import { userStore } from "./user-store";

const store = createStore({
  modules: {
    userStore,
  },
});

export default store;
