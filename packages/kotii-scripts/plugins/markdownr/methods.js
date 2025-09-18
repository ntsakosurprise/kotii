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

  let createdPages = self.getPagesMarkdownContent(markdownPages, doDuring);

  callback(createdPages);
};

methods.getPagesMarkdownContent = function (pages, doDuring) {
  const self = this;

  const { MarkdownLoader } = self;

  const filteredPages = pages.map((pagePath) => {
    let markResults = MarkdownLoader({
      resource: pagePath,
      customComponentLoader: self.customComponentLoader.bind(self),
      isServerMode: true,
    });
    let route = doDuring(pagePath);

    console.log("THE MARKDOWN RETURN", route);

    return { ...markResults, ...route, path: route.patternMatch };
  });

  self.debug("THE FILTERED PAGES", filteredPages);
  return filteredPages;
};

methods.customComponentLoader = async function (filePath) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const file = await loadFile(filePath);
  return file;
};

export default methods;
