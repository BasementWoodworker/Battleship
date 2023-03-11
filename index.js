(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --size: 10;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  user-select: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.announcer {\n  position: absolute;\n  top: -220px;\n  font-size: 50px;\n  text-align: center;\n  padding: 8px;\n  border: 2px solid black;\n  border-radius: 4px;\n  width: 400px;\n}\n\n.your-board-container {\n  position:relative;\n}\n\n.gameboard {\n  position: relative;\n  flex-shrink: 0;\n  display: grid;\n  grid-template-columns: repeat(var(--size), 1fr);\n  width: 500px;\n  height: 500px;\n  border: 5px solid darkcyan;\n  margin: 50px;\n}\n\n.gameboard.player::before {\n  position: absolute;\n  content: \"Player\";\n  font-size: 48px;\n  top: -80px;\n  left: 170px;\n}\n\n.gameboard.enemy::before {\n  position: absolute;\n  content: \"AI\";\n  font-size: 48px;\n  top: -80px;\n  left: 210px;\n}\n\n.square {\n  border: 1px solid darkcyan;\n}\n\n.water {\n  background-color: aqua;\n}\n\n.water.checked {\n  background-color: green;\n}\n\n.ship {\n  background-color: darkgrey;\n}\n\n.ship.checked {\n  background-color: rgb(238, 69, 39);\n}\n\n.preview-board {\n  position: absolute;\n  z-index: 1;\n  top: -45px;\n  left: -43px;\n  pointer-events: none;\n  display: grid;\n  grid-template-columns: repeat(calc(var(--size) + 4), 1fr);\n  width: 687px;\n  height: 690px;\n}\n\n.preview-square.active {\n  background-color: rgba(255, 166, 0, 0.5);\n}\n\n.preview-square.active.problematic {\n  background-color: rgba(255, 68, 0, 0.5);\n}\n\n.utilities {\n  position: relative;\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.utilities > button {\n  font-size: 24px;\n  width: 150px;\n  padding: 8px;\n}\n\n.orientation-switch {\n  text-align: center;\n  font-size: 24px;\n  padding: 8px;\n  border: 1px solid black;\n}\n\n.orientation-switch::before {\n  content: \"Press R to rotate\\A\";\n  font-size: 20px;\n}\n\n.orientation-switch:hover {\n  transform: scale(1.01);\n  background-color: rgb(238, 237, 237);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,+CAA+C;EAC/C,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,UAAU;EACV,WAAW;AACb;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,WAAW;EACX,oBAAoB;EACpB,aAAa;EACb,yDAAyD;EACzD,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,oCAAoC;AACtC","sourcesContent":[":root {\n  --size: 10;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  user-select: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.announcer {\n  position: absolute;\n  top: -220px;\n  font-size: 50px;\n  text-align: center;\n  padding: 8px;\n  border: 2px solid black;\n  border-radius: 4px;\n  width: 400px;\n}\n\n.your-board-container {\n  position:relative;\n}\n\n.gameboard {\n  position: relative;\n  flex-shrink: 0;\n  display: grid;\n  grid-template-columns: repeat(var(--size), 1fr);\n  width: 500px;\n  height: 500px;\n  border: 5px solid darkcyan;\n  margin: 50px;\n}\n\n.gameboard.player::before {\n  position: absolute;\n  content: \"Player\";\n  font-size: 48px;\n  top: -80px;\n  left: 170px;\n}\n\n.gameboard.enemy::before {\n  position: absolute;\n  content: \"AI\";\n  font-size: 48px;\n  top: -80px;\n  left: 210px;\n}\n\n.square {\n  border: 1px solid darkcyan;\n}\n\n.water {\n  background-color: aqua;\n}\n\n.water.checked {\n  background-color: green;\n}\n\n.ship {\n  background-color: darkgrey;\n}\n\n.ship.checked {\n  background-color: rgb(238, 69, 39);\n}\n\n.preview-board {\n  position: absolute;\n  z-index: 1;\n  top: -45px;\n  left: -43px;\n  pointer-events: none;\n  display: grid;\n  grid-template-columns: repeat(calc(var(--size) + 4), 1fr);\n  width: 687px;\n  height: 690px;\n}\n\n.preview-square.active {\n  background-color: rgba(255, 166, 0, 0.5);\n}\n\n.preview-square.active.problematic {\n  background-color: rgba(255, 68, 0, 0.5);\n}\n\n.utilities {\n  position: relative;\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.utilities > button {\n  font-size: 24px;\n  width: 150px;\n  padding: 8px;\n}\n\n.orientation-switch {\n  text-align: center;\n  font-size: 24px;\n  padding: 8px;\n  border: 1px solid black;\n}\n\n.orientation-switch::before {\n  content: \"Press R to rotate\\A\";\n  font-size: 20px;\n}\n\n.orientation-switch:hover {\n  transform: scale(1.01);\n  background-color: rgb(238, 237, 237);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.js");
/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_gameboard__WEBPACK_IMPORTED_MODULE_3__);





const placeholder = new (_modules_gameboard__WEBPACK_IMPORTED_MODULE_3___default())();

_modules_DOM__WEBPACK_IMPORTED_MODULE_1__["default"].buildPage();
_modules_DOM__WEBPACK_IMPORTED_MODULE_1__["default"].displayBoard(placeholder, "yours");
_modules_DOM__WEBPACK_IMPORTED_MODULE_1__["default"].displayBoard(placeholder, "enemy's");

_modules_game__WEBPACK_IMPORTED_MODULE_2__["default"].newGame();

/***/ }),

/***/ "./src/modules/AI.js":
/*!***************************!*\
  !*** ./src/modules/AI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class AI {
  constructor(gameboard) {
    this.gameboard = gameboard;
    this.difficulty = "normal";
    this.foundShip = null;
    this.foundShipAdjacentCoords = [];
    this.foundShipOrientation = null;
    this.optionPositive = null;
    this.optionNegative = null;
    this.state = 0;
  }
  reset() {
    this.#legalMoves = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.#legalMoves.push({y: i, x: j});
      }
    }
    shuffleArray(this.#legalMoves);
  }
  #legalMoves;
  // 1. Do random shots until a ship is found
  // 2. Find ship's orientation
  // 3. Shoot in line until the ship ends (try both directions)
  takeTurn(enemyBoard) {
    if (this.state === 0)
      this.randomTurn(enemyBoard);
    else if (this.state === 1) 
      this.findShipOrientation(enemyBoard);
    else if (this.state === 2)
      this.shootInLine(enemyBoard);
  }
  randomTurn(enemyBoard) {
    let result;
    let y;
    let x;
    while (true) {
      const move = this.#legalMoves.shift();
      y = move.y;
      x = move.x;
      result = enemyBoard.receiveAttack(y, x);
      if (result !== "shot cancelled") break;
    }
    if (this.difficulty === "easy") return;
    if (result === "hit") {
      this.state = 1;
      this.foundShip = {y, x};
      this.foundShipAdjacentCoords.push({y: y + 1,x: x});
      this.foundShipAdjacentCoords.push({y: y - 1,x: x});
      this.foundShipAdjacentCoords.push({y: y,x: x + 1});
      this.foundShipAdjacentCoords.push({y: y,x: x - 1});
      shuffleArray(this.foundShipAdjacentCoords);
    }
  }
  findShipOrientation(enemyBoard) {
    const adjacent = this.foundShipAdjacentCoords.shift();
    if (adjacent === undefined) {
      this.state = 0;
      this.takeTurn(enemyBoard);
      return;
    }
    const result = enemyBoard.receiveAttack(adjacent.y, adjacent.x)
    if (result === "shot cancelled") {
      this.findShipOrientation(enemyBoard);
      return;
    }
    else if (result === "hit") {
      this.state = 2;
      this.foundShipAdjacentCoords = [];
      this.foundShipOrientation = Math.abs(this.foundShip.x - adjacent.x) > 0 ? "horizontal" : "vertical";
      if (this.foundShipOrientation === "horizontal") {
        this.optionPositive = {y: this.foundShip.y, x: Math.max(this.foundShip.x, adjacent.x) + 1};
        this.optionNegative = {y: this.foundShip.y, x: Math.min(this.foundShip.x, adjacent.x) - 1};
      } else {
        this.optionPositive = {y: Math.max(this.foundShip.y, adjacent.y) + 1, x: this.foundShip.x};
        this.optionNegative = {y: Math.min(this.foundShip.y, adjacent.y) - 1, x: this.foundShip.x};
      }
      return
    }
  }
  shootInLine(enemyBoard) {
    let result;
    if (this.optionPositive !== null) {
      result = enemyBoard.receiveAttack(this.optionPositive.y, this.optionPositive.x);
      if (result === "shot cancelled") {
        this.optionPositive = null;
        this.shootInLine(enemyBoard);
        return;
      } else if (result === "hit") {
        this.optionPositive = this.foundShipOrientation === "horizontal" ?
          {y: this.optionPositive.y, x: this.optionPositive.x + 1} :
          {y: this.optionPositive.y + 1, x: this.optionPositive.x};
        return;
      } else if (result === "shot missed") {
        this.optionPositive = null;
        return;
      }
    }
    if (this.optionNegative !== null) {
      result = enemyBoard.receiveAttack(this.optionNegative.y, this.optionNegative.x);
      if (result === "shot cancelled") {
        this.optionNegative = null;
        this.shootInLine(enemyBoard);
        return;
      } else if (result === "hit") {
        this.optionNegative = this.foundShipOrientation === "horizontal" ?
          {y: this.optionNegative.y, x: this.optionNegative.x - 1} :
          {y: this.optionNegative.y - 1, x: this.optionNegative.x};
        return;
      } else if (result === "shot missed") {
        this.optionNegative = null;
        return;
      }
    }
    this.foundShip = null;
    this.foundShipOrientation = null;
    this.state = 0;
    this.takeTurn(enemyBoard);
  }
}

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AI);

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element-custom-function */ "./src/modules/create-element-custom-function.js");


