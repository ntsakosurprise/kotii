import { compileKotiiHead } from "../utils/compileKotiiHead";
export const createHeadStore = () => {
  const storeMap = new Map(); // Completely private instance scoped strictly to this request/mount invocation

  return {
    setHeadEntry: function (entry) {
      if (!entry.id) return;
      storeMap.set(entry.id, entry);
    },
    unsetHeadEntry: function (id) {
      storeMap.delete(id);
    },
    getEntries: function () {
      return Array.from(storeMap.values());
    },
    renderToStatic: function (heads) {
      return compileKotiiHead(heads);
    },
  };
};
