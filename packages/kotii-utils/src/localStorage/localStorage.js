export const setInStorage = async (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  if (getFromStorage(key)) return true;
  return false;
};

export const getFromStorage = async (key) => {
  let foundItem = key ? localStorage.getItem(key) : null;
  if (!foundItem) return null;
  if (!foundItem) return null;
  if (foundItem === "undefined") return null;
  if (typeof foundItem === "object" && Object.keys(foundItem).length === 0)
    return null;

  return JSON.parse(foundItem);
};

export const removeFromStorage = async (key) => {
  // console.log("Removing Key from storage;;;", key);
  localStorage.removeItem(key);
  if (!getFromStorage(key)) return true;
  return false;
};

export const isItemInStorage = async (key) => {
  if (await getFromStorage(key)) {
    return true;
  }
  return false;
};
