export const setInStorage = (key, value) => {
  // console.log("GETTING KEY valuePairs;;;", key);
  // console.log("KEY VALUE;;;", value);
  localStorage.setItem(key, JSON.stringify(value));
  if (getFromStorage(key)) return true;
  return false;
};

export const getFromStorage = (key) => {
  // console.log("GETFROM STORAGE;;;", key);
  // console.log("Get from Storage;;;", localStorage.getItem(key));
  let foundItem = key ? localStorage.getItem(key) : null;
  if (!foundItem) return null;
  if (!foundItem) return null;
  if (foundItem === "undefined") return null;
  if (typeof foundItem === "object" && Object.keys(foundItem).length === 0)
    return null;
  // console.log("JSON PARSED ITEM;;;", JSON.parse(foundItem));
  return JSON.parse(foundItem);
};

export const removeFromStorage = (key) => {
  // console.log("Removing Key from storage;;;", key);
  localStorage.removeItem(key);
  if (!getFromStorage(key)) return true;
  return false;
};
