const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')

  this.listens({
    "store-data-in-cache": this.handleCache.bind(this),
    "get-data-from-cache": this.handleGetData.bind(this),
    "delete-data-in-cache": this.handleDeleteData.bind(this),
    "update-data-in-cache": this.handleUpdate.bind(this),
  });
};
methods.handleCache = function (data) {
  const self = this;
  const { callback, payload } = data;

  self.doCache(payload, callback);
  // console.log("THE DATA OF Init SCRIPTS", data);
  // data.callback({ message: "Init plugin successfully called" });
  // return;
};
methods.doCache = function (cachee, callback = () => {}) {
  const self = this;
  const NodeCache = self.NodeCache;
  let cache = self.cache;
  console.log("CACHE: DO CACHE", cachee);
  const {
    toCache,
    cacheTime = 1000 * 60,

    deleteChecheInterval = 0,
    deleteOnExpire = true,
    useClones = false,
    enableLegacyCallbacks = false,
    maxKeys = -1,
  } = cachee;
  console.log("CACHE:TO CACHE", toCache);
  const { data, key = null, period = 1000 * 60, multiple = false } = toCache;
  console.log("CACHE: THE KEY", key);

  // if (!key || !multiple)
  //   throw new Error("Cache key should be a value to store data in cache");

  if (!cache) {
    self.cache = new NodeCache({
      stdTTL: cacheTime,
      checkperiod: deleteChecheInterval,
      useClones,
      deleteOnExpire,
      enableLegacyCallbacks,
      maxKeys,
    });
    cache = self.cache;
  }
  console.log("CACHE: AFTER SETTING", cache);
  console.log("CACHE: AFTER SELF.CACHE", self.cache);
  if (multiple)
    return callaback({
      message: "Multi cache Results",
      cached: cache.mset(data),
    });
  let cached = cache.set(key, data, period);
  callback({ message: "CACHE RESULT", cached });
};
methods.handleGetData = function (data) {
  const self = this;
  const { callback, payload } = data;
  const { key, multiple = false } = payload;
  console.log("SELF.NODECACHE", self.NodeCache);
  if (!self.cache)
    return callback({ status: false, message: "No cache has been configured" });
  const retrievedData = multiple ? self.cache.mget(key) : self.cache.get(key);
  callback({ status: true, data: retrievedData });

  // console.log("THE DATA OF Init SCRIPTS", data);
  // data.callback({ message: "Init plugin successfully called" });
  // return;
};
methods.handleDeleteData = function (data) {
  const self = this;
  const { callback, payload } = data;
  const { key } = payload;
  callback(self.cache.del(key));

  // const retrievedData = self.cache.get(key);
  // callback(retrievedData);

  // console.log("THE DATA OF Init SCRIPTS", data);
  // data.callback({ message: "Init plugin successfully called" });
  // return;
};
methods.handleUpdate = function (data) {
  const self = this;
  const { callback, payload } = data;
  const { key, updateData } = payload;
  const { action = "add", update } = updateData;
  const dataForKey = self.getDataLocal(key);
  if (action === "add") {
    dataForKey.added.push(update);
    callback({ message: "Added data has been archived" });
  } else {
    dataForKey.deleted.push(update);
    callback({ message: "Deleted data has been archived" });
  }
};

// methods.updateTypeRemove = function (data) {
//   const self = this;
//   const { callback, payload } = data;
//   const { key } = payload;
//   callback(self.cache.del(key));

//   // const retrievedData = self.cache.get(key);
//   // callback(retrievedData);

//   // console.log("THE DATA OF Init SCRIPTS", data);
//   // data.callback({ message: "Init plugin successfully called" });
//   // return;
// };

// methods.updateTypeAdd = function (data) {
//   const self = this;
//   const { callback, payload } = data;
//   const { key } = payload;
//   callback(self.cache.del(key));

//   // const retrievedData = self.cache.get(key);
//   // callback(retrievedData);

//   // console.log("THE DATA OF Init SCRIPTS", data);
//   // data.callback({ message: "Init plugin successfully called" });
//   // return;
// };

// methods.listUpdater = function (data,type) {
//   const self = this;
//   const { toActOn } = data;
//   const current

// };

methods.getDataLocal = function (key) {
  const self = this;

  // if (!self.cache)
  // return callback({ status: false, message: "No cache has been configured" });
  const retrievedData = self.cache.get(key);
  return retrievedData;

  // const retrievedData = self.cache.get(key);
  // callback(retrievedData);

  // console.log("THE DATA OF Init SCRIPTS", data);
  // data.callback({ message: "Init plugin successfully called" });
  // return;
};

export default methods;
