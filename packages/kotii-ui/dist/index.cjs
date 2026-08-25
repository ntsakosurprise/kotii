/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/controls/Accordion/Accordion.tsx"
/*!*********************************************************!*\
  !*** ./src/components/controls/Accordion/Accordion.tsx ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedAccordion = kotii_styled_1.default.div.withConfig({
  componentId: "kt-jZhZMz-n"
})``;
const Accordion = ({
  testID = "",
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedAccordion, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Accordion, {
    ...props
  }, children));
};
exports["default"] = Accordion;

/***/ },

/***/ "./src/components/controls/Accordion/index.tsx"
/*!*****************************************************!*\
  !*** ./src/components/controls/Accordion/index.tsx ***!
  \*****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Accordion_1 = __importDefault(__webpack_require__(/*! ./Accordion */ "./src/components/controls/Accordion/Accordion.tsx"));
exports["default"] = Accordion_1.default;

/***/ },

/***/ "./src/components/controls/AccordionPanel/AccordionPanel.tsx"
/*!*******************************************************************!*\
  !*** ./src/components/controls/AccordionPanel/AccordionPanel.tsx ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedAccordion = kotii_styled_1.default.div.withConfig({
  componentId: "kt-l9jjnjAf"
})``;
const AccordionPanel = ({
  testID = "",
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedAccordion, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.AccordionPanel, {
    ...props
  }, children));
};
exports["default"] = AccordionPanel;

/***/ },

/***/ "./src/components/controls/AccordionPanel/index.tsx"
/*!**********************************************************!*\
  !*** ./src/components/controls/AccordionPanel/index.tsx ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const AccordionPanel_1 = __importDefault(__webpack_require__(/*! ./AccordionPanel */ "./src/components/controls/AccordionPanel/AccordionPanel.tsx"));
exports["default"] = AccordionPanel_1.default;

/***/ },

/***/ "./src/components/controls/Anchor/Anchor.tsx"
/*!***************************************************!*\
  !*** ./src/components/controls/Anchor/Anchor.tsx ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedAnchor = kotii_styled_1.default.div.withConfig({
  componentId: "kt-yVzHea7M"
})``;
const Anchor = ({
  testID = "",
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedAnchor, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Anchor, {
    ...props
  }, children));
};
exports["default"] = Anchor;

/***/ },

/***/ "./src/components/controls/Anchor/index.tsx"
/*!**************************************************!*\
  !*** ./src/components/controls/Anchor/index.tsx ***!
  \**************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Anchor_1 = __importDefault(__webpack_require__(/*! ./Anchor */ "./src/components/controls/Anchor/Anchor.tsx"));
exports["default"] = Anchor_1.default;

/***/ },

/***/ "./src/components/controls/Button/Button.tsx"
/*!***************************************************!*\
  !*** ./src/components/controls/Button/Button.tsx ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedButton = kotii_styled_1.default.div.withConfig({
  componentId: "kt-mouyFohp"
})``;
const Button = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedButton, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Button, {
    ...props
  }));
};
exports["default"] = Button;

/***/ },

/***/ "./src/components/controls/Button/index.tsx"
/*!**************************************************!*\
  !*** ./src/components/controls/Button/index.tsx ***!
  \**************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Button_1 = __importDefault(__webpack_require__(/*! ./Button */ "./src/components/controls/Button/Button.tsx"));
exports["default"] = Button_1.default;

/***/ },

/***/ "./src/components/controls/Drop/Drop.tsx"
/*!***********************************************!*\
  !*** ./src/components/controls/Drop/Drop.tsx ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedDrop = kotii_styled_1.default.div.withConfig({
  componentId: "kt-UtMBVnNw"
})``;
const Drop = ({
  testID = "",
  target,
  ...props
}) => {
  return react_1.default.createElement(WrappedDrop, {
    "data-testid": testID,
    target: target
  }, react_1.default.createElement(grommet_1.Drop, {
    target: target,
    ...props
  }));
};
exports["default"] = Drop;

/***/ },

/***/ "./src/components/controls/Drop/index.tsx"
/*!************************************************!*\
  !*** ./src/components/controls/Drop/index.tsx ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Drop_1 = __importDefault(__webpack_require__(/*! ./Drop */ "./src/components/controls/Drop/Drop.tsx"));
exports["default"] = Drop_1.default;

/***/ },

/***/ "./src/components/controls/DropButon/DropButton.tsx"
/*!**********************************************************!*\
  !*** ./src/components/controls/DropButon/DropButton.tsx ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedDropButton = kotii_styled_1.default.div.withConfig({
  componentId: "kt-1R2FqMRO"
})``;
const DropButton = ({
  testID = "",
  dropContent,
  ...props
}) => {
  return react_1.default.createElement(WrappedDropButton, {
    dropContent: dropContent,
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.DropButton, {
    ...props,
    dropContent: dropContent
  }));
};
exports["default"] = DropButton;

/***/ },

/***/ "./src/components/controls/DropButon/index.tsx"
/*!*****************************************************!*\
  !*** ./src/components/controls/DropButon/index.tsx ***!
  \*****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const DropButton_1 = __importDefault(__webpack_require__(/*! ./DropButton */ "./src/components/controls/DropButon/DropButton.tsx"));
exports["default"] = DropButton_1.default;

/***/ },

/***/ "./src/components/controls/Menu/Menu.tsx"
/*!***********************************************!*\
  !*** ./src/components/controls/Menu/Menu.tsx ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedMenu = kotii_styled_1.default.div.withConfig({
  componentId: "kt-RhhhdsD3"
})``;
const Menu = ({
  testID = "",
  items,
  ...props
}) => {
  return react_1.default.createElement(WrappedMenu, {
    items: items,
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Menu, {
    items: items,
    ...props
  }));
};
exports["default"] = Menu;

/***/ },

/***/ "./src/components/controls/Menu/index.tsx"
/*!************************************************!*\
  !*** ./src/components/controls/Menu/index.tsx ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Menu_1 = __importDefault(__webpack_require__(/*! ./Menu */ "./src/components/controls/Menu/Menu.tsx"));
exports["default"] = Menu_1.default;

/***/ },

/***/ "./src/components/controls/Nav/Nav.tsx"
/*!*********************************************!*\
  !*** ./src/components/controls/Nav/Nav.tsx ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedNav = kotii_styled_1.default.div.withConfig({
  componentId: "kt-5yTgxf2v"
})``;
const Nav = ({
  testID = "",
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedNav, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Nav, {
    ...props
  }, children));
};
exports["default"] = Nav;

/***/ },

/***/ "./src/components/controls/Nav/index.tsx"
/*!***********************************************!*\
  !*** ./src/components/controls/Nav/index.tsx ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Nav_1 = __importDefault(__webpack_require__(/*! ./Nav */ "./src/components/controls/Nav/Nav.tsx"));
exports["default"] = Nav_1.default;

/***/ },

/***/ "./src/components/controls/Tabs/Tabs.tsx"
/*!***********************************************!*\
  !*** ./src/components/controls/Tabs/Tabs.tsx ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedTabs = kotii_styled_1.default.div.withConfig({
  componentId: "kt-GMLIJRfI"
})``;
const Tabs = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedTabs, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Tabs, {
    ...props,
    onActive: () => console.log("Tabs")
  }));
};
exports["default"] = Tabs;

/***/ },

/***/ "./src/components/controls/Tabs/index.tsx"
/*!************************************************!*\
  !*** ./src/components/controls/Tabs/index.tsx ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Tabs_1 = __importDefault(__webpack_require__(/*! ./Tabs */ "./src/components/controls/Tabs/Tabs.tsx"));
exports["default"] = Tabs_1.default;

/***/ },

/***/ "./src/components/controls/index.tsx"
/*!*******************************************!*\
  !*** ./src/components/controls/index.tsx ***!
  \*******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DropButton = exports.Tabs = exports.Nav = exports.AccordionPanel = exports.Anchor = exports.Menu = exports.Drop = exports.Accordion = exports.Button = void 0;
const Accordion_1 = __importDefault(__webpack_require__(/*! ./Accordion */ "./src/components/controls/Accordion/index.tsx"));
exports.Accordion = Accordion_1.default;
const AccordionPanel_1 = __importDefault(__webpack_require__(/*! ./AccordionPanel */ "./src/components/controls/AccordionPanel/index.tsx"));
exports.AccordionPanel = AccordionPanel_1.default;
const Anchor_1 = __importDefault(__webpack_require__(/*! ./Anchor */ "./src/components/controls/Anchor/index.tsx"));
exports.Anchor = Anchor_1.default;
const Button_1 = __importDefault(__webpack_require__(/*! ./Button */ "./src/components/controls/Button/index.tsx"));
exports.Button = Button_1.default;
const Drop_1 = __importDefault(__webpack_require__(/*! ./Drop */ "./src/components/controls/Drop/index.tsx"));
exports.Drop = Drop_1.default;
const DropButon_1 = __importDefault(__webpack_require__(/*! ./DropButon */ "./src/components/controls/DropButon/index.tsx"));
exports.DropButton = DropButon_1.default;
const Menu_1 = __importDefault(__webpack_require__(/*! ./Menu */ "./src/components/controls/Menu/index.tsx"));
exports.Menu = Menu_1.default;
const Nav_1 = __importDefault(__webpack_require__(/*! ./Nav */ "./src/components/controls/Nav/index.tsx"));
exports.Nav = Nav_1.default;
const Tabs_1 = __importDefault(__webpack_require__(/*! ./Tabs */ "./src/components/controls/Tabs/index.tsx"));
exports.Tabs = Tabs_1.default;

/***/ },

/***/ "./src/components/index.tsx"
/*!**********************************!*\
  !*** ./src/components/index.tsx ***!
  \**********************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Svg = exports.Shape = exports.Oval = exports.Rectangle = exports.Circle = exports.Square = exports.Overlay = exports.Stack = exports.SideBar = exports.PageHeader = exports.Main = exports.Grid = exports.AccordionPanel = exports.Accordion = exports.Anchor = exports.Nav = exports.Tabs = exports.Menu = exports.DropButton = exports.Drop = exports.TextArea = exports.FileInput = exports.FormField = exports.SelectMultiple = exports.Select = exports.TextInput = exports.InfiniteScroll = exports.Keyboard = exports.SkipLink = exports.DateInput = exports.CheckBoxGroup = exports.CheckBox = exports.Image = exports.Carousel = exports.Video = exports.Tag = exports.Paragraph = exports.Text = exports.Markdown = exports.Heading = exports.PageContent = exports.ThemeSwitcher = exports.Card = exports.Footer = exports.Header = exports.Page = exports.Box = exports.Button = void 0;
const controls_1 = __webpack_require__(/*! ./controls */ "./src/components/controls/index.tsx");
Object.defineProperty(exports, "Accordion", ({
  enumerable: true,
  get: function () {
    return controls_1.Accordion;
  }
}));
Object.defineProperty(exports, "AccordionPanel", ({
  enumerable: true,
  get: function () {
    return controls_1.AccordionPanel;
  }
}));
Object.defineProperty(exports, "Anchor", ({
  enumerable: true,
  get: function () {
    return controls_1.Anchor;
  }
}));
Object.defineProperty(exports, "Button", ({
  enumerable: true,
  get: function () {
    return controls_1.Button;
  }
}));
Object.defineProperty(exports, "Drop", ({
  enumerable: true,
  get: function () {
    return controls_1.Drop;
  }
}));
Object.defineProperty(exports, "DropButton", ({
  enumerable: true,
  get: function () {
    return controls_1.DropButton;
  }
}));
Object.defineProperty(exports, "Menu", ({
  enumerable: true,
  get: function () {
    return controls_1.Menu;
  }
}));
Object.defineProperty(exports, "Nav", ({
  enumerable: true,
  get: function () {
    return controls_1.Nav;
  }
}));
Object.defineProperty(exports, "Tabs", ({
  enumerable: true,
  get: function () {
    return controls_1.Tabs;
  }
}));
const inputs_1 = __webpack_require__(/*! ./inputs */ "./src/components/inputs/index.tsx");
Object.defineProperty(exports, "CheckBox", ({
  enumerable: true,
  get: function () {
    return inputs_1.CheckBox;
  }
}));
Object.defineProperty(exports, "CheckBoxGroup", ({
  enumerable: true,
  get: function () {
    return inputs_1.CheckBoxGroup;
  }
}));
Object.defineProperty(exports, "DateInput", ({
  enumerable: true,
  get: function () {
    return inputs_1.DateInput;
  }
}));
Object.defineProperty(exports, "FileInput", ({
  enumerable: true,
  get: function () {
    return inputs_1.FileInput;
  }
}));
Object.defineProperty(exports, "FormField", ({
  enumerable: true,
  get: function () {
    return inputs_1.FormField;
  }
}));
Object.defineProperty(exports, "Select", ({
  enumerable: true,
  get: function () {
    return inputs_1.Select;
  }
}));
Object.defineProperty(exports, "SelectMultiple", ({
  enumerable: true,
  get: function () {
    return inputs_1.SelectMultiple;
  }
}));
Object.defineProperty(exports, "TextArea", ({
  enumerable: true,
  get: function () {
    return inputs_1.TextArea;
  }
}));
Object.defineProperty(exports, "TextInput", ({
  enumerable: true,
  get: function () {
    return inputs_1.TextInput;
  }
}));
const layout_1 = __webpack_require__(/*! ./layout */ "./src/components/layout/index.tsx");
Object.defineProperty(exports, "Box", ({
  enumerable: true,
  get: function () {
    return layout_1.Box;
  }
}));
Object.defineProperty(exports, "Card", ({
  enumerable: true,
  get: function () {
    return layout_1.Card;
  }
}));
Object.defineProperty(exports, "Footer", ({
  enumerable: true,
  get: function () {
    return layout_1.Footer;
  }
}));
Object.defineProperty(exports, "Grid", ({
  enumerable: true,
  get: function () {
    return layout_1.Grid;
  }
}));
Object.defineProperty(exports, "Header", ({
  enumerable: true,
  get: function () {
    return layout_1.Header;
  }
}));
Object.defineProperty(exports, "Main", ({
  enumerable: true,
  get: function () {
    return layout_1.Main;
  }
}));
Object.defineProperty(exports, "Overlay", ({
  enumerable: true,
  get: function () {
    return layout_1.Overlay;
  }
}));
Object.defineProperty(exports, "Page", ({
  enumerable: true,
  get: function () {
    return layout_1.Page;
  }
}));
Object.defineProperty(exports, "PageContent", ({
  enumerable: true,
  get: function () {
    return layout_1.PageContent;
  }
}));
Object.defineProperty(exports, "PageHeader", ({
  enumerable: true,
  get: function () {
    return layout_1.PageHeader;
  }
}));
Object.defineProperty(exports, "SideBar", ({
  enumerable: true,
  get: function () {
    return layout_1.SideBar;
  }
}));
Object.defineProperty(exports, "Stack", ({
  enumerable: true,
  get: function () {
    return layout_1.Stack;
  }
}));
const media_1 = __webpack_require__(/*! ./media */ "./src/components/media/index.tsx");
Object.defineProperty(exports, "Carousel", ({
  enumerable: true,
  get: function () {
    return media_1.Carousel;
  }
}));
Object.defineProperty(exports, "Image", ({
  enumerable: true,
  get: function () {
    return media_1.Image;
  }
}));
Object.defineProperty(exports, "Svg", ({
  enumerable: true,
  get: function () {
    return media_1.Svg;
  }
}));
Object.defineProperty(exports, "Video", ({
  enumerable: true,
  get: function () {
    return media_1.Video;
  }
}));
const typography_1 = __webpack_require__(/*! ./typography */ "./src/components/typography/index.tsx");
Object.defineProperty(exports, "Heading", ({
  enumerable: true,
  get: function () {
    return typography_1.Heading;
  }
}));
Object.defineProperty(exports, "Paragraph", ({
  enumerable: true,
  get: function () {
    return typography_1.Paragraph;
  }
}));
Object.defineProperty(exports, "Tag", ({
  enumerable: true,
  get: function () {
    return typography_1.Tag;
  }
}));
Object.defineProperty(exports, "Text", ({
  enumerable: true,
  get: function () {
    return typography_1.Text;
  }
}));
const utils_1 = __webpack_require__(/*! ./utils/ */ "./src/components/utils/index.tsx");
Object.defineProperty(exports, "InfiniteScroll", ({
  enumerable: true,
  get: function () {
    return utils_1.InfiniteScroll;
  }
}));
Object.defineProperty(exports, "Keyboard", ({
  enumerable: true,
  get: function () {
    return utils_1.Keyboard;
  }
}));
Object.defineProperty(exports, "Markdown", ({
  enumerable: true,
  get: function () {
    return utils_1.Markdown;
  }
}));
Object.defineProperty(exports, "SkipLink", ({
  enumerable: true,
  get: function () {
    return utils_1.SkipLink;
  }
}));
Object.defineProperty(exports, "ThemeSwitcher", ({
  enumerable: true,
  get: function () {
    return utils_1.ThemeSwitcher;
  }
}));
const shapes_1 = __webpack_require__(/*! ./shapes */ "./src/components/shapes/index.tsx");
Object.defineProperty(exports, "Circle", ({
  enumerable: true,
  get: function () {
    return shapes_1.Circle;
  }
}));
Object.defineProperty(exports, "Oval", ({
  enumerable: true,
  get: function () {
    return shapes_1.Oval;
  }
}));
Object.defineProperty(exports, "Rectangle", ({
  enumerable: true,
  get: function () {
    return shapes_1.Rectangle;
  }
}));
Object.defineProperty(exports, "Shape", ({
  enumerable: true,
  get: function () {
    return shapes_1.Shape;
  }
}));
Object.defineProperty(exports, "Square", ({
  enumerable: true,
  get: function () {
    return shapes_1.Square;
  }
}));

/***/ },

/***/ "./src/components/inputs/CheckBox/CheckBox.tsx"
/*!*****************************************************!*\
  !*** ./src/components/inputs/CheckBox/CheckBox.tsx ***!
  \*****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedCheckBox = kotii_styled_1.default.div.withConfig({
  componentId: "kt-VsUwgZSs"
})``;
const CheckBox = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedCheckBox, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.CheckBox, {
    ...props
  }));
};
exports["default"] = CheckBox;

/***/ },

/***/ "./src/components/inputs/CheckBox/index.tsx"
/*!**************************************************!*\
  !*** ./src/components/inputs/CheckBox/index.tsx ***!
  \**************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const CheckBox_1 = __importDefault(__webpack_require__(/*! ./CheckBox */ "./src/components/inputs/CheckBox/CheckBox.tsx"));
exports["default"] = CheckBox_1.default;

/***/ },

/***/ "./src/components/inputs/CheckBoxGroup/CheckBoxGroup.tsx"
/*!***************************************************************!*\
  !*** ./src/components/inputs/CheckBoxGroup/CheckBoxGroup.tsx ***!
  \***************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedCheckBox = kotii_styled_1.default.div.withConfig({
  componentId: "kt-mWlxJX6G"
})``;
const CheckBoxGroup = ({
  testID = "",
  options,
  ...props
}) => {
  return react_1.default.createElement(WrappedCheckBox, {
    options: options,
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.CheckBoxGroup, {
    ...props,
    options: options
  }));
};
exports["default"] = CheckBoxGroup;

/***/ },

/***/ "./src/components/inputs/CheckBoxGroup/index.tsx"
/*!*******************************************************!*\
  !*** ./src/components/inputs/CheckBoxGroup/index.tsx ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const CheckBoxGroup_1 = __importDefault(__webpack_require__(/*! ./CheckBoxGroup */ "./src/components/inputs/CheckBoxGroup/CheckBoxGroup.tsx"));
exports["default"] = CheckBoxGroup_1.default;

/***/ },

/***/ "./src/components/inputs/DateInput/DateInput.tsx"
/*!*******************************************************!*\
  !*** ./src/components/inputs/DateInput/DateInput.tsx ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedDateInput = kotii_styled_1.default.div.withConfig({
  componentId: "kt-FHO8VNYO"
})``;
const DateInput = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedDateInput, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.DateInput, {
    ...props
  }));
};
exports["default"] = DateInput;

/***/ },

/***/ "./src/components/inputs/DateInput/index.tsx"
/*!***************************************************!*\
  !*** ./src/components/inputs/DateInput/index.tsx ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const DateInput_1 = __importDefault(__webpack_require__(/*! ./DateInput */ "./src/components/inputs/DateInput/DateInput.tsx"));
exports["default"] = DateInput_1.default;

/***/ },

/***/ "./src/components/inputs/FileInput/FileInput.tsx"
/*!*******************************************************!*\
  !*** ./src/components/inputs/FileInput/FileInput.tsx ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedFileInput = kotii_styled_1.default.div.withConfig({
  componentId: "kt-BZ_jtwE4"
})``;
const FileInput = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedFileInput, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.FileInput, {
    ...props
  }));
};
exports["default"] = FileInput;

/***/ },

/***/ "./src/components/inputs/FileInput/index.tsx"
/*!***************************************************!*\
  !*** ./src/components/inputs/FileInput/index.tsx ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const FileInput_1 = __importDefault(__webpack_require__(/*! ./FileInput */ "./src/components/inputs/FileInput/FileInput.tsx"));
exports["default"] = FileInput_1.default;

/***/ },

/***/ "./src/components/inputs/FormField/FormField.tsx"
/*!*******************************************************!*\
  !*** ./src/components/inputs/FormField/FormField.tsx ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedFormField = kotii_styled_1.default.div.withConfig({
  componentId: "kt-wm3C43bb"
})``;
const FormField = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedFormField, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.FormField, {
    ...props
  }));
};
exports["default"] = FormField;

/***/ },

/***/ "./src/components/inputs/FormField/index.tsx"
/*!***************************************************!*\
  !*** ./src/components/inputs/FormField/index.tsx ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const FormField_1 = __importDefault(__webpack_require__(/*! ./FormField */ "./src/components/inputs/FormField/FormField.tsx"));
exports["default"] = FormField_1.default;

/***/ },

/***/ "./src/components/inputs/MaskedInput/MaskedInput.tsx"
/*!***********************************************************!*\
  !*** ./src/components/inputs/MaskedInput/MaskedInput.tsx ***!
  \***********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedMaskedInput = kotii_styled_1.default.div.withConfig({
  componentId: "kt-HMzmlS6_"
})``;
const MaskedInput = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedMaskedInput, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.MaskedInput, {
    ...props
  }));
};
exports["default"] = MaskedInput;

/***/ },

/***/ "./src/components/inputs/MaskedInput/index.tsx"
/*!*****************************************************!*\
  !*** ./src/components/inputs/MaskedInput/index.tsx ***!
  \*****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const MaskedInput_1 = __importDefault(__webpack_require__(/*! ./MaskedInput */ "./src/components/inputs/MaskedInput/MaskedInput.tsx"));
exports["default"] = MaskedInput_1.default;

/***/ },

/***/ "./src/components/inputs/RangeInput/RangeInput.tsx"
/*!*********************************************************!*\
  !*** ./src/components/inputs/RangeInput/RangeInput.tsx ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedRangeInput = kotii_styled_1.default.div.withConfig({
  componentId: "kt-40QcTwP6"
})``;
const RangeInput = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedRangeInput, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.RangeInput, {
    ...props
  }));
};
exports["default"] = RangeInput;

/***/ },

/***/ "./src/components/inputs/RangeInput/index.tsx"
/*!****************************************************!*\
  !*** ./src/components/inputs/RangeInput/index.tsx ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const RangeInput_1 = __importDefault(__webpack_require__(/*! ./RangeInput */ "./src/components/inputs/RangeInput/RangeInput.tsx"));
exports["default"] = RangeInput_1.default;

/***/ },

/***/ "./src/components/inputs/Select/Select.tsx"
/*!*************************************************!*\
  !*** ./src/components/inputs/Select/Select.tsx ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedSelect = kotii_styled_1.default.div.withConfig({
  componentId: "kt-xHXMu7sE"
})``;
const Select = ({
  testID = "",
  options,
  ...props
}) => {
  return react_1.default.createElement(WrappedSelect, {
    options: options,
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Select, {
    ...props,
    options: options
  }));
};
exports["default"] = Select;

/***/ },

/***/ "./src/components/inputs/Select/index.tsx"
/*!************************************************!*\
  !*** ./src/components/inputs/Select/index.tsx ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Select_1 = __importDefault(__webpack_require__(/*! ./Select */ "./src/components/inputs/Select/Select.tsx"));
exports["default"] = Select_1.default;

/***/ },

/***/ "./src/components/inputs/SelectMultiple/SelectMultiple.tsx"
/*!*****************************************************************!*\
  !*** ./src/components/inputs/SelectMultiple/SelectMultiple.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedSelectMultiple = kotii_styled_1.default.div.withConfig({
  componentId: "kt-5TtiBdR7"
})``;
const SelectMultiple = ({
  testID = "",
  options,
  ...props
}) => {
  return react_1.default.createElement(WrappedSelectMultiple, {
    options: options,
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.SelectMultiple, {
    ...props,
    options: options
  }));
};
exports["default"] = SelectMultiple;

/***/ },

/***/ "./src/components/inputs/SelectMultiple/index.tsx"
/*!********************************************************!*\
  !*** ./src/components/inputs/SelectMultiple/index.tsx ***!
  \********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const SelectMultiple_1 = __importDefault(__webpack_require__(/*! ./SelectMultiple */ "./src/components/inputs/SelectMultiple/SelectMultiple.tsx"));
exports["default"] = SelectMultiple_1.default;

/***/ },

/***/ "./src/components/inputs/StarRating/StarRating.tsx"
/*!*********************************************************!*\
  !*** ./src/components/inputs/StarRating/StarRating.tsx ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedStarRating = kotii_styled_1.default.div.withConfig({
  componentId: "kt-gXs1CiLo"
})``;
const StarRating = ({
  testID = "",
  name,
  ...props
}) => {
  return react_1.default.createElement(WrappedStarRating, {
    name: name,
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.StarRating, {
    ...props,
    name: name
  }));
};
exports["default"] = StarRating;

/***/ },

/***/ "./src/components/inputs/StarRating/index.tsx"
/*!****************************************************!*\
  !*** ./src/components/inputs/StarRating/index.tsx ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const StarRating_1 = __importDefault(__webpack_require__(/*! ./StarRating */ "./src/components/inputs/StarRating/StarRating.tsx"));
exports["default"] = StarRating_1.default;

/***/ },

/***/ "./src/components/inputs/TextArea/TextArea.tsx"
/*!*****************************************************!*\
  !*** ./src/components/inputs/TextArea/TextArea.tsx ***!
  \*****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedTextArea = kotii_styled_1.default.div.withConfig({
  componentId: "kt--P_Cs_cV"
})``;
const TextArea = ({
  testID = "",
  options,
  ...props
}) => {
  return react_1.default.createElement(WrappedTextArea, {
    options: options,
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.TextArea, {
    ...props
  }));
};
exports["default"] = TextArea;

/***/ },

/***/ "./src/components/inputs/TextArea/index.tsx"
/*!**************************************************!*\
  !*** ./src/components/inputs/TextArea/index.tsx ***!
  \**************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const TextArea_1 = __importDefault(__webpack_require__(/*! ./TextArea */ "./src/components/inputs/TextArea/TextArea.tsx"));
exports["default"] = TextArea_1.default;

/***/ },

/***/ "./src/components/inputs/TextInput/TextInput.tsx"
/*!*******************************************************!*\
  !*** ./src/components/inputs/TextInput/TextInput.tsx ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedTextInput = kotii_styled_1.default.div.withConfig({
  componentId: "kt-bLUJdZvM"
})``;
const TextInput = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedTextInput, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.TextInput, {
    ...props
  }));
};
exports["default"] = TextInput;

/***/ },

/***/ "./src/components/inputs/TextInput/index.tsx"
/*!***************************************************!*\
  !*** ./src/components/inputs/TextInput/index.tsx ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const TextInput_1 = __importDefault(__webpack_require__(/*! ./TextInput */ "./src/components/inputs/TextInput/TextInput.tsx"));
exports["default"] = TextInput_1.default;

/***/ },

/***/ "./src/components/inputs/ThumbsRating/ThumbsRating.tsx"
/*!*************************************************************!*\
  !*** ./src/components/inputs/ThumbsRating/ThumbsRating.tsx ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedThumbsRating = kotii_styled_1.default.div.withConfig({
  componentId: "kt-pZIPLov-"
})``;
const ThumbsRating = ({
  testID = "",
  name,
  ...props
}) => {
  return react_1.default.createElement(WrappedThumbsRating, {
    name: name,
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.ThumbsRating, {
    ...props,
    name: name
  }));
};
exports["default"] = ThumbsRating;

/***/ },

/***/ "./src/components/inputs/ThumbsRating/index.tsx"
/*!******************************************************!*\
  !*** ./src/components/inputs/ThumbsRating/index.tsx ***!
  \******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const ThumbsRating_1 = __importDefault(__webpack_require__(/*! ./ThumbsRating */ "./src/components/inputs/ThumbsRating/ThumbsRating.tsx"));
exports["default"] = ThumbsRating_1.default;

/***/ },

/***/ "./src/components/inputs/index.tsx"
/*!*****************************************!*\
  !*** ./src/components/inputs/index.tsx ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TextArea = exports.FormField = exports.ThumbsRating = exports.TextInput = exports.StarRating = exports.SelectMultiple = exports.Select = exports.MaskedInput = exports.RangeInput = exports.FileInput = exports.DateInput = exports.CheckBoxGroup = exports.CheckBox = void 0;
const CheckBox_1 = __importDefault(__webpack_require__(/*! ./CheckBox */ "./src/components/inputs/CheckBox/index.tsx"));
exports.CheckBox = CheckBox_1.default;
const CheckBoxGroup_1 = __importDefault(__webpack_require__(/*! ./CheckBoxGroup */ "./src/components/inputs/CheckBoxGroup/index.tsx"));
exports.CheckBoxGroup = CheckBoxGroup_1.default;
const DateInput_1 = __importDefault(__webpack_require__(/*! ./DateInput */ "./src/components/inputs/DateInput/index.tsx"));
exports.DateInput = DateInput_1.default;
const FileInput_1 = __importDefault(__webpack_require__(/*! ./FileInput */ "./src/components/inputs/FileInput/index.tsx"));
exports.FileInput = FileInput_1.default;
const FormField_1 = __importDefault(__webpack_require__(/*! ./FormField */ "./src/components/inputs/FormField/index.tsx"));
exports.FormField = FormField_1.default;
const MaskedInput_1 = __importDefault(__webpack_require__(/*! ./MaskedInput */ "./src/components/inputs/MaskedInput/index.tsx"));
exports.MaskedInput = MaskedInput_1.default;
const RangeInput_1 = __importDefault(__webpack_require__(/*! ./RangeInput */ "./src/components/inputs/RangeInput/index.tsx"));
exports.RangeInput = RangeInput_1.default;
const Select_1 = __importDefault(__webpack_require__(/*! ./Select */ "./src/components/inputs/Select/index.tsx"));
exports.Select = Select_1.default;
const SelectMultiple_1 = __importDefault(__webpack_require__(/*! ./SelectMultiple */ "./src/components/inputs/SelectMultiple/index.tsx"));
exports.SelectMultiple = SelectMultiple_1.default;
const StarRating_1 = __importDefault(__webpack_require__(/*! ./StarRating */ "./src/components/inputs/StarRating/index.tsx"));
exports.StarRating = StarRating_1.default;
const TextArea_1 = __importDefault(__webpack_require__(/*! ./TextArea */ "./src/components/inputs/TextArea/index.tsx"));
exports.TextArea = TextArea_1.default;
const TextInput_1 = __importDefault(__webpack_require__(/*! ./TextInput */ "./src/components/inputs/TextInput/index.tsx"));
exports.TextInput = TextInput_1.default;
const ThumbsRating_1 = __importDefault(__webpack_require__(/*! ./ThumbsRating */ "./src/components/inputs/ThumbsRating/index.tsx"));
exports.ThumbsRating = ThumbsRating_1.default;

/***/ },

/***/ "./src/components/layout/Box/Box.tsx"
/*!*******************************************!*\
  !*** ./src/components/layout/Box/Box.tsx ***!
  \*******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedBox = kotii_styled_1.default.div.withConfig({
  componentId: "kt-NzV-zaLv"
})``;
const Box = ({
  testID,
  pad,
  direction,
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedBox, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Box, {
    direction: direction,
    pad: pad,
    ...props
  }, children));
};
exports["default"] = Box;

/***/ },

/***/ "./src/components/layout/Box/index.tsx"
/*!*********************************************!*\
  !*** ./src/components/layout/Box/index.tsx ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Box_1 = __importDefault(__webpack_require__(/*! ./Box */ "./src/components/layout/Box/Box.tsx"));
exports["default"] = Box_1.default;

/***/ },

/***/ "./src/components/layout/Card/Card.tsx"
/*!*********************************************!*\
  !*** ./src/components/layout/Card/Card.tsx ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedCard = kotii_styled_1.default.div.withConfig({
  componentId: "kt-PmJOORm_"
})``;
const Box = ({
  testID = "",
  pad,
  direction,
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedCard, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Card, {
    direction: direction,
    pad: pad,
    ...props
  }, children));
};
exports["default"] = Box;

/***/ },

/***/ "./src/components/layout/Card/index.tsx"
/*!**********************************************!*\
  !*** ./src/components/layout/Card/index.tsx ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Card_1 = __importDefault(__webpack_require__(/*! ./Card */ "./src/components/layout/Card/Card.tsx"));
exports["default"] = Card_1.default;

/***/ },

/***/ "./src/components/layout/Footer/Footer.tsx"
/*!*************************************************!*\
  !*** ./src/components/layout/Footer/Footer.tsx ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedFooter = kotii_styled_1.default.div.withConfig({
  componentId: "kt-6-GfOzvH"
})``;
const Footer = ({
  testID = "",
  pad,
  direction,
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedFooter, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Footer, {
    direction: direction,
    pad: pad,
    ...props
  }, children));
};
exports["default"] = Footer;

/***/ },

/***/ "./src/components/layout/Footer/index.tsx"
/*!************************************************!*\
  !*** ./src/components/layout/Footer/index.tsx ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Footer_1 = __importDefault(__webpack_require__(/*! ./Footer */ "./src/components/layout/Footer/Footer.tsx"));
exports["default"] = Footer_1.default;

/***/ },

/***/ "./src/components/layout/Grid/Grid.tsx"
/*!*********************************************!*\
  !*** ./src/components/layout/Grid/Grid.tsx ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedGrid = kotii_styled_1.default.div.withConfig({
  componentId: "kt-xx3rBKuG"
})``;
const Grid = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedGrid, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Grid, {
    ...props
  }));
};
exports["default"] = Grid;

/***/ },

/***/ "./src/components/layout/Grid/index.tsx"
/*!**********************************************!*\
  !*** ./src/components/layout/Grid/index.tsx ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Grid_1 = __importDefault(__webpack_require__(/*! ./Grid */ "./src/components/layout/Grid/Grid.tsx"));
exports["default"] = Grid_1.default;

/***/ },

/***/ "./src/components/layout/Header/Header.tsx"
/*!*************************************************!*\
  !*** ./src/components/layout/Header/Header.tsx ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const context_1 = __webpack_require__(/*! ../../../context */ "./src/context/index.tsx");
const WrappedHeader = kotii_styled_1.default.div.withConfig({
  componentId: "kt-zYoDUmwi"
})``;
const Header = ({
  pad,
  direction,
  children,
  ...props
}) => {
  return react_1.default.createElement(context_1.KotiiThemeProvider, null, react_1.default.createElement(WrappedHeader, null, react_1.default.createElement(grommet_1.Header, null, children)));
};
exports["default"] = Header;

/***/ },

/***/ "./src/components/layout/Header/index.tsx"
/*!************************************************!*\
  !*** ./src/components/layout/Header/index.tsx ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Header_1 = __importDefault(__webpack_require__(/*! ./Header */ "./src/components/layout/Header/Header.tsx"));
exports["default"] = Header_1.default;

/***/ },

/***/ "./src/components/layout/Main/Main.tsx"
/*!*********************************************!*\
  !*** ./src/components/layout/Main/Main.tsx ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedMain = kotii_styled_1.default.div.withConfig({
  componentId: "kt-oPzubbpo"
})``;
const Grid = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedMain, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Main, {
    ...props
  }));
};
exports["default"] = Grid;

/***/ },

/***/ "./src/components/layout/Main/index.tsx"
/*!**********************************************!*\
  !*** ./src/components/layout/Main/index.tsx ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Main_1 = __importDefault(__webpack_require__(/*! ./Main */ "./src/components/layout/Main/Main.tsx"));
exports["default"] = Main_1.default;

/***/ },

/***/ "./src/components/layout/Overlay/Overlay.tsx"
/*!***************************************************!*\
  !*** ./src/components/layout/Overlay/Overlay.tsx ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedPage = kotii_styled_1.default.div.withConfig({
  componentId: "kt-d0vQTA4Z"
})``;
const Overlay = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedPage, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Layer, {
    ...props
  }));
};
exports["default"] = Overlay;

/***/ },

/***/ "./src/components/layout/Overlay/index.tsx"
/*!*************************************************!*\
  !*** ./src/components/layout/Overlay/index.tsx ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Overlay_1 = __importDefault(__webpack_require__(/*! ./Overlay */ "./src/components/layout/Overlay/Overlay.tsx"));
exports["default"] = Overlay_1.default;

/***/ },

/***/ "./src/components/layout/Page/Page.tsx"
/*!*********************************************!*\
  !*** ./src/components/layout/Page/Page.tsx ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedPage = kotii_styled_1.default.div.withConfig({
  componentId: "kt-YqNL71WC"
})``;
const Page = ({
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedPage, null, react_1.default.createElement(grommet_1.Page, {
    ...props
  }, children));
};
exports["default"] = Page;

/***/ },

/***/ "./src/components/layout/Page/index.tsx"
/*!**********************************************!*\
  !*** ./src/components/layout/Page/index.tsx ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Page_1 = __importDefault(__webpack_require__(/*! ./Page */ "./src/components/layout/Page/Page.tsx"));
exports["default"] = Page_1.default;

/***/ },

/***/ "./src/components/layout/PageContent/PageContent.tsx"
/*!***********************************************************!*\
  !*** ./src/components/layout/PageContent/PageContent.tsx ***!
  \***********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedPageContent = kotii_styled_1.default.div.withConfig({
  componentId: "kt-5M629qIh"
})``;
const PageContent = ({
  testID = "",
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedPageContent, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.PageContent, {
    ...props
  }, children));
};
exports["default"] = PageContent;

/***/ },

/***/ "./src/components/layout/PageContent/index.tsx"
/*!*****************************************************!*\
  !*** ./src/components/layout/PageContent/index.tsx ***!
  \*****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const PageContent_1 = __importDefault(__webpack_require__(/*! ./PageContent */ "./src/components/layout/PageContent/PageContent.tsx"));
exports["default"] = PageContent_1.default;

/***/ },

/***/ "./src/components/layout/PageHeader/PageHeader.tsx"
/*!*********************************************************!*\
  !*** ./src/components/layout/PageHeader/PageHeader.tsx ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedPage = kotii_styled_1.default.div.withConfig({
  componentId: "kt-jXCexe-5"
})``;
const PageHeader = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedPage, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.PageHeader, {
    ...props
  }));
};
exports["default"] = PageHeader;

/***/ },

/***/ "./src/components/layout/PageHeader/index.tsx"
/*!****************************************************!*\
  !*** ./src/components/layout/PageHeader/index.tsx ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const PageHeader_1 = __importDefault(__webpack_require__(/*! ./PageHeader */ "./src/components/layout/PageHeader/PageHeader.tsx"));
exports["default"] = PageHeader_1.default;

/***/ },

/***/ "./src/components/layout/SideBar/SideBar.tsx"
/*!***************************************************!*\
  !*** ./src/components/layout/SideBar/SideBar.tsx ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedSideBar = kotii_styled_1.default.div.withConfig({
  componentId: "kt-Hp6wY_91"
})``;
const SideBar = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedSideBar, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Sidebar, {
    ...props
  }));
};
exports["default"] = SideBar;

/***/ },

/***/ "./src/components/layout/SideBar/index.tsx"
/*!*************************************************!*\
  !*** ./src/components/layout/SideBar/index.tsx ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const SideBar_1 = __importDefault(__webpack_require__(/*! ./SideBar */ "./src/components/layout/SideBar/SideBar.tsx"));
exports["default"] = SideBar_1.default;

/***/ },

/***/ "./src/components/layout/Stack/Stack.tsx"
/*!***********************************************!*\
  !*** ./src/components/layout/Stack/Stack.tsx ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedStack = kotii_styled_1.default.div.withConfig({
  componentId: "kt-KxnzUsph"
})``;
const Stack = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedStack, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Stack, {
    ...props
  }));
};
exports["default"] = Stack;

/***/ },

/***/ "./src/components/layout/Stack/index.tsx"
/*!***********************************************!*\
  !*** ./src/components/layout/Stack/index.tsx ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Stack_1 = __importDefault(__webpack_require__(/*! ./Stack */ "./src/components/layout/Stack/Stack.tsx"));
exports["default"] = Stack_1.default;

/***/ },

/***/ "./src/components/layout/index.tsx"
/*!*****************************************!*\
  !*** ./src/components/layout/index.tsx ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Grid = exports.Overlay = exports.Stack = exports.Main = exports.SideBar = exports.PageHeader = exports.PageContent = exports.Page = exports.Footer = exports.Header = exports.Card = exports.Box = void 0;
const Box_1 = __importDefault(__webpack_require__(/*! ./Box */ "./src/components/layout/Box/index.tsx"));
exports.Box = Box_1.default;
const Card_1 = __importDefault(__webpack_require__(/*! ./Card */ "./src/components/layout/Card/index.tsx"));
exports.Card = Card_1.default;
const Footer_1 = __importDefault(__webpack_require__(/*! ./Footer */ "./src/components/layout/Footer/index.tsx"));
exports.Footer = Footer_1.default;
const Grid_1 = __importDefault(__webpack_require__(/*! ./Grid */ "./src/components/layout/Grid/index.tsx"));
exports.Grid = Grid_1.default;
const Header_1 = __importDefault(__webpack_require__(/*! ./Header */ "./src/components/layout/Header/index.tsx"));
exports.Header = Header_1.default;
const Main_1 = __importDefault(__webpack_require__(/*! ./Main */ "./src/components/layout/Main/index.tsx"));
exports.Main = Main_1.default;
const Overlay_1 = __importDefault(__webpack_require__(/*! ./Overlay */ "./src/components/layout/Overlay/index.tsx"));
exports.Overlay = Overlay_1.default;
const Page_1 = __importDefault(__webpack_require__(/*! ./Page */ "./src/components/layout/Page/index.tsx"));
exports.Page = Page_1.default;
const PageContent_1 = __importDefault(__webpack_require__(/*! ./PageContent */ "./src/components/layout/PageContent/index.tsx"));
exports.PageContent = PageContent_1.default;
const PageHeader_1 = __importDefault(__webpack_require__(/*! ./PageHeader */ "./src/components/layout/PageHeader/index.tsx"));
exports.PageHeader = PageHeader_1.default;
const SideBar_1 = __importDefault(__webpack_require__(/*! ./SideBar */ "./src/components/layout/SideBar/index.tsx"));
exports.SideBar = SideBar_1.default;
const Stack_1 = __importDefault(__webpack_require__(/*! ./Stack */ "./src/components/layout/Stack/index.tsx"));
exports.Stack = Stack_1.default;

/***/ },

/***/ "./src/components/media/Carousel/Carousel.tsx"
/*!****************************************************!*\
  !*** ./src/components/media/Carousel/Carousel.tsx ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedCarousel = kotii_styled_1.default.div.withConfig({
  componentId: "kt-Ok6HVyEv"
})``;
const Carousel = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedCarousel, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Carousel, {
    ...props
  }));
};
exports["default"] = Carousel;

/***/ },

/***/ "./src/components/media/Carousel/index.tsx"
/*!*************************************************!*\
  !*** ./src/components/media/Carousel/index.tsx ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Carousel_1 = __importDefault(__webpack_require__(/*! ./Carousel */ "./src/components/media/Carousel/Carousel.tsx"));
exports["default"] = Carousel_1.default;

/***/ },

/***/ "./src/components/media/Image/Image.tsx"
/*!**********************************************!*\
  !*** ./src/components/media/Image/Image.tsx ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedImage = kotii_styled_1.default.div.withConfig({
  componentId: "kt-bhEV0_jE"
})``;
const Image = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedImage, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Image, {
    ...props
  }));
};
exports["default"] = Image;

/***/ },

/***/ "./src/components/media/Image/index.tsx"
/*!**********************************************!*\
  !*** ./src/components/media/Image/index.tsx ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Image_1 = __importDefault(__webpack_require__(/*! ./Image */ "./src/components/media/Image/Image.tsx"));
exports["default"] = Image_1.default;

/***/ },

/***/ "./src/components/media/Svg/Svg.tsx"
/*!******************************************!*\
  !*** ./src/components/media/Svg/Svg.tsx ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedSvg = kotii_styled_1.default.div.withConfig({
  componentId: "kt-HwvIDD9I"
})``;
const Svg = ({
  testID = "",
  src,
  inline = false,
  asComponent,
  ...props
}) => {
  return react_1.default.createElement(WrappedSvg, {
    "data-testid": testID
  }, inline && asComponent ? asComponent : null);
};
exports["default"] = Svg;

/***/ },

/***/ "./src/components/media/Svg/index.tsx"
/*!********************************************!*\
  !*** ./src/components/media/Svg/index.tsx ***!
  \********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Svg_1 = __importDefault(__webpack_require__(/*! ./Svg */ "./src/components/media/Svg/Svg.tsx"));
exports["default"] = Svg_1.default;

/***/ },

/***/ "./src/components/media/Video/Video.tsx"
/*!**********************************************!*\
  !*** ./src/components/media/Video/Video.tsx ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedVideo = kotii_styled_1.default.div.withConfig({
  componentId: "kt-stQlFwCb"
})``;
const Video = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedVideo, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Video, {
    ...props
  }));
};
exports["default"] = Video;

/***/ },

/***/ "./src/components/media/Video/index.tsx"
/*!**********************************************!*\
  !*** ./src/components/media/Video/index.tsx ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Video_1 = __importDefault(__webpack_require__(/*! ./Video */ "./src/components/media/Video/Video.tsx"));
exports["default"] = Video_1.default;

/***/ },

/***/ "./src/components/media/index.tsx"
/*!****************************************!*\
  !*** ./src/components/media/index.tsx ***!
  \****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Svg = exports.Video = exports.Image = exports.Carousel = void 0;
const Carousel_1 = __importDefault(__webpack_require__(/*! ./Carousel */ "./src/components/media/Carousel/index.tsx"));
exports.Carousel = Carousel_1.default;
const Image_1 = __importDefault(__webpack_require__(/*! ./Image */ "./src/components/media/Image/index.tsx"));
exports.Image = Image_1.default;
const Svg_1 = __importDefault(__webpack_require__(/*! ./Svg */ "./src/components/media/Svg/index.tsx"));
exports.Svg = Svg_1.default;
const Video_1 = __importDefault(__webpack_require__(/*! ./Video */ "./src/components/media/Video/index.tsx"));
exports.Video = Video_1.default;

/***/ },

/***/ "./src/components/shapes/Circle/Cicle.tsx"
/*!************************************************!*\
  !*** ./src/components/shapes/Circle/Cicle.tsx ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const context_1 = __webpack_require__(/*! ../../../context/ */ "./src/context/index.tsx");
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/components/shapes/helpers.ts");
const StyledCircle = (0, kotii_styled_1.default)("div").withConfig({
  componentId: "kt-UDyfmIRJ"
})(props => {
  const styles = (0, helpers_1.createJSCSSSchema)(props, "circle");
  console.log("The SHAPE STYLES", styles);
  return {
    ...styles
  };
});
const Circle = ({
  testID = "",
  name,
  children,
  ...props
}) => {
  const {
    theme,
    themes,
    changeTheme,
    themeMode = "dark"
  } = (0, context_1.useKotiiTheme)();
  const newProps = {
    ...props,
    themeMode
  };
  return react_1.default.createElement(StyledCircle, {
    ...newProps,
    theme: theme,
    "data-testid": testID
  }, children ? children : null);
};
exports["default"] = Circle;

/***/ },

/***/ "./src/components/shapes/Circle/index.tsx"
/*!************************************************!*\
  !*** ./src/components/shapes/Circle/index.tsx ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Cicle_1 = __importDefault(__webpack_require__(/*! ./Cicle */ "./src/components/shapes/Circle/Cicle.tsx"));
exports["default"] = Cicle_1.default;

/***/ },

/***/ "./src/components/shapes/Oval/Oval.tsx"
/*!*********************************************!*\
  !*** ./src/components/shapes/Oval/Oval.tsx ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const context_1 = __webpack_require__(/*! ../../../context */ "./src/context/index.tsx");
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/components/shapes/helpers.ts");
const StyledShape = (0, kotii_styled_1.default)("div").withConfig({
  componentId: "kt-ZR26rWgJ"
})(props => {
  const styles = (0, helpers_1.createJSCSSSchema)(props, "oval");
  console.log("The SHAPE STYLES:Rectangle", styles);
  return {
    ...styles
  };
});
const Oval = ({
  testID = "",
  name,
  children,
  ...props
}) => {
  const {
    theme,
    themes,
    changeTheme,
    themeMode = "dark"
  } = (0, context_1.useKotiiTheme)();
  const newProps = {
    ...props,
    themeMode
  };
  return react_1.default.createElement(StyledShape, {
    ...newProps,
    theme: theme,
    "data-testid": testID
  }, children ? children : null);
};
exports["default"] = Oval;

/***/ },

/***/ "./src/components/shapes/Oval/index.tsx"
/*!**********************************************!*\
  !*** ./src/components/shapes/Oval/index.tsx ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Oval_1 = __importDefault(__webpack_require__(/*! ./Oval */ "./src/components/shapes/Oval/Oval.tsx"));
exports["default"] = Oval_1.default;

/***/ },

/***/ "./src/components/shapes/Rectangle/Rectangle.tsx"
/*!*******************************************************!*\
  !*** ./src/components/shapes/Rectangle/Rectangle.tsx ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const context_1 = __webpack_require__(/*! ../../../context */ "./src/context/index.tsx");
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/components/shapes/helpers.ts");
const StyledShape = (0, kotii_styled_1.default)("div").withConfig({
  componentId: "kt-Na6WGImv"
})(props => {
  const styles = (0, helpers_1.createJSCSSSchema)(props, "rectangle");
  console.log("The SHAPE STYLES:Rectangle", styles);
  return {
    ...styles
  };
});
const Rectangle = ({
  testID = "",
  name,
  children,
  ...props
}) => {
  const {
    theme,
    themes,
    changeTheme,
    themeMode = "dark"
  } = (0, context_1.useKotiiTheme)();
  const newProps = {
    ...props,
    themeMode
  };
  return react_1.default.createElement(StyledShape, {
    ...newProps,
    theme: theme,
    "data-testid": testID
  }, children ? children : null);
};
exports["default"] = Rectangle;

/***/ },

/***/ "./src/components/shapes/Rectangle/index.tsx"
/*!***************************************************!*\
  !*** ./src/components/shapes/Rectangle/index.tsx ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Rectangle_1 = __importDefault(__webpack_require__(/*! ./Rectangle */ "./src/components/shapes/Rectangle/Rectangle.tsx"));
exports["default"] = Rectangle_1.default;

/***/ },

/***/ "./src/components/shapes/Shape/Shape.tsx"
/*!***********************************************!*\
  !*** ./src/components/shapes/Shape/Shape.tsx ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const context_1 = __webpack_require__(/*! ../../../context/ */ "./src/context/index.tsx");
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/components/shapes/helpers.ts");
const StyledShape = (0, kotii_styled_1.default)("div")(props => {
  console.log("The PROPS", props);
  const shapeName = props?.name || "shape";
  const styles = (0, helpers_1.createJSCSSSchema)(props, "clip-path", shapeName);
  console.log("The SHAPE STYLES", styles);
  return {
    ...styles
  };
});
const Shape = ({
  testID = "",
  children,
  name,
  ...props
}) => {
  const {
    theme,
    themes,
    changeTheme,
    themeMode = "dark"
  } = (0, context_1.useKotiiTheme)();
  const newProps = {
    ...props,
    themeMode
  };
  console.log("ChangeThemeMode", changeTheme);
  return react_1.default.createElement(StyledShape, {
    ...newProps,
    theme: theme,
    name: name,
    "data-testid": testID
  }, children ? children : null);
};
exports["default"] = Shape;

/***/ },

/***/ "./src/components/shapes/Shape/index.tsx"
/*!***********************************************!*\
  !*** ./src/components/shapes/Shape/index.tsx ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Shape_1 = __importDefault(__webpack_require__(/*! ./Shape */ "./src/components/shapes/Shape/Shape.tsx"));
exports["default"] = Shape_1.default;

/***/ },

/***/ "./src/components/shapes/Square/Square.tsx"
/*!*************************************************!*\
  !*** ./src/components/shapes/Square/Square.tsx ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const context_1 = __webpack_require__(/*! ../../../context/ */ "./src/context/index.tsx");
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/components/shapes/helpers.ts");
const StyledSquare = (0, kotii_styled_1.default)("div").withConfig({
  componentId: "kt-Neuugkdv"
})(props => {
  console.log("The PROPS", props);
  const styles = (0, helpers_1.createJSCSSSchema)(props, "square");
  console.log("The SHAPE STYLES", styles);
  return {
    ...styles
  };
});
const Square = ({
  children,
  testID,
  ...props
}) => {
  const {
    theme,
    themes,
    changeTheme,
    themeMode = "dark"
  } = (0, context_1.useKotiiTheme)();
  const newProps = {
    ...props,
    themeMode
  };
  console.log("ChangeThemeMode", changeTheme);
  return react_1.default.createElement(StyledSquare, {
    ...newProps,
    theme: theme,
    "data-testid": testID
  }, children ? children : null);
};
exports["default"] = Square;

/***/ },

/***/ "./src/components/shapes/Square/index.tsx"
/*!************************************************!*\
  !*** ./src/components/shapes/Square/index.tsx ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Square_1 = __importDefault(__webpack_require__(/*! ./Square */ "./src/components/shapes/Square/Square.tsx"));
exports["default"] = Square_1.default;

/***/ },

/***/ "./src/components/shapes/constants.ts"
/*!********************************************!*\
  !*** ./src/components/shapes/constants.ts ***!
  \********************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SHAPE_SIZES = exports.SHAPES_COLOR = void 0;
const SHAPES_COLOR = "red";
exports.SHAPES_COLOR = SHAPES_COLOR;
const SHAPE_SIZES = ["xxsmall", "xsmall", "small", "medium", "large", "xlarge"];
exports.SHAPE_SIZES = SHAPE_SIZES;

/***/ },

/***/ "./src/components/shapes/error_messages.ts"
/*!*************************************************!*\
  !*** ./src/components/shapes/error_messages.ts ***!
  \*************************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.value_format_unrecognised = exports.string_value_constant = exports.property_is_not_supported = exports.dimensions_mismatch = void 0;
const dimensions_mismatch = "Width and height should be the same for a Square Shape, please check width and height props passed to Square component";
exports.dimensions_mismatch = dimensions_mismatch;
const property_is_not_supported = "property is not supported for the specified item";
exports.property_is_not_supported = property_is_not_supported;
const string_value_constant = "Property value is not valid";
exports.string_value_constant = string_value_constant;
const value_format_unrecognised = "The specified value is not recognised";
exports.value_format_unrecognised = value_format_unrecognised;

/***/ },

/***/ "./src/components/shapes/helpers.ts"
/*!******************************************!*\
  !*** ./src/components/shapes/helpers.ts ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createJSCSSSchema = void 0;
const background_1 = __webpack_require__(/*! ./utils/background */ "./src/components/shapes/utils/background.ts");
const border_1 = __webpack_require__(/*! ./utils/border */ "./src/components/shapes/utils/border.ts");
const shapes_1 = __webpack_require__(/*! ./utils/shapes */ "./src/components/shapes/utils/shapes.ts");
const width_1 = __webpack_require__(/*! ./utils/width */ "./src/components/shapes/utils/width.ts");
const createJSCSSSchema = (props, shape, clipShape = "") => {
  console.log("The passed props", props);
  console.log("KOTIITHEME PROVIDER;;;", props?.theme?.global?.colors);
  let themeMode = props?.themeMode;
  let size = props?.size ? props.size : null;
  let widthHeight = (0, width_1.doWidthHeight)(props, shape, size);
  let border = (0, border_1.doBorder)(props, shape, themeMode);
  let background = (0, background_1.doBackground)(props, shape, themeMode);
  let clippedShape = clipShape ? (0, shapes_1.doClippedShapes)(props, clipShape, themeMode) : {};
  console.log("the Widthand the HEIGHT;;;", widthHeight);
  return {
    backgroundColor: background,
    ...widthHeight,
    ...border,
    ...clippedShape
  };
};
exports.createJSCSSSchema = createJSCSSSchema;

/***/ },

/***/ "./src/components/shapes/index.tsx"
/*!*****************************************!*\
  !*** ./src/components/shapes/index.tsx ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Shape = exports.Oval = exports.Rectangle = exports.Circle = exports.Square = void 0;
const Circle_1 = __importDefault(__webpack_require__(/*! ./Circle */ "./src/components/shapes/Circle/index.tsx"));
exports.Circle = Circle_1.default;
const Oval_1 = __importDefault(__webpack_require__(/*! ./Oval */ "./src/components/shapes/Oval/index.tsx"));
exports.Oval = Oval_1.default;
const Rectangle_1 = __importDefault(__webpack_require__(/*! ./Rectangle */ "./src/components/shapes/Rectangle/index.tsx"));
exports.Rectangle = Rectangle_1.default;
const Shape_1 = __importDefault(__webpack_require__(/*! ./Shape */ "./src/components/shapes/Shape/index.tsx"));
exports.Shape = Shape_1.default;
const Square_1 = __importDefault(__webpack_require__(/*! ./Square */ "./src/components/shapes/Square/index.tsx"));
exports.Square = Square_1.default;

/***/ },

/***/ "./src/components/shapes/patterns.tsx"
/*!********************************************!*\
  !*** ./src/components/shapes/patterns.tsx ***!
  \********************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.string_check_pattern = exports.split_string_by_space = exports.number_check_pattern = void 0;
const number_check_pattern = /^\d+$/;
exports.number_check_pattern = number_check_pattern;
const split_string_by_space = /\s/g;
exports.split_string_by_space = split_string_by_space;
const string_check_pattern = /\D*/;
exports.string_check_pattern = string_check_pattern;

/***/ },

/***/ "./src/components/shapes/utils/background.ts"
/*!***************************************************!*\
  !*** ./src/components/shapes/utils/background.ts ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.doBackground = void 0;
const ekstractors_1 = __webpack_require__(/*! ./ekstractors */ "./src/components/shapes/utils/ekstractors.ts");
const getters_1 = __webpack_require__(/*! ./getters */ "./src/components/shapes/utils/getters.ts");
const checkBackground = (colors, background, themeMode) => {
  let backgroundName = colors[background.toLowerCase()] || null;
  console.log("theBackgroundBefore;;;", background);
  console.log("The background", colors[background.toLowerCase()]);
  console.log("backgroundName", backgroundName);
  if (!backgroundName) return background;
  if (typeof backgroundName === "object") {
    if (themeMode === "dark" || themeMode === "light") {
      console.log("themeMODE IS dark or light");
      background = backgroundName[themeMode];
    } else {
      background = background;
    }
  } else {
    console.log("themeBackgroun is a string");
    background = backgroundName;
  }
  console.log("The Background After;;;", background);
  return background;
};
const doBackground = (props, shape, themeMode) => {
  let background = (0, ekstractors_1.extractProperty)("background", props) || (0, getters_1.getDefaultValue)("background");
  let themeColors = (0, getters_1.getVendorThemeProps)(props, "colors");
  background = themeColors ? checkBackground(themeColors, background, themeMode) : background;
  return background;
};
exports.doBackground = doBackground;

/***/ },

/***/ "./src/components/shapes/utils/border.ts"
/*!***********************************************!*\
  !*** ./src/components/shapes/utils/border.ts ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.borderByString = exports.doBorder = void 0;
const patterns_1 = __webpack_require__(/*! ../patterns */ "./src/components/shapes/patterns.tsx");
const colors_1 = __importDefault(__webpack_require__(/*! ./colors */ "./src/components/shapes/utils/colors.ts"));
const defaults_1 = __webpack_require__(/*! ./defaults */ "./src/components/shapes/utils/defaults.ts");
const ekstractors_1 = __webpack_require__(/*! ./ekstractors */ "./src/components/shapes/utils/ekstractors.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/components/shapes/utils/utils.ts");
const doBorder = (props, shape, themeMODE) => {
  let border = (0, ekstractors_1.extractProperty)("border", props);
  console.log("THE BORDER", props);
  console.log("THE BORDER EXTRACTED;;;", border);
  const {
    border: defaultBorder
  } = defaults_1.defaultValues;
  const {
    width: borderWidth
  } = defaultBorder;
  if (!border) return {};
  let splitBorder = splitBorderString(border, patterns_1.split_string_by_space);
  let rawBorder = borderWidth[splitBorder[0]] || splitBorder[0];
  console.log("TheRawBorder;;;", rawBorder);
  let numericeBorder = rawBorder ? setMeasurementUnit(rawBorder, "px") : 0;
  console.log("THE NUMERIC BORDER;;;", numericeBorder);
  let textOrNumericBorder = rawBorder ? rawBorder : numericeBorder;
  console.log("BORDER SPLIT", splitBorder);
  if (textOrNumericBorder) {
    let handledBorder = handleBorder(splitBorder, defaults_1.defaultValues.border, numericeBorder);
    console.log("handleBorder;;;", handledBorder);
    return handledBorder;
  }
  return {
    border
  };
};
exports.doBorder = doBorder;
const borderByString = borderString => {
  const {
    border
  } = defaults_1.defaultValues;
  const {
    width
  } = border;
  const setBorder = width[borderString] || "";
  if (setBorder) {
    if (setBorder === "none") return setBorder;
  }
  return {
    border
  };
};
exports.borderByString = borderByString;
const splitBorderString = (borderString, splitBy) => {
  return borderString.trim().split(splitBy);
};
const handleBorder = (borderDict, defaultBorder, setBorder) => {
  console.log("BorderDictionary", borderDict);
  console.log("BorderDictionary", borderDict[2]);
  console.log("BorderDictionary", colors_1.default[borderDict[2]]);
  console.log("BorderDictionary", colors_1.default);
  let {
    lines,
    color
  } = defaultBorder;
  let borderWidth = setBorder;
  let borderStyle = borderDict[1] ? lines[borderDict[1]] : lines?.solid;
  let borderColor = borderDict[2] ? borderDict[2] : color;
  let borderLen = borderDict.length;
  let sides = borderLen > 3 ? borderDict.slice(3, borderLen) : [];
  let borderSides = {};
  sides ? sides.map((item, i) => {
    let splitBorderSide = splitBorderString(item, ":");
    let isVerticalOrHorizontal = splitBorderSide[0] === "vertical" ? ["top", "bottom"] : splitBorderSide[0] === "horizontal" ? ["left", "right"] : [];
    console.log("SPLIT:BORDER", splitBorderSide);
    let firstItemSplit = isVerticalOrHorizontal.length > 0 ? isVerticalOrHorizontal : splitBorderString(splitBorderSide[0], "-");
    console.log("FIRSTITEM:", firstItemSplit);
    firstItemSplit.length > 1 ? firstItemSplit.map((bSide, i) => {
      handleBorderSides(borderSides, bSide, `${splitBorderSide[1]}`);
    }) : handleBorderSides(borderSides, splitBorderSide[0], splitBorderSide[1]);
  }) : "";
  return {
    borderWidth,
    borderStyle,
    borderColor,
    ...borderSides
  };
};
const setMeasurementUnit = (target, unit = "px") => {
  if (patterns_1.number_check_pattern.test(target)) {
    return `${target}${unit}`;
  } else {
    return target;
  }
};
const handleBorderSides = (ob, borderSide, borderSideItems) => {
  let splitBorderSideValues = splitBorderString(borderSideItems, "-");
  let borderSideWidth = splitBorderSideValues[0];
  let borderSideStyle = splitBorderSideValues[1];
  let borderSideColor = splitBorderSideValues[2];
  ob[`border${(0, utils_1.capitalizeFirstLetter)(borderSide)}`] = `${setMeasurementUnit(borderSideWidth)} ${borderSideStyle} ${borderSideColor}`;
  return ob;
};

/***/ },

/***/ "./src/components/shapes/utils/checkers.ts"
/*!*************************************************!*\
  !*** ./src/components/shapes/utils/checkers.ts ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function () {
  var ownKeys = function (o) {
    ownKeys = Object.getOwnPropertyNames || function (o) {
      var ar = [];
      for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
      return ar;
    };
    return ownKeys(o);
  };
  return function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    __setModuleDefault(result, mod);
    return result;
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkPropertyValue = void 0;
const constants_1 = __webpack_require__(/*! ../constants */ "./src/components/shapes/constants.ts");
const ERORR_MESSAGES = __importStar(__webpack_require__(/*! ../error_messages */ "./src/components/shapes/error_messages.ts"));
const patterns_1 = __webpack_require__(/*! ../patterns */ "./src/components/shapes/patterns.tsx");
const getters_1 = __webpack_require__(/*! ./getters */ "./src/components/shapes/utils/getters.ts");
const checkPropertyValue = (propertyKey, value) => {
  console.log("The PropertycheckValue;;;", value);
  console.log("THePROPER KEY;;", propertyKey);
  console.log("TheTypeoF propertyValue;;;", patterns_1.number_check_pattern.test(value));
  console.log("SHAPE SIZES;;;", constants_1.SHAPE_SIZES);
  console.log("SHAPE SIZES INCLUDES", constants_1.SHAPE_SIZES.includes(value));
  if (!value) return value;
  if (patterns_1.number_check_pattern.test(value)) return value;
  if (typeof value === "string") {
    if (constants_1.SHAPE_SIZES.includes(value)) return (0, getters_1.getDefaultValue)(propertyKey, false, value.toLowerCase());
    throw new Error(ERORR_MESSAGES.string_value_constant);
  }
  throw new Error(ERORR_MESSAGES.value_format_unrecognised);
};
exports.checkPropertyValue = checkPropertyValue;

/***/ },

/***/ "./src/components/shapes/utils/colors.ts"
/*!***********************************************!*\
  !*** ./src/components/shapes/utils/colors.ts ***!
  \***********************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = [`aliceblue`, `antiquewhite`, `aqua`, `aquamarine`, `azure`, `beige`, `bisque`, `black`, `blanchedalmond`, `blue`, `blueviolet`, `brown`, `burlywood`, `cadetblue`, `chartreuse`, `chocolate`, `coral`, `cornflowerblue`, `cornsilk`, `crimson`, `cyan`, `darkblue`, `darkcyan`, `darkgoldenrod`, `darkgray`, `darkgrey`, `darkgreen`, `darkkhaki`, `darkmagenta`, `darkolivegreen`, `darkorange`, `darkorchid`, `darkred`, `darksalmon`, `darkseagreen`, `darkslateblue`, `darkslategray`, `darkslategrey`, `darkturquoise`, `darkviolet`, `deeppink`, `deepskyblue`, `dimgray`, `dimgrey`, `dodgerblue`, `firebrick`, `floralwhite`, `forestgreen`, `fuchsia`, `gainsboro`, `ghostwhite`, `gold`, `goldenrod`, `gray`, `grey`, `green`, `greenyellow`, `honeydew`, `hotpink`, `indianred`, `indigo`, `ivory`, `khaki`, `lavender`, `lavenderblush`, `lawngreen`, `lemonchiffon`, `lightblue`, `lightcoral`, `lightcyan`, `lightgoldenrodyellow`, `lightgray`, `lightgrey`, `lightgreen`, `lightpink`, `lightsalmon`, `lightseagreen`, `lightskyblue`, `lightslategray`, `lightslategrey`, `lightsteelblue`, `lightyellow`, `lime`, `limegreen`, `linen`, `magenta`, `maroon`, `mediumaquamarine`, `mediumblue`, `mediumorchid`, `mediumpurple`, `mediumseagreen`, `mediumslateblue`, `mediumspringgreen`, `mediumturquoise`, `mediumvioletred`, `midnightblue`, `mintcream`, `mistyrose`, `moccasin`, `navajowhite`, `navy`, `oldlace`, `olive`, `olivedrab`, `orange`, `orangered`, `orchid`, `palegoldenrod`, `palegreen`, `paleturquoise`, `palevioletred`, `papayawhip`, `peachpuff`, `peru`, `pink`, `plum`, `powderblue`, `purple`, `red`, `rosybrown`, `royalblue`, `saddlebrown`, `salmon`, `sandybrown`, `seagreen`, `seashell`, `sienna`, `silver`, `skyblue`, `slateblue`, `slategray`, `slategrey`, `snow`, `springgreen`, `steelblue`, `tan`, `teal`, `thistle`, `tomato`, `turquoise`, `violet`, `wheat`, `white`, `whitesmoke`, `yellow`, `yellowgreen`];

/***/ },

/***/ "./src/components/shapes/utils/defaults.ts"
/*!*************************************************!*\
  !*** ./src/components/shapes/utils/defaults.ts ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultValues = void 0;
const constants_1 = __webpack_require__(/*! ../constants */ "./src/components/shapes/constants.ts");
const sizes = {
  xxsmall: 25,
  xsmall: 50,
  small: 100,
  medium: 300,
  large: 400,
  xlarge: 500,
  xxlarge: 600
};
const BORDER_SIZES = {
  none: 0,
  xxsmall: 1,
  xsmall: 1.5,
  small: 2,
  medium: 2.5,
  large: 3,
  xlarge: 3.5,
  xxlarge: 4
};
const BORDER_LINES = {
  solid: "solid",
  dotted: "dotted",
  dashed: "dashed",
  groove: "groove",
  ridge: "ridge",
  inset: "inset",
  double: "double",
  hidden: "hidden"
};
exports.defaultValues = {
  width: {
    numeric: 100,
    string: sizes
  },
  height: {
    numeric: 100,
    string: sizes
  },
  background: constants_1.SHAPES_COLOR,
  border: {
    width: BORDER_SIZES,
    color: constants_1.SHAPES_COLOR,
    lines: BORDER_LINES
  }
};

/***/ },

/***/ "./src/components/shapes/utils/ekstractors.ts"
/*!****************************************************!*\
  !*** ./src/components/shapes/utils/ekstractors.ts ***!
  \****************************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.extractProperty = void 0;
const extractProperty = (propertyKey, propertySource) => {
  return propertySource[propertyKey] ? propertySource[propertyKey] : false;
};
exports.extractProperty = extractProperty;

/***/ },

/***/ "./src/components/shapes/utils/getters.ts"
/*!************************************************!*\
  !*** ./src/components/shapes/utils/getters.ts ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function () {
  var ownKeys = function (o) {
    ownKeys = Object.getOwnPropertyNames || function (o) {
      var ar = [];
      for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
      return ar;
    };
    return ownKeys(o);
  };
  return function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    __setModuleDefault(result, mod);
    return result;
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getVendorThemeProps = exports.getDefaultValue = void 0;
const ERORR_MESSAGES = __importStar(__webpack_require__(/*! ../error_messages */ "./src/components/shapes/error_messages.ts"));
const defaults_1 = __webpack_require__(/*! ./defaults */ "./src/components/shapes/utils/defaults.ts");
const getDefaultValue = (proKey, isNumeric = false, text = "") => {
  console.log("getDefaultValue;;;", proKey, isNumeric, text);
  if (defaults_1.defaultValues[proKey]) {
    if (isNumeric) return defaults_1.defaultValues[proKey]["numeric"];
    if (!text) return defaults_1.defaultValues[proKey];
    console.log("Value to be returned string;;;", defaults_1.defaultValues[proKey]["string"][text]);
    return defaults_1.defaultValues[proKey]["string"][text];
  }
  throw new Error(ERORR_MESSAGES.property_is_not_supported);
};
exports.getDefaultValue = getDefaultValue;
const getVendorThemeProps = (themeProps, prop) => {
  return themeProps?.theme?.global[prop] ? themeProps?.theme?.global[prop] : null;
};
exports.getVendorThemeProps = getVendorThemeProps;

/***/ },

/***/ "./src/components/shapes/utils/shape_clips.ts"
/*!****************************************************!*\
  !*** ./src/components/shapes/utils/shape_clips.ts ***!
  \****************************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shapeClips = void 0;
const shapeClips = {
  triangle: `polygon(50% 0%, 0% 100%, 100% 100%)`,
  trapezoid: `polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);`,
  parallelogram: `polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);`,
  rhombus: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);`,
  pentagon: `polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)`,
  hexagon: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`,
  heptagon: `polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)`,
  octagon: `polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);`,
  nonagon: `polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);`,
  decagon: `polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);`,
  bevel: `polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);`,
  rabbet: `polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);`,
  circle: `circle(50% at 50% 50%);`,
  ellipse: `ellipse(25% 40% at 50% 50%);`,
  star: `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`,
  qua: `circle(80px at top right);`
};
exports.shapeClips = shapeClips;

/***/ },

/***/ "./src/components/shapes/utils/shapes.ts"
/*!***********************************************!*\
  !*** ./src/components/shapes/utils/shapes.ts ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.doClippedShapes = exports.clipPathWidthHeight = exports.ovalWidthHeight = exports.rectangleWidthHeight = exports.circleWidthHeight = exports.squareWidthHeight = void 0;
const getters_1 = __webpack_require__(/*! ./getters */ "./src/components/shapes/utils/getters.ts");
const shape_clips_1 = __webpack_require__(/*! ./shape_clips */ "./src/components/shapes/utils/shape_clips.ts");
const BORDER_RADIUS = "50%";
const squareWidthHeight = (width, height, shape) => {
  if (!width && !height) return {
    width: (0, getters_1.getDefaultValue)("width", true),
    height: (0, getters_1.getDefaultValue)("height", true)
  };
  if (!width) return {
    width: height,
    height
  };
  if (!height) return {
    width,
    height: width
  };
  return {
    width,
    height
  };
};
exports.squareWidthHeight = squareWidthHeight;
const circleWidthHeight = (width, height, shape) => {
  let borderRadius = BORDER_RADIUS;
  if (!width && !height) return {
    width: (0, getters_1.getDefaultValue)("width", true),
    height: (0, getters_1.getDefaultValue)("height", true),
    borderRadius
  };
  if (!width) return {
    width: height,
    height,
    borderRadius
  };
  if (!height) return {
    width,
    height: width,
    borderRadius
  };
  return {
    width,
    height,
    borderRadius
  };
};
exports.circleWidthHeight = circleWidthHeight;
const rectangleWidthHeight = (width, height, shape) => {
  if (!width && !height) return {
    width: (0, getters_1.getDefaultValue)("width", true),
    height: (0, getters_1.getDefaultValue)("width", true) / 2
  };
  if (!width) return {
    width: height,
    height: height / 2
  };
  if (!height) return {
    width,
    height: width / 2
  };
  return {
    width,
    height: height / 2
  };
};
exports.rectangleWidthHeight = rectangleWidthHeight;
const ovalWidthHeight = (width, height, shape) => {
  if (!width && !height) {
    let width = (0, getters_1.getDefaultValue)("width", true);
    let height = width / 2;
    let borderRadius = BORDER_RADIUS;
    return {
      width,
      height,
      borderRadius
    };
  }
  if (!width) return {
    width: height,
    height: height / 2
  };
  if (!height) return {
    width,
    height: width / 2
  };
  return {
    width,
    height: height / 2
  };
};
exports.ovalWidthHeight = ovalWidthHeight;
const clipPathWidthHeight = (width, height, shape) => {
  if (!width && !height) return {
    width: (0, getters_1.getDefaultValue)("width", true),
    height: (0, getters_1.getDefaultValue)("height", true)
  };
  if (!width) return {
    width: height,
    height
  };
  if (!height) return {
    width,
    height: width
  };
  return {
    width,
    height
  };
};
exports.clipPathWidthHeight = clipPathWidthHeight;
const doClippedShapes = (props, shape, themeMode) => {
  if (!shape_clips_1.shapeClips[shape]) return {};
  let flexLayout = doClippedShapesContentPositioning();
  return {
    clipPath: shape_clips_1.shapeClips[shape],
    ...flexLayout
  };
};
exports.doClippedShapes = doClippedShapes;
const doClippedShapesContentPositioning = () => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };
};

/***/ },

/***/ "./src/components/shapes/utils/utils.ts"
/*!**********************************************!*\
  !*** ./src/components/shapes/utils/utils.ts ***!
  \**********************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.capitalizeFirstLetter = void 0;
const capitalizeFirstLetter = (text, shouldLowerCase = false) => {
  console.log("The text Uppercasing;;;", text);
  let casedString = shouldLowerCase ? text.toLowerCase() : text;
  return `${casedString.slice(0, 1).toUpperCase()}${casedString.slice(1)}`;
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;

/***/ },

/***/ "./src/components/shapes/utils/width.ts"
/*!**********************************************!*\
  !*** ./src/components/shapes/utils/width.ts ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.doWidthHeight = void 0;
const checkers_1 = __webpack_require__(/*! ./checkers */ "./src/components/shapes/utils/checkers.ts");
const ekstractors_1 = __webpack_require__(/*! ./ekstractors */ "./src/components/shapes/utils/ekstractors.ts");
const shapes_1 = __webpack_require__(/*! ./shapes */ "./src/components/shapes/utils/shapes.ts");
const doWidthHeight = (props, shape, size) => {
  size ? props["width"] = size : null;
  let width = (0, checkers_1.checkPropertyValue)("width", (0, ekstractors_1.extractProperty)("width", props));
  let height = (0, checkers_1.checkPropertyValue)("height", (0, ekstractors_1.extractProperty)("height", props));
  console.log("doWidthAndHeight;;;", width, height);
  console.log("The SHAPE", shape);
  switch (shape) {
    case "square":
      console.log("case is SQUARE");
      return (0, shapes_1.squareWidthHeight)(width, height, shape);
    case "circle":
      return (0, shapes_1.circleWidthHeight)(width, height, shape);
    case "rectangle":
      return (0, shapes_1.rectangleWidthHeight)(width, height, shape);
    case "oval":
      console.log("case is Rectangle;;;", width, height, shape);
      let rectWidth = (0, shapes_1.ovalWidthHeight)(width, height, shape);
      console.log("THE RECTWIDTH;;;", rectWidth);
      return rectWidth;
    case "clip-path":
      return (0, shapes_1.clipPathWidthHeight)(width, height, shape);
  }
  return {
    width,
    height
  };
};
exports.doWidthHeight = doWidthHeight;

/***/ },

/***/ "./src/components/typography/Heading/Heading.tsx"
/*!*******************************************************!*\
  !*** ./src/components/typography/Heading/Heading.tsx ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedHeading = kotii_styled_1.default.div.withConfig({
  componentId: "kt-La2e0CWB"
})``;
const Heading = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedHeading, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Heading, {
    ...props
  }));
};
exports["default"] = Heading;

/***/ },

/***/ "./src/components/typography/Heading/index.tsx"
/*!*****************************************************!*\
  !*** ./src/components/typography/Heading/index.tsx ***!
  \*****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Heading_1 = __importDefault(__webpack_require__(/*! ./Heading */ "./src/components/typography/Heading/Heading.tsx"));
exports["default"] = Heading_1.default;

/***/ },

/***/ "./src/components/typography/Paragraph/Paragraph.tsx"
/*!***********************************************************!*\
  !*** ./src/components/typography/Paragraph/Paragraph.tsx ***!
  \***********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedText = kotii_styled_1.default.div.withConfig({
  componentId: "kt-S_pjTQVa"
})``;
const Paragraph = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedText, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Paragraph, {
    ...props
  }));
};
exports["default"] = Paragraph;

/***/ },

/***/ "./src/components/typography/Paragraph/index.tsx"
/*!*******************************************************!*\
  !*** ./src/components/typography/Paragraph/index.tsx ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Paragraph_1 = __importDefault(__webpack_require__(/*! ./Paragraph */ "./src/components/typography/Paragraph/Paragraph.tsx"));
exports["default"] = Paragraph_1.default;

/***/ },

/***/ "./src/components/typography/Tag/Tag.tsx"
/*!***********************************************!*\
  !*** ./src/components/typography/Tag/Tag.tsx ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedTag = kotii_styled_1.default.div.withConfig({
  componentId: "kt-tYirVrm0"
})``;
const TAG = ({
  testID = "",
  value,
  children,
  color,
  ...props
}) => {
  const resolvedColor = typeof color === "object" ? color.light : color;
  return react_1.default.createElement(WrappedTag, {
    value: value,
    "data-testid": testID,
    color: color
  }, react_1.default.createElement(grommet_1.Tag, {
    value: value,
    color: resolvedColor,
    ...props
  }));
};
exports["default"] = TAG;

/***/ },

/***/ "./src/components/typography/Tag/index.tsx"
/*!*************************************************!*\
  !*** ./src/components/typography/Tag/index.tsx ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Tag_1 = __importDefault(__webpack_require__(/*! ./Tag */ "./src/components/typography/Tag/Tag.tsx"));
exports["default"] = Tag_1.default;

/***/ },

/***/ "./src/components/typography/Text/CustomText/CustomText.tsx"
/*!******************************************************************!*\
  !*** ./src/components/typography/Text/CustomText/CustomText.tsx ***!
  \******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const textDefaults_1 = __importDefault(__webpack_require__(/*! ./textDefaults */ "./src/components/typography/Text/CustomText/textDefaults.tsx"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const Text = (0, kotii_styled_1.default)("span").withConfig({
  componentId: "kt-prGJn13l"
})(props => ({
  width: "100%",
  fontSize: props?.size ? props.size : textDefaults_1.default.size,
  a11yTitle: textDefaults_1.default.allyTitle,
  display: "inline-block",
  color: `${props?.color ? props.color : textDefaults_1.default.color}`
}));
const CustomText = ({
  children,
  ...props
}) => {
  return react_1.default.createElement(Text, {
    ...props
  }, children);
};
exports["default"] = CustomText;

/***/ },

/***/ "./src/components/typography/Text/CustomText/index.tsx"
/*!*************************************************************!*\
  !*** ./src/components/typography/Text/CustomText/index.tsx ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const CustomText_1 = __importDefault(__webpack_require__(/*! ./CustomText */ "./src/components/typography/Text/CustomText/CustomText.tsx"));
exports["default"] = CustomText_1.default;

/***/ },

/***/ "./src/components/typography/Text/CustomText/textDefaults.tsx"
/*!********************************************************************!*\
  !*** ./src/components/typography/Text/CustomText/textDefaults.tsx ***!
  \********************************************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const sizes = {
  xxsmall: "8px",
  xsmall: "11px",
  small: "14px",
  medium: "17",
  large: "19px"
};
const color = "inherit";
exports["default"] = {
  size: sizes.small,
  color: color,
  allyTitle: "page text",
  width: "100%"
};

/***/ },

/***/ "./src/components/typography/Text/Text.tsx"
/*!*************************************************!*\
  !*** ./src/components/typography/Text/Text.tsx ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const CustomText_1 = __importDefault(__webpack_require__(/*! ./CustomText */ "./src/components/typography/Text/CustomText/index.tsx"));
const WrappedText = kotii_styled_1.default.div.withConfig({
  componentId: "kt-Cnap41jh"
})``;
const Text = ({
  testID = "",
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedText, {
    "data-testid": testID
  }, react_1.default.createElement(CustomText_1.default, {
    ...props
  }, children));
};
exports["default"] = Text;

/***/ },

/***/ "./src/components/typography/Text/index.tsx"
/*!**************************************************!*\
  !*** ./src/components/typography/Text/index.tsx ***!
  \**************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Text_1 = __importDefault(__webpack_require__(/*! ./Text */ "./src/components/typography/Text/Text.tsx"));
exports["default"] = Text_1.default;

/***/ },

/***/ "./src/components/typography/index.tsx"
/*!*********************************************!*\
  !*** ./src/components/typography/index.tsx ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Paragraph = exports.Text = exports.Tag = exports.Heading = void 0;
const Heading_1 = __importDefault(__webpack_require__(/*! ./Heading */ "./src/components/typography/Heading/index.tsx"));
exports.Heading = Heading_1.default;
const Paragraph_1 = __importDefault(__webpack_require__(/*! ./Paragraph */ "./src/components/typography/Paragraph/index.tsx"));
exports.Paragraph = Paragraph_1.default;
const Tag_1 = __importDefault(__webpack_require__(/*! ./Tag */ "./src/components/typography/Tag/index.tsx"));
exports.Tag = Tag_1.default;
const Text_1 = __importDefault(__webpack_require__(/*! ./Text */ "./src/components/typography/Text/index.tsx"));
exports.Text = Text_1.default;

/***/ },

/***/ "./src/components/utils/Collapsible/Collapsible.tsx"
/*!**********************************************************!*\
  !*** ./src/components/utils/Collapsible/Collapsible.tsx ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedCollapsible = kotii_styled_1.default.div.withConfig({
  componentId: "kt-0unw78RK"
})``;
const Collapsible = ({
  testID = "",
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedCollapsible, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Collapsible, {
    ...props
  }, children));
};
exports["default"] = Collapsible;

/***/ },

/***/ "./src/components/utils/Collapsible/index.tsx"
/*!****************************************************!*\
  !*** ./src/components/utils/Collapsible/index.tsx ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Collapsible_1 = __importDefault(__webpack_require__(/*! ./Collapsible */ "./src/components/utils/Collapsible/Collapsible.tsx"));
exports["default"] = Collapsible_1.default;

/***/ },

/***/ "./src/components/utils/InfiniteScroll/InfiniteScroll.tsx"
/*!****************************************************************!*\
  !*** ./src/components/utils/InfiniteScroll/InfiniteScroll.tsx ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedInfiniteScroll = kotii_styled_1.default.div.withConfig({
  componentId: "kt-c4uW6xBu"
})``;
const InfiniteScroll = ({
  testID = "",
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedInfiniteScroll, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.InfiniteScroll, {
    ...props,
    children: children
  }));
};
exports["default"] = InfiniteScroll;

/***/ },

/***/ "./src/components/utils/InfiniteScroll/index.tsx"
/*!*******************************************************!*\
  !*** ./src/components/utils/InfiniteScroll/index.tsx ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const InfiniteScroll_1 = __importDefault(__webpack_require__(/*! ./InfiniteScroll */ "./src/components/utils/InfiniteScroll/InfiniteScroll.tsx"));
exports["default"] = InfiniteScroll_1.default;

/***/ },

/***/ "./src/components/utils/Keyboard/Keyboard.tsx"
/*!****************************************************!*\
  !*** ./src/components/utils/Keyboard/Keyboard.tsx ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedKeyboard = kotii_styled_1.default.div.withConfig({
  componentId: "kt-WsdqK_Fp"
})``;
const Keyboard = ({
  testID = "",
  children,
  ...props
}) => {
  return react_1.default.createElement(WrappedKeyboard, {
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.Keyboard, {
    ...props
  }, children));
};
exports["default"] = Keyboard;

/***/ },

/***/ "./src/components/utils/Keyboard/index.tsx"
/*!*************************************************!*\
  !*** ./src/components/utils/Keyboard/index.tsx ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const Keyboard_1 = __importDefault(__webpack_require__(/*! ./Keyboard */ "./src/components/utils/Keyboard/Keyboard.tsx"));
exports["default"] = Keyboard_1.default;

/***/ },

/***/ "./src/components/utils/Markdown/Markdown.tsx"
/*!****************************************************!*\
  !*** ./src/components/utils/Markdown/Markdown.tsx ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedMarkdown = kotii_styled_1.default.div.withConfig({
  componentId: "kt-rsPYHZN8"
})``;
const Markdown = ({
  testID = "",
  ...props
}) => {
  return react_1.default.createElement(WrappedMarkdown, {
    "data-testid": testID
  });
};
exports["default"] = Markdown;

/***/ },

/***/ "./src/components/utils/SkipLink/SkipLink.tsx"
/*!****************************************************!*\
  !*** ./src/components/utils/SkipLink/SkipLink.tsx ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const kotii_styled_1 = __importDefault(__webpack_require__(/*! kotii-styled */ "kotii-styled"));
const WrappedSkipLink = kotii_styled_1.default.div.withConfig({
  componentId: "kt-LG7jW0wd"
})``;
const SkipLink = ({
  testID = "",
  id,
  ...props
}) => {
  return react_1.default.createElement(WrappedSkipLink, {
    id: id,
    "data-testid": testID
  }, react_1.default.createElement(grommet_1.SkipLink, {
    id: id,
    ...props
  }));
};
exports["default"] = SkipLink;

/***/ },

/***/ "./src/components/utils/SkipLink/index.tsx"
/*!*************************************************!*\
  !*** ./src/components/utils/SkipLink/index.tsx ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const SkipLink_1 = __importDefault(__webpack_require__(/*! ./SkipLink */ "./src/components/utils/SkipLink/SkipLink.tsx"));
exports["default"] = SkipLink_1.default;

/***/ },

/***/ "./src/components/utils/index.tsx"
/*!****************************************!*\
  !*** ./src/components/utils/index.tsx ***!
  \****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InfiniteScroll = exports.SkipLink = exports.Keyboard = exports.Collapsible = exports.Markdown = exports.ThemeSwitcher = void 0;
const Collapsible_1 = __importDefault(__webpack_require__(/*! ./Collapsible */ "./src/components/utils/Collapsible/index.tsx"));
exports.Collapsible = Collapsible_1.default;
const InfiniteScroll_1 = __importDefault(__webpack_require__(/*! ./InfiniteScroll */ "./src/components/utils/InfiniteScroll/index.tsx"));
exports.InfiniteScroll = InfiniteScroll_1.default;
const Keyboard_1 = __importDefault(__webpack_require__(/*! ./Keyboard */ "./src/components/utils/Keyboard/index.tsx"));
exports.Keyboard = Keyboard_1.default;
const Markdown_1 = __importDefault(__webpack_require__(/*! ./Markdown/Markdown */ "./src/components/utils/Markdown/Markdown.tsx"));
exports.Markdown = Markdown_1.default;
const SkipLink_1 = __importDefault(__webpack_require__(/*! ./SkipLink */ "./src/components/utils/SkipLink/index.tsx"));
exports.SkipLink = SkipLink_1.default;
const switcher_1 = __importDefault(__webpack_require__(/*! ./ThemeSwitcher/switcher */ "./src/components/utils/ThemeSwitcher/switcher.js"));
exports.ThemeSwitcher = switcher_1.default;

/***/ },

/***/ "./src/context/index.tsx"
/*!*******************************!*\
  !*** ./src/context/index.tsx ***!
  \*******************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useKotiiTheme = exports.KotiiThemeProvider = void 0;
const theme_provider_1 = __webpack_require__(/*! ./theme-provider */ "./src/context/theme-provider.tsx");
Object.defineProperty(exports, "KotiiThemeProvider", ({
  enumerable: true,
  get: function () {
    return theme_provider_1.CustomThemeProvider;
  }
}));
Object.defineProperty(exports, "useKotiiTheme", ({
  enumerable: true,
  get: function () {
    return theme_provider_1.useThemeContext;
  }
}));

/***/ },

/***/ "./src/context/theme-provider.tsx"
/*!****************************************!*\
  !*** ./src/context/theme-provider.tsx ***!
  \****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function () {
  var ownKeys = function (o) {
    ownKeys = Object.getOwnPropertyNames || function (o) {
      var ar = [];
      for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
      return ar;
    };
    return ownKeys(o);
  };
  return function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    __setModuleDefault(result, mod);
    return result;
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useThemeContext = exports.CustomThemeProvider = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const config_1 = __webpack_require__(/*! ../config */ "./src/config/index.js");
const hooks_1 = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
const grommet_1 = __webpack_require__(/*! grommet */ "grommet");
const ThemeContext = react_1.default.createContext({});
const CustomThemeProvider = props => {
  const {
    themes,
    isThemeLoaded
  } = (0, hooks_1.useTheme)();
  const [themeMode, setThemeMode] = react_1.default.useState("dark");
  const [themeName, setThemeName] = (0, react_1.useState)("dark");
  const [currentTheme, setCurrentTheme] = (0, react_1.useState)(directThemes[themeName]);
  (0, react_1.useEffect)(() => {
    (0, config_1.logStoredThemesStatus)();
  }, []);
  const changeThemeMode = themeMode => {
    if (themeMode === "dark") {
      setThemeMode("light");
    } else {
      setThemeMode("dark");
    }
  };
  const changeTheme = name => {
    console.log(">>> THE THEM NAME", name);
    setThemeName(name);
  };
  (0, react_1.useEffect)(() => {
    setCurrentTheme(directThemes[themeName]);
  }, [themeName]);
  return react_1.default.createElement(ThemeContext.Provider, {
    value: {
      theme: currentTheme,
      themeName: themeName,
      themes,
      isThemeLoaded,
      changeTheme,
      grommetTheme: grommet_1.defaultProps,
      changeThemeMode,
      themeMode
    }
  }, react_1.default.createElement(grommet_1.Grommet, {
    theme: currentTheme,
    themeMode: themeMode
  }, props.children));
};
exports.CustomThemeProvider = CustomThemeProvider;
const useThemeContext = () => react_1.default.useContext(ThemeContext);
exports.useThemeContext = useThemeContext;
const directThemes = {
  dark: {
    global: {
      colors: {
        background: {
          dark: "#EADDCA",
          light: "#964B00"
        },
        "app-background": {
          dark: "#EADDCA",
          light: "#964B00"
        }
      },
      font: {
        family: "Roboto"
      }
    }
  },
  light: {
    global: {
      colors: {
        background: {
          dark: "#f5f0f0",
          light: "white"
        },
        "app-background": {
          dark: "#f5f0f0",
          light: "white"
        }
      },
      font: {
        family: "Roboto"
      }
    }
  },
  cherry: {
    global: {
      colors: {
        ruby: {
          dark: "#d4111e",
          light: "#f58990"
        },
        "ruby!": "#EF3F4C",
        gold: {
          dark: "#df9007",
          light: "#e7b86b"
        },
        "gold!": "#F9B644",
        amethyst: {
          dark: "#9B59B6",
          light: "#C39BD3"
        },
        "amethyst!": "#AF7AC5",
        "grey-1": "#ECE9E3",
        "grey-2": "#CECCC6",
        "grey-3": "#737069",
        "grey-4": "#52504C",
        background: {
          dark: "grey-4",
          light: "grey-1"
        },
        "background-back": {
          dark: "grey-4",
          light: "grey-1"
        },
        "background-front": {
          dark: "grey-3",
          light: "grey-2"
        },
        brand: "ruby!",
        control: {
          dark: "brand",
          light: "brand"
        },
        input: {
          background: "blue"
        },
        text: {
          dark: "grey-1",
          light: "grey-3"
        },
        "app-background": {
          dark: "blue",
          light: "green"
        }
      },
      focus: {
        border: {
          color: "gold"
        }
      },
      background: {
        dark: "#ed9807",
        light: "#F9B644"
      }
    },
    anchor: {
      color: {
        dark: "gold",
        light: "amethyst!"
      }
    }
  },
  seaWave: {
    global: {
      colors: {
        ruby: {
          dark: "#d4111e",
          light: "#f58990"
        },
        "ruby!": "#EF3F4C",
        gold: {
          dark: "#df9007",
          light: "#e7b86b"
        },
        "gold!": "#F9B644",
        amethyst: {
          dark: "#9B59B6",
          light: "#C39BD3"
        },
        "amethyst!": "#AF7AC5",
        "grey-1": "#ECE9E3",
        "grey-2": "#CECCC6",
        "grey-3": "#737069",
        "grey-4": "#52504C",
        background: {
          dark: "grey-4",
          light: "grey-1"
        },
        "background-back": {
          dark: "grey-4",
          light: "grey-1"
        },
        "background-front": {
          dark: "grey-3",
          light: "grey-2"
        },
        brand: "ruby!",
        control: {
          dark: "brand",
          light: "brand"
        },
        input: {
          background: "blue"
        },
        text: {
          dark: "grey-1",
          light: "grey-3"
        },
        "app-background": {
          dark: "#d4111e",
          light: "#e84f59"
        }
      },
      focus: {
        border: {
          color: "gold"
        }
      }
    },
    anchor: {
      color: {
        dark: "gold",
        light: "amethyst!"
      }
    }
  }
};

/***/ },

/***/ "grommet"
/*!**************************!*\
  !*** external "grommet" ***!
  \**************************/
(module) {

module.exports = require("grommet");

/***/ },

/***/ "kotii-styled"
/*!*******************************!*\
  !*** external "kotii-styled" ***!
  \*******************************/
(module) {

module.exports = require("kotii-styled");

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "react" ***!
  \************************/
(module) {

module.exports = require("react");

/***/ },

/***/ "./src/components/utils/ThemeSwitcher/switcher.js"
/*!********************************************************!*\
  !*** ./src/components/utils/ThemeSwitcher/switcher.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = undefined && undefined.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = undefined && undefined.__importStar || function () {
  var ownKeys = function (o) {
    ownKeys = Object.getOwnPropertyNames || function (o) {
      var ar = [];
      for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
      return ar;
    };
    return ownKeys(o);
  };
  return function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    __setModuleDefault(result, mod);
    return result;
  };
}();
var __importDefault = undefined && undefined.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const react_1 = __importStar(require("react"));
const bs_1 = require("react-icons/bs");
const md_1 = require("react-icons/md");
const react_switch_1 = __importDefault(require("react-switch"));
const kotii_styled_1 = __importStar(require("kotii-styled"));
const context_1 = require("../../../context");
const downOutAnimation = (0, kotii_styled_1.keyframes)` 
0% {
  transform: translateZ(-50px) transLateY(20px);
  opacity: 0
}
40% {
  opacity: 0.2
}
60%{ opacity: 0.5}
80% {
  transform: translateZ(-10px) transLateY(0px);
  opacity: .8
}
100% {
  transform: translateZ(0px) transLateY(0px);
  opacity: 1
}
`;
function useOutsideAlerter(ref, closeOnOutside) {
  (0, react_1.useEffect)(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeOnOutside(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
const ThemeSelector = (0, kotii_styled_1.default)("button")(() => {
  return {
    color: "green",
    cursor: "pointer",
    "&:hover": {
      color: "red"
    },
    backgroundColor: "transparent"
  };
});
const DropWithAnim = kotii_styled_1.default.div`
  animation-name: ${downOutAnimation};
  animation-duration: 2s;
  animation-iteration-count: 1;
`;
const ThemeDropDown = (0, kotii_styled_1.default)(DropWithAnim)(() => {
  return {
    position: "relative",
    opacity: 1
  };
});
const List = (0, kotii_styled_1.default)("ul")(props => {
  return {
    margin: 0,
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    backgroundColor: "black",
    position: "absolute",
    top: "5px",
    width: props?.width ? props?.width : "150px",
    right: 0
  };
});
const ListItem = (0, kotii_styled_1.default)("li")(() => {
  return {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
    width: "100%"
  };
});
const SwitcherText = (0, kotii_styled_1.default)("p")(() => {
  return {
    color: "green",
    cursor: "pointer"
  };
});
const SwitcherSlider = (0, kotii_styled_1.default)("p")(() => {
  return {
    color: "green",
    cursor: "pointer"
  };
});
const SwitcherTypo = (0, kotii_styled_1.default)("p")({
  flexGrow: 2,
  display: "flex",
  flexDirection: "row",
  gap: 10
});
const ThemeSwitcher = () => {
  const {
    changeTheme,
    theme,
    themes,
    themeName,
    themeMode,
    changeThemeMode
  } = (0, context_1.useKotiiTheme)();
  const [showThemes, setShowThemes] = (0, react_1.useState)(false);
  console.log("the themSWITCHER;;;", themes);
  console.log(changeTheme, theme);
  const wrapperRef = (0, react_1.useRef)(null);
  useOutsideAlerter(wrapperRef, setShowThemes);
  const getOptions = () => {
    const optionDictionary = [];
    for (let themeName in themes) {
      console.log("the theme I;;", themeName);
      optionDictionary.push({
        value: themes[themeName],
        label: themeName
      });
    }
    return optionDictionary;
  };
  const showUpdatedThemes = () => {
    setShowThemes(!showThemes);
  };
  const handleSwitchleChange = () => {
    changeThemeMode(themeMode);
  };
  const activateTheme = eve => {
    const setValue = eve.target.attributes.value.nodeValue;
    console.log("setItem", setValue);
    changeTheme(setValue);
  };
  (0, react_1.useEffect)(() => {
    console.log(">>> SWITCH current theme", themeName);
    console.log(">>> SWITCH ");
  }, [themeName, themeMode]);
  const getListItems = items => {
    return items.map((it, ix) => {
      return react_1.default.createElement(ListItem, {
        key: ix
      }, react_1.default.createElement(SwitcherTypo, null, themeName === it.label ? react_1.default.createElement(bs_1.BsCheck, {
        style: {
          color: "yellow"
        }
      }) : react_1.default.createElement(bs_1.BsCheck, {
        style: {
          visibility: "hidden"
        }
      }), react_1.default.createElement(SwitcherText, {
        value: it.label,
        onClick: activateTheme
      }, it.label)), themeName != it.label ? null : react_1.default.createElement(SwitcherSlider, null, react_1.default.createElement(react_switch_1.default, {
        onChange: handleSwitchleChange,
        checked: themeMode === "dark" ? false : true,
        uncheckedIcon: false,
        checkedIcon: react_1.default.createElement(md_1.MdOutlineLightMode, null),
        height: 16,
        width: 30
      })));
    });
  };
  return react_1.default.createElement("div", null, react_1.default.createElement(ThemeSelector, {
    onClick: showUpdatedThemes
  }, react_1.default.createElement(bs_1.BsFillMoonStarsFill, {
    style: {
      fontSize: "16px",
      color: "#f68fff"
    }
  })), showThemes ? react_1.default.createElement(ThemeDropDown, {
    ref: wrapperRef
  }, react_1.default.createElement(List, {
    width: 150
  }, getListItems(getOptions()))) : null);
};
exports.default = ThemeSwitcher;

/***/ },

/***/ "./src/config/index.js"
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkOrSetThemes = exports.getThemes = exports.getTheme = exports.logStoredThemesStatus = void 0;
const config_1 = require("./config");
Object.defineProperty(exports, "checkOrSetThemes", {
  enumerable: true,
  get: function () {
    return config_1.checkOrSetThemes;
  }
});
Object.defineProperty(exports, "getTheme", {
  enumerable: true,
  get: function () {
    return config_1.getTheme;
  }
});
Object.defineProperty(exports, "getThemes", {
  enumerable: true,
  get: function () {
    return config_1.getThemes;
  }
});
Object.defineProperty(exports, "logStoredThemesStatus", {
  enumerable: true,
  get: function () {
    return config_1.logStoredThemesStatus;
  }
});

/***/ },

/***/ "./src/globals/index.js"
/*!******************************!*\
  !*** ./src/globals/index.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Themes = exports.Abstracts = exports.Mixin = exports.GlobalStyle = void 0;
const styles_1 = require("./styles");
Object.defineProperty(exports, "GlobalStyle", {
  enumerable: true,
  get: function () {
    return styles_1.GlobalStyle;
  }
});
Object.defineProperty(exports, "Mixin", {
  enumerable: true,
  get: function () {
    return styles_1.Mixin;
  }
});
Object.defineProperty(exports, "Abstracts", {
  enumerable: true,
  get: function () {
    return styles_1.Abstracts;
  }
});
const theme_1 = require("./theme");
Object.defineProperty(exports, "Themes", {
  enumerable: true,
  get: function () {
    return theme_1.Themes;
  }
});

/***/ },

/***/ "./src/hooks/index.js"
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = void 0;
const useTheme_1 = require("./useTheme");
Object.defineProperty(exports, "useTheme", {
  enumerable: true,
  get: function () {
    return useTheme_1.useTheme;
  }
});

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
let exports = __webpack_exports__;
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SVG = exports.Shape = exports.Oval = exports.Rectangle = exports.Circle = exports.Square = exports.Carousel = exports.Image = exports.Video = exports.Tag = exports.Paragraph = exports.Text = exports.Heading = exports.KotiiGlobal = exports.ThemeSwitcher = exports.useTheme = exports.useKotiiTheme = exports.KotiiThemeProvider = exports.Card = exports.Header = exports.Footer = exports.PageContent = exports.Page = exports.Box = exports.Button = void 0;
const components_1 = __webpack_require__(/*! ./components */ "./src/components/index.tsx");
Object.defineProperty(exports, "Box", ({
  enumerable: true,
  get: function () {
    return components_1.Box;
  }
}));
Object.defineProperty(exports, "Button", ({
  enumerable: true,
  get: function () {
    return components_1.Button;
  }
}));
Object.defineProperty(exports, "Card", ({
  enumerable: true,
  get: function () {
    return components_1.Card;
  }
}));
Object.defineProperty(exports, "Carousel", ({
  enumerable: true,
  get: function () {
    return components_1.Carousel;
  }
}));
Object.defineProperty(exports, "Circle", ({
  enumerable: true,
  get: function () {
    return components_1.Circle;
  }
}));
Object.defineProperty(exports, "Footer", ({
  enumerable: true,
  get: function () {
    return components_1.Footer;
  }
}));
Object.defineProperty(exports, "Header", ({
  enumerable: true,
  get: function () {
    return components_1.Header;
  }
}));
Object.defineProperty(exports, "Heading", ({
  enumerable: true,
  get: function () {
    return components_1.Heading;
  }
}));
Object.defineProperty(exports, "Image", ({
  enumerable: true,
  get: function () {
    return components_1.Image;
  }
}));
Object.defineProperty(exports, "Oval", ({
  enumerable: true,
  get: function () {
    return components_1.Oval;
  }
}));
Object.defineProperty(exports, "Page", ({
  enumerable: true,
  get: function () {
    return components_1.Page;
  }
}));
Object.defineProperty(exports, "PageContent", ({
  enumerable: true,
  get: function () {
    return components_1.PageContent;
  }
}));
Object.defineProperty(exports, "Paragraph", ({
  enumerable: true,
  get: function () {
    return components_1.Paragraph;
  }
}));
Object.defineProperty(exports, "Rectangle", ({
  enumerable: true,
  get: function () {
    return components_1.Rectangle;
  }
}));
Object.defineProperty(exports, "Shape", ({
  enumerable: true,
  get: function () {
    return components_1.Shape;
  }
}));
Object.defineProperty(exports, "Square", ({
  enumerable: true,
  get: function () {
    return components_1.Square;
  }
}));
Object.defineProperty(exports, "SVG", ({
  enumerable: true,
  get: function () {
    return components_1.Svg;
  }
}));
Object.defineProperty(exports, "Tag", ({
  enumerable: true,
  get: function () {
    return components_1.Tag;
  }
}));
Object.defineProperty(exports, "Text", ({
  enumerable: true,
  get: function () {
    return components_1.Text;
  }
}));
Object.defineProperty(exports, "ThemeSwitcher", ({
  enumerable: true,
  get: function () {
    return components_1.ThemeSwitcher;
  }
}));
Object.defineProperty(exports, "Video", ({
  enumerable: true,
  get: function () {
    return components_1.Video;
  }
}));
const context_1 = __webpack_require__(/*! ./context */ "./src/context/index.tsx");
Object.defineProperty(exports, "KotiiThemeProvider", ({
  enumerable: true,
  get: function () {
    return context_1.KotiiThemeProvider;
  }
}));
Object.defineProperty(exports, "useKotiiTheme", ({
  enumerable: true,
  get: function () {
    return context_1.useKotiiTheme;
  }
}));
const globals_1 = __webpack_require__(/*! ./globals */ "./src/globals/index.js");
Object.defineProperty(exports, "KotiiGlobal", ({
  enumerable: true,
  get: function () {
    return globals_1.GlobalStyle;
  }
}));
const hooks_1 = __webpack_require__(/*! ./hooks */ "./src/hooks/index.js");
Object.defineProperty(exports, "useTheme", ({
  enumerable: true,
  get: function () {
    return hooks_1.useTheme;
  }
}));
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBQUEsU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU1JLGdCQUFnQixHQUFHRCxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRWpHLE1BQU1DLFNBQVMsR0FBOEJBLENBQUM7RUFDNUNDLE1BQU0sR0FBRyxFQUFFO0VBQ1hDLFFBQVE7RUFDUixHQUFHQztBQUFLLENBQ1QsS0FBSTtFQUNILE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNULGdCQUFnQjtJQUFBLGVBQWNNO0VBQU0sR0FDbkNULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQVUsU0FBVTtJQUFBLEdBQUtHO0VBQUssR0FBR0QsUUFBUSxDQUFjLENBQzdCO0FBRXZCLENBQUM7QUFFREcsa0JBQUEsR0FBZUwsU0FBUyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCeEIsTUFBQU0sV0FBQSxHQUFBYixlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWVDLFdBQUEsQ0FBQVYsT0FBUyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z4QixNQUFBTixTQUFBLEdBQUFDLG1CQUFBO0FBQ0EsTUFBQUMsT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBTUEsTUFBTUksZ0JBQWdCLEdBQUdELGNBQUEsQ0FBQUUsT0FBTSxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztFQUFFQyxXQUFXLEVBQUU7QUFBYSxDQUFFLENBQWtCLEVBQUU7QUFFakcsTUFBTVEsY0FBYyxHQUE4QkEsQ0FBQztFQUNqRE4sTUFBTSxHQUFHLEVBQUU7RUFDWEMsUUFBUTtFQUNSLEdBQUdDO0FBQUssQ0FDVCxLQUFJO0VBQ0gsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ1QsZ0JBQWdCO0lBQUEsZUFBY007RUFBTSxHQUNuQ1QsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBaUIsY0FBZTtJQUFBLEdBQUtKO0VBQUssR0FBR0QsUUFBUSxDQUFtQixDQUN2QztBQUV2QixDQUFDO0FBRURHLGtCQUFBLEdBQWVFLGNBQWMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjdCLE1BQUFDLGdCQUFBLEdBQUFmLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZUcsZ0JBQUEsQ0FBQVosT0FBRyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZsQixNQUFBTixTQUFBLEdBQUFDLG1CQUFBO0FBQ0EsTUFBQUMsT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBTUEsTUFBTWtCLGFBQWEsR0FBR2YsY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBa0IsRUFBRTtBQUU5RixNQUFNVyxNQUFNLEdBQThCQSxDQUFDO0VBQ3pDVCxNQUFNLEdBQUcsRUFBRTtFQUNYQyxRQUFRO0VBQ1IsR0FBR0M7QUFBSyxDQUNULEtBQUk7RUFDSCxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDSyxhQUFhO0lBQUEsZUFBY1I7RUFBTSxHQUNoQ1QsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBb0IsTUFBTztJQUFBLEdBQUtQO0VBQUssR0FBR0QsUUFBUSxDQUFXLENBQzFCO0FBRXBCLENBQUM7QUFFREcsa0JBQUEsR0FBZUssTUFBTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCckIsTUFBQUMsUUFBQSxHQUFBbEIsZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFlTSxRQUFBLENBQUFmLE9BQU0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU1xQixhQUFhLEdBQUdsQixjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRTlGLE1BQU1jLE1BQU0sR0FBOEJBLENBQUM7RUFBRVosTUFBTSxHQUFHLEVBQUU7RUFBRSxHQUFHRTtBQUFLLENBQUUsS0FBSTtFQUN0RSxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDUSxhQUFhO0lBQUEsZUFBY1g7RUFBTSxHQUNoQ1QsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBdUIsTUFBTztJQUFBLEdBQUtWO0VBQUssRUFBSSxDQUNSO0FBRXBCLENBQUM7QUFFREUsa0JBQUEsR0FBZVEsTUFBTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCckIsTUFBQUMsUUFBQSxHQUFBckIsZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFlUyxRQUFBLENBQUFsQixPQUFNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFNQSxNQUFNd0IsV0FBVyxHQUFHckIsY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBa0IsRUFBRTtBQUU1RixNQUFNaUIsSUFBSSxHQUE4QkEsQ0FBQztFQUFFZixNQUFNLEdBQUcsRUFBRTtFQUFFZ0IsTUFBTTtFQUFFLEdBQUdkO0FBQUssQ0FBRSxLQUFJO0VBQzVFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNXLFdBQVc7SUFBQSxlQUFjZCxNQUFNO0lBQUVnQixNQUFNLEVBQUVBO0VBQU0sR0FDOUN6QixPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUEwQixJQUFLO0lBQUNDLE1BQU0sRUFBRUEsTUFBTTtJQUFBLEdBQU1kO0VBQUssRUFBSSxDQUN4QjtBQUVsQixDQUFDO0FBRURFLGtCQUFBLEdBQWVXLElBQUksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQm5CLE1BQUFFLE1BQUEsR0FBQXpCLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZWEsTUFBQSxDQUFBdEIsT0FBSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZuQixNQUFBTixTQUFBLEdBQUFDLG1CQUFBO0FBRUEsTUFBQUMsT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBTUEsTUFBTTRCLGlCQUFpQixHQUFHekIsY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBa0IsRUFBRTtBQUVsRyxNQUFNcUIsVUFBVSxHQUE4QkEsQ0FBQztFQUM3Q25CLE1BQU0sR0FBRyxFQUFFO0VBQ1hvQixXQUFXO0VBQ1gsR0FBR2xCO0FBQUssQ0FDVCxLQUFJO0VBQ0gsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2UsaUJBQWlCO0lBQUNFLFdBQVcsRUFBRUEsV0FBVztJQUFBLGVBQWVwQjtFQUFNLEdBQzlEVCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUE4QixVQUFXO0lBQUEsR0FBS2pCLEtBQUs7SUFBRWtCLFdBQVcsRUFBRUE7RUFBVyxFQUFJLENBQ2xDO0FBRXhCLENBQUM7QUFFRGhCLGtCQUFBLEdBQWVlLFVBQVUsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnpCLE1BQUFFLFlBQUEsR0FBQTdCLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZWlCLFlBQUEsQ0FBQTFCLE9BQVUsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGekIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUVBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU1nQyxXQUFXLEdBQUc3QixjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRTVGLE1BQU15QixJQUFJLEdBQThCQSxDQUFDO0VBQUV2QixNQUFNLEdBQUcsRUFBRTtFQUFFd0IsS0FBSztFQUFFLEdBQUd0QjtBQUFLLENBQUUsS0FBSTtFQUMzRSxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDbUIsV0FBVztJQUFDRSxLQUFLLEVBQUVBLEtBQUs7SUFBQSxlQUFleEI7RUFBTSxHQUM1Q1QsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBa0MsSUFBSztJQUFDQyxLQUFLLEVBQUVBLEtBQUs7SUFBQSxHQUFNdEI7RUFBSyxFQUFJLENBQ3RCO0FBRWxCLENBQUM7QUFFREUsa0JBQUEsR0FBZW1CLElBQUksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm5CLE1BQUFFLE1BQUEsR0FBQWpDLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZXFCLE1BQUEsQ0FBQTlCLE9BQUksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbkIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU1vQyxVQUFVLEdBQUdqQyxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFXLEVBQUU7QUFFcEYsTUFBTTZCLEdBQUcsR0FBdUJBLENBQUM7RUFBRTNCLE1BQU0sR0FBRyxFQUFFO0VBQUVDLFFBQVE7RUFBRSxHQUFHQztBQUFLLENBQUUsS0FBSTtFQUN0RSxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDdUIsVUFBVTtJQUFBLGVBQWMxQjtFQUFNLEdBQzdCVCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUFzQyxHQUFJO0lBQUEsR0FBS3pCO0VBQUssR0FBR0QsUUFBUSxDQUFRLENBQ3ZCO0FBRWpCLENBQUM7QUFFREcsa0JBQUEsR0FBZXVCLEdBQUcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmxCLE1BQUFDLEtBQUEsR0FBQXBDLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZXdCLEtBQUEsQ0FBQWpDLE9BQUcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU11QyxXQUFXLEdBQUdwQyxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRTVGLE1BQU1nQyxJQUFJLEdBQThCQSxDQUFDO0VBQUU5QixNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQ3BFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUMwQixXQUFXO0lBQUEsZUFBYzdCO0VBQU0sR0FDOUJULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQXlDLElBQUs7SUFBQSxHQUFLNUIsS0FBSztJQUFFNkIsUUFBUSxFQUFFQSxDQUFBLEtBQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU07RUFBQyxFQUFJLENBQzdDO0FBRWxCLENBQUM7QUFFRDdCLGtCQUFBLEdBQWUwQixJQUFJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJuQixNQUFBSSxNQUFBLEdBQUExQyxlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWU4QixNQUFBLENBQUF2QyxPQUFJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZuQixNQUFBVSxXQUFBLEdBQUFiLGVBQUEsQ0FBQUYsbUJBQUE7QUFXRWMsaUJBQUEsR0FYS0MsV0FBQSxDQUFBVixPQUFTO0FBQ2hCLE1BQUFZLGdCQUFBLEdBQUFmLGVBQUEsQ0FBQUYsbUJBQUE7QUFjRWMsc0JBQUEsR0FkS0csZ0JBQUEsQ0FBQVosT0FBYztBQUNyQixNQUFBZSxRQUFBLEdBQUFsQixlQUFBLENBQUFGLG1CQUFBO0FBWUVjLGNBQUEsR0FaS00sUUFBQSxDQUFBZixPQUFNO0FBQ2IsTUFBQWtCLFFBQUEsR0FBQXJCLGVBQUEsQ0FBQUYsbUJBQUE7QUFPRWMsY0FBQSxHQVBLUyxRQUFBLENBQUFsQixPQUFNO0FBQ2IsTUFBQXNCLE1BQUEsR0FBQXpCLGVBQUEsQ0FBQUYsbUJBQUE7QUFRRWMsWUFBQSxHQVJLYSxNQUFBLENBQUF0QixPQUFJO0FBQ1gsTUFBQXdDLFdBQUEsR0FBQTNDLGVBQUEsQ0FBQUYsbUJBQUE7QUFhRWMsa0JBQUEsR0FiSytCLFdBQUEsQ0FBQXhDLE9BQVU7QUFDakIsTUFBQThCLE1BQUEsR0FBQWpDLGVBQUEsQ0FBQUYsbUJBQUE7QUFPRWMsWUFBQSxHQVBLcUIsTUFBQSxDQUFBOUIsT0FBSTtBQUNYLE1BQUFpQyxLQUFBLEdBQUFwQyxlQUFBLENBQUFGLG1CQUFBO0FBU0VjLFdBQUEsR0FUS3dCLEtBQUEsQ0FBQWpDLE9BQUc7QUFDVixNQUFBdUMsTUFBQSxHQUFBMUMsZUFBQSxDQUFBRixtQkFBQTtBQVNFYyxZQUFBLEdBVEs4QixNQUFBLENBQUF2QyxPQUFJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSWCxNQUFBeUMsVUFBQSxHQUFBOUMsbUJBQUE7QUFvRkUrQyw2Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BbkZBSixVQUFBLENBQUFyQyxTQUFTO0VBQUE7QUFBQTtBQW9GVHNDLGtEQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0FuRkFKLFVBQUEsQ0FBQTlCLGNBQWM7RUFBQTtBQUFBO0FBaUZkK0IsMENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQWhGQUosVUFBQSxDQUFBM0IsTUFBTTtFQUFBO0FBQUE7QUErQ040QiwwQ0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BOUNBSixVQUFBLENBQUF4QixNQUFNO0VBQUE7QUFBQTtBQTBFTnlCLHdDQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0F6RUFKLFVBQUEsQ0FBQXJCLElBQUk7RUFBQTtBQUFBO0FBMEVKc0IsOENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQXpFQUosVUFBQSxDQUFBakIsVUFBVTtFQUFBO0FBQUE7QUEwRVZrQix3Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BekVBSixVQUFBLENBQUFiLElBQUk7RUFBQTtBQUFBO0FBMkVKYyx1Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BMUVBSixVQUFBLENBQUFULEdBQUc7RUFBQTtBQUFBO0FBeUVIVSx3Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BeEVBSixVQUFBLENBQUFOLElBQUk7RUFBQTtBQUFBO0FBRU4sTUFBQVcsUUFBQSxHQUFBbkQsbUJBQUE7QUF1REUrQyw0Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BdERBQyxRQUFBLENBQUFDLFFBQVE7RUFBQTtBQUFBO0FBdURSTCxpREFBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BdERBQyxRQUFBLENBQUFFLGFBQWE7RUFBQTtBQUFBO0FBdURiTiw2Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BdERBQyxRQUFBLENBQUFHLFNBQVM7RUFBQTtBQUFBO0FBOERUUCw2Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BN0RBQyxRQUFBLENBQUFJLFNBQVM7RUFBQTtBQUFBO0FBNERUUiw2Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BM0RBQyxRQUFBLENBQUFLLFNBQVM7RUFBQTtBQUFBO0FBeURUVCwwQ0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BeERBQyxRQUFBLENBQUFNLE1BQU07RUFBQTtBQUFBO0FBeUROVixrREFBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BeERBQyxRQUFBLENBQUFPLGNBQWM7RUFBQTtBQUFBO0FBMkRkWCw0Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BMURBQyxRQUFBLENBQUFRLFFBQVE7RUFBQTtBQUFBO0FBcURSWiw2Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BcERBQyxRQUFBLENBQUFTLFNBQVM7RUFBQTtBQUFBO0FBRVgsTUFBQUMsUUFBQSxHQUFBN0QsbUJBQUE7QUE2QkUrQyx1Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BNUJBVyxRQUFBLENBQUFDLEdBQUc7RUFBQTtBQUFBO0FBZ0NIZix3Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BL0JBVyxRQUFBLENBQUFFLElBQUk7RUFBQTtBQUFBO0FBOEJKaEIsMENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTdCQVcsUUFBQSxDQUFBRyxNQUFNO0VBQUE7QUFBQTtBQTZETmpCLHdDQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0E1REFXLFFBQUEsQ0FBQUksSUFBSTtFQUFBO0FBQUE7QUEyQkpsQiwwQ0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BMUJBVyxRQUFBLENBQUFLLE1BQU07RUFBQTtBQUFBO0FBNERObkIsd0NBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTNEQVcsUUFBQSxDQUFBTSxJQUFJO0VBQUE7QUFBQTtBQStESnBCLDJDQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0E5REFXLFFBQUEsQ0FBQU8sT0FBTztFQUFBO0FBQUE7QUF1QlByQix3Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BdEJBVyxRQUFBLENBQUFRLElBQUk7RUFBQTtBQUFBO0FBMkJKdEIsK0NBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTFCQVcsUUFBQSxDQUFBUyxXQUFXO0VBQUE7QUFBQTtBQXlEWHZCLDhDQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0F4REFXLFFBQUEsQ0FBQVUsVUFBVTtFQUFBO0FBQUE7QUF5RFZ4QiwyQ0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BeERBVyxRQUFBLENBQUFXLE9BQU87RUFBQTtBQUFBO0FBeURQekIseUNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQXhEQVcsUUFBQSxDQUFBWSxLQUFLO0VBQUE7QUFBQTtBQUVQLE1BQUFDLE9BQUEsR0FBQTFFLG1CQUFBO0FBNEJFK0MsNENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTVCT3dCLE9BQUEsQ0FBQUMsUUFBUTtFQUFBO0FBQUE7QUE2QmY1Qix5Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BN0JpQndCLE9BQUEsQ0FBQUUsS0FBSztFQUFBO0FBQUE7QUE2RHRCN0IsdUNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTdEd0J3QixPQUFBLENBQUFHLEdBQUc7RUFBQTtBQUFBO0FBMkIzQjlCLHlDQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0EzQjZCd0IsT0FBQSxDQUFBSSxLQUFLO0VBQUE7QUFBQTtBQUNwQyxNQUFBQyxZQUFBLEdBQUEvRSxtQkFBQTtBQXFCRStDLDJDQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0FyQk82QixZQUFBLENBQUFDLE9BQU87RUFBQTtBQUFBO0FBd0JkakMsNkNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQXhCZ0I2QixZQUFBLENBQUFFLFNBQVM7RUFBQTtBQUFBO0FBeUJ6QmxDLHVDQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0F6QjJCNkIsWUFBQSxDQUFBRyxHQUFHO0VBQUE7QUFBQTtBQXVCOUJuQyx3Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BdkJnQzZCLFlBQUEsQ0FBQUksSUFBSTtFQUFBO0FBQUE7QUFFdEMsTUFBQUMsT0FBQSxHQUFBcEYsbUJBQUE7QUFnQ0UrQyxrREFBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BL0JBa0MsT0FBQSxDQUFBQyxjQUFjO0VBQUE7QUFBQTtBQThCZHRDLDRDQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0E3QkFrQyxPQUFBLENBQUFFLFFBQVE7RUFBQTtBQUFBO0FBa0JSdkMsNENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQWpCQWtDLE9BQUEsQ0FBQUcsUUFBUTtFQUFBO0FBQUE7QUEyQlJ4Qyw0Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BMUJBa0MsT0FBQSxDQUFBSSxRQUFRO0VBQUE7QUFBQTtBQWFSekMsaURBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQVpBa0MsT0FBQSxDQUFBSyxhQUFhO0VBQUE7QUFBQTtBQUdmLE1BQUFDLFFBQUEsR0FBQTFGLG1CQUFBO0FBOENFK0MsMENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTlDT3dDLFFBQUEsQ0FBQUMsTUFBTTtFQUFBO0FBQUE7QUFnRGI1Qyx3Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BaERld0MsUUFBQSxDQUFBRSxJQUFJO0VBQUE7QUFBQTtBQStDbkI3Qyw2Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BL0NxQndDLFFBQUEsQ0FBQUcsU0FBUztFQUFBO0FBQUE7QUFpRDlCOUMseUNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQWpEZ0N3QyxRQUFBLENBQUFJLEtBQUs7RUFBQTtBQUFBO0FBNkNyQy9DLDBDQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0E3Q3VDd0MsUUFBQSxDQUFBSyxNQUFNO0VBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DL0MsTUFBQWhHLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFNQSxNQUFNZ0csZUFBZSxHQUFHN0YsY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBa0IsRUFBRTtBQUVoRyxNQUFNNEMsUUFBUSxHQUE4QkEsQ0FBQztFQUFFMUMsTUFBTSxHQUFHLEVBQUU7RUFBRSxHQUFHRTtBQUFLLENBQUUsS0FBSTtFQUN4RSxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDbUYsZUFBZTtJQUFBLGVBQWN0RjtFQUFNLEdBQ2xDVCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUFxRCxRQUFTO0lBQUEsR0FBS3hDO0VBQUssRUFBSSxDQUNSO0FBRXRCLENBQUM7QUFFREUsa0JBQUEsR0FBZXNDLFFBQVEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnZCLE1BQUE2QyxVQUFBLEdBQUEvRixlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWVtRixVQUFBLENBQUE1RixPQUFRLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnZCLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFNQSxNQUFNZ0csZUFBZSxHQUFHN0YsY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBa0IsRUFBRTtBQUVoRyxNQUFNNkMsYUFBYSxHQUE4QkEsQ0FBQztFQUNoRDNDLE1BQU0sR0FBRyxFQUFFO0VBQ1h3RixPQUFPO0VBQ1AsR0FBR3RGO0FBQUssQ0FDVCxLQUFJO0VBQ0gsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ21GLGVBQWU7SUFBQ0UsT0FBTyxFQUFFQSxPQUFPO0lBQUEsZUFBZXhGO0VBQU0sR0FDcERULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQXNELGFBQWM7SUFBQSxHQUFLekMsS0FBSztJQUFFc0YsT0FBTyxFQUFFQTtFQUFPLEVBQUksQ0FDL0I7QUFFdEIsQ0FBQztBQUVEcEYsa0JBQUEsR0FBZXVDLGFBQWEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjVCLE1BQUE4QyxlQUFBLEdBQUFqRyxlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWVxRixlQUFBLENBQUE5RixPQUFhLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjVCLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFNQSxNQUFNb0csZ0JBQWdCLEdBQUdqRyxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRWpHLE1BQU04QyxTQUFTLEdBQThCQSxDQUFDO0VBQUU1QyxNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQ3pFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUN1RixnQkFBZ0I7SUFBQSxlQUFjMUY7RUFBTSxHQUNuQ1QsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBdUQsU0FBVTtJQUFBLEdBQUsxQztFQUFLLEVBQUksQ0FDUjtBQUV2QixDQUFDO0FBRURFLGtCQUFBLEdBQWV3QyxTQUFTLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ4QixNQUFBK0MsV0FBQSxHQUFBbkcsZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFldUYsV0FBQSxDQUFBaEcsT0FBUyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z4QixNQUFBTixTQUFBLEdBQUFDLG1CQUFBO0FBQ0EsTUFBQUMsT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBTUEsTUFBTXNHLGdCQUFnQixHQUFHbkcsY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBa0IsRUFBRTtBQUVqRyxNQUFNK0MsU0FBUyxHQUE4QkEsQ0FBQztFQUFFN0MsTUFBTSxHQUFHLEVBQUU7RUFBRSxHQUFHRTtBQUFLLENBQUUsS0FBSTtFQUN6RSxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDeUYsZ0JBQWdCO0lBQUEsZUFBYzVGO0VBQU0sR0FDbkNULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQXdELFNBQVU7SUFBQSxHQUFLM0M7RUFBSyxFQUFJLENBQ1I7QUFFdkIsQ0FBQztBQUVERSxrQkFBQSxHQUFleUMsU0FBUyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCeEIsTUFBQWdELFdBQUEsR0FBQXJHLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZXlGLFdBQUEsQ0FBQWxHLE9BQVMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeEIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU13RyxnQkFBZ0IsR0FBR3JHLGNBQUEsQ0FBQUUsT0FBTSxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztFQUFFQyxXQUFXLEVBQUU7QUFBYSxDQUFFLENBQWtCLEVBQUU7QUFFakcsTUFBTWdELFNBQVMsR0FBOEJBLENBQUM7RUFBRTlDLE1BQU0sR0FBRyxFQUFFO0VBQUUsR0FBR0U7QUFBSyxDQUFFLEtBQUk7RUFDekUsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQzJGLGdCQUFnQjtJQUFBLGVBQWM5RjtFQUFNLEdBQ25DVCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUF5RCxTQUFVO0lBQUEsR0FBSzVDO0VBQUssRUFBSSxDQUNSO0FBRXZCLENBQUM7QUFFREUsa0JBQUEsR0FBZTBDLFNBQVMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnhCLE1BQUFpRCxXQUFBLEdBQUF2RyxlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWUyRixXQUFBLENBQUFwRyxPQUFTLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnhCLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFNQSxNQUFNMEcsa0JBQWtCLEdBQUd2RyxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRW5HLE1BQU1tRyxXQUFXLEdBQThCQSxDQUFDO0VBQUVqRyxNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQzNFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUM2RixrQkFBa0I7SUFBQSxlQUFjaEc7RUFBTSxHQUNyQ1QsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBNEcsV0FBWTtJQUFBLEdBQUsvRjtFQUFLLEVBQUksQ0FDUjtBQUV6QixDQUFDO0FBRURFLGtCQUFBLEdBQWU2RixXQUFXLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIxQixNQUFBQyxhQUFBLEdBQUExRyxlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWU4RixhQUFBLENBQUF2RyxPQUFXLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjFCLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFNQSxNQUFNNkcsaUJBQWlCLEdBQUcxRyxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRWxHLE1BQU1zRyxVQUFVLEdBQThCQSxDQUFDO0VBQUVwRyxNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQzFFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNnRyxpQkFBaUI7SUFBQSxlQUFjbkc7RUFBTSxHQUNwQ1QsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBK0csVUFBVztJQUFBLEdBQUtsRztFQUFLLEVBQUksQ0FDUjtBQUV4QixDQUFDO0FBRURFLGtCQUFBLEdBQWVnRyxVQUFVLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ6QixNQUFBQyxZQUFBLEdBQUE3RyxlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWVpRyxZQUFBLENBQUExRyxPQUFVLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnpCLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFNQSxNQUFNZ0gsYUFBYSxHQUFHN0csY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBa0IsRUFBRTtBQUU5RixNQUFNaUQsTUFBTSxHQUE4QkEsQ0FBQztFQUN6Qy9DLE1BQU0sR0FBRyxFQUFFO0VBQ1h3RixPQUFPO0VBQ1AsR0FBR3RGO0FBQUssQ0FDVCxLQUFJO0VBQ0gsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ21HLGFBQWE7SUFBQ2QsT0FBTyxFQUFFQSxPQUFPO0lBQUEsZUFBZXhGO0VBQU0sR0FDbERULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQTBELE1BQVk7SUFBQSxHQUFLN0MsS0FBSztJQUFFc0YsT0FBTyxFQUFFQTtFQUFPLEVBQUksQ0FDL0I7QUFFcEIsQ0FBQztBQUVEcEYsa0JBQUEsR0FBZTJDLE1BQU0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnJCLE1BQUF3RCxRQUFBLEdBQUEvRyxlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWVtRyxRQUFBLENBQUE1RyxPQUFNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFNQSxNQUFNa0gscUJBQXFCLEdBQUcvRyxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRXRHLE1BQU1rRCxjQUFjLEdBQThCQSxDQUFDO0VBQ2pEaEQsTUFBTSxHQUFHLEVBQUU7RUFDWHdGLE9BQU87RUFDUCxHQUFHdEY7QUFBSyxDQUNULEtBQUk7RUFDSCxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDcUcscUJBQXFCO0lBQUNoQixPQUFPLEVBQUVBLE9BQU87SUFBQSxlQUFleEY7RUFBTSxHQUMxRFQsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBMkQsY0FBb0I7SUFBQSxHQUFLOUMsS0FBSztJQUFFc0YsT0FBTyxFQUFFQTtFQUFPLEVBQUksQ0FDL0I7QUFFNUIsQ0FBQztBQUVEcEYsa0JBQUEsR0FBZTRDLGNBQWMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjdCLE1BQUF5RCxnQkFBQSxHQUFBakgsZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFlcUcsZ0JBQUEsQ0FBQTlHLE9BQWMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGN0IsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQUtBLE1BQU1vSCxpQkFBaUIsR0FBR2pILGNBQUEsQ0FBQUUsT0FBTSxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztFQUFFQyxXQUFXLEVBQUU7QUFBYSxDQUFFLENBQWtCLEVBQUU7QUFFbEcsTUFBTTZHLFVBQVUsR0FBOEJBLENBQUM7RUFDN0MzRyxNQUFNLEdBQUcsRUFBRTtFQUNYNEcsSUFBSTtFQUNKLEdBQUcxRztBQUFLLENBQ1QsS0FBSTtFQUNILE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUN1RyxpQkFBaUI7SUFBQ0UsSUFBSSxFQUFFQSxJQUFJO0lBQUEsZUFBZTVHO0VBQU0sR0FDaERULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQXNILFVBQVc7SUFBQSxHQUFLekcsS0FBSztJQUFFMEcsSUFBSSxFQUFFQTtFQUFJLEVBQUksQ0FDcEI7QUFFeEIsQ0FBQztBQUVEeEcsa0JBQUEsR0FBZXVHLFVBQVUsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnpCLE1BQUFFLFlBQUEsR0FBQXJILGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZXlHLFlBQUEsQ0FBQWxILE9BQVUsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGekIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU13SCxlQUFlLEdBQUdySCxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRWhHLE1BQU1tRCxRQUFRLEdBQThCQSxDQUFDO0VBQzNDakQsTUFBTSxHQUFHLEVBQUU7RUFDWHdGLE9BQU87RUFDUCxHQUFHdEY7QUFBSyxDQUNULEtBQUk7RUFDSCxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDMkcsZUFBZTtJQUFDdEIsT0FBTyxFQUFFQSxPQUFPO0lBQUEsZUFBZXhGO0VBQU0sR0FDcERULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQTRELFFBQVM7SUFBQSxHQUFLL0M7RUFBSyxFQUFJLENBQ1I7QUFFdEIsQ0FBQztBQUVERSxrQkFBQSxHQUFlNkMsUUFBUSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCdkIsTUFBQThELFVBQUEsR0FBQXZILGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZTJHLFVBQUEsQ0FBQXBILE9BQVEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdkIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU0wSCxnQkFBZ0IsR0FBR3ZILGNBQUEsQ0FBQUUsT0FBTSxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztFQUFFQyxXQUFXLEVBQUU7QUFBYSxDQUFFLENBQWtCLEVBQUU7QUFFakcsTUFBTW9ELFNBQVMsR0FBOEJBLENBQUM7RUFBRWxELE1BQU0sR0FBRyxFQUFFO0VBQUUsR0FBR0U7QUFBSyxDQUFFLEtBQUk7RUFDekUsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQzZHLGdCQUFnQjtJQUFBLGVBQWNoSDtFQUFNLEdBQ25DVCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUE2RCxTQUFVO0lBQUEsR0FBS2hEO0VBQUssRUFBSSxDQUNSO0FBRXZCLENBQUM7QUFFREUsa0JBQUEsR0FBZThDLFNBQVMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnhCLE1BQUErRCxXQUFBLEdBQUF6SCxlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWU2RyxXQUFBLENBQUF0SCxPQUFTLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnhCLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFLQSxNQUFNNEgsbUJBQW1CLEdBQUd6SCxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRXBHLE1BQU1xSCxZQUFZLEdBQThCQSxDQUFDO0VBQy9DbkgsTUFBTSxHQUFHLEVBQUU7RUFDWDRHLElBQUk7RUFDSixHQUFHMUc7QUFBSyxDQUNULEtBQUk7RUFDSCxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDK0csbUJBQW1CO0lBQUNOLElBQUksRUFBRUEsSUFBSTtJQUFBLGVBQWU1RztFQUFNLEdBQ2xEVCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUE4SCxZQUFhO0lBQUEsR0FBS2pILEtBQUs7SUFBRTBHLElBQUksRUFBRUE7RUFBSSxFQUFJLENBQ3BCO0FBRTFCLENBQUM7QUFFRHhHLGtCQUFBLEdBQWUrRyxZQUFZLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckIzQixNQUFBQyxjQUFBLEdBQUE1SCxlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWVnSCxjQUFBLENBQUF6SCxPQUFZLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YzQixNQUFBNEYsVUFBQSxHQUFBL0YsZUFBQSxDQUFBRixtQkFBQTtBQWNFYyxnQkFBQSxHQWRLbUYsVUFBQSxDQUFBNUYsT0FBUTtBQUNmLE1BQUE4RixlQUFBLEdBQUFqRyxlQUFBLENBQUFGLG1CQUFBO0FBY0VjLHFCQUFBLEdBZEtxRixlQUFBLENBQUE5RixPQUFhO0FBQ3BCLE1BQUFnRyxXQUFBLEdBQUFuRyxlQUFBLENBQUFGLG1CQUFBO0FBY0VjLGlCQUFBLEdBZEt1RixXQUFBLENBQUFoRyxPQUFTO0FBQ2hCLE1BQUFrRyxXQUFBLEdBQUFyRyxlQUFBLENBQUFGLG1CQUFBO0FBY0VjLGlCQUFBLEdBZEt5RixXQUFBLENBQUFsRyxPQUFTO0FBQ2hCLE1BQUFvRyxXQUFBLEdBQUF2RyxlQUFBLENBQUFGLG1CQUFBO0FBcUJFYyxpQkFBQSxHQXJCSzJGLFdBQUEsQ0FBQXBHLE9BQVM7QUFDaEIsTUFBQXVHLGFBQUEsR0FBQTFHLGVBQUEsQ0FBQUYsbUJBQUE7QUFjRWMsbUJBQUEsR0FkSzhGLGFBQUEsQ0FBQXZHLE9BQVc7QUFDbEIsTUFBQTBHLFlBQUEsR0FBQTdHLGVBQUEsQ0FBQUYsbUJBQUE7QUFZRWMsa0JBQUEsR0FaS2lHLFlBQUEsQ0FBQTFHLE9BQVU7QUFDakIsTUFBQTRHLFFBQUEsR0FBQS9HLGVBQUEsQ0FBQUYsbUJBQUE7QUFhRWMsY0FBQSxHQWJLbUcsUUFBQSxDQUFBNUcsT0FBTTtBQUNiLE1BQUE4RyxnQkFBQSxHQUFBakgsZUFBQSxDQUFBRixtQkFBQTtBQWFFYyxzQkFBQSxHQWJLcUcsZ0JBQUEsQ0FBQTlHLE9BQWM7QUFDckIsTUFBQWtILFlBQUEsR0FBQXJILGVBQUEsQ0FBQUYsbUJBQUE7QUFhRWMsa0JBQUEsR0FiS3lHLFlBQUEsQ0FBQWxILE9BQVU7QUFDakIsTUFBQW9ILFVBQUEsR0FBQXZILGVBQUEsQ0FBQUYsbUJBQUE7QUFnQkVjLGdCQUFBLEdBaEJLMkcsVUFBQSxDQUFBcEgsT0FBUTtBQUNmLE1BQUFzSCxXQUFBLEdBQUF6SCxlQUFBLENBQUFGLG1CQUFBO0FBWUVjLGlCQUFBLEdBWks2RyxXQUFBLENBQUF0SCxPQUFTO0FBQ2hCLE1BQUF5SCxjQUFBLEdBQUE1SCxlQUFBLENBQUFGLG1CQUFBO0FBWUVjLG9CQUFBLEdBWktnSCxjQUFBLENBQUF6SCxPQUFZLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm5CLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFJQSxNQUFNK0gsVUFBVSxHQUFHNUgsY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBVyxFQUFFO0FBRXBGLE1BQU1zRCxHQUFHLEdBQXVCQSxDQUFDO0VBQy9CcEQsTUFBTTtFQUNOc0gsR0FBRztFQUNIQyxTQUFTO0VBQ1R0SCxRQUFRO0VBQ1IsR0FBR0M7QUFBSyxDQUNULEtBQUk7RUFDSCxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDa0gsVUFBVTtJQUFBLGVBQWNySDtFQUFNLEdBQzdCVCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUErRCxHQUFJO0lBQUNtRSxTQUFTLEVBQUVBLFNBQVM7SUFBRUQsR0FBRyxFQUFFQSxHQUFHO0lBQUEsR0FBTXBIO0VBQUssR0FDNUNELFFBQVEsQ0FDSixDQUNJO0FBRWpCLENBQUM7QUFFREcsa0JBQUEsR0FBZWdELEdBQUcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmxCLE1BQUFvRSxLQUFBLEdBQUFoSSxlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWVvSCxLQUFBLENBQUE3SCxPQUFHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmxCLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFJQSxNQUFNbUksV0FBVyxHQUFHaEksY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBWSxFQUFFO0FBRXRGLE1BQU1zRCxHQUFHLEdBQXdCQSxDQUFDO0VBQ2hDcEQsTUFBTSxHQUFHLEVBQUU7RUFDWHNILEdBQUc7RUFDSEMsU0FBUztFQUNUdEgsUUFBUTtFQUNSLEdBQUdDO0FBQUssQ0FDVCxLQUFJO0VBQ0gsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ3NILFdBQVc7SUFBQSxlQUFjekg7RUFBTSxHQUM5QlQsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBZ0UsSUFBSztJQUFDa0UsU0FBUyxFQUFFQSxTQUFTO0lBQUVELEdBQUcsRUFBRUEsR0FBRztJQUFBLEdBQU1wSDtFQUFLLEdBQzdDRCxRQUFRLENBQ0gsQ0FDSTtBQUVsQixDQUFDO0FBRURHLGtCQUFBLEdBQWVnRCxHQUFHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJsQixNQUFBc0UsTUFBQSxHQUFBbEksZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFlc0gsTUFBQSxDQUFBL0gsT0FBSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZuQixNQUFBTixTQUFBLEdBQUFDLG1CQUFBO0FBQ0EsTUFBQUMsT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBR0EsTUFBTXFJLGFBQWEsR0FBR2xJLGNBQUEsQ0FBQUUsT0FBTSxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztFQUFFQyxXQUFXLEVBQUU7QUFBYSxDQUFFLENBQWMsRUFBRTtBQUUxRixNQUFNd0QsTUFBTSxHQUEwQkEsQ0FBQztFQUNyQ3RELE1BQU0sR0FBRyxFQUFFO0VBQ1hzSCxHQUFHO0VBQ0hDLFNBQVM7RUFDVHRILFFBQVE7RUFDUixHQUFHQztBQUFLLENBQ1QsS0FBSTtFQUNILE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUN3SCxhQUFhO0lBQUEsZUFBYzNIO0VBQU0sR0FDaENULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQWlFLE1BQU87SUFBQ2lFLFNBQVMsRUFBRUEsU0FBUztJQUFFRCxHQUFHLEVBQUVBLEdBQUc7SUFBQSxHQUFNcEg7RUFBSyxHQUMvQ0QsUUFBUSxDQUNELENBQ0k7QUFFcEIsQ0FBQztBQUVERyxrQkFBQSxHQUFla0QsTUFBTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCckIsTUFBQXNFLFFBQUEsR0FBQXBJLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZXdILFFBQUEsQ0FBQWpJLE9BQUksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbkIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU11SSxXQUFXLEdBQUdwSSxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRTVGLE1BQU15RCxJQUFJLEdBQThCQSxDQUFDO0VBQUV2RCxNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQ3BFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUMwSCxXQUFXO0lBQUEsZUFBYzdIO0VBQU0sR0FDOUJULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQWtFLElBQUs7SUFBQSxHQUFLckQ7RUFBSyxFQUFJLENBQ1I7QUFFbEIsQ0FBQztBQUVERSxrQkFBQSxHQUFlbUQsSUFBSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCbkIsTUFBQXVFLE1BQUEsR0FBQXRJLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZTBILE1BQUEsQ0FBQW5JLE9BQUksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbkIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQUVBLE1BQUF5SSxTQUFBLEdBQUF6SSxtQkFBQTtBQUdBLE1BQU0wSSxhQUFhLEdBQUd2SSxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFZLEVBQUU7QUFDeEYsTUFBTTBELE1BQU0sR0FBd0JBLENBQUM7RUFDbkM4RCxHQUFHO0VBQ0hDLFNBQVM7RUFDVHRILFFBQVE7RUFDUixHQUFHQztBQUFLLENBQ1QsS0FBSTtFQUNILE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUM0SCxTQUFBLENBQUFFLGtCQUFrQixRQUNqQjFJLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUM2SCxhQUFhLFFBQ1p6SSxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUFtRSxNQUFPLFFBQUV2RCxRQUFRLENBQVcsQ0FDZixDQUNHO0FBRXpCLENBQUM7QUFFREcsa0JBQUEsR0FBZW9ELE1BQU0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnJCLE1BQUEwRSxRQUFBLEdBQUExSSxlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWU4SCxRQUFBLENBQUF2SSxPQUFJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRm5CLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFNQSxNQUFNNkksV0FBVyxHQUFHMUksY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBWSxFQUFFO0FBRXRGLE1BQU15RCxJQUFJLEdBQXdCQSxDQUFDO0VBQUV2RCxNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQzlELE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNnSSxXQUFXO0lBQUEsZUFBY25JO0VBQU0sR0FDOUJULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQW9FLElBQUs7SUFBQSxHQUFLdkQ7RUFBSyxFQUFJLENBQ1I7QUFFbEIsQ0FBQztBQUVERSxrQkFBQSxHQUFlbUQsSUFBSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCbkIsTUFBQTZFLE1BQUEsR0FBQTVJLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZWdJLE1BQUEsQ0FBQXpJLE9BQUksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbkIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQUtBLE1BQU0rSSxXQUFXLEdBQUc1SSxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRTVGLE1BQU00RCxPQUFPLEdBQThCQSxDQUFDO0VBQUUxRCxNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQ3ZFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNrSSxXQUFXO0lBQUEsZUFBY3JJO0VBQU0sR0FDOUJULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQWlKLEtBQUs7SUFBQSxHQUFLcEk7RUFBSyxFQUFJLENBQ1I7QUFFbEIsQ0FBQztBQUVERSxrQkFBQSxHQUFlc0QsT0FBTyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCdEIsTUFBQTZFLFNBQUEsR0FBQS9JLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZW1JLFNBQUEsQ0FBQTVJLE9BQU8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdEIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQUtBLE1BQU0rSSxXQUFXLEdBQUc1SSxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFZLEVBQUU7QUFFdEYsTUFBTTZELElBQUksR0FBd0JBLENBQUM7RUFBRTFELFFBQVE7RUFBRSxHQUFHQztBQUFLLENBQUUsS0FBSTtFQUMzRCxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDa0ksV0FBVyxRQUNWOUksT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBc0UsSUFBSztJQUFBLEdBQUt6RDtFQUFLLEdBQUdELFFBQVEsQ0FBUyxDQUN4QjtBQUVsQixDQUFDO0FBRURHLGtCQUFBLEdBQWV1RCxJQUFJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJuQixNQUFBNkUsTUFBQSxHQUFBaEosZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFlb0ksTUFBQSxDQUFBN0ksT0FBSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZuQixNQUFBTixTQUFBLEdBQUFDLG1CQUFBO0FBQ0EsTUFBQUMsT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBS0EsTUFBTW1KLGtCQUFrQixHQUFHaEosY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBWSxFQUFFO0FBRTdGLE1BQU04RCxXQUFXLEdBQXdCQSxDQUFDO0VBQ3hDNUQsTUFBTSxHQUFHLEVBQUU7RUFDWEMsUUFBUTtFQUNSLEdBQUdDO0FBQUssQ0FDVCxLQUFJO0VBQ0gsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ3NJLGtCQUFrQjtJQUFBLGVBQWN6STtFQUFNLEdBQ3JDVCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUF1RSxXQUFZO0lBQUEsR0FBSzFEO0VBQUssR0FBR0QsUUFBUSxDQUFnQixDQUMvQjtBQUV6QixDQUFDO0FBRURHLGtCQUFBLEdBQWV3RCxXQUFXLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckIxQixNQUFBOEUsYUFBQSxHQUFBbEosZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFlc0ksYUFBQSxDQUFBL0ksT0FBVyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YxQixNQUFBTixTQUFBLEdBQUFDLG1CQUFBO0FBQ0EsTUFBQUMsT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBS0EsTUFBTStJLFdBQVcsR0FBRzVJLGNBQUEsQ0FBQUUsT0FBTSxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztFQUFFQyxXQUFXLEVBQUU7QUFBYSxDQUFFLENBQWtCLEVBQUU7QUFFNUYsTUFBTStELFVBQVUsR0FBOEJBLENBQUM7RUFBRTdELE1BQU0sR0FBRyxFQUFFO0VBQUUsR0FBR0U7QUFBSyxDQUFFLEtBQUk7RUFDMUUsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2tJLFdBQVc7SUFBQSxlQUFjckk7RUFBTSxHQUM5QlQsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBd0UsVUFBVztJQUFBLEdBQUszRDtFQUFLLEVBQUksQ0FDZDtBQUVsQixDQUFDO0FBRURFLGtCQUFBLEdBQWV5RCxVQUFVLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJ6QixNQUFBOEUsWUFBQSxHQUFBbkosZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFldUksWUFBQSxDQUFBaEosT0FBVSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z6QixNQUFBTixTQUFBLEdBQUFDLG1CQUFBO0FBQ0EsTUFBQUMsT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBTUEsTUFBTXNKLGNBQWMsR0FBR25KLGNBQUEsQ0FBQUUsT0FBTSxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztFQUFFQyxXQUFXLEVBQUU7QUFBYSxDQUFFLENBQWUsRUFBRTtBQUU1RixNQUFNZ0UsT0FBTyxHQUEyQkEsQ0FBQztFQUFFOUQsTUFBTSxHQUFHLEVBQUU7RUFBRSxHQUFHRTtBQUFLLENBQUUsS0FBSTtFQUNwRSxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDeUksY0FBYztJQUFBLGVBQWM1STtFQUFNLEdBQ2pDVCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUF3SixPQUFPO0lBQUEsR0FBSzNJO0VBQUssRUFBSSxDQUNQO0FBRXJCLENBQUM7QUFFREUsa0JBQUEsR0FBZTBELE9BQU8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnRCLE1BQUFnRixTQUFBLEdBQUF0SixlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWUwSSxTQUFBLENBQUFuSixPQUFPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnRCLE1BQUFOLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxNQUFBQyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFNQSxNQUFNeUosWUFBWSxHQUFHdEosY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBa0IsRUFBRTtBQUU3RixNQUFNaUUsS0FBSyxHQUE4QkEsQ0FBQztFQUFFL0QsTUFBTSxHQUFHLEVBQUU7RUFBRSxHQUFHRTtBQUFLLENBQUUsS0FBSTtFQUNyRSxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDNEksWUFBWTtJQUFBLGVBQWMvSTtFQUFNLEdBQy9CVCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUEwRSxLQUFNO0lBQUEsR0FBSzdEO0VBQUssRUFBSSxDQUNSO0FBRW5CLENBQUM7QUFFREUsa0JBQUEsR0FBZTJELEtBQUssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnBCLE1BQUFpRixPQUFBLEdBQUF4SixlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWU0SSxPQUFBLENBQUFySixPQUFLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZwQixNQUFBNkgsS0FBQSxHQUFBaEksZUFBQSxDQUFBRixtQkFBQTtBQWNFYyxXQUFBLEdBZEtvSCxLQUFBLENBQUE3SCxPQUFHO0FBQ1YsTUFBQStILE1BQUEsR0FBQWxJLGVBQUEsQ0FBQUYsbUJBQUE7QUFjRWMsWUFBQSxHQWRLc0gsTUFBQSxDQUFBL0gsT0FBSTtBQUNYLE1BQUFpSSxRQUFBLEdBQUFwSSxlQUFBLENBQUFGLG1CQUFBO0FBZUVjLGNBQUEsR0FmS3dILFFBQUEsQ0FBQWpJLE9BQU07QUFDYixNQUFBbUksTUFBQSxHQUFBdEksZUFBQSxDQUFBRixtQkFBQTtBQXNCRWMsWUFBQSxHQXRCSzBILE1BQUEsQ0FBQW5JLE9BQUk7QUFDWCxNQUFBdUksUUFBQSxHQUFBMUksZUFBQSxDQUFBRixtQkFBQTtBQVlFYyxjQUFBLEdBWks4SCxRQUFBLENBQUF2SSxPQUFNO0FBQ2IsTUFBQXlJLE1BQUEsR0FBQTVJLGVBQUEsQ0FBQUYsbUJBQUE7QUFpQkVjLFlBQUEsR0FqQktnSSxNQUFBLENBQUF6SSxPQUFJO0FBQ1gsTUFBQTRJLFNBQUEsR0FBQS9JLGVBQUEsQ0FBQUYsbUJBQUE7QUFrQkVjLGVBQUEsR0FsQkttSSxTQUFBLENBQUE1SSxPQUFPO0FBQ2QsTUFBQTZJLE1BQUEsR0FBQWhKLGVBQUEsQ0FBQUYsbUJBQUE7QUFXRWMsWUFBQSxHQVhLb0ksTUFBQSxDQUFBN0ksT0FBSTtBQUNYLE1BQUErSSxhQUFBLEdBQUFsSixlQUFBLENBQUFGLG1CQUFBO0FBV0VjLG1CQUFBLEdBWEtzSSxhQUFBLENBQUEvSSxPQUFXO0FBQ2xCLE1BQUFnSixZQUFBLEdBQUFuSixlQUFBLENBQUFGLG1CQUFBO0FBV0VjLGtCQUFBLEdBWEt1SSxZQUFBLENBQUFoSixPQUFVO0FBQ2pCLE1BQUFtSixTQUFBLEdBQUF0SixlQUFBLENBQUFGLG1CQUFBO0FBV0VjLGVBQUEsR0FYSzBJLFNBQUEsQ0FBQW5KLE9BQU87QUFDZCxNQUFBcUosT0FBQSxHQUFBeEosZUFBQSxDQUFBRixtQkFBQTtBQVlFYyxhQUFBLEdBWks0SSxPQUFBLENBQUFySixPQUFLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFosTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU0ySixlQUFlLEdBQUd4SixjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRWhHLE1BQU1tRSxRQUFRLEdBQThCQSxDQUFDO0VBQUVqRSxNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQ3hFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUM4SSxlQUFlO0lBQUEsZUFBY2pKO0VBQU0sR0FDbENULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQTRFLFFBQVM7SUFBQSxHQUFLL0Q7RUFBSyxFQUFJLENBQ1I7QUFFdEIsQ0FBQztBQUVERSxrQkFBQSxHQUFlNkQsUUFBUSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCdkIsTUFBQWlGLFVBQUEsR0FBQTFKLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZThJLFVBQUEsQ0FBQXZKLE9BQVEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdkIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU02SixZQUFZLEdBQUcxSixjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRTdGLE1BQU1vRSxLQUFLLEdBQThCQSxDQUFDO0VBQUVsRSxNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQ3JFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNnSixZQUFZO0lBQUEsZUFBY25KO0VBQU0sR0FDL0JULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQTZFLEtBQU07SUFBQSxHQUFLaEU7RUFBSyxFQUFJLENBQ1I7QUFFbkIsQ0FBQztBQUVERSxrQkFBQSxHQUFlOEQsS0FBSyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcEIsTUFBQWtGLE9BQUEsR0FBQTVKLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZWdKLE9BQUEsQ0FBQXpKLE9BQUssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGcEIsTUFBQUosT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBTUEsTUFBTStKLFVBQVUsR0FBRzVKLGNBQUEsQ0FBQUUsT0FBTSxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztFQUFFQyxXQUFXLEVBQUU7QUFBYSxDQUFFLENBQWtCLEVBQUU7QUFFM0YsTUFBTXFFLEdBQUcsR0FBOEJBLENBQUM7RUFDdENuRSxNQUFNLEdBQUcsRUFBRTtFQUNYc0osR0FBRztFQUNIQyxNQUFNLEdBQUcsS0FBSztFQUNkQyxXQUFXO0VBQ1gsR0FBR3RKO0FBQUssQ0FDVCxLQUFJO0VBQ0gsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2tKLFVBQVU7SUFBQSxlQUFjcko7RUFBTSxHQUM1QnVKLE1BQU0sSUFBSUMsV0FBVyxHQUFHQSxXQUFXLEdBQUcsSUFBSSxDQUNoQztBQUVqQixDQUFDO0FBRURwSixrQkFBQSxHQUFlK0QsR0FBRyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCbEIsTUFBQXNGLEtBQUEsR0FBQWpLLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZXFKLEtBQUEsQ0FBQTlKLE9BQUcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU1vSyxZQUFZLEdBQUdqSyxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRTdGLE1BQU1zRSxLQUFLLEdBQThCQSxDQUFDO0VBQUVwRSxNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQ3JFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUN1SixZQUFZO0lBQUEsZUFBYzFKO0VBQU0sR0FDL0JULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQStFLEtBQU07SUFBQSxHQUFLbEU7RUFBSyxFQUFJLENBQ1I7QUFFbkIsQ0FBQztBQUVERSxrQkFBQSxHQUFlZ0UsS0FBSyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcEIsTUFBQXVGLE9BQUEsR0FBQW5LLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZXVKLE9BQUEsQ0FBQWhLLE9BQUssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnBCLE1BQUF1SixVQUFBLEdBQUExSixlQUFBLENBQUFGLG1CQUFBO0FBSVNjLGdCQUFBLEdBSkY4SSxVQUFBLENBQUF2SixPQUFRO0FBQ2YsTUFBQXlKLE9BQUEsR0FBQTVKLGVBQUEsQ0FBQUYsbUJBQUE7QUFHbUJjLGFBQUEsR0FIWmdKLE9BQUEsQ0FBQXpKLE9BQUs7QUFDWixNQUFBOEosS0FBQSxHQUFBakssZUFBQSxDQUFBRixtQkFBQTtBQUVpQ2MsV0FBQSxHQUYxQnFKLEtBQUEsQ0FBQTlKLE9BQUc7QUFDVixNQUFBZ0ssT0FBQSxHQUFBbkssZUFBQSxDQUFBRixtQkFBQTtBQUMwQmMsYUFBQSxHQURuQnVKLE9BQUEsQ0FBQWhLLE9BQUssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIWixNQUFBSixPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBeUksU0FBQSxHQUFBekksbUJBQUE7QUFDQSxNQUFBc0ssU0FBQSxHQUFBdEssbUJBQUE7QUFRQSxNQUFNdUssWUFBWSxHQUFHLElBQUFwSyxjQUFBLENBQUFFLE9BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQ0UsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBQyxDQUFFSSxLQUFLLElBQUk7RUFDdEYsTUFBTTRKLE1BQU0sR0FBRyxJQUFBRixTQUFBLENBQUFHLGlCQUFpQixFQUFDN0osS0FBSyxFQUFFLFFBQVEsQ0FBQztFQUNqRDhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixFQUFFNkgsTUFBTSxDQUFDO0VBQ3ZDLE9BQU87SUFBRSxHQUFHQTtFQUFNLENBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsTUFBTTdFLE1BQU0sR0FBMEJBLENBQUM7RUFDckNqRixNQUFNLEdBQUcsRUFBRTtFQUNYNEcsSUFBSTtFQUNKM0csUUFBUTtFQUNSLEdBQUdDO0FBQUssQ0FDVCxLQUFJO0VBQ0gsTUFBTTtJQUFFOEosS0FBSztJQUFFQyxNQUFNO0lBQUVDLFdBQVc7SUFBRUMsU0FBUyxHQUFHO0VBQU0sQ0FBRSxHQUFHLElBQUFwQyxTQUFBLENBQUFxQyxhQUFhLEdBQUU7RUFDMUUsTUFBTUMsUUFBUSxHQUFHO0lBQUUsR0FBR25LLEtBQUs7SUFBRWlLO0VBQVMsQ0FBRTtFQUN4QyxPQUNFNUssT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQzBKLFlBQVk7SUFBQSxHQUFLUSxRQUFRO0lBQUVMLEtBQUssRUFBRUEsS0FBSztJQUFBLGVBQWVoSztFQUFNLEdBQzFEQyxRQUFRLEdBQUdBLFFBQVEsR0FBRyxJQUFJLENBQ2Q7QUFFbkIsQ0FBQztBQUVERyxrQkFBQSxHQUFlNkUsTUFBTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDckIsTUFBQXFGLE9BQUEsR0FBQTlLLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQWMsa0JBQUEsR0FBZWtLLE9BQUEsQ0FBQTNLLE9BQU0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEckIsTUFBQUosT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQXlJLFNBQUEsR0FBQXpJLG1CQUFBO0FBQ0EsTUFBQXNLLFNBQUEsR0FBQXRLLG1CQUFBO0FBUUEsTUFBTWlMLFdBQVcsR0FBRyxJQUFBOUssY0FBQSxDQUFBRSxPQUFNLEVBQUMsS0FBSyxDQUFDLENBQUNFLFVBQVUsQ0FBQztFQUFFQyxXQUFXLEVBQUU7QUFBYSxDQUFFLENBQUMsQ0FBRUksS0FBSyxJQUFJO0VBQ3JGLE1BQU00SixNQUFNLEdBQUcsSUFBQUYsU0FBQSxDQUFBRyxpQkFBaUIsRUFBQzdKLEtBQUssRUFBRSxNQUFNLENBQUM7RUFDL0M4QixPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRTZILE1BQU0sQ0FBQztFQUNqRCxPQUFPO0lBQUUsR0FBR0E7RUFBTSxDQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGLE1BQU01RSxJQUFJLEdBQXlCQSxDQUFDO0VBQ2xDbEYsTUFBTSxHQUFHLEVBQUU7RUFDWDRHLElBQUk7RUFDSjNHLFFBQVE7RUFDUixHQUFHQztBQUFLLENBQ1QsS0FBSTtFQUNILE1BQU07SUFBRThKLEtBQUs7SUFBRUMsTUFBTTtJQUFFQyxXQUFXO0lBQUVDLFNBQVMsR0FBRztFQUFNLENBQUUsR0FBRyxJQUFBcEMsU0FBQSxDQUFBcUMsYUFBYSxHQUFFO0VBQzFFLE1BQU1DLFFBQVEsR0FBRztJQUFFLEdBQUduSyxLQUFLO0lBQUVpSztFQUFTLENBQUU7RUFDeEMsT0FDRTVLLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNvSyxXQUFXO0lBQUEsR0FBS0YsUUFBUTtJQUFFTCxLQUFLLEVBQUVBLEtBQUs7SUFBQSxlQUFlaEs7RUFBTSxHQUN6REMsUUFBUSxHQUFHQSxRQUFRLEdBQUcsSUFBSSxDQUNmO0FBRWxCLENBQUM7QUFFREcsa0JBQUEsR0FBZThFLElBQUksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ25CLE1BQUFzRixNQUFBLEdBQUFoTCxlQUFBLENBQUFGLG1CQUFBO0FBQ0FjLGtCQUFBLEdBQWVvSyxNQUFBLENBQUE3SyxPQUFJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRG5CLE1BQUFKLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUF5SSxTQUFBLEdBQUF6SSxtQkFBQTtBQUNBLE1BQUFzSyxTQUFBLEdBQUF0SyxtQkFBQTtBQVFBLE1BQU1pTCxXQUFXLEdBQUcsSUFBQTlLLGNBQUEsQ0FBQUUsT0FBTSxFQUFDLEtBQUssQ0FBQyxDQUFDRSxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFDLENBQUVJLEtBQUssSUFBSTtFQUNyRixNQUFNNEosTUFBTSxHQUFHLElBQUFGLFNBQUEsQ0FBQUcsaUJBQWlCLEVBQUM3SixLQUFLLEVBQUUsV0FBVyxDQUFDO0VBQ3BEOEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLEVBQUU2SCxNQUFNLENBQUM7RUFDakQsT0FBTztJQUFFLEdBQUdBO0VBQU0sQ0FBRTtBQUN0QixDQUFDLENBQUM7QUFFRixNQUFNM0UsU0FBUyxHQUF5QkEsQ0FBQztFQUN2Q25GLE1BQU0sR0FBRyxFQUFFO0VBQ1g0RyxJQUFJO0VBQ0ozRyxRQUFRO0VBQ1IsR0FBR0M7QUFBSyxDQUNULEtBQUk7RUFDSCxNQUFNO0lBQUU4SixLQUFLO0lBQUVDLE1BQU07SUFBRUMsV0FBVztJQUFFQyxTQUFTLEdBQUc7RUFBTSxDQUFFLEdBQUcsSUFBQXBDLFNBQUEsQ0FBQXFDLGFBQWEsR0FBRTtFQUMxRSxNQUFNQyxRQUFRLEdBQUc7SUFBRSxHQUFHbkssS0FBSztJQUFFaUs7RUFBUyxDQUFFO0VBQ3hDLE9BQ0U1SyxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDb0ssV0FBVztJQUFBLEdBQUtGLFFBQVE7SUFBRUwsS0FBSyxFQUFFQSxLQUFLO0lBQUEsZUFBZWhLO0VBQU0sR0FDekRDLFFBQVEsR0FBR0EsUUFBUSxHQUFHLElBQUksQ0FDZjtBQUVsQixDQUFDO0FBRURHLGtCQUFBLEdBQWUrRSxTQUFTLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN4QixNQUFBc0YsV0FBQSxHQUFBakwsZUFBQSxDQUFBRixtQkFBQTtBQUNBYyxrQkFBQSxHQUFlcUssV0FBQSxDQUFBOUssT0FBUyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R4QixNQUFBSixPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBeUksU0FBQSxHQUFBekksbUJBQUE7QUFFQSxNQUFBc0ssU0FBQSxHQUFBdEssbUJBQUE7QUFrQkEsTUFBTWlMLFdBQVcsR0FBRyxJQUFBOUssY0FBQSxDQUFBRSxPQUFNLEVBQU0sS0FBSyxDQUFDLENBQUVPLEtBQVUsSUFBSTtFQUNwRDhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRS9CLEtBQUssQ0FBQztFQUMvQixNQUFNd0ssU0FBUyxHQUFHeEssS0FBSyxFQUFFMEcsSUFBSSxJQUFJLE9BQU87RUFDeEMsTUFBTWtELE1BQU0sR0FBRyxJQUFBRixTQUFBLENBQUFHLGlCQUFpQixFQUFDN0osS0FBSyxFQUFFLFdBQVcsRUFBRXdLLFNBQVMsQ0FBQztFQUMvRDFJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixFQUFFNkgsTUFBTSxDQUFDO0VBQ3ZDLE9BQU87SUFBRSxHQUFHQTtFQUFNLENBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsTUFBTTFFLEtBQUssR0FBMEJBLENBQUM7RUFDcENwRixNQUFNLEdBQUcsRUFBRTtFQUNYQyxRQUFRO0VBQ1IyRyxJQUFJO0VBQ0osR0FBRzFHO0FBQUssQ0FDVCxLQUFJO0VBQ0gsTUFBTTtJQUFFOEosS0FBSztJQUFFQyxNQUFNO0lBQUVDLFdBQVc7SUFBRUMsU0FBUyxHQUFHO0VBQU0sQ0FBRSxHQUFHLElBQUFwQyxTQUFBLENBQUFxQyxhQUFhLEdBQUU7RUFDMUUsTUFBTUMsUUFBUSxHQUFHO0lBQUUsR0FBR25LLEtBQUs7SUFBRWlLO0VBQVMsQ0FBRTtFQUN4Q25JLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFaUksV0FBVyxDQUFDO0VBRTNDLE9BQ0UzSyxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDb0ssV0FBVztJQUFBLEdBQUtGLFFBQVE7SUFBRUwsS0FBSyxFQUFFQSxLQUFLO0lBQUVwRCxJQUFJLEVBQUVBLElBQUk7SUFBQSxlQUFlNUc7RUFBTSxHQUNyRUMsUUFBUSxHQUFHQSxRQUFRLEdBQUcsSUFBSSxDQUNmO0FBRWxCLENBQUM7QUFFREcsa0JBQUEsR0FBZWdGLEtBQUssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ3BCLE1BQUF1RixPQUFBLEdBQUFuTCxlQUFBLENBQUFGLG1CQUFBO0FBRUFjLGtCQUFBLEdBQWV1SyxPQUFBLENBQUFoTCxPQUFLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnBCLE1BQUFKLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUF5SSxTQUFBLEdBQUF6SSxtQkFBQTtBQUlBLE1BQUFzSyxTQUFBLEdBQUF0SyxtQkFBQTtBQWlFQSxNQUFNc0wsWUFBWSxHQUFHLElBQUFuTCxjQUFBLENBQUFFLE9BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQ0UsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBQyxDQUFFSSxLQUFLLElBQUk7RUFDdEY4QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUUvQixLQUFLLENBQUM7RUFDL0IsTUFBTTRKLE1BQU0sR0FBRyxJQUFBRixTQUFBLENBQUFHLGlCQUFpQixFQUFDN0osS0FBSyxFQUFFLFFBQVEsQ0FBQztFQUNqRDhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixFQUFFNkgsTUFBTSxDQUFDO0VBQ3ZDLE9BQU87SUFBRSxHQUFHQTtFQUFNLENBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsTUFBTXpFLE1BQU0sR0FBMEJBLENBQUM7RUFBRXBGLFFBQVE7RUFBRUQsTUFBTTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQ3ZFLE1BQU07SUFBRThKLEtBQUs7SUFBRUMsTUFBTTtJQUFFQyxXQUFXO0lBQUVDLFNBQVMsR0FBRztFQUFNLENBQUUsR0FBRyxJQUFBcEMsU0FBQSxDQUFBcUMsYUFBYSxHQUFFO0VBQzFFLE1BQU1DLFFBQVEsR0FBRztJQUFFLEdBQUduSyxLQUFLO0lBQUVpSztFQUFTLENBQUU7RUFDeENuSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRWlJLFdBQVcsQ0FBQztFQUUzQyxPQUNFM0ssT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ3lLLFlBQVk7SUFBQSxHQUFLUCxRQUFRO0lBQUVMLEtBQUssRUFBRUEsS0FBSztJQUFBLGVBQWVoSztFQUFNLEdBQzFEQyxRQUFRLEdBQUdBLFFBQVEsR0FBRyxJQUFJLENBQ2Q7QUFFbkIsQ0FBQztBQUVERyxrQkFBQSxHQUFlaUYsTUFBTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGckIsTUFBQXdGLFFBQUEsR0FBQXJMLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQWMsa0JBQUEsR0FBZXlLLFFBQUEsQ0FBQWxMLE9BQU0sQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RyQixNQUFNbUwsWUFBWSxHQUFHLEtBQUs7QUFFakIxSyxvQkFBQSxHQUFBMEssWUFBQTtBQURULE1BQU1DLFdBQVcsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0FBQ3hEM0ssbUJBQUEsR0FBQTJLLFdBQUEsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z2QixNQUFNQyxtQkFBbUIsR0FDdkIsd0hBQXdIO0FBT3hINUssMkJBQUEsR0FBQTRLLG1CQUFBO0FBTkYsTUFBTUMseUJBQXlCLEdBQzdCLGtEQUFrRDtBQU1sRDdLLGlDQUFBLEdBQUE2Syx5QkFBQTtBQUxGLE1BQU1DLHFCQUFxQixHQUFHLDZCQUE2QjtBQU16RDlLLDZCQUFBLEdBQUE4SyxxQkFBQTtBQUxGLE1BQU1DLHlCQUF5QixHQUFHLHVDQUF1QztBQU12RS9LLGlDQUFBLEdBQUErSyx5QkFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEYsTUFBQUMsWUFBQSxHQUFBOUwsbUJBQUE7QUFDQSxNQUFBK0wsUUFBQSxHQUFBL0wsbUJBQUE7QUFDQSxNQUFBMEYsUUFBQSxHQUFBMUYsbUJBQUE7QUFFQSxNQUFBZ00sT0FBQSxHQUFBaE0sbUJBQUE7QUFFTyxNQUFNeUssaUJBQWlCLEdBQUdBLENBQUM3SixLQUFLLEVBQUVxTCxLQUFLLEVBQUVDLFNBQVMsR0FBRyxFQUFFLEtBQUk7RUFDaEV4SixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRS9CLEtBQUssQ0FBQztFQUN0QzhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixFQUFFL0IsS0FBSyxFQUFFOEosS0FBSyxFQUFFeUIsTUFBTSxFQUFFQyxNQUFNLENBQUM7RUFDbkUsSUFBSXZCLFNBQVMsR0FBR2pLLEtBQUssRUFBRWlLLFNBQVM7RUFDaEMsSUFBSXdCLElBQUksR0FBR3pMLEtBQUssRUFBRXlMLElBQUksR0FBR3pMLEtBQUssQ0FBQ3lMLElBQUksR0FBRyxJQUFJO0VBRTFDLElBQUlDLFdBQVcsR0FBc0IsSUFBQU4sT0FBQSxDQUFBTyxhQUFhLEVBQUMzTCxLQUFLLEVBQUVxTCxLQUFLLEVBQUVJLElBQUksQ0FBQztFQUN0RSxJQUFJRyxNQUFNLEdBQUcsSUFBQVQsUUFBQSxDQUFBVSxRQUFRLEVBQUM3TCxLQUFLLEVBQUVxTCxLQUFLLEVBQUVwQixTQUFTLENBQUM7RUFDOUMsSUFBSTZCLFVBQVUsR0FBRyxJQUFBWixZQUFBLENBQUFhLFlBQVksRUFBQy9MLEtBQUssRUFBRXFMLEtBQUssRUFBRXBCLFNBQVMsQ0FBQztFQUN0RCxJQUFJK0IsWUFBWSxHQUFHVixTQUFTLEdBQ3hCLElBQUF4RyxRQUFBLENBQUFtSCxlQUFlLEVBQUNqTSxLQUFLLEVBQUVzTCxTQUFTLEVBQUVyQixTQUFTLENBQUMsR0FDNUMsRUFBRTtFQUNObkksT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUySixXQUFXLENBQUM7RUFFdEQsT0FBTztJQUNMUSxlQUFlLEVBQUVKLFVBQVU7SUFDM0IsR0FBR0osV0FBVztJQUNkLEdBQUdFLE1BQU07SUFDVCxHQUFHSTtHQUdKO0FBQ0gsQ0FBQztBQXRCWTlMLHlCQUFpQixHQUFBMkosaUJBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjlCLE1BQUFzQyxRQUFBLEdBQUE3TSxlQUFBLENBQUFGLG1CQUFBO0FBTWlCYyxjQUFBLEdBTlZpTSxRQUFBLENBQUExTSxPQUFNO0FBQ2IsTUFBQTZLLE1BQUEsR0FBQWhMLGVBQUEsQ0FBQUYsbUJBQUE7QUFLb0NjLFlBQUEsR0FMN0JvSyxNQUFBLENBQUE3SyxPQUFJO0FBQ1gsTUFBQThLLFdBQUEsR0FBQWpMLGVBQUEsQ0FBQUYsbUJBQUE7QUFJeUJjLGlCQUFBLEdBSmxCcUssV0FBQSxDQUFBOUssT0FBUztBQUNoQixNQUFBZ0wsT0FBQSxHQUFBbkwsZUFBQSxDQUFBRixtQkFBQTtBQUcwQ2MsYUFBQSxHQUhuQ3VLLE9BQUEsQ0FBQWhMLE9BQUs7QUFDWixNQUFBa0wsUUFBQSxHQUFBckwsZUFBQSxDQUFBRixtQkFBQTtBQUVTYyxjQUFBLEdBRkZ5SyxRQUFBLENBQUFsTCxPQUFNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKYixNQUFNMk0sb0JBQW9CLEdBQVcsT0FBTztBQUduQ2xNLDRCQUFBLEdBQUFrTSxvQkFBQTtBQUZULE1BQU1DLHFCQUFxQixHQUFXLEtBQUs7QUFFWm5NLDZCQUFBLEdBQUFtTSxxQkFBQTtBQUQvQixNQUFNQyxvQkFBb0IsR0FBVyxLQUFLO0FBQ1lwTSw0QkFBQSxHQUFBb00sb0JBQUEsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0h0RCxNQUFBQyxhQUFBLEdBQUFuTixtQkFBQTtBQUNBLE1BQUFvTixTQUFBLEdBQUFwTixtQkFBQTtBQUNBLE1BQU1xTixlQUFlLEdBQUdBLENBQUNqQixNQUFNLEVBQUVNLFVBQVUsRUFBRTdCLFNBQVMsS0FBSTtFQUN4RCxJQUFJeUMsY0FBYyxHQUFHbEIsTUFBTSxDQUFDTSxVQUFVLENBQUNhLFdBQVcsRUFBRSxDQUFDLElBQUksSUFBSTtFQUU3RDdLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixFQUFFK0osVUFBVSxDQUFDO0VBQ2pEaEssT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUV5SixNQUFNLENBQUNNLFVBQVUsQ0FBQ2EsV0FBVyxFQUFFLENBQUMsQ0FBQztFQUMvRDdLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixFQUFFMkssY0FBYyxDQUFDO0VBQzdDLElBQUksQ0FBQ0EsY0FBYyxFQUFFLE9BQU9aLFVBQVU7RUFFdEMsSUFBSSxPQUFPWSxjQUFjLEtBQUssUUFBUSxFQUFFO0lBQ3RDLElBQUl6QyxTQUFTLEtBQUssTUFBTSxJQUFJQSxTQUFTLEtBQUssT0FBTyxFQUFFO01BQ2pEbkksT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7TUFDekMrSixVQUFVLEdBQUdZLGNBQWMsQ0FBQ3pDLFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQU07TUFDTDZCLFVBQVUsR0FBR0EsVUFBVTtJQUN6QjtFQUNGLENBQUMsTUFBTTtJQUNMaEssT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7SUFDekMrSixVQUFVLEdBQUdZLGNBQWM7RUFDN0I7RUFDQTVLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFK0osVUFBVSxDQUFDO0VBQ2xELE9BQU9BLFVBQVU7QUFDbkIsQ0FBQztBQUVELE1BQU1DLFlBQVksR0FBR0EsQ0FDbkIvTCxLQUFhLEVBQ2JxTCxLQUFhLEVBQ2JwQixTQUFpQixLQUNQO0VBQ1YsSUFBSTZCLFVBQVUsR0FDWixJQUFBUyxhQUFBLENBQUFLLGVBQWUsRUFBQyxZQUFZLEVBQUU1TSxLQUFLLENBQUMsSUFBSSxJQUFBd00sU0FBQSxDQUFBSyxlQUFlLEVBQUMsWUFBWSxDQUFDO0VBQ3ZFLElBQUlDLFdBQVcsR0FBRyxJQUFBTixTQUFBLENBQUFPLG1CQUFtQixFQUFDL00sS0FBSyxFQUFFLFFBQVEsQ0FBQztFQUV0RDhMLFVBQVUsR0FBR2dCLFdBQVcsR0FDcEJMLGVBQWUsQ0FBQ0ssV0FBVyxFQUFFaEIsVUFBVSxFQUFFN0IsU0FBUyxDQUFDLEdBQ25ENkIsVUFBVTtFQUVkLE9BQU9BLFVBQVU7QUFDbkIsQ0FBQztBQUVRNUwsb0JBQUEsR0FBQTZMLFlBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNULE1BQUFpQixVQUFBLEdBQUE1TixtQkFBQTtBQUNBLE1BQUE2TixRQUFBLEdBQUEzTixlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQThOLFVBQUEsR0FBQTlOLG1CQUFBO0FBQ0EsTUFBQW1OLGFBQUEsR0FBQW5OLG1CQUFBO0FBRUEsTUFBQW9GLE9BQUEsR0FBQXBGLG1CQUFBO0FBR08sTUFBTXlNLFFBQVEsR0FBR0EsQ0FBQzdMLEtBQUssRUFBRXFMLEtBQUssRUFBRThCLFNBQVMsS0FBWTtFQUMxRCxJQUFJdkIsTUFBTSxHQUFHLElBQUFXLGFBQUEsQ0FBQUssZUFBZSxFQUFDLFFBQVEsRUFBRTVNLEtBQUssQ0FBQztFQUM3QzhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRS9CLEtBQUssQ0FBQztFQUNoQzhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFNkosTUFBTSxDQUFDO0VBQzlDLE1BQU07SUFBRUEsTUFBTSxFQUFFd0I7RUFBYSxDQUFFLEdBQUdGLFVBQUEsQ0FBQUcsYUFBYTtFQUMvQyxNQUFNO0lBQUVDLEtBQUssRUFBRUM7RUFBVyxDQUFFLEdBQUdILGFBQWE7RUFDNUMsSUFBSSxDQUFDeEIsTUFBTSxFQUFFLE9BQU8sRUFBRTtFQUN0QixJQUFJNEIsV0FBVyxHQUFHQyxpQkFBaUIsQ0FBQzdCLE1BQU0sRUFBRW9CLFVBQUEsQ0FBQVgscUJBQXFCLENBQUM7RUFDbEUsSUFBSXFCLFNBQVMsR0FBR0gsV0FBVyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSUEsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUU3RDFMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFMkwsU0FBUyxDQUFDO0VBQ3pDLElBQUlDLGNBQWMsR0FBR0QsU0FBUyxHQUFHRSxrQkFBa0IsQ0FBQ0YsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDeEU1TCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRTRMLGNBQWMsQ0FBQztFQUNwRCxJQUFJRSxtQkFBbUIsR0FBR0gsU0FBUyxHQUFHQSxTQUFTLEdBQUdDLGNBQWM7RUFDaEU3TCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEVBQUV5TCxXQUFXLENBQUM7RUFDeEMsSUFBSUssbUJBQW1CLEVBQUU7SUFDdkIsSUFBSUMsYUFBYSxHQUFHQyxZQUFZLENBQzlCUCxXQUFXLEVBQ1hOLFVBQUEsQ0FBQUcsYUFBYSxDQUFDekIsTUFBTSxFQUNwQitCLGNBQWMsQ0FDZjtJQUNEN0wsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUrTCxhQUFhLENBQUM7SUFDN0MsT0FBT0EsYUFBYTtFQUN0QjtFQUNBLE9BQU87SUFDTGxDO0dBQ0Q7QUFDSCxDQUFDO0FBM0JZMUwsZ0JBQVEsR0FBQTJMLFFBQUE7QUE2QmQsTUFBTW1DLGNBQWMsR0FBSUMsWUFBb0IsSUFBWTtFQUM3RCxNQUFNO0lBQUVyQztFQUFNLENBQUUsR0FBR3NCLFVBQUEsQ0FBQUcsYUFBYTtFQUNoQyxNQUFNO0lBQUVDO0VBQUssQ0FBRSxHQUFHMUIsTUFBTTtFQUN4QixNQUFNc0MsU0FBUyxHQUFHWixLQUFLLENBQUNXLFlBQVksQ0FBQyxJQUFJLEVBQUU7RUFFM0MsSUFBSUMsU0FBUyxFQUFFO0lBQ2IsSUFBSUEsU0FBUyxLQUFLLE1BQU0sRUFBRSxPQUFPQSxTQUFTO0VBQzVDO0VBRUEsT0FBTztJQUNMdEM7R0FDRDtBQUNILENBQUM7QUFaWTFMLHNCQUFjLEdBQUE4TixjQUFBO0FBYzNCLE1BQU1QLGlCQUFpQixHQUFHQSxDQUN4QlEsWUFBb0IsRUFDcEJFLE9BQXdCLEtBQ1o7RUFDWixPQUFPRixZQUFZLENBQUNHLElBQUksRUFBRSxDQUFDQyxLQUFLLENBQUNGLE9BQU8sQ0FBQztBQUMzQyxDQUFDO0FBRUQsTUFBTUosWUFBWSxHQUFHQSxDQUNuQk8sVUFBb0IsRUFDcEJsQixhQUEyRSxFQUMzRWMsU0FBMEIsS0FDaEI7RUFDVnBNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixFQUFFdU0sVUFBVSxDQUFDO0VBQzNDeE0sT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUV1TSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDOUN4TSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRWtMLFFBQUEsQ0FBQXhOLE9BQU0sQ0FBQzZPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3REeE0sT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUVrTCxRQUFBLENBQUF4TixPQUFNLENBQUM7RUFFdkMsSUFBSTtJQUFFOE8sS0FBSztJQUFFQztFQUFLLENBQUUsR0FBR3BCLGFBQWE7RUFDcEMsSUFBSUcsV0FBVyxHQUFrQ1csU0FBUztFQUMxRCxJQUFJTyxXQUFXLEdBQW1CSCxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQzNDQyxLQUFLLENBQUNELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUNwQkMsS0FBSyxFQUFFRyxLQUFLO0VBQ2hCLElBQUlDLFdBQVcsR0FBR0wsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUdFLEtBQUs7RUFDdkQsSUFBSUksU0FBUyxHQUFHTixVQUFVLENBQUNPLE1BQU07RUFFakMsSUFBSUMsS0FBSyxHQUFHRixTQUFTLEdBQUcsQ0FBQyxHQUFHTixVQUFVLENBQUNTLEtBQUssQ0FBQyxDQUFDLEVBQUVILFNBQVMsQ0FBQyxHQUFHLEVBQUU7RUFDL0QsSUFBSUksV0FBVyxHQUFHLEVBQUU7RUFDcEJGLEtBQUssR0FDREEsS0FBSyxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEtBQUk7SUFDcEIsSUFBSUMsZUFBZSxHQUFHM0IsaUJBQWlCLENBQUN5QixJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ2xELElBQUlHLHNCQUFzQixHQUN4QkQsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsR0FDN0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQ2pCQSxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWSxHQUNuQyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDakIsRUFBRTtJQUNSdE4sT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFcU4sZUFBZSxDQUFDO0lBQzVDLElBQUlFLGNBQWMsR0FDaEJELHNCQUFzQixDQUFDUixNQUFNLEdBQUcsQ0FBQyxHQUM3QlEsc0JBQXNCLEdBQ3RCNUIsaUJBQWlCLENBQUMyQixlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBRWhEdE4sT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFdU4sY0FBYyxDQUFDO0lBRXpDQSxjQUFjLENBQUNULE1BQU0sR0FBRyxDQUFDLEdBQ3JCUyxjQUFjLENBQUNMLEdBQUcsQ0FBQyxDQUFDTSxLQUFLLEVBQUVKLENBQUMsS0FBSTtNQUM5QkssaUJBQWlCLENBQUNSLFdBQVcsRUFBRU8sS0FBSyxFQUFFLEdBQUdILGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxHQUNGSSxpQkFBaUIsQ0FDZlIsV0FBVyxFQUNYSSxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQ2xCQSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQ25CO0VBQ1AsQ0FBQyxDQUFDLEdBQ0YsRUFBRTtFQUVOLE9BQU87SUFDTDdCLFdBQVc7SUFDWGtCLFdBQVc7SUFDWEUsV0FBVztJQUNYLEdBQUdLO0dBQ0o7QUFDSCxDQUFDO0FBRUQsTUFBTXBCLGtCQUFrQixHQUFHQSxDQUFDOU0sTUFBYyxFQUFFMk8sSUFBQSxHQUFlLElBQUksS0FBSTtFQUNqRSxJQUFJekMsVUFBQSxDQUFBWixvQkFBb0IsQ0FBQ3NELElBQUksQ0FBQzVPLE1BQU0sQ0FBQyxFQUFFO0lBQ3JDLE9BQU8sR0FBR0EsTUFBTSxHQUFHMk8sSUFBSSxFQUFFO0VBQzNCLENBQUMsTUFBTTtJQUNMLE9BQU8zTyxNQUFNO0VBQ2Y7QUFDRixDQUFDO0FBRUQsTUFBTTBPLGlCQUFpQixHQUFHQSxDQUN4QkcsRUFBVSxFQUNWQyxVQUFrQixFQUNsQkMsZUFBdUIsS0FDYjtFQUNWLElBQUlDLHFCQUFxQixHQUFHckMsaUJBQWlCLENBQUNvQyxlQUFlLEVBQUUsR0FBRyxDQUFDO0VBQ25FLElBQUlFLGVBQWUsR0FBR0QscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0VBQzlDLElBQUlFLGVBQWUsR0FBR0YscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0VBQzlDLElBQUlHLGVBQWUsR0FBR0gscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0VBRTlDSCxFQUFFLENBQUMsU0FBUyxJQUFBbkwsT0FBQSxDQUFBMEwscUJBQXFCLEVBQUNOLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHaEMsa0JBQWtCLENBQ3RFbUMsZUFBZSxDQUNoQixJQUFJQyxlQUFlLElBQUlDLGVBQWUsRUFBRTtFQUV6QyxPQUFPTixFQUFFO0FBQ1gsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSUQsTUFBQVEsV0FBQSxHQUFBL1EsbUJBQUE7QUFDQSxNQUFBZ1IsY0FBQSxHQUFBQyxZQUFBLENBQUFqUixtQkFBQTtBQUNBLE1BQUE0TixVQUFBLEdBQUE1TixtQkFBQTtBQUNBLE1BQUFvTixTQUFBLEdBQUFwTixtQkFBQTtBQUVPLE1BQU1rUixrQkFBa0IsR0FBR0EsQ0FBQ0MsV0FBVyxFQUFFQyxLQUFLLEtBQUk7RUFDdkQxTyxPQUFPLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRXlPLEtBQUssQ0FBQztFQUMvQzFPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFd08sV0FBVyxDQUFDO0VBQzNDek8sT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLEVBQUVpTCxVQUFBLENBQUFaLG9CQUFvQixDQUFDc0QsSUFBSSxDQUFDYyxLQUFLLENBQUMsQ0FBQztFQUMzRTFPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixFQUFFb08sV0FBQSxDQUFBdEYsV0FBVyxDQUFDO0VBQzFDL0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLEVBQUVvTyxXQUFBLENBQUF0RixXQUFXLENBQUM0RixRQUFRLENBQUNELEtBQUssQ0FBQyxDQUFDO0VBQ2hFLElBQUksQ0FBQ0EsS0FBSyxFQUFFLE9BQU9BLEtBQUs7RUFDeEIsSUFBSXhELFVBQUEsQ0FBQVosb0JBQW9CLENBQUNzRCxJQUFJLENBQUNjLEtBQUssQ0FBQyxFQUFFLE9BQU9BLEtBQUs7RUFDbEQsSUFBSSxPQUFPQSxLQUFLLEtBQUssUUFBUSxFQUFFO0lBQzdCLElBQUlMLFdBQUEsQ0FBQXRGLFdBQVcsQ0FBQzRGLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLEVBQzdCLE9BQU8sSUFBQWhFLFNBQUEsQ0FBQUssZUFBZSxFQUFDMEQsV0FBVyxFQUFFLEtBQUssRUFBRUMsS0FBSyxDQUFDN0QsV0FBVyxFQUFFLENBQUM7SUFDakUsTUFBTSxJQUFJK0QsS0FBSyxDQUFDTixjQUFjLENBQUNwRixxQkFBcUIsQ0FBQztFQUN2RDtFQUVBLE1BQU0sSUFBSTBGLEtBQUssQ0FBQ04sY0FBYyxDQUFDbkYseUJBQXlCLENBQUM7QUFDM0QsQ0FBQztBQWZZL0ssMEJBQWtCLEdBQUFvUSxrQkFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNML0JwUSxrQkFBQSxHQUFlLENBQ2IsV0FBVyxFQUNYLGNBQWMsRUFDZCxNQUFNLEVBQ04sWUFBWSxFQUNaLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFBUSxFQUNSLE9BQU8sRUFDUCxnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLFlBQVksRUFDWixPQUFPLEVBQ1AsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osV0FBVyxFQUNYLE9BQU8sRUFDUCxnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sVUFBVSxFQUNWLFVBQVUsRUFDVixlQUFlLEVBQ2YsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsV0FBVyxFQUNYLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLGNBQWMsRUFDZCxlQUFlLEVBQ2YsZUFBZSxFQUNmLGVBQWUsRUFDZixlQUFlLEVBQ2YsWUFBWSxFQUNaLFVBQVUsRUFDVixhQUFhLEVBQ2IsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLGFBQWEsRUFDYixhQUFhLEVBQ2IsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxhQUFhLEVBQ2IsVUFBVSxFQUNWLFNBQVMsRUFDVCxXQUFXLEVBQ1gsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsVUFBVSxFQUNWLGVBQWUsRUFDZixXQUFXLEVBQ1gsY0FBYyxFQUNkLFdBQVcsRUFDWCxZQUFZLEVBQ1osV0FBVyxFQUNYLHNCQUFzQixFQUN0QixXQUFXLEVBQ1gsV0FBVyxFQUNYLFlBQVksRUFDWixXQUFXLEVBQ1gsYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLE1BQU0sRUFDTixXQUFXLEVBQ1gsT0FBTyxFQUNQLFNBQVMsRUFDVCxRQUFRLEVBQ1Isa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLFdBQVcsRUFDWCxXQUFXLEVBQ1gsVUFBVSxFQUNWLGFBQWEsRUFDYixNQUFNLEVBQ04sU0FBUyxFQUNULE9BQU8sRUFDUCxXQUFXLEVBQ1gsUUFBUSxFQUNSLFdBQVcsRUFDWCxRQUFRLEVBQ1IsZUFBZSxFQUNmLFdBQVcsRUFDWCxlQUFlLEVBQ2YsZUFBZSxFQUNmLFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixLQUFLLEVBQ0wsV0FBVyxFQUNYLFdBQVcsRUFDWCxhQUFhLEVBQ2IsUUFBUSxFQUNSLFlBQVksRUFDWixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDWCxXQUFXLEVBQ1gsV0FBVyxFQUNYLE1BQU0sRUFDTixhQUFhLEVBQ2IsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFFBQVEsRUFDUixXQUFXLEVBQ1gsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsWUFBWSxFQUNaLFFBQVEsRUFDUixhQUFhLENBQ2QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BKRCxNQUFBaVEsV0FBQSxHQUFBL1EsbUJBQUE7QUFDQSxNQUFNdVIsS0FBSyxHQUFHO0VBQ1pDLE9BQU8sRUFBRSxFQUFFO0VBQ1hDLE1BQU0sRUFBRSxFQUFFO0VBQ1ZDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE1BQU0sRUFBRSxHQUFHO0VBQ1hDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE1BQU0sRUFBRSxHQUFHO0VBQ1hDLE9BQU8sRUFBRTtDQUNWO0FBQ0QsTUFBTUMsWUFBWSxHQUFHO0VBQ25CQyxJQUFJLEVBQUUsQ0FBQztFQUNQUixPQUFPLEVBQUUsQ0FBQztFQUNWQyxNQUFNLEVBQUUsR0FBRztFQUNYQyxLQUFLLEVBQUUsQ0FBQztFQUNSQyxNQUFNLEVBQUUsR0FBRztFQUNYQyxLQUFLLEVBQUUsQ0FBQztFQUNSQyxNQUFNLEVBQUUsR0FBRztFQUNYQyxPQUFPLEVBQUU7Q0FDVjtBQUVELE1BQU1HLFlBQVksR0FBRztFQUNuQjNDLEtBQUssRUFBRSxPQUFPO0VBQ2Q0QyxNQUFNLEVBQUUsUUFBUTtFQUNoQkMsTUFBTSxFQUFFLFFBQVE7RUFDaEJDLE1BQU0sRUFBRSxRQUFRO0VBQ2hCQyxLQUFLLEVBQUUsT0FBTztFQUNkQyxLQUFLLEVBQUUsT0FBTztFQUNkQyxNQUFNLEVBQUUsUUFBUTtFQUNoQkMsTUFBTSxFQUFFO0NBQ1Q7QUFFWTFSLHFCQUFhLEdBQUc7RUFDM0JvTixLQUFLLEVBQUU7SUFDTHVFLE9BQU8sRUFBRSxHQUFHO0lBQ1pDLE1BQU0sRUFBRW5CO0dBQ1Q7RUFDRG9CLE1BQU0sRUFBRTtJQUNORixPQUFPLEVBQUUsR0FBRztJQUNaQyxNQUFNLEVBQUVuQjtHQUNUO0VBQ0Q3RSxVQUFVLEVBQUVxRSxXQUFBLENBQUF2RixZQUFZO0VBQ3hCZ0IsTUFBTSxFQUFFO0lBQUUwQixLQUFLLEVBQUU2RCxZQUFZO0lBQUUzQyxLQUFLLEVBQUUyQixXQUFBLENBQUF2RixZQUFZO0lBQUUyRCxLQUFLLEVBQUU4QztFQUFZO0NBQ3hFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ00sTUFBTXpFLGVBQWUsR0FBR0EsQ0FBQzJELFdBQVcsRUFBRXlCLGNBQWMsS0FBSTtFQUM3RCxPQUFPQSxjQUFjLENBQUN6QixXQUFXLENBQUMsR0FBR3lCLGNBQWMsQ0FBQ3pCLFdBQVcsQ0FBQyxHQUFHLEtBQUs7QUFDMUUsQ0FBQztBQUZZclEsdUJBQWUsR0FBQTBNLGVBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTVCLE1BQUF3RCxjQUFBLEdBQUFDLFlBQUEsQ0FBQWpSLG1CQUFBO0FBQ0EsTUFBQThOLFVBQUEsR0FBQTlOLG1CQUFBO0FBRU8sTUFBTXlOLGVBQWUsR0FBR0EsQ0FBQ29GLE1BQU0sRUFBRUMsU0FBUyxHQUFHLEtBQUssRUFBRUMsSUFBSSxHQUFHLEVBQUUsS0FBSTtFQUN0RXJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFa1EsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLElBQUksQ0FBQztFQUMxRCxJQUFJakYsVUFBQSxDQUFBRyxhQUFhLENBQUM0RSxNQUFNLENBQUMsRUFBRTtJQUN6QixJQUFJQyxTQUFTLEVBQUUsT0FBT2hGLFVBQUEsQ0FBQUcsYUFBYSxDQUFDNEUsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RELElBQUksQ0FBQ0UsSUFBSSxFQUFFLE9BQU9qRixVQUFBLENBQUFHLGFBQWEsQ0FBQzRFLE1BQU0sQ0FBQztJQUN2Q25RLE9BQU8sQ0FBQ0MsR0FBRyxDQUNULGdDQUFnQyxFQUNoQ21MLFVBQUEsQ0FBQUcsYUFBYSxDQUFDNEUsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNFLElBQUksQ0FBQyxDQUN0QztJQUNELE9BQU9qRixVQUFBLENBQUFHLGFBQWEsQ0FBQzRFLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDRSxJQUFJLENBQUM7RUFDOUM7RUFDQSxNQUFNLElBQUl6QixLQUFLLENBQUNOLGNBQWMsQ0FBQ3JGLHlCQUF5QixDQUFDO0FBQzNELENBQUM7QUFaWTdLLHVCQUFlLEdBQUEyTSxlQUFBO0FBY3JCLE1BQU1FLG1CQUFtQixHQUFHQSxDQUFDcUYsVUFBVSxFQUFFQyxJQUFJLEtBQVM7RUFDM0QsT0FBT0QsVUFBVSxFQUFFdEksS0FBSyxFQUFFeUIsTUFBTSxDQUFDOEcsSUFBSSxDQUFDLEdBQ2xDRCxVQUFVLEVBQUV0SSxLQUFLLEVBQUV5QixNQUFNLENBQUM4RyxJQUFJLENBQUMsR0FDL0IsSUFBSTtBQUNWLENBQUM7QUFKWW5TLDJCQUFtQixHQUFBNk0sbUJBQUEsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCaEMsTUFBTXVGLFVBQVUsR0FBRztFQUNqQkMsUUFBUSxFQUFFLHFDQUFxQztFQUMvQ0MsU0FBUyxFQUFFLDhDQUE4QztFQUN6REMsYUFBYSxFQUFFLDhDQUE4QztFQUM3REMsT0FBTyxFQUFFLDhDQUE4QztFQUN2REMsUUFBUSxFQUFFLHVEQUF1RDtFQUNqRUMsT0FBTyxFQUFFLCtEQUErRDtFQUN4RUMsUUFBUSxFQUFFLHlFQUF5RTtFQUNuRkMsT0FBTyxFQUFFLGtGQUFrRjtFQUMzRkMsT0FBTyxFQUFFLDJGQUEyRjtFQUNwR0MsT0FBTyxFQUFFLG9HQUFvRztFQUM3R0MsS0FBSyxFQUFFLGtGQUFrRjtFQUN6RkMsTUFBTSxFQUFFLHNIQUFzSDtFQUM5SEMsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQ0MsT0FBTyxFQUFFLDhCQUE4QjtFQUN2Q0MsSUFBSSxFQUFFLGlHQUFpRztFQUN2R0MsR0FBRyxFQUFFO0NBQ047QUFFUXBULGtCQUFBLEdBQUFvUyxVQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlQsTUFBQTlGLFNBQUEsR0FBQXBOLG1CQUFBO0FBQ0EsTUFBQW1VLGFBQUEsR0FBQW5VLG1CQUFBO0FBRUEsTUFBTW9VLGFBQWEsR0FBVyxLQUFLO0FBQzVCLE1BQU1DLGlCQUFpQixHQUFHQSxDQUFDbkcsS0FBSyxFQUFFeUUsTUFBTSxFQUFFMUcsS0FBSyxLQUF1QjtFQUMzRSxJQUFJLENBQUNpQyxLQUFLLElBQUksQ0FBQ3lFLE1BQU0sRUFDbkIsT0FBTztJQUNMekUsS0FBSyxFQUFFLElBQUFkLFNBQUEsQ0FBQUssZUFBZSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDckNrRixNQUFNLEVBQUUsSUFBQXZGLFNBQUEsQ0FBQUssZUFBZSxFQUFDLFFBQVEsRUFBRSxJQUFJO0dBQ3ZDO0VBQ0gsSUFBSSxDQUFDUyxLQUFLLEVBQUUsT0FBTztJQUFFQSxLQUFLLEVBQUV5RSxNQUFNO0lBQUVBO0VBQU0sQ0FBRTtFQUM1QyxJQUFJLENBQUNBLE1BQU0sRUFBRSxPQUFPO0lBQUV6RSxLQUFLO0lBQUV5RSxNQUFNLEVBQUV6RTtFQUFLLENBQUU7RUFDNUMsT0FBTztJQUFFQSxLQUFLO0lBQUV5RTtFQUFNLENBQUU7QUFDMUIsQ0FBQztBQVRZN1IseUJBQWlCLEdBQUF1VCxpQkFBQTtBQVd2QixNQUFNQyxpQkFBaUIsR0FBR0EsQ0FBQ3BHLEtBQUssRUFBRXlFLE1BQU0sRUFBRTFHLEtBQUssS0FBdUI7RUFDM0UsSUFBSXNJLFlBQVksR0FBR0gsYUFBYTtFQUNoQyxJQUFJLENBQUNsRyxLQUFLLElBQUksQ0FBQ3lFLE1BQU0sRUFDbkIsT0FBTztJQUNMekUsS0FBSyxFQUFFLElBQUFkLFNBQUEsQ0FBQUssZUFBZSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDckNrRixNQUFNLEVBQUUsSUFBQXZGLFNBQUEsQ0FBQUssZUFBZSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDdkM4RztHQUNEO0VBQ0gsSUFBSSxDQUFDckcsS0FBSyxFQUFFLE9BQU87SUFBRUEsS0FBSyxFQUFFeUUsTUFBTTtJQUFFQSxNQUFNO0lBQUU0QjtFQUFZLENBQUU7RUFDMUQsSUFBSSxDQUFDNUIsTUFBTSxFQUFFLE9BQU87SUFBRXpFLEtBQUs7SUFBRXlFLE1BQU0sRUFBRXpFLEtBQUs7SUFBRXFHO0VBQVksQ0FBRTtFQUMxRCxPQUFPO0lBQUVyRyxLQUFLO0lBQUV5RSxNQUFNO0lBQUU0QjtFQUFZLENBQUU7QUFDeEMsQ0FBQztBQVhZelQseUJBQWlCLEdBQUF3VCxpQkFBQTtBQWF2QixNQUFNRSxvQkFBb0IsR0FBR0EsQ0FDbEN0RyxLQUFLLEVBQ0x5RSxNQUFNLEVBQ04xRyxLQUFLLEtBQ2dCO0VBQ3JCLElBQUksQ0FBQ2lDLEtBQUssSUFBSSxDQUFDeUUsTUFBTSxFQUNuQixPQUFPO0lBQ0x6RSxLQUFLLEVBQUUsSUFBQWQsU0FBQSxDQUFBSyxlQUFlLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUNyQ2tGLE1BQU0sRUFBRSxJQUFBdkYsU0FBQSxDQUFBSyxlQUFlLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHO0dBQzFDO0VBQ0gsSUFBSSxDQUFDUyxLQUFLLEVBQUUsT0FBTztJQUFFQSxLQUFLLEVBQUV5RSxNQUFNO0lBQUVBLE1BQU0sRUFBRUEsTUFBTSxHQUFHO0VBQUMsQ0FBRTtFQUN4RCxJQUFJLENBQUNBLE1BQU0sRUFBRSxPQUFPO0lBQUV6RSxLQUFLO0lBQUV5RSxNQUFNLEVBQUV6RSxLQUFLLEdBQUc7RUFBQyxDQUFFO0VBQ2hELE9BQU87SUFBRUEsS0FBSztJQUFFeUUsTUFBTSxFQUFFQSxNQUFNLEdBQUc7RUFBQyxDQUFFO0FBQ3RDLENBQUM7QUFiWTdSLDRCQUFvQixHQUFBMFQsb0JBQUE7QUFlMUIsTUFBTUMsZUFBZSxHQUFHQSxDQUFDdkcsS0FBSyxFQUFFeUUsTUFBTSxFQUFFMUcsS0FBSyxLQUF1QjtFQUN6RSxJQUFJLENBQUNpQyxLQUFLLElBQUksQ0FBQ3lFLE1BQU0sRUFBRTtJQUNyQixJQUFJekUsS0FBSyxHQUFHLElBQUFkLFNBQUEsQ0FBQUssZUFBZSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDMUMsSUFBSWtGLE1BQU0sR0FBR3pFLEtBQUssR0FBRyxDQUFDO0lBRXRCLElBQUlxRyxZQUFZLEdBQUdILGFBQWE7SUFDaEMsT0FBTztNQUNMbEcsS0FBSztNQUNMeUUsTUFBTTtNQUNONEI7S0FDRDtFQUNIO0VBQ0EsSUFBSSxDQUFDckcsS0FBSyxFQUFFLE9BQU87SUFBRUEsS0FBSyxFQUFFeUUsTUFBTTtJQUFFQSxNQUFNLEVBQUVBLE1BQU0sR0FBRztFQUFDLENBQUU7RUFDeEQsSUFBSSxDQUFDQSxNQUFNLEVBQUUsT0FBTztJQUFFekUsS0FBSztJQUFFeUUsTUFBTSxFQUFFekUsS0FBSyxHQUFHO0VBQUMsQ0FBRTtFQUNoRCxPQUFPO0lBQUVBLEtBQUs7SUFBRXlFLE1BQU0sRUFBRUEsTUFBTSxHQUFHO0VBQUMsQ0FBRTtBQUN0QyxDQUFDO0FBZlk3Uix1QkFBZSxHQUFBMlQsZUFBQTtBQWlCckIsTUFBTUMsbUJBQW1CLEdBQUdBLENBQ2pDeEcsS0FBSyxFQUNMeUUsTUFBTSxFQUNOMUcsS0FBSyxLQUNnQjtFQUNyQixJQUFJLENBQUNpQyxLQUFLLElBQUksQ0FBQ3lFLE1BQU0sRUFDbkIsT0FBTztJQUNMekUsS0FBSyxFQUFFLElBQUFkLFNBQUEsQ0FBQUssZUFBZSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDckNrRixNQUFNLEVBQUUsSUFBQXZGLFNBQUEsQ0FBQUssZUFBZSxFQUFDLFFBQVEsRUFBRSxJQUFJO0dBQ3ZDO0VBQ0gsSUFBSSxDQUFDUyxLQUFLLEVBQUUsT0FBTztJQUFFQSxLQUFLLEVBQUV5RSxNQUFNO0lBQUVBO0VBQU0sQ0FBRTtFQUM1QyxJQUFJLENBQUNBLE1BQU0sRUFBRSxPQUFPO0lBQUV6RSxLQUFLO0lBQUV5RSxNQUFNLEVBQUV6RTtFQUFLLENBQUU7RUFDNUMsT0FBTztJQUFFQSxLQUFLO0lBQUV5RTtFQUFNLENBQUU7QUFDMUIsQ0FBQztBQWJZN1IsMkJBQW1CLEdBQUE0VCxtQkFBQTtBQWV6QixNQUFNN0gsZUFBZSxHQUFHQSxDQUFDak0sS0FBSyxFQUFFcUwsS0FBSyxFQUFFcEIsU0FBUyxLQUFJO0VBQ3pELElBQUksQ0FBQ3NKLGFBQUEsQ0FBQWpCLFVBQVUsQ0FBQ2pILEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRTtFQUNqQyxJQUFJMEksVUFBVSxHQUFHQyxpQ0FBaUMsRUFBRTtFQUVwRCxPQUFPO0lBQ0xDLFFBQVEsRUFBRVYsYUFBQSxDQUFBakIsVUFBVSxDQUFDakgsS0FBSyxDQUFDO0lBQzNCLEdBQUcwSTtHQUNKO0FBQ0gsQ0FBQztBQVJZN1QsdUJBQWUsR0FBQStMLGVBQUE7QUFVNUIsTUFBTStILGlDQUFpQyxHQUFHQSxDQUFBLEtBQUs7RUFDN0MsT0FBTztJQUNMRSxPQUFPLEVBQUUsTUFBTTtJQUNmQyxhQUFhLEVBQUUsUUFBUTtJQUN2QkMsVUFBVSxFQUFFLFFBQVE7SUFDcEJDLGNBQWMsRUFBRTtHQUNqQjtBQUNILENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVGTSxNQUFNbkUscUJBQXFCLEdBQUdBLENBQUNpQyxJQUFJLEVBQUVtQyxlQUFlLEdBQUcsS0FBSyxLQUFJO0VBQ3JFeFMsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEVBQUVvUSxJQUFJLENBQUM7RUFDNUMsSUFBSW9DLFdBQVcsR0FBR0QsZUFBZSxHQUFHbkMsSUFBSSxDQUFDeEYsV0FBVyxFQUFFLEdBQUd3RixJQUFJO0VBQzdELE9BQU8sR0FBR29DLFdBQVcsQ0FBQ3hGLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUN5RixXQUFXLEVBQUUsR0FBR0QsV0FBVyxDQUFDeEYsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzFFLENBQUM7QUFKWTdPLDZCQUFxQixHQUFBZ1EscUJBQUEsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQyxNQUFBdUUsVUFBQSxHQUFBclYsbUJBQUE7QUFDQSxNQUFBbU4sYUFBQSxHQUFBbk4sbUJBQUE7QUFDQSxNQUFBMEYsUUFBQSxHQUFBMUYsbUJBQUE7QUFRTyxNQUFNdU0sYUFBYSxHQUFHQSxDQUMzQjNMLEtBQWEsRUFDYnFMLEtBQWEsRUFDYkksSUFBcUIsS0FDQTtFQUNyQkEsSUFBSSxHQUFJekwsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHeUwsSUFBSSxHQUFJLElBQUk7RUFDckMsSUFBSTZCLEtBQUssR0FBRyxJQUFBbUgsVUFBQSxDQUFBbkUsa0JBQWtCLEVBQUMsT0FBTyxFQUFFLElBQUEvRCxhQUFBLENBQUFLLGVBQWUsRUFBQyxPQUFPLEVBQUU1TSxLQUFLLENBQUMsQ0FBQztFQUN4RSxJQUFJK1IsTUFBTSxHQUFHLElBQUEwQyxVQUFBLENBQUFuRSxrQkFBa0IsRUFBQyxRQUFRLEVBQUUsSUFBQS9ELGFBQUEsQ0FBQUssZUFBZSxFQUFDLFFBQVEsRUFBRTVNLEtBQUssQ0FBQyxDQUFDO0VBQzNFOEIsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLEVBQUV1TCxLQUFLLEVBQUV5RSxNQUFNLENBQUM7RUFDakRqUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVzSixLQUFLLENBQUM7RUFDL0IsUUFBUUEsS0FBSztJQUNYLEtBQUssUUFBUTtNQUNYdkosT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7TUFDN0IsT0FBTyxJQUFBK0MsUUFBQSxDQUFBMk8saUJBQWlCLEVBQUNuRyxLQUFLLEVBQUV5RSxNQUFNLEVBQUUxRyxLQUFLLENBQUM7SUFDaEQsS0FBSyxRQUFRO01BQ1gsT0FBTyxJQUFBdkcsUUFBQSxDQUFBNE8saUJBQWlCLEVBQUNwRyxLQUFLLEVBQUV5RSxNQUFNLEVBQUUxRyxLQUFLLENBQUM7SUFDaEQsS0FBSyxXQUFXO01BQ2QsT0FBTyxJQUFBdkcsUUFBQSxDQUFBOE8sb0JBQW9CLEVBQUN0RyxLQUFLLEVBQUV5RSxNQUFNLEVBQUUxRyxLQUFLLENBQUM7SUFFbkQsS0FBSyxNQUFNO01BQ1R2SixPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRXVMLEtBQUssRUFBRXlFLE1BQU0sRUFBRTFHLEtBQUssQ0FBQztNQUN6RCxJQUFJcUosU0FBUyxHQUFHLElBQUE1UCxRQUFBLENBQUErTyxlQUFlLEVBQUN2RyxLQUFLLEVBQUV5RSxNQUFNLEVBQUUxRyxLQUFLLENBQUM7TUFDckR2SixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRTJTLFNBQVMsQ0FBQztNQUMxQyxPQUFPQSxTQUFTO0lBQ2xCLEtBQUssV0FBVztNQUNkLE9BQU8sSUFBQTVQLFFBQUEsQ0FBQWdQLG1CQUFtQixFQUFDeEcsS0FBSyxFQUFFeUUsTUFBTSxFQUFFMUcsS0FBSyxDQUFDO0VBQ3BEO0VBRUEsT0FBTztJQUNMaUMsS0FBSztJQUNMeUU7R0FDRDtBQUNILENBQUM7QUFoQ1k3UixxQkFBYSxHQUFBeUwsYUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1YxQixNQUFBeE0sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU11VixjQUFjLEdBQUdwVixjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRS9GLE1BQU13RSxPQUFPLEdBQThCQSxDQUFDO0VBQUV0RSxNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQ3ZFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUMwVSxjQUFjO0lBQUEsZUFBYzdVO0VBQU0sR0FDakNULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQWlGLE9BQVE7SUFBQSxHQUFLcEU7RUFBSyxFQUFJLENBQ1I7QUFFckIsQ0FBQztBQUVERSxrQkFBQSxHQUFla0UsT0FBTyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCdEIsTUFBQXdRLFNBQUEsR0FBQXRWLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZTBVLFNBQUEsQ0FBQW5WLE9BQU8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdEIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU15VixXQUFXLEdBQUd0VixjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRTVGLE1BQU15RSxTQUFTLEdBQThCQSxDQUFDO0VBQUV2RSxNQUFNLEdBQUcsRUFBRTtFQUFFLEdBQUdFO0FBQUssQ0FBRSxLQUFJO0VBQ3pFLE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUM0VSxXQUFXO0lBQUEsZUFBYy9VO0VBQU0sR0FDOUJULE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQWtGLFNBQVM7SUFBQSxHQUFLckU7RUFBSyxFQUFJLENBQ1o7QUFFbEIsQ0FBQztBQUVERSxrQkFBQSxHQUFlbUUsU0FBUyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCeEIsTUFBQXlRLFdBQUEsR0FBQXhWLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZTRVLFdBQUEsQ0FBQXJWLE9BQVMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeEIsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQUlBLE1BQU0yVixVQUFVLEdBQUd4VixjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRTNGLE1BQU1vVixHQUFHLEdBQThCQSxDQUFDO0VBQ3RDbFYsTUFBTSxHQUFHLEVBQUU7RUFDWDBRLEtBQUs7RUFDTHpRLFFBQVE7RUFDUnlPLEtBQUs7RUFDTCxHQUFHeE87QUFBSyxDQUNULEtBQUk7RUFFSCxNQUFNaVYsYUFBYSxHQUFHLE9BQU96RyxLQUFLLEtBQUssUUFBUSxHQUFHQSxLQUFLLENBQUMwRyxLQUFLLEdBQUcxRyxLQUFLO0VBRXJFLE9BQ0VuUCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDOFUsVUFBVTtJQUFDdkUsS0FBSyxFQUFFQSxLQUFLO0lBQUEsZUFBZTFRLE1BQU07SUFBRTBPLEtBQUssRUFBRUE7RUFBSyxHQUV6RG5QLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUNkLFNBQUEsQ0FBQW1GLEdBQUc7SUFBQ2tNLEtBQUssRUFBRUEsS0FBSztJQUFFaEMsS0FBSyxFQUFFeUcsYUFBb0I7SUFBQSxHQUFNalY7RUFBSyxFQUFJLENBQ2xEO0FBRWpCLENBQUM7QUFFREUsa0JBQUEsR0FBZThVLEdBQUcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmxCLE1BQUFHLEtBQUEsR0FBQTdWLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQWMsa0JBQUEsR0FBZWlWLEtBQUEsQ0FBQTFWLE9BQUcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEIsTUFBQUosT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBRUEsTUFBQWdXLGNBQUEsR0FBQTlWLGVBQUEsQ0FBQUYsbUJBQUE7QUFFQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFHQSxNQUFNbUYsSUFBSSxHQUFHLElBQUFoRixjQUFBLENBQUFFLE9BQU0sRUFBQyxNQUFNLENBQUMsQ0FBQ0UsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBQyxDQUFPSSxLQUFVLEtBQU07RUFDM0ZzTixLQUFLLEVBQUUsTUFBTTtFQUNiK0gsUUFBUSxFQUFFclYsS0FBSyxFQUFFeUwsSUFBSSxHQUFHekwsS0FBSyxDQUFDeUwsSUFBSSxHQUFHMkosY0FBQSxDQUFBM1YsT0FBWSxDQUFDZ00sSUFBSTtFQUN0RDZKLFNBQVMsRUFBRUYsY0FBQSxDQUFBM1YsT0FBWSxDQUFDOFYsU0FBUztFQUNqQ3JCLE9BQU8sRUFBRSxjQUFjO0VBQ3ZCMUYsS0FBSyxFQUFFLEdBQUd4TyxLQUFLLEVBQUV3TyxLQUFLLEdBQUd4TyxLQUFLLENBQUN3TyxLQUFLLEdBQUc0RyxjQUFBLENBQUEzVixPQUFZLENBQUMrTyxLQUFLO0NBQzFELENBQUMsQ0FBQztBQUdILE1BQU1nSCxVQUFVLEdBQThCQSxDQUFDO0VBQUV6VixRQUFRO0VBQUUsR0FBR0M7QUFBSyxDQUFFLEtBQUk7RUFDdkUsT0FBT1gsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ3NFLElBQUk7SUFBQSxHQUFLdkU7RUFBSyxHQUFHRCxRQUFRLENBQVE7QUFDM0MsQ0FBQztBQUVERyxrQkFBQSxHQUFlc1YsVUFBVSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCekIsTUFBQUMsWUFBQSxHQUFBblcsZUFBQSxDQUFBRixtQkFBQTtBQUNBYyxrQkFBQSxHQUFldVYsWUFBQSxDQUFBaFcsT0FBVSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNEekIsTUFBTWtSLEtBQUssR0FBRztFQUNaQyxPQUFPLEVBQUUsS0FBSztFQUNkQyxNQUFNLEVBQUUsTUFBTTtFQUNkQyxLQUFLLEVBQUUsTUFBTTtFQUNiQyxNQUFNLEVBQUUsSUFBSTtFQUNaQyxLQUFLLEVBQUU7Q0FDUjtBQUVELE1BQU14QyxLQUFLLEdBQUcsU0FBUztBQUN2QnRPLGtCQUFBLEdBQWU7RUFDYnVMLElBQUksRUFBRWtGLEtBQUssQ0FBQ0csS0FBSztFQUNqQnRDLEtBQUssRUFBRUEsS0FBSztFQUNaK0csU0FBUyxFQUFFLFdBQVc7RUFDdEJqSSxLQUFLLEVBQUU7Q0FDUixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JELE1BQUFqTyxPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBcVcsWUFBQSxHQUFBblcsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU15VixXQUFXLEdBQUd0VixjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRTVGLE1BQU0yRSxJQUFJLEdBQThCQSxDQUFDO0VBQ3ZDekUsTUFBTSxHQUFHLEVBQUU7RUFDWEMsUUFBUTtFQUNSLEdBQUdDO0FBQUssQ0FDVCxLQUFJO0VBQ0gsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQzRVLFdBQVc7SUFBQSxlQUFjL1U7RUFBTSxHQUM5QlQsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ3dWLFlBQUEsQ0FBQWhXLE9BQVU7SUFBQSxHQUFLTztFQUFLLEdBQUdELFFBQVEsQ0FBYyxDQUNsQztBQUVsQixDQUFDO0FBRURHLGtCQUFBLEdBQWVxRSxJQUFJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJuQixNQUFBbVIsTUFBQSxHQUFBcFcsZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFld1YsTUFBQSxDQUFBalcsT0FBSSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbkIsTUFBQW1WLFNBQUEsR0FBQXRWLGVBQUEsQ0FBQUYsbUJBQUE7QUFJU2MsZUFBQSxHQUpGMFUsU0FBQSxDQUFBblYsT0FBTztBQUNkLE1BQUFxVixXQUFBLEdBQUF4VixlQUFBLENBQUFGLG1CQUFBO0FBRzZCYyxpQkFBQSxHQUh0QjRVLFdBQUEsQ0FBQXJWLE9BQVM7QUFDaEIsTUFBQTBWLEtBQUEsR0FBQTdWLGVBQUEsQ0FBQUYsbUJBQUE7QUFFa0JjLFdBQUEsR0FGWGlWLEtBQUEsQ0FBQTFWLE9BQUc7QUFDVixNQUFBaVcsTUFBQSxHQUFBcFcsZUFBQSxDQUFBRixtQkFBQTtBQUN1QmMsWUFBQSxHQURoQndWLE1BQUEsQ0FBQWpXLE9BQUksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIWCxNQUFBTixTQUFBLEdBQUFDLG1CQUFBO0FBQ0EsTUFBQUMsT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBTUEsTUFBTXVXLGtCQUFrQixHQUFHcFcsY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBa0IsRUFBRTtBQUVuRyxNQUFNZ1csV0FBVyxHQUE4QkEsQ0FBQztFQUM5QzlWLE1BQU0sR0FBRyxFQUFFO0VBQ1hDLFFBQVE7RUFDUixHQUFHQztBQUFLLENBQ1QsS0FBSTtFQUNILE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUMwVixrQkFBa0I7SUFBQSxlQUFjN1Y7RUFBTSxHQUNyQ1QsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBeVcsV0FBWTtJQUFBLEdBQUs1VjtFQUFLLEdBQUdELFFBQVEsQ0FBZ0IsQ0FDL0I7QUFFekIsQ0FBQztBQUVERyxrQkFBQSxHQUFlMFYsV0FBVyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCMUIsTUFBQUMsYUFBQSxHQUFBdlcsZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFlMlYsYUFBQSxDQUFBcFcsT0FBVyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YxQixNQUFBTixTQUFBLEdBQUFDLG1CQUFBO0FBQ0EsTUFBQUMsT0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsTUFBQUcsY0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBTUEsTUFBTTBXLHFCQUFxQixHQUFHdlcsY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBa0IsRUFBRTtBQUV0RyxNQUFNNkUsY0FBYyxHQUE4QkEsQ0FBQztFQUNqRDNFLE1BQU0sR0FBRyxFQUFFO0VBQ1hDLFFBQVE7RUFDUixHQUFHQztBQUFLLENBQ1QsS0FBSTtFQUNILE9BQ0VYLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUM2VixxQkFBcUI7SUFBQSxlQUFjaFc7RUFBTSxHQUN4Q1QsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBc0YsY0FBYTtJQUFBLEdBQUt6RSxLQUFLO0lBQUVELFFBQVEsRUFBRUE7RUFBUSxFQUFJLENBQzFCO0FBRTVCLENBQUM7QUFFREcsa0JBQUEsR0FBZXVFLGNBQWMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjdCLE1BQUFzUixnQkFBQSxHQUFBelcsZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFlNlYsZ0JBQUEsQ0FBQXRXLE9BQWMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGN0IsTUFBQU4sU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU00VyxlQUFlLEdBQUd6VyxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRWhHLE1BQU04RSxRQUFRLEdBQThCQSxDQUFDO0VBQzNDNUUsTUFBTSxHQUFHLEVBQUU7RUFDWEMsUUFBUTtFQUNSLEdBQUdDO0FBQUssQ0FDVCxLQUFJO0VBQ0gsT0FDRVgsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQytWLGVBQWU7SUFBQSxlQUFjbFc7RUFBTSxHQUNsQ1QsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBdUYsUUFBUztJQUFBLEdBQUsxRTtFQUFLLEdBQUdELFFBQVEsQ0FBYSxDQUM1QjtBQUV0QixDQUFDO0FBRURHLGtCQUFBLEdBQWV3RSxRQUFRLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ2QixNQUFBdVIsVUFBQSxHQUFBM1csZUFBQSxDQUFBRixtQkFBQTtBQUVBYyxrQkFBQSxHQUFlK1YsVUFBQSxDQUFBeFcsT0FBUSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z2QixNQUFBSixPQUFBLEdBQUFDLGVBQUEsQ0FBQUYsbUJBQUE7QUFDQSxNQUFBRyxjQUFBLEdBQUFELGVBQUEsQ0FBQUYsbUJBQUE7QUFNQSxNQUFNOFcsZUFBZSxHQUFHM1csY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFdBQVcsRUFBRTtBQUFhLENBQUUsQ0FBa0IsRUFBRTtBQUVoRyxNQUFNK0UsUUFBUSxHQUE4QkEsQ0FBQztFQUFFN0UsTUFBTSxHQUFHLEVBQUU7RUFBRSxHQUFHRTtBQUFLLENBQUUsS0FBSTtFQUN4RSxPQUFPWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDaVcsZUFBZTtJQUFBLGVBQWNwVztFQUFNLEVBQUk7QUFDakQsQ0FBQztBQUVESSxrQkFBQSxHQUFleUUsUUFBUSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J2QixNQUFBeEYsU0FBQSxHQUFBQyxtQkFBQTtBQUNBLE1BQUFDLE9BQUEsR0FBQUMsZUFBQSxDQUFBRixtQkFBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQUQsZUFBQSxDQUFBRixtQkFBQTtBQU1BLE1BQU0rVyxlQUFlLEdBQUc1VyxjQUFBLENBQUFFLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFBRUMsV0FBVyxFQUFFO0FBQWEsQ0FBRSxDQUFrQixFQUFFO0FBRWhHLE1BQU1nRixRQUFRLEdBQThCQSxDQUFDO0VBQUU5RSxNQUFNLEdBQUcsRUFBRTtFQUFFc1csRUFBRTtFQUFFLEdBQUdwVztBQUFLLENBQUUsS0FBSTtFQUM1RSxPQUNFWCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDa1csZUFBZTtJQUFDQyxFQUFFLEVBQUVBLEVBQUU7SUFBQSxlQUFldFc7RUFBTSxHQUMxQ1QsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2QsU0FBQSxDQUFBeUYsUUFBUztJQUFDd1IsRUFBRSxFQUFFQSxFQUFFO0lBQUEsR0FBTXBXO0VBQUssRUFBSSxDQUNoQjtBQUV0QixDQUFDO0FBRURFLGtCQUFBLEdBQWUwRSxRQUFRLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ2QixNQUFBeVIsVUFBQSxHQUFBL1csZUFBQSxDQUFBRixtQkFBQTtBQUNBYyxrQkFBQSxHQUFlbVcsVUFBQSxDQUFBNVcsT0FBUSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEdkIsTUFBQW9XLGFBQUEsR0FBQXZXLGVBQUEsQ0FBQUYsbUJBQUE7QUFVRWMsbUJBQUEsR0FWSzJWLGFBQUEsQ0FBQXBXLE9BQVc7QUFDbEIsTUFBQXNXLGdCQUFBLEdBQUF6VyxlQUFBLENBQUFGLG1CQUFBO0FBWUVjLHNCQUFBLEdBWks2VixnQkFBQSxDQUFBdFcsT0FBYztBQUNyQixNQUFBd1csVUFBQSxHQUFBM1csZUFBQSxDQUFBRixtQkFBQTtBQVNFYyxnQkFBQSxHQVRLK1YsVUFBQSxDQUFBeFcsT0FBUTtBQUNmLE1BQUE2VyxVQUFBLEdBQUFoWCxlQUFBLENBQUFGLG1CQUFBO0FBTUVjLGdCQUFBLEdBTktvVyxVQUFBLENBQUE3VyxPQUFRO0FBQ2YsTUFBQTRXLFVBQUEsR0FBQS9XLGVBQUEsQ0FBQUYsbUJBQUE7QUFRRWMsZ0JBQUEsR0FSS21XLFVBQUEsQ0FBQTVXLE9BQVE7QUFDZixNQUFBOFcsVUFBQSxHQUFBalgsZUFBQSxDQUFBRixtQkFBQTtBQUdFYyxxQkFBQSxHQUhLcVcsVUFBQSxDQUFBOVcsT0FBYSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTHBCLE1BQUErVyxnQkFBQSxHQUFBcFgsbUJBQUE7QUFNbUIrQyxzREFBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BTE1rVSxnQkFBQSxDQUFBQyxtQkFBYTtFQUFBO0FBQUE7QUFNakJ0VSxpREFBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BTG5Ca1UsZ0JBQUEsQ0FBQUUsZUFBZTtFQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGpCLE1BQUFyWCxPQUFBLEdBQUFnUixZQUFBLENBQUFqUixtQkFBQTtBQUNBLE1BQUF1WCxRQUFBLEdBQUF2WCxtQkFBQTtBQUNBLE1BQUF3WCxPQUFBLEdBQUF4WCxtQkFBQTtBQUlBLE1BQUFELFNBQUEsR0FBQUMsbUJBQUE7QUFjQSxNQUFNeVgsWUFBWSxHQUFHeFgsT0FBQSxDQUFBSSxPQUFLLENBQUNxWCxhQUFhLENBQWEsRUFBZ0IsQ0FBQztBQVUvRCxNQUFNTCxtQkFBbUIsR0FBSXpXLEtBQUssSUFBSTtFQUMzQyxNQUFNO0lBQUUrSixNQUFNO0lBQUVnTjtFQUFhLENBQUUsR0FBRyxJQUFBSCxPQUFBLENBQUFJLFFBQVEsR0FBRTtFQUM1QyxNQUFNLENBQUMvTSxTQUFTLEVBQUVnTixZQUFZLENBQUMsR0FBRzVYLE9BQUEsQ0FBQUksT0FBSyxDQUFDeVgsUUFBUSxDQUFpQixNQUFNLENBQUM7RUFDeEUsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUEvWCxPQUFBLENBQUE2WCxRQUFRLEVBQWlCLE1BQU0sQ0FBQztFQUNsRSxNQUFNLENBQUNHLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUcsSUFBQWpZLE9BQUEsQ0FBQTZYLFFBQVEsRUFBQ0ssWUFBWSxDQUFDSixTQUFTLENBQUMsQ0FBQztFQU16RSxJQUFBOVgsT0FBQSxDQUFBbVksU0FBUyxFQUFDLE1BQUs7SUFDYixJQUFBYixRQUFBLENBQUFjLHFCQUFxQixHQUFFO0VBQ3pCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixNQUFNQyxlQUFlLEdBQUl6TixTQUFTLElBQUk7SUFFcEMsSUFBSUEsU0FBUyxLQUFLLE1BQU0sRUFBRTtNQUN4QmdOLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFDdkIsQ0FBQyxNQUFNO01BQ0xBLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDdEI7RUFDRixDQUFDO0VBRUQsTUFBTWpOLFdBQVcsR0FBSXRELElBQUksSUFBSTtJQUMzQjVFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFFMkUsSUFBSSxDQUFDO0lBQ3RDMFEsWUFBWSxDQUFDMVEsSUFBSSxDQUFDO0VBQ3BCLENBQUM7RUFDRCxJQUFBckgsT0FBQSxDQUFBbVksU0FBUyxFQUFDLE1BQUs7SUFJYkYsZUFBZSxDQUFDQyxZQUFZLENBQUNKLFNBQVMsQ0FBQyxDQUFDO0VBQzFDLENBQUMsRUFBRSxDQUFDQSxTQUFTLENBQUMsQ0FBQztFQUlmLE9BQ0U5WCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDNFcsWUFBWSxDQUFDYyxRQUFRO0lBQ3BCbkgsS0FBSyxFQUFFO01BQ0wxRyxLQUFLLEVBQUV1TixZQUFZO01BQ25CRixTQUFTLEVBQUVBLFNBQVM7TUFDcEJwTixNQUFNO01BQ05nTixhQUFhO01BQ2IvTSxXQUFXO01BQ1g0TixZQUFZLEVBQVp6WSxTQUFBLENBQUEwWSxZQUFZO01BQ1pILGVBQWU7TUFDZnpOOztFQUNELEdBRUQ1SyxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxTQUFBLENBQUEyWSxPQUFPO0lBQUNoTyxLQUFLLEVBQUV1TixZQUFZO0lBQUVwTixTQUFTLEVBQUVBO0VBQVMsR0FDL0NqSyxLQUFLLENBQUNELFFBQVEsQ0FDUCxDQUNZO0FBRTVCLENBQUM7QUF0RFlHLDJCQUFtQixHQUFBdVcsbUJBQUE7QUF3RHpCLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNclgsT0FBQSxDQUFBSSxPQUFLLENBQUNzWSxVQUFVLENBQUNsQixZQUFZLENBQUM7QUFBdEQzVyx1QkFBZSxHQUFBd1csZUFBQTtBQUU1QixNQUFNYSxZQUFZLEdBQUc7RUFDbkJTLElBQUksRUFBRTtJQUNKek0sTUFBTSxFQUFFO01BQ05DLE1BQU0sRUFBRTtRQUNOTSxVQUFVLEVBQUU7VUFDVmtNLElBQUksRUFBRSxTQUFTO1VBQ2Y5QyxLQUFLLEVBQUU7U0FDUjtRQUNELGdCQUFnQixFQUFFO1VBQ2hCOEMsSUFBSSxFQUFFLFNBQVM7VUFDZjlDLEtBQUssRUFBRTs7T0FFVjtNQUNEK0MsSUFBSSxFQUFFO1FBQ0pDLE1BQU0sRUFBRTs7O0dBR2I7RUFFRGhELEtBQUssRUFBRTtJQUNMM0osTUFBTSxFQUFFO01BQ05DLE1BQU0sRUFBRTtRQUNOTSxVQUFVLEVBQUU7VUFBRWtNLElBQUksRUFBRSxTQUFTO1VBQUU5QyxLQUFLLEVBQUU7UUFBTyxDQUFFO1FBQy9DLGdCQUFnQixFQUFFO1VBQ2hCOEMsSUFBSSxFQUFFLFNBQVM7VUFDZjlDLEtBQUssRUFBRTs7T0FFVjtNQUNEK0MsSUFBSSxFQUFFO1FBQ0pDLE1BQU0sRUFBRTs7O0dBR2I7RUFFREMsTUFBTSxFQUFFO0lBRU41TSxNQUFNLEVBQUU7TUFDTkMsTUFBTSxFQUFFO1FBRU40TSxJQUFJLEVBQUU7VUFDSkosSUFBSSxFQUFFLFNBQVM7VUFDZjlDLEtBQUssRUFBRTtTQUNSO1FBQ0QsT0FBTyxFQUFFLFNBQVM7UUFDbEJtRCxJQUFJLEVBQUU7VUFDSkwsSUFBSSxFQUFFLFNBQVM7VUFDZjlDLEtBQUssRUFBRTtTQUNSO1FBQ0QsT0FBTyxFQUFFLFNBQVM7UUFDbEJvRCxRQUFRLEVBQUU7VUFDUk4sSUFBSSxFQUFFLFNBQVM7VUFDZjlDLEtBQUssRUFBRTtTQUNSO1FBQ0QsV0FBVyxFQUFFLFNBQVM7UUFDdEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFHbkJwSixVQUFVLEVBQUU7VUFDVmtNLElBQUksRUFBRSxRQUFRO1VBQ2Q5QyxLQUFLLEVBQUU7U0FDUjtRQUNELGlCQUFpQixFQUFFO1VBQ2pCOEMsSUFBSSxFQUFFLFFBQVE7VUFDZDlDLEtBQUssRUFBRTtTQUNSO1FBQ0Qsa0JBQWtCLEVBQUU7VUFDbEI4QyxJQUFJLEVBQUUsUUFBUTtVQUNkOUMsS0FBSyxFQUFFO1NBQ1I7UUFDRHFELEtBQUssRUFBRSxPQUFPO1FBQ2RDLE9BQU8sRUFBRTtVQUNQUixJQUFJLEVBQUUsT0FBTztVQUNiOUMsS0FBSyxFQUFFO1NBQ1I7UUFDRHVELEtBQUssRUFBRTtVQUNMM00sVUFBVSxFQUFFO1NBQ2I7UUFDRHFHLElBQUksRUFBRTtVQUNKNkYsSUFBSSxFQUFFLFFBQVE7VUFDZDlDLEtBQUssRUFBRTtTQUNSO1FBQ0QsZ0JBQWdCLEVBQUU7VUFBRThDLElBQUksRUFBRSxNQUFNO1VBQUU5QyxLQUFLLEVBQUU7UUFBTztPQUNqRDtNQUNEd0QsS0FBSyxFQUFFO1FBQ0w5TSxNQUFNLEVBQUU7VUFDTjRDLEtBQUssRUFBRTs7T0FFVjtNQUVEMUMsVUFBVSxFQUFFO1FBQUVrTSxJQUFJLEVBQUUsU0FBUztRQUFFOUMsS0FBSyxFQUFFO01BQVM7S0FFaEQ7SUFDRHlELE1BQU0sRUFBRTtNQUNObkssS0FBSyxFQUFFO1FBQ0x3SixJQUFJLEVBQUUsTUFBTTtRQUNaOUMsS0FBSyxFQUFFOzs7R0FJWjtFQUVEMEQsT0FBTyxFQUFFO0lBQ1ByTixNQUFNLEVBQUU7TUFDTkMsTUFBTSxFQUFFO1FBRU40TSxJQUFJLEVBQUU7VUFDSkosSUFBSSxFQUFFLFNBQVM7VUFDZjlDLEtBQUssRUFBRTtTQUNSO1FBQ0QsT0FBTyxFQUFFLFNBQVM7UUFDbEJtRCxJQUFJLEVBQUU7VUFDSkwsSUFBSSxFQUFFLFNBQVM7VUFDZjlDLEtBQUssRUFBRTtTQUNSO1FBQ0QsT0FBTyxFQUFFLFNBQVM7UUFDbEJvRCxRQUFRLEVBQUU7VUFDUk4sSUFBSSxFQUFFLFNBQVM7VUFDZjlDLEtBQUssRUFBRTtTQUNSO1FBQ0QsV0FBVyxFQUFFLFNBQVM7UUFDdEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFHbkJwSixVQUFVLEVBQUU7VUFDVmtNLElBQUksRUFBRSxRQUFRO1VBQ2Q5QyxLQUFLLEVBQUU7U0FDUjtRQUNELGlCQUFpQixFQUFFO1VBQ2pCOEMsSUFBSSxFQUFFLFFBQVE7VUFDZDlDLEtBQUssRUFBRTtTQUNSO1FBQ0Qsa0JBQWtCLEVBQUU7VUFDbEI4QyxJQUFJLEVBQUUsUUFBUTtVQUNkOUMsS0FBSyxFQUFFO1NBQ1I7UUFDRHFELEtBQUssRUFBRSxPQUFPO1FBQ2RDLE9BQU8sRUFBRTtVQUNQUixJQUFJLEVBQUUsT0FBTztVQUNiOUMsS0FBSyxFQUFFO1NBQ1I7UUFDRHVELEtBQUssRUFBRTtVQUNMM00sVUFBVSxFQUFFO1NBQ2I7UUFDRHFHLElBQUksRUFBRTtVQUNKNkYsSUFBSSxFQUFFLFFBQVE7VUFDZDlDLEtBQUssRUFBRTtTQUNSO1FBQ0QsZ0JBQWdCLEVBQUU7VUFBRThDLElBQUksRUFBRSxTQUFTO1VBQUU5QyxLQUFLLEVBQUU7UUFBUztPQUN0RDtNQUNEd0QsS0FBSyxFQUFFO1FBQ0w5TSxNQUFNLEVBQUU7VUFDTjRDLEtBQUssRUFBRTs7O0tBS1o7SUFFRG1LLE1BQU0sRUFBRTtNQUNObkssS0FBSyxFQUFFO1FBQ0x3SixJQUFJLEVBQUUsTUFBTTtRQUNaOUMsS0FBSyxFQUFFOzs7O0NBS2QsQzs7Ozs7Ozs7OztBQ3JRRCxvQzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0EsTUFBQTdWLE9BQUEsR0FBQWdSLFlBQUEsQ0FBQWpSLE9BQUE7QUFDQSxNQUFBeVosSUFBQSxHQUFBelosT0FBQTtBQUNBLE1BQUEwWixJQUFBLEdBQUExWixPQUFBO0FBQ0EsTUFBQTJaLGNBQUEsR0FBQXpaLGVBQUEsQ0FBQUYsT0FBQTtBQUNBLE1BQUFHLGNBQUEsR0FBQThRLFlBQUEsQ0FBQWpSLE9BQUE7QUFDQSxNQUFBeUksU0FBQSxHQUFBekksT0FBQTtBQXVCQSxNQUFNNFosZ0JBQWdCLEdBQUcsSUFBQXpaLGNBQUEsQ0FBQTBaLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUJqQztBQUNELFNBQVNDLGlCQUFpQkEsQ0FBQ0MsR0FBRyxFQUFFQyxjQUFjO0VBQzVDLElBQUEvWixPQUFBLENBQUFtWSxTQUFTLEVBQUMsTUFBSztJQUliLFNBQVM2QixrQkFBa0JBLENBQUNDLEtBQUs7TUFDL0IsSUFBSUgsR0FBRyxDQUFDSSxPQUFPLElBQUksQ0FBQ0osR0FBRyxDQUFDSSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDeFksTUFBTSxDQUFDLEVBQUU7UUFFdERzWSxjQUFjLENBQUMsS0FBSyxDQUFDO01BQ3ZCO0lBQ0Y7SUFFQUssUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVMLGtCQUFrQixDQUFDO0lBQzFELE9BQU8sTUFBSztNQUVWSSxRQUFRLENBQUNFLG1CQUFtQixDQUFDLFdBQVcsRUFBRU4sa0JBQWtCLENBQUM7SUFDL0QsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDRixHQUFHLENBQUMsQ0FBQztBQUNYO0FBRUEsTUFBTVMsYUFBYSxHQUFHLElBQUFyYSxjQUFBLENBQUFFLE9BQU0sRUFBQyxRQUFRLENBQUMsQ0FBQyxNQUFLO0VBQzFDLE9BQU87SUFDTCtPLEtBQUssRUFBRSxPQUFPO0lBQ2RxTCxNQUFNLEVBQUUsU0FBUztJQUNqQixTQUFTLEVBQUU7TUFBRXJMLEtBQUssRUFBRTtJQUFLLENBQUU7SUFDM0J0QyxlQUFlLEVBQUU7R0FDbEI7QUFDSCxDQUFDLENBQUM7QUFDRixNQUFNNE4sWUFBWSxHQUFHdmEsY0FBQSxDQUFBRSxPQUFNLENBQUNDLEdBQUc7b0JBQ1hzWixnQkFBZ0I7OztDQUduQztBQUNELE1BQU1lLGFBQWEsR0FBRyxJQUFBeGEsY0FBQSxDQUFBRSxPQUFNLEVBQUNxYSxZQUFZLENBQUMsQ0FBQyxNQUFLO0VBQzlDLE9BQU87SUFDTEUsUUFBUSxFQUFFLFVBQVU7SUFDcEJDLE9BQU8sRUFBRTtHQUNWO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTUMsSUFBSSxHQUFHLElBQUEzYSxjQUFBLENBQUFFLE9BQU0sRUFBQyxJQUFJLENBQUMsQ0FBRU8sS0FBSyxJQUFJO0VBQ2xDLE9BQU87SUFDTG1hLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLE9BQU8sRUFBRSxNQUFNO0lBQ2ZsRyxPQUFPLEVBQUUsTUFBTTtJQUNmQyxhQUFhLEVBQUUsUUFBUTtJQUN2QkUsY0FBYyxFQUFFLFFBQVE7SUFDeEJELFVBQVUsRUFBRSxRQUFRO0lBQ3BCVCxZQUFZLEVBQUUsS0FBSztJQUNuQnpILGVBQWUsRUFBRSxPQUFPO0lBQ3hCOE4sUUFBUSxFQUFFLFVBQVU7SUFDcEJLLEdBQUcsRUFBRSxLQUFLO0lBQ1YvTSxLQUFLLEVBQUV0TixLQUFLLEVBQUVzTixLQUFLLEdBQUd0TixLQUFLLEVBQUVzTixLQUFLLEdBQUcsT0FBTztJQUM1Q2dOLEtBQUssRUFBRTtHQUNSO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTUMsUUFBUSxHQUFHLElBQUFoYixjQUFBLENBQUFFLE9BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQyxNQUFLO0VBQ2pDLE9BQU87SUFDTDBhLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLE9BQU8sRUFBRSxDQUFDO0lBQ1ZsRyxPQUFPLEVBQUUsTUFBTTtJQUNmQyxhQUFhLEVBQUUsS0FBSztJQUNwQkUsY0FBYyxFQUFFLGVBQWU7SUFDL0JELFVBQVUsRUFBRSxNQUFNO0lBQ2xCOUcsS0FBSyxFQUFFO0dBQ1I7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNa04sWUFBWSxHQUFHLElBQUFqYixjQUFBLENBQUFFLE9BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxNQUFLO0VBQ3BDLE9BQU87SUFDTCtPLEtBQUssRUFBRSxPQUFPO0lBQ2RxTCxNQUFNLEVBQUU7R0FDVDtBQUNILENBQUMsQ0FBQztBQUVGLE1BQU1ZLGNBQWMsR0FBRyxJQUFBbGIsY0FBQSxDQUFBRSxPQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsTUFBSztFQUN0QyxPQUFPO0lBQ0wrTyxLQUFLLEVBQUUsT0FBTztJQUNkcUwsTUFBTSxFQUFFO0dBQ1Q7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNYSxZQUFZLEdBQUcsSUFBQW5iLGNBQUEsQ0FBQUUsT0FBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQy9Ca2IsUUFBUSxFQUFFLENBQUM7RUFDWHpHLE9BQU8sRUFBRSxNQUFNO0VBQ2ZDLGFBQWEsRUFBRSxLQUFLO0VBQ3BCeUcsR0FBRyxFQUFFO0NBQ04sQ0FBQztBQUNGLE1BQU0vVixhQUFhLEdBQUdBLENBQUEsS0FBSztFQUN6QixNQUFNO0lBQUVtRixXQUFXO0lBQUVGLEtBQUs7SUFBRUMsTUFBTTtJQUFFb04sU0FBUztJQUFFbE4sU0FBUztJQUFFeU47RUFBZSxDQUFFLEdBQ3pFLElBQUE3UCxTQUFBLENBQUFxQyxhQUFhLEdBQUU7RUFFakIsTUFBTSxDQUFDMlEsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRyxJQUFBemIsT0FBQSxDQUFBNlgsUUFBUSxFQUFDLEtBQUssQ0FBQztFQUduRHBWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixFQUFFZ0ksTUFBTSxDQUFDO0VBQzFDakksT0FBTyxDQUFDQyxHQUFHLENBQUNpSSxXQUFXLEVBQUVGLEtBQUssQ0FBQztFQUUvQixNQUFNaVIsVUFBVSxHQUFHLElBQUExYixPQUFBLENBQUEyYixNQUFNLEVBQUMsSUFBSSxDQUFDO0VBQy9COUIsaUJBQWlCLENBQUM2QixVQUFVLEVBQUVELGFBQWEsQ0FBQztFQUU1QyxNQUFNRyxVQUFVLEdBQUdBLENBQUEsS0FBSztJQUN0QixNQUFNQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzNCLEtBQUssSUFBSS9ELFNBQVMsSUFBSXBOLE1BQU0sRUFBRTtNQUM1QmpJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRW9WLFNBQVMsQ0FBQztNQUN2QytELGdCQUFnQixDQUFDQyxJQUFJLENBQUM7UUFBRTNLLEtBQUssRUFBRXpHLE1BQU0sQ0FBQ29OLFNBQVMsQ0FBQztRQUFFaUUsS0FBSyxFQUFFakU7TUFBUyxDQUFFLENBQUM7SUFDdkU7SUFDQSxPQUFPK0QsZ0JBQWdCO0VBQ3pCLENBQUM7RUFFRCxNQUFNRyxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFLO0lBQzdCUCxhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO0VBQzVCLENBQUM7RUFFRCxNQUFNUyxvQkFBb0IsR0FBR0EsQ0FBQSxLQUFLO0lBQ2hDNUQsZUFBZSxDQUFDek4sU0FBUyxDQUFDO0VBRTVCLENBQUM7RUFFRCxNQUFNc1IsYUFBYSxHQUFJQyxHQUFHLElBQUk7SUFDNUIsTUFBTUMsUUFBUSxHQUFHRCxHQUFHLENBQUMxYSxNQUFNLENBQUM0YSxVQUFVLENBQUNsTCxLQUFLLENBQUNtTCxTQUFTO0lBRXREN1osT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFMFosUUFBUSxDQUFDO0lBQ2hDelIsV0FBVyxDQUFDeVIsUUFBUSxDQUFDO0VBRXZCLENBQUM7RUFFRCxJQUFBcGMsT0FBQSxDQUFBbVksU0FBUyxFQUFDLE1BQUs7SUFDYjFWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBCQUEwQixFQUFFb1YsU0FBUyxDQUFDO0lBQ2xEclYsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBSTVCLENBQUMsRUFBRSxDQUFDb1YsU0FBUyxFQUFFbE4sU0FBUyxDQUFDLENBQUM7RUFFMUIsTUFBTTJSLFlBQVksR0FBSXRhLEtBQUssSUFBSTtJQUM3QixPQUFPQSxLQUFLLENBQUMyTixHQUFHLENBQUMsQ0FBQzRNLEVBQUUsRUFBRUMsRUFBRSxLQUFJO01BRzFCLE9BQ0V6YyxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDc2EsUUFBUTtRQUFDd0IsR0FBRyxFQUFFRDtNQUFFLEdBQ2Z6YyxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDeWEsWUFBWSxRQUNWdkQsU0FBUyxLQUFLMEUsRUFBRSxDQUFDVCxLQUFLLEdBQ3JCL2IsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQzRZLElBQUEsQ0FBQW1ELE9BQU87UUFBQ0MsS0FBSyxFQUFFO1VBQUV6TixLQUFLLEVBQUU7UUFBUTtNQUFFLEVBQUksR0FFdkNuUCxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDNFksSUFBQSxDQUFBbUQsT0FBTztRQUFDQyxLQUFLLEVBQUU7VUFBRUMsVUFBVSxFQUFFO1FBQVE7TUFBRSxFQUN6QyxFQUNEN2MsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQ3VhLFlBQVk7UUFBQ2hLLEtBQUssRUFBRXFMLEVBQUUsQ0FBQ1QsS0FBSztRQUFFZSxPQUFPLEVBQUVaO01BQWEsR0FDbERNLEVBQUUsQ0FBQ1QsS0FBSyxDQUNJLENBQ0YsRUFDZGpFLFNBQVMsSUFBSTBFLEVBQUUsQ0FBQ1QsS0FBSyxHQUFHLElBQUksR0FDM0IvYixPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDd2EsY0FBYyxRQUNicGIsT0FBQSxDQUFBSSxPQUFBLENBQUFRLGFBQUEsQ0FBQzhZLGNBQUEsQ0FBQXRaLE9BQU07UUFDTDJjLFFBQVEsRUFBRWQsb0JBQW9CO1FBQzlCZSxPQUFPLEVBQUVwUyxTQUFTLEtBQUssTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJO1FBQzVDcVMsYUFBYSxFQUFFLEtBQUs7UUFDcEJDLFdBQVcsRUFBRWxkLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUM2WSxJQUFBLENBQUEwRCxrQkFBVyxPQUFHO1FBRTVCekssTUFBTSxFQUFFLEVBQUU7UUFDVnpFLEtBQUssRUFBRTtNQUFFLEVBQ1QsQ0FFTCxDQUNRO0lBRWYsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNELE9BQ0VqTyxPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxjQUNFWixPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDMlosYUFBYTtJQUFDdUMsT0FBTyxFQUFFZDtFQUFpQixHQUN2Q2hjLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUM0WSxJQUFBLENBQUE0RCxtQkFBUTtJQUFDUixLQUFLLEVBQUU7TUFBRTVHLFFBQVEsRUFBRSxNQUFNO01BQUU3RyxLQUFLLEVBQUU7SUFBUztFQUFFLEVBQUksQ0FDN0MsRUFDZnFNLFVBQVUsR0FDVHhiLE9BQUEsQ0FBQUksT0FBQSxDQUFBUSxhQUFBLENBQUM4WixhQUFhO0lBQUNaLEdBQUcsRUFBRTRCO0VBQVUsR0FDNUIxYixPQUFBLENBQUFJLE9BQUEsQ0FBQVEsYUFBQSxDQUFDaWEsSUFBSTtJQUFDNU0sS0FBSyxFQUFFO0VBQUcsR0FBR3NPLFlBQVksQ0FBQ1gsVUFBVSxFQUFFLENBQUMsQ0FBUSxDQUN2QyxHQUNkLElBQUksQ0FDSjtBQUVWLENBQUM7QUFFRC9hLE9BQUEsQ0FBQVQsT0FBQSxHQUFlb0YsYUFBYSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RPNUIsTUFBQThSLFFBQUEsR0FBQXZYLE9BQUE7QUFNcUQrQyxNQUFBLENBQUFDLGNBQUEsQ0FBQWxDLE9BQUE7RUFBQW1DLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0FMbkRxVSxRQUFBLENBQUErRixnQkFBZ0I7RUFBQTtBQUFBO0FBS2N2YSxNQUFBLENBQUFDLGNBQUEsQ0FBQWxDLE9BQUE7RUFBQW1DLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0FKOUJxVSxRQUFBLENBQUFnRyxRQUFRO0VBQUE7QUFBQTtBQUlnQ3hhLE1BQUEsQ0FBQUMsY0FBQSxDQUFBbEMsT0FBQTtFQUFBbUMsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQUh4Q3FVLFFBQUEsQ0FBQWlHLFNBQVM7RUFBQTtBQUFBO0FBR0Z6YSxNQUFBLENBQUFDLGNBQUEsQ0FBQWxDLE9BQUE7RUFBQW1DLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0FGUHFVLFFBQUEsQ0FBQWMscUJBQXFCO0VBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0p2QixNQUFBb0YsUUFBQSxHQUFBemQsT0FBQTtBQUdTK0MsTUFBQSxDQUFBQyxjQUFBLENBQUFsQyxPQUFBO0VBQUFtQyxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BSEF1YSxRQUFBLENBQUFDLFdBQVc7RUFBQTtBQUFBO0FBR0UzYSxNQUFBLENBQUFDLGNBQUEsQ0FBQWxDLE9BQUE7RUFBQW1DLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0FIQXVhLFFBQUEsQ0FBQUUsS0FBSztFQUFBO0FBQUE7QUFHRTVhLE1BQUEsQ0FBQUMsY0FBQSxDQUFBbEMsT0FBQTtFQUFBbUMsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQUhBdWEsUUFBQSxDQUFBRyxTQUFTO0VBQUE7QUFBQTtBQUN0QyxNQUFBQyxPQUFBLEdBQUE3ZCxPQUFBO0FBRXdDK0MsTUFBQSxDQUFBQyxjQUFBLENBQUFsQyxPQUFBO0VBQUFtQyxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BRi9CMmEsT0FBQSxDQUFBQyxNQUFNO0VBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RmLE1BQUFDLFVBQUEsR0FBQS9kLE9BQUE7QUFDUytDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBbEMsT0FBQTtFQUFBbUMsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQURBNmEsVUFBQSxDQUFBbkcsUUFBUTtFQUFBO0FBQUEsRzs7Ozs7O1VDQWpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLE1BQUFvRyxZQUFBLEdBQUFoZSxtQkFBQTtBQTZCRStDLHVDQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0E1QkE4YSxZQUFBLENBQUFsYSxHQUFHO0VBQUE7QUFBQTtBQTJCSGYsMENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTFCQThhLFlBQUEsQ0FBQTFjLE1BQU07RUFBQTtBQUFBO0FBZ0NOeUIsd0NBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQS9CQThhLFlBQUEsQ0FBQWphLElBQUk7RUFBQTtBQUFBO0FBMkNKaEIsNENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTFDQThhLFlBQUEsQ0FBQXJaLFFBQVE7RUFBQTtBQUFBO0FBNENSNUIsMENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTNDQThhLFlBQUEsQ0FBQXJZLE1BQU07RUFBQTtBQUFBO0FBMkJONUMsMENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTFCQThhLFlBQUEsQ0FBQWhhLE1BQU07RUFBQTtBQUFBO0FBMkJOakIsMENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTFCQThhLFlBQUEsQ0FBQTlaLE1BQU07RUFBQTtBQUFBO0FBaUNObkIsMkNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQWhDQThhLFlBQUEsQ0FBQWhaLE9BQU87RUFBQTtBQUFBO0FBcUNQakMseUNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQXBDQThhLFlBQUEsQ0FBQXBaLEtBQUs7RUFBQTtBQUFBO0FBeUNMN0Isd0NBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQXhDQThhLFlBQUEsQ0FBQXBZLElBQUk7RUFBQTtBQUFBO0FBb0JKN0Msd0NBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQW5CQThhLFlBQUEsQ0FBQTNaLElBQUk7RUFBQTtBQUFBO0FBb0JKdEIsK0NBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQW5CQThhLFlBQUEsQ0FBQTFaLFdBQVc7RUFBQTtBQUFBO0FBOEJYdkIsNkNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQTdCQThhLFlBQUEsQ0FBQS9ZLFNBQVM7RUFBQTtBQUFBO0FBb0NUbEMsNkNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQW5DQThhLFlBQUEsQ0FBQW5ZLFNBQVM7RUFBQTtBQUFBO0FBcUNUOUMseUNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQXBDQThhLFlBQUEsQ0FBQWxZLEtBQUs7RUFBQTtBQUFBO0FBZ0NML0MsMENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQS9CQThhLFlBQUEsQ0FBQWpZLE1BQU07RUFBQTtBQUFBO0FBb0NDaEQsdUNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQW5DUDhhLFlBQUEsQ0FBQW5aLEdBQUc7RUFBQTtBQUFBO0FBMEJIOUIsdUNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQXpCQThhLFlBQUEsQ0FBQTlZLEdBQUc7RUFBQTtBQUFBO0FBdUJIbkMsd0NBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQXRCQThhLFlBQUEsQ0FBQTdZLElBQUk7RUFBQTtBQUFBO0FBbUJKcEMsaURBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQWxCQThhLFlBQUEsQ0FBQXZZLGFBQWE7RUFBQTtBQUFBO0FBd0JiMUMseUNBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQXZCQThhLFlBQUEsQ0FBQWxaLEtBQUs7RUFBQTtBQUFBO0FBRVAsTUFBQTJELFNBQUEsR0FBQXpJLG1CQUFBO0FBWUUrQyxzREFBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BWk91RixTQUFBLENBQUFFLGtCQUFrQjtFQUFBO0FBQUE7QUFhekI1RixpREFBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BYjJCdUYsU0FBQSxDQUFBcUMsYUFBYTtFQUFBO0FBQUE7QUFDMUMsTUFBQW1ULFNBQUEsR0FBQWplLG1CQUFBO0FBZWlCK0MsK0NBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQWZSK2EsU0FBQSxDQUFBUCxXQUFXO0VBQUE7QUFBQTtBQUNwQixNQUFBbEcsT0FBQSxHQUFBeFgsbUJBQUE7QUFZRStDLDRDQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0FaT3NVLE9BQUEsQ0FBQUksUUFBUTtFQUFBO0FBQUEsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvQWNjb3JkaW9uL0FjY29yZGlvbi50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9BY2NvcmRpb24vaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvQWNjb3JkaW9uUGFuZWwvQWNjb3JkaW9uUGFuZWwudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvQWNjb3JkaW9uUGFuZWwvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvQW5jaG9yL0FuY2hvci50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9BbmNob3IvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvQnV0dG9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9CdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRHJvcC9Ecm9wLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0Ryb3AvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRHJvcEJ1dG9uL0Ryb3BCdXR0b24udHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRHJvcEJ1dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL01lbnUvTWVudS50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9NZW51L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL05hdi9OYXYudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvTmF2L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL1RhYnMvVGFicy50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9UYWJzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9DaGVja0JveC9DaGVja0JveC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvQ2hlY2tCb3gvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0NoZWNrQm94R3JvdXAvQ2hlY2tCb3hHcm91cC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvQ2hlY2tCb3hHcm91cC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvRGF0ZUlucHV0L0RhdGVJbnB1dC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvRGF0ZUlucHV0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9GaWxlSW5wdXQvRmlsZUlucHV0LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9GaWxlSW5wdXQvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0Zvcm1GaWVsZC9Gb3JtRmllbGQudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0Zvcm1GaWVsZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvTWFza2VkSW5wdXQvTWFza2VkSW5wdXQudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL01hc2tlZElucHV0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9SYW5nZUlucHV0L1JhbmdlSW5wdXQudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1JhbmdlSW5wdXQvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1NlbGVjdC9TZWxlY3QudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1NlbGVjdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvU2VsZWN0TXVsdGlwbGUvU2VsZWN0TXVsdGlwbGUudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1NlbGVjdE11bHRpcGxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9TdGFyUmF0aW5nL1N0YXJSYXRpbmcudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1N0YXJSYXRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RleHRBcmVhL1RleHRBcmVhLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UZXh0QXJlYS9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvVGV4dElucHV0L1RleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvVGV4dElucHV0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UaHVtYnNSYXRpbmcvVGh1bWJzUmF0aW5nLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UaHVtYnNSYXRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Cb3gvQm94LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Cb3gvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0NhcmQvQ2FyZC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvQ2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9HcmlkL0dyaWQudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0dyaWQvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTWFpbi9NYWluLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9NYWluL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9PdmVybGF5L092ZXJsYXkudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L092ZXJsYXkvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1BhZ2UvUGFnZS50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvUGFnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvUGFnZUNvbnRlbnQvUGFnZUNvbnRlbnQudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1BhZ2VDb250ZW50L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9QYWdlSGVhZGVyL1BhZ2VIZWFkZXIudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1BhZ2VIZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1NpZGVCYXIvU2lkZUJhci50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvU2lkZUJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvU3RhY2svU3RhY2sudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1N0YWNrL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9tZWRpYS9DYXJvdXNlbC9DYXJvdXNlbC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9tZWRpYS9DYXJvdXNlbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9tZWRpYS9JbWFnZS9JbWFnZS50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9tZWRpYS9JbWFnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9tZWRpYS9TdmcvU3ZnLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL21lZGlhL1N2Zy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9tZWRpYS9WaWRlby9WaWRlby50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9tZWRpYS9WaWRlby9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9tZWRpYS9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvQ2lyY2xlL0NpY2xlLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy9DaXJjbGUvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL092YWwvT3ZhbC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvT3ZhbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvUmVjdGFuZ2xlL1JlY3RhbmdsZS50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvUmVjdGFuZ2xlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy9TaGFwZS9TaGFwZS50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvU2hhcGUvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL1NxdWFyZS9TcXVhcmUudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL1NxdWFyZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL2Vycm9yX21lc3NhZ2VzLnRzIiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL3BhdHRlcm5zLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy91dGlscy9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL3V0aWxzL2JvcmRlci50cyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy91dGlscy9jaGVja2Vycy50cyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy91dGlscy9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvdXRpbHMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvdXRpbHMvZWtzdHJhY3RvcnMudHMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvdXRpbHMvZ2V0dGVycy50cyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy91dGlscy9zaGFwZV9jbGlwcy50cyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy91dGlscy9zaGFwZXMudHMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvdXRpbHMvd2lkdGgudHMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy90eXBvZ3JhcGh5L0hlYWRpbmcvSGVhZGluZy50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy90eXBvZ3JhcGh5L0hlYWRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9QYXJhZ3JhcGgvUGFyYWdyYXBoLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkvUGFyYWdyYXBoL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkvVGFnL1RhZy50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy90eXBvZ3JhcGh5L1RhZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy90eXBvZ3JhcGh5L1RleHQvQ3VzdG9tVGV4dC9DdXN0b21UZXh0LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkvVGV4dC9DdXN0b21UZXh0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkvVGV4dC9DdXN0b21UZXh0L3RleHREZWZhdWx0cy50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy90eXBvZ3JhcGh5L1RleHQvVGV4dC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy90eXBvZ3JhcGh5L1RleHQvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy91dGlscy9Db2xsYXBzaWJsZS9Db2xsYXBzaWJsZS50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy91dGlscy9Db2xsYXBzaWJsZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy91dGlscy9JbmZpbml0ZVNjcm9sbC9JbmZpbml0ZVNjcm9sbC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy91dGlscy9JbmZpbml0ZVNjcm9sbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy91dGlscy9LZXlib2FyZC9LZXlib2FyZC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy91dGlscy9LZXlib2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy91dGlscy9NYXJrZG93bi9NYXJrZG93bi50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy91dGlscy9Ta2lwTGluay9Ta2lwTGluay50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy91dGlscy9Ta2lwTGluay9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy91dGlscy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29udGV4dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29udGV4dC90aGVtZS1wcm92aWRlci50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvZXh0ZXJuYWwgY29tbW9uanMgXCJncm9tbWV0XCIiLCJ3ZWJwYWNrOi8va290aWktdWkvZXh0ZXJuYWwgY29tbW9uanMgXCJrb3RpaS1zdHlsZWRcIiIsIndlYnBhY2s6Ly9rb3RpaS11aS9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy91dGlscy9UaGVtZVN3aXRjaGVyL3N3aXRjaGVyLmpzIiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9nbG9iYWxzL2luZGV4LmpzIiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2hvb2tzL2luZGV4LmpzIiwid2VicGFjazovL2tvdGlpLXVpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tvdGlpLXVpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY29yZGlvbiBhcyBHYWNjb3JkaW9uIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZEFjY29yZGlvbiA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LWpaaFpNei1uXCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBBY2NvcmRpb246IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZEFjY29yZGlvbiBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHYWNjb3JkaW9uIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvR2FjY29yZGlvbj5cbiAgICA8L1dyYXBwZWRBY2NvcmRpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gXCIuL0FjY29yZGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iLCJpbXBvcnQgeyBBY2NvcmRpb25QYW5lbCBhcyBHYWNjb3JkaW9uUGFuZWwgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkQWNjb3JkaW9uID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtbDlqam5qQWZcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IEFjY29yZGlvblBhbmVsOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRBY2NvcmRpb24gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2FjY29yZGlvblBhbmVsIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvR2FjY29yZGlvblBhbmVsPlxuICAgIDwvV3JhcHBlZEFjY29yZGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvblBhbmVsO1xuIiwiaW1wb3J0IFRhZyBmcm9tIFwiLi9BY2NvcmRpb25QYW5lbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBUYWc7XG4iLCJpbXBvcnQgeyBBbmNob3IgYXMgR2FuY2hvciB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRBbmNob3IgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC15VnpIZWE3TVwiIH0pPFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgQW5jaG9yOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRBbmNob3IgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2FuY2hvciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0dhbmNob3I+XG4gICAgPC9XcmFwcGVkQW5jaG9yPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5jaG9yO1xuIiwiaW1wb3J0IEFuY2hvciBmcm9tIFwiLi9BbmNob3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgQW5jaG9yO1xuIiwiaW1wb3J0IHsgQnV0dG9uIGFzIEdidXR0b24gfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkQnV0dG9uID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtbW91eUZvaHBcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZEJ1dHRvbiBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHYnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRCdXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgeyBEcm9wIGFzIEdkcm9wIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZERyb3AgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC1VdE1CVm5Od1wiIH0pPFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgRHJvcDogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIHRhcmdldCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkRHJvcCBkYXRhLXRlc3RpZD17dGVzdElEfSB0YXJnZXQ9e3RhcmdldH0+XG4gICAgICA8R2Ryb3AgdGFyZ2V0PXt0YXJnZXR9IHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWREcm9wPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcDtcbiIsImltcG9ydCBEcm9wIGZyb20gXCIuL0Ryb3BcIjtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcDtcbiIsImltcG9ydCB7IERyb3BCdXR0b24gYXMgR2Ryb3BCdXR0b24gfSBmcm9tIFwiZ3JvbW1ldFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWREcm9wQnV0dG9uID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtMVIyRnFNUk9cIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IERyb3BCdXR0b246IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBkcm9wQ29udGVudCxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZERyb3BCdXR0b24gZHJvcENvbnRlbnQ9e2Ryb3BDb250ZW50fSBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHZHJvcEJ1dHRvbiB7Li4ucHJvcHN9IGRyb3BDb250ZW50PXtkcm9wQ29udGVudH0gLz5cbiAgICA8L1dyYXBwZWREcm9wQnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcEJ1dHRvbjtcbiIsImltcG9ydCBEcm9wQnV0dG9uIGZyb20gXCIuL0Ryb3BCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcEJ1dHRvbjtcbiIsImltcG9ydCB7IE1lbnUgYXMgR21lbnUgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRNZW51ID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtUmhoaGRzRDNcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IE1lbnU6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCBpdGVtcywgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkTWVudSBpdGVtcz17aXRlbXN9IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdtZW51IGl0ZW1zPXtpdGVtc30gey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZE1lbnU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IHsgTmF2IGFzIEduYXYgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBOYXZQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWROYXYgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC01eVRneGYydlwiIH0pPE5hdlByb3BzPmBgO1xuXG5jb25zdCBOYXY6IFJlYWN0LkZDPE5hdlByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWROYXYgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R25hdiB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0duYXY+XG4gICAgPC9XcmFwcGVkTmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwiaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwiaW1wb3J0IHsgVGFicyBhcyBHdGFicyB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRUYWJzID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtR01MSUpSZklcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFRhYnM6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRUYWJzIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEd0YWJzIHsuLi5wcm9wc30gb25BY3RpdmU9eygpID0+IGNvbnNvbGUubG9nKFwiVGFic1wiKX0gLz5cbiAgICA8L1dyYXBwZWRUYWJzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFicztcbiIsImltcG9ydCBUYWJzIGZyb20gXCIuL1RhYnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgVGFicztcbiIsImltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vQWNjb3JkaW9uXCI7XG5pbXBvcnQgQWNjb3JkaW9uUGFuZWwgZnJvbSBcIi4vQWNjb3JkaW9uUGFuZWxcIjtcbmltcG9ydCBBbmNob3IgZnJvbSBcIi4vQW5jaG9yXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IERyb3AgZnJvbSBcIi4vRHJvcFwiO1xuaW1wb3J0IERyb3BCdXR0b24gZnJvbSBcIi4vRHJvcEJ1dG9uXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xuaW1wb3J0IFRhYnMgZnJvbSBcIi4vVGFic1wiO1xuZXhwb3J0IHtcbiAgQnV0dG9uLFxuICBBY2NvcmRpb24sXG4gIERyb3AsXG4gIE1lbnUsXG4gIEFuY2hvcixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIE5hdixcbiAgVGFicyxcbiAgRHJvcEJ1dHRvbixcbn07XG4iLCJpbXBvcnQge1xuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvblBhbmVsLFxuICBBbmNob3IsXG4gIEJ1dHRvbixcbiAgRHJvcCxcbiAgRHJvcEJ1dHRvbixcbiAgTWVudSxcbiAgTmF2LFxuICBUYWJzLFxufSBmcm9tIFwiLi9jb250cm9sc1wiO1xuaW1wb3J0IHtcbiAgQ2hlY2tCb3gsXG4gIENoZWNrQm94R3JvdXAsXG4gIERhdGVJbnB1dCxcbiAgRmlsZUlucHV0LFxuICBGb3JtRmllbGQsXG4gIFNlbGVjdCxcbiAgU2VsZWN0TXVsdGlwbGUsXG4gIFRleHRBcmVhLFxuICBUZXh0SW5wdXQsXG59IGZyb20gXCIuL2lucHV0c1wiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBGb290ZXIsXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgTWFpbixcbiAgT3ZlcmxheSxcbiAgUGFnZSxcbiAgUGFnZUNvbnRlbnQsXG4gIFBhZ2VIZWFkZXIsXG4gIFNpZGVCYXIsXG4gIFN0YWNrLFxufSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IENhcm91c2VsLCBJbWFnZSwgU3ZnLCBWaWRlbyB9IGZyb20gXCIuL21lZGlhXCI7XG5pbXBvcnQgeyBIZWFkaW5nLCBQYXJhZ3JhcGgsIFRhZywgVGV4dCB9IGZyb20gXCIuL3R5cG9ncmFwaHlcIjtcblxuaW1wb3J0IHtcbiAgSW5maW5pdGVTY3JvbGwsXG4gIEtleWJvYXJkLFxuICBNYXJrZG93bixcbiAgU2tpcExpbmssXG4gIFRoZW1lU3dpdGNoZXIsXG59IGZyb20gXCIuL3V0aWxzL1wiO1xuXG5pbXBvcnQgeyBDaXJjbGUsIE92YWwsIFJlY3RhbmdsZSwgU2hhcGUsIFNxdWFyZSB9IGZyb20gXCIuL3NoYXBlc1wiO1xuXG5leHBvcnQge1xuICBCdXR0b24sXG4gIEJveCxcbiAgUGFnZSxcbiAgSGVhZGVyLFxuICBGb290ZXIsXG4gIENhcmQsXG4gIFRoZW1lU3dpdGNoZXIsXG4gIFBhZ2VDb250ZW50LFxuICBIZWFkaW5nLFxuICBNYXJrZG93bixcbiAgVGV4dCxcbiAgUGFyYWdyYXBoLFxuICBUYWcsXG4gIFZpZGVvLFxuICBDYXJvdXNlbCxcbiAgSW1hZ2UsXG4gIENoZWNrQm94LFxuICBDaGVja0JveEdyb3VwLFxuICBEYXRlSW5wdXQsXG4gIFNraXBMaW5rLFxuICBLZXlib2FyZCxcbiAgSW5maW5pdGVTY3JvbGwsXG4gIFRleHRJbnB1dCxcbiAgU2VsZWN0LFxuICBTZWxlY3RNdWx0aXBsZSxcbiAgRm9ybUZpZWxkLFxuICBGaWxlSW5wdXQsXG4gIFRleHRBcmVhLFxuICBEcm9wLFxuICBEcm9wQnV0dG9uLFxuICBNZW51LFxuICBUYWJzLFxuICBOYXYsXG4gIEFuY2hvcixcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25QYW5lbCxcbiAgR3JpZCxcbiAgTWFpbixcbiAgUGFnZUhlYWRlcixcbiAgU2lkZUJhcixcbiAgU3RhY2ssXG4gIE92ZXJsYXksXG4gIFNxdWFyZSxcbiAgQ2lyY2xlLFxuICBSZWN0YW5nbGUsXG4gIE92YWwsXG4gIFNoYXBlLFxuICBTdmcsXG59O1xuIiwiaW1wb3J0IHsgQ2hlY2tCb3ggYXMgR2NoZWNrQm94IH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZENoZWNrQm94ID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtVnNVd2daU3NcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IENoZWNrQm94OiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkQ2hlY2tCb3ggZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2NoZWNrQm94IHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRDaGVja0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrQm94O1xuIiwiaW1wb3J0IENoZWNrQm94IGZyb20gXCIuL0NoZWNrQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrQm94O1xuIiwiaW1wb3J0IHsgQ2hlY2tCb3hHcm91cCBhcyBHY2hlY2tCb3hHcm91cCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRDaGVja0JveCA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LW1XbHhKWDZHXCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBDaGVja0JveEdyb3VwOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgb3B0aW9ucyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZENoZWNrQm94IG9wdGlvbnM9e29wdGlvbnN9IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdjaGVja0JveEdyb3VwIHsuLi5wcm9wc30gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICA8L1dyYXBwZWRDaGVja0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrQm94R3JvdXA7XG4iLCJpbXBvcnQgQ2hlY2tCb3hHcm91cCBmcm9tIFwiLi9DaGVja0JveEdyb3VwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrQm94R3JvdXA7XG4iLCJpbXBvcnQgeyBEYXRlSW5wdXQgYXMgR2RhdGVJbnB1dCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWREYXRlSW5wdXQgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC1GSE84Vk5ZT1wiIH0pPFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgRGF0ZUlucHV0OiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkRGF0ZUlucHV0IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdkYXRlSW5wdXQgey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZERhdGVJbnB1dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVJbnB1dDtcbiIsImltcG9ydCBEYXRlSW5wdXQgZnJvbSBcIi4vRGF0ZUlucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVJbnB1dDtcbiIsImltcG9ydCB7IEZpbGVJbnB1dCBhcyBHZmlsZUlucHV0IH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZEZpbGVJbnB1dCA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LUJaX2p0d0U0XCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBGaWxlSW5wdXQ6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRGaWxlSW5wdXQgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2ZpbGVJbnB1dCB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkRmlsZUlucHV0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUlucHV0O1xuIiwiaW1wb3J0IEZpbGVJbnB1dCBmcm9tIFwiLi9GaWxlSW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUlucHV0O1xuIiwiaW1wb3J0IHsgRm9ybUZpZWxkIGFzIEdmb3JtRmllbGQgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkRm9ybUZpZWxkID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3Qtd20zQzQzYmJcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IEZvcm1GaWVsZDogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZEZvcm1GaWVsZCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHZm9ybUZpZWxkIHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRGb3JtRmllbGQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGQ7XG4iLCJpbXBvcnQgRm9ybUZpZWxkIGZyb20gXCIuL0Zvcm1GaWVsZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGQ7XG4iLCJpbXBvcnQgeyBNYXNrZWRJbnB1dCBhcyBHbWFza2VkSW5wdXQgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkTWFza2VkSW5wdXQgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC1ITXptbFM2X1wiIH0pPFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgTWFza2VkSW5wdXQ6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRNYXNrZWRJbnB1dCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHbWFza2VkSW5wdXQgey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZE1hc2tlZElucHV0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFza2VkSW5wdXQ7XG4iLCJpbXBvcnQgTWFza2VkSW5wdXQgZnJvbSBcIi4vTWFza2VkSW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgTWFza2VkSW5wdXQ7XG4iLCJpbXBvcnQgeyBSYW5nZUlucHV0IGFzIEdyYW5nZUlucHV0IH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFJhbmdlSW5wdXQgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC00MFFjVHdQNlwiIH0pPFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgUmFuZ2VJbnB1dDogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFJhbmdlSW5wdXQgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R3JhbmdlSW5wdXQgey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZFJhbmdlSW5wdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYW5nZUlucHV0O1xuIiwiaW1wb3J0IFJhbmdlSW5wdXQgZnJvbSBcIi4vUmFuZ2VJbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBSYW5nZUlucHV0O1xuIiwiaW1wb3J0IHsgU2VsZWN0IGFzIEdyYW5nZVNlbGVjdCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRTZWxlY3QgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC14SFhNdTdzRVwiIH0pPFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgU2VsZWN0OiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgb3B0aW9ucyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFNlbGVjdCBvcHRpb25zPXtvcHRpb25zfSBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHcmFuZ2VTZWxlY3Qgey4uLnByb3BzfSBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgIDwvV3JhcHBlZFNlbGVjdD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcbiIsImltcG9ydCBTZWxlY3QgZnJvbSBcIi4vU2VsZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcbiIsImltcG9ydCB7IFNlbGVjdE11bHRpcGxlIGFzIEdyYW5nZVNlbGVjdE11bHRpcGxlIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFNlbGVjdE11bHRpcGxlID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtNVR0aUJkUjdcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFNlbGVjdE11bHRpcGxlOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgb3B0aW9ucyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFNlbGVjdE11bHRpcGxlIG9wdGlvbnM9e29wdGlvbnN9IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdyYW5nZVNlbGVjdE11bHRpcGxlIHsuLi5wcm9wc30gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICA8L1dyYXBwZWRTZWxlY3RNdWx0aXBsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdE11bHRpcGxlO1xuIiwiaW1wb3J0IFNlbGVjdE11bHRpcGxlIGZyb20gXCIuL1NlbGVjdE11bHRpcGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdE11bHRpcGxlO1xuIiwiaW1wb3J0IHsgU3RhclJhdGluZyBhcyBHc3RhclJhdGluZyB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkU3RhclJhdGluZyA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LWdYczFDaUxvXCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBTdGFyUmF0aW5nOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgbmFtZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFN0YXJSYXRpbmcgbmFtZT17bmFtZX0gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R3N0YXJSYXRpbmcgey4uLnByb3BzfSBuYW1lPXtuYW1lfSAvPlxuICAgIDwvV3JhcHBlZFN0YXJSYXRpbmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFyUmF0aW5nO1xuIiwiaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSBcIi4vU3RhclJhdGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBTdGFyUmF0aW5nO1xuIiwiaW1wb3J0IHsgVGV4dEFyZWEgYXMgR3RleHRBcmVhIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFRleHRBcmVhID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtLVBfQ3NfY1ZcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFRleHRBcmVhOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgb3B0aW9ucyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFRleHRBcmVhIG9wdGlvbnM9e29wdGlvbnN9IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEd0ZXh0QXJlYSB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkVGV4dEFyZWE+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYTtcbiIsImltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi9UZXh0QXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYTtcbiIsImltcG9ydCB7IFRleHRJbnB1dCBhcyBHdGV4dElucHV0IH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFRleHRJbnB1dCA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LWJMVUpkWnZNXCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBUZXh0SW5wdXQ6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRUZXh0SW5wdXQgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R3RleHRJbnB1dCB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkVGV4dElucHV0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuIiwiaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuIiwiaW1wb3J0IHsgVGh1bWJzUmF0aW5nIGFzIEd0aHVtYnNSYXRpbmcgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFRodW1ic1JhdGluZyA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LXBaSVBMb3YtXCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBUaHVtYnNSYXRpbmc6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBuYW1lLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkVGh1bWJzUmF0aW5nIG5hbWU9e25hbWV9IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEd0aHVtYnNSYXRpbmcgey4uLnByb3BzfSBuYW1lPXtuYW1lfSAvPlxuICAgIDwvV3JhcHBlZFRodW1ic1JhdGluZz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRodW1ic1JhdGluZztcbiIsImltcG9ydCBUaHVtYnNSYXRpbmcgZnJvbSBcIi4vVGh1bWJzUmF0aW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFRodW1ic1JhdGluZztcbiIsImltcG9ydCBDaGVja0JveCBmcm9tIFwiLi9DaGVja0JveFwiO1xuaW1wb3J0IENoZWNrQm94R3JvdXAgZnJvbSBcIi4vQ2hlY2tCb3hHcm91cFwiO1xuaW1wb3J0IERhdGVJbnB1dCBmcm9tIFwiLi9EYXRlSW5wdXRcIjtcbmltcG9ydCBGaWxlSW5wdXQgZnJvbSBcIi4vRmlsZUlucHV0XCI7XG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gXCIuL0Zvcm1GaWVsZFwiO1xuaW1wb3J0IE1hc2tlZElucHV0IGZyb20gXCIuL01hc2tlZElucHV0XCI7XG5pbXBvcnQgUmFuZ2VJbnB1dCBmcm9tIFwiLi9SYW5nZUlucHV0XCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuL1NlbGVjdFwiO1xuaW1wb3J0IFNlbGVjdE11bHRpcGxlIGZyb20gXCIuL1NlbGVjdE11bHRpcGxlXCI7XG5pbXBvcnQgU3RhclJhdGluZyBmcm9tIFwiLi9TdGFyUmF0aW5nXCI7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4vVGV4dEFyZWFcIjtcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSBcIi4vVGV4dElucHV0XCI7XG5pbXBvcnQgVGh1bWJzUmF0aW5nIGZyb20gXCIuL1RodW1ic1JhdGluZ1wiO1xuZXhwb3J0IHtcbiAgQ2hlY2tCb3gsXG4gIENoZWNrQm94R3JvdXAsXG4gIERhdGVJbnB1dCxcbiAgRmlsZUlucHV0LFxuICBSYW5nZUlucHV0LFxuICBNYXNrZWRJbnB1dCxcbiAgU2VsZWN0LFxuICBTZWxlY3RNdWx0aXBsZSxcbiAgU3RhclJhdGluZyxcbiAgVGV4dElucHV0LFxuICBUaHVtYnNSYXRpbmcsXG4gIEZvcm1GaWVsZCxcbiAgVGV4dEFyZWEsXG59O1xuIiwiaW1wb3J0IHsgQm94IGFzIEdib3ggfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG4vL2ltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZEJveCA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LU56Vi16YUx2XCIgfSk8Qm94UHJvcHM+YGA7XG5cbmNvbnN0IEJveDogUmVhY3QuRkM8Qm94UHJvcHM+ID0gKHtcbiAgdGVzdElELFxuICBwYWQsXG4gIGRpcmVjdGlvbixcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRCb3ggZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2JveCBkaXJlY3Rpb249e2RpcmVjdGlvbn0gcGFkPXtwYWR9IHsuLi5wcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvR2JveD5cbiAgICA8L1dyYXBwZWRCb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iLCJpbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iLCJpbXBvcnQgeyBDYXJkIGFzIEdjYXJkIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQ2FyZFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZENhcmQgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC1QbUpPT1JtX1wiIH0pPENhcmRQcm9wcz5gYDtcblxuY29uc3QgQm94OiBSZWFjdC5GQzxDYXJkUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgcGFkLFxuICBkaXJlY3Rpb24sXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkQ2FyZCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHY2FyZCBkaXJlY3Rpb249e2RpcmVjdGlvbn0gcGFkPXtwYWR9IHsuLi5wcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvR2NhcmQ+XG4gICAgPC9XcmFwcGVkQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCB7IEZvb3RlciBhcyBHZm9vdGVyIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuaW1wb3J0IHsgRm9vdGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkRm9vdGVyID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtNi1HZk96dkhcIiB9KTxGb290ZXJQcm9wcz5gYDtcblxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQzxGb290ZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBwYWQsXG4gIGRpcmVjdGlvbixcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRGb290ZXIgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2Zvb3RlciBkaXJlY3Rpb249e2RpcmVjdGlvbn0gcGFkPXtwYWR9IHsuLi5wcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvR2Zvb3Rlcj5cbiAgICA8L1dyYXBwZWRGb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9Gb290ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCB7IEdyaWQgYXMgR2dyaWQgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkR3JpZCA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LXh4M3JCS3VHXCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBHcmlkOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkR3JpZCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHZ3JpZCB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iLCJpbXBvcnQgR3JpZCBmcm9tIFwiLi9HcmlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iLCJpbXBvcnQgeyBIZWFkZXIgYXMgR2hlYWRlciB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IEtvdGlpVGhlbWVQcm92aWRlciB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZEhlYWRlciA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LXpZb0RVbXdpXCIgfSk8QmFzZVByb3BzPmBgO1xuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxCYXNlUHJvcHM+ID0gKHtcbiAgcGFkLFxuICBkaXJlY3Rpb24sXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxLb3RpaVRoZW1lUHJvdmlkZXI+XG4gICAgICA8V3JhcHBlZEhlYWRlcj5cbiAgICAgICAgPEdoZWFkZXI+e2NoaWxkcmVufTwvR2hlYWRlcj5cbiAgICAgIDwvV3JhcHBlZEhlYWRlcj5cbiAgICA8L0tvdGlpVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuL0hlYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IHsgTWFpbiBhcyBHbWFpbiB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IE1haW5Qcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRNYWluID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3Qtb1B6dWJicG9cIiB9KTxNYWluUHJvcHM+YGA7XG5cbmNvbnN0IEdyaWQ6IFJlYWN0LkZDPE1haW5Qcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRNYWluIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdtYWluIHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRNYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiIsImltcG9ydCBNYWluIGZyb20gXCIuL01haW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCB7IExheWVyIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRQYWdlID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtZDB2UVRBNFpcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IE92ZXJsYXk6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRQYWdlIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPExheWVyIHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRQYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcmxheTtcbiIsImltcG9ydCBPdmVybGF5IGZyb20gXCIuL092ZXJsYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcmxheTtcbiIsImltcG9ydCB7IFBhZ2UgYXMgR3BhZ2UgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZVByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFBhZ2UgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC1ZcU5MNzFXQ1wiIH0pPFBhZ2VQcm9wcz5gYDtcblxuY29uc3QgUGFnZTogUmVhY3QuRkM8UGFnZVByb3BzPiA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRQYWdlPlxuICAgICAgPEdwYWdlIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvR3BhZ2U+XG4gICAgPC9XcmFwcGVkUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9QYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgeyBQYWdlQ29udGVudCBhcyBHcGFnZUNvbnRlbnQgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZVByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFBhZ2VDb250ZW50ID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtNU02MjlxSWhcIiB9KTxQYWdlUHJvcHM+YGA7XG5cbmNvbnN0IFBhZ2VDb250ZW50OiBSZWFjdC5GQzxQYWdlUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRQYWdlQ29udGVudCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHcGFnZUNvbnRlbnQgey4uLnByb3BzfT57Y2hpbGRyZW59PC9HcGFnZUNvbnRlbnQ+XG4gICAgPC9XcmFwcGVkUGFnZUNvbnRlbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ29udGVudDtcbiIsImltcG9ydCBQYWdlQ29udGVudCBmcm9tIFwiLi9QYWdlQ29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ29udGVudDtcbiIsImltcG9ydCB7IFBhZ2VIZWFkZXIgYXMgR3BhZ2VIZWFkZXIgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFBhZ2UgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC1qWENleGUtNVwiIH0pPFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgUGFnZUhlYWRlcjogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFBhZ2UgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R3BhZ2VIZWFkZXIgey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZFBhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyO1xuIiwiaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIi4vUGFnZUhlYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyO1xuIiwiaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFNpZGViYXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRTaWRlQmFyID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtSHA2d1lfOTFcIiB9KTxTaWRlYmFyUHJvcHM+YGA7XG5cbmNvbnN0IFNpZGVCYXI6IFJlYWN0LkZDPFNpZGViYXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRTaWRlQmFyIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPFNpZGViYXIgey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZFNpZGVCYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xuIiwiaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZUJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xuIiwiaW1wb3J0IHsgU3RhY2sgYXMgR3N0YWNrIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFN0YWNrID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtS3huelVzcGhcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFN0YWNrOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkU3RhY2sgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R3N0YWNrIHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRTdGFjaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWNrO1xuIiwiaW1wb3J0IFN0YWNrIGZyb20gXCIuL1N0YWNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWNrO1xuIiwiaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9HcmlkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4vTWFpblwiO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSBcIi4vT3ZlcmxheVwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gXCIuL1BhZ2VDb250ZW50XCI7XG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiLi9QYWdlSGVhZGVyXCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9TaWRlQmFyXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIi4vU3RhY2tcIjtcblxuZXhwb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBIZWFkZXIsXG4gIEZvb3RlcixcbiAgUGFnZSxcbiAgUGFnZUNvbnRlbnQsXG4gIFBhZ2VIZWFkZXIsXG4gIFNpZGVCYXIsXG4gIE1haW4sXG4gIFN0YWNrLFxuICBPdmVybGF5LFxuICBHcmlkLFxufTtcbiIsImltcG9ydCB7IENhcm91c2VsIGFzIEdjYXJvdXNlbCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRDYXJvdXNlbCA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LU9rNkhWeUV2XCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBDYXJvdXNlbDogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZENhcm91c2VsIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdjYXJvdXNlbCB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkQ2Fyb3VzZWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiIsImltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiIsImltcG9ydCB7IEltYWdlIGFzIEdpbWFnZSB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRJbWFnZSA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LWJoRVYwX2pFXCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBJbWFnZTogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZEltYWdlIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdpbWFnZSB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkSW1hZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcbiIsImltcG9ydCBJbWFnZSBmcm9tIFwiLi9JbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFN2ZyA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LUh3dklERDlJXCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBTdmc6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBzcmMsXG4gIGlubGluZSA9IGZhbHNlLFxuICBhc0NvbXBvbmVudCxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFN2ZyBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIHtpbmxpbmUgJiYgYXNDb21wb25lbnQgPyBhc0NvbXBvbmVudCA6IG51bGx9XG4gICAgPC9XcmFwcGVkU3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuXG4vLyA8S290aWlUaGVtZVByb3ZpZGVyPlxuLy8gICAgICAgPFdyYXBwZWRTdmcgICBkYXRhLXRlc3RpZD17dGVzdElEfT5cbi8vICAgICAgICAgPEtvdGlpU3ZnIC8+XG4vLyAgICAgICA8L1dyYXBwZWRTdmc+XG4vLyAgICAgPC9Lb3RpaVRoZW1lUHJvdmlkZXI+XG4iLCJpbXBvcnQgU3ZnIGZyb20gXCIuL1N2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBTdmc7XG4iLCJpbXBvcnQgeyBWaWRlbyBhcyBHdmlkZW8gfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkVmlkZW8gPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC1zdFFsRndDYlwiIH0pPFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgVmlkZW86IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRWaWRlbyBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHdmlkZW8gey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZFZpZGVvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG4iLCJpbXBvcnQgVmlkZW8gZnJvbSBcIi4vVmlkZW9cIjtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG4iLCJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4vQ2Fyb3VzZWxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9JbWFnZVwiO1xuaW1wb3J0IFN2ZyBmcm9tIFwiLi9TdmdcIjtcbmltcG9ydCBWaWRlbyBmcm9tIFwiLi9WaWRlb1wiO1xuZXhwb3J0IHsgQ2Fyb3VzZWwsIEltYWdlLCBWaWRlbywgU3ZnIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbmltcG9ydCB7IHVzZUtvdGlpVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9cIjtcbmltcG9ydCB7IGNyZWF0ZUpTQ1NTU2NoZW1hIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcbmltcG9ydCB7IFNoYXBlcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgQ2lyY2xlUHJvcHMgZXh0ZW5kcyBTaGFwZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbn1cblxuY29uc3QgU3R5bGVkQ2lyY2xlID0gc3R5bGVkKFwiZGl2XCIpLndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC1VRHlmbUlSSlwiIH0pKChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSBjcmVhdGVKU0NTU1NjaGVtYShwcm9wcywgXCJjaXJjbGVcIik7XG4gIGNvbnNvbGUubG9nKFwiVGhlIFNIQVBFIFNUWUxFU1wiLCBzdHlsZXMpO1xuICByZXR1cm4geyAuLi5zdHlsZXMgfTtcbn0pO1xuXG5jb25zdCBDaXJjbGU6IFJlYWN0LkZDPENpcmNsZVByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIG5hbWUsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7IHRoZW1lLCB0aGVtZXMsIGNoYW5nZVRoZW1lLCB0aGVtZU1vZGUgPSBcImRhcmtcIiB9ID0gdXNlS290aWlUaGVtZSgpO1xuICBjb25zdCBuZXdQcm9wcyA9IHsgLi4ucHJvcHMsIHRoZW1lTW9kZSB9O1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDaXJjbGUgey4uLm5ld1Byb3BzfSB0aGVtZT17dGhlbWV9IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBudWxsfVxuICAgIDwvU3R5bGVkQ2lyY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuIiwiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaWNsZVwiO1xuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5pbXBvcnQgeyB1c2VLb3RpaVRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHRcIjtcbmltcG9ydCB7IGNyZWF0ZUpTQ1NTU2NoZW1hIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcbmltcG9ydCB7IFNoYXBlcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgU2hhcGVQcm9wcyBleHRlbmRzIFNoYXBlcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xufVxuXG5jb25zdCBTdHlsZWRTaGFwZSA9IHN0eWxlZChcImRpdlwiKS53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtWlIyNnJXZ0pcIiB9KSgocHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gY3JlYXRlSlNDU1NTY2hlbWEocHJvcHMsIFwib3ZhbFwiKTtcbiAgY29uc29sZS5sb2coXCJUaGUgU0hBUEUgU1RZTEVTOlJlY3RhbmdsZVwiLCBzdHlsZXMpO1xuICByZXR1cm4geyAuLi5zdHlsZXMgfTtcbn0pO1xuXG5jb25zdCBPdmFsOiBSZWFjdC5GQzxTaGFwZVByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIG5hbWUsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7IHRoZW1lLCB0aGVtZXMsIGNoYW5nZVRoZW1lLCB0aGVtZU1vZGUgPSBcImRhcmtcIiB9ID0gdXNlS290aWlUaGVtZSgpO1xuICBjb25zdCBuZXdQcm9wcyA9IHsgLi4ucHJvcHMsIHRoZW1lTW9kZSB9O1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTaGFwZSB7Li4ubmV3UHJvcHN9IHRoZW1lPXt0aGVtZX0gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICB7Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IG51bGx9XG4gICAgPC9TdHlsZWRTaGFwZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE92YWw7XG4iLCJpbXBvcnQgT3ZhbCBmcm9tIFwiLi9PdmFsXCI7XG5leHBvcnQgZGVmYXVsdCBPdmFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5pbXBvcnQgeyB1c2VLb3RpaVRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHRcIjtcbmltcG9ydCB7IGNyZWF0ZUpTQ1NTU2NoZW1hIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcbmltcG9ydCB7IFNoYXBlcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgU2hhcGVQcm9wcyBleHRlbmRzIFNoYXBlcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xufVxuXG5jb25zdCBTdHlsZWRTaGFwZSA9IHN0eWxlZChcImRpdlwiKS53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtTmE2V0dJbXZcIiB9KSgocHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gY3JlYXRlSlNDU1NTY2hlbWEocHJvcHMsIFwicmVjdGFuZ2xlXCIpO1xuICBjb25zb2xlLmxvZyhcIlRoZSBTSEFQRSBTVFlMRVM6UmVjdGFuZ2xlXCIsIHN0eWxlcyk7XG4gIHJldHVybiB7IC4uLnN0eWxlcyB9O1xufSk7XG5cbmNvbnN0IFJlY3RhbmdsZTogUmVhY3QuRkM8U2hhcGVQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBuYW1lLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgeyB0aGVtZSwgdGhlbWVzLCBjaGFuZ2VUaGVtZSwgdGhlbWVNb2RlID0gXCJkYXJrXCIgfSA9IHVzZUtvdGlpVGhlbWUoKTtcbiAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLnByb3BzLCB0aGVtZU1vZGUgfTtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2hhcGUgey4uLm5ld1Byb3BzfSB0aGVtZT17dGhlbWV9IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBudWxsfVxuICAgIDwvU3R5bGVkU2hhcGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL1JlY3RhbmdsZVwiO1xuZXhwb3J0IGRlZmF1bHQgUmVjdGFuZ2xlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5pbXBvcnQgeyB1c2VLb3RpaVRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvXCI7XG5pbXBvcnQgeyBTaGFwZXMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUpTQ1NTU2NoZW1hIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcblxuaW50ZXJmYWNlIFNxdWFyZVByb3BzIGV4dGVuZHMgU2hhcGVzIHtcbiAgbmFtZT86IHN0cmluZztcbn1cblxuLy8gMS4gRGVmaW5lIHRoZSBwcm9wcyB0aGF0IHRoZSBTdHlsZWRTaGFwZSBjb21wb25lbnQgYWN0dWFsbHkgYWNjZXB0c1xuaW50ZXJmYWNlIFN0eWxlZFNoYXBlUHJvcHMge1xuICB0aGVtZT86IGFueTtcbiAgdGhlbWVNb2RlPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBcImRhdGEtdGVzdGlkXCI/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xuICBba2V5OiBzdHJpbmddOiBhbnk7IC8vIEFsbG93cyBvdGhlciBkeW5hbWljIHByb3BlcnRpZXMgc3ByZWFkIGZyb20gU2hhcGVzXG59XG5cbi8vIDIuIEV4cGxpY2l0bHkgdHlwZSB0aGUgc3R5bGVkIGZhY3RvcnkgZnVuY3Rpb24gd2l0aCA8U3R5bGVkU2hhcGVQcm9wcz5cbi8vIEFsdGVybmF0aXZlIGdlbmVyaWMgc3ludGF4IHN0cnVjdHVyZVxuY29uc3QgU3R5bGVkU2hhcGUgPSBzdHlsZWQ8YW55PihcImRpdlwiKSgocHJvcHM6IGFueSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlRoZSBQUk9QU1wiLCBwcm9wcyk7XG4gIGNvbnN0IHNoYXBlTmFtZSA9IHByb3BzPy5uYW1lIHx8IFwic2hhcGVcIjtcbiAgY29uc3Qgc3R5bGVzID0gY3JlYXRlSlNDU1NTY2hlbWEocHJvcHMsIFwiY2xpcC1wYXRoXCIsIHNoYXBlTmFtZSk7XG4gIGNvbnNvbGUubG9nKFwiVGhlIFNIQVBFIFNUWUxFU1wiLCBzdHlsZXMpO1xuICByZXR1cm4geyAuLi5zdHlsZXMgfTtcbn0pO1xuXG5jb25zdCBTaGFwZTogUmVhY3QuRkM8U3F1YXJlUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgY2hpbGRyZW4sXG4gIG5hbWUsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHRoZW1lcywgY2hhbmdlVGhlbWUsIHRoZW1lTW9kZSA9IFwiZGFya1wiIH0gPSB1c2VLb3RpaVRoZW1lKCk7XG4gIGNvbnN0IG5ld1Byb3BzID0geyAuLi5wcm9wcywgdGhlbWVNb2RlIH07XG4gIGNvbnNvbGUubG9nKFwiQ2hhbmdlVGhlbWVNb2RlXCIsIGNoYW5nZVRoZW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTaGFwZSB7Li4ubmV3UHJvcHN9IHRoZW1lPXt0aGVtZX0gbmFtZT17bmFtZX0gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICB7Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IG51bGx9XG4gICAgPC9TdHlsZWRTaGFwZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuIiwiaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5pbXBvcnQgeyB1c2VLb3RpaVRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvXCI7XG5pbXBvcnQgeyBTaGFwZXMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbi8vIGltcG9ydCB7IGRlZmF1bHRWYWx1ZXMgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuLy8gaW1wb3J0ICogYXMgRVJPUlJfTUVTU0FHRVMgZnJvbSBcIi4vZXJyb3JfbWVzc2FnZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUpTQ1NTU2NoZW1hIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcblxuaW50ZXJmYWNlIFNxdWFyZVByb3BzIGV4dGVuZHMgU2hhcGVzIHtcbiAgbmFtZT86IHN0cmluZztcbn1cblxuLy8gY29uc3QgY2hlY2tCYWNrZ3JvdW5kID0gKGNvbG9ycywgYmFja2dyb3VuZCwgdGhlbWVNb2RlKSA9PiB7XG4vLyAgIGxldCBiYWNrZ3JvdW5kTmFtZSA9IGNvbG9yc1tiYWNrZ3JvdW5kLnRvTG93ZXJDYXNlKCldIHx8IG51bGw7XG5cbi8vICAgY29uc29sZS5sb2coXCJ0aGVCYWNrZ3JvdW5kQmVmb3JlOzs7XCIsIGJhY2tncm91bmQpO1xuLy8gICBjb25zb2xlLmxvZyhcIlRoZSBiYWNrZ3JvdW5kXCIsIGNvbG9yc1tiYWNrZ3JvdW5kLnRvTG93ZXJDYXNlKCldKTtcbi8vICAgY29uc29sZS5sb2coXCJiYWNrZ3JvdW5kTmFtZVwiLCBiYWNrZ3JvdW5kTmFtZSk7XG4vLyAgIGlmICghYmFja2dyb3VuZE5hbWUpIHJldHVybiBiYWNrZ3JvdW5kO1xuXG4vLyAgIGlmICh0eXBlb2YgYmFja2dyb3VuZE5hbWUgPT09IFwib2JqZWN0XCIpIHtcbi8vICAgICBpZiAodGhlbWVNb2RlID09PSBcImRhcmtcIiB8fCB0aGVtZU1vZGUgPT09IFwibGlnaHRcIikge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJ0aGVtZU1PREUgSVMgZGFyayBvciBsaWdodFwiKTtcbi8vICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kTmFtZVt0aGVtZU1vZGVdO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbi8vICAgICB9XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJ0aGVtZUJhY2tncm91biBpcyBhIHN0cmluZ1wiKTtcbi8vICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZE5hbWU7XG4vLyAgIH1cbi8vICAgY29uc29sZS5sb2coXCJUaGUgQmFja2dyb3VuZCBBZnRlcjs7O1wiLCBiYWNrZ3JvdW5kKTtcbi8vICAgcmV0dXJuIGJhY2tncm91bmQ7XG4vLyB9O1xuLy8gY29uc3QgZ2l2ZUpzQ3NzT2IgPSAocHJvcHMpID0+IHtcbi8vICAgY29uc29sZS5sb2coXCJUaGUgcGFzc2VkIHByb3BzXCIsIHByb3BzKTtcbi8vICAgY29uc29sZS5sb2coXCJLT1RJSVRIRU1FIFBST1ZJREVSOzs7XCIsIHByb3BzPy50aGVtZT8uZ2xvYmFsPy5jb2xvcnMpO1xuXG4vLyAgIGxldCB3aWR0aCA9IHByb3BzPy53aWR0aCA/IHByb3BzLndpZHRoIDogMDtcbi8vICAgbGV0IGhlaWdodCA9IHByb3BzPy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiAwO1xuLy8gICBsZXQgdGhlbWVDb2xvcnMgPSBwcm9wcz8udGhlbWU/Lmdsb2JhbD8uY29sb3JzXG4vLyAgICAgPyBwcm9wcz8udGhlbWU/Lmdsb2JhbD8uY29sb3JzXG4vLyAgICAgOiBudWxsO1xuLy8gICBsZXQgYmFja2dyb3VuZCA9IHByb3BzPy5iYWNrZ3JvdW5kID8gcHJvcHMuYmFja2dyb3VuZCA6IGRlZmF1bHRWYWx1ZXMuY29sb3I7XG4vLyAgIGxldCBpc0FsbERpbWVuc2lvbnNTZXQgPSB3aWR0aCAmJiBoZWlnaHQgPyB0cnVlIDogZmFsc2U7XG4vLyAgIGJhY2tncm91bmQgPSB0aGVtZUNvbG9yc1xuLy8gICAgID8gY2hlY2tCYWNrZ3JvdW5kKHRoZW1lQ29sb3JzLCBiYWNrZ3JvdW5kLCBwcm9wcz8udGhlbWVNb2RlKVxuLy8gICAgIDogYmFja2dyb3VuZDtcblxuLy8gICBsZXQgaXNPbmx5V2lkdGggPSBpc0FsbERpbWVuc2lvbnNTZXQgPyBmYWxzZSA6IHdpZHRoID8gdHJ1ZSA6IGZhbHNlO1xuLy8gICBsZXQgaXNPbmx5SGVpZ2h0ID0gaXNBbGxEaW1lbnNpb25zU2V0ID8gZmFsc2UgOiBoZWlnaHQgPyB0cnVlIDogZmFsc2U7XG5cbi8vICAgaWYgKGlzQWxsRGltZW5zaW9uc1NldCkge1xuLy8gICAgIGlmICh3aWR0aCAhPT0gaGVpZ2h0KSB0aHJvdyBuZXcgRXJyb3IoRVJPUlJfTUVTU0FHRVMuZGltZW5zaW9uc19taXNtYXRjaCk7XG4vLyAgIH0gZWxzZSBpZiAoaXNPbmx5V2lkdGgpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIm9ubHkgd2lkdGggc2V0XCIpO1xuLy8gICAgIGhlaWdodCA9IHdpZHRoO1xuLy8gICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIHZhbHVlIG9mIGhlaWdodFwiLCBoZWlnaHQpO1xuLy8gICB9IGVsc2UgaWYgKGlzT25seUhlaWdodCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwib25seSBoZWlnaHQgc2V0XCIpO1xuLy8gICAgIHdpZHRoID0gaGVpZ2h0O1xuLy8gICAgIGNvbnNvbGUubG9nKFwidXBkYXRlZCB2YWx1ZSBvZiB3aWR0aFwiLCB3aWR0aCk7XG4vLyAgIH1cbi8vICAgcmV0dXJuIHtcbi8vICAgICB3aWR0aDogd2lkdGgsXG4vLyAgICAgaGVpZ2h0OiBoZWlnaHQsXG4vLyAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kLFxuLy8gICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuLy8gICB9O1xuLy8gfTtcblxuY29uc3QgU3R5bGVkU3F1YXJlID0gc3R5bGVkKFwiZGl2XCIpLndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC1OZXV1Z2tkdlwiIH0pKChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhcIlRoZSBQUk9QU1wiLCBwcm9wcyk7XG4gIGNvbnN0IHN0eWxlcyA9IGNyZWF0ZUpTQ1NTU2NoZW1hKHByb3BzLCBcInNxdWFyZVwiKTtcbiAgY29uc29sZS5sb2coXCJUaGUgU0hBUEUgU1RZTEVTXCIsIHN0eWxlcyk7XG4gIHJldHVybiB7IC4uLnN0eWxlcyB9O1xufSk7XG5cbmNvbnN0IFNxdWFyZTogUmVhY3QuRkM8U3F1YXJlUHJvcHM+ID0gKHsgY2hpbGRyZW4sIHRlc3RJRCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHRoZW1lLCB0aGVtZXMsIGNoYW5nZVRoZW1lLCB0aGVtZU1vZGUgPSBcImRhcmtcIiB9ID0gdXNlS290aWlUaGVtZSgpO1xuICBjb25zdCBuZXdQcm9wcyA9IHsgLi4ucHJvcHMsIHRoZW1lTW9kZSB9O1xuICBjb25zb2xlLmxvZyhcIkNoYW5nZVRoZW1lTW9kZVwiLCBjaGFuZ2VUaGVtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU3F1YXJlIHsuLi5uZXdQcm9wc30gdGhlbWU9e3RoZW1lfSBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIHtjaGlsZHJlbiA/IGNoaWxkcmVuIDogbnVsbH1cbiAgICA8L1N0eWxlZFNxdWFyZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTtcbiIsImltcG9ydCBTcXVhcmUgZnJvbSBcIi4vU3F1YXJlXCI7XG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7XG4iLCJjb25zdCBTSEFQRVNfQ09MT1IgPSBcInJlZFwiO1xuY29uc3QgU0hBUEVfU0laRVMgPSBbXCJ4eHNtYWxsXCIsIFwieHNtYWxsXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiLCBcInhsYXJnZVwiXTtcbmV4cG9ydCB7IFNIQVBFU19DT0xPUiwgU0hBUEVfU0laRVMgfTtcbiIsImNvbnN0IGRpbWVuc2lvbnNfbWlzbWF0Y2ggPVxuICBcIldpZHRoIGFuZCBoZWlnaHQgc2hvdWxkIGJlIHRoZSBzYW1lIGZvciBhIFNxdWFyZSBTaGFwZSwgcGxlYXNlIGNoZWNrIHdpZHRoIGFuZCBoZWlnaHQgcHJvcHMgcGFzc2VkIHRvIFNxdWFyZSBjb21wb25lbnRcIjtcbmNvbnN0IHByb3BlcnR5X2lzX25vdF9zdXBwb3J0ZWQgPVxuICBcInByb3BlcnR5IGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoZSBzcGVjaWZpZWQgaXRlbVwiO1xuY29uc3Qgc3RyaW5nX3ZhbHVlX2NvbnN0YW50ID0gXCJQcm9wZXJ0eSB2YWx1ZSBpcyBub3QgdmFsaWRcIjtcbmNvbnN0IHZhbHVlX2Zvcm1hdF91bnJlY29nbmlzZWQgPSBcIlRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgbm90IHJlY29nbmlzZWRcIjtcblxuZXhwb3J0IHtcbiAgZGltZW5zaW9uc19taXNtYXRjaCxcbiAgcHJvcGVydHlfaXNfbm90X3N1cHBvcnRlZCxcbiAgc3RyaW5nX3ZhbHVlX2NvbnN0YW50LFxuICB2YWx1ZV9mb3JtYXRfdW5yZWNvZ25pc2VkLFxufTtcbiIsImltcG9ydCB7IGRvQmFja2dyb3VuZCB9IGZyb20gXCIuL3V0aWxzL2JhY2tncm91bmRcIjtcbmltcG9ydCB7IGRvQm9yZGVyIH0gZnJvbSBcIi4vdXRpbHMvYm9yZGVyXCI7XG5pbXBvcnQgeyBkb0NsaXBwZWRTaGFwZXMgfSBmcm9tIFwiLi91dGlscy9zaGFwZXNcIjtcbmltcG9ydCB7IERvV2lkdGhIZWlnaHRUeXBlIH0gZnJvbSBcIi4vdXRpbHMvdHlwZXNcIjtcbmltcG9ydCB7IGRvV2lkdGhIZWlnaHQgfSBmcm9tIFwiLi91dGlscy93aWR0aFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSlNDU1NTY2hlbWEgPSAocHJvcHMsIHNoYXBlLCBjbGlwU2hhcGUgPSBcIlwiKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiVGhlIHBhc3NlZCBwcm9wc1wiLCBwcm9wcyk7XG4gIGNvbnNvbGUubG9nKFwiS09USUlUSEVNRSBQUk9WSURFUjs7O1wiLCBwcm9wcz8udGhlbWU/Lmdsb2JhbD8uY29sb3JzKTtcbiAgbGV0IHRoZW1lTW9kZSA9IHByb3BzPy50aGVtZU1vZGU7XG4gIGxldCBzaXplID0gcHJvcHM/LnNpemUgPyBwcm9wcy5zaXplIDogbnVsbDtcblxuICBsZXQgd2lkdGhIZWlnaHQ6IERvV2lkdGhIZWlnaHRUeXBlID0gZG9XaWR0aEhlaWdodChwcm9wcywgc2hhcGUsIHNpemUpO1xuICBsZXQgYm9yZGVyID0gZG9Cb3JkZXIocHJvcHMsIHNoYXBlLCB0aGVtZU1vZGUpO1xuICBsZXQgYmFja2dyb3VuZCA9IGRvQmFja2dyb3VuZChwcm9wcywgc2hhcGUsIHRoZW1lTW9kZSk7XG4gIGxldCBjbGlwcGVkU2hhcGUgPSBjbGlwU2hhcGVcbiAgICA/IGRvQ2xpcHBlZFNoYXBlcyhwcm9wcywgY2xpcFNoYXBlLCB0aGVtZU1vZGUpXG4gICAgOiB7fTtcbiAgY29uc29sZS5sb2coXCJ0aGUgV2lkdGhhbmQgdGhlIEhFSUdIVDs7O1wiLCB3aWR0aEhlaWdodCk7XG5cbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmQsXG4gICAgLi4ud2lkdGhIZWlnaHQsXG4gICAgLi4uYm9yZGVyLFxuICAgIC4uLmNsaXBwZWRTaGFwZSxcbiAgICAvLyBib3JkZXIsXG4gICAgLy8gYm9yZGVyOiBcInNvbGlkIHJlZCAycHhcIixcbiAgfTtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBjaGVja0JhY2tncm91bmQgPSAoY29sb3JzLCBiYWNrZ3JvdW5kLCB0aGVtZU1vZGUpID0+IHtcbi8vICAgbGV0IGJhY2tncm91bmROYW1lID0gY29sb3JzW2JhY2tncm91bmQudG9Mb3dlckNhc2UoKV0gfHwgbnVsbDtcblxuLy8gICBjb25zb2xlLmxvZyhcInRoZUJhY2tncm91bmRCZWZvcmU7OztcIiwgYmFja2dyb3VuZCk7XG4vLyAgIGNvbnNvbGUubG9nKFwiVGhlIGJhY2tncm91bmRcIiwgY29sb3JzW2JhY2tncm91bmQudG9Mb3dlckNhc2UoKV0pO1xuLy8gICBjb25zb2xlLmxvZyhcImJhY2tncm91bmROYW1lXCIsIGJhY2tncm91bmROYW1lKTtcbi8vICAgaWYgKCFiYWNrZ3JvdW5kTmFtZSkgcmV0dXJuIGJhY2tncm91bmQ7XG5cbi8vICAgaWYgKHR5cGVvZiBiYWNrZ3JvdW5kTmFtZSA9PT0gXCJvYmplY3RcIikge1xuLy8gICAgIGlmICh0aGVtZU1vZGUgPT09IFwiZGFya1wiIHx8IHRoZW1lTW9kZSA9PT0gXCJsaWdodFwiKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInRoZW1lTU9ERSBJUyBkYXJrIG9yIGxpZ2h0XCIpO1xuLy8gICAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmROYW1lW3RoZW1lTW9kZV07XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuLy8gICAgIH1cbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZyhcInRoZW1lQmFja2dyb3VuIGlzIGEgc3RyaW5nXCIpO1xuLy8gICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kTmFtZTtcbi8vICAgfVxuLy8gICBjb25zb2xlLmxvZyhcIlRoZSBCYWNrZ3JvdW5kIEFmdGVyOzs7XCIsIGJhY2tncm91bmQpO1xuLy8gICByZXR1cm4gYmFja2dyb3VuZDtcbi8vIH07XG5cbi8vIGNvbnN0IGdldERlZmF1bHRWYWx1ZSA9IChwcm9LZXksIGlzTnVtZXJpYyA9IGZhbHNlLCB0ZXh0ID0gXCJcIikgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcImdldERlZmF1bHRWYWx1ZTs7O1wiLCBwcm9LZXksIGlzTnVtZXJpYywgdGV4dCk7XG4vLyAgIGlmIChkZWZhdWx0VmFsdWVzW3Byb0tleV0pIHtcbi8vICAgICBpZiAoaXNOdW1lcmljKSByZXR1cm4gZGVmYXVsdFZhbHVlc1twcm9LZXldW1wibnVtZXJpY1wiXTtcbi8vICAgICBpZiAoIXRleHQpIHJldHVybiBkZWZhdWx0VmFsdWVzW3Byb0tleV07XG4vLyAgICAgY29uc29sZS5sb2coXG4vLyAgICAgICBcIlZhbHVlIHRvIGJlIHJldHVybmVkIHN0cmluZzs7O1wiLFxuLy8gICAgICAgZGVmYXVsdFZhbHVlc1twcm9LZXldW1wic3RyaW5nXCJdW3RleHRdXG4vLyAgICAgKTtcbi8vICAgICByZXR1cm4gZGVmYXVsdFZhbHVlc1twcm9LZXldW1wic3RyaW5nXCJdW3RleHRdO1xuLy8gICB9XG4vLyAgIHRocm93IG5ldyBFcnJvcihFUk9SUl9NRVNTQUdFUy5wcm9wZXJ0eV9pc19ub3Rfc3VwcG9ydGVkKTtcbi8vIH07XG5cbi8vIGNvbnN0IGdldFZlbmRvclRoZW1lUHJvcHMgPSAodGhlbWVQcm9wcywgcHJvcCk6IGFueSA9PiB7XG4vLyAgIHJldHVybiB0aGVtZVByb3BzPy50aGVtZT8uZ2xvYmFsW3Byb3BdXG4vLyAgICAgPyB0aGVtZVByb3BzPy50aGVtZT8uZ2xvYmFsW3Byb3BdXG4vLyAgICAgOiBudWxsO1xuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IGV4dHJhY3RQcm9wZXJ0eSA9IChwcm9wZXJ0eUtleSwgcHJvcGVydHlTb3VyY2UpID0+IHtcbi8vICAgcmV0dXJuIHByb3BlcnR5U291cmNlW3Byb3BlcnR5S2V5XSA/IHByb3BlcnR5U291cmNlW3Byb3BlcnR5S2V5XSA6IGZhbHNlO1xuLy8gfTtcblxuLy8gY29uc3QgY2hlY2tQcm9wZXJ0eVZhbHVlID0gKHByb3BlcnR5S2V5LCB2YWx1ZSkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcIlRoZSBQcm9wZXJ0eWNoZWNrVmFsdWU7OztcIiwgdmFsdWUpO1xuLy8gICBjb25zb2xlLmxvZyhcIlRIZVBST1BFUiBLRVk7O1wiLCBwcm9wZXJ0eUtleSk7XG4vLyAgIGNvbnNvbGUubG9nKFwiVGhlVHlwZW9GIHByb3BlcnR5VmFsdWU7OztcIiwgbnVtYmVyX2NoZWNrX3BhdHRlcm4udGVzdCh2YWx1ZSkpO1xuLy8gICBjb25zb2xlLmxvZyhcIlNIQVBFIFNJWkVTOzs7XCIsIFNIQVBFX1NJWkVTKTtcbi8vICAgY29uc29sZS5sb2coXCJTSEFQRSBTSVpFUyBJTkNMVURFU1wiLCBTSEFQRV9TSVpFUy5pbmNsdWRlcyh2YWx1ZSkpO1xuLy8gICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG4vLyAgIGlmIChudW1iZXJfY2hlY2tfcGF0dGVybi50ZXN0KHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuLy8gICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4vLyAgICAgaWYgKFNIQVBFX1NJWkVTLmluY2x1ZGVzKHZhbHVlKSlcbi8vICAgICAgIHJldHVybiBnZXREZWZhdWx0VmFsdWUocHJvcGVydHlLZXksIGZhbHNlLCB2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoRVJPUlJfTUVTU0FHRVMuc3RyaW5nX3ZhbHVlX2NvbnN0YW50KTtcbi8vICAgfVxuXG4vLyAgIHRocm93IG5ldyBFcnJvcihFUk9SUl9NRVNTQUdFUy52YWx1ZV9mb3JtYXRfdW5yZWNvZ25pc2VkKTtcbi8vIH07XG5cbi8vIGNvbnN0IGRvV2lkdGhIZWlnaHQgPSAoXG4vLyAgIHByb3BzOiBvYmplY3QsXG4vLyAgIHNoYXBlOiBzdHJpbmcsXG4vLyAgIHNpemU6IHN0cmluZyB8IG51bWJlclxuLy8gKTogRG9XaWR0aEhlaWdodFR5cGUgPT4ge1xuLy8gICBzaXplID8gKHByb3BzW1wid2lkdGhcIl0gPSBzaXplKSA6IG51bGw7XG4vLyAgIGxldCB3aWR0aCA9IGNoZWNrUHJvcGVydHlWYWx1ZShcIndpZHRoXCIsIGV4dHJhY3RQcm9wZXJ0eShcIndpZHRoXCIsIHByb3BzKSk7XG4vLyAgIGxldCBoZWlnaHQgPSBjaGVja1Byb3BlcnR5VmFsdWUoXCJoZWlnaHRcIiwgZXh0cmFjdFByb3BlcnR5KFwiaGVpZ2h0XCIsIHByb3BzKSk7XG4vLyAgIGNvbnNvbGUubG9nKFwiZG9XaWR0aEFuZEhlaWdodDs7O1wiLCB3aWR0aCwgaGVpZ2h0KTtcbi8vICAgY29uc29sZS5sb2coXCJUaGUgU0hBUEVcIiwgc2hhcGUpO1xuLy8gICBzd2l0Y2ggKHNoYXBlKSB7XG4vLyAgICAgY2FzZSBcInNxdWFyZVwiOlxuLy8gICAgICAgY29uc29sZS5sb2coXCJjYXNlIGlzIFNRVUFSRVwiKTtcbi8vICAgICAgIHJldHVybiBzcXVhcmVXaWR0aEhlaWdodCh3aWR0aCwgaGVpZ2h0LCBzaGFwZSk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHdpZHRoLFxuLy8gICAgIGhlaWdodCxcbi8vICAgfTtcbi8vIH07XG5cbi8vIGNvbnN0IGRvQmFja2dyb3VuZCA9IChcbi8vICAgcHJvcHM6IG9iamVjdCxcbi8vICAgc2hhcGU6IHN0cmluZyxcbi8vICAgdGhlbWVNb2RlOiBzdHJpbmdcbi8vICk6IHN0cmluZyA9PiB7XG4vLyAgIGxldCBiYWNrZ3JvdW5kID1cbi8vICAgICBleHRyYWN0UHJvcGVydHkoXCJiYWNrZ3JvdW5kXCIsIHByb3BzKSB8fCBnZXREZWZhdWx0VmFsdWUoXCJiYWNrZ3JvdW5kXCIpO1xuLy8gICBsZXQgdGhlbWVDb2xvcnMgPSBnZXRWZW5kb3JUaGVtZVByb3BzKHByb3BzLCBcImNvbG9yc1wiKTtcblxuLy8gICBiYWNrZ3JvdW5kID0gdGhlbWVDb2xvcnNcbi8vICAgICA/IGNoZWNrQmFja2dyb3VuZCh0aGVtZUNvbG9ycywgYmFja2dyb3VuZCwgdGhlbWVNb2RlKVxuLy8gICAgIDogYmFja2dyb3VuZDtcblxuLy8gICByZXR1cm4gYmFja2dyb3VuZDtcbi8vIH07XG5cbi8vIGNvbnN0IGRvQm9yZGVyID0gKFxuLy8gICBwcm9wczogb2JqZWN0LFxuLy8gICBzaGFwZTogc3RyaW5nLFxuLy8gICB0aGVtZU1vZGU6IHN0cmluZ1xuLy8gKTogc3RyaW5nIHwgb2JqZWN0ID0+IHtcbi8vICAgbGV0IGJhY2tncm91bmQgPVxuLy8gICAgIGV4dHJhY3RQcm9wZXJ0eShcImJhY2tncm91bmRcIiwgcHJvcHMpIHx8IGdldERlZmF1bHRWYWx1ZShcImJhY2tncm91bmRcIik7XG4vLyAgIGxldCB0aGVtZUNvbG9ycyA9IGdldFZlbmRvclRoZW1lUHJvcHMocHJvcHMsIFwiY29sb3JzXCIpO1xuXG4vLyAgIGJhY2tncm91bmQgPSB0aGVtZUNvbG9yc1xuLy8gICAgID8gY2hlY2tCYWNrZ3JvdW5kKHRoZW1lQ29sb3JzLCBiYWNrZ3JvdW5kLCB0aGVtZU1vZGUpXG4vLyAgICAgOiBiYWNrZ3JvdW5kO1xuXG4vLyAgIHJldHVybiBiYWNrZ3JvdW5kO1xuLy8gfTtcblxuLy8gY29uc3Qgc3F1YXJlV2lkdGhIZWlnaHQgPSAod2lkdGgsIGhlaWdodCwgc2hhcGUpOiBEb1dpZHRoSGVpZ2h0VHlwZSA9PiB7XG4vLyAgIGlmICghd2lkdGggJiYgIWhlaWdodClcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgd2lkdGg6IGdldERlZmF1bHRWYWx1ZShcIndpZHRoXCIsIHRydWUpLFxuLy8gICAgICAgaGVpZ2h0OiBnZXREZWZhdWx0VmFsdWUoXCJoZWlnaHRcIiwgdHJ1ZSksXG4vLyAgICAgfTtcbi8vICAgaWYgKCF3aWR0aCkgcmV0dXJuIHsgd2lkdGg6IGhlaWdodCwgaGVpZ2h0IH07XG4vLyAgIGlmICghaGVpZ2h0KSByZXR1cm4geyB3aWR0aCwgaGVpZ2h0OiB3aWR0aCB9O1xuLy8gICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4vLyB9O1xuIiwiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcbmltcG9ydCBPdmFsIGZyb20gXCIuL092YWxcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vU3F1YXJlXCI7XG5cbmV4cG9ydCB7IFNxdWFyZSwgQ2lyY2xlLCBSZWN0YW5nbGUsIE92YWwsIFNoYXBlIH07XG4iLCJjb25zdCBudW1iZXJfY2hlY2tfcGF0dGVybjogUmVnRXhwID0gL15cXGQrJC87XG5jb25zdCBzcGxpdF9zdHJpbmdfYnlfc3BhY2U6IFJlZ0V4cCA9IC9cXHMvZztcbmNvbnN0IHN0cmluZ19jaGVja19wYXR0ZXJuOiBSZWdFeHAgPSAvXFxEKi87XG5leHBvcnQgeyBudW1iZXJfY2hlY2tfcGF0dGVybiwgc3BsaXRfc3RyaW5nX2J5X3NwYWNlLCBzdHJpbmdfY2hlY2tfcGF0dGVybiB9O1xuIiwiaW1wb3J0IHsgZXh0cmFjdFByb3BlcnR5IH0gZnJvbSBcIi4vZWtzdHJhY3RvcnNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRWYWx1ZSwgZ2V0VmVuZG9yVGhlbWVQcm9wcyB9IGZyb20gXCIuL2dldHRlcnNcIjtcbmNvbnN0IGNoZWNrQmFja2dyb3VuZCA9IChjb2xvcnMsIGJhY2tncm91bmQsIHRoZW1lTW9kZSkgPT4ge1xuICBsZXQgYmFja2dyb3VuZE5hbWUgPSBjb2xvcnNbYmFja2dyb3VuZC50b0xvd2VyQ2FzZSgpXSB8fCBudWxsO1xuXG4gIGNvbnNvbGUubG9nKFwidGhlQmFja2dyb3VuZEJlZm9yZTs7O1wiLCBiYWNrZ3JvdW5kKTtcbiAgY29uc29sZS5sb2coXCJUaGUgYmFja2dyb3VuZFwiLCBjb2xvcnNbYmFja2dyb3VuZC50b0xvd2VyQ2FzZSgpXSk7XG4gIGNvbnNvbGUubG9nKFwiYmFja2dyb3VuZE5hbWVcIiwgYmFja2dyb3VuZE5hbWUpO1xuICBpZiAoIWJhY2tncm91bmROYW1lKSByZXR1cm4gYmFja2dyb3VuZDtcblxuICBpZiAodHlwZW9mIGJhY2tncm91bmROYW1lID09PSBcIm9iamVjdFwiKSB7XG4gICAgaWYgKHRoZW1lTW9kZSA9PT0gXCJkYXJrXCIgfHwgdGhlbWVNb2RlID09PSBcImxpZ2h0XCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGhlbWVNT0RFIElTIGRhcmsgb3IgbGlnaHRcIik7XG4gICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZE5hbWVbdGhlbWVNb2RlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwidGhlbWVCYWNrZ3JvdW4gaXMgYSBzdHJpbmdcIik7XG4gICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmROYW1lO1xuICB9XG4gIGNvbnNvbGUubG9nKFwiVGhlIEJhY2tncm91bmQgQWZ0ZXI7OztcIiwgYmFja2dyb3VuZCk7XG4gIHJldHVybiBiYWNrZ3JvdW5kO1xufTtcblxuY29uc3QgZG9CYWNrZ3JvdW5kID0gKFxuICBwcm9wczogb2JqZWN0LFxuICBzaGFwZTogc3RyaW5nLFxuICB0aGVtZU1vZGU6IHN0cmluZ1xuKTogc3RyaW5nID0+IHtcbiAgbGV0IGJhY2tncm91bmQgPVxuICAgIGV4dHJhY3RQcm9wZXJ0eShcImJhY2tncm91bmRcIiwgcHJvcHMpIHx8IGdldERlZmF1bHRWYWx1ZShcImJhY2tncm91bmRcIik7XG4gIGxldCB0aGVtZUNvbG9ycyA9IGdldFZlbmRvclRoZW1lUHJvcHMocHJvcHMsIFwiY29sb3JzXCIpO1xuXG4gIGJhY2tncm91bmQgPSB0aGVtZUNvbG9yc1xuICAgID8gY2hlY2tCYWNrZ3JvdW5kKHRoZW1lQ29sb3JzLCBiYWNrZ3JvdW5kLCB0aGVtZU1vZGUpXG4gICAgOiBiYWNrZ3JvdW5kO1xuXG4gIHJldHVybiBiYWNrZ3JvdW5kO1xufTtcblxuZXhwb3J0IHsgZG9CYWNrZ3JvdW5kIH07XG4iLCJpbXBvcnQgeyBudW1iZXJfY2hlY2tfcGF0dGVybiwgc3BsaXRfc3RyaW5nX2J5X3NwYWNlIH0gZnJvbSBcIi4uL3BhdHRlcm5zXCI7XG5pbXBvcnQgY29sb3JzIGZyb20gXCIuL2NvbG9yc1wiO1xuaW1wb3J0IHsgZGVmYXVsdFZhbHVlcyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBleHRyYWN0UHJvcGVydHkgfSBmcm9tIFwiLi9la3N0cmFjdG9yc1wiO1xuaW1wb3J0IHsgQm9yZGVyTGluZVR5cGUsIEJvcmRlcldpZHRoIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gXCIuL3V0aWxzXCI7XG4vLyBpbXBvcnQgeyBnZXREZWZhdWx0VmFsdWUsIGdldFZlbmRvclRoZW1lUHJvcHMgfSBmcm9tIFwiLi9nZXR0ZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBkb0JvcmRlciA9IChwcm9wcywgc2hhcGUsIHRoZW1lTU9ERSk6IG9iamVjdCA9PiB7XG4gIGxldCBib3JkZXIgPSBleHRyYWN0UHJvcGVydHkoXCJib3JkZXJcIiwgcHJvcHMpO1xuICBjb25zb2xlLmxvZyhcIlRIRSBCT1JERVJcIiwgcHJvcHMpO1xuICBjb25zb2xlLmxvZyhcIlRIRSBCT1JERVIgRVhUUkFDVEVEOzs7XCIsIGJvcmRlcik7XG4gIGNvbnN0IHsgYm9yZGVyOiBkZWZhdWx0Qm9yZGVyIH0gPSBkZWZhdWx0VmFsdWVzO1xuICBjb25zdCB7IHdpZHRoOiBib3JkZXJXaWR0aCB9ID0gZGVmYXVsdEJvcmRlcjtcbiAgaWYgKCFib3JkZXIpIHJldHVybiB7fTtcbiAgbGV0IHNwbGl0Qm9yZGVyID0gc3BsaXRCb3JkZXJTdHJpbmcoYm9yZGVyLCBzcGxpdF9zdHJpbmdfYnlfc3BhY2UpO1xuICBsZXQgcmF3Qm9yZGVyID0gYm9yZGVyV2lkdGhbc3BsaXRCb3JkZXJbMF1dIHx8IHNwbGl0Qm9yZGVyWzBdO1xuXG4gIGNvbnNvbGUubG9nKFwiVGhlUmF3Qm9yZGVyOzs7XCIsIHJhd0JvcmRlcik7XG4gIGxldCBudW1lcmljZUJvcmRlciA9IHJhd0JvcmRlciA/IHNldE1lYXN1cmVtZW50VW5pdChyYXdCb3JkZXIsIFwicHhcIikgOiAwO1xuICBjb25zb2xlLmxvZyhcIlRIRSBOVU1FUklDIEJPUkRFUjs7O1wiLCBudW1lcmljZUJvcmRlcik7XG4gIGxldCB0ZXh0T3JOdW1lcmljQm9yZGVyID0gcmF3Qm9yZGVyID8gcmF3Qm9yZGVyIDogbnVtZXJpY2VCb3JkZXI7XG4gIGNvbnNvbGUubG9nKFwiQk9SREVSIFNQTElUXCIsIHNwbGl0Qm9yZGVyKTtcbiAgaWYgKHRleHRPck51bWVyaWNCb3JkZXIpIHtcbiAgICBsZXQgaGFuZGxlZEJvcmRlciA9IGhhbmRsZUJvcmRlcihcbiAgICAgIHNwbGl0Qm9yZGVyLFxuICAgICAgZGVmYXVsdFZhbHVlcy5ib3JkZXIsXG4gICAgICBudW1lcmljZUJvcmRlclxuICAgICk7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVCb3JkZXI7OztcIiwgaGFuZGxlZEJvcmRlcik7XG4gICAgcmV0dXJuIGhhbmRsZWRCb3JkZXI7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBib3JkZXIsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQnlTdHJpbmcgPSAoYm9yZGVyU3RyaW5nOiBzdHJpbmcpOiBvYmplY3QgPT4ge1xuICBjb25zdCB7IGJvcmRlciB9ID0gZGVmYXVsdFZhbHVlcztcbiAgY29uc3QgeyB3aWR0aCB9ID0gYm9yZGVyO1xuICBjb25zdCBzZXRCb3JkZXIgPSB3aWR0aFtib3JkZXJTdHJpbmddIHx8IFwiXCI7XG5cbiAgaWYgKHNldEJvcmRlcikge1xuICAgIGlmIChzZXRCb3JkZXIgPT09IFwibm9uZVwiKSByZXR1cm4gc2V0Qm9yZGVyO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib3JkZXIsXG4gIH07XG59O1xuXG5jb25zdCBzcGxpdEJvcmRlclN0cmluZyA9IChcbiAgYm9yZGVyU3RyaW5nOiBzdHJpbmcsXG4gIHNwbGl0Qnk6IHN0cmluZyB8IFJlZ0V4cFxuKTogc3RyaW5nW10gPT4ge1xuICByZXR1cm4gYm9yZGVyU3RyaW5nLnRyaW0oKS5zcGxpdChzcGxpdEJ5KTtcbn07XG5cbmNvbnN0IGhhbmRsZUJvcmRlciA9IChcbiAgYm9yZGVyRGljdDogc3RyaW5nW10sXG4gIGRlZmF1bHRCb3JkZXI6IHsgd2lkdGg6IEJvcmRlcldpZHRoOyBsaW5lczogQm9yZGVyTGluZVR5cGU7IGNvbG9yOiBzdHJpbmcgfSxcbiAgc2V0Qm9yZGVyOiBzdHJpbmcgfCBudW1iZXJcbik6IG9iamVjdCA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQm9yZGVyRGljdGlvbmFyeVwiLCBib3JkZXJEaWN0KTtcbiAgY29uc29sZS5sb2coXCJCb3JkZXJEaWN0aW9uYXJ5XCIsIGJvcmRlckRpY3RbMl0pO1xuICBjb25zb2xlLmxvZyhcIkJvcmRlckRpY3Rpb25hcnlcIiwgY29sb3JzW2JvcmRlckRpY3RbMl1dKTtcbiAgY29uc29sZS5sb2coXCJCb3JkZXJEaWN0aW9uYXJ5XCIsIGNvbG9ycyk7XG5cbiAgbGV0IHsgbGluZXMsIGNvbG9yIH0gPSBkZWZhdWx0Qm9yZGVyO1xuICBsZXQgYm9yZGVyV2lkdGg6IEJvcmRlcldpZHRoIHwgc3RyaW5nIHwgbnVtYmVyID0gc2V0Qm9yZGVyO1xuICBsZXQgYm9yZGVyU3R5bGU6IEJvcmRlckxpbmVUeXBlID0gYm9yZGVyRGljdFsxXVxuICAgID8gbGluZXNbYm9yZGVyRGljdFsxXV1cbiAgICA6IGxpbmVzPy5zb2xpZDtcbiAgbGV0IGJvcmRlckNvbG9yID0gYm9yZGVyRGljdFsyXSA/IGJvcmRlckRpY3RbMl0gOiBjb2xvcjtcbiAgbGV0IGJvcmRlckxlbiA9IGJvcmRlckRpY3QubGVuZ3RoO1xuXG4gIGxldCBzaWRlcyA9IGJvcmRlckxlbiA+IDMgPyBib3JkZXJEaWN0LnNsaWNlKDMsIGJvcmRlckxlbikgOiBbXTtcbiAgbGV0IGJvcmRlclNpZGVzID0ge307XG4gIHNpZGVzXG4gICAgPyBzaWRlcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgbGV0IHNwbGl0Qm9yZGVyU2lkZSA9IHNwbGl0Qm9yZGVyU3RyaW5nKGl0ZW0sIFwiOlwiKTtcbiAgICAgICAgbGV0IGlzVmVydGljYWxPckhvcml6b250YWwgPVxuICAgICAgICAgIHNwbGl0Qm9yZGVyU2lkZVswXSA9PT0gXCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICA/IFtcInRvcFwiLCBcImJvdHRvbVwiXVxuICAgICAgICAgICAgOiBzcGxpdEJvcmRlclNpZGVbMF0gPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICA/IFtcImxlZnRcIiwgXCJyaWdodFwiXVxuICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTUExJVDpCT1JERVJcIiwgc3BsaXRCb3JkZXJTaWRlKTtcbiAgICAgICAgbGV0IGZpcnN0SXRlbVNwbGl0ID1cbiAgICAgICAgICBpc1ZlcnRpY2FsT3JIb3Jpem9udGFsLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gaXNWZXJ0aWNhbE9ySG9yaXpvbnRhbFxuICAgICAgICAgICAgOiBzcGxpdEJvcmRlclN0cmluZyhzcGxpdEJvcmRlclNpZGVbMF0sIFwiLVwiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkZJUlNUSVRFTTpcIiwgZmlyc3RJdGVtU3BsaXQpO1xuXG4gICAgICAgIGZpcnN0SXRlbVNwbGl0Lmxlbmd0aCA+IDFcbiAgICAgICAgICA/IGZpcnN0SXRlbVNwbGl0Lm1hcCgoYlNpZGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlQm9yZGVyU2lkZXMoYm9yZGVyU2lkZXMsIGJTaWRlLCBgJHtzcGxpdEJvcmRlclNpZGVbMV19YCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogaGFuZGxlQm9yZGVyU2lkZXMoXG4gICAgICAgICAgICAgIGJvcmRlclNpZGVzLFxuICAgICAgICAgICAgICBzcGxpdEJvcmRlclNpZGVbMF0sXG4gICAgICAgICAgICAgIHNwbGl0Qm9yZGVyU2lkZVsxXVxuICAgICAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgOiBcIlwiO1xuXG4gIHJldHVybiB7XG4gICAgYm9yZGVyV2lkdGgsXG4gICAgYm9yZGVyU3R5bGUsXG4gICAgYm9yZGVyQ29sb3IsXG4gICAgLi4uYm9yZGVyU2lkZXMsXG4gIH07XG59O1xuXG5jb25zdCBzZXRNZWFzdXJlbWVudFVuaXQgPSAodGFyZ2V0OiBzdHJpbmcsIHVuaXQ6IHN0cmluZyA9IFwicHhcIikgPT4ge1xuICBpZiAobnVtYmVyX2NoZWNrX3BhdHRlcm4udGVzdCh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIGAke3RhcmdldH0ke3VuaXR9YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVCb3JkZXJTaWRlcyA9IChcbiAgb2I6IG9iamVjdCxcbiAgYm9yZGVyU2lkZTogc3RyaW5nLFxuICBib3JkZXJTaWRlSXRlbXM6IHN0cmluZ1xuKTogb2JqZWN0ID0+IHtcbiAgbGV0IHNwbGl0Qm9yZGVyU2lkZVZhbHVlcyA9IHNwbGl0Qm9yZGVyU3RyaW5nKGJvcmRlclNpZGVJdGVtcywgXCItXCIpO1xuICBsZXQgYm9yZGVyU2lkZVdpZHRoID0gc3BsaXRCb3JkZXJTaWRlVmFsdWVzWzBdO1xuICBsZXQgYm9yZGVyU2lkZVN0eWxlID0gc3BsaXRCb3JkZXJTaWRlVmFsdWVzWzFdO1xuICBsZXQgYm9yZGVyU2lkZUNvbG9yID0gc3BsaXRCb3JkZXJTaWRlVmFsdWVzWzJdO1xuXG4gIG9iW2Bib3JkZXIke2NhcGl0YWxpemVGaXJzdExldHRlcihib3JkZXJTaWRlKX1gXSA9IGAke3NldE1lYXN1cmVtZW50VW5pdChcbiAgICBib3JkZXJTaWRlV2lkdGhcbiAgKX0gJHtib3JkZXJTaWRlU3R5bGV9ICR7Ym9yZGVyU2lkZUNvbG9yfWA7XG5cbiAgcmV0dXJuIG9iO1xufTtcbiIsImltcG9ydCB7IFNIQVBFX1NJWkVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0ICogYXMgRVJPUlJfTUVTU0FHRVMgZnJvbSBcIi4uL2Vycm9yX21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBudW1iZXJfY2hlY2tfcGF0dGVybiB9IGZyb20gXCIuLi9wYXR0ZXJuc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFZhbHVlIH0gZnJvbSBcIi4vZ2V0dGVyc1wiO1xuXG5leHBvcnQgY29uc3QgY2hlY2tQcm9wZXJ0eVZhbHVlID0gKHByb3BlcnR5S2V5LCB2YWx1ZSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlRoZSBQcm9wZXJ0eWNoZWNrVmFsdWU7OztcIiwgdmFsdWUpO1xuICBjb25zb2xlLmxvZyhcIlRIZVBST1BFUiBLRVk7O1wiLCBwcm9wZXJ0eUtleSk7XG4gIGNvbnNvbGUubG9nKFwiVGhlVHlwZW9GIHByb3BlcnR5VmFsdWU7OztcIiwgbnVtYmVyX2NoZWNrX3BhdHRlcm4udGVzdCh2YWx1ZSkpO1xuICBjb25zb2xlLmxvZyhcIlNIQVBFIFNJWkVTOzs7XCIsIFNIQVBFX1NJWkVTKTtcbiAgY29uc29sZS5sb2coXCJTSEFQRSBTSVpFUyBJTkNMVURFU1wiLCBTSEFQRV9TSVpFUy5pbmNsdWRlcyh2YWx1ZSkpO1xuICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG4gIGlmIChudW1iZXJfY2hlY2tfcGF0dGVybi50ZXN0KHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKFNIQVBFX1NJWkVTLmluY2x1ZGVzKHZhbHVlKSlcbiAgICAgIHJldHVybiBnZXREZWZhdWx0VmFsdWUocHJvcGVydHlLZXksIGZhbHNlLCB2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoRVJPUlJfTUVTU0FHRVMuc3RyaW5nX3ZhbHVlX2NvbnN0YW50KTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihFUk9SUl9NRVNTQUdFUy52YWx1ZV9mb3JtYXRfdW5yZWNvZ25pc2VkKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBbXG4gIGBhbGljZWJsdWVgLFxuICBgYW50aXF1ZXdoaXRlYCxcbiAgYGFxdWFgLFxuICBgYXF1YW1hcmluZWAsXG4gIGBhenVyZWAsXG4gIGBiZWlnZWAsXG4gIGBiaXNxdWVgLFxuICBgYmxhY2tgLFxuICBgYmxhbmNoZWRhbG1vbmRgLFxuICBgYmx1ZWAsXG4gIGBibHVldmlvbGV0YCxcbiAgYGJyb3duYCxcbiAgYGJ1cmx5d29vZGAsXG4gIGBjYWRldGJsdWVgLFxuICBgY2hhcnRyZXVzZWAsXG4gIGBjaG9jb2xhdGVgLFxuICBgY29yYWxgLFxuICBgY29ybmZsb3dlcmJsdWVgLFxuICBgY29ybnNpbGtgLFxuICBgY3JpbXNvbmAsXG4gIGBjeWFuYCxcbiAgYGRhcmtibHVlYCxcbiAgYGRhcmtjeWFuYCxcbiAgYGRhcmtnb2xkZW5yb2RgLFxuICBgZGFya2dyYXlgLFxuICBgZGFya2dyZXlgLFxuICBgZGFya2dyZWVuYCxcbiAgYGRhcmtraGFraWAsXG4gIGBkYXJrbWFnZW50YWAsXG4gIGBkYXJrb2xpdmVncmVlbmAsXG4gIGBkYXJrb3JhbmdlYCxcbiAgYGRhcmtvcmNoaWRgLFxuICBgZGFya3JlZGAsXG4gIGBkYXJrc2FsbW9uYCxcbiAgYGRhcmtzZWFncmVlbmAsXG4gIGBkYXJrc2xhdGVibHVlYCxcbiAgYGRhcmtzbGF0ZWdyYXlgLFxuICBgZGFya3NsYXRlZ3JleWAsXG4gIGBkYXJrdHVycXVvaXNlYCxcbiAgYGRhcmt2aW9sZXRgLFxuICBgZGVlcHBpbmtgLFxuICBgZGVlcHNreWJsdWVgLFxuICBgZGltZ3JheWAsXG4gIGBkaW1ncmV5YCxcbiAgYGRvZGdlcmJsdWVgLFxuICBgZmlyZWJyaWNrYCxcbiAgYGZsb3JhbHdoaXRlYCxcbiAgYGZvcmVzdGdyZWVuYCxcbiAgYGZ1Y2hzaWFgLFxuICBgZ2FpbnNib3JvYCxcbiAgYGdob3N0d2hpdGVgLFxuICBgZ29sZGAsXG4gIGBnb2xkZW5yb2RgLFxuICBgZ3JheWAsXG4gIGBncmV5YCxcbiAgYGdyZWVuYCxcbiAgYGdyZWVueWVsbG93YCxcbiAgYGhvbmV5ZGV3YCxcbiAgYGhvdHBpbmtgLFxuICBgaW5kaWFucmVkYCxcbiAgYGluZGlnb2AsXG4gIGBpdm9yeWAsXG4gIGBraGFraWAsXG4gIGBsYXZlbmRlcmAsXG4gIGBsYXZlbmRlcmJsdXNoYCxcbiAgYGxhd25ncmVlbmAsXG4gIGBsZW1vbmNoaWZmb25gLFxuICBgbGlnaHRibHVlYCxcbiAgYGxpZ2h0Y29yYWxgLFxuICBgbGlnaHRjeWFuYCxcbiAgYGxpZ2h0Z29sZGVucm9keWVsbG93YCxcbiAgYGxpZ2h0Z3JheWAsXG4gIGBsaWdodGdyZXlgLFxuICBgbGlnaHRncmVlbmAsXG4gIGBsaWdodHBpbmtgLFxuICBgbGlnaHRzYWxtb25gLFxuICBgbGlnaHRzZWFncmVlbmAsXG4gIGBsaWdodHNreWJsdWVgLFxuICBgbGlnaHRzbGF0ZWdyYXlgLFxuICBgbGlnaHRzbGF0ZWdyZXlgLFxuICBgbGlnaHRzdGVlbGJsdWVgLFxuICBgbGlnaHR5ZWxsb3dgLFxuICBgbGltZWAsXG4gIGBsaW1lZ3JlZW5gLFxuICBgbGluZW5gLFxuICBgbWFnZW50YWAsXG4gIGBtYXJvb25gLFxuICBgbWVkaXVtYXF1YW1hcmluZWAsXG4gIGBtZWRpdW1ibHVlYCxcbiAgYG1lZGl1bW9yY2hpZGAsXG4gIGBtZWRpdW1wdXJwbGVgLFxuICBgbWVkaXVtc2VhZ3JlZW5gLFxuICBgbWVkaXVtc2xhdGVibHVlYCxcbiAgYG1lZGl1bXNwcmluZ2dyZWVuYCxcbiAgYG1lZGl1bXR1cnF1b2lzZWAsXG4gIGBtZWRpdW12aW9sZXRyZWRgLFxuICBgbWlkbmlnaHRibHVlYCxcbiAgYG1pbnRjcmVhbWAsXG4gIGBtaXN0eXJvc2VgLFxuICBgbW9jY2FzaW5gLFxuICBgbmF2YWpvd2hpdGVgLFxuICBgbmF2eWAsXG4gIGBvbGRsYWNlYCxcbiAgYG9saXZlYCxcbiAgYG9saXZlZHJhYmAsXG4gIGBvcmFuZ2VgLFxuICBgb3JhbmdlcmVkYCxcbiAgYG9yY2hpZGAsXG4gIGBwYWxlZ29sZGVucm9kYCxcbiAgYHBhbGVncmVlbmAsXG4gIGBwYWxldHVycXVvaXNlYCxcbiAgYHBhbGV2aW9sZXRyZWRgLFxuICBgcGFwYXlhd2hpcGAsXG4gIGBwZWFjaHB1ZmZgLFxuICBgcGVydWAsXG4gIGBwaW5rYCxcbiAgYHBsdW1gLFxuICBgcG93ZGVyYmx1ZWAsXG4gIGBwdXJwbGVgLFxuICBgcmVkYCxcbiAgYHJvc3licm93bmAsXG4gIGByb3lhbGJsdWVgLFxuICBgc2FkZGxlYnJvd25gLFxuICBgc2FsbW9uYCxcbiAgYHNhbmR5YnJvd25gLFxuICBgc2VhZ3JlZW5gLFxuICBgc2Vhc2hlbGxgLFxuICBgc2llbm5hYCxcbiAgYHNpbHZlcmAsXG4gIGBza3libHVlYCxcbiAgYHNsYXRlYmx1ZWAsXG4gIGBzbGF0ZWdyYXlgLFxuICBgc2xhdGVncmV5YCxcbiAgYHNub3dgLFxuICBgc3ByaW5nZ3JlZW5gLFxuICBgc3RlZWxibHVlYCxcbiAgYHRhbmAsXG4gIGB0ZWFsYCxcbiAgYHRoaXN0bGVgLFxuICBgdG9tYXRvYCxcbiAgYHR1cnF1b2lzZWAsXG4gIGB2aW9sZXRgLFxuICBgd2hlYXRgLFxuICBgd2hpdGVgLFxuICBgd2hpdGVzbW9rZWAsXG4gIGB5ZWxsb3dgLFxuICBgeWVsbG93Z3JlZW5gLFxuXTtcbiIsImltcG9ydCB7IFNIQVBFU19DT0xPUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmNvbnN0IHNpemVzID0ge1xuICB4eHNtYWxsOiAyNSxcbiAgeHNtYWxsOiA1MCxcbiAgc21hbGw6IDEwMCxcbiAgbWVkaXVtOiAzMDAsXG4gIGxhcmdlOiA0MDAsXG4gIHhsYXJnZTogNTAwLFxuICB4eGxhcmdlOiA2MDAsXG59O1xuY29uc3QgQk9SREVSX1NJWkVTID0ge1xuICBub25lOiAwLFxuICB4eHNtYWxsOiAxLFxuICB4c21hbGw6IDEuNSxcbiAgc21hbGw6IDIsXG4gIG1lZGl1bTogMi41LFxuICBsYXJnZTogMyxcbiAgeGxhcmdlOiAzLjUsXG4gIHh4bGFyZ2U6IDQsXG59O1xuXG5jb25zdCBCT1JERVJfTElORVMgPSB7XG4gIHNvbGlkOiBcInNvbGlkXCIsXG4gIGRvdHRlZDogXCJkb3R0ZWRcIixcbiAgZGFzaGVkOiBcImRhc2hlZFwiLFxuICBncm9vdmU6IFwiZ3Jvb3ZlXCIsXG4gIHJpZGdlOiBcInJpZGdlXCIsXG4gIGluc2V0OiBcImluc2V0XCIsXG4gIGRvdWJsZTogXCJkb3VibGVcIixcbiAgaGlkZGVuOiBcImhpZGRlblwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7XG4gIHdpZHRoOiB7XG4gICAgbnVtZXJpYzogMTAwLFxuICAgIHN0cmluZzogc2l6ZXMsXG4gIH0sXG4gIGhlaWdodDoge1xuICAgIG51bWVyaWM6IDEwMCxcbiAgICBzdHJpbmc6IHNpemVzLFxuICB9LFxuICBiYWNrZ3JvdW5kOiBTSEFQRVNfQ09MT1IsXG4gIGJvcmRlcjogeyB3aWR0aDogQk9SREVSX1NJWkVTLCBjb2xvcjogU0hBUEVTX0NPTE9SLCBsaW5lczogQk9SREVSX0xJTkVTIH0sXG59O1xuIiwiZXhwb3J0IGNvbnN0IGV4dHJhY3RQcm9wZXJ0eSA9IChwcm9wZXJ0eUtleSwgcHJvcGVydHlTb3VyY2UpID0+IHtcbiAgcmV0dXJuIHByb3BlcnR5U291cmNlW3Byb3BlcnR5S2V5XSA/IHByb3BlcnR5U291cmNlW3Byb3BlcnR5S2V5XSA6IGZhbHNlO1xufTtcbiIsImltcG9ydCAqIGFzIEVST1JSX01FU1NBR0VTIGZyb20gXCIuLi9lcnJvcl9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgZGVmYXVsdFZhbHVlcyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0VmFsdWUgPSAocHJvS2V5LCBpc051bWVyaWMgPSBmYWxzZSwgdGV4dCA9IFwiXCIpID0+IHtcbiAgY29uc29sZS5sb2coXCJnZXREZWZhdWx0VmFsdWU7OztcIiwgcHJvS2V5LCBpc051bWVyaWMsIHRleHQpO1xuICBpZiAoZGVmYXVsdFZhbHVlc1twcm9LZXldKSB7XG4gICAgaWYgKGlzTnVtZXJpYykgcmV0dXJuIGRlZmF1bHRWYWx1ZXNbcHJvS2V5XVtcIm51bWVyaWNcIl07XG4gICAgaWYgKCF0ZXh0KSByZXR1cm4gZGVmYXVsdFZhbHVlc1twcm9LZXldO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJWYWx1ZSB0byBiZSByZXR1cm5lZCBzdHJpbmc7OztcIixcbiAgICAgIGRlZmF1bHRWYWx1ZXNbcHJvS2V5XVtcInN0cmluZ1wiXVt0ZXh0XVxuICAgICk7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZXNbcHJvS2V5XVtcInN0cmluZ1wiXVt0ZXh0XTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoRVJPUlJfTUVTU0FHRVMucHJvcGVydHlfaXNfbm90X3N1cHBvcnRlZCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VmVuZG9yVGhlbWVQcm9wcyA9ICh0aGVtZVByb3BzLCBwcm9wKTogYW55ID0+IHtcbiAgcmV0dXJuIHRoZW1lUHJvcHM/LnRoZW1lPy5nbG9iYWxbcHJvcF1cbiAgICA/IHRoZW1lUHJvcHM/LnRoZW1lPy5nbG9iYWxbcHJvcF1cbiAgICA6IG51bGw7XG59O1xuIiwiY29uc3Qgc2hhcGVDbGlwcyA9IHtcbiAgdHJpYW5nbGU6IGBwb2x5Z29uKDUwJSAwJSwgMCUgMTAwJSwgMTAwJSAxMDAlKWAsXG4gIHRyYXBlem9pZDogYHBvbHlnb24oMjAlIDAlLCA4MCUgMCUsIDEwMCUgMTAwJSwgMCUgMTAwJSk7YCxcbiAgcGFyYWxsZWxvZ3JhbTogYHBvbHlnb24oMjUlIDAlLCAxMDAlIDAlLCA3NSUgMTAwJSwgMCUgMTAwJSk7YCxcbiAgcmhvbWJ1czogYHBvbHlnb24oNTAlIDAlLCAxMDAlIDUwJSwgNTAlIDEwMCUsIDAlIDUwJSk7YCxcbiAgcGVudGFnb246IGBwb2x5Z29uKDUwJSAwJSwgMTAwJSAzOCUsIDgyJSAxMDAlLCAxOCUgMTAwJSwgMCUgMzglKWAsXG4gIGhleGFnb246IGBwb2x5Z29uKDI1JSAwJSwgNzUlIDAlLCAxMDAlIDUwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwJSA1MCUpYCxcbiAgaGVwdGFnb246IGBwb2x5Z29uKDUwJSAwJSwgOTAlIDIwJSwgMTAwJSA2MCUsIDc1JSAxMDAlLCAyNSUgMTAwJSwgMCUgNjAlLCAxMCUgMjAlKWAsXG4gIG9jdGFnb246IGBwb2x5Z29uKDMwJSAwJSwgNzAlIDAlLCAxMDAlIDMwJSwgMTAwJSA3MCUsIDcwJSAxMDAlLCAzMCUgMTAwJSwgMCUgNzAlLCAwJSAzMCUpO2AsXG4gIG5vbmFnb246IGBwb2x5Z29uKDUwJSAwJSwgODMlIDEyJSwgMTAwJSA0MyUsIDk0JSA3OCUsIDY4JSAxMDAlLCAzMiUgMTAwJSwgNiUgNzglLCAwJSA0MyUsIDE3JSAxMiUpO2AsXG4gIGRlY2Fnb246IGBwb2x5Z29uKDUwJSAwJSwgODAlIDEwJSwgMTAwJSAzNSUsIDEwMCUgNzAlLCA4MCUgOTAlLCA1MCUgMTAwJSwgMjAlIDkwJSwgMCUgNzAlLCAwJSAzNSUsIDIwJSAxMCUpO2AsXG4gIGJldmVsOiBgcG9seWdvbigyMCUgMCUsIDgwJSAwJSwgMTAwJSAyMCUsIDEwMCUgODAlLCA4MCUgMTAwJSwgMjAlIDEwMCUsIDAlIDgwJSwgMCUgMjAlKTtgLFxuICByYWJiZXQ6IGBwb2x5Z29uKDAlIDE1JSwgMTUlIDE1JSwgMTUlIDAlLCA4NSUgMCUsIDg1JSAxNSUsIDEwMCUgMTUlLCAxMDAlIDg1JSwgODUlIDg1JSwgODUlIDEwMCUsIDE1JSAxMDAlLCAxNSUgODUlLCAwJSA4NSUpO2AsXG4gIGNpcmNsZTogYGNpcmNsZSg1MCUgYXQgNTAlIDUwJSk7YCxcbiAgZWxsaXBzZTogYGVsbGlwc2UoMjUlIDQwJSBhdCA1MCUgNTAlKTtgLFxuICBzdGFyOiBgcG9seWdvbig1MCUgMCUsIDYxJSAzNSUsIDk4JSAzNSUsIDY4JSA1NyUsIDc5JSA5MSUsIDUwJSA3MCUsIDIxJSA5MSUsIDMyJSA1NyUsIDIlIDM1JSwgMzklIDM1JSlgLFxuICBxdWE6IGBjaXJjbGUoODBweCBhdCB0b3AgcmlnaHQpO2AsXG59O1xuXG5leHBvcnQgeyBzaGFwZUNsaXBzIH07XG4iLCJpbXBvcnQgeyBnZXREZWZhdWx0VmFsdWUgfSBmcm9tIFwiLi9nZXR0ZXJzXCI7XG5pbXBvcnQgeyBzaGFwZUNsaXBzIH0gZnJvbSBcIi4vc2hhcGVfY2xpcHNcIjtcbmltcG9ydCB7IERvV2lkdGhIZWlnaHRUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmNvbnN0IEJPUkRFUl9SQURJVVM6IHN0cmluZyA9IFwiNTAlXCI7XG5leHBvcnQgY29uc3Qgc3F1YXJlV2lkdGhIZWlnaHQgPSAod2lkdGgsIGhlaWdodCwgc2hhcGUpOiBEb1dpZHRoSGVpZ2h0VHlwZSA9PiB7XG4gIGlmICghd2lkdGggJiYgIWhlaWdodClcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGdldERlZmF1bHRWYWx1ZShcIndpZHRoXCIsIHRydWUpLFxuICAgICAgaGVpZ2h0OiBnZXREZWZhdWx0VmFsdWUoXCJoZWlnaHRcIiwgdHJ1ZSksXG4gICAgfTtcbiAgaWYgKCF3aWR0aCkgcmV0dXJuIHsgd2lkdGg6IGhlaWdodCwgaGVpZ2h0IH07XG4gIGlmICghaGVpZ2h0KSByZXR1cm4geyB3aWR0aCwgaGVpZ2h0OiB3aWR0aCB9O1xuICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG59O1xuXG5leHBvcnQgY29uc3QgY2lyY2xlV2lkdGhIZWlnaHQgPSAod2lkdGgsIGhlaWdodCwgc2hhcGUpOiBEb1dpZHRoSGVpZ2h0VHlwZSA9PiB7XG4gIGxldCBib3JkZXJSYWRpdXMgPSBCT1JERVJfUkFESVVTO1xuICBpZiAoIXdpZHRoICYmICFoZWlnaHQpXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBnZXREZWZhdWx0VmFsdWUoXCJ3aWR0aFwiLCB0cnVlKSxcbiAgICAgIGhlaWdodDogZ2V0RGVmYXVsdFZhbHVlKFwiaGVpZ2h0XCIsIHRydWUpLFxuICAgICAgYm9yZGVyUmFkaXVzLFxuICAgIH07XG4gIGlmICghd2lkdGgpIHJldHVybiB7IHdpZHRoOiBoZWlnaHQsIGhlaWdodCwgYm9yZGVyUmFkaXVzIH07XG4gIGlmICghaGVpZ2h0KSByZXR1cm4geyB3aWR0aCwgaGVpZ2h0OiB3aWR0aCwgYm9yZGVyUmFkaXVzIH07XG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQsIGJvcmRlclJhZGl1cyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlY3RhbmdsZVdpZHRoSGVpZ2h0ID0gKFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBzaGFwZVxuKTogRG9XaWR0aEhlaWdodFR5cGUgPT4ge1xuICBpZiAoIXdpZHRoICYmICFoZWlnaHQpXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBnZXREZWZhdWx0VmFsdWUoXCJ3aWR0aFwiLCB0cnVlKSxcbiAgICAgIGhlaWdodDogZ2V0RGVmYXVsdFZhbHVlKFwid2lkdGhcIiwgdHJ1ZSkgLyAyLFxuICAgIH07XG4gIGlmICghd2lkdGgpIHJldHVybiB7IHdpZHRoOiBoZWlnaHQsIGhlaWdodDogaGVpZ2h0IC8gMiB9O1xuICBpZiAoIWhlaWdodCkgcmV0dXJuIHsgd2lkdGgsIGhlaWdodDogd2lkdGggLyAyIH07XG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCAvIDIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBvdmFsV2lkdGhIZWlnaHQgPSAod2lkdGgsIGhlaWdodCwgc2hhcGUpOiBEb1dpZHRoSGVpZ2h0VHlwZSA9PiB7XG4gIGlmICghd2lkdGggJiYgIWhlaWdodCkge1xuICAgIGxldCB3aWR0aCA9IGdldERlZmF1bHRWYWx1ZShcIndpZHRoXCIsIHRydWUpO1xuICAgIGxldCBoZWlnaHQgPSB3aWR0aCAvIDI7XG4gICAgLy8gbGV0IHJhZGl1c0Rpdmlzb3IgPSBoZWlnaHQgLyAyICsgXCJweFwiO1xuICAgIGxldCBib3JkZXJSYWRpdXMgPSBCT1JERVJfUkFESVVTO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGJvcmRlclJhZGl1cyxcbiAgICB9O1xuICB9XG4gIGlmICghd2lkdGgpIHJldHVybiB7IHdpZHRoOiBoZWlnaHQsIGhlaWdodDogaGVpZ2h0IC8gMiB9O1xuICBpZiAoIWhlaWdodCkgcmV0dXJuIHsgd2lkdGgsIGhlaWdodDogd2lkdGggLyAyIH07XG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCAvIDIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGlwUGF0aFdpZHRoSGVpZ2h0ID0gKFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBzaGFwZVxuKTogRG9XaWR0aEhlaWdodFR5cGUgPT4ge1xuICBpZiAoIXdpZHRoICYmICFoZWlnaHQpXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBnZXREZWZhdWx0VmFsdWUoXCJ3aWR0aFwiLCB0cnVlKSxcbiAgICAgIGhlaWdodDogZ2V0RGVmYXVsdFZhbHVlKFwiaGVpZ2h0XCIsIHRydWUpLFxuICAgIH07XG4gIGlmICghd2lkdGgpIHJldHVybiB7IHdpZHRoOiBoZWlnaHQsIGhlaWdodCB9O1xuICBpZiAoIWhlaWdodCkgcmV0dXJuIHsgd2lkdGgsIGhlaWdodDogd2lkdGggfTtcbiAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGRvQ2xpcHBlZFNoYXBlcyA9IChwcm9wcywgc2hhcGUsIHRoZW1lTW9kZSkgPT4ge1xuICBpZiAoIXNoYXBlQ2xpcHNbc2hhcGVdKSByZXR1cm4ge307XG4gIGxldCBmbGV4TGF5b3V0ID0gZG9DbGlwcGVkU2hhcGVzQ29udGVudFBvc2l0aW9uaW5nKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBjbGlwUGF0aDogc2hhcGVDbGlwc1tzaGFwZV0sXG4gICAgLi4uZmxleExheW91dCxcbiAgfTtcbn07XG5cbmNvbnN0IGRvQ2xpcHBlZFNoYXBlc0NvbnRlbnRQb3NpdGlvbmluZyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9ICh0ZXh0LCBzaG91bGRMb3dlckNhc2UgPSBmYWxzZSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlRoZSB0ZXh0IFVwcGVyY2FzaW5nOzs7XCIsIHRleHQpO1xuICBsZXQgY2FzZWRTdHJpbmcgPSBzaG91bGRMb3dlckNhc2UgPyB0ZXh0LnRvTG93ZXJDYXNlKCkgOiB0ZXh0O1xuICByZXR1cm4gYCR7Y2FzZWRTdHJpbmcuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKX0ke2Nhc2VkU3RyaW5nLnNsaWNlKDEpfWA7XG59O1xuIiwiaW1wb3J0IHsgY2hlY2tQcm9wZXJ0eVZhbHVlIH0gZnJvbSBcIi4vY2hlY2tlcnNcIjtcbmltcG9ydCB7IGV4dHJhY3RQcm9wZXJ0eSB9IGZyb20gXCIuL2Vrc3RyYWN0b3JzXCI7XG5pbXBvcnQge1xuICBjaXJjbGVXaWR0aEhlaWdodCxcbiAgY2xpcFBhdGhXaWR0aEhlaWdodCxcbiAgb3ZhbFdpZHRoSGVpZ2h0LFxuICByZWN0YW5nbGVXaWR0aEhlaWdodCxcbiAgc3F1YXJlV2lkdGhIZWlnaHQsXG59IGZyb20gXCIuL3NoYXBlc1wiO1xuaW1wb3J0IHsgRG9XaWR0aEhlaWdodFR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0IGNvbnN0IGRvV2lkdGhIZWlnaHQgPSAoXG4gIHByb3BzOiBvYmplY3QsXG4gIHNoYXBlOiBzdHJpbmcsXG4gIHNpemU6IHN0cmluZyB8IG51bWJlclxuKTogRG9XaWR0aEhlaWdodFR5cGUgPT4ge1xuICBzaXplID8gKHByb3BzW1wid2lkdGhcIl0gPSBzaXplKSA6IG51bGw7XG4gIGxldCB3aWR0aCA9IGNoZWNrUHJvcGVydHlWYWx1ZShcIndpZHRoXCIsIGV4dHJhY3RQcm9wZXJ0eShcIndpZHRoXCIsIHByb3BzKSk7XG4gIGxldCBoZWlnaHQgPSBjaGVja1Byb3BlcnR5VmFsdWUoXCJoZWlnaHRcIiwgZXh0cmFjdFByb3BlcnR5KFwiaGVpZ2h0XCIsIHByb3BzKSk7XG4gIGNvbnNvbGUubG9nKFwiZG9XaWR0aEFuZEhlaWdodDs7O1wiLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY29uc29sZS5sb2coXCJUaGUgU0hBUEVcIiwgc2hhcGUpO1xuICBzd2l0Y2ggKHNoYXBlKSB7XG4gICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgY29uc29sZS5sb2coXCJjYXNlIGlzIFNRVUFSRVwiKTtcbiAgICAgIHJldHVybiBzcXVhcmVXaWR0aEhlaWdodCh3aWR0aCwgaGVpZ2h0LCBzaGFwZSk7XG4gICAgY2FzZSBcImNpcmNsZVwiOlxuICAgICAgcmV0dXJuIGNpcmNsZVdpZHRoSGVpZ2h0KHdpZHRoLCBoZWlnaHQsIHNoYXBlKTtcbiAgICBjYXNlIFwicmVjdGFuZ2xlXCI6XG4gICAgICByZXR1cm4gcmVjdGFuZ2xlV2lkdGhIZWlnaHQod2lkdGgsIGhlaWdodCwgc2hhcGUpO1xuXG4gICAgY2FzZSBcIm92YWxcIjpcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FzZSBpcyBSZWN0YW5nbGU7OztcIiwgd2lkdGgsIGhlaWdodCwgc2hhcGUpO1xuICAgICAgbGV0IHJlY3RXaWR0aCA9IG92YWxXaWR0aEhlaWdodCh3aWR0aCwgaGVpZ2h0LCBzaGFwZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlRIRSBSRUNUV0lEVEg7OztcIiwgcmVjdFdpZHRoKTtcbiAgICAgIHJldHVybiByZWN0V2lkdGg7XG4gICAgY2FzZSBcImNsaXAtcGF0aFwiOlxuICAgICAgcmV0dXJuIGNsaXBQYXRoV2lkdGhIZWlnaHQod2lkdGgsIGhlaWdodCwgc2hhcGUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgSGVhZGluZyBhcyBHaGVhZGluZyB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRIZWFkaW5nID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtTGEyZTBDV0JcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IEhlYWRpbmc6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRIZWFkaW5nIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdoZWFkaW5nIHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRIZWFkaW5nPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCBIZWFkaW5nIGZyb20gXCIuL0hlYWRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCB7IFBhcmFncmFwaCBhcyBHcGFyYWdhcGggfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkVGV4dCA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LVNfcGpUUVZhXCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBQYXJhZ3JhcGg6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRUZXh0IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdwYXJhZ2FwaCB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkVGV4dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcbiIsImltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vUGFyYWdyYXBoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcbiIsImltcG9ydCB7IFRhZyB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFRhZyA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LXRZaXJWcm0wXCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBUQUc6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICB2YWx1ZSxcbiAgY2hpbGRyZW4sXG4gIGNvbG9yLCAvLyAxLiBQdWxsIGNvbG9yIG91dCBoZXJlIHNvIGl0IGlzbid0IGluY2x1ZGVkIGluIC4uLnByb3BzXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIC8vIDIuIFJlc29sdmUgdGhlIGNvbG9yIHNhZmVseSBpZiBpdCdzIGFuIG9iamVjdCwgb3IgZmFsbCBiYWNrIHRvIGEgZGVmYXVsdCBzdHJpbmcgaWYgR3JvbW1ldCByZXF1aXJlcyBpdFxuICBjb25zdCByZXNvbHZlZENvbG9yID0gdHlwZW9mIGNvbG9yID09PSBcIm9iamVjdFwiID8gY29sb3IubGlnaHQgOiBjb2xvcjtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkVGFnIHZhbHVlPXt2YWx1ZX0gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0gY29sb3I9e2NvbG9yfT5cbiAgICAgIHsvKiAzLiBQYXNzIHRoZSBzYWZlbHkgcmVzb2x2ZWQgY29sb3Igc3RyaW5nIHRvIEdyb21tZXQncyBUYWcgKi99XG4gICAgICA8VGFnIHZhbHVlPXt2YWx1ZX0gY29sb3I9e3Jlc29sdmVkQ29sb3IgYXMgYW55fSB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkVGFnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVEFHO1xuIiwiaW1wb3J0IFRhZyBmcm9tIFwiLi9UYWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgVGFnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdGV4dERlZmF1bHRzIGZyb20gXCIuL3RleHREZWZhdWx0c1wiO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gMS4gUGFzcyA8YW55PiBoZXJlIHRvIHRlbGwga290aWktc3R5bGVkIHRoYXQgdGhpcyBjb21wb25lbnQgYWNjZXB0cyBhbnkgY3VzdG9tIHByb3BzIGNvbmZpZ3VyYXRpb25cbmNvbnN0IFRleHQgPSBzdHlsZWQoXCJzcGFuXCIpLndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC1wckdKbjEzbFwiIH0pPGFueT4oKHByb3BzOiBhbnkpID0+ICh7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgZm9udFNpemU6IHByb3BzPy5zaXplID8gcHJvcHMuc2l6ZSA6IHRleHREZWZhdWx0cy5zaXplLFxuICBhMTF5VGl0bGU6IHRleHREZWZhdWx0cy5hbGx5VGl0bGUsXG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gIGNvbG9yOiBgJHtwcm9wcz8uY29sb3IgPyBwcm9wcy5jb2xvciA6IHRleHREZWZhdWx0cy5jb2xvcn1gLFxufSkpO1xuXG4vLyAyLiBLZWVwIHlvdXIgcmlnaWQgYXBwbGljYXRpb24gdHlwZXMgZW5mb3JjZWQgc2FmZWx5IG9uIHRoZSB3cmFwcGVyIGNvbXBvbmVudFxuY29uc3QgQ3VzdG9tVGV4dDogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiA8VGV4dCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1RleHQ+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tVGV4dDtcbiIsImltcG9ydCBDdXN0b21UZXh0IGZyb20gXCIuL0N1c3RvbVRleHRcIjtcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVRleHQ7XG4iLCJjb25zdCBzaXplcyA9IHtcbiAgeHhzbWFsbDogXCI4cHhcIixcbiAgeHNtYWxsOiBcIjExcHhcIixcbiAgc21hbGw6IFwiMTRweFwiLFxuICBtZWRpdW06IFwiMTdcIixcbiAgbGFyZ2U6IFwiMTlweFwiLFxufTtcblxuY29uc3QgY29sb3IgPSBcImluaGVyaXRcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2l6ZTogc2l6ZXMuc21hbGwsXG4gIGNvbG9yOiBjb2xvcixcbiAgYWxseVRpdGxlOiBcInBhZ2UgdGV4dFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG59O1xuIiwiLy8gaW1wb3J0IHsgVGV4dCBhcyBHdGV4dCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbmltcG9ydCBDdXN0b21UZXh0IGZyb20gXCIuL0N1c3RvbVRleHRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRUZXh0ID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtQ25hcDQxamhcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFRleHQ6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFRleHQgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8Q3VzdG9tVGV4dCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0N1c3RvbVRleHQ+XG4gICAgPC9XcmFwcGVkVGV4dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgSGVhZGluZyBmcm9tIFwiLi9IZWFkaW5nXCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL1BhcmFncmFwaFwiO1xuaW1wb3J0IFRhZyBmcm9tIFwiLi9UYWdcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuL1RleHRcIjtcbmV4cG9ydCB7IEhlYWRpbmcsIFRhZywgVGV4dCwgUGFyYWdyYXBoIH07XG4iLCJpbXBvcnQgeyBDb2xsYXBzaWJsZSBhcyBHY29sbGFwc2libGUgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkQ29sbGFwc2libGUgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBjb21wb25lbnRJZDogXCJrdC0wdW53NzhSS1wiIH0pPFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgQ29sbGFwc2libGU6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZENvbGxhcHNpYmxlIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdjb2xsYXBzaWJsZSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0djb2xsYXBzaWJsZT5cbiAgICA8L1dyYXBwZWRDb2xsYXBzaWJsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNpYmxlO1xuIiwiaW1wb3J0IENvbGxhcHNpYmxlIGZyb20gXCIuL0NvbGxhcHNpYmxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNpYmxlO1xuIiwiaW1wb3J0IHsgSW5maW5pdGVTY3JvbGwgYXMgR2luZml0ZVNjcm9sbCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRJbmZpbml0ZVNjcm9sbCA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IGNvbXBvbmVudElkOiBcImt0LWM0dVc2eEJ1XCIgfSk8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBJbmZpbml0ZVNjcm9sbDogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkSW5maW5pdGVTY3JvbGwgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2luZml0ZVNjcm9sbCB7Li4ucHJvcHN9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz5cbiAgICA8L1dyYXBwZWRJbmZpbml0ZVNjcm9sbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZmluaXRlU2Nyb2xsO1xuIiwiaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCIuL0luZmluaXRlU2Nyb2xsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEluZmluaXRlU2Nyb2xsO1xuIiwiaW1wb3J0IHsgS2V5Ym9hcmQgYXMgR2tleWJvYXJkIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZEtleWJvYXJkID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtV3NkcUtfRnBcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IEtleWJvYXJkOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRLZXlib2FyZCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHa2V5Ym9hcmQgey4uLnByb3BzfT57Y2hpbGRyZW59PC9Ha2V5Ym9hcmQ+XG4gICAgPC9XcmFwcGVkS2V5Ym9hcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZDtcbiIsImltcG9ydCBLZXlib2FyZCBmcm9tIFwiLi9LZXlib2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZE1hcmtkb3duID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtcnNQWUhaTjhcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IE1hcmtkb3duOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gPFdyYXBwZWRNYXJrZG93biBkYXRhLXRlc3RpZD17dGVzdElEfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duO1xuIiwiaW1wb3J0IHsgU2tpcExpbmsgYXMgR3NraXBMaW5rIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFNraXBMaW5rID0gc3R5bGVkLmRpdi53aXRoQ29uZmlnKHsgY29tcG9uZW50SWQ6IFwia3QtTEc3alcwd2RcIiB9KTxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFNraXBMaW5rOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgaWQsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFNraXBMaW5rIGlkPXtpZH0gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R3NraXBMaW5rIGlkPXtpZH0gey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZFNraXBMaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpcExpbms7XG4iLCJpbXBvcnQgU2tpcExpbmsgZnJvbSBcIi4vU2tpcExpbmtcIjtcbmV4cG9ydCBkZWZhdWx0IFNraXBMaW5rO1xuIiwiaW1wb3J0IENvbGxhcHNpYmxlIGZyb20gXCIuL0NvbGxhcHNpYmxlXCI7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4vSW5maW5pdGVTY3JvbGxcIjtcbmltcG9ydCBLZXlib2FyZCBmcm9tIFwiLi9LZXlib2FyZFwiO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gXCIuL01hcmtkb3duL01hcmtkb3duXCI7XG5pbXBvcnQgU2tpcExpbmsgZnJvbSBcIi4vU2tpcExpbmtcIjtcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gXCIuL1RoZW1lU3dpdGNoZXIvc3dpdGNoZXJcIjtcblxuZXhwb3J0IHtcbiAgVGhlbWVTd2l0Y2hlcixcbiAgTWFya2Rvd24sXG4gIENvbGxhcHNpYmxlLFxuICBLZXlib2FyZCxcbiAgU2tpcExpbmssXG4gIEluZmluaXRlU2Nyb2xsLFxufTtcbiIsImltcG9ydCB7XG4gIEN1c3RvbVRoZW1lUHJvdmlkZXIgYXMgVGhlbWVQcm92aWRlcixcbiAgdXNlVGhlbWVDb250ZXh0LFxufSBmcm9tIFwiLi90aGVtZS1wcm92aWRlclwiO1xuXG5leHBvcnQge1xuICBUaGVtZVByb3ZpZGVyIGFzIEtvdGlpVGhlbWVQcm92aWRlcixcbiAgdXNlVGhlbWVDb250ZXh0IGFzIHVzZUtvdGlpVGhlbWUsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGxvZ1N0b3JlZFRoZW1lc1N0YXR1cyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIi4uL2hvb2tzXCI7XG4vLyBpbXBvcnQgeyBEZW1vU2VjdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RoZW1lU3dpdGNoZXIvRGVtb1NlY3Rpb25cIjtcbi8vIGltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwia290aWktc3R5bGVkXCJcblxuaW1wb3J0IHsgZGVmYXVsdFByb3BzIGFzIGdyb21tZXRUaGVtZSwgR3JvbW1ldCB9IGZyb20gXCJncm9tbWV0XCI7XG50eXBlIFRoZW1lTW9kZVByb3BzID0gXCJkYXJrXCIgfCBcImxpZ2h0XCI7XG50eXBlIFRoZW1lUHJvcHMgPSB7XG4gIHRoZW1lOiBPYmplY3Q7XG4gIHRoZW1lTmFtZTogc3RyaW5nO1xuICB0aGVtZXM6IFtdO1xuICBpc1RoZW1lTG9hZGVkOiBib29sZWFuO1xuICBjaGFuZ2VUaGVtZTogKGN1cnJlbnRUaGVtZTogYW55KSA9PiB2b2lkO1xuICBjaGFuZ2VUaGVtZU1vZGU6ICguLi5hcmc6IGFueSkgPT4gdm9pZDtcbiAgZ3JvbW1ldFRoZW1lOiBPYmplY3Q7XG4gIHRoZW1lTW9kZTogVGhlbWVNb2RlUHJvcHM7XG59O1xuXG4vLyBDcmVhdGUgVGhlbWVDb250ZW50XG5jb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFRoZW1lUHJvcHM+KHt9IGFzIFRoZW1lUHJvcHMpO1xuXG4vLyBjb25zdCBteUdyb21tZXRUaGVtZSA9IHtcbi8vICAgZ2xvYmFsOiB7XG4vLyAgICAgZm9udDoge1xuLy8gICAgICAgZmFtaWx5OiBcIlJvYm90b1wiLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyB9O1xuXG5leHBvcnQgY29uc3QgQ3VzdG9tVGhlbWVQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRoZW1lcywgaXNUaGVtZUxvYWRlZCB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW3RoZW1lTW9kZSwgc2V0VGhlbWVNb2RlXSA9IFJlYWN0LnVzZVN0YXRlPFRoZW1lTW9kZVByb3BzPihcImRhcmtcIik7XG4gIGNvbnN0IFt0aGVtZU5hbWUsIHNldFRoZW1lTmFtZV0gPSB1c2VTdGF0ZTxUaGVtZU1vZGVQcm9wcz4oXCJkYXJrXCIpO1xuICBjb25zdCBbY3VycmVudFRoZW1lLCBzZXRDdXJyZW50VGhlbWVdID0gdXNlU3RhdGUoZGlyZWN0VGhlbWVzW3RoZW1lTmFtZV0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudFRoZW1lOzs7XCIsIHRoZW1lKTtcbiAgLy8gY29uc29sZS5sb2coXCJDdXJyZW50VGhlbWVzXCIsIHRoZW1lcyk7XG4gIC8vIGNvbnNvbGUubG9nKGlzVGhlbWVMb2FkZWQpO1xuICAvL2NvbnNvbGUubG9nKHByb3BzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2dTdG9yZWRUaGVtZXNTdGF0dXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoYW5nZVRoZW1lTW9kZSA9ICh0aGVtZU1vZGUpID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKFwiQ1VSUkVOVCBUSEVNTU9ERVwiLCBKU09OLnN0cmluZ2lmeSh0aGVtZU1vZGUpKTtcbiAgICBpZiAodGhlbWVNb2RlID09PSBcImRhcmtcIikge1xuICAgICAgc2V0VGhlbWVNb2RlKFwibGlnaHRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRoZW1lTW9kZShcImRhcmtcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVRoZW1lID0gKG5hbWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIj4+PiBUSEUgVEhFTSBOQU1FXCIsIG5hbWUpO1xuICAgIHNldFRoZW1lTmFtZShuYW1lKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlRIRU1FIE5BTUUgQ0hBTkdFRDs7O1wiLCB0aGVtZU5hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGlyZWN0VGhlbWVzXCIsIGRpcmVjdFRoZW1lcyk7XG4gICAgLy8gY29uc29sZS5sb2coXCJkaXJlY3RUaGVtZXMgdGhlbWVcIiwgZGlyZWN0VGhlbWVzW3RoZW1lTmFtZV0pO1xuICAgIHNldEN1cnJlbnRUaGVtZShkaXJlY3RUaGVtZXNbdGhlbWVOYW1lXSk7XG4gIH0sIFt0aGVtZU5hbWVdKTtcbiAgLy8gY29uc29sZS5sb2coXCJUaGUgdGhlbWUgbmFtZVwiLCB0aGVtZU5hbWUpO1xuICAvLyBjb25zb2xlLmxvZyhcIlRoZSB0aGVtXCIsIGRpcmVjdFRoZW1lc1t0aGVtZU5hbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHRoZW1lOiBjdXJyZW50VGhlbWUsXG4gICAgICAgIHRoZW1lTmFtZTogdGhlbWVOYW1lLFxuICAgICAgICB0aGVtZXMsXG4gICAgICAgIGlzVGhlbWVMb2FkZWQsXG4gICAgICAgIGNoYW5nZVRoZW1lLFxuICAgICAgICBncm9tbWV0VGhlbWUsXG4gICAgICAgIGNoYW5nZVRoZW1lTW9kZSxcbiAgICAgICAgdGhlbWVNb2RlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8R3JvbW1ldCB0aGVtZT17Y3VycmVudFRoZW1lfSB0aGVtZU1vZGU9e3RoZW1lTW9kZX0+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvR3JvbW1ldD5cbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VUaGVtZUNvbnRleHQgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbmNvbnN0IGRpcmVjdFRoZW1lcyA9IHtcbiAgZGFyazoge1xuICAgIGdsb2JhbDoge1xuICAgICAgY29sb3JzOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICBkYXJrOiBcIiNFQUREQ0FcIixcbiAgICAgICAgICBsaWdodDogXCIjOTY0QjAwXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXBwLWJhY2tncm91bmRcIjoge1xuICAgICAgICAgIGRhcms6IFwiI0VBRERDQVwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiM5NjRCMDBcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmb250OiB7XG4gICAgICAgIGZhbWlseTogXCJSb2JvdG9cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBsaWdodDoge1xuICAgIGdsb2JhbDoge1xuICAgICAgY29sb3JzOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHsgZGFyazogXCIjZjVmMGYwXCIsIGxpZ2h0OiBcIndoaXRlXCIgfSxcbiAgICAgICAgXCJhcHAtYmFja2dyb3VuZFwiOiB7XG4gICAgICAgICAgZGFyazogXCIjZjVmMGYwXCIsXG4gICAgICAgICAgbGlnaHQ6IFwid2hpdGVcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmb250OiB7XG4gICAgICAgIGZhbWlseTogXCJSb2JvdG9cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBjaGVycnk6IHtcbiAgICAvKiBCRUdJTjogTWFwcGluZyBDb2xvcnMgdG8gQ29tcG9uZW50cyAqL1xuICAgIGdsb2JhbDoge1xuICAgICAgY29sb3JzOiB7XG4gICAgICAgIC8qIEJFR0lOOiBDb2xvciBQYWxldHRlIERlZmluaXRpb24gKi9cbiAgICAgICAgcnVieToge1xuICAgICAgICAgIGRhcms6IFwiI2Q0MTExZVwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiNmNTg5OTBcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJydWJ5IVwiOiBcIiNFRjNGNENcIixcbiAgICAgICAgZ29sZDoge1xuICAgICAgICAgIGRhcms6IFwiI2RmOTAwN1wiLFxuICAgICAgICAgIGxpZ2h0OiBcIiNlN2I4NmJcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb2xkIVwiOiBcIiNGOUI2NDRcIixcbiAgICAgICAgYW1ldGh5c3Q6IHtcbiAgICAgICAgICBkYXJrOiBcIiM5QjU5QjZcIixcbiAgICAgICAgICBsaWdodDogXCIjQzM5QkQzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiYW1ldGh5c3QhXCI6IFwiI0FGN0FDNVwiLFxuICAgICAgICBcImdyZXktMVwiOiBcIiNFQ0U5RTNcIixcbiAgICAgICAgXCJncmV5LTJcIjogXCIjQ0VDQ0M2XCIsXG4gICAgICAgIFwiZ3JleS0zXCI6IFwiIzczNzA2OVwiLFxuICAgICAgICBcImdyZXktNFwiOiBcIiM1MjUwNENcIixcbiAgICAgICAgLyogRU5EOiBDb2xvciBQYWxldHRlIERlZmluaXRpb24gKi9cbiAgICAgICAgLyogQkVHSU46IE1hcHBpbmcgQ29sb3JzIHRvIEdyb21tZXQgTmFtZXNwYWNlcyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgZGFyazogXCJncmV5LTRcIixcbiAgICAgICAgICBsaWdodDogXCJncmV5LTFcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWJhY2tcIjoge1xuICAgICAgICAgIGRhcms6IFwiZ3JleS00XCIsXG4gICAgICAgICAgbGlnaHQ6IFwiZ3JleS0xXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFja2dyb3VuZC1mcm9udFwiOiB7XG4gICAgICAgICAgZGFyazogXCJncmV5LTNcIixcbiAgICAgICAgICBsaWdodDogXCJncmV5LTJcIixcbiAgICAgICAgfSxcbiAgICAgICAgYnJhbmQ6IFwicnVieSFcIixcbiAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgIGRhcms6IFwiYnJhbmRcIixcbiAgICAgICAgICBsaWdodDogXCJicmFuZFwiLFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiYmx1ZVwiLFxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgZGFyazogXCJncmV5LTFcIixcbiAgICAgICAgICBsaWdodDogXCJncmV5LTNcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcHAtYmFja2dyb3VuZFwiOiB7IGRhcms6IFwiYmx1ZVwiLCBsaWdodDogXCJncmVlblwiIH0sXG4gICAgICB9LFxuICAgICAgZm9jdXM6IHtcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgY29sb3I6IFwiZ29sZFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgYmFja2dyb3VuZDogeyBkYXJrOiBcIiNlZDk4MDdcIiwgbGlnaHQ6IFwiI0Y5QjY0NFwiIH0sXG4gICAgICAvKiBFTkQ6IE1hcHBpbmcgQ29sb3JzIHRvIEdyb21tZXQgTmFtZXNwYWNlcyAqL1xuICAgIH0sXG4gICAgYW5jaG9yOiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICBkYXJrOiBcImdvbGRcIixcbiAgICAgICAgbGlnaHQ6IFwiYW1ldGh5c3QhXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLyogRU5EOiBNYXBwaW5nIENvbG9ycyB0byBDb21wb25lbnRzICovXG4gIH0sXG5cbiAgc2VhV2F2ZToge1xuICAgIGdsb2JhbDoge1xuICAgICAgY29sb3JzOiB7XG4gICAgICAgIC8qIEJFR0lOOiBDb2xvciBQYWxldHRlIERlZmluaXRpb24gKi9cbiAgICAgICAgcnVieToge1xuICAgICAgICAgIGRhcms6IFwiI2Q0MTExZVwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiNmNTg5OTBcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJydWJ5IVwiOiBcIiNFRjNGNENcIixcbiAgICAgICAgZ29sZDoge1xuICAgICAgICAgIGRhcms6IFwiI2RmOTAwN1wiLFxuICAgICAgICAgIGxpZ2h0OiBcIiNlN2I4NmJcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb2xkIVwiOiBcIiNGOUI2NDRcIixcbiAgICAgICAgYW1ldGh5c3Q6IHtcbiAgICAgICAgICBkYXJrOiBcIiM5QjU5QjZcIixcbiAgICAgICAgICBsaWdodDogXCIjQzM5QkQzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiYW1ldGh5c3QhXCI6IFwiI0FGN0FDNVwiLFxuICAgICAgICBcImdyZXktMVwiOiBcIiNFQ0U5RTNcIixcbiAgICAgICAgXCJncmV5LTJcIjogXCIjQ0VDQ0M2XCIsXG4gICAgICAgIFwiZ3JleS0zXCI6IFwiIzczNzA2OVwiLFxuICAgICAgICBcImdyZXktNFwiOiBcIiM1MjUwNENcIixcbiAgICAgICAgLyogRU5EOiBDb2xvciBQYWxldHRlIERlZmluaXRpb24gKi9cbiAgICAgICAgLyogQkVHSU46IE1hcHBpbmcgQ29sb3JzIHRvIEdyb21tZXQgTmFtZXNwYWNlcyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgZGFyazogXCJncmV5LTRcIixcbiAgICAgICAgICBsaWdodDogXCJncmV5LTFcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWJhY2tcIjoge1xuICAgICAgICAgIGRhcms6IFwiZ3JleS00XCIsXG4gICAgICAgICAgbGlnaHQ6IFwiZ3JleS0xXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFja2dyb3VuZC1mcm9udFwiOiB7XG4gICAgICAgICAgZGFyazogXCJncmV5LTNcIixcbiAgICAgICAgICBsaWdodDogXCJncmV5LTJcIixcbiAgICAgICAgfSxcbiAgICAgICAgYnJhbmQ6IFwicnVieSFcIixcbiAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgIGRhcms6IFwiYnJhbmRcIixcbiAgICAgICAgICBsaWdodDogXCJicmFuZFwiLFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiYmx1ZVwiLFxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgZGFyazogXCJncmV5LTFcIixcbiAgICAgICAgICBsaWdodDogXCJncmV5LTNcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcHAtYmFja2dyb3VuZFwiOiB7IGRhcms6IFwiI2Q0MTExZVwiLCBsaWdodDogXCIjZTg0ZjU5XCIgfSxcbiAgICAgIH0sXG4gICAgICBmb2N1czoge1xuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICBjb2xvcjogXCJnb2xkXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICAvKiBFTkQ6IE1hcHBpbmcgQ29sb3JzIHRvIEdyb21tZXQgTmFtZXNwYWNlcyAqL1xuICAgIH0sXG4gICAgLyogQkVHSU46IE1hcHBpbmcgQ29sb3JzIHRvIENvbXBvbmVudHMgKi9cbiAgICBhbmNob3I6IHtcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGRhcms6IFwiZ29sZFwiLFxuICAgICAgICBsaWdodDogXCJhbWV0aHlzdCFcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvKiBFTkQ6IE1hcHBpbmcgQ29sb3JzIHRvIENvbXBvbmVudHMgKi9cbiAgfSxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncm9tbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvdGlpLXN0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCIvLyBpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSGVhZGluZywgUGFyYWdyYXBoIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJzQ2hlY2ssIEJzRmlsbE1vb25TdGFyc0ZpbGwgYXMgTW9vbkljb24gfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IE1kT3V0bGluZUxpZ2h0TW9kZSBhcyBUb2dnbGVMaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbmltcG9ydCB7IHVzZUtvdGlpVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dFwiO1xuXG4vLyBpbXBvcnQgeyB0aGVtZXMgfSBmcm9tIFwiLi4vLi4vY29uZmlnL3RoZW1lc1wiO1xuXG4vLyBjb25zdCBvcHRpb25zID0gW1xuLy8gICB7IHZhbHVlOiBcImVuXCIsIGxhYmVsOiBcIkVuZ2xpc2hcIiB9LFxuLy8gICB7IHZhbHVlOiBcInRzXCIsIGxhYmVsOiBcIlRzb25nYVwiIH0sXG4vLyAgIHsgdmFsdWU6IFwidmVcIiwgbGFiZWw6IFwiVmVuZGFcIiB9LFxuLy8gXTtcblxuLyoqXG4gKiBIb29rIHRoYXQgYWxlcnRzIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBwYXNzZWQgcmVmXG4gKi9cbi8vIGNvbnN0IHJvdGF0ZSA9IGtleWZyYW1lc2Bcbi8vICBmcm9tIHtcbi8vICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuLy8gIH1cblxuLy8gIHRvIHtcbi8vICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4vLyAgfVxuLy8gYDtcblxuY29uc3QgZG93bk91dEFuaW1hdGlvbiA9IGtleWZyYW1lc2AgXG4wJSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTBweCkgdHJhbnNMYXRlWSgyMHB4KTtcbiAgb3BhY2l0eTogMFxufVxuNDAlIHtcbiAgb3BhY2l0eTogMC4yXG59XG42MCV7IG9wYWNpdHk6IDAuNX1cbjgwJSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTBweCkgdHJhbnNMYXRlWSgwcHgpO1xuICBvcGFjaXR5OiAuOFxufVxuMTAwJSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zTGF0ZVkoMHB4KTtcbiAgb3BhY2l0eTogMVxufVxuYDtcbmZ1bmN0aW9uIHVzZU91dHNpZGVBbGVydGVyKHJlZiwgY2xvc2VPbk91dHNpZGUpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvKipcbiAgICAgKiBBbGVydCBpZiBjbGlja2VkIG9uIG91dHNpZGUgb2YgZWxlbWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgICAgaWYgKHJlZi5jdXJyZW50ICYmICFyZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIC8vIGFsZXJ0KFwiWW91IGNsaWNrZWQgb3V0c2lkZSBvZiBtZSFcIik7XG4gICAgICAgIGNsb3NlT25PdXRzaWRlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQmluZCB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIFVuYmluZCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW4gdXBcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbcmVmXSk7XG59XG5cbmNvbnN0IFRoZW1lU2VsZWN0b3IgPSBzdHlsZWQoXCJidXR0b25cIikoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBcIiY6aG92ZXJcIjogeyBjb2xvcjogXCJyZWRcIiB9LFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICB9O1xufSk7XG5jb25zdCBEcm9wV2l0aEFuaW0gPSBzdHlsZWQuZGl2YFxuICBhbmltYXRpb24tbmFtZTogJHtkb3duT3V0QW5pbWF0aW9ufTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbmA7XG5jb25zdCBUaGVtZURyb3BEb3duID0gc3R5bGVkKERyb3BXaXRoQW5pbSkoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgb3BhY2l0eTogMSxcbiAgfTtcbn0pO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkKFwidWxcIikoKHByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiNXB4XCIsXG4gICAgd2lkdGg6IHByb3BzPy53aWR0aCA/IHByb3BzPy53aWR0aCA6IFwiMTUwcHhcIixcbiAgICByaWdodDogMCxcbiAgfTtcbn0pO1xuXG5jb25zdCBMaXN0SXRlbSA9IHN0eWxlZChcImxpXCIpKCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImxlZnRcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH07XG59KTtcblxuY29uc3QgU3dpdGNoZXJUZXh0ID0gc3R5bGVkKFwicFwiKSgoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICB9O1xufSk7XG5cbmNvbnN0IFN3aXRjaGVyU2xpZGVyID0gc3R5bGVkKFwicFwiKSgoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICB9O1xufSk7XG5cbmNvbnN0IFN3aXRjaGVyVHlwbyA9IHN0eWxlZChcInBcIikoe1xuICBmbGV4R3JvdzogMixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGdhcDogMTAsXG59KTtcbmNvbnN0IFRoZW1lU3dpdGNoZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2hhbmdlVGhlbWUsIHRoZW1lLCB0aGVtZXMsIHRoZW1lTmFtZSwgdGhlbWVNb2RlLCBjaGFuZ2VUaGVtZU1vZGUgfSA9XG4gICAgdXNlS290aWlUaGVtZSgpO1xuXG4gIGNvbnN0IFtzaG93VGhlbWVzLCBzZXRTaG93VGhlbWVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBjb25zdCBbY2hlY2tlZEl0ZW1dID0gdXNlU3RhdGUodGhlbWVOYW1lKTtcbiAgY29uc29sZS5sb2coXCJ0aGUgdGhlbVNXSVRDSEVSOzs7XCIsIHRoZW1lcyk7XG4gIGNvbnNvbGUubG9nKGNoYW5nZVRoZW1lLCB0aGVtZSk7XG5cbiAgY29uc3Qgd3JhcHBlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlT3V0c2lkZUFsZXJ0ZXIod3JhcHBlclJlZiwgc2V0U2hvd1RoZW1lcyk7XG5cbiAgY29uc3QgZ2V0T3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBvcHRpb25EaWN0aW9uYXJ5ID0gW107XG4gICAgZm9yIChsZXQgdGhlbWVOYW1lIGluIHRoZW1lcykge1xuICAgICAgY29uc29sZS5sb2coXCJ0aGUgdGhlbWUgSTs7XCIsIHRoZW1lTmFtZSk7XG4gICAgICBvcHRpb25EaWN0aW9uYXJ5LnB1c2goeyB2YWx1ZTogdGhlbWVzW3RoZW1lTmFtZV0sIGxhYmVsOiB0aGVtZU5hbWUgfSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25EaWN0aW9uYXJ5O1xuICB9O1xuXG4gIGNvbnN0IHNob3dVcGRhdGVkVGhlbWVzID0gKCkgPT4ge1xuICAgIHNldFNob3dUaGVtZXMoIXNob3dUaGVtZXMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN3aXRjaGxlQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNoYW5nZVRoZW1lTW9kZSh0aGVtZU1vZGUpO1xuICAgIC8vIHNldFN3aXRjaCghc3dpdGNoQ2hlY2tlZCk7XG4gIH07XG5cbiAgY29uc3QgYWN0aXZhdGVUaGVtZSA9IChldmUpID0+IHtcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGV2ZS50YXJnZXQuYXR0cmlidXRlcy52YWx1ZS5ub2RlVmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2coXCJTV0lUQ0ggQUNUSVZBVEVcIiwgZXZlLnRhcmdldC5hdHRyaWJ1dGVzLnZhbHVlLm5vZGVWYWx1ZSk7XG4gICAgY29uc29sZS5sb2coXCJzZXRJdGVtXCIsIHNldFZhbHVlKTtcbiAgICBjaGFuZ2VUaGVtZShzZXRWYWx1ZSk7XG4gICAgLy9zZXRDaGVja2VkSXRlbShzZXRWYWx1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIj4+PiBTV0lUQ0ggY3VycmVudCB0aGVtZVwiLCB0aGVtZU5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiPj4+IFNXSVRDSCBcIik7XG4gICAgLy8gcmV0dXJuICgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiPj4+IFN3aXRjaCBVTk1PVU5JTkdcIik7XG4gICAgLy8gfTtcbiAgfSwgW3RoZW1lTmFtZSwgdGhlbWVNb2RlXSk7XG5cbiAgY29uc3QgZ2V0TGlzdEl0ZW1zID0gKGl0ZW1zKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXQsIGl4KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIj4+PiBUSEUgQ1VSUkVOVCBUIFRIRU1FTkFNRVwiLCB0aGVtZU5hbWUpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCI+Pj4gVEhFIFQgQ1VSUkVOVCBMQUJFTFwiLCBpdCk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpeH0+XG4gICAgICAgICAgPFN3aXRjaGVyVHlwbz5cbiAgICAgICAgICAgIHt0aGVtZU5hbWUgPT09IGl0LmxhYmVsID8gKFxuICAgICAgICAgICAgICA8QnNDaGVjayBzdHlsZT17eyBjb2xvcjogXCJ5ZWxsb3dcIiB9fSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJzQ2hlY2sgc3R5bGU9e3sgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9fSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxTd2l0Y2hlclRleHQgdmFsdWU9e2l0LmxhYmVsfSBvbkNsaWNrPXthY3RpdmF0ZVRoZW1lfT5cbiAgICAgICAgICAgICAge2l0LmxhYmVsfVxuICAgICAgICAgICAgPC9Td2l0Y2hlclRleHQ+XG4gICAgICAgICAgPC9Td2l0Y2hlclR5cG8+XG4gICAgICAgICAge3RoZW1lTmFtZSAhPSBpdC5sYWJlbCA/IG51bGwgOiAoXG4gICAgICAgICAgICA8U3dpdGNoZXJTbGlkZXI+XG4gICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3dpdGNobGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhlbWVNb2RlID09PSBcImRhcmtcIiA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRJY29uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBjaGVja2VkSWNvbj17PFRvZ2dsZUxpZ2h0IC8+fVxuICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MTZ9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Td2l0Y2hlclNsaWRlcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFRoZW1lU2VsZWN0b3Igb25DbGljaz17c2hvd1VwZGF0ZWRUaGVtZXN9PlxuICAgICAgICA8TW9vbkljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiLCBjb2xvcjogXCIjZjY4ZmZmXCIgfX0gLz5cbiAgICAgIDwvVGhlbWVTZWxlY3Rvcj5cbiAgICAgIHtzaG93VGhlbWVzID8gKFxuICAgICAgICA8VGhlbWVEcm9wRG93biByZWY9e3dyYXBwZXJSZWZ9PlxuICAgICAgICAgIDxMaXN0IHdpZHRoPXsxNTB9PntnZXRMaXN0SXRlbXMoZ2V0T3B0aW9ucygpKX08L0xpc3Q+XG4gICAgICAgIDwvVGhlbWVEcm9wRG93bj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVTd2l0Y2hlcjtcbiIsImltcG9ydCB7XG4gIGNoZWNrT3JTZXRUaGVtZXMsXG4gIGdldFRoZW1lLFxuICBnZXRUaGVtZXMsXG4gIGxvZ1N0b3JlZFRoZW1lc1N0YXR1cyxcbn0gZnJvbSBcIi4vY29uZmlnXCI7XG5leHBvcnQgeyBsb2dTdG9yZWRUaGVtZXNTdGF0dXMsIGdldFRoZW1lLCBnZXRUaGVtZXMsIGNoZWNrT3JTZXRUaGVtZXMgfTtcbiIsImltcG9ydCB7IEdsb2JhbFN0eWxlLCBNaXhpbiwgQWJzdHJhY3RzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBUaGVtZXMgfSBmcm9tIFwiLi90aGVtZVwiO1xuXG5leHBvcnQgeyBHbG9iYWxTdHlsZSwgTWl4aW4sIEFic3RyYWN0cywgVGhlbWVzIH07XG4iLCJpbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuL3VzZVRoZW1lXCI7XG5leHBvcnQgeyB1c2VUaGVtZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZihTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2Fyb3VzZWwsXG4gIENpcmNsZSxcbiAgRm9vdGVyLFxuICBIZWFkZXIsXG4gIEhlYWRpbmcsXG4gIEltYWdlLFxuICBPdmFsLFxuICBQYWdlLFxuICBQYWdlQ29udGVudCxcbiAgUGFyYWdyYXBoLFxuICBSZWN0YW5nbGUsXG4gIFNoYXBlLFxuICBTcXVhcmUsXG4gIFN2ZyxcbiAgVGFnLFxuICBUZXh0LFxuICBUaGVtZVN3aXRjaGVyLFxuICBWaWRlbyxcbn0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgS290aWlUaGVtZVByb3ZpZGVyLCB1c2VLb3RpaVRoZW1lIH0gZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tIFwiLi9nbG9iYWxzXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuL2hvb2tzXCI7XG5cbmV4cG9ydCB7XG4gIEJ1dHRvbixcbiAgQm94LFxuICBQYWdlLFxuICBQYWdlQ29udGVudCxcbiAgRm9vdGVyLFxuICBIZWFkZXIsXG4gIENhcmQsXG4gIEtvdGlpVGhlbWVQcm92aWRlcixcbiAgdXNlS290aWlUaGVtZSxcbiAgdXNlVGhlbWUsXG4gIFRoZW1lU3dpdGNoZXIsXG4gIEdsb2JhbFN0eWxlIGFzIEtvdGlpR2xvYmFsLFxuICBIZWFkaW5nLFxuICBUZXh0LFxuICBQYXJhZ3JhcGgsXG4gIFRhZyxcbiAgVmlkZW8sXG4gIEltYWdlLFxuICBDYXJvdXNlbCxcbiAgU3F1YXJlLFxuICBDaXJjbGUsXG4gIFJlY3RhbmdsZSxcbiAgT3ZhbCxcbiAgU2hhcGUsXG4gIFN2ZyBhcyBTVkcsXG59O1xuIl0sIm5hbWVzIjpbImdyb21tZXRfMSIsInJlcXVpcmUiLCJyZWFjdF8xIiwiX19pbXBvcnREZWZhdWx0Iiwia290aWlfc3R5bGVkXzEiLCJXcmFwcGVkQWNjb3JkaW9uIiwiZGVmYXVsdCIsImRpdiIsIndpdGhDb25maWciLCJjb21wb25lbnRJZCIsIkFjY29yZGlvbiIsInRlc3RJRCIsImNoaWxkcmVuIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiZXhwb3J0cyIsIkFjY29yZGlvbl8xIiwiQWNjb3JkaW9uUGFuZWwiLCJBY2NvcmRpb25QYW5lbF8xIiwiV3JhcHBlZEFuY2hvciIsIkFuY2hvciIsIkFuY2hvcl8xIiwiV3JhcHBlZEJ1dHRvbiIsIkJ1dHRvbiIsIkJ1dHRvbl8xIiwiV3JhcHBlZERyb3AiLCJEcm9wIiwidGFyZ2V0IiwiRHJvcF8xIiwiV3JhcHBlZERyb3BCdXR0b24iLCJEcm9wQnV0dG9uIiwiZHJvcENvbnRlbnQiLCJEcm9wQnV0dG9uXzEiLCJXcmFwcGVkTWVudSIsIk1lbnUiLCJpdGVtcyIsIk1lbnVfMSIsIldyYXBwZWROYXYiLCJOYXYiLCJOYXZfMSIsIldyYXBwZWRUYWJzIiwiVGFicyIsIm9uQWN0aXZlIiwiY29uc29sZSIsImxvZyIsIlRhYnNfMSIsIkRyb3BCdXRvbl8xIiwiY29udHJvbHNfMSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImlucHV0c18xIiwiQ2hlY2tCb3giLCJDaGVja0JveEdyb3VwIiwiRGF0ZUlucHV0IiwiRmlsZUlucHV0IiwiRm9ybUZpZWxkIiwiU2VsZWN0IiwiU2VsZWN0TXVsdGlwbGUiLCJUZXh0QXJlYSIsIlRleHRJbnB1dCIsImxheW91dF8xIiwiQm94IiwiQ2FyZCIsIkZvb3RlciIsIkdyaWQiLCJIZWFkZXIiLCJNYWluIiwiT3ZlcmxheSIsIlBhZ2UiLCJQYWdlQ29udGVudCIsIlBhZ2VIZWFkZXIiLCJTaWRlQmFyIiwiU3RhY2siLCJtZWRpYV8xIiwiQ2Fyb3VzZWwiLCJJbWFnZSIsIlN2ZyIsIlZpZGVvIiwidHlwb2dyYXBoeV8xIiwiSGVhZGluZyIsIlBhcmFncmFwaCIsIlRhZyIsIlRleHQiLCJ1dGlsc18xIiwiSW5maW5pdGVTY3JvbGwiLCJLZXlib2FyZCIsIk1hcmtkb3duIiwiU2tpcExpbmsiLCJUaGVtZVN3aXRjaGVyIiwic2hhcGVzXzEiLCJDaXJjbGUiLCJPdmFsIiwiUmVjdGFuZ2xlIiwiU2hhcGUiLCJTcXVhcmUiLCJXcmFwcGVkQ2hlY2tCb3giLCJDaGVja0JveF8xIiwib3B0aW9ucyIsIkNoZWNrQm94R3JvdXBfMSIsIldyYXBwZWREYXRlSW5wdXQiLCJEYXRlSW5wdXRfMSIsIldyYXBwZWRGaWxlSW5wdXQiLCJGaWxlSW5wdXRfMSIsIldyYXBwZWRGb3JtRmllbGQiLCJGb3JtRmllbGRfMSIsIldyYXBwZWRNYXNrZWRJbnB1dCIsIk1hc2tlZElucHV0IiwiTWFza2VkSW5wdXRfMSIsIldyYXBwZWRSYW5nZUlucHV0IiwiUmFuZ2VJbnB1dCIsIlJhbmdlSW5wdXRfMSIsIldyYXBwZWRTZWxlY3QiLCJTZWxlY3RfMSIsIldyYXBwZWRTZWxlY3RNdWx0aXBsZSIsIlNlbGVjdE11bHRpcGxlXzEiLCJXcmFwcGVkU3RhclJhdGluZyIsIlN0YXJSYXRpbmciLCJuYW1lIiwiU3RhclJhdGluZ18xIiwiV3JhcHBlZFRleHRBcmVhIiwiVGV4dEFyZWFfMSIsIldyYXBwZWRUZXh0SW5wdXQiLCJUZXh0SW5wdXRfMSIsIldyYXBwZWRUaHVtYnNSYXRpbmciLCJUaHVtYnNSYXRpbmciLCJUaHVtYnNSYXRpbmdfMSIsIldyYXBwZWRCb3giLCJwYWQiLCJkaXJlY3Rpb24iLCJCb3hfMSIsIldyYXBwZWRDYXJkIiwiQ2FyZF8xIiwiV3JhcHBlZEZvb3RlciIsIkZvb3Rlcl8xIiwiV3JhcHBlZEdyaWQiLCJHcmlkXzEiLCJjb250ZXh0XzEiLCJXcmFwcGVkSGVhZGVyIiwiS290aWlUaGVtZVByb3ZpZGVyIiwiSGVhZGVyXzEiLCJXcmFwcGVkTWFpbiIsIk1haW5fMSIsIldyYXBwZWRQYWdlIiwiTGF5ZXIiLCJPdmVybGF5XzEiLCJQYWdlXzEiLCJXcmFwcGVkUGFnZUNvbnRlbnQiLCJQYWdlQ29udGVudF8xIiwiUGFnZUhlYWRlcl8xIiwiV3JhcHBlZFNpZGVCYXIiLCJTaWRlYmFyIiwiU2lkZUJhcl8xIiwiV3JhcHBlZFN0YWNrIiwiU3RhY2tfMSIsIldyYXBwZWRDYXJvdXNlbCIsIkNhcm91c2VsXzEiLCJXcmFwcGVkSW1hZ2UiLCJJbWFnZV8xIiwiV3JhcHBlZFN2ZyIsInNyYyIsImlubGluZSIsImFzQ29tcG9uZW50IiwiU3ZnXzEiLCJXcmFwcGVkVmlkZW8iLCJWaWRlb18xIiwiaGVscGVyc18xIiwiU3R5bGVkQ2lyY2xlIiwic3R5bGVzIiwiY3JlYXRlSlNDU1NTY2hlbWEiLCJ0aGVtZSIsInRoZW1lcyIsImNoYW5nZVRoZW1lIiwidGhlbWVNb2RlIiwidXNlS290aWlUaGVtZSIsIm5ld1Byb3BzIiwiQ2ljbGVfMSIsIlN0eWxlZFNoYXBlIiwiT3ZhbF8xIiwiUmVjdGFuZ2xlXzEiLCJzaGFwZU5hbWUiLCJTaGFwZV8xIiwiU3R5bGVkU3F1YXJlIiwiU3F1YXJlXzEiLCJTSEFQRVNfQ09MT1IiLCJTSEFQRV9TSVpFUyIsImRpbWVuc2lvbnNfbWlzbWF0Y2giLCJwcm9wZXJ0eV9pc19ub3Rfc3VwcG9ydGVkIiwic3RyaW5nX3ZhbHVlX2NvbnN0YW50IiwidmFsdWVfZm9ybWF0X3VucmVjb2duaXNlZCIsImJhY2tncm91bmRfMSIsImJvcmRlcl8xIiwid2lkdGhfMSIsInNoYXBlIiwiY2xpcFNoYXBlIiwiZ2xvYmFsIiwiY29sb3JzIiwic2l6ZSIsIndpZHRoSGVpZ2h0IiwiZG9XaWR0aEhlaWdodCIsImJvcmRlciIsImRvQm9yZGVyIiwiYmFja2dyb3VuZCIsImRvQmFja2dyb3VuZCIsImNsaXBwZWRTaGFwZSIsImRvQ2xpcHBlZFNoYXBlcyIsImJhY2tncm91bmRDb2xvciIsIkNpcmNsZV8xIiwibnVtYmVyX2NoZWNrX3BhdHRlcm4iLCJzcGxpdF9zdHJpbmdfYnlfc3BhY2UiLCJzdHJpbmdfY2hlY2tfcGF0dGVybiIsImVrc3RyYWN0b3JzXzEiLCJnZXR0ZXJzXzEiLCJjaGVja0JhY2tncm91bmQiLCJiYWNrZ3JvdW5kTmFtZSIsInRvTG93ZXJDYXNlIiwiZXh0cmFjdFByb3BlcnR5IiwiZ2V0RGVmYXVsdFZhbHVlIiwidGhlbWVDb2xvcnMiLCJnZXRWZW5kb3JUaGVtZVByb3BzIiwicGF0dGVybnNfMSIsImNvbG9yc18xIiwiZGVmYXVsdHNfMSIsInRoZW1lTU9ERSIsImRlZmF1bHRCb3JkZXIiLCJkZWZhdWx0VmFsdWVzIiwid2lkdGgiLCJib3JkZXJXaWR0aCIsInNwbGl0Qm9yZGVyIiwic3BsaXRCb3JkZXJTdHJpbmciLCJyYXdCb3JkZXIiLCJudW1lcmljZUJvcmRlciIsInNldE1lYXN1cmVtZW50VW5pdCIsInRleHRPck51bWVyaWNCb3JkZXIiLCJoYW5kbGVkQm9yZGVyIiwiaGFuZGxlQm9yZGVyIiwiYm9yZGVyQnlTdHJpbmciLCJib3JkZXJTdHJpbmciLCJzZXRCb3JkZXIiLCJzcGxpdEJ5IiwidHJpbSIsInNwbGl0IiwiYm9yZGVyRGljdCIsImxpbmVzIiwiY29sb3IiLCJib3JkZXJTdHlsZSIsInNvbGlkIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJMZW4iLCJsZW5ndGgiLCJzaWRlcyIsInNsaWNlIiwiYm9yZGVyU2lkZXMiLCJtYXAiLCJpdGVtIiwiaSIsInNwbGl0Qm9yZGVyU2lkZSIsImlzVmVydGljYWxPckhvcml6b250YWwiLCJmaXJzdEl0ZW1TcGxpdCIsImJTaWRlIiwiaGFuZGxlQm9yZGVyU2lkZXMiLCJ1bml0IiwidGVzdCIsIm9iIiwiYm9yZGVyU2lkZSIsImJvcmRlclNpZGVJdGVtcyIsInNwbGl0Qm9yZGVyU2lkZVZhbHVlcyIsImJvcmRlclNpZGVXaWR0aCIsImJvcmRlclNpZGVTdHlsZSIsImJvcmRlclNpZGVDb2xvciIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNvbnN0YW50c18xIiwiRVJPUlJfTUVTU0FHRVMiLCJfX2ltcG9ydFN0YXIiLCJjaGVja1Byb3BlcnR5VmFsdWUiLCJwcm9wZXJ0eUtleSIsInZhbHVlIiwiaW5jbHVkZXMiLCJFcnJvciIsInNpemVzIiwieHhzbWFsbCIsInhzbWFsbCIsInNtYWxsIiwibWVkaXVtIiwibGFyZ2UiLCJ4bGFyZ2UiLCJ4eGxhcmdlIiwiQk9SREVSX1NJWkVTIiwibm9uZSIsIkJPUkRFUl9MSU5FUyIsImRvdHRlZCIsImRhc2hlZCIsImdyb292ZSIsInJpZGdlIiwiaW5zZXQiLCJkb3VibGUiLCJoaWRkZW4iLCJudW1lcmljIiwic3RyaW5nIiwiaGVpZ2h0IiwicHJvcGVydHlTb3VyY2UiLCJwcm9LZXkiLCJpc051bWVyaWMiLCJ0ZXh0IiwidGhlbWVQcm9wcyIsInByb3AiLCJzaGFwZUNsaXBzIiwidHJpYW5nbGUiLCJ0cmFwZXpvaWQiLCJwYXJhbGxlbG9ncmFtIiwicmhvbWJ1cyIsInBlbnRhZ29uIiwiaGV4YWdvbiIsImhlcHRhZ29uIiwib2N0YWdvbiIsIm5vbmFnb24iLCJkZWNhZ29uIiwiYmV2ZWwiLCJyYWJiZXQiLCJjaXJjbGUiLCJlbGxpcHNlIiwic3RhciIsInF1YSIsInNoYXBlX2NsaXBzXzEiLCJCT1JERVJfUkFESVVTIiwic3F1YXJlV2lkdGhIZWlnaHQiLCJjaXJjbGVXaWR0aEhlaWdodCIsImJvcmRlclJhZGl1cyIsInJlY3RhbmdsZVdpZHRoSGVpZ2h0Iiwib3ZhbFdpZHRoSGVpZ2h0IiwiY2xpcFBhdGhXaWR0aEhlaWdodCIsImZsZXhMYXlvdXQiLCJkb0NsaXBwZWRTaGFwZXNDb250ZW50UG9zaXRpb25pbmciLCJjbGlwUGF0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwic2hvdWxkTG93ZXJDYXNlIiwiY2FzZWRTdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImNoZWNrZXJzXzEiLCJyZWN0V2lkdGgiLCJXcmFwcGVkSGVhZGluZyIsIkhlYWRpbmdfMSIsIldyYXBwZWRUZXh0IiwiUGFyYWdyYXBoXzEiLCJXcmFwcGVkVGFnIiwiVEFHIiwicmVzb2x2ZWRDb2xvciIsImxpZ2h0IiwiVGFnXzEiLCJ0ZXh0RGVmYXVsdHNfMSIsImZvbnRTaXplIiwiYTExeVRpdGxlIiwiYWxseVRpdGxlIiwiQ3VzdG9tVGV4dCIsIkN1c3RvbVRleHRfMSIsIlRleHRfMSIsIldyYXBwZWRDb2xsYXBzaWJsZSIsIkNvbGxhcHNpYmxlIiwiQ29sbGFwc2libGVfMSIsIldyYXBwZWRJbmZpbml0ZVNjcm9sbCIsIkluZmluaXRlU2Nyb2xsXzEiLCJXcmFwcGVkS2V5Ym9hcmQiLCJLZXlib2FyZF8xIiwiV3JhcHBlZE1hcmtkb3duIiwiV3JhcHBlZFNraXBMaW5rIiwiaWQiLCJTa2lwTGlua18xIiwiTWFya2Rvd25fMSIsInN3aXRjaGVyXzEiLCJ0aGVtZV9wcm92aWRlcl8xIiwiQ3VzdG9tVGhlbWVQcm92aWRlciIsInVzZVRoZW1lQ29udGV4dCIsImNvbmZpZ18xIiwiaG9va3NfMSIsIlRoZW1lQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJpc1RoZW1lTG9hZGVkIiwidXNlVGhlbWUiLCJzZXRUaGVtZU1vZGUiLCJ1c2VTdGF0ZSIsInRoZW1lTmFtZSIsInNldFRoZW1lTmFtZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsImRpcmVjdFRoZW1lcyIsInVzZUVmZmVjdCIsImxvZ1N0b3JlZFRoZW1lc1N0YXR1cyIsImNoYW5nZVRoZW1lTW9kZSIsIlByb3ZpZGVyIiwiZ3JvbW1ldFRoZW1lIiwiZGVmYXVsdFByb3BzIiwiR3JvbW1ldCIsInVzZUNvbnRleHQiLCJkYXJrIiwiZm9udCIsImZhbWlseSIsImNoZXJyeSIsInJ1YnkiLCJnb2xkIiwiYW1ldGh5c3QiLCJicmFuZCIsImNvbnRyb2wiLCJpbnB1dCIsImZvY3VzIiwiYW5jaG9yIiwic2VhV2F2ZSIsImJzXzEiLCJtZF8xIiwicmVhY3Rfc3dpdGNoXzEiLCJkb3duT3V0QW5pbWF0aW9uIiwia2V5ZnJhbWVzIiwidXNlT3V0c2lkZUFsZXJ0ZXIiLCJyZWYiLCJjbG9zZU9uT3V0c2lkZSIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlRoZW1lU2VsZWN0b3IiLCJjdXJzb3IiLCJEcm9wV2l0aEFuaW0iLCJUaGVtZURyb3BEb3duIiwicG9zaXRpb24iLCJvcGFjaXR5IiwiTGlzdCIsIm1hcmdpbiIsInBhZGRpbmciLCJ0b3AiLCJyaWdodCIsIkxpc3RJdGVtIiwiU3dpdGNoZXJUZXh0IiwiU3dpdGNoZXJTbGlkZXIiLCJTd2l0Y2hlclR5cG8iLCJmbGV4R3JvdyIsImdhcCIsInNob3dUaGVtZXMiLCJzZXRTaG93VGhlbWVzIiwid3JhcHBlclJlZiIsInVzZVJlZiIsImdldE9wdGlvbnMiLCJvcHRpb25EaWN0aW9uYXJ5IiwicHVzaCIsImxhYmVsIiwic2hvd1VwZGF0ZWRUaGVtZXMiLCJoYW5kbGVTd2l0Y2hsZUNoYW5nZSIsImFjdGl2YXRlVGhlbWUiLCJldmUiLCJzZXRWYWx1ZSIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJnZXRMaXN0SXRlbXMiLCJpdCIsIml4Iiwia2V5IiwiQnNDaGVjayIsInN0eWxlIiwidmlzaWJpbGl0eSIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJ1bmNoZWNrZWRJY29uIiwiY2hlY2tlZEljb24iLCJNZE91dGxpbmVMaWdodE1vZGUiLCJCc0ZpbGxNb29uU3RhcnNGaWxsIiwiY2hlY2tPclNldFRoZW1lcyIsImdldFRoZW1lIiwiZ2V0VGhlbWVzIiwic3R5bGVzXzEiLCJHbG9iYWxTdHlsZSIsIk1peGluIiwiQWJzdHJhY3RzIiwidGhlbWVfMSIsIlRoZW1lcyIsInVzZVRoZW1lXzEiLCJjb21wb25lbnRzXzEiLCJnbG9iYWxzXzEiXSwic291cmNlUm9vdCI6IiJ9