const SIZE = 10;
const PREVIEW_SIZE = SIZE + 4;

const body = document.body;
const announcer = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {Class: "announcer"});
const yourBoardContainer = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {Class: "your-board-container"});
const playerBoard = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {Class: "gameboard"});
playerBoard.classList.add("player");
const enemyBoard = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {Class: "gameboard"});
enemyBoard.classList.add("enemy");
const previewBoard = [];
const previewBoardElem = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {Class: "preview-board"});
const utilities = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {Class: "utilities"});
const orientationSwitch = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {Class: "orientation-switch"});
const randomPlacement = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("button", {Class: "random-button", Content: "Auto-placement"});
const newGame = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("button", {Class: "new-game", Content: "restart"});
const difficultyContainer = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {Class: "difficulty-container"});
const difficulty = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("select", {Class: "difficulty"});
difficulty.innerHTML = `
<option value = "normal">normal</option>
<option value = "easy">easy</option>
`;
difficultyContainer.append(
  (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {Content: "Difficulty"}),
  difficulty
)
utilities.append(
  announcer,
  difficultyContainer,
  orientationSwitch,
  randomPlacement,
  newGame
)

yourBoardContainer.append(playerBoard, previewBoardElem);

function buildPage() {
  body.append(
    yourBoardContainer,
    utilities,
    enemyBoard
  )
  for (let i = 0; i < PREVIEW_SIZE; i++) {
    const line = [];
    previewBoard.push(line);
    for (let j = 0; j < PREVIEW_SIZE; j++) {
      const previewSquare = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {Class: "preview-square"});
      if (i < 2 || i > 11 || j < 2 || j > 11) previewSquare.classList.add("problematic");
      else previewSquare.classList.add("resettable");
      line.push(previewSquare);
      previewBoardElem.appendChild(previewSquare);
    }
  }
}

function displayBoard(board, whose) {
  const boardElem = (whose === "yours") ? playerBoard : enemyBoard;
  board.array.forEach(line => {
    line.forEach(square => {
      const newElem = (0,_create_element_custom_function__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {Class: "square"});
      if (square.occupation !== "empty") newElem.classList.add("ship");
      else newElem.classList.add("water");
      newElem.setAttribute("data-y", board.array.indexOf(line));
      newElem.setAttribute("data-x", line.indexOf(square));
      boardElem.appendChild(newElem);
    })
  })
}

function refreshBoard(board, whose, showShips = true) {
  const boardNodeList = (whose === "yours") ? playerBoard.children : enemyBoard.children;
  const hideShips = (whose === "yours") ? false : true;
  let i = 0;
  board.array.forEach(line => {
    line.forEach(square => {
      if (square.occupation !== "empty" && (showShips || square.checked)) {
        boardNodeList[i].classList.remove("water");
        boardNodeList[i].classList.add("ship");
      }
      if (square.checked) boardNodeList[i].classList.add("checked");
      i++;
    })
  })
}

function clearBoards() {
  for (let i = 0; i < SIZE * SIZE; i++) {
    playerBoard.children[i].classList.remove("ship", "checked")
    playerBoard.children[i].classList.add("water");
    enemyBoard.children[i].classList.remove("ship", "checked")
    enemyBoard.children[i].classList.add("water");
  }
}

// Preview
function activatePreviewSquare(position) {
  previewBoard[position.y + 2][position.x + 2].classList.add("active");
}
function deactivatePreviewSquare(position) {
  previewBoard[position.y + 2][position.x + 2].classList.remove("active");
}
function deactivateAllPreviewSquares() {
  for (const square of previewBoardElem.children) {
    square.classList.remove("active");
  }
}
function markPreviewSquareProblematic(position) {
  previewBoard[position.y + 2][position.x + 2].classList.add("problematic");
}
function resetAllPreviewSquares() {
  for (const square of previewBoardElem.children) {
    if (square.classList.contains("resettable")) square.classList.remove("problematic");
  }
}

function updateAnnouncer(message, color = "black") {
  announcer.textContent = message;
  announcer.style.color = color;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  playerBoard,
  enemyBoard,
  orientationSwitch,
  randomPlacement,
  difficulty,
  newGame,
  buildPage,
  displayBoard,
  refreshBoard,
  clearBoards,
  activatePreviewSquare,
  deactivatePreviewSquare,
  deactivateAllPreviewSquares,
  resetAllPreviewSquares,
  markPreviewSquareProblematic,
  updateAnnouncer
});

/***/ }),

/***/ "./src/modules/create-element-custom-function.js":
/*!*******************************************************!*\
  !*** ./src/modules/create-element-custom-function.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElem)
/* harmony export */ });
function createElem(elemType, {Class = "", Content = ""}) {
  const temp = document.createElement(elemType);
  temp.className = Class;
  temp.textContent = Content;
  return temp;
}

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* harmony import */ var _AI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AI */ "./src/modules/AI.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gameboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ships */ "./src/modules/ships.js");
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ships__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM */ "./src/modules/DOM.js");






const placementSound = new Audio(__webpack_require__(/*! ../sounds/placed.wav */ "./src/sounds/placed.wav"));

const gamePhases = [
  {
  start: placementPhase,
  cleanup: placementPhaseCleanup
  },
  {
  start: battlePhase,
  cleanup: battlePhaseCleanup
  },
  {
  start: gameEnd
  }
];
let currentPhase = 0;
let moveToNextPhase = false;
let orientation = "horizontal";
let you;
let yourBoard;
let yourShips = []; // !Might be redundant!
let enemy;
let enemyBoard;
let enemyShips = [];
let winner;
let previousPreviewCoords = [];
let currentPreviewSquare;
const emptyGameboard = new (_gameboard__WEBPACK_IMPORTED_MODULE_2___default())();

window.addEventListener("click", gamePhaseHandler);

function gamePhaseHandler() {
  if (moveToNextPhase) {
    if (gamePhases[currentPhase].cleanup !== undefined) gamePhases[currentPhase].cleanup();
    currentPhase++;
    moveToNextPhase = false;
    gamePhases[currentPhase].start();
  }
}

function removeEventListeners(board) {
  board.forEach(square => square.replaceWith(square.cloneNode()));
}

function newGame() {
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].randomPlacement.disabled = false;
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].difficulty.disabled = false;
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].newGame.disabled = true;
  you = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](new (_gameboard__WEBPACK_IMPORTED_MODULE_2___default()));
  enemy = new _AI__WEBPACK_IMPORTED_MODULE_1__["default"](new (_gameboard__WEBPACK_IMPORTED_MODULE_2___default()));
  enemy.reset();
  gamePhases[0].start();
}

// Phase 0
function placementPhase() {
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].updateAnnouncer("Place your ships");
  // AI placement
  enemyShips = [
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(5),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(4),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(4),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(3),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(3),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(2),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(2),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(2)
  ];
  enemy.gameboard.placeAllRandomly(enemyShips);
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].refreshBoard(enemy.gameboard, "enemy's", false);

  // Your placement
  yourShips = [
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(5),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(4),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(4),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(3),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(3),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(2),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(2),
    new (_ships__WEBPACK_IMPORTED_MODULE_3___default())(2)
  ];
  // Placed them two there because javascript was executing faster than DOM elements managed to load
  yourBoard = [..._DOM__WEBPACK_IMPORTED_MODULE_4__["default"].playerBoard.children];
  enemyBoard = [..._DOM__WEBPACK_IMPORTED_MODULE_4__["default"].enemyBoard.children];
  yourBoard.forEach(square => square.addEventListener("click", (event) => {
    placeYourShip(event);
    if (yourShips.length === 0) moveToNextPhase = true;
  }))
  yourBoard.forEach(square => square.addEventListener("mouseover", (event) => {
    showPlacementPreview(event);
  }))
  yourBoard.forEach(square => square.addEventListener("mouseleave", (event) => {
    previousPreviewCoords.forEach(position => _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].deactivatePreviewSquare(position));
    currentPreviewSquare = undefined;
  }))
}

