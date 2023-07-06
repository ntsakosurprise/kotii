export const setInStorage = (key, value) => {
  console.log("GETTING KEY valuePairs;;;", key);
  console.log("KEY VALUE;;;", value);
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key) => {
  console.log("GETFROM STORAGE;;;", key);
  console.log("Get from Storage;;;", localStorage.getItem(key));
  if (!key) return null;
  if (!localStorage.getItem(key)) return null;
  if (localStorage.getItem(key) === "undefined") return null;
  return JSON.parse(localStorage.getItem(key));
};

export const removeFromStorage = (key) => {
  console.log("Removing Key from storage;;;", key);
  localStorage.removeItem(key);
};
