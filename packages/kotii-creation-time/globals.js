// /* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */
import fs from "node:fs";
import Papa from "papaparse";
import path from "path";
import { fileURLToPath } from "url";
import { parseString } from "xml2js";
import { XMLParser, XMLBuilder, XMLValidator } from "fast-xml-parser";

const WEB_AUDIO_FORMATS = ["mp3", "aac", "ogg", "wav", "opus", "flac"];
const WEB_VIDEO_FORMATS = ["mp4", "webm", "ogv", "avi", "mov", "mkv"];
const WEB_IMAGE_FORMATS = [
  "jpg",
  "png",
  "gif",
  "webp",
  "svg",
  "avif",
  "bmp",
  "tiff",
];
const WEB_DOCUMENTS_FORMATS = [
  "pdf",
  "docx",
  "doc",
  "txt",
  "odt",
  "rtf",
  "html",
  "md",
  "xls",
  "xlsx",
];
const WEB_DATA_FORMATS = [
  "json",
  "csv",
  "xml",
  "yaml",
  "parquet",
  "avro",
  "protobuf",
  "ndjson",
];
const WEB_FONTS_FORMATS = ["woff2", "woff", "ttf", "otf", "eot", "svg"];

const parser = new XMLParser();

// Required to emulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getNodejsForeignData = (dataType, filePath) => {
  console.log("GET FOREIGN", dataType, filePath);

  return new Promise((resolve) => {
    switch (dataType.toLowerCase()) {
      case "json":
        return resolve(getJSON(filePath));
      case "xml":
        return getXML(filePath).then(resolve);
      case "csv":
        return resolve(getCSV(filePath));
      default:
        resolve("");
    }
  });
};

export const getNodejsForeignDataSync = (dataType, filePath) => {
  console.log("GET FOREIGN", dataType, filePath);

  switch (dataType.toLowerCase()) {
    case "json":
      return getJSON(filePath);
    case "xml":
      return getXMLSync(filePath);
    case "csv":
      return getCSV(filePath);
    default:
      return "";
  }
};

const getJSON = (absoluteFilePath) => {
  return `export default ${readFileContent(absoluteFilePath)}`;
};

const getXML = (absoluteFilePath) => {
  return new Promise((resolve) => {
    parseString(readFileContent(absoluteFilePath), (err, result) => {
      resolve(`export default ${JSON.stringify(result)}`);
    });
  });
};

const getXMLSync = (absoluteFilePath) => {
  const result = parser.parse(readFileContent(absoluteFilePath));
  console.log("XML DATA SYNC", result);
  return `export default ${JSON.stringify(result)}`;
};

const getCSV = (absoluteFilePath) => {
  const parsedCsv = Papa.parse(readFileContent(absoluteFilePath));
  return `export default ${JSON.stringify(parsedCsv.data)}`;
};

const readFileContent = (absoluteFilePath) => {
  return fs.readFileSync(absoluteFilePath, {
    encoding: "utf-8",
  });
};

export const removeStylesJson = () => {
  const stylesPath = `${__dirname}/dev/styles.json`;
  const stylesPathCss = `${__dirname}/dev/styles-css-modules.json`;

  console.log("REMOVE STYLES RUNS", stylesPath);

  if (fs.existsSync(stylesPath)) fs.unlinkSync(stylesPath);
  if (fs.existsSync(stylesPathCss)) fs.unlinkSync(stylesPathCss);
};

export const createImportPathContext = (
  filePath,
  specifier,
  firstGenChild = "src"
) => {
  console.log("CREATE IMPORT PATH CONTEXT", specifier);

  const pathContext = {};

  const lastIndexOfChild = filePath.lastIndexOf(firstGenChild);
  const root = filePath.substring(0, lastIndexOfChild - 1);
  const relativePath = `./${filePath.substring(lastIndexOfChild)}`;

  pathContext.fileRelativePath = relativePath;
  pathContext.fileRoot = root;
  pathContext.fileUserRequest = specifier;
  pathContext.fileFullPath = filePath;

  console.log("THE FOLDER", pathContext);

  return pathContext;
};

