const LOCAL_TOKEN = "token";

export const getLocalToken = () => {
  return localStorage.getItem(LOCAL_TOKEN);
};

export const setLocalToken = (token) => {
  return localStorage.setItem(LOCAL_TOKEN, token);
};

export const cleanLocalToken = () => {
  return localStorage.clear(LOCAL_TOKEN);
};
