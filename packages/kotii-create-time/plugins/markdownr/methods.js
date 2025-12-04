const methods = {};
methods.init = function () {
  // self.debug('Bitbucket has been initialised')

  this.listens({
    "process-markdown": this.handleMarkdown.bind(this),
  });
};
methods.handleMarkdown = function (data) {
  const self = this;
  const { callback, doDuring = () => {}, payload } = data;
  const { markdownPages } = payload;
  console.log("THE DATA OBJECT", data);

  self.getPagesMarkdownContent(markdownPages, doDuring).then((createdPages) => {
    callback(createdPages);
  });
};

methods.getPagesMarkdownContent = async function (pages, doDuring) {
  const self = this;

  const { markdownLoader } = self;

  const filteredPages = pages.map(async (pagePath) => {
    let markResults = await markdownLoader({
      resource: pagePath,
      // customComponentLoader: self.customComponentLoader.bind(self),
    });
    let route = doDuring(pagePath);

    console.log("THE MARKDOWN RETURN", markResults);

    return { ...markResults, ...route, path: route.patternMatch };
  });

  self.debug("THE FILTERED PAGES", filteredPages);
  return await Promise.all(filteredPages);
};

methods.customComponentLoader = async function (filePath) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const file = await loadFile(filePath);
  return file;
};

export default methods;
