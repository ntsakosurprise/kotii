import React from "react";
import methods from "./methods.js";
class Ssg {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.React = React;
    this.handleStaticGeneration = methods.handleStaticGeneration;
    this.renderApp = methods.renderApp;
    this.cleanBuildFolder = methods.cleanBuildFolder;
    this.copyPublicToDist = methods.copyPublicToDist;
    this.createDistFolder = methods.createDistFolder;
    this.savePageToFile = methods.savePageToFile;
    this.readFiles = methods.readFiles;
    this.postBuildStaticResources = methods.postBuildStaticResources;
    this.copyImageFilesSync = methods.copyImageFilesSync;
    this.handleIgnores = methods.handleIgnores;
    this.getDepthFromHtmlPath = methods.getDepthFromHtmlPath;
    this.shouldUrlLocalized = methods.shouldUrlLocalized;
    this.localizeUrl = methods.localizeUrl;
    this.attrRegex = methods.attrRegex;
    this.normalizeRootPath = methods.normalizeRootPath;
    this.toRootPath = methods.toRootPath;
    this.validateAsset = methods.validateAsset;
    this.rewriteHtmlString = methods.rewriteHtmlString;
    this.normalizeLinkHref = methods.normalizeLinkHref;
    this.hasExtension = methods.hasExtension;
    this.shouldAppendHtml = methods.shouldAppendHtml;
    this.localizeHrefUrl = methods.localizeHrefUrl;
    this.formatAndSaveHtml = methods.formatAndSaveHtml;
    this.localizeAppResources = methods.localizeAppResources;
    this.createSiteMap = methods.createSiteMap;
    this.sitemapXmlSkeleton = methods.sitemapXmlSkeleton;
    this.sitemapsXmlSkeleton = methods.sitemapsXmlSkeleton;
    this.sitemapXmlPageUrlSkeleton = methods.sitemapXmlPageUrlSkeleton;
    this.createOrMergeRobotsTxt = methods.createOrMergeRobotsTxt;
  }
}
export default Ssg;
