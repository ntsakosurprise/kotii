export const createHeadStore = () => {
  return {
    entries: new Map(),
    setHeadEntry: function (entry) {
      console.log("SETTING HEAD ENTRY", entry);
      this.entries.set(entry.id, entry);
    },
    unsetHeadEntry: function (id) {
      console.log("UNSETTING HEAD ENTRY", id);
      this.entries.delete(id);
    },
    getEntries: function () {
      return Array.from(this.entries.values());
    },
  };
};
