export const setInStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
