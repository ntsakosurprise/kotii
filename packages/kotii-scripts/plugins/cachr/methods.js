const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')

  this.listens({
    "store-data-in-cache": this.handleCache.bind(this),
    "get-data-from-cache": this.handleGetData.bind(this),
  });
};
methods.handleCache = function (data) {
  const self = this;
  const { callback, payload } = data;

  self.doCache(payload);
  // console.log("THE DATA OF Init SCRIPTS", data);
  // data.callback({ message: "Init plugin successfully called" });
  // return;
};
methods.doCache = function (cachee) {
  const self = this;
  const NodeCache = self.NodeCache;
  const cache = self.cache;
  const {
    toCache,
    cacheTime = 0,

    deleteChecheInterval = 0,
    deleteOnExpire = true,
    useClones = false,
    enableLegacyCallbacks = false,
    maxKeys = -1,
  } = cachee;
  const { data, key = null, period = 0, multiple = false } = toCache;

  if (!key || !multiple)
    throw new Error("Cache key should be a value to store data in cache");

  if (!cache) {
    self.cache = new NodeCache({
      stdTTL: cacheTime,
      checkperiod: deleteChecheInterval,
      useClones,
      deleteOnExpire,
      enableLegacyCallbacks,
      maxKeys,
    });
  }
  if (multiple) return callaback(cache.mset(data));
  callback(cache.set(key, data, period));
};
methods.handleGetData = function (data) {
  const self = this;
  const { callback, payload } = data;
  const { key, multiple = false } = payload;
  const retrievedData = multiple ? self.cache.mget(key) : self.cache.get(key);
  callback(retrievedData);

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

export default methods;
