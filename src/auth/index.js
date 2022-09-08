import { listUser } from "@/mock/auth.js";
import store from "../store";
import { setLocalToken } from "../ultil/localToken";

export const login = (formData) => {
  const user = listUser.find(
    (user) =>
      user.phone === formData.phone && user.password === formData.password
  );

  if (user) {
    store.commit("setUser", user);
    setLocalToken(user.token);
  }
  return !!user;
};
