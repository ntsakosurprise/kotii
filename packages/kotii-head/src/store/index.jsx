import { compileKotiiHead } from "../utils/compileKotiiHead";
import { queueDomUpdate } from "../utils/clientDomain";

export const createHeadStore = () => {
  const storeMap = new Map(); // Completely private instance scoped strictly to this request/mount invocation
  const isClient = typeof window !== "undefined" ? true : false;
  let isUpdateQueScheduled = false;

  return {
    setHeadEntry: function (entry) {
      if (!entry.id) return;

      storeMap.set(entry.id, entry);
      if (isClient) {
        if (isUpdateQueScheduled) return;
        queueDomUpdate();
        isUpdateQueScheduled = true;
      }
    },
    unsetHeadEntry: function (id) {
      storeMap.delete(id);
      if (isClient) {
        if (isUpdateQueScheduled) return;
        isUpdateQueScheduled = true;
      }
    },
    getEntries: function () {
      return Array.from(storeMap.values());
    },
    renderToStatic: function (heads) {
      return compileKotiiHead(heads);
    },
  };
};
