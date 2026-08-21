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
const WrappedAccordion = kotii_styled_1.default.div``;
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
const WrappedAccordion = kotii_styled_1.default.div``;
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
const WrappedAnchor = kotii_styled_1.default.div``;
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
const WrappedButton = kotii_styled_1.default.div``;
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
const WrappedDrop = kotii_styled_1.default.div``;
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
const WrappedDropButton = kotii_styled_1.default.div``;
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
const WrappedMenu = kotii_styled_1.default.div``;
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
const WrappedNav = kotii_styled_1.default.div``;
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
const WrappedTabs = kotii_styled_1.default.div``;
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
const WrappedCheckBox = kotii_styled_1.default.div``;
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
const WrappedCheckBox = kotii_styled_1.default.div``;
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
const WrappedDateInput = kotii_styled_1.default.div``;
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
const WrappedFileInput = kotii_styled_1.default.div``;
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
const WrappedFormField = kotii_styled_1.default.div``;
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
const WrappedMaskedInput = kotii_styled_1.default.div``;
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
const WrappedRangeInput = kotii_styled_1.default.div``;
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
const WrappedSelect = kotii_styled_1.default.div``;
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
const WrappedSelectMultiple = kotii_styled_1.default.div``;
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
const WrappedStarRating = kotii_styled_1.default.div``;
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
const WrappedTextArea = kotii_styled_1.default.div``;
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
const WrappedTextInput = kotii_styled_1.default.div``;
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
const WrappedThumbsRating = kotii_styled_1.default.div``;
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
const WrappedBox = kotii_styled_1.default.div``;
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
const WrappedCard = kotii_styled_1.default.div``;
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
const WrappedFooter = kotii_styled_1.default.div``;
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
const WrappedGrid = kotii_styled_1.default.div``;
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
const WrappedHeader = kotii_styled_1.default.div``;
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
const WrappedMain = kotii_styled_1.default.div``;
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
const WrappedPage = kotii_styled_1.default.div``;
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
const WrappedPage = kotii_styled_1.default.div``;
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
const WrappedPageContent = kotii_styled_1.default.div``;
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
const WrappedPage = kotii_styled_1.default.div``;
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
const WrappedSideBar = kotii_styled_1.default.div``;
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
const WrappedStack = kotii_styled_1.default.div``;
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
const WrappedCarousel = kotii_styled_1.default.div``;
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
const WrappedImage = kotii_styled_1.default.div``;
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
const WrappedSvg = kotii_styled_1.default.div``;
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
const WrappedVideo = kotii_styled_1.default.div``;
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
const StyledCircle = (0, kotii_styled_1.default)("div")(props => {
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
const StyledShape = (0, kotii_styled_1.default)("div")(props => {
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
const StyledShape = (0, kotii_styled_1.default)("div")(props => {
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
const StyledSquare = (0, kotii_styled_1.default)("div")(props => {
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
const WrappedHeading = kotii_styled_1.default.div``;
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
const WrappedText = kotii_styled_1.default.div``;
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
const WrappedTag = kotii_styled_1.default.div``;
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
const Text = (0, kotii_styled_1.default)("span")(props => ({
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
const WrappedText = kotii_styled_1.default.div``;
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
const WrappedCollapsible = kotii_styled_1.default.div``;
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
const WrappedInfiniteScroll = kotii_styled_1.default.div``;
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
const WrappedKeyboard = kotii_styled_1.default.div``;
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
const WrappedMarkdown = kotii_styled_1.default.div``;
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
const WrappedSkipLink = kotii_styled_1.default.div``;
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
const styled_components_1 = __importStar(require("styled-components"));
const context_1 = require("../../../context");
const downOutAnimation = (0, styled_components_1.keyframes)` 
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
const ThemeSelector = (0, styled_components_1.default)("button")(() => {
  return {
    color: "green",
    cursor: "pointer",
    "&:hover": {
      color: "red"
    },
    backgroundColor: "transparent"
  };
});
const DropWithAnim = styled_components_1.default.div`
  animation-name: ${downOutAnimation};
  animation-duration: 2s;
  animation-iteration-count: 1;
`;
const ThemeDropDown = (0, styled_components_1.default)(DropWithAnim)(() => {
  return {
    position: "relative",
    opacity: 1
  };
});
const List = (0, styled_components_1.default)("ul")(props => {
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
const ListItem = (0, styled_components_1.default)("li")(() => {
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
const SwitcherText = (0, styled_components_1.default)("p")(() => {
  return {
    color: "green",
    cursor: "pointer"
  };
});
const SwitcherSlider = (0, styled_components_1.default)("p")(() => {
  return {
    color: "green",
    cursor: "pointer"
  };
});
const SwitcherTypo = (0, styled_components_1.default)("p")({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLE9BbEJBK2EsWUFBQSxDQUFBeFksYUFBYTtFQUFBO0FBQUE7QUF3QmIxQyx5Q0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BdkJBK2EsWUFBQSxDQUFBblosS0FBSztFQUFBO0FBQUE7QUFFUCxNQUFBMkQsU0FBQSxHQUFBdkksbUJBQUE7QUFZRTZDLHNEQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0FaT3VGLFNBQUEsQ0FBQUUsa0JBQWtCO0VBQUE7QUFBQTtBQWF6QjVGLGlEQUFBO0VBQUFFLFVBQUE7RUFBQUMsR0FBQSxXQUFBQSxDQUFBO0lBQUEsT0FiMkJ1RixTQUFBLENBQUFxQyxhQUFhO0VBQUE7QUFBQTtBQUMxQyxNQUFBb1QsU0FBQSxHQUFBaGUsbUJBQUE7QUFlaUI2QywrQ0FBQTtFQUFBRSxVQUFBO0VBQUFDLEdBQUEsV0FBQUEsQ0FBQTtJQUFBLE9BZlJnYixTQUFBLENBQUFQLFdBQVc7RUFBQTtBQUFBO0FBQ3BCLE1BQUFuRyxPQUFBLEdBQUF0WCxtQkFBQTtBQVlFNkMsNENBQUE7RUFBQUUsVUFBQTtFQUFBQyxHQUFBLFdBQUFBLENBQUE7SUFBQSxPQVpPc1UsT0FBQSxDQUFBSSxRQUFRO0VBQUE7QUFBQSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9BY2NvcmRpb24vQWNjb3JkaW9uLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0FjY29yZGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9BY2NvcmRpb25QYW5lbC9BY2NvcmRpb25QYW5lbC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9BY2NvcmRpb25QYW5lbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9BbmNob3IvQW5jaG9yLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0FuY2hvci9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0J1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9Ecm9wL0Ryb3AudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRHJvcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9Ecm9wQnV0b24vRHJvcEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9Ecm9wQnV0b24vaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvTWVudS9NZW51LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL01lbnUvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvTmF2L05hdi50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9OYXYvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvVGFicy9UYWJzLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL1RhYnMvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0NoZWNrQm94L0NoZWNrQm94LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9DaGVja0JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvQ2hlY2tCb3hHcm91cC9DaGVja0JveEdyb3VwLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9DaGVja0JveEdyb3VwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9EYXRlSW5wdXQvRGF0ZUlucHV0LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9EYXRlSW5wdXQvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0ZpbGVJbnB1dC9GaWxlSW5wdXQudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0ZpbGVJbnB1dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvRm9ybUZpZWxkL0Zvcm1GaWVsZC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvRm9ybUZpZWxkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9NYXNrZWRJbnB1dC9NYXNrZWRJbnB1dC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvTWFza2VkSW5wdXQvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1JhbmdlSW5wdXQvUmFuZ2VJbnB1dC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvUmFuZ2VJbnB1dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvU2VsZWN0L1NlbGVjdC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvU2VsZWN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9TZWxlY3RNdWx0aXBsZS9TZWxlY3RNdWx0aXBsZS50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvU2VsZWN0TXVsdGlwbGUvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1N0YXJSYXRpbmcvU3RhclJhdGluZy50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvU3RhclJhdGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvVGV4dEFyZWEvVGV4dEFyZWEudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RleHRBcmVhL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UZXh0SW5wdXQvVGV4dElucHV0LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UZXh0SW5wdXQvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RodW1ic1JhdGluZy9UaHVtYnNSYXRpbmcudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RodW1ic1JhdGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0JveC9Cb3gudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvQ2FyZC9DYXJkLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9DYXJkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Gb290ZXIvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0dyaWQvR3JpZC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvR3JpZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9NYWluL01haW4udHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L01haW4vaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L092ZXJsYXkvT3ZlcmxheS50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvT3ZlcmxheS9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvUGFnZS9QYWdlLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9QYWdlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9QYWdlQ29udGVudC9QYWdlQ29udGVudC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvUGFnZUNvbnRlbnQvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1BhZ2VIZWFkZXIvUGFnZUhlYWRlci50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvUGFnZUhlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvU2lkZUJhci9TaWRlQmFyLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9TaWRlQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9TdGFjay9TdGFjay50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvU3RhY2svaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL21lZGlhL0Nhcm91c2VsL0Nhcm91c2VsLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL21lZGlhL0Nhcm91c2VsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL21lZGlhL0ltYWdlL0ltYWdlLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL21lZGlhL0ltYWdlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL21lZGlhL1N2Zy9TdmcudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvbWVkaWEvU3ZnL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL21lZGlhL1ZpZGVvL1ZpZGVvLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL21lZGlhL1ZpZGVvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL21lZGlhL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy9DaXJjbGUvQ2ljbGUudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL0NpcmNsZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvT3ZhbC9PdmFsLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy9PdmFsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy9SZWN0YW5nbGUvUmVjdGFuZ2xlLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy9SZWN0YW5nbGUvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL1NoYXBlL1NoYXBlLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy9TaGFwZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvU3F1YXJlL1NxdWFyZS50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvU3F1YXJlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvZXJyb3JfbWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvcGF0dGVybnMudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL3V0aWxzL2JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy9zaGFwZXMvdXRpbHMvYm9yZGVyLnRzIiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL3V0aWxzL2NoZWNrZXJzLnRzIiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL3V0aWxzL2NvbG9ycy50cyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy91dGlscy9kZWZhdWx0cy50cyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy91dGlscy9la3N0cmFjdG9ycy50cyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy91dGlscy9nZXR0ZXJzLnRzIiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL3V0aWxzL3NoYXBlX2NsaXBzLnRzIiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvc2hhcGVzL3V0aWxzL3NoYXBlcy50cyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3NoYXBlcy91dGlscy93aWR0aC50cyIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkvSGVhZGluZy9IZWFkaW5nLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkvSGVhZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy90eXBvZ3JhcGh5L1BhcmFncmFwaC9QYXJhZ3JhcGgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9QYXJhZ3JhcGgvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9UYWcvVGFnLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkvVGFnL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkvVGV4dC9DdXN0b21UZXh0L0N1c3RvbVRleHQudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9UZXh0L0N1c3RvbVRleHQvaW5kZXgudHN4Iiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9UZXh0L0N1c3RvbVRleHQvdGV4dERlZmF1bHRzLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkvVGV4dC9UZXh0LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkvVGV4dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29tcG9uZW50cy90eXBvZ3JhcGh5L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL0NvbGxhcHNpYmxlL0NvbGxhcHNpYmxlLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL0NvbGxhcHNpYmxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL0luZmluaXRlU2Nyb2xsL0luZmluaXRlU2Nyb2xsLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL0luZmluaXRlU2Nyb2xsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL0tleWJvYXJkL0tleWJvYXJkLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL0tleWJvYXJkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL01hcmtkb3duL01hcmtkb3duLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL1NraXBMaW5rL1NraXBMaW5rLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL1NraXBMaW5rL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb250ZXh0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb250ZXh0L3RoZW1lLXByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9rb3RpaS11aS9leHRlcm5hbCBjb21tb25qcyBcImdyb21tZXRcIiIsIndlYnBhY2s6Ly9rb3RpaS11aS9leHRlcm5hbCBjb21tb25qcyBcImtvdGlpLXN0eWxlZFwiIiwid2VicGFjazovL2tvdGlpLXVpL2V4dGVybmFsIGNvbW1vbmpzIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL1RoZW1lU3dpdGNoZXIvc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovL2tvdGlpLXVpLy4vc3JjL2dsb2JhbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va290aWktdWkvLi9zcmMvaG9va3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8va290aWktdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va290aWktdWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rb3RpaS11aS8uL3NyYy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3JkaW9uIGFzIEdhY2NvcmRpb24gfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkQWNjb3JkaW9uID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IEFjY29yZGlvbjogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkQWNjb3JkaW9uIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdhY2NvcmRpb24gey4uLnByb3BzfT57Y2hpbGRyZW59PC9HYWNjb3JkaW9uPlxuICAgIDwvV3JhcHBlZEFjY29yZGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiIsImltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vQWNjb3JkaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiIsImltcG9ydCB7IEFjY29yZGlvblBhbmVsIGFzIEdhY2NvcmRpb25QYW5lbCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRBY2NvcmRpb24gPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgQWNjb3JkaW9uUGFuZWw6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZEFjY29yZGlvbiBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHYWNjb3JkaW9uUGFuZWwgey4uLnByb3BzfT57Y2hpbGRyZW59PC9HYWNjb3JkaW9uUGFuZWw+XG4gICAgPC9XcmFwcGVkQWNjb3JkaW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uUGFuZWw7XG4iLCJpbXBvcnQgVGFnIGZyb20gXCIuL0FjY29yZGlvblBhbmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFRhZztcbiIsImltcG9ydCB7IEFuY2hvciBhcyBHYW5jaG9yIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZEFuY2hvciA9IHN0eWxlZC5kaXY8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBBbmNob3I6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZEFuY2hvciBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHYW5jaG9yIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvR2FuY2hvcj5cbiAgICA8L1dyYXBwZWRBbmNob3I+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmNob3I7XG4iLCJpbXBvcnQgQW5jaG9yIGZyb20gXCIuL0FuY2hvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBBbmNob3I7XG4iLCJpbXBvcnQgeyBCdXR0b24gYXMgR2J1dHRvbiB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRCdXR0b24gPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgQnV0dG9uOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkQnV0dG9uIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdidXR0b24gey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZEJ1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCB7IERyb3AgYXMgR2Ryb3AgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkRHJvcCA9IHN0eWxlZC5kaXY8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBEcm9wOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgdGFyZ2V0LCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWREcm9wIGRhdGEtdGVzdGlkPXt0ZXN0SUR9IHRhcmdldD17dGFyZ2V0fT5cbiAgICAgIDxHZHJvcCB0YXJnZXQ9e3RhcmdldH0gey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZERyb3A+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wO1xuIiwiaW1wb3J0IERyb3AgZnJvbSBcIi4vRHJvcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wO1xuIiwiaW1wb3J0IHsgRHJvcEJ1dHRvbiBhcyBHZHJvcEJ1dHRvbiB9IGZyb20gXCJncm9tbWV0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZERyb3BCdXR0b24gPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgRHJvcEJ1dHRvbjogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIGRyb3BDb250ZW50LFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkRHJvcEJ1dHRvbiBkcm9wQ29udGVudD17ZHJvcENvbnRlbnR9IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdkcm9wQnV0dG9uIHsuLi5wcm9wc30gZHJvcENvbnRlbnQ9e2Ryb3BDb250ZW50fSAvPlxuICAgIDwvV3JhcHBlZERyb3BCdXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wQnV0dG9uO1xuIiwiaW1wb3J0IERyb3BCdXR0b24gZnJvbSBcIi4vRHJvcEJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wQnV0dG9uO1xuIiwiaW1wb3J0IHsgTWVudSBhcyBHbWVudSB9IGZyb20gXCJncm9tbWV0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZE1lbnUgPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgTWVudTogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIGl0ZW1zLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRNZW51IGl0ZW1zPXtpdGVtc30gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R21lbnUgaXRlbXM9e2l0ZW1zfSB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkTWVudT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCJpbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCJpbXBvcnQgeyBOYXYgYXMgR25hdiB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IE5hdlByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZE5hdiA9IHN0eWxlZC5kaXY8TmF2UHJvcHM+YGA7XG5cbmNvbnN0IE5hdjogUmVhY3QuRkM8TmF2UHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZE5hdiBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHbmF2IHsuLi5wcm9wc30+e2NoaWxkcmVufTwvR25hdj5cbiAgICA8L1dyYXBwZWROYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iLCJpbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iLCJpbXBvcnQgeyBUYWJzIGFzIEd0YWJzIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFRhYnMgPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgVGFiczogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFRhYnMgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R3RhYnMgey4uLnByb3BzfSBvbkFjdGl2ZT17KCkgPT4gY29uc29sZS5sb2coXCJUYWJzXCIpfSAvPlxuICAgIDwvV3JhcHBlZFRhYnM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIiwiaW1wb3J0IFRhYnMgZnJvbSBcIi4vVGFic1wiO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi9BY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25QYW5lbCBmcm9tIFwiLi9BY2NvcmRpb25QYW5lbFwiO1xuaW1wb3J0IEFuY2hvciBmcm9tIFwiLi9BbmNob3JcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgRHJvcCBmcm9tIFwiLi9Ecm9wXCI7XG5pbXBvcnQgRHJvcEJ1dHRvbiBmcm9tIFwiLi9Ecm9wQnV0b25cIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XG5pbXBvcnQgVGFicyBmcm9tIFwiLi9UYWJzXCI7XG5leHBvcnQge1xuICBCdXR0b24sXG4gIEFjY29yZGlvbixcbiAgRHJvcCxcbiAgTWVudSxcbiAgQW5jaG9yLFxuICBBY2NvcmRpb25QYW5lbCxcbiAgTmF2LFxuICBUYWJzLFxuICBEcm9wQnV0dG9uLFxufTtcbiIsImltcG9ydCB7XG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIEFuY2hvcixcbiAgQnV0dG9uLFxuICBEcm9wLFxuICBEcm9wQnV0dG9uLFxuICBNZW51LFxuICBOYXYsXG4gIFRhYnMsXG59IGZyb20gXCIuL2NvbnRyb2xzXCI7XG5pbXBvcnQge1xuICBDaGVja0JveCxcbiAgQ2hlY2tCb3hHcm91cCxcbiAgRGF0ZUlucHV0LFxuICBGaWxlSW5wdXQsXG4gIEZvcm1GaWVsZCxcbiAgU2VsZWN0LFxuICBTZWxlY3RNdWx0aXBsZSxcbiAgVGV4dEFyZWEsXG4gIFRleHRJbnB1dCxcbn0gZnJvbSBcIi4vaW5wdXRzXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIEZvb3RlcixcbiAgR3JpZCxcbiAgSGVhZGVyLFxuICBNYWluLFxuICBPdmVybGF5LFxuICBQYWdlLFxuICBQYWdlQ29udGVudCxcbiAgUGFnZUhlYWRlcixcbiAgU2lkZUJhcixcbiAgU3RhY2ssXG59IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwsIEltYWdlLCBTdmcsIFZpZGVvIH0gZnJvbSBcIi4vbWVkaWFcIjtcbmltcG9ydCB7IEhlYWRpbmcsIFBhcmFncmFwaCwgVGFnLCBUZXh0IH0gZnJvbSBcIi4vdHlwb2dyYXBoeVwiO1xuXG5pbXBvcnQge1xuICBJbmZpbml0ZVNjcm9sbCxcbiAgS2V5Ym9hcmQsXG4gIE1hcmtkb3duLFxuICBTa2lwTGluayxcbiAgVGhlbWVTd2l0Y2hlcixcbn0gZnJvbSBcIi4vdXRpbHMvXCI7XG5cbmltcG9ydCB7IENpcmNsZSwgT3ZhbCwgUmVjdGFuZ2xlLCBTaGFwZSwgU3F1YXJlIH0gZnJvbSBcIi4vc2hhcGVzXCI7XG5cbmV4cG9ydCB7XG4gIEJ1dHRvbixcbiAgQm94LFxuICBQYWdlLFxuICBIZWFkZXIsXG4gIEZvb3RlcixcbiAgQ2FyZCxcbiAgVGhlbWVTd2l0Y2hlcixcbiAgUGFnZUNvbnRlbnQsXG4gIEhlYWRpbmcsXG4gIE1hcmtkb3duLFxuICBUZXh0LFxuICBQYXJhZ3JhcGgsXG4gIFRhZyxcbiAgVmlkZW8sXG4gIENhcm91c2VsLFxuICBJbWFnZSxcbiAgQ2hlY2tCb3gsXG4gIENoZWNrQm94R3JvdXAsXG4gIERhdGVJbnB1dCxcbiAgU2tpcExpbmssXG4gIEtleWJvYXJkLFxuICBJbmZpbml0ZVNjcm9sbCxcbiAgVGV4dElucHV0LFxuICBTZWxlY3QsXG4gIFNlbGVjdE11bHRpcGxlLFxuICBGb3JtRmllbGQsXG4gIEZpbGVJbnB1dCxcbiAgVGV4dEFyZWEsXG4gIERyb3AsXG4gIERyb3BCdXR0b24sXG4gIE1lbnUsXG4gIFRhYnMsXG4gIE5hdixcbiAgQW5jaG9yLFxuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvblBhbmVsLFxuICBHcmlkLFxuICBNYWluLFxuICBQYWdlSGVhZGVyLFxuICBTaWRlQmFyLFxuICBTdGFjayxcbiAgT3ZlcmxheSxcbiAgU3F1YXJlLFxuICBDaXJjbGUsXG4gIFJlY3RhbmdsZSxcbiAgT3ZhbCxcbiAgU2hhcGUsXG4gIFN2Zyxcbn07XG4iLCJpbXBvcnQgeyBDaGVja0JveCBhcyBHY2hlY2tCb3ggfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkQ2hlY2tCb3ggPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgQ2hlY2tCb3g6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRDaGVja0JveCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHY2hlY2tCb3ggey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZENoZWNrQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tCb3g7XG4iLCJpbXBvcnQgQ2hlY2tCb3ggZnJvbSBcIi4vQ2hlY2tCb3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tCb3g7XG4iLCJpbXBvcnQgeyBDaGVja0JveEdyb3VwIGFzIEdjaGVja0JveEdyb3VwIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZENoZWNrQm94ID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IENoZWNrQm94R3JvdXA6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBvcHRpb25zLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkQ2hlY2tCb3ggb3B0aW9ucz17b3B0aW9uc30gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2NoZWNrQm94R3JvdXAgey4uLnByb3BzfSBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgIDwvV3JhcHBlZENoZWNrQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tCb3hHcm91cDtcbiIsImltcG9ydCBDaGVja0JveEdyb3VwIGZyb20gXCIuL0NoZWNrQm94R3JvdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tCb3hHcm91cDtcbiIsImltcG9ydCB7IERhdGVJbnB1dCBhcyBHZGF0ZUlucHV0IH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZERhdGVJbnB1dCA9IHN0eWxlZC5kaXY8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBEYXRlSW5wdXQ6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWREYXRlSW5wdXQgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2RhdGVJbnB1dCB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkRGF0ZUlucHV0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZUlucHV0O1xuIiwiaW1wb3J0IERhdGVJbnB1dCBmcm9tIFwiLi9EYXRlSW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZUlucHV0O1xuIiwiaW1wb3J0IHsgRmlsZUlucHV0IGFzIEdmaWxlSW5wdXQgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkRmlsZUlucHV0ID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IEZpbGVJbnB1dDogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZEZpbGVJbnB1dCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHZmlsZUlucHV0IHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRGaWxlSW5wdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlSW5wdXQ7XG4iLCJpbXBvcnQgRmlsZUlucHV0IGZyb20gXCIuL0ZpbGVJbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlSW5wdXQ7XG4iLCJpbXBvcnQgeyBGb3JtRmllbGQgYXMgR2Zvcm1GaWVsZCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRGb3JtRmllbGQgPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgRm9ybUZpZWxkOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkRm9ybUZpZWxkIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdmb3JtRmllbGQgey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZEZvcm1GaWVsZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZDtcbiIsImltcG9ydCBGb3JtRmllbGQgZnJvbSBcIi4vRm9ybUZpZWxkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZDtcbiIsImltcG9ydCB7IE1hc2tlZElucHV0IGFzIEdtYXNrZWRJbnB1dCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRNYXNrZWRJbnB1dCA9IHN0eWxlZC5kaXY8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBNYXNrZWRJbnB1dDogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZE1hc2tlZElucHV0IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdtYXNrZWRJbnB1dCB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkTWFza2VkSW5wdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrZWRJbnB1dDtcbiIsImltcG9ydCBNYXNrZWRJbnB1dCBmcm9tIFwiLi9NYXNrZWRJbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrZWRJbnB1dDtcbiIsImltcG9ydCB7IFJhbmdlSW5wdXQgYXMgR3JhbmdlSW5wdXQgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkUmFuZ2VJbnB1dCA9IHN0eWxlZC5kaXY8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBSYW5nZUlucHV0OiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkUmFuZ2VJbnB1dCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHcmFuZ2VJbnB1dCB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkUmFuZ2VJbnB1dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlSW5wdXQ7XG4iLCJpbXBvcnQgUmFuZ2VJbnB1dCBmcm9tIFwiLi9SYW5nZUlucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlSW5wdXQ7XG4iLCJpbXBvcnQgeyBTZWxlY3QgYXMgR3JhbmdlU2VsZWN0IH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFNlbGVjdCA9IHN0eWxlZC5kaXY8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBTZWxlY3Q6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBvcHRpb25zLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkU2VsZWN0IG9wdGlvbnM9e29wdGlvbnN9IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdyYW5nZVNlbGVjdCB7Li4ucHJvcHN9IG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgPC9XcmFwcGVkU2VsZWN0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIiwiaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9TZWxlY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIiwiaW1wb3J0IHsgU2VsZWN0TXVsdGlwbGUgYXMgR3JhbmdlU2VsZWN0TXVsdGlwbGUgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkU2VsZWN0TXVsdGlwbGUgPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgU2VsZWN0TXVsdGlwbGU6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBvcHRpb25zLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkU2VsZWN0TXVsdGlwbGUgb3B0aW9ucz17b3B0aW9uc30gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R3JhbmdlU2VsZWN0TXVsdGlwbGUgey4uLnByb3BzfSBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgIDwvV3JhcHBlZFNlbGVjdE11bHRpcGxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TXVsdGlwbGU7XG4iLCJpbXBvcnQgU2VsZWN0TXVsdGlwbGUgZnJvbSBcIi4vU2VsZWN0TXVsdGlwbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TXVsdGlwbGU7XG4iLCJpbXBvcnQgeyBTdGFyUmF0aW5nIGFzIEdzdGFyUmF0aW5nIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRTdGFyUmF0aW5nID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFN0YXJSYXRpbmc6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBuYW1lLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkU3RhclJhdGluZyBuYW1lPXtuYW1lfSBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHc3RhclJhdGluZyB7Li4ucHJvcHN9IG5hbWU9e25hbWV9IC8+XG4gICAgPC9XcmFwcGVkU3RhclJhdGluZz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJSYXRpbmc7XG4iLCJpbXBvcnQgU3RhclJhdGluZyBmcm9tIFwiLi9TdGFyUmF0aW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJSYXRpbmc7XG4iLCJpbXBvcnQgeyBUZXh0QXJlYSBhcyBHdGV4dEFyZWEgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkVGV4dEFyZWEgPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgVGV4dEFyZWE6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBvcHRpb25zLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkVGV4dEFyZWEgb3B0aW9ucz17b3B0aW9uc30gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R3RleHRBcmVhIHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRUZXh0QXJlYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhO1xuIiwiaW1wb3J0IFRleHRBcmVhIGZyb20gXCIuL1RleHRBcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhO1xuIiwiaW1wb3J0IHsgVGV4dElucHV0IGFzIEd0ZXh0SW5wdXQgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkVGV4dElucHV0ID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFRleHRJbnB1dDogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFRleHRJbnB1dCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHdGV4dElucHV0IHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRUZXh0SW5wdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7XG4iLCJpbXBvcnQgVGV4dElucHV0IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7XG4iLCJpbXBvcnQgeyBUaHVtYnNSYXRpbmcgYXMgR3RodW1ic1JhdGluZyB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkVGh1bWJzUmF0aW5nID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFRodW1ic1JhdGluZzogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIG5hbWUsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRUaHVtYnNSYXRpbmcgbmFtZT17bmFtZX0gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R3RodW1ic1JhdGluZyB7Li4ucHJvcHN9IG5hbWU9e25hbWV9IC8+XG4gICAgPC9XcmFwcGVkVGh1bWJzUmF0aW5nPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGh1bWJzUmF0aW5nO1xuIiwiaW1wb3J0IFRodW1ic1JhdGluZyBmcm9tIFwiLi9UaHVtYnNSYXRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgVGh1bWJzUmF0aW5nO1xuIiwiaW1wb3J0IENoZWNrQm94IGZyb20gXCIuL0NoZWNrQm94XCI7XG5pbXBvcnQgQ2hlY2tCb3hHcm91cCBmcm9tIFwiLi9DaGVja0JveEdyb3VwXCI7XG5pbXBvcnQgRGF0ZUlucHV0IGZyb20gXCIuL0RhdGVJbnB1dFwiO1xuaW1wb3J0IEZpbGVJbnB1dCBmcm9tIFwiLi9GaWxlSW5wdXRcIjtcbmltcG9ydCBGb3JtRmllbGQgZnJvbSBcIi4vRm9ybUZpZWxkXCI7XG5pbXBvcnQgTWFza2VkSW5wdXQgZnJvbSBcIi4vTWFza2VkSW5wdXRcIjtcbmltcG9ydCBSYW5nZUlucHV0IGZyb20gXCIuL1JhbmdlSW5wdXRcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4vU2VsZWN0XCI7XG5pbXBvcnQgU2VsZWN0TXVsdGlwbGUgZnJvbSBcIi4vU2VsZWN0TXVsdGlwbGVcIjtcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gXCIuL1N0YXJSYXRpbmdcIjtcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi9UZXh0QXJlYVwiO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcbmltcG9ydCBUaHVtYnNSYXRpbmcgZnJvbSBcIi4vVGh1bWJzUmF0aW5nXCI7XG5leHBvcnQge1xuICBDaGVja0JveCxcbiAgQ2hlY2tCb3hHcm91cCxcbiAgRGF0ZUlucHV0LFxuICBGaWxlSW5wdXQsXG4gIFJhbmdlSW5wdXQsXG4gIE1hc2tlZElucHV0LFxuICBTZWxlY3QsXG4gIFNlbGVjdE11bHRpcGxlLFxuICBTdGFyUmF0aW5nLFxuICBUZXh0SW5wdXQsXG4gIFRodW1ic1JhdGluZyxcbiAgRm9ybUZpZWxkLFxuICBUZXh0QXJlYSxcbn07XG4iLCJpbXBvcnQgeyBCb3ggYXMgR2JveCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbi8vaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkQm94ID0gc3R5bGVkLmRpdjxCb3hQcm9wcz5gYDtcblxuY29uc3QgQm94OiBSZWFjdC5GQzxCb3hQcm9wcz4gPSAoe1xuICB0ZXN0SUQsXG4gIHBhZCxcbiAgZGlyZWN0aW9uLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZEJveCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHYm94IGRpcmVjdGlvbj17ZGlyZWN0aW9ufSBwYWQ9e3BhZH0gey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9HYm94PlxuICAgIDwvV3JhcHBlZEJveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiIsImltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiIsImltcG9ydCB7IENhcmQgYXMgR2NhcmQgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBDYXJkUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkQ2FyZCA9IHN0eWxlZC5kaXY8Q2FyZFByb3BzPmBgO1xuXG5jb25zdCBCb3g6IFJlYWN0LkZDPENhcmRQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBwYWQsXG4gIGRpcmVjdGlvbixcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRDYXJkIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdjYXJkIGRpcmVjdGlvbj17ZGlyZWN0aW9ufSBwYWQ9e3BhZH0gey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9HY2FyZD5cbiAgICA8L1dyYXBwZWRDYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IHsgRm9vdGVyIGFzIEdmb290ZXIgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5pbXBvcnQgeyBGb290ZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRGb290ZXIgPSBzdHlsZWQuZGl2PEZvb3RlclByb3BzPmBgO1xuXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDPEZvb3RlclByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIHBhZCxcbiAgZGlyZWN0aW9uLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZEZvb3RlciBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHZm9vdGVyIGRpcmVjdGlvbj17ZGlyZWN0aW9ufSBwYWQ9e3BhZH0gey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9HZm9vdGVyPlxuICAgIDwvV3JhcHBlZEZvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IHsgR3JpZCBhcyBHZ3JpZCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRHcmlkID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IEdyaWQ6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRHcmlkIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdncmlkIHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRHcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiIsImltcG9ydCBHcmlkIGZyb20gXCIuL0dyaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiIsImltcG9ydCB7IEhlYWRlciBhcyBHaGVhZGVyIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgS290aWlUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHRcIjtcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkSGVhZGVyID0gc3R5bGVkLmRpdjxCYXNlUHJvcHM+YGA7XG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPEJhc2VQcm9wcz4gPSAoe1xuICBwYWQsXG4gIGRpcmVjdGlvbixcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEtvdGlpVGhlbWVQcm92aWRlcj5cbiAgICAgIDxXcmFwcGVkSGVhZGVyPlxuICAgICAgICA8R2hlYWRlcj57Y2hpbGRyZW59PC9HaGVhZGVyPlxuICAgICAgPC9XcmFwcGVkSGVhZGVyPlxuICAgIDwvS290aWlUaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4vSGVhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgeyBNYWluIGFzIEdtYWluIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTWFpblByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZE1haW4gPSBzdHlsZWQuZGl2PE1haW5Qcm9wcz5gYDtcblxuY29uc3QgR3JpZDogUmVhY3QuRkM8TWFpblByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZE1haW4gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R21haW4gey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZE1haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkO1xuIiwiaW1wb3J0IE1haW4gZnJvbSBcIi4vTWFpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IHsgTGF5ZXIgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFBhZ2UgPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgT3ZlcmxheTogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFBhZ2UgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8TGF5ZXIgey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZFBhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5O1xuIiwiaW1wb3J0IE92ZXJsYXkgZnJvbSBcIi4vT3ZlcmxheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5O1xuIiwiaW1wb3J0IHsgUGFnZSBhcyBHcGFnZSB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkUGFnZSA9IHN0eWxlZC5kaXY8UGFnZVByb3BzPmBgO1xuXG5jb25zdCBQYWdlOiBSZWFjdC5GQzxQYWdlUHJvcHM+ID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFBhZ2U+XG4gICAgICA8R3BhZ2Ugey4uLnByb3BzfT57Y2hpbGRyZW59PC9HcGFnZT5cbiAgICA8L1dyYXBwZWRQYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuL1BhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCB7IFBhZ2VDb250ZW50IGFzIEdwYWdlQ29udGVudCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkUGFnZUNvbnRlbnQgPSBzdHlsZWQuZGl2PFBhZ2VQcm9wcz5gYDtcblxuY29uc3QgUGFnZUNvbnRlbnQ6IFJlYWN0LkZDPFBhZ2VQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFBhZ2VDb250ZW50IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdwYWdlQ29udGVudCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0dwYWdlQ29udGVudD5cbiAgICA8L1dyYXBwZWRQYWdlQ29udGVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb250ZW50O1xuIiwiaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gXCIuL1BhZ2VDb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb250ZW50O1xuIiwiaW1wb3J0IHsgUGFnZUhlYWRlciBhcyBHcGFnZUhlYWRlciB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkUGFnZSA9IHN0eWxlZC5kaXY8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBQYWdlSGVhZGVyOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkUGFnZSBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHcGFnZUhlYWRlciB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZWFkZXI7XG4iLCJpbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiLi9QYWdlSGVhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZWFkZXI7XG4iLCJpbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgU2lkZWJhclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFNpZGVCYXIgPSBzdHlsZWQuZGl2PFNpZGViYXJQcm9wcz5gYDtcblxuY29uc3QgU2lkZUJhcjogUmVhY3QuRkM8U2lkZWJhclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFNpZGVCYXIgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8U2lkZWJhciB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkU2lkZUJhcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG4iLCJpbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9TaWRlQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG4iLCJpbXBvcnQgeyBTdGFjayBhcyBHc3RhY2sgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkU3RhY2sgPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgU3RhY2s6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRTdGFjayBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHc3RhY2sgey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZFN0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhY2s7XG4iLCJpbXBvcnQgU3RhY2sgZnJvbSBcIi4vU3RhY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgU3RhY2s7XG4iLCJpbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBHcmlkIGZyb20gXCIuL0dyaWRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5pbXBvcnQgT3ZlcmxheSBmcm9tIFwiLi9PdmVybGF5XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlXCI7XG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSBcIi4vUGFnZUNvbnRlbnRcIjtcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCIuL1BhZ2VIZWFkZXJcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL1NpZGVCYXJcIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiLi9TdGFja1wiO1xuXG5leHBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIEhlYWRlcixcbiAgRm9vdGVyLFxuICBQYWdlLFxuICBQYWdlQ29udGVudCxcbiAgUGFnZUhlYWRlcixcbiAgU2lkZUJhcixcbiAgTWFpbixcbiAgU3RhY2ssXG4gIE92ZXJsYXksXG4gIEdyaWQsXG59O1xuIiwiaW1wb3J0IHsgQ2Fyb3VzZWwgYXMgR2Nhcm91c2VsIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZENhcm91c2VsID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IENhcm91c2VsOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkQ2Fyb3VzZWwgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2Nhcm91c2VsIHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRDYXJvdXNlbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIiwiaW1wb3J0IENhcm91c2VsIGZyb20gXCIuL0Nhcm91c2VsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIiwiaW1wb3J0IHsgSW1hZ2UgYXMgR2ltYWdlIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZEltYWdlID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IEltYWdlOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgdGVzdElEID0gXCJcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkSW1hZ2UgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2ltYWdlIHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRJbWFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuIiwiaW1wb3J0IEltYWdlIGZyb20gXCIuL0ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkU3ZnID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFN2ZzogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIHNyYyxcbiAgaW5saW5lID0gZmFsc2UsXG4gIGFzQ29tcG9uZW50LFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkU3ZnIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAge2lubGluZSAmJiBhc0NvbXBvbmVudCA/IGFzQ29tcG9uZW50IDogbnVsbH1cbiAgICA8L1dyYXBwZWRTdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdmc7XG5cbi8vIDxLb3RpaVRoZW1lUHJvdmlkZXI+XG4vLyAgICAgICA8V3JhcHBlZFN2ZyAgIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuLy8gICAgICAgICA8S290aWlTdmcgLz5cbi8vICAgICAgIDwvV3JhcHBlZFN2Zz5cbi8vICAgICA8L0tvdGlpVGhlbWVQcm92aWRlcj5cbiIsImltcG9ydCBTdmcgZnJvbSBcIi4vU3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFN2ZztcbiIsImltcG9ydCB7IFZpZGVvIGFzIEd2aWRlbyB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRWaWRlbyA9IHN0eWxlZC5kaXY8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBWaWRlbzogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFZpZGVvIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEd2aWRlbyB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkVmlkZW8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcbiIsImltcG9ydCBWaWRlbyBmcm9tIFwiLi9WaWRlb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcbiIsImltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCIuL0ltYWdlXCI7XG5pbXBvcnQgU3ZnIGZyb20gXCIuL1N2Z1wiO1xuaW1wb3J0IFZpZGVvIGZyb20gXCIuL1ZpZGVvXCI7XG5leHBvcnQgeyBDYXJvdXNlbCwgSW1hZ2UsIFZpZGVvLCBTdmcgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuaW1wb3J0IHsgdXNlS290aWlUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1wiO1xuaW1wb3J0IHsgY3JlYXRlSlNDU1NTY2hlbWEgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgU2hhcGVzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBDaXJjbGVQcm9wcyBleHRlbmRzIFNoYXBlcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xufVxuXG5jb25zdCBTdHlsZWRDaXJjbGUgPSBzdHlsZWQoXCJkaXZcIikoKHByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGNyZWF0ZUpTQ1NTU2NoZW1hKHByb3BzLCBcImNpcmNsZVwiKTtcbiAgY29uc29sZS5sb2coXCJUaGUgU0hBUEUgU1RZTEVTXCIsIHN0eWxlcyk7XG4gIHJldHVybiB7IC4uLnN0eWxlcyB9O1xufSk7XG5cbmNvbnN0IENpcmNsZTogUmVhY3QuRkM8Q2lyY2xlUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgbmFtZSxcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHRoZW1lcywgY2hhbmdlVGhlbWUsIHRoZW1lTW9kZSA9IFwiZGFya1wiIH0gPSB1c2VLb3RpaVRoZW1lKCk7XG4gIGNvbnN0IG5ld1Byb3BzID0geyAuLi5wcm9wcywgdGhlbWVNb2RlIH07XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZENpcmNsZSB7Li4ubmV3UHJvcHN9IHRoZW1lPXt0aGVtZX0gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICB7Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IG51bGx9XG4gICAgPC9TdHlsZWRDaXJjbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XG4iLCJpbXBvcnQgQ2lyY2xlIGZyb20gXCIuL0NpY2xlXCI7XG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbmltcG9ydCB7IHVzZUtvdGlpVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgY3JlYXRlSlNDU1NTY2hlbWEgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgU2hhcGVzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBTaGFwZVByb3BzIGV4dGVuZHMgU2hhcGVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IFN0eWxlZFNoYXBlID0gc3R5bGVkKFwiZGl2XCIpKChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSBjcmVhdGVKU0NTU1NjaGVtYShwcm9wcywgXCJvdmFsXCIpO1xuICBjb25zb2xlLmxvZyhcIlRoZSBTSEFQRSBTVFlMRVM6UmVjdGFuZ2xlXCIsIHN0eWxlcyk7XG4gIHJldHVybiB7IC4uLnN0eWxlcyB9O1xufSk7XG5cbmNvbnN0IE92YWw6IFJlYWN0LkZDPFNoYXBlUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgbmFtZSxcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHRoZW1lcywgY2hhbmdlVGhlbWUsIHRoZW1lTW9kZSA9IFwiZGFya1wiIH0gPSB1c2VLb3RpaVRoZW1lKCk7XG4gIGNvbnN0IG5ld1Byb3BzID0geyAuLi5wcm9wcywgdGhlbWVNb2RlIH07XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNoYXBlIHsuLi5uZXdQcm9wc30gdGhlbWU9e3RoZW1lfSBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIHtjaGlsZHJlbiA/IGNoaWxkcmVuIDogbnVsbH1cbiAgICA8L1N0eWxlZFNoYXBlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZhbDtcbiIsImltcG9ydCBPdmFsIGZyb20gXCIuL092YWxcIjtcbmV4cG9ydCBkZWZhdWx0IE92YWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbmltcG9ydCB7IHVzZUtvdGlpVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgY3JlYXRlSlNDU1NTY2hlbWEgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgU2hhcGVzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBTaGFwZVByb3BzIGV4dGVuZHMgU2hhcGVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IFN0eWxlZFNoYXBlID0gc3R5bGVkKFwiZGl2XCIpKChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSBjcmVhdGVKU0NTU1NjaGVtYShwcm9wcywgXCJyZWN0YW5nbGVcIik7XG4gIGNvbnNvbGUubG9nKFwiVGhlIFNIQVBFIFNUWUxFUzpSZWN0YW5nbGVcIiwgc3R5bGVzKTtcbiAgcmV0dXJuIHsgLi4uc3R5bGVzIH07XG59KTtcblxuY29uc3QgUmVjdGFuZ2xlOiBSZWFjdC5GQzxTaGFwZVByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIG5hbWUsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7IHRoZW1lLCB0aGVtZXMsIGNoYW5nZVRoZW1lLCB0aGVtZU1vZGUgPSBcImRhcmtcIiB9ID0gdXNlS290aWlUaGVtZSgpO1xuICBjb25zdCBuZXdQcm9wcyA9IHsgLi4ucHJvcHMsIHRoZW1lTW9kZSB9O1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTaGFwZSB7Li4ubmV3UHJvcHN9IHRoZW1lPXt0aGVtZX0gZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICB7Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IG51bGx9XG4gICAgPC9TdHlsZWRTaGFwZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbmltcG9ydCB7IHVzZUtvdGlpVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9cIjtcbmltcG9ydCB7IFNoYXBlcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlSlNDU1NTY2hlbWEgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuXG5pbnRlcmZhY2UgU3F1YXJlUHJvcHMgZXh0ZW5kcyBTaGFwZXMge1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG4vLyAxLiBEZWZpbmUgdGhlIHByb3BzIHRoYXQgdGhlIFN0eWxlZFNoYXBlIGNvbXBvbmVudCBhY3R1YWxseSBhY2NlcHRzXG5pbnRlcmZhY2UgU3R5bGVkU2hhcGVQcm9wcyB7XG4gIHRoZW1lPzogYW55O1xuICB0aGVtZU1vZGU/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIFwiZGF0YS10ZXN0aWRcIj86IHN0cmluZztcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIFtrZXk6IHN0cmluZ106IGFueTsgLy8gQWxsb3dzIG90aGVyIGR5bmFtaWMgcHJvcGVydGllcyBzcHJlYWQgZnJvbSBTaGFwZXNcbn1cblxuLy8gMi4gRXhwbGljaXRseSB0eXBlIHRoZSBzdHlsZWQgZmFjdG9yeSBmdW5jdGlvbiB3aXRoIDxTdHlsZWRTaGFwZVByb3BzPlxuLy8gQWx0ZXJuYXRpdmUgZ2VuZXJpYyBzeW50YXggc3RydWN0dXJlXG5jb25zdCBTdHlsZWRTaGFwZSA9IHN0eWxlZDxhbnk+KFwiZGl2XCIpKChwcm9wczogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiVGhlIFBST1BTXCIsIHByb3BzKTtcbiAgY29uc3Qgc2hhcGVOYW1lID0gcHJvcHM/Lm5hbWUgfHwgXCJzaGFwZVwiO1xuICBjb25zdCBzdHlsZXMgPSBjcmVhdGVKU0NTU1NjaGVtYShwcm9wcywgXCJjbGlwLXBhdGhcIiwgc2hhcGVOYW1lKTtcbiAgY29uc29sZS5sb2coXCJUaGUgU0hBUEUgU1RZTEVTXCIsIHN0eWxlcyk7XG4gIHJldHVybiB7IC4uLnN0eWxlcyB9O1xufSk7XG5cbmNvbnN0IFNoYXBlOiBSZWFjdC5GQzxTcXVhcmVQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBjaGlsZHJlbixcbiAgbmFtZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgeyB0aGVtZSwgdGhlbWVzLCBjaGFuZ2VUaGVtZSwgdGhlbWVNb2RlID0gXCJkYXJrXCIgfSA9IHVzZUtvdGlpVGhlbWUoKTtcbiAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLnByb3BzLCB0aGVtZU1vZGUgfTtcbiAgY29uc29sZS5sb2coXCJDaGFuZ2VUaGVtZU1vZGVcIiwgY2hhbmdlVGhlbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNoYXBlIHsuLi5uZXdQcm9wc30gdGhlbWU9e3RoZW1lfSBuYW1lPXtuYW1lfSBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIHtjaGlsZHJlbiA/IGNoaWxkcmVuIDogbnVsbH1cbiAgICA8L1N0eWxlZFNoYXBlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG4iLCJpbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcbmltcG9ydCB7IHVzZUtvdGlpVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9cIjtcbmltcG9ydCB7IFNoYXBlcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuLy8gaW1wb3J0IHsgZGVmYXVsdFZhbHVlcyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG4vLyBpbXBvcnQgKiBhcyBFUk9SUl9NRVNTQUdFUyBmcm9tIFwiLi9lcnJvcl9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgY3JlYXRlSlNDU1NTY2hlbWEgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuXG5pbnRlcmZhY2UgU3F1YXJlUHJvcHMgZXh0ZW5kcyBTaGFwZXMge1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG4vLyBjb25zdCBjaGVja0JhY2tncm91bmQgPSAoY29sb3JzLCBiYWNrZ3JvdW5kLCB0aGVtZU1vZGUpID0+IHtcbi8vICAgbGV0IGJhY2tncm91bmROYW1lID0gY29sb3JzW2JhY2tncm91bmQudG9Mb3dlckNhc2UoKV0gfHwgbnVsbDtcblxuLy8gICBjb25zb2xlLmxvZyhcInRoZUJhY2tncm91bmRCZWZvcmU7OztcIiwgYmFja2dyb3VuZCk7XG4vLyAgIGNvbnNvbGUubG9nKFwiVGhlIGJhY2tncm91bmRcIiwgY29sb3JzW2JhY2tncm91bmQudG9Mb3dlckNhc2UoKV0pO1xuLy8gICBjb25zb2xlLmxvZyhcImJhY2tncm91bmROYW1lXCIsIGJhY2tncm91bmROYW1lKTtcbi8vICAgaWYgKCFiYWNrZ3JvdW5kTmFtZSkgcmV0dXJuIGJhY2tncm91bmQ7XG5cbi8vICAgaWYgKHR5cGVvZiBiYWNrZ3JvdW5kTmFtZSA9PT0gXCJvYmplY3RcIikge1xuLy8gICAgIGlmICh0aGVtZU1vZGUgPT09IFwiZGFya1wiIHx8IHRoZW1lTW9kZSA9PT0gXCJsaWdodFwiKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInRoZW1lTU9ERSBJUyBkYXJrIG9yIGxpZ2h0XCIpO1xuLy8gICAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmROYW1lW3RoZW1lTW9kZV07XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuLy8gICAgIH1cbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZyhcInRoZW1lQmFja2dyb3VuIGlzIGEgc3RyaW5nXCIpO1xuLy8gICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kTmFtZTtcbi8vICAgfVxuLy8gICBjb25zb2xlLmxvZyhcIlRoZSBCYWNrZ3JvdW5kIEFmdGVyOzs7XCIsIGJhY2tncm91bmQpO1xuLy8gICByZXR1cm4gYmFja2dyb3VuZDtcbi8vIH07XG4vLyBjb25zdCBnaXZlSnNDc3NPYiA9IChwcm9wcykgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcIlRoZSBwYXNzZWQgcHJvcHNcIiwgcHJvcHMpO1xuLy8gICBjb25zb2xlLmxvZyhcIktPVElJVEhFTUUgUFJPVklERVI7OztcIiwgcHJvcHM/LnRoZW1lPy5nbG9iYWw/LmNvbG9ycyk7XG5cbi8vICAgbGV0IHdpZHRoID0gcHJvcHM/LndpZHRoID8gcHJvcHMud2lkdGggOiAwO1xuLy8gICBsZXQgaGVpZ2h0ID0gcHJvcHM/LmhlaWdodCA/IHByb3BzLmhlaWdodCA6IDA7XG4vLyAgIGxldCB0aGVtZUNvbG9ycyA9IHByb3BzPy50aGVtZT8uZ2xvYmFsPy5jb2xvcnNcbi8vICAgICA/IHByb3BzPy50aGVtZT8uZ2xvYmFsPy5jb2xvcnNcbi8vICAgICA6IG51bGw7XG4vLyAgIGxldCBiYWNrZ3JvdW5kID0gcHJvcHM/LmJhY2tncm91bmQgPyBwcm9wcy5iYWNrZ3JvdW5kIDogZGVmYXVsdFZhbHVlcy5jb2xvcjtcbi8vICAgbGV0IGlzQWxsRGltZW5zaW9uc1NldCA9IHdpZHRoICYmIGhlaWdodCA/IHRydWUgOiBmYWxzZTtcbi8vICAgYmFja2dyb3VuZCA9IHRoZW1lQ29sb3JzXG4vLyAgICAgPyBjaGVja0JhY2tncm91bmQodGhlbWVDb2xvcnMsIGJhY2tncm91bmQsIHByb3BzPy50aGVtZU1vZGUpXG4vLyAgICAgOiBiYWNrZ3JvdW5kO1xuXG4vLyAgIGxldCBpc09ubHlXaWR0aCA9IGlzQWxsRGltZW5zaW9uc1NldCA/IGZhbHNlIDogd2lkdGggPyB0cnVlIDogZmFsc2U7XG4vLyAgIGxldCBpc09ubHlIZWlnaHQgPSBpc0FsbERpbWVuc2lvbnNTZXQgPyBmYWxzZSA6IGhlaWdodCA/IHRydWUgOiBmYWxzZTtcblxuLy8gICBpZiAoaXNBbGxEaW1lbnNpb25zU2V0KSB7XG4vLyAgICAgaWYgKHdpZHRoICE9PSBoZWlnaHQpIHRocm93IG5ldyBFcnJvcihFUk9SUl9NRVNTQUdFUy5kaW1lbnNpb25zX21pc21hdGNoKTtcbi8vICAgfSBlbHNlIGlmIChpc09ubHlXaWR0aCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwib25seSB3aWR0aCBzZXRcIik7XG4vLyAgICAgaGVpZ2h0ID0gd2lkdGg7XG4vLyAgICAgY29uc29sZS5sb2coXCJ1cGRhdGUgdmFsdWUgb2YgaGVpZ2h0XCIsIGhlaWdodCk7XG4vLyAgIH0gZWxzZSBpZiAoaXNPbmx5SGVpZ2h0KSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJvbmx5IGhlaWdodCBzZXRcIik7XG4vLyAgICAgd2lkdGggPSBoZWlnaHQ7XG4vLyAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVkIHZhbHVlIG9mIHdpZHRoXCIsIHdpZHRoKTtcbi8vICAgfVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHdpZHRoOiB3aWR0aCxcbi8vICAgICBoZWlnaHQ6IGhlaWdodCxcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmQsXG4vLyAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4vLyAgIH07XG4vLyB9O1xuXG5jb25zdCBTdHlsZWRTcXVhcmUgPSBzdHlsZWQoXCJkaXZcIikoKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiVGhlIFBST1BTXCIsIHByb3BzKTtcbiAgY29uc3Qgc3R5bGVzID0gY3JlYXRlSlNDU1NTY2hlbWEocHJvcHMsIFwic3F1YXJlXCIpO1xuICBjb25zb2xlLmxvZyhcIlRoZSBTSEFQRSBTVFlMRVNcIiwgc3R5bGVzKTtcbiAgcmV0dXJuIHsgLi4uc3R5bGVzIH07XG59KTtcblxuY29uc3QgU3F1YXJlOiBSZWFjdC5GQzxTcXVhcmVQcm9wcz4gPSAoeyBjaGlsZHJlbiwgdGVzdElELCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHRoZW1lcywgY2hhbmdlVGhlbWUsIHRoZW1lTW9kZSA9IFwiZGFya1wiIH0gPSB1c2VLb3RpaVRoZW1lKCk7XG4gIGNvbnN0IG5ld1Byb3BzID0geyAuLi5wcm9wcywgdGhlbWVNb2RlIH07XG4gIGNvbnNvbGUubG9nKFwiQ2hhbmdlVGhlbWVNb2RlXCIsIGNoYW5nZVRoZW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTcXVhcmUgey4uLm5ld1Byb3BzfSB0aGVtZT17dGhlbWV9IGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBudWxsfVxuICAgIDwvU3R5bGVkU3F1YXJlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlO1xuIiwiaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9TcXVhcmVcIjtcbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTtcbiIsImNvbnN0IFNIQVBFU19DT0xPUiA9IFwicmVkXCI7XG5jb25zdCBTSEFQRV9TSVpFUyA9IFtcInh4c21hbGxcIiwgXCJ4c21hbGxcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCIsIFwieGxhcmdlXCJdO1xuZXhwb3J0IHsgU0hBUEVTX0NPTE9SLCBTSEFQRV9TSVpFUyB9O1xuIiwiY29uc3QgZGltZW5zaW9uc19taXNtYXRjaCA9XG4gIFwiV2lkdGggYW5kIGhlaWdodCBzaG91bGQgYmUgdGhlIHNhbWUgZm9yIGEgU3F1YXJlIFNoYXBlLCBwbGVhc2UgY2hlY2sgd2lkdGggYW5kIGhlaWdodCBwcm9wcyBwYXNzZWQgdG8gU3F1YXJlIGNvbXBvbmVudFwiO1xuY29uc3QgcHJvcGVydHlfaXNfbm90X3N1cHBvcnRlZCA9XG4gIFwicHJvcGVydHkgaXMgbm90IHN1cHBvcnRlZCBmb3IgdGhlIHNwZWNpZmllZCBpdGVtXCI7XG5jb25zdCBzdHJpbmdfdmFsdWVfY29uc3RhbnQgPSBcIlByb3BlcnR5IHZhbHVlIGlzIG5vdCB2YWxpZFwiO1xuY29uc3QgdmFsdWVfZm9ybWF0X3VucmVjb2duaXNlZCA9IFwiVGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBub3QgcmVjb2duaXNlZFwiO1xuXG5leHBvcnQge1xuICBkaW1lbnNpb25zX21pc21hdGNoLFxuICBwcm9wZXJ0eV9pc19ub3Rfc3VwcG9ydGVkLFxuICBzdHJpbmdfdmFsdWVfY29uc3RhbnQsXG4gIHZhbHVlX2Zvcm1hdF91bnJlY29nbmlzZWQsXG59O1xuIiwiaW1wb3J0IHsgZG9CYWNrZ3JvdW5kIH0gZnJvbSBcIi4vdXRpbHMvYmFja2dyb3VuZFwiO1xuaW1wb3J0IHsgZG9Cb3JkZXIgfSBmcm9tIFwiLi91dGlscy9ib3JkZXJcIjtcbmltcG9ydCB7IGRvQ2xpcHBlZFNoYXBlcyB9IGZyb20gXCIuL3V0aWxzL3NoYXBlc1wiO1xuaW1wb3J0IHsgRG9XaWR0aEhlaWdodFR5cGUgfSBmcm9tIFwiLi91dGlscy90eXBlc1wiO1xuaW1wb3J0IHsgZG9XaWR0aEhlaWdodCB9IGZyb20gXCIuL3V0aWxzL3dpZHRoXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVKU0NTU1NjaGVtYSA9IChwcm9wcywgc2hhcGUsIGNsaXBTaGFwZSA9IFwiXCIpID0+IHtcbiAgY29uc29sZS5sb2coXCJUaGUgcGFzc2VkIHByb3BzXCIsIHByb3BzKTtcbiAgY29uc29sZS5sb2coXCJLT1RJSVRIRU1FIFBST1ZJREVSOzs7XCIsIHByb3BzPy50aGVtZT8uZ2xvYmFsPy5jb2xvcnMpO1xuICBsZXQgdGhlbWVNb2RlID0gcHJvcHM/LnRoZW1lTW9kZTtcbiAgbGV0IHNpemUgPSBwcm9wcz8uc2l6ZSA/IHByb3BzLnNpemUgOiBudWxsO1xuXG4gIGxldCB3aWR0aEhlaWdodDogRG9XaWR0aEhlaWdodFR5cGUgPSBkb1dpZHRoSGVpZ2h0KHByb3BzLCBzaGFwZSwgc2l6ZSk7XG4gIGxldCBib3JkZXIgPSBkb0JvcmRlcihwcm9wcywgc2hhcGUsIHRoZW1lTW9kZSk7XG4gIGxldCBiYWNrZ3JvdW5kID0gZG9CYWNrZ3JvdW5kKHByb3BzLCBzaGFwZSwgdGhlbWVNb2RlKTtcbiAgbGV0IGNsaXBwZWRTaGFwZSA9IGNsaXBTaGFwZVxuICAgID8gZG9DbGlwcGVkU2hhcGVzKHByb3BzLCBjbGlwU2hhcGUsIHRoZW1lTW9kZSlcbiAgICA6IHt9O1xuICBjb25zb2xlLmxvZyhcInRoZSBXaWR0aGFuZCB0aGUgSEVJR0hUOzs7XCIsIHdpZHRoSGVpZ2h0KTtcblxuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZCxcbiAgICAuLi53aWR0aEhlaWdodCxcbiAgICAuLi5ib3JkZXIsXG4gICAgLi4uY2xpcHBlZFNoYXBlLFxuICAgIC8vIGJvcmRlcixcbiAgICAvLyBib3JkZXI6IFwic29saWQgcmVkIDJweFwiLFxuICB9O1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IGNoZWNrQmFja2dyb3VuZCA9IChjb2xvcnMsIGJhY2tncm91bmQsIHRoZW1lTW9kZSkgPT4ge1xuLy8gICBsZXQgYmFja2dyb3VuZE5hbWUgPSBjb2xvcnNbYmFja2dyb3VuZC50b0xvd2VyQ2FzZSgpXSB8fCBudWxsO1xuXG4vLyAgIGNvbnNvbGUubG9nKFwidGhlQmFja2dyb3VuZEJlZm9yZTs7O1wiLCBiYWNrZ3JvdW5kKTtcbi8vICAgY29uc29sZS5sb2coXCJUaGUgYmFja2dyb3VuZFwiLCBjb2xvcnNbYmFja2dyb3VuZC50b0xvd2VyQ2FzZSgpXSk7XG4vLyAgIGNvbnNvbGUubG9nKFwiYmFja2dyb3VuZE5hbWVcIiwgYmFja2dyb3VuZE5hbWUpO1xuLy8gICBpZiAoIWJhY2tncm91bmROYW1lKSByZXR1cm4gYmFja2dyb3VuZDtcblxuLy8gICBpZiAodHlwZW9mIGJhY2tncm91bmROYW1lID09PSBcIm9iamVjdFwiKSB7XG4vLyAgICAgaWYgKHRoZW1lTW9kZSA9PT0gXCJkYXJrXCIgfHwgdGhlbWVNb2RlID09PSBcImxpZ2h0XCIpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwidGhlbWVNT0RFIElTIGRhcmsgb3IgbGlnaHRcIik7XG4vLyAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZE5hbWVbdGhlbWVNb2RlXTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG4vLyAgICAgfVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKFwidGhlbWVCYWNrZ3JvdW4gaXMgYSBzdHJpbmdcIik7XG4vLyAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmROYW1lO1xuLy8gICB9XG4vLyAgIGNvbnNvbGUubG9nKFwiVGhlIEJhY2tncm91bmQgQWZ0ZXI7OztcIiwgYmFja2dyb3VuZCk7XG4vLyAgIHJldHVybiBiYWNrZ3JvdW5kO1xuLy8gfTtcblxuLy8gY29uc3QgZ2V0RGVmYXVsdFZhbHVlID0gKHByb0tleSwgaXNOdW1lcmljID0gZmFsc2UsIHRleHQgPSBcIlwiKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwiZ2V0RGVmYXVsdFZhbHVlOzs7XCIsIHByb0tleSwgaXNOdW1lcmljLCB0ZXh0KTtcbi8vICAgaWYgKGRlZmF1bHRWYWx1ZXNbcHJvS2V5XSkge1xuLy8gICAgIGlmIChpc051bWVyaWMpIHJldHVybiBkZWZhdWx0VmFsdWVzW3Byb0tleV1bXCJudW1lcmljXCJdO1xuLy8gICAgIGlmICghdGV4dCkgcmV0dXJuIGRlZmF1bHRWYWx1ZXNbcHJvS2V5XTtcbi8vICAgICBjb25zb2xlLmxvZyhcbi8vICAgICAgIFwiVmFsdWUgdG8gYmUgcmV0dXJuZWQgc3RyaW5nOzs7XCIsXG4vLyAgICAgICBkZWZhdWx0VmFsdWVzW3Byb0tleV1bXCJzdHJpbmdcIl1bdGV4dF1cbi8vICAgICApO1xuLy8gICAgIHJldHVybiBkZWZhdWx0VmFsdWVzW3Byb0tleV1bXCJzdHJpbmdcIl1bdGV4dF07XG4vLyAgIH1cbi8vICAgdGhyb3cgbmV3IEVycm9yKEVST1JSX01FU1NBR0VTLnByb3BlcnR5X2lzX25vdF9zdXBwb3J0ZWQpO1xuLy8gfTtcblxuLy8gY29uc3QgZ2V0VmVuZG9yVGhlbWVQcm9wcyA9ICh0aGVtZVByb3BzLCBwcm9wKTogYW55ID0+IHtcbi8vICAgcmV0dXJuIHRoZW1lUHJvcHM/LnRoZW1lPy5nbG9iYWxbcHJvcF1cbi8vICAgICA/IHRoZW1lUHJvcHM/LnRoZW1lPy5nbG9iYWxbcHJvcF1cbi8vICAgICA6IG51bGw7XG4vLyB9O1xuXG4vLyBleHBvcnQgY29uc3QgZXh0cmFjdFByb3BlcnR5ID0gKHByb3BlcnR5S2V5LCBwcm9wZXJ0eVNvdXJjZSkgPT4ge1xuLy8gICByZXR1cm4gcHJvcGVydHlTb3VyY2VbcHJvcGVydHlLZXldID8gcHJvcGVydHlTb3VyY2VbcHJvcGVydHlLZXldIDogZmFsc2U7XG4vLyB9O1xuXG4vLyBjb25zdCBjaGVja1Byb3BlcnR5VmFsdWUgPSAocHJvcGVydHlLZXksIHZhbHVlKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwiVGhlIFByb3BlcnR5Y2hlY2tWYWx1ZTs7O1wiLCB2YWx1ZSk7XG4vLyAgIGNvbnNvbGUubG9nKFwiVEhlUFJPUEVSIEtFWTs7XCIsIHByb3BlcnR5S2V5KTtcbi8vICAgY29uc29sZS5sb2coXCJUaGVUeXBlb0YgcHJvcGVydHlWYWx1ZTs7O1wiLCBudW1iZXJfY2hlY2tfcGF0dGVybi50ZXN0KHZhbHVlKSk7XG4vLyAgIGNvbnNvbGUubG9nKFwiU0hBUEUgU0laRVM7OztcIiwgU0hBUEVfU0laRVMpO1xuLy8gICBjb25zb2xlLmxvZyhcIlNIQVBFIFNJWkVTIElOQ0xVREVTXCIsIFNIQVBFX1NJWkVTLmluY2x1ZGVzKHZhbHVlKSk7XG4vLyAgIGlmICghdmFsdWUpIHJldHVybiB2YWx1ZTtcbi8vICAgaWYgKG51bWJlcl9jaGVja19wYXR0ZXJuLnRlc3QodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4vLyAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbi8vICAgICBpZiAoU0hBUEVfU0laRVMuaW5jbHVkZXModmFsdWUpKVxuLy8gICAgICAgcmV0dXJuIGdldERlZmF1bHRWYWx1ZShwcm9wZXJ0eUtleSwgZmFsc2UsIHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuLy8gICAgIHRocm93IG5ldyBFcnJvcihFUk9SUl9NRVNTQUdFUy5zdHJpbmdfdmFsdWVfY29uc3RhbnQpO1xuLy8gICB9XG5cbi8vICAgdGhyb3cgbmV3IEVycm9yKEVST1JSX01FU1NBR0VTLnZhbHVlX2Zvcm1hdF91bnJlY29nbmlzZWQpO1xuLy8gfTtcblxuLy8gY29uc3QgZG9XaWR0aEhlaWdodCA9IChcbi8vICAgcHJvcHM6IG9iamVjdCxcbi8vICAgc2hhcGU6IHN0cmluZyxcbi8vICAgc2l6ZTogc3RyaW5nIHwgbnVtYmVyXG4vLyApOiBEb1dpZHRoSGVpZ2h0VHlwZSA9PiB7XG4vLyAgIHNpemUgPyAocHJvcHNbXCJ3aWR0aFwiXSA9IHNpemUpIDogbnVsbDtcbi8vICAgbGV0IHdpZHRoID0gY2hlY2tQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIiwgZXh0cmFjdFByb3BlcnR5KFwid2lkdGhcIiwgcHJvcHMpKTtcbi8vICAgbGV0IGhlaWdodCA9IGNoZWNrUHJvcGVydHlWYWx1ZShcImhlaWdodFwiLCBleHRyYWN0UHJvcGVydHkoXCJoZWlnaHRcIiwgcHJvcHMpKTtcbi8vICAgY29uc29sZS5sb2coXCJkb1dpZHRoQW5kSGVpZ2h0Ozs7XCIsIHdpZHRoLCBoZWlnaHQpO1xuLy8gICBjb25zb2xlLmxvZyhcIlRoZSBTSEFQRVwiLCBzaGFwZSk7XG4vLyAgIHN3aXRjaCAoc2hhcGUpIHtcbi8vICAgICBjYXNlIFwic3F1YXJlXCI6XG4vLyAgICAgICBjb25zb2xlLmxvZyhcImNhc2UgaXMgU1FVQVJFXCIpO1xuLy8gICAgICAgcmV0dXJuIHNxdWFyZVdpZHRoSGVpZ2h0KHdpZHRoLCBoZWlnaHQsIHNoYXBlKTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgd2lkdGgsXG4vLyAgICAgaGVpZ2h0LFxuLy8gICB9O1xuLy8gfTtcblxuLy8gY29uc3QgZG9CYWNrZ3JvdW5kID0gKFxuLy8gICBwcm9wczogb2JqZWN0LFxuLy8gICBzaGFwZTogc3RyaW5nLFxuLy8gICB0aGVtZU1vZGU6IHN0cmluZ1xuLy8gKTogc3RyaW5nID0+IHtcbi8vICAgbGV0IGJhY2tncm91bmQgPVxuLy8gICAgIGV4dHJhY3RQcm9wZXJ0eShcImJhY2tncm91bmRcIiwgcHJvcHMpIHx8IGdldERlZmF1bHRWYWx1ZShcImJhY2tncm91bmRcIik7XG4vLyAgIGxldCB0aGVtZUNvbG9ycyA9IGdldFZlbmRvclRoZW1lUHJvcHMocHJvcHMsIFwiY29sb3JzXCIpO1xuXG4vLyAgIGJhY2tncm91bmQgPSB0aGVtZUNvbG9yc1xuLy8gICAgID8gY2hlY2tCYWNrZ3JvdW5kKHRoZW1lQ29sb3JzLCBiYWNrZ3JvdW5kLCB0aGVtZU1vZGUpXG4vLyAgICAgOiBiYWNrZ3JvdW5kO1xuXG4vLyAgIHJldHVybiBiYWNrZ3JvdW5kO1xuLy8gfTtcblxuLy8gY29uc3QgZG9Cb3JkZXIgPSAoXG4vLyAgIHByb3BzOiBvYmplY3QsXG4vLyAgIHNoYXBlOiBzdHJpbmcsXG4vLyAgIHRoZW1lTW9kZTogc3RyaW5nXG4vLyApOiBzdHJpbmcgfCBvYmplY3QgPT4ge1xuLy8gICBsZXQgYmFja2dyb3VuZCA9XG4vLyAgICAgZXh0cmFjdFByb3BlcnR5KFwiYmFja2dyb3VuZFwiLCBwcm9wcykgfHwgZ2V0RGVmYXVsdFZhbHVlKFwiYmFja2dyb3VuZFwiKTtcbi8vICAgbGV0IHRoZW1lQ29sb3JzID0gZ2V0VmVuZG9yVGhlbWVQcm9wcyhwcm9wcywgXCJjb2xvcnNcIik7XG5cbi8vICAgYmFja2dyb3VuZCA9IHRoZW1lQ29sb3JzXG4vLyAgICAgPyBjaGVja0JhY2tncm91bmQodGhlbWVDb2xvcnMsIGJhY2tncm91bmQsIHRoZW1lTW9kZSlcbi8vICAgICA6IGJhY2tncm91bmQ7XG5cbi8vICAgcmV0dXJuIGJhY2tncm91bmQ7XG4vLyB9O1xuXG4vLyBjb25zdCBzcXVhcmVXaWR0aEhlaWdodCA9ICh3aWR0aCwgaGVpZ2h0LCBzaGFwZSk6IERvV2lkdGhIZWlnaHRUeXBlID0+IHtcbi8vICAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KVxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICB3aWR0aDogZ2V0RGVmYXVsdFZhbHVlKFwid2lkdGhcIiwgdHJ1ZSksXG4vLyAgICAgICBoZWlnaHQ6IGdldERlZmF1bHRWYWx1ZShcImhlaWdodFwiLCB0cnVlKSxcbi8vICAgICB9O1xuLy8gICBpZiAoIXdpZHRoKSByZXR1cm4geyB3aWR0aDogaGVpZ2h0LCBoZWlnaHQgfTtcbi8vICAgaWYgKCFoZWlnaHQpIHJldHVybiB7IHdpZHRoLCBoZWlnaHQ6IHdpZHRoIH07XG4vLyAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbi8vIH07XG4iLCJpbXBvcnQgQ2lyY2xlIGZyb20gXCIuL0NpcmNsZVwiO1xuaW1wb3J0IE92YWwgZnJvbSBcIi4vT3ZhbFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9TcXVhcmVcIjtcblxuZXhwb3J0IHsgU3F1YXJlLCBDaXJjbGUsIFJlY3RhbmdsZSwgT3ZhbCwgU2hhcGUgfTtcbiIsImNvbnN0IG51bWJlcl9jaGVja19wYXR0ZXJuOiBSZWdFeHAgPSAvXlxcZCskLztcbmNvbnN0IHNwbGl0X3N0cmluZ19ieV9zcGFjZTogUmVnRXhwID0gL1xccy9nO1xuY29uc3Qgc3RyaW5nX2NoZWNrX3BhdHRlcm46IFJlZ0V4cCA9IC9cXEQqLztcbmV4cG9ydCB7IG51bWJlcl9jaGVja19wYXR0ZXJuLCBzcGxpdF9zdHJpbmdfYnlfc3BhY2UsIHN0cmluZ19jaGVja19wYXR0ZXJuIH07XG4iLCJpbXBvcnQgeyBleHRyYWN0UHJvcGVydHkgfSBmcm9tIFwiLi9la3N0cmFjdG9yc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFZhbHVlLCBnZXRWZW5kb3JUaGVtZVByb3BzIH0gZnJvbSBcIi4vZ2V0dGVyc1wiO1xuY29uc3QgY2hlY2tCYWNrZ3JvdW5kID0gKGNvbG9ycywgYmFja2dyb3VuZCwgdGhlbWVNb2RlKSA9PiB7XG4gIGxldCBiYWNrZ3JvdW5kTmFtZSA9IGNvbG9yc1tiYWNrZ3JvdW5kLnRvTG93ZXJDYXNlKCldIHx8IG51bGw7XG5cbiAgY29uc29sZS5sb2coXCJ0aGVCYWNrZ3JvdW5kQmVmb3JlOzs7XCIsIGJhY2tncm91bmQpO1xuICBjb25zb2xlLmxvZyhcIlRoZSBiYWNrZ3JvdW5kXCIsIGNvbG9yc1tiYWNrZ3JvdW5kLnRvTG93ZXJDYXNlKCldKTtcbiAgY29uc29sZS5sb2coXCJiYWNrZ3JvdW5kTmFtZVwiLCBiYWNrZ3JvdW5kTmFtZSk7XG4gIGlmICghYmFja2dyb3VuZE5hbWUpIHJldHVybiBiYWNrZ3JvdW5kO1xuXG4gIGlmICh0eXBlb2YgYmFja2dyb3VuZE5hbWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBpZiAodGhlbWVNb2RlID09PSBcImRhcmtcIiB8fCB0aGVtZU1vZGUgPT09IFwibGlnaHRcIikge1xuICAgICAgY29uc29sZS5sb2coXCJ0aGVtZU1PREUgSVMgZGFyayBvciBsaWdodFwiKTtcbiAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kTmFtZVt0aGVtZU1vZGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJ0aGVtZUJhY2tncm91biBpcyBhIHN0cmluZ1wiKTtcbiAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZE5hbWU7XG4gIH1cbiAgY29uc29sZS5sb2coXCJUaGUgQmFja2dyb3VuZCBBZnRlcjs7O1wiLCBiYWNrZ3JvdW5kKTtcbiAgcmV0dXJuIGJhY2tncm91bmQ7XG59O1xuXG5jb25zdCBkb0JhY2tncm91bmQgPSAoXG4gIHByb3BzOiBvYmplY3QsXG4gIHNoYXBlOiBzdHJpbmcsXG4gIHRoZW1lTW9kZTogc3RyaW5nXG4pOiBzdHJpbmcgPT4ge1xuICBsZXQgYmFja2dyb3VuZCA9XG4gICAgZXh0cmFjdFByb3BlcnR5KFwiYmFja2dyb3VuZFwiLCBwcm9wcykgfHwgZ2V0RGVmYXVsdFZhbHVlKFwiYmFja2dyb3VuZFwiKTtcbiAgbGV0IHRoZW1lQ29sb3JzID0gZ2V0VmVuZG9yVGhlbWVQcm9wcyhwcm9wcywgXCJjb2xvcnNcIik7XG5cbiAgYmFja2dyb3VuZCA9IHRoZW1lQ29sb3JzXG4gICAgPyBjaGVja0JhY2tncm91bmQodGhlbWVDb2xvcnMsIGJhY2tncm91bmQsIHRoZW1lTW9kZSlcbiAgICA6IGJhY2tncm91bmQ7XG5cbiAgcmV0dXJuIGJhY2tncm91bmQ7XG59O1xuXG5leHBvcnQgeyBkb0JhY2tncm91bmQgfTtcbiIsImltcG9ydCB7IG51bWJlcl9jaGVja19wYXR0ZXJuLCBzcGxpdF9zdHJpbmdfYnlfc3BhY2UgfSBmcm9tIFwiLi4vcGF0dGVybnNcIjtcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4vY29sb3JzXCI7XG5pbXBvcnQgeyBkZWZhdWx0VmFsdWVzIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGV4dHJhY3RQcm9wZXJ0eSB9IGZyb20gXCIuL2Vrc3RyYWN0b3JzXCI7XG5pbXBvcnQgeyBCb3JkZXJMaW5lVHlwZSwgQm9yZGVyV2lkdGggfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcbi8vIGltcG9ydCB7IGdldERlZmF1bHRWYWx1ZSwgZ2V0VmVuZG9yVGhlbWVQcm9wcyB9IGZyb20gXCIuL2dldHRlcnNcIjtcblxuZXhwb3J0IGNvbnN0IGRvQm9yZGVyID0gKHByb3BzLCBzaGFwZSwgdGhlbWVNT0RFKTogb2JqZWN0ID0+IHtcbiAgbGV0IGJvcmRlciA9IGV4dHJhY3RQcm9wZXJ0eShcImJvcmRlclwiLCBwcm9wcyk7XG4gIGNvbnNvbGUubG9nKFwiVEhFIEJPUkRFUlwiLCBwcm9wcyk7XG4gIGNvbnNvbGUubG9nKFwiVEhFIEJPUkRFUiBFWFRSQUNURUQ7OztcIiwgYm9yZGVyKTtcbiAgY29uc3QgeyBib3JkZXI6IGRlZmF1bHRCb3JkZXIgfSA9IGRlZmF1bHRWYWx1ZXM7XG4gIGNvbnN0IHsgd2lkdGg6IGJvcmRlcldpZHRoIH0gPSBkZWZhdWx0Qm9yZGVyO1xuICBpZiAoIWJvcmRlcikgcmV0dXJuIHt9O1xuICBsZXQgc3BsaXRCb3JkZXIgPSBzcGxpdEJvcmRlclN0cmluZyhib3JkZXIsIHNwbGl0X3N0cmluZ19ieV9zcGFjZSk7XG4gIGxldCByYXdCb3JkZXIgPSBib3JkZXJXaWR0aFtzcGxpdEJvcmRlclswXV0gfHwgc3BsaXRCb3JkZXJbMF07XG5cbiAgY29uc29sZS5sb2coXCJUaGVSYXdCb3JkZXI7OztcIiwgcmF3Qm9yZGVyKTtcbiAgbGV0IG51bWVyaWNlQm9yZGVyID0gcmF3Qm9yZGVyID8gc2V0TWVhc3VyZW1lbnRVbml0KHJhd0JvcmRlciwgXCJweFwiKSA6IDA7XG4gIGNvbnNvbGUubG9nKFwiVEhFIE5VTUVSSUMgQk9SREVSOzs7XCIsIG51bWVyaWNlQm9yZGVyKTtcbiAgbGV0IHRleHRPck51bWVyaWNCb3JkZXIgPSByYXdCb3JkZXIgPyByYXdCb3JkZXIgOiBudW1lcmljZUJvcmRlcjtcbiAgY29uc29sZS5sb2coXCJCT1JERVIgU1BMSVRcIiwgc3BsaXRCb3JkZXIpO1xuICBpZiAodGV4dE9yTnVtZXJpY0JvcmRlcikge1xuICAgIGxldCBoYW5kbGVkQm9yZGVyID0gaGFuZGxlQm9yZGVyKFxuICAgICAgc3BsaXRCb3JkZXIsXG4gICAgICBkZWZhdWx0VmFsdWVzLmJvcmRlcixcbiAgICAgIG51bWVyaWNlQm9yZGVyXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZUJvcmRlcjs7O1wiLCBoYW5kbGVkQm9yZGVyKTtcbiAgICByZXR1cm4gaGFuZGxlZEJvcmRlcjtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJvcmRlcixcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBib3JkZXJCeVN0cmluZyA9IChib3JkZXJTdHJpbmc6IHN0cmluZyk6IG9iamVjdCA9PiB7XG4gIGNvbnN0IHsgYm9yZGVyIH0gPSBkZWZhdWx0VmFsdWVzO1xuICBjb25zdCB7IHdpZHRoIH0gPSBib3JkZXI7XG4gIGNvbnN0IHNldEJvcmRlciA9IHdpZHRoW2JvcmRlclN0cmluZ10gfHwgXCJcIjtcblxuICBpZiAoc2V0Qm9yZGVyKSB7XG4gICAgaWYgKHNldEJvcmRlciA9PT0gXCJub25lXCIpIHJldHVybiBzZXRCb3JkZXI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvcmRlcixcbiAgfTtcbn07XG5cbmNvbnN0IHNwbGl0Qm9yZGVyU3RyaW5nID0gKFxuICBib3JkZXJTdHJpbmc6IHN0cmluZyxcbiAgc3BsaXRCeTogc3RyaW5nIHwgUmVnRXhwXG4pOiBzdHJpbmdbXSA9PiB7XG4gIHJldHVybiBib3JkZXJTdHJpbmcudHJpbSgpLnNwbGl0KHNwbGl0QnkpO1xufTtcblxuY29uc3QgaGFuZGxlQm9yZGVyID0gKFxuICBib3JkZXJEaWN0OiBzdHJpbmdbXSxcbiAgZGVmYXVsdEJvcmRlcjogeyB3aWR0aDogQm9yZGVyV2lkdGg7IGxpbmVzOiBCb3JkZXJMaW5lVHlwZTsgY29sb3I6IHN0cmluZyB9LFxuICBzZXRCb3JkZXI6IHN0cmluZyB8IG51bWJlclxuKTogb2JqZWN0ID0+IHtcbiAgY29uc29sZS5sb2coXCJCb3JkZXJEaWN0aW9uYXJ5XCIsIGJvcmRlckRpY3QpO1xuICBjb25zb2xlLmxvZyhcIkJvcmRlckRpY3Rpb25hcnlcIiwgYm9yZGVyRGljdFsyXSk7XG4gIGNvbnNvbGUubG9nKFwiQm9yZGVyRGljdGlvbmFyeVwiLCBjb2xvcnNbYm9yZGVyRGljdFsyXV0pO1xuICBjb25zb2xlLmxvZyhcIkJvcmRlckRpY3Rpb25hcnlcIiwgY29sb3JzKTtcblxuICBsZXQgeyBsaW5lcywgY29sb3IgfSA9IGRlZmF1bHRCb3JkZXI7XG4gIGxldCBib3JkZXJXaWR0aDogQm9yZGVyV2lkdGggfCBzdHJpbmcgfCBudW1iZXIgPSBzZXRCb3JkZXI7XG4gIGxldCBib3JkZXJTdHlsZTogQm9yZGVyTGluZVR5cGUgPSBib3JkZXJEaWN0WzFdXG4gICAgPyBsaW5lc1tib3JkZXJEaWN0WzFdXVxuICAgIDogbGluZXM/LnNvbGlkO1xuICBsZXQgYm9yZGVyQ29sb3IgPSBib3JkZXJEaWN0WzJdID8gYm9yZGVyRGljdFsyXSA6IGNvbG9yO1xuICBsZXQgYm9yZGVyTGVuID0gYm9yZGVyRGljdC5sZW5ndGg7XG5cbiAgbGV0IHNpZGVzID0gYm9yZGVyTGVuID4gMyA/IGJvcmRlckRpY3Quc2xpY2UoMywgYm9yZGVyTGVuKSA6IFtdO1xuICBsZXQgYm9yZGVyU2lkZXMgPSB7fTtcbiAgc2lkZXNcbiAgICA/IHNpZGVzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBsZXQgc3BsaXRCb3JkZXJTaWRlID0gc3BsaXRCb3JkZXJTdHJpbmcoaXRlbSwgXCI6XCIpO1xuICAgICAgICBsZXQgaXNWZXJ0aWNhbE9ySG9yaXpvbnRhbCA9XG4gICAgICAgICAgc3BsaXRCb3JkZXJTaWRlWzBdID09PSBcInZlcnRpY2FsXCJcbiAgICAgICAgICAgID8gW1widG9wXCIsIFwiYm90dG9tXCJdXG4gICAgICAgICAgICA6IHNwbGl0Qm9yZGVyU2lkZVswXSA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgID8gW1wibGVmdFwiLCBcInJpZ2h0XCJdXG4gICAgICAgICAgICA6IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNQTElUOkJPUkRFUlwiLCBzcGxpdEJvcmRlclNpZGUpO1xuICAgICAgICBsZXQgZmlyc3RJdGVtU3BsaXQgPVxuICAgICAgICAgIGlzVmVydGljYWxPckhvcml6b250YWwubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBpc1ZlcnRpY2FsT3JIb3Jpem9udGFsXG4gICAgICAgICAgICA6IHNwbGl0Qm9yZGVyU3RyaW5nKHNwbGl0Qm9yZGVyU2lkZVswXSwgXCItXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklSU1RJVEVNOlwiLCBmaXJzdEl0ZW1TcGxpdCk7XG5cbiAgICAgICAgZmlyc3RJdGVtU3BsaXQubGVuZ3RoID4gMVxuICAgICAgICAgID8gZmlyc3RJdGVtU3BsaXQubWFwKChiU2lkZSwgaSkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVCb3JkZXJTaWRlcyhib3JkZXJTaWRlcywgYlNpZGUsIGAke3NwbGl0Qm9yZGVyU2lkZVsxXX1gKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBoYW5kbGVCb3JkZXJTaWRlcyhcbiAgICAgICAgICAgICAgYm9yZGVyU2lkZXMsXG4gICAgICAgICAgICAgIHNwbGl0Qm9yZGVyU2lkZVswXSxcbiAgICAgICAgICAgICAgc3BsaXRCb3JkZXJTaWRlWzFdXG4gICAgICAgICAgICApO1xuICAgICAgfSlcbiAgICA6IFwiXCI7XG5cbiAgcmV0dXJuIHtcbiAgICBib3JkZXJXaWR0aCxcbiAgICBib3JkZXJTdHlsZSxcbiAgICBib3JkZXJDb2xvcixcbiAgICAuLi5ib3JkZXJTaWRlcyxcbiAgfTtcbn07XG5cbmNvbnN0IHNldE1lYXN1cmVtZW50VW5pdCA9ICh0YXJnZXQ6IHN0cmluZywgdW5pdDogc3RyaW5nID0gXCJweFwiKSA9PiB7XG4gIGlmIChudW1iZXJfY2hlY2tfcGF0dGVybi50ZXN0KHRhcmdldCkpIHtcbiAgICByZXR1cm4gYCR7dGFyZ2V0fSR7dW5pdH1gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUJvcmRlclNpZGVzID0gKFxuICBvYjogb2JqZWN0LFxuICBib3JkZXJTaWRlOiBzdHJpbmcsXG4gIGJvcmRlclNpZGVJdGVtczogc3RyaW5nXG4pOiBvYmplY3QgPT4ge1xuICBsZXQgc3BsaXRCb3JkZXJTaWRlVmFsdWVzID0gc3BsaXRCb3JkZXJTdHJpbmcoYm9yZGVyU2lkZUl0ZW1zLCBcIi1cIik7XG4gIGxldCBib3JkZXJTaWRlV2lkdGggPSBzcGxpdEJvcmRlclNpZGVWYWx1ZXNbMF07XG4gIGxldCBib3JkZXJTaWRlU3R5bGUgPSBzcGxpdEJvcmRlclNpZGVWYWx1ZXNbMV07XG4gIGxldCBib3JkZXJTaWRlQ29sb3IgPSBzcGxpdEJvcmRlclNpZGVWYWx1ZXNbMl07XG5cbiAgb2JbYGJvcmRlciR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGJvcmRlclNpZGUpfWBdID0gYCR7c2V0TWVhc3VyZW1lbnRVbml0KFxuICAgIGJvcmRlclNpZGVXaWR0aFxuICApfSAke2JvcmRlclNpZGVTdHlsZX0gJHtib3JkZXJTaWRlQ29sb3J9YDtcblxuICByZXR1cm4gb2I7XG59O1xuIiwiaW1wb3J0IHsgU0hBUEVfU0laRVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBFUk9SUl9NRVNTQUdFUyBmcm9tIFwiLi4vZXJyb3JfbWVzc2FnZXNcIjtcbmltcG9ydCB7IG51bWJlcl9jaGVja19wYXR0ZXJuIH0gZnJvbSBcIi4uL3BhdHRlcm5zXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0VmFsdWUgfSBmcm9tIFwiLi9nZXR0ZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjaGVja1Byb3BlcnR5VmFsdWUgPSAocHJvcGVydHlLZXksIHZhbHVlKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiVGhlIFByb3BlcnR5Y2hlY2tWYWx1ZTs7O1wiLCB2YWx1ZSk7XG4gIGNvbnNvbGUubG9nKFwiVEhlUFJPUEVSIEtFWTs7XCIsIHByb3BlcnR5S2V5KTtcbiAgY29uc29sZS5sb2coXCJUaGVUeXBlb0YgcHJvcGVydHlWYWx1ZTs7O1wiLCBudW1iZXJfY2hlY2tfcGF0dGVybi50ZXN0KHZhbHVlKSk7XG4gIGNvbnNvbGUubG9nKFwiU0hBUEUgU0laRVM7OztcIiwgU0hBUEVfU0laRVMpO1xuICBjb25zb2xlLmxvZyhcIlNIQVBFIFNJWkVTIElOQ0xVREVTXCIsIFNIQVBFX1NJWkVTLmluY2x1ZGVzKHZhbHVlKSk7XG4gIGlmICghdmFsdWUpIHJldHVybiB2YWx1ZTtcbiAgaWYgKG51bWJlcl9jaGVja19wYXR0ZXJuLnRlc3QodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAoU0hBUEVfU0laRVMuaW5jbHVkZXModmFsdWUpKVxuICAgICAgcmV0dXJuIGdldERlZmF1bHRWYWx1ZShwcm9wZXJ0eUtleSwgZmFsc2UsIHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICAgIHRocm93IG5ldyBFcnJvcihFUk9SUl9NRVNTQUdFUy5zdHJpbmdfdmFsdWVfY29uc3RhbnQpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKEVST1JSX01FU1NBR0VTLnZhbHVlX2Zvcm1hdF91bnJlY29nbmlzZWQpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAgYGFsaWNlYmx1ZWAsXG4gIGBhbnRpcXVld2hpdGVgLFxuICBgYXF1YWAsXG4gIGBhcXVhbWFyaW5lYCxcbiAgYGF6dXJlYCxcbiAgYGJlaWdlYCxcbiAgYGJpc3F1ZWAsXG4gIGBibGFja2AsXG4gIGBibGFuY2hlZGFsbW9uZGAsXG4gIGBibHVlYCxcbiAgYGJsdWV2aW9sZXRgLFxuICBgYnJvd25gLFxuICBgYnVybHl3b29kYCxcbiAgYGNhZGV0Ymx1ZWAsXG4gIGBjaGFydHJldXNlYCxcbiAgYGNob2NvbGF0ZWAsXG4gIGBjb3JhbGAsXG4gIGBjb3JuZmxvd2VyYmx1ZWAsXG4gIGBjb3Juc2lsa2AsXG4gIGBjcmltc29uYCxcbiAgYGN5YW5gLFxuICBgZGFya2JsdWVgLFxuICBgZGFya2N5YW5gLFxuICBgZGFya2dvbGRlbnJvZGAsXG4gIGBkYXJrZ3JheWAsXG4gIGBkYXJrZ3JleWAsXG4gIGBkYXJrZ3JlZW5gLFxuICBgZGFya2toYWtpYCxcbiAgYGRhcmttYWdlbnRhYCxcbiAgYGRhcmtvbGl2ZWdyZWVuYCxcbiAgYGRhcmtvcmFuZ2VgLFxuICBgZGFya29yY2hpZGAsXG4gIGBkYXJrcmVkYCxcbiAgYGRhcmtzYWxtb25gLFxuICBgZGFya3NlYWdyZWVuYCxcbiAgYGRhcmtzbGF0ZWJsdWVgLFxuICBgZGFya3NsYXRlZ3JheWAsXG4gIGBkYXJrc2xhdGVncmV5YCxcbiAgYGRhcmt0dXJxdW9pc2VgLFxuICBgZGFya3Zpb2xldGAsXG4gIGBkZWVwcGlua2AsXG4gIGBkZWVwc2t5Ymx1ZWAsXG4gIGBkaW1ncmF5YCxcbiAgYGRpbWdyZXlgLFxuICBgZG9kZ2VyYmx1ZWAsXG4gIGBmaXJlYnJpY2tgLFxuICBgZmxvcmFsd2hpdGVgLFxuICBgZm9yZXN0Z3JlZW5gLFxuICBgZnVjaHNpYWAsXG4gIGBnYWluc2Jvcm9gLFxuICBgZ2hvc3R3aGl0ZWAsXG4gIGBnb2xkYCxcbiAgYGdvbGRlbnJvZGAsXG4gIGBncmF5YCxcbiAgYGdyZXlgLFxuICBgZ3JlZW5gLFxuICBgZ3JlZW55ZWxsb3dgLFxuICBgaG9uZXlkZXdgLFxuICBgaG90cGlua2AsXG4gIGBpbmRpYW5yZWRgLFxuICBgaW5kaWdvYCxcbiAgYGl2b3J5YCxcbiAgYGtoYWtpYCxcbiAgYGxhdmVuZGVyYCxcbiAgYGxhdmVuZGVyYmx1c2hgLFxuICBgbGF3bmdyZWVuYCxcbiAgYGxlbW9uY2hpZmZvbmAsXG4gIGBsaWdodGJsdWVgLFxuICBgbGlnaHRjb3JhbGAsXG4gIGBsaWdodGN5YW5gLFxuICBgbGlnaHRnb2xkZW5yb2R5ZWxsb3dgLFxuICBgbGlnaHRncmF5YCxcbiAgYGxpZ2h0Z3JleWAsXG4gIGBsaWdodGdyZWVuYCxcbiAgYGxpZ2h0cGlua2AsXG4gIGBsaWdodHNhbG1vbmAsXG4gIGBsaWdodHNlYWdyZWVuYCxcbiAgYGxpZ2h0c2t5Ymx1ZWAsXG4gIGBsaWdodHNsYXRlZ3JheWAsXG4gIGBsaWdodHNsYXRlZ3JleWAsXG4gIGBsaWdodHN0ZWVsYmx1ZWAsXG4gIGBsaWdodHllbGxvd2AsXG4gIGBsaW1lYCxcbiAgYGxpbWVncmVlbmAsXG4gIGBsaW5lbmAsXG4gIGBtYWdlbnRhYCxcbiAgYG1hcm9vbmAsXG4gIGBtZWRpdW1hcXVhbWFyaW5lYCxcbiAgYG1lZGl1bWJsdWVgLFxuICBgbWVkaXVtb3JjaGlkYCxcbiAgYG1lZGl1bXB1cnBsZWAsXG4gIGBtZWRpdW1zZWFncmVlbmAsXG4gIGBtZWRpdW1zbGF0ZWJsdWVgLFxuICBgbWVkaXVtc3ByaW5nZ3JlZW5gLFxuICBgbWVkaXVtdHVycXVvaXNlYCxcbiAgYG1lZGl1bXZpb2xldHJlZGAsXG4gIGBtaWRuaWdodGJsdWVgLFxuICBgbWludGNyZWFtYCxcbiAgYG1pc3R5cm9zZWAsXG4gIGBtb2NjYXNpbmAsXG4gIGBuYXZham93aGl0ZWAsXG4gIGBuYXZ5YCxcbiAgYG9sZGxhY2VgLFxuICBgb2xpdmVgLFxuICBgb2xpdmVkcmFiYCxcbiAgYG9yYW5nZWAsXG4gIGBvcmFuZ2VyZWRgLFxuICBgb3JjaGlkYCxcbiAgYHBhbGVnb2xkZW5yb2RgLFxuICBgcGFsZWdyZWVuYCxcbiAgYHBhbGV0dXJxdW9pc2VgLFxuICBgcGFsZXZpb2xldHJlZGAsXG4gIGBwYXBheWF3aGlwYCxcbiAgYHBlYWNocHVmZmAsXG4gIGBwZXJ1YCxcbiAgYHBpbmtgLFxuICBgcGx1bWAsXG4gIGBwb3dkZXJibHVlYCxcbiAgYHB1cnBsZWAsXG4gIGByZWRgLFxuICBgcm9zeWJyb3duYCxcbiAgYHJveWFsYmx1ZWAsXG4gIGBzYWRkbGVicm93bmAsXG4gIGBzYWxtb25gLFxuICBgc2FuZHlicm93bmAsXG4gIGBzZWFncmVlbmAsXG4gIGBzZWFzaGVsbGAsXG4gIGBzaWVubmFgLFxuICBgc2lsdmVyYCxcbiAgYHNreWJsdWVgLFxuICBgc2xhdGVibHVlYCxcbiAgYHNsYXRlZ3JheWAsXG4gIGBzbGF0ZWdyZXlgLFxuICBgc25vd2AsXG4gIGBzcHJpbmdncmVlbmAsXG4gIGBzdGVlbGJsdWVgLFxuICBgdGFuYCxcbiAgYHRlYWxgLFxuICBgdGhpc3RsZWAsXG4gIGB0b21hdG9gLFxuICBgdHVycXVvaXNlYCxcbiAgYHZpb2xldGAsXG4gIGB3aGVhdGAsXG4gIGB3aGl0ZWAsXG4gIGB3aGl0ZXNtb2tlYCxcbiAgYHllbGxvd2AsXG4gIGB5ZWxsb3dncmVlbmAsXG5dO1xuIiwiaW1wb3J0IHsgU0hBUEVTX0NPTE9SIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuY29uc3Qgc2l6ZXMgPSB7XG4gIHh4c21hbGw6IDI1LFxuICB4c21hbGw6IDUwLFxuICBzbWFsbDogMTAwLFxuICBtZWRpdW06IDMwMCxcbiAgbGFyZ2U6IDQwMCxcbiAgeGxhcmdlOiA1MDAsXG4gIHh4bGFyZ2U6IDYwMCxcbn07XG5jb25zdCBCT1JERVJfU0laRVMgPSB7XG4gIG5vbmU6IDAsXG4gIHh4c21hbGw6IDEsXG4gIHhzbWFsbDogMS41LFxuICBzbWFsbDogMixcbiAgbWVkaXVtOiAyLjUsXG4gIGxhcmdlOiAzLFxuICB4bGFyZ2U6IDMuNSxcbiAgeHhsYXJnZTogNCxcbn07XG5cbmNvbnN0IEJPUkRFUl9MSU5FUyA9IHtcbiAgc29saWQ6IFwic29saWRcIixcbiAgZG90dGVkOiBcImRvdHRlZFwiLFxuICBkYXNoZWQ6IFwiZGFzaGVkXCIsXG4gIGdyb292ZTogXCJncm9vdmVcIixcbiAgcmlkZ2U6IFwicmlkZ2VcIixcbiAgaW5zZXQ6IFwiaW5zZXRcIixcbiAgZG91YmxlOiBcImRvdWJsZVwiLFxuICBoaWRkZW46IFwiaGlkZGVuXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcbiAgd2lkdGg6IHtcbiAgICBudW1lcmljOiAxMDAsXG4gICAgc3RyaW5nOiBzaXplcyxcbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgbnVtZXJpYzogMTAwLFxuICAgIHN0cmluZzogc2l6ZXMsXG4gIH0sXG4gIGJhY2tncm91bmQ6IFNIQVBFU19DT0xPUixcbiAgYm9yZGVyOiB7IHdpZHRoOiBCT1JERVJfU0laRVMsIGNvbG9yOiBTSEFQRVNfQ09MT1IsIGxpbmVzOiBCT1JERVJfTElORVMgfSxcbn07XG4iLCJleHBvcnQgY29uc3QgZXh0cmFjdFByb3BlcnR5ID0gKHByb3BlcnR5S2V5LCBwcm9wZXJ0eVNvdXJjZSkgPT4ge1xuICByZXR1cm4gcHJvcGVydHlTb3VyY2VbcHJvcGVydHlLZXldID8gcHJvcGVydHlTb3VyY2VbcHJvcGVydHlLZXldIDogZmFsc2U7XG59O1xuIiwiaW1wb3J0ICogYXMgRVJPUlJfTUVTU0FHRVMgZnJvbSBcIi4uL2Vycm9yX21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBkZWZhdWx0VmFsdWVzIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRWYWx1ZSA9IChwcm9LZXksIGlzTnVtZXJpYyA9IGZhbHNlLCB0ZXh0ID0gXCJcIikgPT4ge1xuICBjb25zb2xlLmxvZyhcImdldERlZmF1bHRWYWx1ZTs7O1wiLCBwcm9LZXksIGlzTnVtZXJpYywgdGV4dCk7XG4gIGlmIChkZWZhdWx0VmFsdWVzW3Byb0tleV0pIHtcbiAgICBpZiAoaXNOdW1lcmljKSByZXR1cm4gZGVmYXVsdFZhbHVlc1twcm9LZXldW1wibnVtZXJpY1wiXTtcbiAgICBpZiAoIXRleHQpIHJldHVybiBkZWZhdWx0VmFsdWVzW3Byb0tleV07XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIlZhbHVlIHRvIGJlIHJldHVybmVkIHN0cmluZzs7O1wiLFxuICAgICAgZGVmYXVsdFZhbHVlc1twcm9LZXldW1wic3RyaW5nXCJdW3RleHRdXG4gICAgKTtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlc1twcm9LZXldW1wic3RyaW5nXCJdW3RleHRdO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihFUk9SUl9NRVNTQUdFUy5wcm9wZXJ0eV9pc19ub3Rfc3VwcG9ydGVkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRWZW5kb3JUaGVtZVByb3BzID0gKHRoZW1lUHJvcHMsIHByb3ApOiBhbnkgPT4ge1xuICByZXR1cm4gdGhlbWVQcm9wcz8udGhlbWU/Lmdsb2JhbFtwcm9wXVxuICAgID8gdGhlbWVQcm9wcz8udGhlbWU/Lmdsb2JhbFtwcm9wXVxuICAgIDogbnVsbDtcbn07XG4iLCJjb25zdCBzaGFwZUNsaXBzID0ge1xuICB0cmlhbmdsZTogYHBvbHlnb24oNTAlIDAlLCAwJSAxMDAlLCAxMDAlIDEwMCUpYCxcbiAgdHJhcGV6b2lkOiBgcG9seWdvbigyMCUgMCUsIDgwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtgLFxuICBwYXJhbGxlbG9ncmFtOiBgcG9seWdvbigyNSUgMCUsIDEwMCUgMCUsIDc1JSAxMDAlLCAwJSAxMDAlKTtgLFxuICByaG9tYnVzOiBgcG9seWdvbig1MCUgMCUsIDEwMCUgNTAlLCA1MCUgMTAwJSwgMCUgNTAlKTtgLFxuICBwZW50YWdvbjogYHBvbHlnb24oNTAlIDAlLCAxMDAlIDM4JSwgODIlIDEwMCUsIDE4JSAxMDAlLCAwJSAzOCUpYCxcbiAgaGV4YWdvbjogYHBvbHlnb24oMjUlIDAlLCA3NSUgMCUsIDEwMCUgNTAlLCA3NSUgMTAwJSwgMjUlIDEwMCUsIDAlIDUwJSlgLFxuICBoZXB0YWdvbjogYHBvbHlnb24oNTAlIDAlLCA5MCUgMjAlLCAxMDAlIDYwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwJSA2MCUsIDEwJSAyMCUpYCxcbiAgb2N0YWdvbjogYHBvbHlnb24oMzAlIDAlLCA3MCUgMCUsIDEwMCUgMzAlLCAxMDAlIDcwJSwgNzAlIDEwMCUsIDMwJSAxMDAlLCAwJSA3MCUsIDAlIDMwJSk7YCxcbiAgbm9uYWdvbjogYHBvbHlnb24oNTAlIDAlLCA4MyUgMTIlLCAxMDAlIDQzJSwgOTQlIDc4JSwgNjglIDEwMCUsIDMyJSAxMDAlLCA2JSA3OCUsIDAlIDQzJSwgMTclIDEyJSk7YCxcbiAgZGVjYWdvbjogYHBvbHlnb24oNTAlIDAlLCA4MCUgMTAlLCAxMDAlIDM1JSwgMTAwJSA3MCUsIDgwJSA5MCUsIDUwJSAxMDAlLCAyMCUgOTAlLCAwJSA3MCUsIDAlIDM1JSwgMjAlIDEwJSk7YCxcbiAgYmV2ZWw6IGBwb2x5Z29uKDIwJSAwJSwgODAlIDAlLCAxMDAlIDIwJSwgMTAwJSA4MCUsIDgwJSAxMDAlLCAyMCUgMTAwJSwgMCUgODAlLCAwJSAyMCUpO2AsXG4gIHJhYmJldDogYHBvbHlnb24oMCUgMTUlLCAxNSUgMTUlLCAxNSUgMCUsIDg1JSAwJSwgODUlIDE1JSwgMTAwJSAxNSUsIDEwMCUgODUlLCA4NSUgODUlLCA4NSUgMTAwJSwgMTUlIDEwMCUsIDE1JSA4NSUsIDAlIDg1JSk7YCxcbiAgY2lyY2xlOiBgY2lyY2xlKDUwJSBhdCA1MCUgNTAlKTtgLFxuICBlbGxpcHNlOiBgZWxsaXBzZSgyNSUgNDAlIGF0IDUwJSA1MCUpO2AsXG4gIHN0YXI6IGBwb2x5Z29uKDUwJSAwJSwgNjElIDM1JSwgOTglIDM1JSwgNjglIDU3JSwgNzklIDkxJSwgNTAlIDcwJSwgMjElIDkxJSwgMzIlIDU3JSwgMiUgMzUlLCAzOSUgMzUlKWAsXG4gIHF1YTogYGNpcmNsZSg4MHB4IGF0IHRvcCByaWdodCk7YCxcbn07XG5cbmV4cG9ydCB7IHNoYXBlQ2xpcHMgfTtcbiIsImltcG9ydCB7IGdldERlZmF1bHRWYWx1ZSB9IGZyb20gXCIuL2dldHRlcnNcIjtcbmltcG9ydCB7IHNoYXBlQ2xpcHMgfSBmcm9tIFwiLi9zaGFwZV9jbGlwc1wiO1xuaW1wb3J0IHsgRG9XaWR0aEhlaWdodFR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuY29uc3QgQk9SREVSX1JBRElVUzogc3RyaW5nID0gXCI1MCVcIjtcbmV4cG9ydCBjb25zdCBzcXVhcmVXaWR0aEhlaWdodCA9ICh3aWR0aCwgaGVpZ2h0LCBzaGFwZSk6IERvV2lkdGhIZWlnaHRUeXBlID0+IHtcbiAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KVxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogZ2V0RGVmYXVsdFZhbHVlKFwid2lkdGhcIiwgdHJ1ZSksXG4gICAgICBoZWlnaHQ6IGdldERlZmF1bHRWYWx1ZShcImhlaWdodFwiLCB0cnVlKSxcbiAgICB9O1xuICBpZiAoIXdpZHRoKSByZXR1cm4geyB3aWR0aDogaGVpZ2h0LCBoZWlnaHQgfTtcbiAgaWYgKCFoZWlnaHQpIHJldHVybiB7IHdpZHRoLCBoZWlnaHQ6IHdpZHRoIH07XG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaXJjbGVXaWR0aEhlaWdodCA9ICh3aWR0aCwgaGVpZ2h0LCBzaGFwZSk6IERvV2lkdGhIZWlnaHRUeXBlID0+IHtcbiAgbGV0IGJvcmRlclJhZGl1cyA9IEJPUkRFUl9SQURJVVM7XG4gIGlmICghd2lkdGggJiYgIWhlaWdodClcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGdldERlZmF1bHRWYWx1ZShcIndpZHRoXCIsIHRydWUpLFxuICAgICAgaGVpZ2h0OiBnZXREZWZhdWx0VmFsdWUoXCJoZWlnaHRcIiwgdHJ1ZSksXG4gICAgICBib3JkZXJSYWRpdXMsXG4gICAgfTtcbiAgaWYgKCF3aWR0aCkgcmV0dXJuIHsgd2lkdGg6IGhlaWdodCwgaGVpZ2h0LCBib3JkZXJSYWRpdXMgfTtcbiAgaWYgKCFoZWlnaHQpIHJldHVybiB7IHdpZHRoLCBoZWlnaHQ6IHdpZHRoLCBib3JkZXJSYWRpdXMgfTtcbiAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCwgYm9yZGVyUmFkaXVzIH07XG59O1xuXG5leHBvcnQgY29uc3QgcmVjdGFuZ2xlV2lkdGhIZWlnaHQgPSAoXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIHNoYXBlXG4pOiBEb1dpZHRoSGVpZ2h0VHlwZSA9PiB7XG4gIGlmICghd2lkdGggJiYgIWhlaWdodClcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGdldERlZmF1bHRWYWx1ZShcIndpZHRoXCIsIHRydWUpLFxuICAgICAgaGVpZ2h0OiBnZXREZWZhdWx0VmFsdWUoXCJ3aWR0aFwiLCB0cnVlKSAvIDIsXG4gICAgfTtcbiAgaWYgKCF3aWR0aCkgcmV0dXJuIHsgd2lkdGg6IGhlaWdodCwgaGVpZ2h0OiBoZWlnaHQgLyAyIH07XG4gIGlmICghaGVpZ2h0KSByZXR1cm4geyB3aWR0aCwgaGVpZ2h0OiB3aWR0aCAvIDIgfTtcbiAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodDogaGVpZ2h0IC8gMiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG92YWxXaWR0aEhlaWdodCA9ICh3aWR0aCwgaGVpZ2h0LCBzaGFwZSk6IERvV2lkdGhIZWlnaHRUeXBlID0+IHtcbiAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KSB7XG4gICAgbGV0IHdpZHRoID0gZ2V0RGVmYXVsdFZhbHVlKFwid2lkdGhcIiwgdHJ1ZSk7XG4gICAgbGV0IGhlaWdodCA9IHdpZHRoIC8gMjtcbiAgICAvLyBsZXQgcmFkaXVzRGl2aXNvciA9IGhlaWdodCAvIDIgKyBcInB4XCI7XG4gICAgbGV0IGJvcmRlclJhZGl1cyA9IEJPUkRFUl9SQURJVVM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgYm9yZGVyUmFkaXVzLFxuICAgIH07XG4gIH1cbiAgaWYgKCF3aWR0aCkgcmV0dXJuIHsgd2lkdGg6IGhlaWdodCwgaGVpZ2h0OiBoZWlnaHQgLyAyIH07XG4gIGlmICghaGVpZ2h0KSByZXR1cm4geyB3aWR0aCwgaGVpZ2h0OiB3aWR0aCAvIDIgfTtcbiAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodDogaGVpZ2h0IC8gMiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNsaXBQYXRoV2lkdGhIZWlnaHQgPSAoXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIHNoYXBlXG4pOiBEb1dpZHRoSGVpZ2h0VHlwZSA9PiB7XG4gIGlmICghd2lkdGggJiYgIWhlaWdodClcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGdldERlZmF1bHRWYWx1ZShcIndpZHRoXCIsIHRydWUpLFxuICAgICAgaGVpZ2h0OiBnZXREZWZhdWx0VmFsdWUoXCJoZWlnaHRcIiwgdHJ1ZSksXG4gICAgfTtcbiAgaWYgKCF3aWR0aCkgcmV0dXJuIHsgd2lkdGg6IGhlaWdodCwgaGVpZ2h0IH07XG4gIGlmICghaGVpZ2h0KSByZXR1cm4geyB3aWR0aCwgaGVpZ2h0OiB3aWR0aCB9O1xuICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG59O1xuXG5leHBvcnQgY29uc3QgZG9DbGlwcGVkU2hhcGVzID0gKHByb3BzLCBzaGFwZSwgdGhlbWVNb2RlKSA9PiB7XG4gIGlmICghc2hhcGVDbGlwc1tzaGFwZV0pIHJldHVybiB7fTtcbiAgbGV0IGZsZXhMYXlvdXQgPSBkb0NsaXBwZWRTaGFwZXNDb250ZW50UG9zaXRpb25pbmcoKTtcblxuICByZXR1cm4ge1xuICAgIGNsaXBQYXRoOiBzaGFwZUNsaXBzW3NoYXBlXSxcbiAgICAuLi5mbGV4TGF5b3V0LFxuICB9O1xufTtcblxuY29uc3QgZG9DbGlwcGVkU2hhcGVzQ29udGVudFBvc2l0aW9uaW5nID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHRleHQsIHNob3VsZExvd2VyQ2FzZSA9IGZhbHNlKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiVGhlIHRleHQgVXBwZXJjYXNpbmc7OztcIiwgdGV4dCk7XG4gIGxldCBjYXNlZFN0cmluZyA9IHNob3VsZExvd2VyQ2FzZSA/IHRleHQudG9Mb3dlckNhc2UoKSA6IHRleHQ7XG4gIHJldHVybiBgJHtjYXNlZFN0cmluZy5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpfSR7Y2FzZWRTdHJpbmcuc2xpY2UoMSl9YDtcbn07XG4iLCJpbXBvcnQgeyBjaGVja1Byb3BlcnR5VmFsdWUgfSBmcm9tIFwiLi9jaGVja2Vyc1wiO1xuaW1wb3J0IHsgZXh0cmFjdFByb3BlcnR5IH0gZnJvbSBcIi4vZWtzdHJhY3RvcnNcIjtcbmltcG9ydCB7XG4gIGNpcmNsZVdpZHRoSGVpZ2h0LFxuICBjbGlwUGF0aFdpZHRoSGVpZ2h0LFxuICBvdmFsV2lkdGhIZWlnaHQsXG4gIHJlY3RhbmdsZVdpZHRoSGVpZ2h0LFxuICBzcXVhcmVXaWR0aEhlaWdodCxcbn0gZnJvbSBcIi4vc2hhcGVzXCI7XG5pbXBvcnQgeyBEb1dpZHRoSGVpZ2h0VHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgY29uc3QgZG9XaWR0aEhlaWdodCA9IChcbiAgcHJvcHM6IG9iamVjdCxcbiAgc2hhcGU6IHN0cmluZyxcbiAgc2l6ZTogc3RyaW5nIHwgbnVtYmVyXG4pOiBEb1dpZHRoSGVpZ2h0VHlwZSA9PiB7XG4gIHNpemUgPyAocHJvcHNbXCJ3aWR0aFwiXSA9IHNpemUpIDogbnVsbDtcbiAgbGV0IHdpZHRoID0gY2hlY2tQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIiwgZXh0cmFjdFByb3BlcnR5KFwid2lkdGhcIiwgcHJvcHMpKTtcbiAgbGV0IGhlaWdodCA9IGNoZWNrUHJvcGVydHlWYWx1ZShcImhlaWdodFwiLCBleHRyYWN0UHJvcGVydHkoXCJoZWlnaHRcIiwgcHJvcHMpKTtcbiAgY29uc29sZS5sb2coXCJkb1dpZHRoQW5kSGVpZ2h0Ozs7XCIsIHdpZHRoLCBoZWlnaHQpO1xuICBjb25zb2xlLmxvZyhcIlRoZSBTSEFQRVwiLCBzaGFwZSk7XG4gIHN3aXRjaCAoc2hhcGUpIHtcbiAgICBjYXNlIFwic3F1YXJlXCI6XG4gICAgICBjb25zb2xlLmxvZyhcImNhc2UgaXMgU1FVQVJFXCIpO1xuICAgICAgcmV0dXJuIHNxdWFyZVdpZHRoSGVpZ2h0KHdpZHRoLCBoZWlnaHQsIHNoYXBlKTtcbiAgICBjYXNlIFwiY2lyY2xlXCI6XG4gICAgICByZXR1cm4gY2lyY2xlV2lkdGhIZWlnaHQod2lkdGgsIGhlaWdodCwgc2hhcGUpO1xuICAgIGNhc2UgXCJyZWN0YW5nbGVcIjpcbiAgICAgIHJldHVybiByZWN0YW5nbGVXaWR0aEhlaWdodCh3aWR0aCwgaGVpZ2h0LCBzaGFwZSk7XG5cbiAgICBjYXNlIFwib3ZhbFwiOlxuICAgICAgY29uc29sZS5sb2coXCJjYXNlIGlzIFJlY3RhbmdsZTs7O1wiLCB3aWR0aCwgaGVpZ2h0LCBzaGFwZSk7XG4gICAgICBsZXQgcmVjdFdpZHRoID0gb3ZhbFdpZHRoSGVpZ2h0KHdpZHRoLCBoZWlnaHQsIHNoYXBlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVEhFIFJFQ1RXSURUSDs7O1wiLCByZWN0V2lkdGgpO1xuICAgICAgcmV0dXJuIHJlY3RXaWR0aDtcbiAgICBjYXNlIFwiY2xpcC1wYXRoXCI6XG4gICAgICByZXR1cm4gY2xpcFBhdGhXaWR0aEhlaWdodCh3aWR0aCwgaGVpZ2h0LCBzaGFwZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBIZWFkaW5nIGFzIEdoZWFkaW5nIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZEhlYWRpbmcgPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgSGVhZGluZzogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZEhlYWRpbmcgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2hlYWRpbmcgey4uLnByb3BzfSAvPlxuICAgIDwvV3JhcHBlZEhlYWRpbmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIiwiaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vSGVhZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIiwiaW1wb3J0IHsgUGFyYWdyYXBoIGFzIEdwYXJhZ2FwaCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRUZXh0ID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFBhcmFncmFwaDogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7IHRlc3RJRCA9IFwiXCIsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZFRleHQgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R3BhcmFnYXBoIHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRUZXh0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoO1xuIiwiaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9QYXJhZ3JhcGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoO1xuIiwiaW1wb3J0IHsgVGFnIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkVGFnID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IFRBRzogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIHZhbHVlLFxuICBjaGlsZHJlbixcbiAgY29sb3IsIC8vIDEuIFB1bGwgY29sb3Igb3V0IGhlcmUgc28gaXQgaXNuJ3QgaW5jbHVkZWQgaW4gLi4ucHJvcHNcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgLy8gMi4gUmVzb2x2ZSB0aGUgY29sb3Igc2FmZWx5IGlmIGl0J3MgYW4gb2JqZWN0LCBvciBmYWxsIGJhY2sgdG8gYSBkZWZhdWx0IHN0cmluZyBpZiBHcm9tbWV0IHJlcXVpcmVzIGl0XG4gIGNvbnN0IHJlc29sdmVkQ29sb3IgPSB0eXBlb2YgY29sb3IgPT09IFwib2JqZWN0XCIgPyBjb2xvci5saWdodCA6IGNvbG9yO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRUYWcgdmFsdWU9e3ZhbHVlfSBkYXRhLXRlc3RpZD17dGVzdElEfSBjb2xvcj17Y29sb3J9PlxuICAgICAgey8qIDMuIFBhc3MgdGhlIHNhZmVseSByZXNvbHZlZCBjb2xvciBzdHJpbmcgdG8gR3JvbW1ldCdzIFRhZyAqL31cbiAgICAgIDxUYWcgdmFsdWU9e3ZhbHVlfSBjb2xvcj17cmVzb2x2ZWRDb2xvciBhcyBhbnl9IHsuLi5wcm9wc30gLz5cbiAgICA8L1dyYXBwZWRUYWc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUQUc7XG4iLCJpbXBvcnQgVGFnIGZyb20gXCIuL1RhZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBUYWc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0ZXh0RGVmYXVsdHMgZnJvbSBcIi4vdGV4dERlZmF1bHRzXCI7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyAxLiBQYXNzIDxhbnk+IGhlcmUgdG8gdGVsbCBrb3RpaS1zdHlsZWQgdGhhdCB0aGlzIGNvbXBvbmVudCBhY2NlcHRzIGFueSBjdXN0b20gcHJvcHMgY29uZmlndXJhdGlvblxuY29uc3QgVGV4dCA9IHN0eWxlZChcInNwYW5cIik8YW55PigocHJvcHM6IGFueSkgPT4gKHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBmb250U2l6ZTogcHJvcHM/LnNpemUgPyBwcm9wcy5zaXplIDogdGV4dERlZmF1bHRzLnNpemUsXG4gIGExMXlUaXRsZTogdGV4dERlZmF1bHRzLmFsbHlUaXRsZSxcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgY29sb3I6IGAke3Byb3BzPy5jb2xvciA/IHByb3BzLmNvbG9yIDogdGV4dERlZmF1bHRzLmNvbG9yfWAsXG59KSk7XG5cbi8vIDIuIEtlZXAgeW91ciByaWdpZCBhcHBsaWNhdGlvbiB0eXBlcyBlbmZvcmNlZCBzYWZlbHkgb24gdGhlIHdyYXBwZXIgY29tcG9uZW50XG5jb25zdCBDdXN0b21UZXh0OiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIDxUZXh0IHsuLi5wcm9wc30+e2NoaWxkcmVufTwvVGV4dD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21UZXh0O1xuIiwiaW1wb3J0IEN1c3RvbVRleHQgZnJvbSBcIi4vQ3VzdG9tVGV4dFwiO1xuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tVGV4dDtcbiIsImNvbnN0IHNpemVzID0ge1xuICB4eHNtYWxsOiBcIjhweFwiLFxuICB4c21hbGw6IFwiMTFweFwiLFxuICBzbWFsbDogXCIxNHB4XCIsXG4gIG1lZGl1bTogXCIxN1wiLFxuICBsYXJnZTogXCIxOXB4XCIsXG59O1xuXG5jb25zdCBjb2xvciA9IFwiaW5oZXJpdFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzaXplOiBzaXplcy5zbWFsbCxcbiAgY29sb3I6IGNvbG9yLFxuICBhbGx5VGl0bGU6IFwicGFnZSB0ZXh0XCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbn07XG4iLCIvLyBpbXBvcnQgeyBUZXh0IGFzIEd0ZXh0IH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuaW1wb3J0IEN1c3RvbVRleHQgZnJvbSBcIi4vQ3VzdG9tVGV4dFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZFRleHQgPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgVGV4dDogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkVGV4dCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxDdXN0b21UZXh0IHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQ3VzdG9tVGV4dD5cbiAgICA8L1dyYXBwZWRUZXh0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCBUZXh0IGZyb20gXCIuL1RleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCBIZWFkaW5nIGZyb20gXCIuL0hlYWRpbmdcIjtcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vUGFyYWdyYXBoXCI7XG5pbXBvcnQgVGFnIGZyb20gXCIuL1RhZ1wiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vVGV4dFwiO1xuZXhwb3J0IHsgSGVhZGluZywgVGFnLCBUZXh0LCBQYXJhZ3JhcGggfTtcbiIsImltcG9ydCB7IENvbGxhcHNpYmxlIGFzIEdjb2xsYXBzaWJsZSB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJrb3RpaS1zdHlsZWRcIjtcblxuLy8gaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy9pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhZ2VIZWFkZXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFdyYXBwZWRDb2xsYXBzaWJsZSA9IHN0eWxlZC5kaXY8UGFnZUhlYWRlclByb3BzPmBgO1xuXG5jb25zdCBDb2xsYXBzaWJsZTogUmVhY3QuRkM8UGFnZUhlYWRlclByb3BzPiA9ICh7XG4gIHRlc3RJRCA9IFwiXCIsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkQ29sbGFwc2libGUgZGF0YS10ZXN0aWQ9e3Rlc3RJRH0+XG4gICAgICA8R2NvbGxhcHNpYmxlIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvR2NvbGxhcHNpYmxlPlxuICAgIDwvV3JhcHBlZENvbGxhcHNpYmxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2libGU7XG4iLCJpbXBvcnQgQ29sbGFwc2libGUgZnJvbSBcIi4vQ29sbGFwc2libGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2libGU7XG4iLCJpbXBvcnQgeyBJbmZpbml0ZVNjcm9sbCBhcyBHaW5maXRlU2Nyb2xsIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcImtvdGlpLXN0eWxlZFwiO1xuXG4vLyBpbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG4vL2ltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFnZUhlYWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgV3JhcHBlZEluZmluaXRlU2Nyb2xsID0gc3R5bGVkLmRpdjxQYWdlSGVhZGVyUHJvcHM+YGA7XG5cbmNvbnN0IEluZmluaXRlU2Nyb2xsOiBSZWFjdC5GQzxQYWdlSGVhZGVyUHJvcHM+ID0gKHtcbiAgdGVzdElEID0gXCJcIixcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWRJbmZpbml0ZVNjcm9sbCBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHaW5maXRlU2Nyb2xsIHsuLi5wcm9wc30gY2hpbGRyZW49e2NoaWxkcmVufSAvPlxuICAgIDwvV3JhcHBlZEluZmluaXRlU2Nyb2xsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5maW5pdGVTY3JvbGw7XG4iLCJpbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4vSW5maW5pdGVTY3JvbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgSW5maW5pdGVTY3JvbGw7XG4iLCJpbXBvcnQgeyBLZXlib2FyZCBhcyBHa2V5Ym9hcmQgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkS2V5Ym9hcmQgPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgS2V5Ym9hcmQ6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICB0ZXN0SUQgPSBcIlwiLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlZEtleWJvYXJkIGRhdGEtdGVzdGlkPXt0ZXN0SUR9PlxuICAgICAgPEdrZXlib2FyZCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0drZXlib2FyZD5cbiAgICA8L1dyYXBwZWRLZXlib2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkO1xuIiwiaW1wb3J0IEtleWJvYXJkIGZyb20gXCIuL0tleWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkTWFya2Rvd24gPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgTWFya2Rvd246IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiA8V3JhcHBlZE1hcmtkb3duIGRhdGEtdGVzdGlkPXt0ZXN0SUR9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd247XG4iLCJpbXBvcnQgeyBTa2lwTGluayBhcyBHc2tpcExpbmsgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwia290aWktc3R5bGVkXCI7XG5cbi8vIGltcG9ydCB7IEJveFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbi8vaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBXcmFwcGVkU2tpcExpbmsgPSBzdHlsZWQuZGl2PFBhZ2VIZWFkZXJQcm9wcz5gYDtcblxuY29uc3QgU2tpcExpbms6IFJlYWN0LkZDPFBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0ZXN0SUQgPSBcIlwiLCBpZCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVkU2tpcExpbmsgaWQ9e2lkfSBkYXRhLXRlc3RpZD17dGVzdElEfT5cbiAgICAgIDxHc2tpcExpbmsgaWQ9e2lkfSB7Li4ucHJvcHN9IC8+XG4gICAgPC9XcmFwcGVkU2tpcExpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lwTGluaztcbiIsImltcG9ydCBTa2lwTGluayBmcm9tIFwiLi9Ta2lwTGlua1wiO1xuZXhwb3J0IGRlZmF1bHQgU2tpcExpbms7XG4iLCJpbXBvcnQgQ29sbGFwc2libGUgZnJvbSBcIi4vQ29sbGFwc2libGVcIjtcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tIFwiLi9JbmZpbml0ZVNjcm9sbFwiO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gXCIuL0tleWJvYXJkXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcIi4vTWFya2Rvd24vTWFya2Rvd25cIjtcbmltcG9ydCBTa2lwTGluayBmcm9tIFwiLi9Ta2lwTGlua1wiO1xuaW1wb3J0IFRoZW1lU3dpdGNoZXIgZnJvbSBcIi4vVGhlbWVTd2l0Y2hlci9zd2l0Y2hlclwiO1xuXG5leHBvcnQge1xuICBUaGVtZVN3aXRjaGVyLFxuICBNYXJrZG93bixcbiAgQ29sbGFwc2libGUsXG4gIEtleWJvYXJkLFxuICBTa2lwTGluayxcbiAgSW5maW5pdGVTY3JvbGwsXG59O1xuIiwiaW1wb3J0IHtcbiAgQ3VzdG9tVGhlbWVQcm92aWRlciBhcyBUaGVtZVByb3ZpZGVyLFxuICB1c2VUaGVtZUNvbnRleHQsXG59IGZyb20gXCIuL3RoZW1lLXByb3ZpZGVyXCI7XG5cbmV4cG9ydCB7XG4gIFRoZW1lUHJvdmlkZXIgYXMgS290aWlUaGVtZVByb3ZpZGVyLFxuICB1c2VUaGVtZUNvbnRleHQgYXMgdXNlS290aWlUaGVtZSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbG9nU3RvcmVkVGhlbWVzU3RhdHVzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiLi4vaG9va3NcIjtcbi8vIGltcG9ydCB7IERlbW9TZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2hlci9EZW1vU2VjdGlvblwiO1xuLy8gaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZhdWx0UHJvcHMgYXMgZ3JvbW1ldFRoZW1lLCBHcm9tbWV0IH0gZnJvbSBcImdyb21tZXRcIjtcbnR5cGUgVGhlbWVNb2RlUHJvcHMgPSBcImRhcmtcIiB8IFwibGlnaHRcIjtcbnR5cGUgVGhlbWVQcm9wcyA9IHtcbiAgdGhlbWU6IE9iamVjdDtcbiAgdGhlbWVOYW1lOiBzdHJpbmc7XG4gIHRoZW1lczogW107XG4gIGlzVGhlbWVMb2FkZWQ6IGJvb2xlYW47XG4gIGNoYW5nZVRoZW1lOiAoY3VycmVudFRoZW1lOiBhbnkpID0+IHZvaWQ7XG4gIGNoYW5nZVRoZW1lTW9kZTogKC4uLmFyZzogYW55KSA9PiB2b2lkO1xuICBncm9tbWV0VGhlbWU6IE9iamVjdDtcbiAgdGhlbWVNb2RlOiBUaGVtZU1vZGVQcm9wcztcbn07XG5cbi8vIENyZWF0ZSBUaGVtZUNvbnRlbnRcbmNvbnN0IFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8VGhlbWVQcm9wcz4oe30gYXMgVGhlbWVQcm9wcyk7XG5cbi8vIGNvbnN0IG15R3JvbW1ldFRoZW1lID0ge1xuLy8gICBnbG9iYWw6IHtcbi8vICAgICBmb250OiB7XG4vLyAgICAgICBmYW1pbHk6IFwiUm9ib3RvXCIsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBDdXN0b21UaGVtZVByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWVzLCBpc1RoZW1lTG9hZGVkIH0gPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbdGhlbWVNb2RlLCBzZXRUaGVtZU1vZGVdID0gUmVhY3QudXNlU3RhdGU8VGhlbWVNb2RlUHJvcHM+KFwiZGFya1wiKTtcbiAgY29uc3QgW3RoZW1lTmFtZSwgc2V0VGhlbWVOYW1lXSA9IHVzZVN0YXRlPFRoZW1lTW9kZVByb3BzPihcImRhcmtcIik7XG4gIGNvbnN0IFtjdXJyZW50VGhlbWUsIHNldEN1cnJlbnRUaGVtZV0gPSB1c2VTdGF0ZShkaXJlY3RUaGVtZXNbdGhlbWVOYW1lXSk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50VGhlbWU7OztcIiwgdGhlbWUpO1xuICAvLyBjb25zb2xlLmxvZyhcIkN1cnJlbnRUaGVtZXNcIiwgdGhlbWVzKTtcbiAgLy8gY29uc29sZS5sb2coaXNUaGVtZUxvYWRlZCk7XG4gIC8vY29uc29sZS5sb2cocHJvcHMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvZ1N0b3JlZFRoZW1lc1N0YXR1cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2hhbmdlVGhlbWVNb2RlID0gKHRoZW1lTW9kZSkgPT4ge1xuICAgIC8vY29uc29sZS5sb2coXCJDVVJSRU5UIFRIRU1NT0RFXCIsIEpTT04uc3RyaW5naWZ5KHRoZW1lTW9kZSkpO1xuICAgIGlmICh0aGVtZU1vZGUgPT09IFwiZGFya1wiKSB7XG4gICAgICBzZXRUaGVtZU1vZGUoXCJsaWdodFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGhlbWVNb2RlKFwiZGFya1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlVGhlbWUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiPj4+IFRIRSBUSEVNIE5BTUVcIiwgbmFtZSk7XG4gICAgc2V0VGhlbWVOYW1lKG5hbWUpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiVEhFTUUgTkFNRSBDSEFOR0VEOzs7XCIsIHRoZW1lTmFtZSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJkaXJlY3RUaGVtZXNcIiwgZGlyZWN0VGhlbWVzKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRpcmVjdFRoZW1lcyB0aGVtZVwiLCBkaXJlY3RUaGVtZXNbdGhlbWVOYW1lXSk7XG4gICAgc2V0Q3VycmVudFRoZW1lKGRpcmVjdFRoZW1lc1t0aGVtZU5hbWVdKTtcbiAgfSwgW3RoZW1lTmFtZV0pO1xuICAvLyBjb25zb2xlLmxvZyhcIlRoZSB0aGVtZSBuYW1lXCIsIHRoZW1lTmFtZSk7XG4gIC8vIGNvbnNvbGUubG9nKFwiVGhlIHRoZW1cIiwgZGlyZWN0VGhlbWVzW3RoZW1lTmFtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdGhlbWU6IGN1cnJlbnRUaGVtZSxcbiAgICAgICAgdGhlbWVOYW1lOiB0aGVtZU5hbWUsXG4gICAgICAgIHRoZW1lcyxcbiAgICAgICAgaXNUaGVtZUxvYWRlZCxcbiAgICAgICAgY2hhbmdlVGhlbWUsXG4gICAgICAgIGdyb21tZXRUaGVtZSxcbiAgICAgICAgY2hhbmdlVGhlbWVNb2RlLFxuICAgICAgICB0aGVtZU1vZGUsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxHcm9tbWV0IHRoZW1lPXtjdXJyZW50VGhlbWV9IHRoZW1lTW9kZT17dGhlbWVNb2RlfT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9Hcm9tbWV0PlxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lQ29udGV4dCA9ICgpID0+IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuY29uc3QgZGlyZWN0VGhlbWVzID0ge1xuICBkYXJrOiB7XG4gICAgZ2xvYmFsOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgIGRhcms6IFwiI0VBRERDQVwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiM5NjRCMDBcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcHAtYmFja2dyb3VuZFwiOiB7XG4gICAgICAgICAgZGFyazogXCIjRUFERENBXCIsXG4gICAgICAgICAgbGlnaHQ6IFwiIzk2NEIwMFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgZmFtaWx5OiBcIlJvYm90b1wiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGxpZ2h0OiB7XG4gICAgZ2xvYmFsOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgYmFja2dyb3VuZDogeyBkYXJrOiBcIiNmNWYwZjBcIiwgbGlnaHQ6IFwid2hpdGVcIiB9LFxuICAgICAgICBcImFwcC1iYWNrZ3JvdW5kXCI6IHtcbiAgICAgICAgICBkYXJrOiBcIiNmNWYwZjBcIixcbiAgICAgICAgICBsaWdodDogXCJ3aGl0ZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgZmFtaWx5OiBcIlJvYm90b1wiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGNoZXJyeToge1xuICAgIC8qIEJFR0lOOiBNYXBwaW5nIENvbG9ycyB0byBDb21wb25lbnRzICovXG4gICAgZ2xvYmFsOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgLyogQkVHSU46IENvbG9yIFBhbGV0dGUgRGVmaW5pdGlvbiAqL1xuICAgICAgICBydWJ5OiB7XG4gICAgICAgICAgZGFyazogXCIjZDQxMTFlXCIsXG4gICAgICAgICAgbGlnaHQ6IFwiI2Y1ODk5MFwiLFxuICAgICAgICB9LFxuICAgICAgICBcInJ1YnkhXCI6IFwiI0VGM0Y0Q1wiLFxuICAgICAgICBnb2xkOiB7XG4gICAgICAgICAgZGFyazogXCIjZGY5MDA3XCIsXG4gICAgICAgICAgbGlnaHQ6IFwiI2U3Yjg2YlwiLFxuICAgICAgICB9LFxuICAgICAgICBcImdvbGQhXCI6IFwiI0Y5QjY0NFwiLFxuICAgICAgICBhbWV0aHlzdDoge1xuICAgICAgICAgIGRhcms6IFwiIzlCNTlCNlwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiNDMzlCRDNcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJhbWV0aHlzdCFcIjogXCIjQUY3QUM1XCIsXG4gICAgICAgIFwiZ3JleS0xXCI6IFwiI0VDRTlFM1wiLFxuICAgICAgICBcImdyZXktMlwiOiBcIiNDRUNDQzZcIixcbiAgICAgICAgXCJncmV5LTNcIjogXCIjNzM3MDY5XCIsXG4gICAgICAgIFwiZ3JleS00XCI6IFwiIzUyNTA0Q1wiLFxuICAgICAgICAvKiBFTkQ6IENvbG9yIFBhbGV0dGUgRGVmaW5pdGlvbiAqL1xuICAgICAgICAvKiBCRUdJTjogTWFwcGluZyBDb2xvcnMgdG8gR3JvbW1ldCBOYW1lc3BhY2VzICovXG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICBkYXJrOiBcImdyZXktNFwiLFxuICAgICAgICAgIGxpZ2h0OiBcImdyZXktMVwiLFxuICAgICAgICB9LFxuICAgICAgICBcImJhY2tncm91bmQtYmFja1wiOiB7XG4gICAgICAgICAgZGFyazogXCJncmV5LTRcIixcbiAgICAgICAgICBsaWdodDogXCJncmV5LTFcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWZyb250XCI6IHtcbiAgICAgICAgICBkYXJrOiBcImdyZXktM1wiLFxuICAgICAgICAgIGxpZ2h0OiBcImdyZXktMlwiLFxuICAgICAgICB9LFxuICAgICAgICBicmFuZDogXCJydWJ5IVwiLFxuICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgZGFyazogXCJicmFuZFwiLFxuICAgICAgICAgIGxpZ2h0OiBcImJyYW5kXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCJibHVlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICBkYXJrOiBcImdyZXktMVwiLFxuICAgICAgICAgIGxpZ2h0OiBcImdyZXktM1wiLFxuICAgICAgICB9LFxuICAgICAgICBcImFwcC1iYWNrZ3JvdW5kXCI6IHsgZGFyazogXCJibHVlXCIsIGxpZ2h0OiBcImdyZWVuXCIgfSxcbiAgICAgIH0sXG4gICAgICBmb2N1czoge1xuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICBjb2xvcjogXCJnb2xkXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBiYWNrZ3JvdW5kOiB7IGRhcms6IFwiI2VkOTgwN1wiLCBsaWdodDogXCIjRjlCNjQ0XCIgfSxcbiAgICAgIC8qIEVORDogTWFwcGluZyBDb2xvcnMgdG8gR3JvbW1ldCBOYW1lc3BhY2VzICovXG4gICAgfSxcbiAgICBhbmNob3I6IHtcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGRhcms6IFwiZ29sZFwiLFxuICAgICAgICBsaWdodDogXCJhbWV0aHlzdCFcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvKiBFTkQ6IE1hcHBpbmcgQ29sb3JzIHRvIENvbXBvbmVudHMgKi9cbiAgfSxcblxuICBzZWFXYXZlOiB7XG4gICAgZ2xvYmFsOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgLyogQkVHSU46IENvbG9yIFBhbGV0dGUgRGVmaW5pdGlvbiAqL1xuICAgICAgICBydWJ5OiB7XG4gICAgICAgICAgZGFyazogXCIjZDQxMTFlXCIsXG4gICAgICAgICAgbGlnaHQ6IFwiI2Y1ODk5MFwiLFxuICAgICAgICB9LFxuICAgICAgICBcInJ1YnkhXCI6IFwiI0VGM0Y0Q1wiLFxuICAgICAgICBnb2xkOiB7XG4gICAgICAgICAgZGFyazogXCIjZGY5MDA3XCIsXG4gICAgICAgICAgbGlnaHQ6IFwiI2U3Yjg2YlwiLFxuICAgICAgICB9LFxuICAgICAgICBcImdvbGQhXCI6IFwiI0Y5QjY0NFwiLFxuICAgICAgICBhbWV0aHlzdDoge1xuICAgICAgICAgIGRhcms6IFwiIzlCNTlCNlwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiNDMzlCRDNcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJhbWV0aHlzdCFcIjogXCIjQUY3QUM1XCIsXG4gICAgICAgIFwiZ3JleS0xXCI6IFwiI0VDRTlFM1wiLFxuICAgICAgICBcImdyZXktMlwiOiBcIiNDRUNDQzZcIixcbiAgICAgICAgXCJncmV5LTNcIjogXCIjNzM3MDY5XCIsXG4gICAgICAgIFwiZ3JleS00XCI6IFwiIzUyNTA0Q1wiLFxuICAgICAgICAvKiBFTkQ6IENvbG9yIFBhbGV0dGUgRGVmaW5pdGlvbiAqL1xuICAgICAgICAvKiBCRUdJTjogTWFwcGluZyBDb2xvcnMgdG8gR3JvbW1ldCBOYW1lc3BhY2VzICovXG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICBkYXJrOiBcImdyZXktNFwiLFxuICAgICAgICAgIGxpZ2h0OiBcImdyZXktMVwiLFxuICAgICAgICB9LFxuICAgICAgICBcImJhY2tncm91bmQtYmFja1wiOiB7XG4gICAgICAgICAgZGFyazogXCJncmV5LTRcIixcbiAgICAgICAgICBsaWdodDogXCJncmV5LTFcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWZyb250XCI6IHtcbiAgICAgICAgICBkYXJrOiBcImdyZXktM1wiLFxuICAgICAgICAgIGxpZ2h0OiBcImdyZXktMlwiLFxuICAgICAgICB9LFxuICAgICAgICBicmFuZDogXCJydWJ5IVwiLFxuICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgZGFyazogXCJicmFuZFwiLFxuICAgICAgICAgIGxpZ2h0OiBcImJyYW5kXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCJibHVlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICBkYXJrOiBcImdyZXktMVwiLFxuICAgICAgICAgIGxpZ2h0OiBcImdyZXktM1wiLFxuICAgICAgICB9LFxuICAgICAgICBcImFwcC1iYWNrZ3JvdW5kXCI6IHsgZGFyazogXCIjZDQxMTFlXCIsIGxpZ2h0OiBcIiNlODRmNTlcIiB9LFxuICAgICAgfSxcbiAgICAgIGZvY3VzOiB7XG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgIGNvbG9yOiBcImdvbGRcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIC8qIEVORDogTWFwcGluZyBDb2xvcnMgdG8gR3JvbW1ldCBOYW1lc3BhY2VzICovXG4gICAgfSxcbiAgICAvKiBCRUdJTjogTWFwcGluZyBDb2xvcnMgdG8gQ29tcG9uZW50cyAqL1xuICAgIGFuY2hvcjoge1xuICAgICAgY29sb3I6IHtcbiAgICAgICAgZGFyazogXCJnb2xkXCIsXG4gICAgICAgIGxpZ2h0OiBcImFtZXRoeXN0IVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8qIEVORDogTWFwcGluZyBDb2xvcnMgdG8gQ29tcG9uZW50cyAqL1xuICB9LFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyb21tZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia290aWktc3R5bGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIi8vIGltcG9ydCB7IEJveCwgQnV0dG9uLCBIZWFkaW5nLCBQYXJhZ3JhcGggfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnNDaGVjaywgQnNGaWxsTW9vblN0YXJzRmlsbCBhcyBNb29uSWNvbiB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgTWRPdXRsaW5lTGlnaHRNb2RlIGFzIFRvZ2dsZUxpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJyZWFjdC1zd2l0Y2hcIjtcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VLb3RpaVRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHRcIjtcblxuLy8gaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy90aGVtZXNcIjtcblxuLy8gY29uc3Qgb3B0aW9ucyA9IFtcbi8vICAgeyB2YWx1ZTogXCJlblwiLCBsYWJlbDogXCJFbmdsaXNoXCIgfSxcbi8vICAgeyB2YWx1ZTogXCJ0c1wiLCBsYWJlbDogXCJUc29uZ2FcIiB9LFxuLy8gICB7IHZhbHVlOiBcInZlXCIsIGxhYmVsOiBcIlZlbmRhXCIgfSxcbi8vIF07XG5cbi8qKlxuICogSG9vayB0aGF0IGFsZXJ0cyBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgcGFzc2VkIHJlZlxuICovXG4vLyBjb25zdCByb3RhdGUgPSBrZXlmcmFtZXNgXG4vLyAgZnJvbSB7XG4vLyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbi8vICB9XG5cbi8vICB0byB7XG4vLyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuLy8gIH1cbi8vIGA7XG5cbmNvbnN0IGRvd25PdXRBbmltYXRpb24gPSBrZXlmcmFtZXNgIFxuMCUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHRyYW5zTGF0ZVkoMjBweCk7XG4gIG9wYWNpdHk6IDBcbn1cbjQwJSB7XG4gIG9wYWNpdHk6IDAuMlxufVxuNjAleyBvcGFjaXR5OiAwLjV9XG44MCUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwcHgpIHRyYW5zTGF0ZVkoMHB4KTtcbiAgb3BhY2l0eTogLjhcbn1cbjEwMCUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc0xhdGVZKDBweCk7XG4gIG9wYWNpdHk6IDFcbn1cbmA7XG5mdW5jdGlvbiB1c2VPdXRzaWRlQWxlcnRlcihyZWYsIGNsb3NlT25PdXRzaWRlKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLyoqXG4gICAgICogQWxlcnQgaWYgY2xpY2tlZCBvbiBvdXRzaWRlIG9mIGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcbiAgICAgIGlmIChyZWYuY3VycmVudCAmJiAhcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAvLyBhbGVydChcIllvdSBjbGlja2VkIG91dHNpZGUgb2YgbWUhXCIpO1xuICAgICAgICBjbG9zZU9uT3V0c2lkZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEJpbmQgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBVbmJpbmQgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFuIHVwXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW3JlZl0pO1xufVxuXG5jb25zdCBUaGVtZVNlbGVjdG9yID0gc3R5bGVkKFwiYnV0dG9uXCIpKCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgXCImOmhvdmVyXCI6IHsgY29sb3I6IFwicmVkXCIgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgfTtcbn0pO1xuY29uc3QgRHJvcFdpdGhBbmltID0gc3R5bGVkLmRpdmBcbiAgYW5pbWF0aW9uLW5hbWU6ICR7ZG93bk91dEFuaW1hdGlvbn07XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG5gO1xuY29uc3QgVGhlbWVEcm9wRG93biA9IHN0eWxlZChEcm9wV2l0aEFuaW0pKCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIG9wYWNpdHk6IDEsXG4gIH07XG59KTtcblxuY29uc3QgTGlzdCA9IHN0eWxlZChcInVsXCIpKChwcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjVweFwiLFxuICAgIHdpZHRoOiBwcm9wcz8ud2lkdGggPyBwcm9wcz8ud2lkdGggOiBcIjE1MHB4XCIsXG4gICAgcmlnaHQ6IDAsXG4gIH07XG59KTtcblxuY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQoXCJsaVwiKSgoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJsZWZ0XCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9O1xufSk7XG5cbmNvbnN0IFN3aXRjaGVyVGV4dCA9IHN0eWxlZChcInBcIikoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgfTtcbn0pO1xuXG5jb25zdCBTd2l0Y2hlclNsaWRlciA9IHN0eWxlZChcInBcIikoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgfTtcbn0pO1xuXG5jb25zdCBTd2l0Y2hlclR5cG8gPSBzdHlsZWQoXCJwXCIpKHtcbiAgZmxleEdyb3c6IDIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICBnYXA6IDEwLFxufSk7XG5jb25zdCBUaGVtZVN3aXRjaGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGNoYW5nZVRoZW1lLCB0aGVtZSwgdGhlbWVzLCB0aGVtZU5hbWUsIHRoZW1lTW9kZSwgY2hhbmdlVGhlbWVNb2RlIH0gPVxuICAgIHVzZUtvdGlpVGhlbWUoKTtcblxuICBjb25zdCBbc2hvd1RoZW1lcywgc2V0U2hvd1RoZW1lc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gY29uc3QgW2NoZWNrZWRJdGVtXSA9IHVzZVN0YXRlKHRoZW1lTmFtZSk7XG4gIGNvbnNvbGUubG9nKFwidGhlIHRoZW1TV0lUQ0hFUjs7O1wiLCB0aGVtZXMpO1xuICBjb25zb2xlLmxvZyhjaGFuZ2VUaGVtZSwgdGhlbWUpO1xuXG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZU91dHNpZGVBbGVydGVyKHdyYXBwZXJSZWYsIHNldFNob3dUaGVtZXMpO1xuXG4gIGNvbnN0IGdldE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uRGljdGlvbmFyeSA9IFtdO1xuICAgIGZvciAobGV0IHRoZW1lTmFtZSBpbiB0aGVtZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGhlIHRoZW1lIEk7O1wiLCB0aGVtZU5hbWUpO1xuICAgICAgb3B0aW9uRGljdGlvbmFyeS5wdXNoKHsgdmFsdWU6IHRoZW1lc1t0aGVtZU5hbWVdLCBsYWJlbDogdGhlbWVOYW1lIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uRGljdGlvbmFyeTtcbiAgfTtcblxuICBjb25zdCBzaG93VXBkYXRlZFRoZW1lcyA9ICgpID0+IHtcbiAgICBzZXRTaG93VGhlbWVzKCFzaG93VGhlbWVzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTd2l0Y2hsZUNoYW5nZSA9ICgpID0+IHtcbiAgICBjaGFuZ2VUaGVtZU1vZGUodGhlbWVNb2RlKTtcbiAgICAvLyBzZXRTd2l0Y2goIXN3aXRjaENoZWNrZWQpO1xuICB9O1xuXG4gIGNvbnN0IGFjdGl2YXRlVGhlbWUgPSAoZXZlKSA9PiB7XG4gICAgY29uc3Qgc2V0VmFsdWUgPSBldmUudGFyZ2V0LmF0dHJpYnV0ZXMudmFsdWUubm9kZVZhbHVlO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiU1dJVENIIEFDVElWQVRFXCIsIGV2ZS50YXJnZXQuYXR0cmlidXRlcy52YWx1ZS5ub2RlVmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKFwic2V0SXRlbVwiLCBzZXRWYWx1ZSk7XG4gICAgY2hhbmdlVGhlbWUoc2V0VmFsdWUpO1xuICAgIC8vc2V0Q2hlY2tlZEl0ZW0oc2V0VmFsdWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCI+Pj4gU1dJVENIIGN1cnJlbnQgdGhlbWVcIiwgdGhlbWVOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIj4+PiBTV0lUQ0ggXCIpO1xuICAgIC8vIHJldHVybiAoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcIj4+PiBTd2l0Y2ggVU5NT1VOSU5HXCIpO1xuICAgIC8vIH07XG4gIH0sIFt0aGVtZU5hbWUsIHRoZW1lTW9kZV0pO1xuXG4gIGNvbnN0IGdldExpc3RJdGVtcyA9IChpdGVtcykgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0LCBpeCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCI+Pj4gVEhFIENVUlJFTlQgVCBUSEVNRU5BTUVcIiwgdGhlbWVOYW1lKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiPj4+IFRIRSBUIENVUlJFTlQgTEFCRUxcIiwgaXQpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpc3RJdGVtIGtleT17aXh9PlxuICAgICAgICAgIDxTd2l0Y2hlclR5cG8+XG4gICAgICAgICAgICB7dGhlbWVOYW1lID09PSBpdC5sYWJlbCA/IChcbiAgICAgICAgICAgICAgPEJzQ2hlY2sgc3R5bGU9e3sgY29sb3I6IFwieWVsbG93XCIgfX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCc0NoZWNrIHN0eWxlPXt7IHZpc2liaWxpdHk6IFwiaGlkZGVuXCIgfX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8U3dpdGNoZXJUZXh0IHZhbHVlPXtpdC5sYWJlbH0gb25DbGljaz17YWN0aXZhdGVUaGVtZX0+XG4gICAgICAgICAgICAgIHtpdC5sYWJlbH1cbiAgICAgICAgICAgIDwvU3dpdGNoZXJUZXh0PlxuICAgICAgICAgIDwvU3dpdGNoZXJUeXBvPlxuICAgICAgICAgIHt0aGVtZU5hbWUgIT0gaXQubGFiZWwgPyBudWxsIDogKFxuICAgICAgICAgICAgPFN3aXRjaGVyU2xpZGVyPlxuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN3aXRjaGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoZW1lTW9kZSA9PT0gXCJkYXJrXCIgPyBmYWxzZSA6IHRydWV9XG4gICAgICAgICAgICAgICAgdW5jaGVja2VkSWNvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgY2hlY2tlZEljb249ezxUb2dnbGVMaWdodCAvPn1cbiAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU3dpdGNoZXJTbGlkZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUaGVtZVNlbGVjdG9yIG9uQ2xpY2s9e3Nob3dVcGRhdGVkVGhlbWVzfT5cbiAgICAgICAgPE1vb25JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHhcIiwgY29sb3I6IFwiI2Y2OGZmZlwiIH19IC8+XG4gICAgICA8L1RoZW1lU2VsZWN0b3I+XG4gICAgICB7c2hvd1RoZW1lcyA/IChcbiAgICAgICAgPFRoZW1lRHJvcERvd24gcmVmPXt3cmFwcGVyUmVmfT5cbiAgICAgICAgICA8TGlzdCB3aWR0aD17MTUwfT57Z2V0TGlzdEl0ZW1zKGdldE9wdGlvbnMoKSl9PC9MaXN0PlxuICAgICAgICA8L1RoZW1lRHJvcERvd24+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoZXI7XG4iLCJpbXBvcnQge1xuICBjaGVja09yU2V0VGhlbWVzLFxuICBnZXRUaGVtZSxcbiAgZ2V0VGhlbWVzLFxuICBsb2dTdG9yZWRUaGVtZXNTdGF0dXMsXG59IGZyb20gXCIuL2NvbmZpZ1wiO1xuZXhwb3J0IHsgbG9nU3RvcmVkVGhlbWVzU3RhdHVzLCBnZXRUaGVtZSwgZ2V0VGhlbWVzLCBjaGVja09yU2V0VGhlbWVzIH07XG4iLCJpbXBvcnQgeyBHbG9iYWxTdHlsZSwgTWl4aW4sIEFic3RyYWN0cyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgVGhlbWVzIH0gZnJvbSBcIi4vdGhlbWVcIjtcblxuZXhwb3J0IHsgR2xvYmFsU3R5bGUsIE1peGluLCBBYnN0cmFjdHMsIFRoZW1lcyB9O1xuIiwiaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiLi91c2VUaGVtZVwiO1xuZXhwb3J0IHsgdXNlVGhlbWUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcm91c2VsLFxuICBDaXJjbGUsXG4gIEZvb3RlcixcbiAgSGVhZGVyLFxuICBIZWFkaW5nLFxuICBJbWFnZSxcbiAgT3ZhbCxcbiAgUGFnZSxcbiAgUGFnZUNvbnRlbnQsXG4gIFBhcmFncmFwaCxcbiAgUmVjdGFuZ2xlLFxuICBTaGFwZSxcbiAgU3F1YXJlLFxuICBTdmcsXG4gIFRhZyxcbiAgVGV4dCxcbiAgVGhlbWVTd2l0Y2hlcixcbiAgVmlkZW8sXG59IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IEtvdGlpVGhlbWVQcm92aWRlciwgdXNlS290aWlUaGVtZSB9IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSBcIi4vZ2xvYmFsc1wiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiLi9ob29rc1wiO1xuXG5leHBvcnQge1xuICBCdXR0b24sXG4gIEJveCxcbiAgUGFnZSxcbiAgUGFnZUNvbnRlbnQsXG4gIEZvb3RlcixcbiAgSGVhZGVyLFxuICBDYXJkLFxuICBLb3RpaVRoZW1lUHJvdmlkZXIsXG4gIHVzZUtvdGlpVGhlbWUsXG4gIHVzZVRoZW1lLFxuICBUaGVtZVN3aXRjaGVyLFxuICBHbG9iYWxTdHlsZSBhcyBLb3RpaUdsb2JhbCxcbiAgSGVhZGluZyxcbiAgVGV4dCxcbiAgUGFyYWdyYXBoLFxuICBUYWcsXG4gIFZpZGVvLFxuICBJbWFnZSxcbiAgQ2Fyb3VzZWwsXG4gIFNxdWFyZSxcbiAgQ2lyY2xlLFxuICBSZWN0YW5nbGUsXG4gIE92YWwsXG4gIFNoYXBlLFxuICBTdmcgYXMgU1ZHLFxufTtcbiJdLCJuYW1lcyI6WyJncm9tbWV0XzEiLCJyZXF1aXJlIiwicmVhY3RfMSIsIl9faW1wb3J0RGVmYXVsdCIsImtvdGlpX3N0eWxlZF8xIiwiV3JhcHBlZEFjY29yZGlvbiIsImRlZmF1bHQiLCJkaXYiLCJBY2NvcmRpb24iLCJ0ZXN0SUQiLCJjaGlsZHJlbiIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImV4cG9ydHMiLCJBY2NvcmRpb25fMSIsIkFjY29yZGlvblBhbmVsIiwiQWNjb3JkaW9uUGFuZWxfMSIsIldyYXBwZWRBbmNob3IiLCJBbmNob3IiLCJBbmNob3JfMSIsIldyYXBwZWRCdXR0b24iLCJCdXR0b24iLCJCdXR0b25fMSIsIldyYXBwZWREcm9wIiwiRHJvcCIsInRhcmdldCIsIkRyb3BfMSIsIldyYXBwZWREcm9wQnV0dG9uIiwiRHJvcEJ1dHRvbiIsImRyb3BDb250ZW50IiwiRHJvcEJ1dHRvbl8xIiwiV3JhcHBlZE1lbnUiLCJNZW51IiwiaXRlbXMiLCJNZW51XzEiLCJXcmFwcGVkTmF2IiwiTmF2IiwiTmF2XzEiLCJXcmFwcGVkVGFicyIsIlRhYnMiLCJvbkFjdGl2ZSIsImNvbnNvbGUiLCJsb2ciLCJUYWJzXzEiLCJEcm9wQnV0b25fMSIsImNvbnRyb2xzXzEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJpbnB1dHNfMSIsIkNoZWNrQm94IiwiQ2hlY2tCb3hHcm91cCIsIkRhdGVJbnB1dCIsIkZpbGVJbnB1dCIsIkZvcm1GaWVsZCIsIlNlbGVjdCIsIlNlbGVjdE11bHRpcGxlIiwiVGV4dEFyZWEiLCJUZXh0SW5wdXQiLCJsYXlvdXRfMSIsIkJveCIsIkNhcmQiLCJGb290ZXIiLCJHcmlkIiwiSGVhZGVyIiwiTWFpbiIsIk92ZXJsYXkiLCJQYWdlIiwiUGFnZUNvbnRlbnQiLCJQYWdlSGVhZGVyIiwiU2lkZUJhciIsIlN0YWNrIiwibWVkaWFfMSIsIkNhcm91c2VsIiwiSW1hZ2UiLCJTdmciLCJWaWRlbyIsInR5cG9ncmFwaHlfMSIsIkhlYWRpbmciLCJQYXJhZ3JhcGgiLCJUYWciLCJUZXh0IiwidXRpbHNfMSIsIkluZmluaXRlU2Nyb2xsIiwiS2V5Ym9hcmQiLCJNYXJrZG93biIsIlNraXBMaW5rIiwiVGhlbWVTd2l0Y2hlciIsInNoYXBlc18xIiwiQ2lyY2xlIiwiT3ZhbCIsIlJlY3RhbmdsZSIsIlNoYXBlIiwiU3F1YXJlIiwiV3JhcHBlZENoZWNrQm94IiwiQ2hlY2tCb3hfMSIsIm9wdGlvbnMiLCJDaGVja0JveEdyb3VwXzEiLCJXcmFwcGVkRGF0ZUlucHV0IiwiRGF0ZUlucHV0XzEiLCJXcmFwcGVkRmlsZUlucHV0IiwiRmlsZUlucHV0XzEiLCJXcmFwcGVkRm9ybUZpZWxkIiwiRm9ybUZpZWxkXzEiLCJXcmFwcGVkTWFza2VkSW5wdXQiLCJNYXNrZWRJbnB1dCIsIk1hc2tlZElucHV0XzEiLCJXcmFwcGVkUmFuZ2VJbnB1dCIsIlJhbmdlSW5wdXQiLCJSYW5nZUlucHV0XzEiLCJXcmFwcGVkU2VsZWN0IiwiU2VsZWN0XzEiLCJXcmFwcGVkU2VsZWN0TXVsdGlwbGUiLCJTZWxlY3RNdWx0aXBsZV8xIiwiV3JhcHBlZFN0YXJSYXRpbmciLCJTdGFyUmF0aW5nIiwibmFtZSIsIlN0YXJSYXRpbmdfMSIsIldyYXBwZWRUZXh0QXJlYSIsIlRleHRBcmVhXzEiLCJXcmFwcGVkVGV4dElucHV0IiwiVGV4dElucHV0XzEiLCJXcmFwcGVkVGh1bWJzUmF0aW5nIiwiVGh1bWJzUmF0aW5nIiwiVGh1bWJzUmF0aW5nXzEiLCJXcmFwcGVkQm94IiwicGFkIiwiZGlyZWN0aW9uIiwiQm94XzEiLCJXcmFwcGVkQ2FyZCIsIkNhcmRfMSIsIldyYXBwZWRGb290ZXIiLCJGb290ZXJfMSIsIldyYXBwZWRHcmlkIiwiR3JpZF8xIiwiY29udGV4dF8xIiwiV3JhcHBlZEhlYWRlciIsIktvdGlpVGhlbWVQcm92aWRlciIsIkhlYWRlcl8xIiwiV3JhcHBlZE1haW4iLCJNYWluXzEiLCJXcmFwcGVkUGFnZSIsIkxheWVyIiwiT3ZlcmxheV8xIiwiUGFnZV8xIiwiV3JhcHBlZFBhZ2VDb250ZW50IiwiUGFnZUNvbnRlbnRfMSIsIlBhZ2VIZWFkZXJfMSIsIldyYXBwZWRTaWRlQmFyIiwiU2lkZWJhciIsIlNpZGVCYXJfMSIsIldyYXBwZWRTdGFjayIsIlN0YWNrXzEiLCJXcmFwcGVkQ2Fyb3VzZWwiLCJDYXJvdXNlbF8xIiwiV3JhcHBlZEltYWdlIiwiSW1hZ2VfMSIsIldyYXBwZWRTdmciLCJzcmMiLCJpbmxpbmUiLCJhc0NvbXBvbmVudCIsIlN2Z18xIiwiV3JhcHBlZFZpZGVvIiwiVmlkZW9fMSIsImhlbHBlcnNfMSIsIlN0eWxlZENpcmNsZSIsInN0eWxlcyIsImNyZWF0ZUpTQ1NTU2NoZW1hIiwidGhlbWUiLCJ0aGVtZXMiLCJjaGFuZ2VUaGVtZSIsInRoZW1lTW9kZSIsInVzZUtvdGlpVGhlbWUiLCJuZXdQcm9wcyIsIkNpY2xlXzEiLCJTdHlsZWRTaGFwZSIsIk92YWxfMSIsIlJlY3RhbmdsZV8xIiwic2hhcGVOYW1lIiwiU2hhcGVfMSIsIlN0eWxlZFNxdWFyZSIsIlNxdWFyZV8xIiwiU0hBUEVTX0NPTE9SIiwiU0hBUEVfU0laRVMiLCJkaW1lbnNpb25zX21pc21hdGNoIiwicHJvcGVydHlfaXNfbm90X3N1cHBvcnRlZCIsInN0cmluZ192YWx1ZV9jb25zdGFudCIsInZhbHVlX2Zvcm1hdF91bnJlY29nbmlzZWQiLCJiYWNrZ3JvdW5kXzEiLCJib3JkZXJfMSIsIndpZHRoXzEiLCJzaGFwZSIsImNsaXBTaGFwZSIsImdsb2JhbCIsImNvbG9ycyIsInNpemUiLCJ3aWR0aEhlaWdodCIsImRvV2lkdGhIZWlnaHQiLCJib3JkZXIiLCJkb0JvcmRlciIsImJhY2tncm91bmQiLCJkb0JhY2tncm91bmQiLCJjbGlwcGVkU2hhcGUiLCJkb0NsaXBwZWRTaGFwZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDaXJjbGVfMSIsIm51bWJlcl9jaGVja19wYXR0ZXJuIiwic3BsaXRfc3RyaW5nX2J5X3NwYWNlIiwic3RyaW5nX2NoZWNrX3BhdHRlcm4iLCJla3N0cmFjdG9yc18xIiwiZ2V0dGVyc18xIiwiY2hlY2tCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImV4dHJhY3RQcm9wZXJ0eSIsImdldERlZmF1bHRWYWx1ZSIsInRoZW1lQ29sb3JzIiwiZ2V0VmVuZG9yVGhlbWVQcm9wcyIsInBhdHRlcm5zXzEiLCJjb2xvcnNfMSIsImRlZmF1bHRzXzEiLCJ0aGVtZU1PREUiLCJkZWZhdWx0Qm9yZGVyIiwiZGVmYXVsdFZhbHVlcyIsIndpZHRoIiwiYm9yZGVyV2lkdGgiLCJzcGxpdEJvcmRlciIsInNwbGl0Qm9yZGVyU3RyaW5nIiwicmF3Qm9yZGVyIiwibnVtZXJpY2VCb3JkZXIiLCJzZXRNZWFzdXJlbWVudFVuaXQiLCJ0ZXh0T3JOdW1lcmljQm9yZGVyIiwiaGFuZGxlZEJvcmRlciIsImhhbmRsZUJvcmRlciIsImJvcmRlckJ5U3RyaW5nIiwiYm9yZGVyU3RyaW5nIiwic2V0Qm9yZGVyIiwic3BsaXRCeSIsInRyaW0iLCJzcGxpdCIsImJvcmRlckRpY3QiLCJsaW5lcyIsImNvbG9yIiwiYm9yZGVyU3R5bGUiLCJzb2xpZCIsImJvcmRlckNvbG9yIiwiYm9yZGVyTGVuIiwibGVuZ3RoIiwic2lkZXMiLCJzbGljZSIsImJvcmRlclNpZGVzIiwibWFwIiwiaXRlbSIsImkiLCJzcGxpdEJvcmRlclNpZGUiLCJpc1ZlcnRpY2FsT3JIb3Jpem9udGFsIiwiZmlyc3RJdGVtU3BsaXQiLCJiU2lkZSIsImhhbmRsZUJvcmRlclNpZGVzIiwidW5pdCIsInRlc3QiLCJvYiIsImJvcmRlclNpZGUiLCJib3JkZXJTaWRlSXRlbXMiLCJzcGxpdEJvcmRlclNpZGVWYWx1ZXMiLCJib3JkZXJTaWRlV2lkdGgiLCJib3JkZXJTaWRlU3R5bGUiLCJib3JkZXJTaWRlQ29sb3IiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJjb25zdGFudHNfMSIsIkVST1JSX01FU1NBR0VTIiwiX19pbXBvcnRTdGFyIiwiY2hlY2tQcm9wZXJ0eVZhbHVlIiwicHJvcGVydHlLZXkiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiRXJyb3IiLCJzaXplcyIsInh4c21hbGwiLCJ4c21hbGwiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwieGxhcmdlIiwieHhsYXJnZSIsIkJPUkRFUl9TSVpFUyIsIm5vbmUiLCJCT1JERVJfTElORVMiLCJkb3R0ZWQiLCJkYXNoZWQiLCJncm9vdmUiLCJyaWRnZSIsImluc2V0IiwiZG91YmxlIiwiaGlkZGVuIiwibnVtZXJpYyIsInN0cmluZyIsImhlaWdodCIsInByb3BlcnR5U291cmNlIiwicHJvS2V5IiwiaXNOdW1lcmljIiwidGV4dCIsInRoZW1lUHJvcHMiLCJwcm9wIiwic2hhcGVDbGlwcyIsInRyaWFuZ2xlIiwidHJhcGV6b2lkIiwicGFyYWxsZWxvZ3JhbSIsInJob21idXMiLCJwZW50YWdvbiIsImhleGFnb24iLCJoZXB0YWdvbiIsIm9jdGFnb24iLCJub25hZ29uIiwiZGVjYWdvbiIsImJldmVsIiwicmFiYmV0IiwiY2lyY2xlIiwiZWxsaXBzZSIsInN0YXIiLCJxdWEiLCJzaGFwZV9jbGlwc18xIiwiQk9SREVSX1JBRElVUyIsInNxdWFyZVdpZHRoSGVpZ2h0IiwiY2lyY2xlV2lkdGhIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJyZWN0YW5nbGVXaWR0aEhlaWdodCIsIm92YWxXaWR0aEhlaWdodCIsImNsaXBQYXRoV2lkdGhIZWlnaHQiLCJmbGV4TGF5b3V0IiwiZG9DbGlwcGVkU2hhcGVzQ29udGVudFBvc2l0aW9uaW5nIiwiY2xpcFBhdGgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInNob3VsZExvd2VyQ2FzZSIsImNhc2VkU3RyaW5nIiwidG9VcHBlckNhc2UiLCJjaGVja2Vyc18xIiwicmVjdFdpZHRoIiwiV3JhcHBlZEhlYWRpbmciLCJIZWFkaW5nXzEiLCJXcmFwcGVkVGV4dCIsIlBhcmFncmFwaF8xIiwiV3JhcHBlZFRhZyIsIlRBRyIsInJlc29sdmVkQ29sb3IiLCJsaWdodCIsIlRhZ18xIiwidGV4dERlZmF1bHRzXzEiLCJmb250U2l6ZSIsImExMXlUaXRsZSIsImFsbHlUaXRsZSIsIkN1c3RvbVRleHQiLCJDdXN0b21UZXh0XzEiLCJUZXh0XzEiLCJXcmFwcGVkQ29sbGFwc2libGUiLCJDb2xsYXBzaWJsZSIsIkNvbGxhcHNpYmxlXzEiLCJXcmFwcGVkSW5maW5pdGVTY3JvbGwiLCJJbmZpbml0ZVNjcm9sbF8xIiwiV3JhcHBlZEtleWJvYXJkIiwiS2V5Ym9hcmRfMSIsIldyYXBwZWRNYXJrZG93biIsIldyYXBwZWRTa2lwTGluayIsImlkIiwiU2tpcExpbmtfMSIsIk1hcmtkb3duXzEiLCJzd2l0Y2hlcl8xIiwidGhlbWVfcHJvdmlkZXJfMSIsIkN1c3RvbVRoZW1lUHJvdmlkZXIiLCJ1c2VUaGVtZUNvbnRleHQiLCJjb25maWdfMSIsImhvb2tzXzEiLCJUaGVtZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaXNUaGVtZUxvYWRlZCIsInVzZVRoZW1lIiwic2V0VGhlbWVNb2RlIiwidXNlU3RhdGUiLCJ0aGVtZU5hbWUiLCJzZXRUaGVtZU5hbWUiLCJjdXJyZW50VGhlbWUiLCJzZXRDdXJyZW50VGhlbWUiLCJkaXJlY3RUaGVtZXMiLCJ1c2VFZmZlY3QiLCJsb2dTdG9yZWRUaGVtZXNTdGF0dXMiLCJjaGFuZ2VUaGVtZU1vZGUiLCJQcm92aWRlciIsImdyb21tZXRUaGVtZSIsImRlZmF1bHRQcm9wcyIsIkdyb21tZXQiLCJ1c2VDb250ZXh0IiwiZGFyayIsImZvbnQiLCJmYW1pbHkiLCJjaGVycnkiLCJydWJ5IiwiZ29sZCIsImFtZXRoeXN0IiwiYnJhbmQiLCJjb250cm9sIiwiaW5wdXQiLCJmb2N1cyIsImFuY2hvciIsInNlYVdhdmUiLCJic18xIiwibWRfMSIsInJlYWN0X3N3aXRjaF8xIiwic3R5bGVkX2NvbXBvbmVudHNfMSIsImRvd25PdXRBbmltYXRpb24iLCJrZXlmcmFtZXMiLCJ1c2VPdXRzaWRlQWxlcnRlciIsInJlZiIsImNsb3NlT25PdXRzaWRlIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiVGhlbWVTZWxlY3RvciIsImN1cnNvciIsIkRyb3BXaXRoQW5pbSIsIlRoZW1lRHJvcERvd24iLCJwb3NpdGlvbiIsIm9wYWNpdHkiLCJMaXN0IiwibWFyZ2luIiwicGFkZGluZyIsInRvcCIsInJpZ2h0IiwiTGlzdEl0ZW0iLCJTd2l0Y2hlclRleHQiLCJTd2l0Y2hlclNsaWRlciIsIlN3aXRjaGVyVHlwbyIsImZsZXhHcm93IiwiZ2FwIiwic2hvd1RoZW1lcyIsInNldFNob3dUaGVtZXMiLCJ3cmFwcGVyUmVmIiwidXNlUmVmIiwiZ2V0T3B0aW9ucyIsIm9wdGlvbkRpY3Rpb25hcnkiLCJwdXNoIiwibGFiZWwiLCJzaG93VXBkYXRlZFRoZW1lcyIsImhhbmRsZVN3aXRjaGxlQ2hhbmdlIiwiYWN0aXZhdGVUaGVtZSIsImV2ZSIsInNldFZhbHVlIiwiYXR0cmlidXRlcyIsIm5vZGVWYWx1ZSIsImdldExpc3RJdGVtcyIsIml0IiwiaXgiLCJrZXkiLCJCc0NoZWNrIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwib25DbGljayIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsInVuY2hlY2tlZEljb24iLCJjaGVja2VkSWNvbiIsIk1kT3V0bGluZUxpZ2h0TW9kZSIsIkJzRmlsbE1vb25TdGFyc0ZpbGwiLCJjaGVja09yU2V0VGhlbWVzIiwiZ2V0VGhlbWUiLCJnZXRUaGVtZXMiLCJzdHlsZXNfMSIsIkdsb2JhbFN0eWxlIiwiTWl4aW4iLCJBYnN0cmFjdHMiLCJ0aGVtZV8xIiwiVGhlbWVzIiwidXNlVGhlbWVfMSIsImNvbXBvbmVudHNfMSIsImdsb2JhbHNfMSJdLCJzb3VyY2VSb290IjoiIn0=