function placeYourShip(event) {
  const y = Number (event.target.getAttribute("data-y"));
  const x = Number (event.target.getAttribute("data-x"));
  const ship = yourShips.shift();
  const result = you.gameboard.placeShip(ship, y, x, orientation);
  if (result === "Placement cancelled") {
    yourShips.unshift(ship);
    return;
  } else {
    placementSound.play();
    _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].refreshBoard(you.gameboard, "yours");
    previousPreviewCoords.forEach(position => {
      _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].deactivatePreviewSquare(position);
      _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].markPreviewSquareProblematic(position);
    });
  }
}

function showPlacementPreview(event) {
  const y = Number (event.target.getAttribute("data-y"));
  const x = Number (event.target.getAttribute("data-x"));
  const ship = yourShips[0];
  if (ship === undefined) return;
  currentPreviewSquare = event;
  const coords = you.gameboard.getPlacementCoordinates(ship, y, x, orientation);
  previousPreviewCoords = coords;
  coords.forEach(position => _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].activatePreviewSquare(position));
}

function placementPhaseCleanup() {
  removeEventListeners(yourBoard);
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].deactivateAllPreviewSquares();
}

// Phase 1
function battlePhase() {
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].updateAnnouncer("Battle Phase");
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].newGame.disabled = false;
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].difficulty.disabled = true;
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].randomPlacement.disabled = true;
  enemyBoard.forEach(square => square.addEventListener("click", (event) => {
    const y = Number (event.target.getAttribute("data-y"));
    const x = Number (event.target.getAttribute("data-x"));
    if (you.takeTurn(y, x, enemy.gameboard) === "shot cancelled") return;
    _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].refreshBoard(enemy.gameboard, "enemy's", false);
    if (!enemy.gameboard.shipsLeft()) {
      winner = "you";
      moveToNextPhase = true;
      // Return to prevent edge-case scenario where you destroy last enemy ship, and he destroys the last of yours too.
      return;
    }
    enemy.takeTurn(you.gameboard);
    _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].refreshBoard(you.gameboard, "yours");
    if (!you.gameboard.shipsLeft()) {
      winner = "enemy";
      moveToNextPhase = true;
    }
  }))
}

function battlePhaseCleanup() {
  removeEventListeners(enemyBoard);
}

// Phase 2
function gameEnd() {
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].refreshBoard(enemy.gameboard, "enemy's");
  if (winner === "you") _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].updateAnnouncer("You won", "green");
  else if (winner === "enemy") _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].updateAnnouncer("You lost", "red");
}

function finalCleanup() {
  currentPhase = 0;
  removeEventListeners(yourBoard);
  removeEventListeners(enemyBoard);
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].clearBoards();
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].resetAllPreviewSquares();
  newGame();
}


// Rotation
_DOM__WEBPACK_IMPORTED_MODULE_4__["default"].orientationSwitch.textContent = orientation;
_DOM__WEBPACK_IMPORTED_MODULE_4__["default"].orientationSwitch.addEventListener("click", () => {
  orientation = (orientation === "horizontal") ? "vertical" : "horizontal";
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].orientationSwitch.textContent = orientation;
  previousPreviewCoords.forEach(position => _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].deactivatePreviewSquare(position));
  if (currentPreviewSquare !== undefined) showPlacementPreview(currentPreviewSquare);
})

window.addEventListener("keydown", (event) => {
  if (event.key === "r") _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].orientationSwitch.click()
})

// Auto-placement
_DOM__WEBPACK_IMPORTED_MODULE_4__["default"].randomPlacement.addEventListener("click", () => {
  you.gameboard.placeAllRandomly(yourShips);
  _DOM__WEBPACK_IMPORTED_MODULE_4__["default"].refreshBoard(you.gameboard, "yours");
  moveToNextPhase = true;
})

// Difficulty
_DOM__WEBPACK_IMPORTED_MODULE_4__["default"].difficulty.addEventListener("change", (event) => enemy.difficulty = event.target.value);