export const replaceKotiiJsFilesContent = () => {
  const pagesFilePath = `${__dirname}/kotii-land/dev/pages.js`;
  const manifestFilePath = `${__dirname}/kotii-land/dev/manifest.js`;
  const filesContent = getCentralFilesContent();

  return new Promise((resolve) => {
    fs.writeFileSync(pagesFilePath, filesContent.pages, "utf8");
    fs.writeFileSync(manifestFilePath, filesContent.manifest, "utf8");
    resolve(true);
  });
};

const getCentralFilesContent = () => {
  const pages = `
const comps = {};
const routes = [];

export { comps, routes };
`;

  const manifest = `const meta = {
  comps: [],
  compsSource: "",
  appMain: "",
  lastCompsCount: 0,
  compsPaths: [],
  app: {
    type: "ssr",
    stateVendor: "redux",
  },
  isDomainCreated: false,
  staticOrLazy: "static",
};
export { meta };
`;

  return { pages, manifest };
};
const getFilesFormats = () => {
  return {
    WEB_AUDIO_FORMATS,
    WEB_DATA_FORMATS,
    WEB_FONTS_FORMATS,
    WEB_IMAGE_FORMATS,
    WEB_VIDEO_FORMATS,
    WEB_DOCUMENTS_FORMATS,
  };
};
const getAudio = (base) => {
  return {
    mp3: `${base}/audio`,
    aac: `${base}/audio`,
    ogg: `${base}/audio`,
    wav: `${base}/audio`,
    opus: `${base}/audio`,
    flac: `${base}/audio`,
  };
};
const getVideo = (base) => {
  return {
    mp4: `${base}/video`,
    webm: `${base}/video`,
    ogv: `${base}/video`,
    avi: `${base}/video`,
    mov: `${base}/video`,
    mkv: `${base}/video`,
  };
};
const getImage = (base) => {
  return {
    jpg: `${base}/images`,
    jpeg: `${base}/images`,
    png: `${base}/images`,
    gif: `${base}/images`,
    webp: `${base}/images`,
    svg: `${base}/images`,
    avif: `${base}/images`,
    bmp: `${base}/images`,
    tiff: `${base}/images`,
  };
};
const getDocuments = (base) => {
  return {
    pdf: `${base}/docs`,
    doc: `${base}/docs`,
    docx: `${base}/docs`,
    txt: `${base}/docs`,
    odt: `${base}/docs`,
    rtf: `${base}/docs`,
    html: `${base}/docs`,
    md: `${base}/docs`,
    xls: `${base}/docs`,
    xlsx: `${base}/docs`,
  };
};
const getData = (base) => {
  return {
    json: `${base}/data`,
    csv: `${base}/data`,
    xml: `${base}/data`,
    yaml: `${base}/data`,
    yml: `${base}/data`,
    parquet: `${base}/data`,
    avro: `${base}/data`,
    protobuf: `${base}/data`,
    ndjson: `${base}/data`,
  };
};
const getFonts = (base) => {
  return {
    woff2: `${base}/fonts`,
    woff: `${base}/fonts`,
    ttf: `${base}/fonts`,
    otf: `${base}/fonts`,
    eot: `${base}/fonts`,
  };
};
const getJs = (base) => {
  return {
    js: `${base}/js`,
  };
};
const getStyles = (base) => {
  return {
    styles: `${base}/css`,
  };
};
const getMisc = (base) => {
  return {
    zip: `${base}/misc`,
    tar: `${base}/misc`,
    gz: `${base}/misc`,
    rar: `${base}/misc`,
    "7z": `${base}/misc`,
    gltf: `${base}/misc`,
    glb: `${base}/misc`,
    swf: `${base}/misc`,
    ics: `${base}/misc`,
    log: `${base}/misc`,
  };
};
export const getFileFormatMaps = (base) => {
  return {
    ...getAudio(base),
    ...getFonts(base),
    ...getImage(base),
    ...getDocuments(base),
    ...getMisc(base),
    ...getVideo(base),
    ...getData(base),
    ...getJs(base),
    ...getStyles(base),
  };
};

// Optionally export all together
export default {
  getNodejsForeignData,
  getNodejsForeignDataSync,
  removeStylesJson,
  createImportPathContext,
  replaceKotiiJsFilesContent,
  getFilesFormats,
  getFileFormatMaps,
};
