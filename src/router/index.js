import { createRouter, createWebHistory } from "vue-router";
import { getLocalToken } from "../ultil/localToken";
import { permission } from "../auth";
import store from "../store";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "root",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("@/views/product/Product.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/auth/Login.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/components/notFound/NoFound.vue"),
    },
  ],
  strict: true,
});
export default router;

router.beforeEach((to, from, next) => {
  const tokenLocal = getLocalToken();
  if (tokenLocal) {
    if (!store.state.isPermission) {
      permission();
      next();
      return;
    }
  }
  next();
});
