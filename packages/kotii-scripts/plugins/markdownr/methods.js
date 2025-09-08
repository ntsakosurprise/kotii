const methods = {};
methods.init = function () {
  // self.debug('Bitbucket has been initialised')

  this.listens({
    "process-markdown": this.handleMarkdown.bind(this),
  });
};
methods.handleMarkdown = function (data) {
  const self = this;
  const { callback, payload } = data;
  const { markdownPages } = payload;

  let createdPages = self.getPagesMarkdownContent(markdownPages);

  callback(createdPages);
};

methods.getPagesMarkdownContent = function (pages) {
  const self = this;
  const { MarkdownLoader } = self;

  const filteredPages = pages.map((pagePath) => {
    return MarkdownLoader({ resource: pagePath });
  });
  self.debug("THE FILTERED PAGES", filteredPages);
  return filteredPages;
};

export default methods;
