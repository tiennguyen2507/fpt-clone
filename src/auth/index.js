import { listUser } from "@/mock/auth.js";
import router from "../router";
import store from "../store";
import { setLocalToken, getLocalToken } from "../ultil/localToken";

export const login = (formData) => {
  const user = listUser.find(
    (user) =>
      user.phone === formData.phone && user.password === formData.password
  );

  if (Object.keys(user).length !== 0) {
    store.commit("setUser", user);
    setLocalToken(user.token);
  }
  return !!user;
};

export const permission = () => {
  const tokenLocal = getLocalToken();
  const user = listUser.find((item) => tokenLocal === item.token);
  if (Object.keys(user).length !== 0) {
    store.commit("setUser", user);
    store.commit("permissionUser");
  } else {
    router.push("/login");
  }
};