// New Game button
_DOM__WEBPACK_IMPORTED_MODULE_4__["default"].newGame.addEventListener("click", finalCleanup);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  newGame
});

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((module) => {

class Gameboard {
  constructor() {
    this.array = this.#buildBattlefield(this.#SIZE);
    this.ships = [];
  }
  #SIZE = 10;
  #buildBattlefield(size) {
    const result = [];
    for (let i = 0; i < size; i++) {
      const line = [];
      result.push(line);
      for (let j = 0; j < size; j++) {
        line.push(new Square);
      }
    }
    return result;
  }
  getPlacementCoordinates(ship, y, x, orientation) {
    const coords = [];
    let i = 0;
    let shift = 0;
    while(true) {
      if (orientation === "horizontal") coords.push({y, x: (x - shift)})
      if (orientation === "vertical") coords.push({y: (y - shift), x})
      i++;
      if (i === ship.length) break;
      shift++;
      if (orientation === "horizontal") coords.push({y, x: (x + shift)})
      if (orientation === "vertical") coords.push({y: (y + shift), x})
      i++;
      if (i === ship.length) break;
    }
    return coords;
  }
  placeShip(ship, y, x, orientation) {
    const coords = this.getPlacementCoordinates(ship, y, x, orientation);
    for (const point of coords) {
      if (point.x < 0 || point.x > this.#SIZE - 1 || point.y < 0 || point.y > this.#SIZE - 1) return "Placement cancelled";
      if (this.array[point.y][point.x].occupation !== "empty") return "Placement cancelled";
    }
    for (const point of coords) {
      this.array[point.y][point.x].occupation = ship;
    }
    this.ships.push(ship);
  }
  receiveAttack(y, x) {
    if (x < 0 || x > this.#SIZE - 1 || y < 0 || y > this.#SIZE - 1) return "shot cancelled";
    const square = this.array[y][x];
    if (square.checked) return "shot cancelled"
    square.checked = true;
    if (square.occupation !== "empty") {
      square.occupation.hit();
      return "hit";
    } else return "shot missed";
  }
  shipsLeft() {
    for (const ship of this.ships) {
      if (!ship.sunk) return true;
    }
    return false;
  }
  placeAllRandomly(shipsForPlacement = []) {
    while (shipsForPlacement.length !== 0) {
      const ship = shipsForPlacement.shift();
      const x = Math.floor(Math.random()*this.#SIZE);
      const y = Math.floor(Math.random()*this.#SIZE);
      const orientation = Math.random() <= 0.5 ? "horizontal" : "vertical";
      if (this.placeShip(ship, y, x, orientation) === "Placement cancelled") shipsForPlacement.unshift(ship);
    }
  }
}

class Square {
  constructor() {
    this.checked = false;
    this.occupation = "empty";
  }
}

module.exports = Gameboard;

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }
  takeTurn(y, x, enemyBoard) {
    return enemyBoard.receiveAttack(y, x);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/modules/ships.js":
/*!******************************!*\
  !*** ./src/modules/ships.js ***!
  \******************************/
/***/ ((module) => {

class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }
  hit() {
    this.timesHit += 1;
    this.sunk = this.isSunk();
  }
  isSunk() {
    return (this.timesHit === this.length) ? true : false;
  }
}


module.exports = Ship;

/***/ }),

/***/ "./src/sounds/placed.wav":
/*!*******************************!*\
  !*** ./src/sounds/placed.wav ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7421a8f14b59a0c74664.wav";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvQUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY3JlYXRlLWVsZW1lbnQtY3VzdG9tLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNpemU6IDEwO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYW5ub3VuY2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTIyMHB4O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi55b3VyLWJvYXJkLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1zaXplKSwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBkYXJrY3lhbjtcXG4gIG1hcmdpbjogNTBweDtcXG59XFxuXFxuLmdhbWVib2FyZC5wbGF5ZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiUGxheWVyXFxcIjtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIHRvcDogLTgwcHg7XFxuICBsZWZ0OiAxNzBweDtcXG59XFxuXFxuLmdhbWVib2FyZC5lbmVteTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJBSVxcXCI7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICB0b3A6IC04MHB4O1xcbiAgbGVmdDogMjEwcHg7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2N5YW47XFxufVxcblxcbi53YXRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4ud2F0ZXIuY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi5zaGlwLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgNjksIDM5KTtcXG59XFxuXFxuLnByZXZpZXctYm9hcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogLTQ1cHg7XFxuICBsZWZ0OiAtNDNweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGNhbGModmFyKC0tc2l6ZSkgKyA0KSwgMWZyKTtcXG4gIHdpZHRoOiA2ODdweDtcXG4gIGhlaWdodDogNjkwcHg7XFxufVxcblxcbi5wcmV2aWV3LXNxdWFyZS5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC41KTtcXG59XFxuXFxuLnByZXZpZXctc3F1YXJlLmFjdGl2ZS5wcm9ibGVtYXRpYyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNjgsIDAsIDAuNSk7XFxufVxcblxcbi51dGlsaXRpZXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udXRpbGl0aWVzID4gYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLm9yaWVudGF0aW9uLXN3aXRjaCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm9yaWVudGF0aW9uLXN3aXRjaDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJQcmVzcyBSIHRvIHJvdGF0ZVxcXFxBXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm9yaWVudGF0aW9uLXN3aXRjaDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM3LCAyMzcpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix5REFBeUQ7RUFDekQsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1zaXplOiAxMDtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFubm91bmNlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0yMjBweDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4ueW91ci1ib2FyZC1jb250YWluZXIge1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tc2l6ZSksIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgZGFya2N5YW47XFxuICBtYXJnaW46IDUwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQucGxheWVyOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlBsYXllclxcXCI7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICB0b3A6IC04MHB4O1xcbiAgbGVmdDogMTcwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQuZW5lbXk6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiQUlcXFwiO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgdG9wOiAtODBweDtcXG4gIGxlZnQ6IDIxMHB4O1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtjeWFuO1xcbn1cXG5cXG4ud2F0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLndhdGVyLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcbn1cXG5cXG4uc2hpcC5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDY5LCAzOSk7XFxufVxcblxcbi5wcmV2aWV3LWJvYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IC00NXB4O1xcbiAgbGVmdDogLTQzcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChjYWxjKHZhcigtLXNpemUpICsgNCksIDFmcik7XFxuICB3aWR0aDogNjg3cHg7XFxuICBoZWlnaHQ6IDY5MHB4O1xcbn1cXG5cXG4ucHJldmlldy1zcXVhcmUuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNSk7XFxufVxcblxcbi5wcmV2aWV3LXNxdWFyZS5hY3RpdmUucHJvYmxlbWF0aWMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDY4LCAwLCAwLjUpO1xcbn1cXG5cXG4udXRpbGl0aWVzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnV0aWxpdGllcyA+IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5vcmllbnRhdGlvbi1zd2l0Y2gge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5vcmllbnRhdGlvbi1zd2l0Y2g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiUHJlc3MgUiB0byByb3RhdGVcXFxcQVxcXCI7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5vcmllbnRhdGlvbi1zd2l0Y2g6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzNywgMjM3KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBET00gZnJvbSBcIi4vbW9kdWxlcy9ET01cIjtcbmltcG9ydCBnYW1lIGZyb20gXCIuL21vZHVsZXMvZ2FtZVwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9tb2R1bGVzL2dhbWVib2FyZFwiO1xuXG5jb25zdCBwbGFjZWhvbGRlciA9IG5ldyBHYW1lYm9hcmQoKTtcblxuRE9NLmJ1aWxkUGFnZSgpO1xuRE9NLmRpc3BsYXlCb2FyZChwbGFjZWhvbGRlciwgXCJ5b3Vyc1wiKTtcbkRPTS5kaXNwbGF5Qm9hcmQocGxhY2Vob2xkZXIsIFwiZW5lbXknc1wiKTtcblxuZ2FtZS5uZXdHYW1lKCk7IiwiY2xhc3MgQUkge1xuICBjb25zdHJ1Y3RvcihnYW1lYm9hcmQpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICB0aGlzLmRpZmZpY3VsdHkgPSBcIm5vcm1hbFwiO1xuICAgIHRoaXMuZm91bmRTaGlwID0gbnVsbDtcbiAgICB0aGlzLmZvdW5kU2hpcEFkamFjZW50Q29vcmRzID0gW107XG4gICAgdGhpcy5mb3VuZFNoaXBPcmllbnRhdGlvbiA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25Qb3NpdGl2ZSA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25OZWdhdGl2ZSA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IDA7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy4jbGVnYWxNb3ZlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIHRoaXMuI2xlZ2FsTW92ZXMucHVzaCh7eTogaSwgeDogan0pO1xuICAgICAgfVxuICAgIH1cbiAgICBzaHVmZmxlQXJyYXkodGhpcy4jbGVnYWxNb3Zlcyk7XG4gIH1cbiAgI2xlZ2FsTW92ZXM7XG4gIC8vIDEuIERvIHJhbmRvbSBzaG90cyB1bnRpbCBhIHNoaXAgaXMgZm91bmRcbiAgLy8gMi4gRmluZCBzaGlwJ3Mgb3JpZW50YXRpb25cbiAgLy8gMy4gU2hvb3QgaW4gbGluZSB1bnRpbCB0aGUgc2hpcCBlbmRzICh0cnkgYm90aCBkaXJlY3Rpb25zKVxuICB0YWtlVHVybihlbmVteUJvYXJkKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IDApXG4gICAgICB0aGlzLnJhbmRvbVR1cm4oZW5lbXlCb2FyZCk7XG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gMSkgXG4gICAgICB0aGlzLmZpbmRTaGlwT3JpZW50YXRpb24oZW5lbXlCb2FyZCk7XG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gMilcbiAgICAgIHRoaXMuc2hvb3RJbkxpbmUoZW5lbXlCb2FyZCk7XG4gIH1cbiAgcmFuZG9tVHVybihlbmVteUJvYXJkKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgeTtcbiAgICBsZXQgeDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgbW92ZSA9IHRoaXMuI2xlZ2FsTW92ZXMuc2hpZnQoKTtcbiAgICAgIHkgPSBtb3ZlLnk7XG4gICAgICB4ID0gbW92ZS54O1xuICAgICAgcmVzdWx0ID0gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHksIHgpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gXCJzaG90IGNhbmNlbGxlZFwiKSBicmVhaztcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlmZmljdWx0eSA9PT0gXCJlYXN5XCIpIHJldHVybjtcbiAgICBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAgIHRoaXMuZm91bmRTaGlwID0ge3ksIHh9O1xuICAgICAgdGhpcy5mb3VuZFNoaXBBZGphY2VudENvb3Jkcy5wdXNoKHt5OiB5ICsgMSx4OiB4fSk7XG4gICAgICB0aGlzLmZvdW5kU2hpcEFkamFjZW50Q29vcmRzLnB1c2goe3k6IHkgLSAxLHg6IHh9KTtcbiAgICAgIHRoaXMuZm91bmRTaGlwQWRqYWNlbnRDb29yZHMucHVzaCh7eTogeSx4OiB4ICsgMX0pO1xuICAgICAgdGhpcy5mb3VuZFNoaXBBZGphY2VudENvb3Jkcy5wdXNoKHt5OiB5LHg6IHggLSAxfSk7XG4gICAgICBzaHVmZmxlQXJyYXkodGhpcy5mb3VuZFNoaXBBZGphY2VudENvb3Jkcyk7XG4gICAgfVxuICB9XG4gIGZpbmRTaGlwT3JpZW50YXRpb24oZW5lbXlCb2FyZCkge1xuICAgIGNvbnN0IGFkamFjZW50ID0gdGhpcy5mb3VuZFNoaXBBZGphY2VudENvb3Jkcy5zaGlmdCgpO1xuICAgIGlmIChhZGphY2VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0YXRlID0gMDtcbiAgICAgIHRoaXMudGFrZVR1cm4oZW5lbXlCb2FyZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhhZGphY2VudC55LCBhZGphY2VudC54KVxuICAgIGlmIChyZXN1bHQgPT09IFwic2hvdCBjYW5jZWxsZWRcIikge1xuICAgICAgdGhpcy5maW5kU2hpcE9yaWVudGF0aW9uKGVuZW15Qm9hcmQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAyO1xuICAgICAgdGhpcy5mb3VuZFNoaXBBZGphY2VudENvb3JkcyA9IFtdO1xuICAgICAgdGhpcy5mb3VuZFNoaXBPcmllbnRhdGlvbiA9IE1hdGguYWJzKHRoaXMuZm91bmRTaGlwLnggLSBhZGphY2VudC54KSA+IDAgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcbiAgICAgIGlmICh0aGlzLmZvdW5kU2hpcE9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICB0aGlzLm9wdGlvblBvc2l0aXZlID0ge3k6IHRoaXMuZm91bmRTaGlwLnksIHg6IE1hdGgubWF4KHRoaXMuZm91bmRTaGlwLngsIGFkamFjZW50LngpICsgMX07XG4gICAgICAgIHRoaXMub3B0aW9uTmVnYXRpdmUgPSB7eTogdGhpcy5mb3VuZFNoaXAueSwgeDogTWF0aC5taW4odGhpcy5mb3VuZFNoaXAueCwgYWRqYWNlbnQueCkgLSAxfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3B0aW9uUG9zaXRpdmUgPSB7eTogTWF0aC5tYXgodGhpcy5mb3VuZFNoaXAueSwgYWRqYWNlbnQueSkgKyAxLCB4OiB0aGlzLmZvdW5kU2hpcC54fTtcbiAgICAgICAgdGhpcy5vcHRpb25OZWdhdGl2ZSA9IHt5OiBNYXRoLm1pbih0aGlzLmZvdW5kU2hpcC55LCBhZGphY2VudC55KSAtIDEsIHg6IHRoaXMuZm91bmRTaGlwLnh9O1xuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIHNob290SW5MaW5lKGVuZW15Qm9hcmQpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0aGlzLm9wdGlvblBvc2l0aXZlICE9PSBudWxsKSB7XG4gICAgICByZXN1bHQgPSBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2sodGhpcy5vcHRpb25Qb3NpdGl2ZS55LCB0aGlzLm9wdGlvblBvc2l0aXZlLngpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gXCJzaG90IGNhbmNlbGxlZFwiKSB7XG4gICAgICAgIHRoaXMub3B0aW9uUG9zaXRpdmUgPSBudWxsO1xuICAgICAgICB0aGlzLnNob290SW5MaW5lKGVuZW15Qm9hcmQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJoaXRcIikge1xuICAgICAgICB0aGlzLm9wdGlvblBvc2l0aXZlID0gdGhpcy5mb3VuZFNoaXBPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgP1xuICAgICAgICAgIHt5OiB0aGlzLm9wdGlvblBvc2l0aXZlLnksIHg6IHRoaXMub3B0aW9uUG9zaXRpdmUueCArIDF9IDpcbiAgICAgICAgICB7eTogdGhpcy5vcHRpb25Qb3NpdGl2ZS55ICsgMSwgeDogdGhpcy5vcHRpb25Qb3NpdGl2ZS54fTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwic2hvdCBtaXNzZWRcIikge1xuICAgICAgICB0aGlzLm9wdGlvblBvc2l0aXZlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25OZWdhdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgcmVzdWx0ID0gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHRoaXMub3B0aW9uTmVnYXRpdmUueSwgdGhpcy5vcHRpb25OZWdhdGl2ZS54KTtcbiAgICAgIGlmIChyZXN1bHQgPT09IFwic2hvdCBjYW5jZWxsZWRcIikge1xuICAgICAgICB0aGlzLm9wdGlvbk5lZ2F0aXZlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaG9vdEluTGluZShlbmVteUJvYXJkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgdGhpcy5vcHRpb25OZWdhdGl2ZSA9IHRoaXMuZm91bmRTaGlwT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID9cbiAgICAgICAgICB7eTogdGhpcy5vcHRpb25OZWdhdGl2ZS55LCB4OiB0aGlzLm9wdGlvbk5lZ2F0aXZlLnggLSAxfSA6XG4gICAgICAgICAge3k6IHRoaXMub3B0aW9uTmVnYXRpdmUueSAtIDEsIHg6IHRoaXMub3B0aW9uTmVnYXRpdmUueH07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcInNob3QgbWlzc2VkXCIpIHtcbiAgICAgICAgdGhpcy5vcHRpb25OZWdhdGl2ZSA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5mb3VuZFNoaXAgPSBudWxsO1xuICAgIHRoaXMuZm91bmRTaGlwT3JpZW50YXRpb24gPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgIHRoaXMudGFrZVR1cm4oZW5lbXlCb2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5KSB7XG4gIGFycmF5LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFJOyIsImltcG9ydCBjcmVhdGVFbGVtIGZyb20gXCIuL2NyZWF0ZS1lbGVtZW50LWN1c3RvbS1mdW5jdGlvblwiO1xuXG5jb25zdCBTSVpFID0gMTA7XG5jb25zdCBQUkVWSUVXX1NJWkUgPSBTSVpFICsgNDtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBhbm5vdW5jZXIgPSBjcmVhdGVFbGVtKFwiZGl2XCIsIHtDbGFzczogXCJhbm5vdW5jZXJcIn0pO1xuY29uc3QgeW91ckJvYXJkQ29udGFpbmVyID0gY3JlYXRlRWxlbShcImRpdlwiLCB7Q2xhc3M6IFwieW91ci1ib2FyZC1jb250YWluZXJcIn0pO1xuY29uc3QgcGxheWVyQm9hcmQgPSBjcmVhdGVFbGVtKFwiZGl2XCIsIHtDbGFzczogXCJnYW1lYm9hcmRcIn0pO1xucGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllclwiKTtcbmNvbnN0IGVuZW15Qm9hcmQgPSBjcmVhdGVFbGVtKFwiZGl2XCIsIHtDbGFzczogXCJnYW1lYm9hcmRcIn0pO1xuZW5lbXlCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlcIik7XG5jb25zdCBwcmV2aWV3Qm9hcmQgPSBbXTtcbmNvbnN0IHByZXZpZXdCb2FyZEVsZW0gPSBjcmVhdGVFbGVtKFwiZGl2XCIsIHtDbGFzczogXCJwcmV2aWV3LWJvYXJkXCJ9KTtcbmNvbnN0IHV0aWxpdGllcyA9IGNyZWF0ZUVsZW0oXCJkaXZcIiwge0NsYXNzOiBcInV0aWxpdGllc1wifSk7XG5jb25zdCBvcmllbnRhdGlvblN3aXRjaCA9IGNyZWF0ZUVsZW0oXCJkaXZcIiwge0NsYXNzOiBcIm9yaWVudGF0aW9uLXN3aXRjaFwifSk7XG5jb25zdCByYW5kb21QbGFjZW1lbnQgPSBjcmVhdGVFbGVtKFwiYnV0dG9uXCIsIHtDbGFzczogXCJyYW5kb20tYnV0dG9uXCIsIENvbnRlbnQ6IFwiQXV0by1wbGFjZW1lbnRcIn0pO1xuY29uc3QgbmV3R2FtZSA9IGNyZWF0ZUVsZW0oXCJidXR0b25cIiwge0NsYXNzOiBcIm5ldy1nYW1lXCIsIENvbnRlbnQ6IFwicmVzdGFydFwifSk7XG5jb25zdCBkaWZmaWN1bHR5Q29udGFpbmVyID0gY3JlYXRlRWxlbShcImRpdlwiLCB7Q2xhc3M6IFwiZGlmZmljdWx0eS1jb250YWluZXJcIn0pO1xuY29uc3QgZGlmZmljdWx0eSA9IGNyZWF0ZUVsZW0oXCJzZWxlY3RcIiwge0NsYXNzOiBcImRpZmZpY3VsdHlcIn0pO1xuZGlmZmljdWx0eS5pbm5lckhUTUwgPSBgXG48b3B0aW9uIHZhbHVlID0gXCJub3JtYWxcIj5ub3JtYWw8L29wdGlvbj5cbjxvcHRpb24gdmFsdWUgPSBcImVhc3lcIj5lYXN5PC9vcHRpb24+XG5gO1xuZGlmZmljdWx0eUNvbnRhaW5lci5hcHBlbmQoXG4gIGNyZWF0ZUVsZW0oXCJkaXZcIiwge0NvbnRlbnQ6IFwiRGlmZmljdWx0eVwifSksXG4gIGRpZmZpY3VsdHlcbilcbnV0aWxpdGllcy5hcHBlbmQoXG4gIGFubm91bmNlcixcbiAgZGlmZmljdWx0eUNvbnRhaW5lcixcbiAgb3JpZW50YXRpb25Td2l0Y2gsXG4gIHJhbmRvbVBsYWNlbWVudCxcbiAgbmV3R2FtZVxuKVxuXG55b3VyQm9hcmRDb250YWluZXIuYXBwZW5kKHBsYXllckJvYXJkLCBwcmV2aWV3Qm9hcmRFbGVtKTtcblxuZnVuY3Rpb24gYnVpbGRQYWdlKCkge1xuICBib2R5LmFwcGVuZChcbiAgICB5b3VyQm9hcmRDb250YWluZXIsXG4gICAgdXRpbGl0aWVzLFxuICAgIGVuZW15Qm9hcmRcbiAgKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IFBSRVZJRVdfU0laRTsgaSsrKSB7XG4gICAgY29uc3QgbGluZSA9IFtdO1xuICAgIHByZXZpZXdCb2FyZC5wdXNoKGxpbmUpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgUFJFVklFV19TSVpFOyBqKyspIHtcbiAgICAgIGNvbnN0IHByZXZpZXdTcXVhcmUgPSBjcmVhdGVFbGVtKFwiZGl2XCIsIHtDbGFzczogXCJwcmV2aWV3LXNxdWFyZVwifSk7XG4gICAgICBpZiAoaSA8IDIgfHwgaSA+IDExIHx8IGogPCAyIHx8IGogPiAxMSkgcHJldmlld1NxdWFyZS5jbGFzc0xpc3QuYWRkKFwicHJvYmxlbWF0aWNcIik7XG4gICAgICBlbHNlIHByZXZpZXdTcXVhcmUuY2xhc3NMaXN0LmFkZChcInJlc2V0dGFibGVcIik7XG4gICAgICBsaW5lLnB1c2gocHJldmlld1NxdWFyZSk7XG4gICAgICBwcmV2aWV3Qm9hcmRFbGVtLmFwcGVuZENoaWxkKHByZXZpZXdTcXVhcmUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoYm9hcmQsIHdob3NlKSB7XG4gIGNvbnN0IGJvYXJkRWxlbSA9ICh3aG9zZSA9PT0gXCJ5b3Vyc1wiKSA/IHBsYXllckJvYXJkIDogZW5lbXlCb2FyZDtcbiAgYm9hcmQuYXJyYXkuZm9yRWFjaChsaW5lID0+IHtcbiAgICBsaW5lLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgIGNvbnN0IG5ld0VsZW0gPSBjcmVhdGVFbGVtKFwiZGl2XCIsIHtDbGFzczogXCJzcXVhcmVcIn0pO1xuICAgICAgaWYgKHNxdWFyZS5vY2N1cGF0aW9uICE9PSBcImVtcHR5XCIpIG5ld0VsZW0uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICBlbHNlIG5ld0VsZW0uY2xhc3NMaXN0LmFkZChcIndhdGVyXCIpO1xuICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgYm9hcmQuYXJyYXkuaW5kZXhPZihsaW5lKSk7XG4gICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBsaW5lLmluZGV4T2Yoc3F1YXJlKSk7XG4gICAgICBib2FyZEVsZW0uYXBwZW5kQ2hpbGQobmV3RWxlbSk7XG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVmcmVzaEJvYXJkKGJvYXJkLCB3aG9zZSwgc2hvd1NoaXBzID0gdHJ1ZSkge1xuICBjb25zdCBib2FyZE5vZGVMaXN0ID0gKHdob3NlID09PSBcInlvdXJzXCIpID8gcGxheWVyQm9hcmQuY2hpbGRyZW4gOiBlbmVteUJvYXJkLmNoaWxkcmVuO1xuICBjb25zdCBoaWRlU2hpcHMgPSAod2hvc2UgPT09IFwieW91cnNcIikgPyBmYWxzZSA6IHRydWU7XG4gIGxldCBpID0gMDtcbiAgYm9hcmQuYXJyYXkuZm9yRWFjaChsaW5lID0+IHtcbiAgICBsaW5lLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgIGlmIChzcXVhcmUub2NjdXBhdGlvbiAhPT0gXCJlbXB0eVwiICYmIChzaG93U2hpcHMgfHwgc3F1YXJlLmNoZWNrZWQpKSB7XG4gICAgICAgIGJvYXJkTm9kZUxpc3RbaV0uY2xhc3NMaXN0LnJlbW92ZShcIndhdGVyXCIpO1xuICAgICAgICBib2FyZE5vZGVMaXN0W2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNxdWFyZS5jaGVja2VkKSBib2FyZE5vZGVMaXN0W2ldLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgaSsrO1xuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNsZWFyQm9hcmRzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFNJWkUgKiBTSVpFOyBpKyspIHtcbiAgICBwbGF5ZXJCb2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiLCBcImNoZWNrZWRcIilcbiAgICBwbGF5ZXJCb2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwid2F0ZXJcIik7XG4gICAgZW5lbXlCb2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiLCBcImNoZWNrZWRcIilcbiAgICBlbmVteUJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoXCJ3YXRlclwiKTtcbiAgfVxufVxuXG4vLyBQcmV2aWV3XG5mdW5jdGlvbiBhY3RpdmF0ZVByZXZpZXdTcXVhcmUocG9zaXRpb24pIHtcbiAgcHJldmlld0JvYXJkW3Bvc2l0aW9uLnkgKyAyXVtwb3NpdGlvbi54ICsgMl0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIGRlYWN0aXZhdGVQcmV2aWV3U3F1YXJlKHBvc2l0aW9uKSB7XG4gIHByZXZpZXdCb2FyZFtwb3NpdGlvbi55ICsgMl1bcG9zaXRpb24ueCArIDJdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG59XG5mdW5jdGlvbiBkZWFjdGl2YXRlQWxsUHJldmlld1NxdWFyZXMoKSB7XG4gIGZvciAoY29uc3Qgc3F1YXJlIG9mIHByZXZpZXdCb2FyZEVsZW0uY2hpbGRyZW4pIHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFya1ByZXZpZXdTcXVhcmVQcm9ibGVtYXRpYyhwb3NpdGlvbikge1xuICBwcmV2aWV3Qm9hcmRbcG9zaXRpb24ueSArIDJdW3Bvc2l0aW9uLnggKyAyXS5jbGFzc0xpc3QuYWRkKFwicHJvYmxlbWF0aWNcIik7XG59XG5mdW5jdGlvbiByZXNldEFsbFByZXZpZXdTcXVhcmVzKCkge1xuICBmb3IgKGNvbnN0IHNxdWFyZSBvZiBwcmV2aWV3Qm9hcmRFbGVtLmNoaWxkcmVuKSB7XG4gICAgaWYgKHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyZXNldHRhYmxlXCIpKSBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInByb2JsZW1hdGljXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFubm91bmNlcihtZXNzYWdlLCBjb2xvciA9IFwiYmxhY2tcIikge1xuICBhbm5vdW5jZXIudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICBhbm5vdW5jZXIuc3R5bGUuY29sb3IgPSBjb2xvcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwbGF5ZXJCb2FyZCxcbiAgZW5lbXlCb2FyZCxcbiAgb3JpZW50YXRpb25Td2l0Y2gsXG4gIHJhbmRvbVBsYWNlbWVudCxcbiAgZGlmZmljdWx0eSxcbiAgbmV3R2FtZSxcbiAgYnVpbGRQYWdlLFxuICBkaXNwbGF5Qm9hcmQsXG4gIHJlZnJlc2hCb2FyZCxcbiAgY2xlYXJCb2FyZHMsXG4gIGFjdGl2YXRlUHJldmlld1NxdWFyZSxcbiAgZGVhY3RpdmF0ZVByZXZpZXdTcXVhcmUsXG4gIGRlYWN0aXZhdGVBbGxQcmV2aWV3U3F1YXJlcyxcbiAgcmVzZXRBbGxQcmV2aWV3U3F1YXJlcyxcbiAgbWFya1ByZXZpZXdTcXVhcmVQcm9ibGVtYXRpYyxcbiAgdXBkYXRlQW5ub3VuY2VyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbShlbGVtVHlwZSwge0NsYXNzID0gXCJcIiwgQ29udGVudCA9IFwiXCJ9KSB7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1UeXBlKTtcbiAgdGVtcC5jbGFzc05hbWUgPSBDbGFzcztcbiAgdGVtcC50ZXh0Q29udGVudCA9IENvbnRlbnQ7XG4gIHJldHVybiB0ZW1wO1xufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgQUkgZnJvbSBcIi4vQUlcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwc1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9ET01cIjtcblxuY29uc3QgcGxhY2VtZW50U291bmQgPSBuZXcgQXVkaW8ocmVxdWlyZShcIi4uL3NvdW5kcy9wbGFjZWQud2F2XCIpKTtcblxuY29uc3QgZ2FtZVBoYXNlcyA9IFtcbiAge1xuICBzdGFydDogcGxhY2VtZW50UGhhc2UsXG4gIGNsZWFudXA6IHBsYWNlbWVudFBoYXNlQ2xlYW51cFxuICB9LFxuICB7XG4gIHN0YXJ0OiBiYXR0bGVQaGFzZSxcbiAgY2xlYW51cDogYmF0dGxlUGhhc2VDbGVhbnVwXG4gIH0sXG4gIHtcbiAgc3RhcnQ6IGdhbWVFbmRcbiAgfVxuXTtcbmxldCBjdXJyZW50UGhhc2UgPSAwO1xubGV0IG1vdmVUb05leHRQaGFzZSA9IGZhbHNlO1xubGV0IG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG5sZXQgeW91O1xubGV0IHlvdXJCb2FyZDtcbmxldCB5b3VyU2hpcHMgPSBbXTsgLy8gIU1pZ2h0IGJlIHJlZHVuZGFudCFcbmxldCBlbmVteTtcbmxldCBlbmVteUJvYXJkO1xubGV0IGVuZW15U2hpcHMgPSBbXTtcbmxldCB3aW5uZXI7XG5sZXQgcHJldmlvdXNQcmV2aWV3Q29vcmRzID0gW107XG5sZXQgY3VycmVudFByZXZpZXdTcXVhcmU7XG5jb25zdCBlbXB0eUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lUGhhc2VIYW5kbGVyKTtcblxuZnVuY3Rpb24gZ2FtZVBoYXNlSGFuZGxlcigpIHtcbiAgaWYgKG1vdmVUb05leHRQaGFzZSkge1xuICAgIGlmIChnYW1lUGhhc2VzW2N1cnJlbnRQaGFzZV0uY2xlYW51cCAhPT0gdW5kZWZpbmVkKSBnYW1lUGhhc2VzW2N1cnJlbnRQaGFzZV0uY2xlYW51cCgpO1xuICAgIGN1cnJlbnRQaGFzZSsrO1xuICAgIG1vdmVUb05leHRQaGFzZSA9IGZhbHNlO1xuICAgIGdhbWVQaGFzZXNbY3VycmVudFBoYXNlXS5zdGFydCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKGJvYXJkKSB7XG4gIGJvYXJkLmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS5yZXBsYWNlV2l0aChzcXVhcmUuY2xvbmVOb2RlKCkpKTtcbn1cblxuZnVuY3Rpb24gbmV3R2FtZSgpIHtcbiAgRE9NLnJhbmRvbVBsYWNlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICBET00uZGlmZmljdWx0eS5kaXNhYmxlZCA9IGZhbHNlO1xuICBET00ubmV3R2FtZS5kaXNhYmxlZCA9IHRydWU7XG4gIHlvdSA9IG5ldyBQbGF5ZXIobmV3IEdhbWVib2FyZCk7XG4gIGVuZW15ID0gbmV3IEFJKG5ldyBHYW1lYm9hcmQpO1xuICBlbmVteS5yZXNldCgpO1xuICBnYW1lUGhhc2VzWzBdLnN0YXJ0KCk7XG59XG5cbi8vIFBoYXNlIDBcbmZ1bmN0aW9uIHBsYWNlbWVudFBoYXNlKCkge1xuICBET00udXBkYXRlQW5ub3VuY2VyKFwiUGxhY2UgeW91ciBzaGlwc1wiKTtcbiAgLy8gQUkgcGxhY2VtZW50XG4gIGVuZW15U2hpcHMgPSBbXG4gICAgbmV3IFNoaXAoNSksXG4gICAgbmV3IFNoaXAoNCksXG4gICAgbmV3IFNoaXAoNCksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMiksXG4gICAgbmV3IFNoaXAoMiksXG4gICAgbmV3IFNoaXAoMilcbiAgXTtcbiAgZW5lbXkuZ2FtZWJvYXJkLnBsYWNlQWxsUmFuZG9tbHkoZW5lbXlTaGlwcyk7XG4gIERPTS5yZWZyZXNoQm9hcmQoZW5lbXkuZ2FtZWJvYXJkLCBcImVuZW15J3NcIiwgZmFsc2UpO1xuXG4gIC8vIFlvdXIgcGxhY2VtZW50XG4gIHlvdXJTaGlwcyA9IFtcbiAgICBuZXcgU2hpcCg1KSxcbiAgICBuZXcgU2hpcCg0KSxcbiAgICBuZXcgU2hpcCg0KSxcbiAgICBuZXcgU2hpcCgzKSxcbiAgICBuZXcgU2hpcCgzKSxcbiAgICBuZXcgU2hpcCgyKSxcbiAgICBuZXcgU2hpcCgyKSxcbiAgICBuZXcgU2hpcCgyKVxuICBdO1xuICAvLyBQbGFjZWQgdGhlbSB0d28gdGhlcmUgYmVjYXVzZSBqYXZhc2NyaXB0IHdhcyBleGVjdXRpbmcgZmFzdGVyIHRoYW4gRE9NIGVsZW1lbnRzIG1hbmFnZWQgdG8gbG9hZFxuICB5b3VyQm9hcmQgPSBbLi4uRE9NLnBsYXllckJvYXJkLmNoaWxkcmVuXTtcbiAgZW5lbXlCb2FyZCA9IFsuLi5ET00uZW5lbXlCb2FyZC5jaGlsZHJlbl07XG4gIHlvdXJCb2FyZC5mb3JFYWNoKHNxdWFyZSA9PiBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIHBsYWNlWW91clNoaXAoZXZlbnQpO1xuICAgIGlmICh5b3VyU2hpcHMubGVuZ3RoID09PSAwKSBtb3ZlVG9OZXh0UGhhc2UgPSB0cnVlO1xuICB9KSlcbiAgeW91ckJvYXJkLmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChldmVudCkgPT4ge1xuICAgIHNob3dQbGFjZW1lbnRQcmV2aWV3KGV2ZW50KTtcbiAgfSkpXG4gIHlvdXJCb2FyZC5mb3JFYWNoKHNxdWFyZSA9PiBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgcHJldmlvdXNQcmV2aWV3Q29vcmRzLmZvckVhY2gocG9zaXRpb24gPT4gRE9NLmRlYWN0aXZhdGVQcmV2aWV3U3F1YXJlKHBvc2l0aW9uKSk7XG4gICAgY3VycmVudFByZXZpZXdTcXVhcmUgPSB1bmRlZmluZWQ7XG4gIH0pKVxufVxuXG5mdW5jdGlvbiBwbGFjZVlvdXJTaGlwKGV2ZW50KSB7XG4gIGNvbnN0IHkgPSBOdW1iZXIgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIikpO1xuICBjb25zdCB4ID0gTnVtYmVyIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKTtcbiAgY29uc3Qgc2hpcCA9IHlvdXJTaGlwcy5zaGlmdCgpO1xuICBjb25zdCByZXN1bHQgPSB5b3UuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCB5LCB4LCBvcmllbnRhdGlvbik7XG4gIGlmIChyZXN1bHQgPT09IFwiUGxhY2VtZW50IGNhbmNlbGxlZFwiKSB7XG4gICAgeW91clNoaXBzLnVuc2hpZnQoc2hpcCk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHBsYWNlbWVudFNvdW5kLnBsYXkoKTtcbiAgICBET00ucmVmcmVzaEJvYXJkKHlvdS5nYW1lYm9hcmQsIFwieW91cnNcIik7XG4gICAgcHJldmlvdXNQcmV2aWV3Q29vcmRzLmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgRE9NLmRlYWN0aXZhdGVQcmV2aWV3U3F1YXJlKHBvc2l0aW9uKTtcbiAgICAgIERPTS5tYXJrUHJldmlld1NxdWFyZVByb2JsZW1hdGljKHBvc2l0aW9uKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93UGxhY2VtZW50UHJldmlldyhldmVudCkge1xuICBjb25zdCB5ID0gTnVtYmVyIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcbiAgY29uc3QgeCA9IE51bWJlciAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKSk7XG4gIGNvbnN0IHNoaXAgPSB5b3VyU2hpcHNbMF07XG4gIGlmIChzaGlwID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgY3VycmVudFByZXZpZXdTcXVhcmUgPSBldmVudDtcbiAgY29uc3QgY29vcmRzID0geW91LmdhbWVib2FyZC5nZXRQbGFjZW1lbnRDb29yZGluYXRlcyhzaGlwLCB5LCB4LCBvcmllbnRhdGlvbik7XG4gIHByZXZpb3VzUHJldmlld0Nvb3JkcyA9IGNvb3JkcztcbiAgY29vcmRzLmZvckVhY2gocG9zaXRpb24gPT4gRE9NLmFjdGl2YXRlUHJldmlld1NxdWFyZShwb3NpdGlvbikpO1xufVxuXG5mdW5jdGlvbiBwbGFjZW1lbnRQaGFzZUNsZWFudXAoKSB7XG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKHlvdXJCb2FyZCk7XG4gIERPTS5kZWFjdGl2YXRlQWxsUHJldmlld1NxdWFyZXMoKTtcbn1cblxuLy8gUGhhc2UgMVxuZnVuY3Rpb24gYmF0dGxlUGhhc2UoKSB7XG4gIERPTS51cGRhdGVBbm5vdW5jZXIoXCJCYXR0bGUgUGhhc2VcIik7XG4gIERPTS5uZXdHYW1lLmRpc2FibGVkID0gZmFsc2U7XG4gIERPTS5kaWZmaWN1bHR5LmRpc2FibGVkID0gdHJ1ZTtcbiAgRE9NLnJhbmRvbVBsYWNlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gIGVuZW15Qm9hcmQuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB5ID0gTnVtYmVyIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcbiAgICBjb25zdCB4ID0gTnVtYmVyIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKTtcbiAgICBpZiAoeW91LnRha2VUdXJuKHksIHgsIGVuZW15LmdhbWVib2FyZCkgPT09IFwic2hvdCBjYW5jZWxsZWRcIikgcmV0dXJuO1xuICAgIERPTS5yZWZyZXNoQm9hcmQoZW5lbXkuZ2FtZWJvYXJkLCBcImVuZW15J3NcIiwgZmFsc2UpO1xuICAgIGlmICghZW5lbXkuZ2FtZWJvYXJkLnNoaXBzTGVmdCgpKSB7XG4gICAgICB3aW5uZXIgPSBcInlvdVwiO1xuICAgICAgbW92ZVRvTmV4dFBoYXNlID0gdHJ1ZTtcbiAgICAgIC8vIFJldHVybiB0byBwcmV2ZW50IGVkZ2UtY2FzZSBzY2VuYXJpbyB3aGVyZSB5b3UgZGVzdHJveSBsYXN0IGVuZW15IHNoaXAsIGFuZCBoZSBkZXN0cm95cyB0aGUgbGFzdCBvZiB5b3VycyB0b28uXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZW15LnRha2VUdXJuKHlvdS5nYW1lYm9hcmQpO1xuICAgIERPTS5yZWZyZXNoQm9hcmQoeW91LmdhbWVib2FyZCwgXCJ5b3Vyc1wiKTtcbiAgICBpZiAoIXlvdS5nYW1lYm9hcmQuc2hpcHNMZWZ0KCkpIHtcbiAgICAgIHdpbm5lciA9IFwiZW5lbXlcIjtcbiAgICAgIG1vdmVUb05leHRQaGFzZSA9IHRydWU7XG4gICAgfVxuICB9KSlcbn1cblxuZnVuY3Rpb24gYmF0dGxlUGhhc2VDbGVhbnVwKCkge1xuICByZW1vdmVFdmVudExpc3RlbmVycyhlbmVteUJvYXJkKTtcbn1cblxuLy8gUGhhc2UgMlxuZnVuY3Rpb24gZ2FtZUVuZCgpIHtcbiAgRE9NLnJlZnJlc2hCb2FyZChlbmVteS5nYW1lYm9hcmQsIFwiZW5lbXknc1wiKTtcbiAgaWYgKHdpbm5lciA9PT0gXCJ5b3VcIikgRE9NLnVwZGF0ZUFubm91bmNlcihcIllvdSB3b25cIiwgXCJncmVlblwiKTtcbiAgZWxzZSBpZiAod2lubmVyID09PSBcImVuZW15XCIpIERPTS51cGRhdGVBbm5vdW5jZXIoXCJZb3UgbG9zdFwiLCBcInJlZFwiKTtcbn1cblxuZnVuY3Rpb24gZmluYWxDbGVhbnVwKCkge1xuICBjdXJyZW50UGhhc2UgPSAwO1xuICByZW1vdmVFdmVudExpc3RlbmVycyh5b3VyQm9hcmQpO1xuICByZW1vdmVFdmVudExpc3RlbmVycyhlbmVteUJvYXJkKTtcbiAgRE9NLmNsZWFyQm9hcmRzKCk7XG4gIERPTS5yZXNldEFsbFByZXZpZXdTcXVhcmVzKCk7XG4gIG5ld0dhbWUoKTtcbn1cblxuXG4vLyBSb3RhdGlvblxuRE9NLm9yaWVudGF0aW9uU3dpdGNoLnRleHRDb250ZW50ID0gb3JpZW50YXRpb247XG5ET00ub3JpZW50YXRpb25Td2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3JpZW50YXRpb24gPSAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICBET00ub3JpZW50YXRpb25Td2l0Y2gudGV4dENvbnRlbnQgPSBvcmllbnRhdGlvbjtcbiAgcHJldmlvdXNQcmV2aWV3Q29vcmRzLmZvckVhY2gocG9zaXRpb24gPT4gRE9NLmRlYWN0aXZhdGVQcmV2aWV3U3F1YXJlKHBvc2l0aW9uKSk7XG4gIGlmIChjdXJyZW50UHJldmlld1NxdWFyZSAhPT0gdW5kZWZpbmVkKSBzaG93UGxhY2VtZW50UHJldmlldyhjdXJyZW50UHJldmlld1NxdWFyZSk7XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09IFwiclwiKSBET00ub3JpZW50YXRpb25Td2l0Y2guY2xpY2soKVxufSlcblxuLy8gQXV0by1wbGFjZW1lbnRcbkRPTS5yYW5kb21QbGFjZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgeW91LmdhbWVib2FyZC5wbGFjZUFsbFJhbmRvbWx5KHlvdXJTaGlwcyk7XG4gIERPTS5yZWZyZXNoQm9hcmQoeW91LmdhbWVib2FyZCwgXCJ5b3Vyc1wiKTtcbiAgbW92ZVRvTmV4dFBoYXNlID0gdHJ1ZTtcbn0pXG5cbi8vIERpZmZpY3VsdHlcbkRPTS5kaWZmaWN1bHR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiBlbmVteS5kaWZmaWN1bHR5ID0gZXZlbnQudGFyZ2V0LnZhbHVlKTtcblxuLy8gTmV3IEdhbWUgYnV0dG9uXG5ET00ubmV3R2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmluYWxDbGVhbnVwKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5ld0dhbWVcbn0iLCJjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gdGhpcy4jYnVpbGRCYXR0bGVmaWVsZCh0aGlzLiNTSVpFKTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cbiAgI1NJWkUgPSAxMDtcbiAgI2J1aWxkQmF0dGxlZmllbGQoc2l6ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lID0gW107XG4gICAgICByZXN1bHQucHVzaChsaW5lKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgIGxpbmUucHVzaChuZXcgU3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBnZXRQbGFjZW1lbnRDb29yZGluYXRlcyhzaGlwLCB5LCB4LCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgc2hpZnQgPSAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIGNvb3Jkcy5wdXNoKHt5LCB4OiAoeCAtIHNoaWZ0KX0pXG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikgY29vcmRzLnB1c2goe3k6ICh5IC0gc2hpZnQpLCB4fSlcbiAgICAgIGkrKztcbiAgICAgIGlmIChpID09PSBzaGlwLmxlbmd0aCkgYnJlYWs7XG4gICAgICBzaGlmdCsrO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikgY29vcmRzLnB1c2goe3ksIHg6ICh4ICsgc2hpZnQpfSlcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSBjb29yZHMucHVzaCh7eTogKHkgKyBzaGlmdCksIHh9KVxuICAgICAgaSsrO1xuICAgICAgaWYgKGkgPT09IHNoaXAubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkcztcbiAgfVxuICBwbGFjZVNoaXAoc2hpcCwgeSwgeCwgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBjb29yZHMgPSB0aGlzLmdldFBsYWNlbWVudENvb3JkaW5hdGVzKHNoaXAsIHksIHgsIG9yaWVudGF0aW9uKTtcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIGNvb3Jkcykge1xuICAgICAgaWYgKHBvaW50LnggPCAwIHx8IHBvaW50LnggPiB0aGlzLiNTSVpFIC0gMSB8fCBwb2ludC55IDwgMCB8fCBwb2ludC55ID4gdGhpcy4jU0laRSAtIDEpIHJldHVybiBcIlBsYWNlbWVudCBjYW5jZWxsZWRcIjtcbiAgICAgIGlmICh0aGlzLmFycmF5W3BvaW50LnldW3BvaW50LnhdLm9jY3VwYXRpb24gIT09IFwiZW1wdHlcIikgcmV0dXJuIFwiUGxhY2VtZW50IGNhbmNlbGxlZFwiO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIGNvb3Jkcykge1xuICAgICAgdGhpcy5hcnJheVtwb2ludC55XVtwb2ludC54XS5vY2N1cGF0aW9uID0gc2hpcDtcbiAgICB9XG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICB9XG4gIHJlY2VpdmVBdHRhY2soeSwgeCkge1xuICAgIGlmICh4IDwgMCB8fCB4ID4gdGhpcy4jU0laRSAtIDEgfHwgeSA8IDAgfHwgeSA+IHRoaXMuI1NJWkUgLSAxKSByZXR1cm4gXCJzaG90IGNhbmNlbGxlZFwiO1xuICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuYXJyYXlbeV1beF07XG4gICAgaWYgKHNxdWFyZS5jaGVja2VkKSByZXR1cm4gXCJzaG90IGNhbmNlbGxlZFwiXG4gICAgc3F1YXJlLmNoZWNrZWQgPSB0cnVlO1xuICAgIGlmIChzcXVhcmUub2NjdXBhdGlvbiAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICBzcXVhcmUub2NjdXBhdGlvbi5oaXQoKTtcbiAgICAgIHJldHVybiBcImhpdFwiO1xuICAgIH0gZWxzZSByZXR1cm4gXCJzaG90IG1pc3NlZFwiO1xuICB9XG4gIHNoaXBzTGVmdCgpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgaWYgKCFzaGlwLnN1bmspIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcGxhY2VBbGxSYW5kb21seShzaGlwc0ZvclBsYWNlbWVudCA9IFtdKSB7XG4gICAgd2hpbGUgKHNoaXBzRm9yUGxhY2VtZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzRm9yUGxhY2VtZW50LnNoaWZ0KCk7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMuI1NJWkUpO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLiNTSVpFKTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8PSAwLjUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcbiAgICAgIGlmICh0aGlzLnBsYWNlU2hpcChzaGlwLCB5LCB4LCBvcmllbnRhdGlvbikgPT09IFwiUGxhY2VtZW50IGNhbmNlbGxlZFwiKSBzaGlwc0ZvclBsYWNlbWVudC51bnNoaWZ0KHNoaXApO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBTcXVhcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9jY3VwYXRpb24gPSBcImVtcHR5XCI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7IiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZWJvYXJkKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gIH1cbiAgdGFrZVR1cm4oeSwgeCwgZW5lbXlCb2FyZCkge1xuICAgIHJldHVybiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeSwgeCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxuICBoaXQoKSB7XG4gICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICAgIHRoaXMuc3VuayA9IHRoaXMuaXNTdW5rKCk7XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiAodGhpcy50aW1lc0hpdCA9PT0gdGhpcy5sZW5ndGgpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==