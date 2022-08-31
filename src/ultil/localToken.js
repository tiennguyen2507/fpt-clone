const LOCAL_TOKEN = "token";

export const getLocalToken = () => {
  localStorage.getItem(LOCAL_TOKEN);
};

export const setLocalToken = (token) => {
  localStorage.setItem(LOCAL_TOKEN, token);
};

export const cleanLocalToken = () => {
  localStorage.clear(LOCAL_TOKEN);
};
