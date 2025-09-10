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
      isServerMode: true,
    });
    let route = doDuring(pagePath);

    console.log("THE MARKDOWN RETURN", route);

    return { ...markResults, ...route };
  });

  self.debug("THE FILTERED PAGES", filteredPages);
  return filteredPages;
};

export default methods;
