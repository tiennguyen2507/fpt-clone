export const userStore = {
  state: {
    user: {},
    isPermission: false,
  },
  getters: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    permissionUser(state) {
      state.isPermission = true;
    },
  },
};
