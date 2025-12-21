import {
  kotiiInternal,
  kotiiInternalCss,
  kotiiInternalAssets,
} from "./internal.js";

export const USER_LAND_ALIASES = {
  "@kotii/_user/startup": { value: `/src/components/startup/index` },
  "@kotii/_user/redux": { value: `/src/store/index` },
  "@kotii/_user/plugins": { value: "api/index" },
  "@kotii/_user/pages": `${kotiiInternal}/pages.js`,
  "@kotii/_user/build": `${kotiiInternal}/build.js`,
  "@kotii/_user/manifest": `${kotiiInternal}/manifest.js`,
  "@kotii/_css/styles": `${kotiiInternalCss}/styles.json`,
  "kotii/_css/modules": `${kotiiInternalCss}/styles-css-modules.json`,
  "@kotii/_assets/asset": `${kotiiInternalAssets}/assets.manifest.json`,
  "@kotii/_path/css": kotiiInternalCss,
  "@kotii/_path/app": kotiiInternal,
  "@kotii/_path/asset": kotiiInternalAssets,
};

export const USER_LAND_ALIAS_PLUGINS = "@kotii/_user/plugins";
export const USER_LAND_ALIAS_REDUX = "@kotii/_user/redux";
export const USER_LAND_ALIAS_START_UP = "@kotii/_user/startup";
export const USER_LAND_ALIAS_PAGES = "@kotii/_user/pages";
export const USER_LAND_ALIAS_STYLES_JSON = "@kotii/_css/styles";
export const USER_LAND_ALIAS_STYLES_MODULES = "@kotii/_css/modules";
export const USER_LAND_ALIAS_ASSETS_MANIFEST = "@kotii/_assets/asset";
export const USER_LAND_ALIAS_MANIFEST = "@kotii/_user/manifest";
export const USER_LAND_ALIAS_BUILD = "@kotii/_user/build";
export const USER_LAND_PATH_CSS = "@kotii/_path/css";
export const USER_LAND_PATH_APP = "@kotii/_path/app";
export const USER_LAND_PATH_ASSET = "@kotii/_path/asset";
