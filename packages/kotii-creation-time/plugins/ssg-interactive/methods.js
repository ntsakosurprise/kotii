/* eslint-disable no-unused-vars */
const methods = {};
import fs from "fs";
import path from "path";
methods.init = function () {
  this.listens({
    "generate-static-content": this.handleStaticGeneration.bind(this),
  });
};
methods.handleStaticGeneration = function (data) {
  const self = this;
  const pao = self.pao;
  const { payload } = data;
  const { dataToConfig } = payload;
  const { routes, routesObject, resources } = dataToConfig;
  const getWorkingFolder = pao.pa_getWorkingFolder;

  self.debug("THE DATA OF SSG PLUGIN", dataToConfig);

  const setCall = data.callback;
  const cwd = getWorkingFolder();

  const BUILD = `${cwd}/build`;

  self
    .renderApp(routes)
    .then((htmlViews) => {
      // self.debug("THE HTML on render app", htmlViews);
      const DIST = self.createDistFolder(
        `${resources.appFolder}${path.sep}dist`
      );
      self.debug("THE DIST FOLDER", DIST);
      self.copyPublicToDist(resources.appAssetsPublic, DIST, "index.html");
      self.copyPublicToDist(BUILD, DIST, "index.html");
      fs.existsSync(`${DIST}${path.sep}index.html`)
        ? fs.rmSync(`${DIST}${path.sep}index.html`)
        : null;
      htmlViews.forEach((html) => {
        self.savePageToFile(
          `${DIST}${path.sep}${html.name.toLowerCase()}.html`,
          html.content
        );
      });
      setCall({ message: "Static html has completed" });
    })
    .catch((err) => {
      self.debug("RENDERAPP REJECTED", err);
    });
};
methods.renderApp = function (views) {
  const self = this;

  return new Promise((resolve) => {
    self.emit({
      type: "handle-react-static",
      data: {
        views: views,
        staticRender: true,
        callback: (data) => {
          resolve(data);
        },
      },
    });
  });

  // {
  //   view: {
  //     match: '/',
  //     vHandler: 'react',
  //     title: 'REACT SERVE-SIDE RENDERING COMPONENT'
  //   },
  //   payload: {
  //     parsed: { url: '/', handler: '' },
  //     handler: '/home',
  //     request: {
  //       req: [IncomingMessage],
  //       res: [ServerResponse],
  //       next: [Function: next]
  //     }
  //   },
  //   callback: [Function: bound viewHandler]
  // }
};
methods.cleanBuildFolder = function (view, setCall) {
  const self = this;

  self.emit({
    type: "handle-react-view",
    data: {
      view: view,
      staticRender: true,
      callback: (err, data) => {
        setCall({ message: "handleStaticGeneration in action" });
      },
    },
  });

  // {
  //   view: {
  //     match: '/',
  //     vHandler: 'react',
  //     title: 'REACT SERVE-SIDE RENDERING COMPONENT'
  //   },
  //   payload: {
  //     parsed: { url: '/', handler: '' },
  //     handler: '/home',
  //     request: {
  //       req: [IncomingMessage],
  //       res: [ServerResponse],
  //       next: [Function: next]
  //     }
  //   },
  //   callback: [Function: bound viewHandler]
  // }
};
methods.copyPublicToDist = function (from, to, ignore) {
  const self = this;
  self.debug("copying from", from, to);
  if (fs.existsSync(from)) {
    fs.cpSync(from, to, { recursive: true, filter: (fi) => fi !== ignore });
  } else {
    self.infoSync(
      `Folder:${from} does not exist, kotii will skip trying to copy from it`
    );
  }

  // {
  //   view: {
  //     match: '/',
  //     vHandler: 'react',
  //     title: 'REACT SERVE-SIDE RENDERING COMPONENT'
  //   },
  //   payload: {
  //     parsed: { url: '/', handler: '' },
  //     handler: '/home',
  //     request: {
  //       req: [IncomingMessage],
  //       res: [ServerResponse],
  //       next: [Function: next]
  //     }
  //   },
  //   callback: [Function: bound viewHandler]
  // }
};
methods.createDistFolder = function (filepath) {
  const self = this;
  const pao = self.pao;
  const makeFolderSync = pao.pa_makeFolderSync;
  const isExistingDir = pao.pa_isExistingDir;
  if (isExistingDir(filepath)) fs.rmSync(filepath, { recursive: true });
  makeFolderSync(filepath);
  return filepath;
};
methods.savePageToFile = function (filepath, content) {
  const self = this;
  const pao = self.pao;
  const saveToFile = pao.pa_saveToFile;

  saveToFile(filepath, content);
};

export default methods;
