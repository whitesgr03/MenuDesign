"use strict";
(self["webpackChunky"] = self["webpackChunky"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/carousel.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/carousel.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/home.png */ "./src/img/home.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/ballot.png */ "./src/img/ballot.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/play.png */ "./src/img/play.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/photo.png */ "./src/img/photo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --itemWidth: 500px;\n    --itemHeight: 100%;\n}\n\n.carousel {\n    position: relative;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.carousel .arrow {\n    background: white;\n    border-radius: 20px;\n    width: 48px;\n    height: 48px;\n    font-size: 25px;\n    border: 1px solid black;\n    color: black;\n}\n\n.carousel .arrow:focus {\n    outline: none;\n}\n\n.carousel .arrow:hover {\n    background: black;\n    color: white;\n}\n\n.carousel .wrap {\n    width: 240px;\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n}\n\n.carousel .list {\n    display: flex;\n    transition: transform 0.2s ease;\n    align-items: center;\n    height: 100%;\n}\n\n.carousel .list a {\n    display: inline-block;\n    width: 60px;\n}\n\n.carousel .list .icon {\n    display: inline-block;\n    width: 25px;\n    height: 25px;\n    background-size: cover;\n}\n\n.carousel .list .item:nth-child(1) .icon {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.carousel .list .item:nth-child(2) .icon {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.carousel .list .item:nth-child(3) .icon {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.carousel .list .item:nth-child(4) .icon {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n/* carousel circular */\n\n.carousel.circular .wrap {\n    width: var(--itemWidth);\n    height: var(--itemHeight);\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    position: static;\n}\n\n.carousel.circular .list {\n    transition: none;\n}\n\n.carousel.circular .list .item {\n    width: var(--itemWidth);\n    height: var(--itemHeight);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousel.circular img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.carousel.circular .dotsList {\n    position: absolute;\n    bottom: 5px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    column-gap: 5px;\n}\n\n.carousel.circular .dotsList .dot {\n    cursor: pointer;\n}\n\n.carousel.circular .dotsList button {\n    padding: 5px;\n    border-radius: 50%;\n    border: 1px solid black;\n    background-color: white;\n    position: relative;\n    overflow: hidden;\n    display: block;\n    cursor: pointer;\n}\n\n.carousel.circular .dotsList button::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    transform: translateY(100%);\n    transition: transform 0.1s;\n}\n\n.carousel.circular .dotsList .active button::after {\n    transform: translateY(0%);\n}\n", "",{"version":3,"sources":["webpack://./src/css/carousel.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,yDAAwC;AAC5C;AACA;IACI,yDAA0C;AAC9C;AACA;IACI,yDAAwC;AAC5C;AACA;IACI,yDAAyC;AAC7C;;AAEA,sBAAsB;;AAEtB;IACI,uBAAuB;IACvB,yBAAyB;IACzB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,2BAA2B;IAC3B,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[":root {\n    --itemWidth: 500px;\n    --itemHeight: 100%;\n}\n\n.carousel {\n    position: relative;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.carousel .arrow {\n    background: white;\n    border-radius: 20px;\n    width: 48px;\n    height: 48px;\n    font-size: 25px;\n    border: 1px solid black;\n    color: black;\n}\n\n.carousel .arrow:focus {\n    outline: none;\n}\n\n.carousel .arrow:hover {\n    background: black;\n    color: white;\n}\n\n.carousel .wrap {\n    width: 240px;\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n}\n\n.carousel .list {\n    display: flex;\n    transition: transform 0.2s ease;\n    align-items: center;\n    height: 100%;\n}\n\n.carousel .list a {\n    display: inline-block;\n    width: 60px;\n}\n\n.carousel .list .icon {\n    display: inline-block;\n    width: 25px;\n    height: 25px;\n    background-size: cover;\n}\n\n.carousel .list .item:nth-child(1) .icon {\n    background-image: url(\"../img/home.png\");\n}\n.carousel .list .item:nth-child(2) .icon {\n    background-image: url(\"../img/ballot.png\");\n}\n.carousel .list .item:nth-child(3) .icon {\n    background-image: url(\"../img/play.png\");\n}\n.carousel .list .item:nth-child(4) .icon {\n    background-image: url(\"../img/photo.png\");\n}\n\n/* carousel circular */\n\n.carousel.circular .wrap {\n    width: var(--itemWidth);\n    height: var(--itemHeight);\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    position: static;\n}\n\n.carousel.circular .list {\n    transition: none;\n}\n\n.carousel.circular .list .item {\n    width: var(--itemWidth);\n    height: var(--itemHeight);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousel.circular img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.carousel.circular .dotsList {\n    position: absolute;\n    bottom: 5px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    column-gap: 5px;\n}\n\n.carousel.circular .dotsList .dot {\n    cursor: pointer;\n}\n\n.carousel.circular .dotsList button {\n    padding: 5px;\n    border-radius: 50%;\n    border: 1px solid black;\n    background-color: white;\n    position: relative;\n    overflow: hidden;\n    display: block;\n    cursor: pointer;\n}\n\n.carousel.circular .dotsList button::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    transform: translateY(100%);\n    transition: transform 0.1s;\n}\n\n.carousel.circular .dotsList .active button::after {\n    transform: translateY(0%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/dropdown.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/dropdown.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* dropdown */\n\n.dropdown {\n    position: relative;\n    transform-style: preserve-3d;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.dropdown.menu {\n    transition: border-radius 0.3s ease;\n}\n\n.dropdown.menu:hover {\n    border-radius: 10px 10px 0px 0px;\n    transition: border-radius 0.1s ease;\n}\n\n.dropdown .title {\n    position: relative;\n}\n\n.dropdown .title::before {\n    content: \"▶\";\n    position: absolute;\n    color: green;\n    left: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    margin-left: 5px;\n    transition: transform 0.1s ease;\n}\n\n.dropdown:hover .title::before {\n    transform: translateY(-50%) rotate(90deg);\n}\n\n.dropdown .list {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    bottom: 0;\n    left: -1px;\n    right: -1px;\n    visibility: hidden;\n    opacity: 0;\n    pointer-events: none;\n    transform: translateZ(-1px);\n    background-color: #fff;\n    transition: transform 0.6s ease, opacity 0.2s ease, visibility 0.2s ease;\n}\n\n.dropdown .item {\n    width: 100%;\n    opacity: 0;\n    visibility: hidden;\n    border-left: 1px solid black;\n    border-right: 1px solid black;\n    transition: opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;\n}\n\n.dropdown .item:nth-child(1) {\n    transition-delay: 0.01s;\n}\n.dropdown .item:nth-child(2) {\n    transition-delay: 0.03s;\n}\n.dropdown .item:nth-child(3) {\n    transition-delay: 0.05s;\n}\n\n.dropdown .item:not(:nth-child(2)) {\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n}\n\n.dropdown .item:last-of-type {\n    border-radius: 0px 0px 10px 10px;\n}\n\n.dropdown:hover .list {\n    visibility: visible;\n    opacity: 1;\n    pointer-events: all;\n    transform: translateZ(-1px) translateY(100%);\n    transition: transform 0.1s ease, opacity 0.5s ease;\n}\n\n.dropdown:hover .item {\n    opacity: 1;\n    visibility: visible;\n}\n\n.dropdown .item > button {\n    width: 100%;\n    padding: 20px;\n}\n\n.dropdown.active .item > button:hover {\n    background-color: cornflowerblue;\n}\n", "",{"version":3,"sources":["webpack://./src/css/dropdown.css"],"names":[],"mappings":"AAAA,aAAa;;AAEb;IACI,kBAAkB;IAClB,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gCAAgC;IAChC,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,QAAQ;IACR,2BAA2B;IAC3B,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,oBAAoB;IACpB,2BAA2B;IAC3B,sBAAsB;IACtB,wEAAwE;AAC5E;;AAEA;IACI,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,4BAA4B;IAC5B,6BAA6B;IAC7B,iEAAiE;AACrE;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,mBAAmB;IACnB,4CAA4C;IAC5C,kDAAkD;AACtD;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":["/* dropdown */\n\n.dropdown {\n    position: relative;\n    transform-style: preserve-3d;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.dropdown.menu {\n    transition: border-radius 0.3s ease;\n}\n\n.dropdown.menu:hover {\n    border-radius: 10px 10px 0px 0px;\n    transition: border-radius 0.1s ease;\n}\n\n.dropdown .title {\n    position: relative;\n}\n\n.dropdown .title::before {\n    content: \"▶\";\n    position: absolute;\n    color: green;\n    left: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    margin-left: 5px;\n    transition: transform 0.1s ease;\n}\n\n.dropdown:hover .title::before {\n    transform: translateY(-50%) rotate(90deg);\n}\n\n.dropdown .list {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    bottom: 0;\n    left: -1px;\n    right: -1px;\n    visibility: hidden;\n    opacity: 0;\n    pointer-events: none;\n    transform: translateZ(-1px);\n    background-color: #fff;\n    transition: transform 0.6s ease, opacity 0.2s ease, visibility 0.2s ease;\n}\n\n.dropdown .item {\n    width: 100%;\n    opacity: 0;\n    visibility: hidden;\n    border-left: 1px solid black;\n    border-right: 1px solid black;\n    transition: opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;\n}\n\n.dropdown .item:nth-child(1) {\n    transition-delay: 0.01s;\n}\n.dropdown .item:nth-child(2) {\n    transition-delay: 0.03s;\n}\n.dropdown .item:nth-child(3) {\n    transition-delay: 0.05s;\n}\n\n.dropdown .item:not(:nth-child(2)) {\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n}\n\n.dropdown .item:last-of-type {\n    border-radius: 0px 0px 10px 10px;\n}\n\n.dropdown:hover .list {\n    visibility: visible;\n    opacity: 1;\n    pointer-events: all;\n    transform: translateZ(-1px) translateY(100%);\n    transition: transform 0.1s ease, opacity 0.5s ease;\n}\n\n.dropdown:hover .item {\n    opacity: 1;\n    visibility: visible;\n}\n\n.dropdown .item > button {\n    width: 100%;\n    padding: 20px;\n}\n\n.dropdown.active .item > button:hover {\n    background-color: cornflowerblue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/hamburger.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/hamburger.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* hamburger */\n\n.hamburger {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hamburger .icon {\n    height: 25px;\n    width: 25px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hamburger .icon span,\n.hamburger .icon > span::before,\n.hamburger .icon > span::after {\n    display: inline-block;\n    width: 25px;\n    height: 3px;\n    background-color: black;\n    transition: all 0.2s ease;\n}\n\n.hamburger .icon span {\n    position: relative;\n}\n\n.hamburger .icon > span::before {\n    content: \"\";\n    position: absolute;\n    top: 8px;\n    left: 0;\n    right: 0;\n}\n.hamburger .icon > span::after {\n    content: \"\";\n    position: absolute;\n    bottom: 8px;\n    left: 0;\n    right: 0;\n}\n\n.hamburger.active .icon > span {\n    background-color: transparent;\n}\n\n.hamburger.active .icon > span::before {\n    transform: rotate(45deg) translate(-5px, -6px);\n}\n.hamburger.active .icon > span::after {\n    transform: rotate(-45deg) translate(-5px, 6px);\n}\n\n.hamburger .list {\n    position: fixed;\n    height: 100%;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    transform: translateX(-30vh);\n    opacity: 0;\n    visibility: hidden;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    background-color: #fff;\n    cursor: auto;\n    transition: all 0.3s ease-out;\n}\n\n.hamburger.active .list {\n    opacity: 1;\n    visibility: visible;\n    transform: translateX(0vh);\n    width: 30vh;\n}\n\n.hamburger .item {\n    width: 100%;\n    padding: 20px;\n}\n\n.hamburger .item > button {\n    width: 100%;\n    border-radius: 20px;\n    padding: 10px 30px;\n}\n\n.hamburger .item > button:hover {\n    background-color: cornflowerblue;\n}\n", "",{"version":3,"sources":["webpack://./src/css/hamburger.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;;IAGI,qBAAqB;IACrB,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,QAAQ;AACZ;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,QAAQ;AACZ;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,8CAA8C;AAClD;AACA;IACI,8CAA8C;AAClD;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,OAAO;IACP,MAAM;IACN,SAAS;IACT,4BAA4B;IAC5B,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,sBAAsB;IACtB,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,0BAA0B;IAC1B,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":["/* hamburger */\n\n.hamburger {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hamburger .icon {\n    height: 25px;\n    width: 25px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hamburger .icon span,\n.hamburger .icon > span::before,\n.hamburger .icon > span::after {\n    display: inline-block;\n    width: 25px;\n    height: 3px;\n    background-color: black;\n    transition: all 0.2s ease;\n}\n\n.hamburger .icon span {\n    position: relative;\n}\n\n.hamburger .icon > span::before {\n    content: \"\";\n    position: absolute;\n    top: 8px;\n    left: 0;\n    right: 0;\n}\n.hamburger .icon > span::after {\n    content: \"\";\n    position: absolute;\n    bottom: 8px;\n    left: 0;\n    right: 0;\n}\n\n.hamburger.active .icon > span {\n    background-color: transparent;\n}\n\n.hamburger.active .icon > span::before {\n    transform: rotate(45deg) translate(-5px, -6px);\n}\n.hamburger.active .icon > span::after {\n    transform: rotate(-45deg) translate(-5px, 6px);\n}\n\n.hamburger .list {\n    position: fixed;\n    height: 100%;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    transform: translateX(-30vh);\n    opacity: 0;\n    visibility: hidden;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    background-color: #fff;\n    cursor: auto;\n    transition: all 0.3s ease-out;\n}\n\n.hamburger.active .list {\n    opacity: 1;\n    visibility: visible;\n    transform: translateX(0vh);\n    width: 30vh;\n}\n\n.hamburger .item {\n    width: 100%;\n    padding: 20px;\n}\n\n.hamburger .item > button {\n    width: 100%;\n    border-radius: 20px;\n    padding: 10px 30px;\n}\n\n.hamburger .item > button:hover {\n    background-color: cornflowerblue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://necolas.github.io/normalize.css/latest/normalize.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* normalize */\n/* Noto Sans */\n\n* {\n    box-sizing: border-box;\n    font-family: \"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n        Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n        \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\nul,\nh2,\nh3 {\n    padding: 0;\n    margin: 0;\n}\n\nspan {\n    font-size: 1rem;\n}\n\nul,\nli {\n    list-style: none;\n}\n\ninput {\n    line-height: 1rem;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\nbutton {\n    border: 0;\n    padding: 0;\n    background-color: transparent;\n    cursor: pointer;\n}\n\nbody {\n    width: 800px;\n    margin: 0 auto;\n}\n\n.container {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 30px;\n    padding: 30px 0;\n}\n\n.container > div {\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    flex: 1 1 30%;\n\n}\n\n.menu {\n    height: 100%;\n    padding: 25px 0;\n    border-radius: 10px;\n    border: 1px solid black;\n    background-color: #fff;\n    text-align: center;\n    cursor: pointer;\n}\n\n.menu.active {\n    z-index: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA,cAAc;AAEd,cAAc;;AAGd;IACI,sBAAsB;IACtB;;2CAEuC;AAC3C;;AAEA;;;IAGI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,eAAe;IACf,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,aAAa;;AAEjB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,UAAU;AACd","sourcesContent":["/* normalize */\n@import url(\"https://necolas.github.io/normalize.css/latest/normalize.css\");\n/* Noto Sans */\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap\");\n\n* {\n    box-sizing: border-box;\n    font-family: \"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n        Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n        \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\nul,\nh2,\nh3 {\n    padding: 0;\n    margin: 0;\n}\n\nspan {\n    font-size: 1rem;\n}\n\nul,\nli {\n    list-style: none;\n}\n\ninput {\n    line-height: 1rem;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\nbutton {\n    border: 0;\n    padding: 0;\n    background-color: transparent;\n    cursor: pointer;\n}\n\nbody {\n    width: 800px;\n    margin: 0 auto;\n}\n\n.container {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 30px;\n    padding: 30px 0;\n}\n\n.container > div {\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    flex: 1 1 30%;\n\n}\n\n.menu {\n    height: 100%;\n    padding: 25px 0;\n    border-radius: 10px;\n    border: 1px solid black;\n    background-color: #fff;\n    text-align: center;\n    cursor: pointer;\n}\n\n.menu.active {\n    z-index: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/tabs.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/tabs.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/home.png */ "./src/img/home.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/ballot.png */ "./src/img/ballot.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/play.png */ "./src/img/play.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/photo.png */ "./src/img/photo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* tabs */\n\n.tabs.menu .list {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.tabs > .list > .item > :first-child {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.tabs > .list .icon {\n    width: 25px;\n    height: 25px;\n    background-size: cover;\n    display: inline-block;\n}\n\n.tabs > .list > .item:nth-child(1) .icon {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.tabs > .list > .item:nth-child(2) .icon {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.tabs > .list > .item:nth-child(3) .icon {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.tabs > .list > .item:nth-child(4) .icon {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.tabs > .list > .item.active span {\n    filter: invert(56%) sepia(43%) saturate(1693%) hue-rotate(194deg)\n        brightness(96%) contrast(93%);\n}\n", "",{"version":3,"sources":["webpack://./src/css/tabs.css"],"names":[],"mappings":"AAAA,SAAS;;AAET;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,yDAAwC;AAC5C;AACA;IACI,yDAA0C;AAC9C;AACA;IACI,yDAAwC;AAC5C;AACA;IACI,yDAAyC;AAC7C;;AAEA;IACI;qCACiC;AACrC","sourcesContent":["/* tabs */\n\n.tabs.menu .list {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.tabs > .list > .item > :first-child {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.tabs > .list .icon {\n    width: 25px;\n    height: 25px;\n    background-size: cover;\n    display: inline-block;\n}\n\n.tabs > .list > .item:nth-child(1) .icon {\n    background-image: url(\"../img/home.png\");\n}\n.tabs > .list > .item:nth-child(2) .icon {\n    background-image: url(\"../img/ballot.png\");\n}\n.tabs > .list > .item:nth-child(3) .icon {\n    background-image: url(\"../img/play.png\");\n}\n.tabs > .list > .item:nth-child(4) .icon {\n    background-image: url(\"../img/photo.png\");\n}\n\n.tabs > .list > .item.active span {\n    filter: invert(56%) sepia(43%) saturate(1693%) hue-rotate(194deg)\n        brightness(96%) contrast(93%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/tabsDropdown.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/tabsDropdown.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* tabsDropdown */\n\n.tabsDropdown > .list > :last-child {\n    position: relative;\n}\n\n.tabsDropdown .hamburger .list {\n    position: absolute;\n    top: 100%;\n    bottom: auto;\n    left: 50%;\n    transform: translateX(-50%);\n    height: auto;\n    width: auto;\n    background-color: #fff;\n    border: 1px solid black;\n    transition: all 0s ease;\n    row-gap: 10px;\n}\n\n.tabsDropdown .hamburger.active .list {\n    opacity: 1;\n    visibility: visible;\n    width: auto;\n}\n\n.tabsDropdown .hamburger .item {\n    padding: 0;\n    white-space: nowrap;\n}\n\n.tabsDropdown .hamburger .item > button {\n    border-radius: 0;\n    padding: 10px 20px;\n    width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/css/tabsDropdown.css"],"names":[],"mappings":"AAAA,iBAAiB;;AAEjB;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,SAAS;IACT,2BAA2B;IAC3B,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;AACf","sourcesContent":["/* tabsDropdown */\n\n.tabsDropdown > .list > :last-child {\n    position: relative;\n}\n\n.tabsDropdown .hamburger .list {\n    position: absolute;\n    top: 100%;\n    bottom: auto;\n    left: 50%;\n    transform: translateX(-50%);\n    height: auto;\n    width: auto;\n    background-color: #fff;\n    border: 1px solid black;\n    transition: all 0s ease;\n    row-gap: 10px;\n}\n\n.tabsDropdown .hamburger.active .list {\n    opacity: 1;\n    visibility: visible;\n    width: auto;\n}\n\n.tabsDropdown .hamburger .item {\n    padding: 0;\n    white-space: nowrap;\n}\n\n.tabsDropdown .hamburger .item > button {\n    border-radius: 0;\n    padding: 10px 20px;\n    width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/carousel.css":
/*!******************************!*\
  !*** ./src/css/carousel.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./carousel.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/carousel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/dropdown.css":
/*!******************************!*\
  !*** ./src/css/dropdown.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dropdown_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dropdown.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/dropdown.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/hamburger.css":
/*!*******************************!*\
  !*** ./src/css/hamburger.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hamburger_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./hamburger.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/hamburger.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hamburger_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hamburger_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_hamburger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_hamburger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/tabs.css":
/*!**************************!*\
  !*** ./src/css/tabs.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tabs_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tabs.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/tabs.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tabs_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tabs_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tabs_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tabs_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/tabsDropdown.css":
/*!**********************************!*\
  !*** ./src/css/tabsDropdown.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tabsDropdown_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tabsDropdown.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/tabsDropdown.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tabsDropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tabsDropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tabsDropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tabsDropdown_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/components/carousel.js":
/*!************************************!*\
  !*** ./src/components/carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCarousel": () => (/* binding */ createCarousel)
/* harmony export */ });
/* harmony import */ var _css_carousel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/carousel.css */ "./src/css/carousel.css");




const createCarousel = (carousel, width, count) => {
    const wrap = carousel.querySelector(".wrap");
    const list = wrap.querySelector(".list");
    const items = list.querySelectorAll("li").length;

    const itemWidth = width; // The width of each li tag
    const itemCount = count; // Number of items displayed per slide

    const scrollByPointerMove = (e) => {
        list.addEventListener("dragstart", (e) => {
            e.preventDefault();
        });

        const pointerId = e.pointerId;

        let shiftX = e.clientX - list.getBoundingClientRect().left;

        setTimeout(() => {
            document.addEventListener("pointermove", onPointerMove);
            document.addEventListener("pointerup", onPointerUp);
        });

        function onPointerMove(e) {
            list.setPointerCapture(pointerId);

            let newLeft =
                e.clientX - shiftX - wrap.getBoundingClientRect().left;

            if (newLeft > 0) {
                newLeft = 0;
            }

            let rightEdge = (items - itemCount) * itemWidth;
            console.log(newLeft);

            if (newLeft < -rightEdge) {
                newLeft = -rightEdge;
            }

            list.style.transform = `translateX(${newLeft}px)`;
        }

        function onPointerUp() {
            document.removeEventListener("pointerup", onPointerUp);
            document.removeEventListener("pointermove", onPointerMove);

            list.removeEventListener("dragstart", (e) => {
                e.preventDefault();
            });
        }
    };

    return {
        scrollByPointerMove,
    };
};




/***/ }),

/***/ "./src/components/circularCarousel.js":
/*!********************************************!*\
  !*** ./src/components/circularCarousel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCycleCarousel": () => (/* binding */ createCycleCarousel)
/* harmony export */ });


const createCycleCarousel = (carousel, offsetIndex, itemWidth) => {
    const list = carousel.querySelector(".list");
    const dotsList = carousel.querySelector(".dotsList");

    let timer = null;
    let duration = null;
    let direction = null;

    const autoCarousel = {
        set(ms, dir) {
            duration = ms;
            direction = dir
            carousel.classList.add("autoCarousel");
        },
        active() {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(auto, duration);

            function auto() {
                scrollByClick(direction);
                timer = setTimeout(auto, duration);
            }
        },
        stop() {
            clearTimeout(timer);
            timer = null;
        },
    };

    const scrollByClick = (direction, skip) => {
        if (carousel.classList.contains("sliding")) return;

        carousel.classList.add("sliding");

        const activeDot = dotsList.querySelector(".dot.active");

        if (activeDot) {
            activeDot.classList.remove("active");
        }

        switch (direction) {
            case "prev":
                offsetIndex -= 1;
                break;
            case "next":
                offsetIndex += 1;
                break;
        }

        list.style.transform = `translateX(${offsetIndex * -itemWidth}px)`;

        if (skip) {
            offsetNode();
        } else {
            list.style.transition = "transform .3s";
            list.addEventListener("transitionend", offsetNode);
        }

        function offsetNode() {
            switch (direction) {
                case "prev":
                    list.prepend(list.lastElementChild);
                    offsetIndex += 1;
                    break;
                case "next":
                    list.append(list.firstElementChild);
                    offsetIndex -= 1;
                    break;
            }

            const currentItemIndex = list.querySelector(
                `li:nth-child(${offsetIndex + 1})`
            ).dataset.itemIndex;

            const dot = dotsList.querySelector(
                `.dot:nth-child(${+currentItemIndex + 1})`
            );

            dot.classList.add("active");

            list.style.transform = `translateX(${offsetIndex * -itemWidth}px)`;

            list.style.transition = "";

            carousel.classList.remove("sliding");

            if (!skip) {
                this.removeEventListener("transitionend", offsetNode);
            }
        }
    };

    return {
        scrollByClick,
        autoCarousel,
    };
};




/***/ }),

/***/ "./src/components/dropdown.js":
/*!************************************!*\
  !*** ./src/components/dropdown.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDropdown": () => (/* binding */ createDropdown)
/* harmony export */ });
/* harmony import */ var _css_dropdown_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/dropdown.css */ "./src/css/dropdown.css");




const createDropdown = (dropdown) => {
    const activeItemHover = () => {
        if (
            !dropdown.classList.contains("incomplete") &&
            !dropdown.classList.contains("active")
        ) {
            dropdown.classList.add("incomplete");
        } else {
            return;
        }

        if (
            dropdown.classList.contains("incomplete") &&
            !dropdown.classList.contains("active")
        ) {
            const title = dropdown.querySelector(".title");
            title.addEventListener("transitionend", setItemHover);
        }

        function setItemHover() {
            dropdown.classList.add("active");
            dropdown.classList.remove("incomplete");

            dropdown.addEventListener("pointerout", closeItemHover);

            this.removeEventListener("transitionend", setItemHover);
        }

        function closeItemHover(e) {
            if (e.relatedTarget.closest(".dropdown")) return;

            dropdown.classList.remove("active");

            this.removeEventListener("pointerout", closeItemHover);
        }
    };

    return {
        activeItemHover,
    };
};




/***/ }),

/***/ "./src/components/hamburger.js":
/*!*************************************!*\
  !*** ./src/components/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHamburger": () => (/* binding */ createHamburger)
/* harmony export */ });
/* harmony import */ var _css_hamburger_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/hamburger.css */ "./src/css/hamburger.css");




const createHamburger = (hamburger) => {
    const list = hamburger.querySelector(".list");

    const activeHamburger = () => {
        if (hamburger.classList.contains("active")) return;

        hamburger.classList.add("active");

        setTimeout(() => {
            document.addEventListener("pointerup", closeMenu);
        });

        function closeMenu(e) {
            if (e.target.closest(".list") === list) return;

            hamburger.classList.remove("active");
            document.removeEventListener("pointerup", closeMenu);
        }
    };

    return {
        activeHamburger,
    };
};




/***/ }),

/***/ "./src/components/handleCarouselList.js":
/*!**********************************************!*\
  !*** ./src/components/handleCarouselList.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCarouselList": () => (/* binding */ handleCarouselList)
/* harmony export */ });


function handleCarouselList(carousel, sources, width) {
    const wrap = carousel.querySelector(".wrap");
    const list = wrap.querySelector(".list");
    const dotsList = wrap.querySelector(".dotsList");

    const itemWidth = width; // The width of each li tag and wrap tag
    const offsetIndex = Math.floor(sources.length / 2); // List is offset to the middle to show the first picture

    const createItem = () => {
        const isOdd = sources.length % 2 !== 0;

        let index = 0;

        if (isOdd) {
            index = 1;
        }

        const firstHalf = sources.slice(0, offsetIndex + index);
        const secondHalf = sources.slice(offsetIndex + index);

        const srcArray = [...secondHalf, ...firstHalf]; // Get the second half to the front

        for (let src of srcArray) {
            const li = document.createElement("li");
            const img = document.createElement("img");
            const index = sources.findIndex((url) => url === src);

            img.src = sources[index];

            li.append(img);
            li.className = "item";
            li.dataset.itemIndex = index;

            list.append(li);
        }

        wrap.style.width = `${itemWidth}px`;

        list.style.transform = `translateX(${offsetIndex * -itemWidth}px)`;
    };

    const createDot = () => {
        for (let i = 0; i < sources.length; i++) {
            const li = document.createElement("li");
            const button = document.createElement("button");

            li.className = "dot";
            li.append(button);

            li.dataset.dotIndex = i;

            if (i === 0) {
                li.classList.add("active");
            }

            dotsList.append(li);
        }
    };

    return {
        createItem,
        createDot,
    };
}




/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown */ "./src/components/dropdown.js");
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger */ "./src/components/hamburger.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs */ "./src/components/tabs.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel */ "./src/components/carousel.js");
/* harmony import */ var _circularCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./circularCarousel */ "./src/components/circularCarousel.js");
/* harmony import */ var _handleCarouselList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handleCarouselList */ "./src/components/handleCarouselList.js");
/* harmony import */ var _img_big1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/big1.jpg */ "./src/img/big1.jpg");
/* harmony import */ var _img_big2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/big2.jpg */ "./src/img/big2.jpg");
/* harmony import */ var _img_big3_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/big3.jpg */ "./src/img/big3.jpg");
/* harmony import */ var _img_big4_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/big4.jpg */ "./src/img/big4.jpg");
/* harmony import */ var _img_big5_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/big5.jpg */ "./src/img/big5.jpg");
/* harmony import */ var _img_big6_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/big6.jpg */ "./src/img/big6.jpg");
/* harmony import */ var _img_big7_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/big7.jpg */ "./src/img/big7.jpg");



















const main = (() => {
    const circularCarousel = document.querySelector(".carousel.circular");

    const sources = getSources();
    const halfLength = Math.floor(sources.length / 2);
    const itemWidth = 500;

    const carouselList = (0,_handleCarouselList__WEBPACK_IMPORTED_MODULE_6__.handleCarouselList)(
        circularCarousel,
        sources,
        itemWidth
    );
    carouselList.createItem();
    carouselList.createDot();    

    document.addEventListener("pointerover", activeMenuOnPointerOver);
    document.addEventListener("pointerdown", activeMenuOnPointerDown);
    document.addEventListener("pointerup", activeMenuOnPointerUp);

    function getSources() {
        return [_img_big1_jpg__WEBPACK_IMPORTED_MODULE_7__, _img_big2_jpg__WEBPACK_IMPORTED_MODULE_8__, _img_big3_jpg__WEBPACK_IMPORTED_MODULE_9__, _img_big4_jpg__WEBPACK_IMPORTED_MODULE_10__, _img_big5_jpg__WEBPACK_IMPORTED_MODULE_11__, _img_big6_jpg__WEBPACK_IMPORTED_MODULE_12__, _img_big7_jpg__WEBPACK_IMPORTED_MODULE_13__];
    }

    function activeMenuOnPointerOver(e) {
        if (e.target.closest(".dropdown")) {
            const dropdown = (0,_dropdown__WEBPACK_IMPORTED_MODULE_1__.createDropdown)(e.target.closest(".dropdown"));

            dropdown.activeItemHover();
        }
    }
    function activeMenuOnPointerUp(e) {
        if (e.target.closest(".hamburger")) {
            const hamburger = (0,_hamburger__WEBPACK_IMPORTED_MODULE_2__.createHamburger)(e.target.closest(".hamburger"));

            hamburger.activeHamburger(e);
        }

        if (e.target.closest(".tabs")) {
            if (e.target.closest(".item")) {
                const tabs = (0,_tabs__WEBPACK_IMPORTED_MODULE_3__.createTabs)(e.target.closest(".tabs"));

                tabs.activeTab(e.target.closest(".item"));
            }
        }
    }
    
    function activeMenuOnPointerDown(e) {
        if (e.target.closest(".carousel")) {
            let carousel = e.target.closest(".carousel");

            if (carousel.classList.contains("circular")) {

                const newCarousel = (0,_circularCarousel__WEBPACK_IMPORTED_MODULE_5__.createCycleCarousel)(
                    carousel,
                    halfLength,
                    itemWidth
                );
                
                if (e.target.closest(".arrow")) {
                    const direction = e.target.closest(".arrow").classList[1];
                    newCarousel.scrollByClick(direction);
                }

                if (e.target.closest(".dot")) {
                    const currentDotIndex =
                        +carousel.querySelector(".dot.active").dataset.dotIndex;

                    const selectDotIndex =
                        +e.target.closest(".dot").dataset.dotIndex;

                    const index = selectDotIndex - currentDotIndex;

                    if (index === 0) return;

                    let direction = null;

                    if (index > 0) {
                        direction = "next";
                    } else {
                        direction = "prev";
                    }

                    for (let i = 1; i <= Math.abs(index); i++) {
                        newCarousel.scrollByClick(direction, true);
                    }
                }
            } else {
                const newCarousel = (0,_carousel__WEBPACK_IMPORTED_MODULE_4__.createCarousel)(carousel, 60, 4);
                if (e.target.closest(".list")) {
                    newCarousel.scrollByPointerMove(e);
                }
            }
        }
    }
})();



// dropdown menu

// const dropdown = document.querySelector(".dropdown");
// const dropdownMethod = createDropdown(dropdown);

// dropdown.addEventListener("pointerover", () => {
//     dropdownMethod.activeItemHover();
// });

// hamburger menu

// const hamburger = document.querySelector(".hamburger");
// const hamburgerMethod = createHamburger(hamburger);

// hamburger.addEventListener('pointerup', () => {
//     hamburgerMethod.activeHamburger();
// })

// tabs menu
// To use the tabsDropdown menu, you need to load  createHamburger

// const tabs = document.querySelector(".tabs");
// const tabsMethod = createTabs(tabs);

// tabs.addEventListener("pointerup", (e) => {
//     if (e.target.closest(".item")) {
//         tabsMethod.activeTab(e.target.closest(".item"));
//     }
// });

// carousel menu
// To use the carousel menu, you need to load createTabs

// const carousel = document.querySelector(".carousel");
// const carouselMethod = createCarousel(carousel);

// carousel.addEventListener("pointerdown", (e) => {
//     if (e.target.closest(".arrow")) {
//         const arrow = e.target.closest(".arrow").classList[1];
//         carouselMethod.scrollByClick(arrow);
//     }

//     if (e.target.closest(".list")) {
//         carouselMethod.scrollByPointerMove(e);
//     }
// });


/***/ }),

/***/ "./src/components/tabs.js":
/*!********************************!*\
  !*** ./src/components/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTabs": () => (/* binding */ createTabs)
/* harmony export */ });
/* harmony import */ var _css_tabs_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/tabs.css */ "./src/css/tabs.css");
/* harmony import */ var _css_tabsDropdown_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/tabsDropdown.css */ "./src/css/tabsDropdown.css");





const createTabs = (tabs) => {
    const list = tabs.querySelector(".list");
    const listChild = Array.from(list.children);

    const activeTab = (tab) => {
        if (listChild.findIndex((item) => item === tab) === -1) return;

        const currentActiveTab = list.querySelector(".item.active");

        if (currentActiveTab) {
            currentActiveTab.classList.remove("active");
        }
        tab.classList.add("active");
        tabs.classList.add("active");

        setTimeout(() => {
            document.addEventListener("pointerup", closeMenu);
        });

        function closeMenu(e) {
            if (e.target.closest(".tabs") === tabs) return;

            tabs.classList.remove("active");
            document.removeEventListener("pointerup", closeMenu);
        }
    };

    return {
        activeTab,
    };
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main.js */ "./src/components/main.js");





/***/ }),

/***/ "./src/img/ballot.png":
/*!****************************!*\
  !*** ./src/img/ballot.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/8bc12ab0acff594c1afb.png";

/***/ }),

/***/ "./src/img/big1.jpg":
/*!**************************!*\
  !*** ./src/img/big1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/1280fa578d32033311d4.jpg";

/***/ }),

/***/ "./src/img/big2.jpg":
/*!**************************!*\
  !*** ./src/img/big2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bfb93c0a03264cea8f63.jpg";

/***/ }),

/***/ "./src/img/big3.jpg":
/*!**************************!*\
  !*** ./src/img/big3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/29bab4e04f86d50477e8.jpg";

/***/ }),

/***/ "./src/img/big4.jpg":
/*!**************************!*\
  !*** ./src/img/big4.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/74c37372ba14d38a5936.jpg";

/***/ }),

/***/ "./src/img/big5.jpg":
/*!**************************!*\
  !*** ./src/img/big5.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/55d59df989b41bcc9551.jpg";

/***/ }),

/***/ "./src/img/big6.jpg":
/*!**************************!*\
  !*** ./src/img/big6.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/301f0c679a60e641f22d.jpg";

/***/ }),

/***/ "./src/img/big7.jpg":
/*!**************************!*\
  !*** ./src/img/big7.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/c522b1224e61cfffad1c.jpg";

/***/ }),

/***/ "./src/img/home.png":
/*!**************************!*\
  !*** ./src/img/home.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bb1c625537f0c539dfaa.png";

/***/ }),

/***/ "./src/img/photo.png":
/*!***************************!*\
  !*** ./src/img/photo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/e8ee0deb85e82fa3d5a1.png";

/***/ }),

/***/ "./src/img/play.png":
/*!**************************!*\
  !*** ./src/img/play.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/8c3390340bb02f831ee2.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9DQUFvQyxzRUFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQSxvQ0FBb0Msc0JBQXNCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxvQ0FBb0MseURBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFZTs7QUFFaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsS1M7O0FBRVk7QUFDUTs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7OztBQ3JDVDs7QUFFaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL2Nzcy9jYXJvdXNlbC5jc3MiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jc3MvZHJvcGRvd24uY3NzIiwid2VicGFjazovL3kvLi9zcmMvY3NzL2hhbWJ1cmdlci5jc3MiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jc3MvdGFicy5jc3MiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jc3MvdGFic0Ryb3Bkb3duLmNzcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jc3MvY2Fyb3VzZWwuY3NzPzRmNDUiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jc3MvZHJvcGRvd24uY3NzPzY0YTUiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jc3MvaGFtYnVyZ2VyLmNzcz8yYmE3Iiwid2VicGFjazovL3kvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jc3MvdGFicy5jc3M/ODdiNCIsIndlYnBhY2s6Ly95Ly4vc3JjL2Nzcy90YWJzRHJvcGRvd24uY3NzPzE3NmEiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jb21wb25lbnRzL2NpcmN1bGFyQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duLmpzIiwid2VicGFjazovL3kvLi9zcmMvY29tcG9uZW50cy9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jb21wb25lbnRzL2hhbmRsZUNhcm91c2VsTGlzdC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2NvbXBvbmVudHMvdGFicy5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvaG9tZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYmFsbG90LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZy9wbGF5LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltZy9waG90by5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0taXRlbVdpZHRoOiA1MDBweDtcXG4gICAgLS1pdGVtSGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2Fyb3VzZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLmFycm93IHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNhcm91c2VsIC5hcnJvdzpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jYXJvdXNlbCAuYXJyb3c6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLndyYXAge1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJvdXNlbCAubGlzdCBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjBweDtcXG59XFxuXFxuLmNhcm91c2VsIC5saXN0IC5pY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLmxpc3QgLml0ZW06bnRoLWNoaWxkKDEpIC5pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuLmNhcm91c2VsIC5saXN0IC5pdGVtOm50aC1jaGlsZCgyKSAuaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi5jYXJvdXNlbCAubGlzdCAuaXRlbTpudGgtY2hpbGQoMykgLmljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG4uY2Fyb3VzZWwgLmxpc3QgLml0ZW06bnRoLWNoaWxkKDQpIC5pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuLyogY2Fyb3VzZWwgY2lyY3VsYXIgKi9cXG5cXG4uY2Fyb3VzZWwuY2lyY3VsYXIgLndyYXAge1xcbiAgICB3aWR0aDogdmFyKC0taXRlbVdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1pdGVtSGVpZ2h0KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuXFxuLmNhcm91c2VsLmNpcmN1bGFyIC5saXN0IHtcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuXFxuLmNhcm91c2VsLmNpcmN1bGFyIC5saXN0IC5pdGVtIHtcXG4gICAgd2lkdGg6IHZhcigtLWl0ZW1XaWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0taXRlbUhlaWdodCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwuY2lyY3VsYXIgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5jYXJvdXNlbC5jaXJjdWxhciAuZG90c0xpc3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwuY2lyY3VsYXIgLmRvdHNMaXN0IC5kb3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbC5jaXJjdWxhciAuZG90c0xpc3QgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwuY2lyY3VsYXIgLmRvdHNMaXN0IGJ1dHRvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzO1xcbn1cXG5cXG4uY2Fyb3VzZWwuY2lyY3VsYXIgLmRvdHNMaXN0IC5hY3RpdmUgYnV0dG9uOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY2Fyb3VzZWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlEQUF3QztBQUM1QztBQUNBO0lBQ0kseURBQTBDO0FBQzlDO0FBQ0E7SUFDSSx5REFBd0M7QUFDNUM7QUFDQTtJQUNJLHlEQUF5QztBQUM3Qzs7QUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0taXRlbVdpZHRoOiA1MDBweDtcXG4gICAgLS1pdGVtSGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2Fyb3VzZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLmFycm93IHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNhcm91c2VsIC5hcnJvdzpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jYXJvdXNlbCAuYXJyb3c6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLndyYXAge1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJvdXNlbCAubGlzdCBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjBweDtcXG59XFxuXFxuLmNhcm91c2VsIC5saXN0IC5pY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLmxpc3QgLml0ZW06bnRoLWNoaWxkKDEpIC5pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvaG9tZS5wbmdcXFwiKTtcXG59XFxuLmNhcm91c2VsIC5saXN0IC5pdGVtOm50aC1jaGlsZCgyKSAuaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2JhbGxvdC5wbmdcXFwiKTtcXG59XFxuLmNhcm91c2VsIC5saXN0IC5pdGVtOm50aC1jaGlsZCgzKSAuaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL3BsYXkucG5nXFxcIik7XFxufVxcbi5jYXJvdXNlbCAubGlzdCAuaXRlbTpudGgtY2hpbGQoNCkgLmljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9waG90by5wbmdcXFwiKTtcXG59XFxuXFxuLyogY2Fyb3VzZWwgY2lyY3VsYXIgKi9cXG5cXG4uY2Fyb3VzZWwuY2lyY3VsYXIgLndyYXAge1xcbiAgICB3aWR0aDogdmFyKC0taXRlbVdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1pdGVtSGVpZ2h0KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuXFxuLmNhcm91c2VsLmNpcmN1bGFyIC5saXN0IHtcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuXFxuLmNhcm91c2VsLmNpcmN1bGFyIC5saXN0IC5pdGVtIHtcXG4gICAgd2lkdGg6IHZhcigtLWl0ZW1XaWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0taXRlbUhlaWdodCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwuY2lyY3VsYXIgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5jYXJvdXNlbC5jaXJjdWxhciAuZG90c0xpc3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwuY2lyY3VsYXIgLmRvdHNMaXN0IC5kb3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbC5jaXJjdWxhciAuZG90c0xpc3QgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwuY2lyY3VsYXIgLmRvdHNMaXN0IGJ1dHRvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzO1xcbn1cXG5cXG4uY2Fyb3VzZWwuY2lyY3VsYXIgLmRvdHNMaXN0IC5hY3RpdmUgYnV0dG9uOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGRyb3Bkb3duICovXFxuXFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRyb3Bkb3duLm1lbnUge1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItcmFkaXVzIDAuM3MgZWFzZTtcXG59XFxuXFxuLmRyb3Bkb3duLm1lbnU6aG92ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLXJhZGl1cyAwLjFzIGVhc2U7XFxufVxcblxcbi5kcm9wZG93biAudGl0bGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kcm9wZG93biAudGl0bGU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLilrZcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC50aXRsZTo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5kcm9wZG93biAubGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAtMXB4O1xcbiAgICByaWdodDogLTFweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLCBvcGFjaXR5IDAuMnMgZWFzZSwgdmlzaWJpbGl0eSAwLjJzIGVhc2U7XFxufVxcblxcbi5kcm9wZG93biAuaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRyb3Bkb3duIC5pdGVtOm50aC1jaGlsZCgxKSB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDFzO1xcbn1cXG4uZHJvcGRvd24gLml0ZW06bnRoLWNoaWxkKDIpIHtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4wM3M7XFxufVxcbi5kcm9wZG93biAuaXRlbTpudGgtY2hpbGQoMykge1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcXG59XFxuXFxuLmRyb3Bkb3duIC5pdGVtOm5vdCg6bnRoLWNoaWxkKDIpKSB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZHJvcGRvd24gLml0ZW06bGFzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5kcm9wZG93bjpob3ZlciAubGlzdCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMXB4KSB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLCBvcGFjaXR5IDAuNXMgZWFzZTtcXG59XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC5pdGVtIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmRyb3Bkb3duIC5pdGVtID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5kcm9wZG93bi5hY3RpdmUgLml0ZW0gPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9kcm9wZG93bi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsYUFBYTs7QUFFYjtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixpRUFBaUU7QUFDckU7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogZHJvcGRvd24gKi9cXG5cXG4uZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZHJvcGRvd24ubWVudSB7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1yYWRpdXMgMC4zcyBlYXNlO1xcbn1cXG5cXG4uZHJvcGRvd24ubWVudTpob3ZlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItcmFkaXVzIDAuMXMgZWFzZTtcXG59XFxuXFxuLmRyb3Bkb3duIC50aXRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRyb3Bkb3duIC50aXRsZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIuKWtlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4uZHJvcGRvd246aG92ZXIgLnRpdGxlOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmRyb3Bkb3duIC5saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IC0xcHg7XFxuICAgIHJpZ2h0OiAtMXB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTFweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UsIG9wYWNpdHkgMC4ycyBlYXNlLCB2aXNpYmlsaXR5IDAuMnMgZWFzZTtcXG59XFxuXFxuLmRyb3Bkb3duIC5pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZHJvcGRvd24gLml0ZW06bnRoLWNoaWxkKDEpIHtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4wMXM7XFxufVxcbi5kcm9wZG93biAuaXRlbTpudGgtY2hpbGQoMikge1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjAzcztcXG59XFxuLmRyb3Bkb3duIC5pdGVtOm50aC1jaGlsZCgzKSB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xcbn1cXG5cXG4uZHJvcGRvd24gLml0ZW06bm90KDpudGgtY2hpbGQoMikpIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kcm9wZG93biAuaXRlbTpsYXN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC5saXN0IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xcHgpIHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UsIG9wYWNpdHkgMC41cyBlYXNlO1xcbn1cXG5cXG4uZHJvcGRvd246aG92ZXIgLml0ZW0ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZHJvcGRvd24gLml0ZW0gPiBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmRyb3Bkb3duLmFjdGl2ZSAuaXRlbSA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBoYW1idXJnZXIgKi9cXG5cXG4uaGFtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oYW1idXJnZXIgLmljb24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhhbWJ1cmdlciAuaWNvbiBzcGFuLFxcbi5oYW1idXJnZXIgLmljb24gPiBzcGFuOjpiZWZvcmUsXFxuLmhhbWJ1cmdlciAuaWNvbiA+IHNwYW46OmFmdGVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4uaGFtYnVyZ2VyIC5pY29uIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oYW1idXJnZXIgLmljb24gPiBzcGFuOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxufVxcbi5oYW1idXJnZXIgLmljb24gPiBzcGFuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogOHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLmhhbWJ1cmdlci5hY3RpdmUgLmljb24gPiBzcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5oYW1idXJnZXIuYWN0aXZlIC5pY29uID4gc3Bhbjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNXB4LCAtNnB4KTtcXG59XFxuLmhhbWJ1cmdlci5hY3RpdmUgLmljb24gPiBzcGFuOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC01cHgsIDZweCk7XFxufVxcblxcbi5oYW1idXJnZXIgLmxpc3Qge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzB2aCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxufVxcblxcbi5oYW1idXJnZXIuYWN0aXZlIC5saXN0IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2aCk7XFxuICAgIHdpZHRoOiAzMHZoO1xcbn1cXG5cXG4uaGFtYnVyZ2VyIC5pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5oYW1idXJnZXIgLml0ZW0gPiBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG5cXG4uaGFtYnVyZ2VyIC5pdGVtID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGFtYnVyZ2VyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjOztBQUVkO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFFBQVE7QUFDWjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaGFtYnVyZ2VyICovXFxuXFxuLmhhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGFtYnVyZ2VyIC5pY29uIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oYW1idXJnZXIgLmljb24gc3BhbixcXG4uaGFtYnVyZ2VyIC5pY29uID4gc3Bhbjo6YmVmb3JlLFxcbi5oYW1idXJnZXIgLmljb24gPiBzcGFuOjphZnRlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmhhbWJ1cmdlciAuaWNvbiBzcGFuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGFtYnVyZ2VyIC5pY29uID4gc3Bhbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG4uaGFtYnVyZ2VyIC5pY29uID4gc3Bhbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDhweDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5oYW1idXJnZXIuYWN0aXZlIC5pY29uID4gc3BhbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaGFtYnVyZ2VyLmFjdGl2ZSAuaWNvbiA+IHNwYW46OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTVweCwgLTZweCk7XFxufVxcbi5oYW1idXJnZXIuYWN0aXZlIC5pY29uID4gc3Bhbjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtNXB4LCA2cHgpO1xcbn1cXG5cXG4uaGFtYnVyZ2VyIC5saXN0IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwdmgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4uaGFtYnVyZ2VyLmFjdGl2ZSAubGlzdCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdmgpO1xcbiAgICB3aWR0aDogMzB2aDtcXG59XFxuXFxuLmhhbWJ1cmdlciAuaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaGFtYnVyZ2VyIC5pdGVtID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG59XFxuXFxuLmhhbWJ1cmdlciAuaXRlbSA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9uZWNvbGFzLmdpdGh1Yi5pby9ub3JtYWxpemUuY3NzL2xhdGVzdC9ub3JtYWxpemUuY3NzKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIG5vcm1hbGl6ZSAqL1xcbi8qIE5vdG8gU2FucyAqL1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgICAgIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG4gICAgICAgIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cXG51bCxcXG5oMixcXG5oMyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMDtcXG59XFxuXFxuLmNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIGZsZXg6IDEgMSAzMCU7XFxuXFxufVxcblxcbi5tZW51IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUuYWN0aXZlIHtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBRWQsY0FBYzs7QUFHZDtJQUNJLHNCQUFzQjtJQUN0Qjs7MkNBRXVDO0FBQzNDOztBQUVBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIG5vcm1hbGl6ZSAqL1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL25lY29sYXMuZ2l0aHViLmlvL25vcm1hbGl6ZS5jc3MvbGF0ZXN0L25vcm1hbGl6ZS5jc3NcXFwiKTtcXG4vKiBOb3RvIFNhbnMgKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICAgICAgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcbiAgICAgICAgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbnVsLFxcbmgyLFxcbmgzIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmlucHV0IHtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMzBweDtcXG4gICAgcGFkZGluZzogMzBweCAwO1xcbn1cXG5cXG4uY29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogMjBweDtcXG4gICAgZmxleDogMSAxIDMwJTtcXG5cXG59XFxuXFxuLm1lbnUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDI1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS5hY3RpdmUge1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9ob21lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy9iYWxsb3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3BsYXkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3Bob3RvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHRhYnMgKi9cXG5cXG4udGFicy5tZW51IC5saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi50YWJzID4gLmxpc3QgPiAuaXRlbSA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFicyA+IC5saXN0IC5pY29uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udGFicyA+IC5saXN0ID4gLml0ZW06bnRoLWNoaWxkKDEpIC5pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuLnRhYnMgPiAubGlzdCA+IC5pdGVtOm50aC1jaGlsZCgyKSAuaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi50YWJzID4gLmxpc3QgPiAuaXRlbTpudGgtY2hpbGQoMykgLmljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG4udGFicyA+IC5saXN0ID4gLml0ZW06bnRoLWNoaWxkKDQpIC5pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuLnRhYnMgPiAubGlzdCA+IC5pdGVtLmFjdGl2ZSBzcGFuIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTYlKSBzZXBpYSg0MyUpIHNhdHVyYXRlKDE2OTMlKSBodWUtcm90YXRlKDE5NGRlZylcXG4gICAgICAgIGJyaWdodG5lc3MoOTYlKSBjb250cmFzdCg5MyUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3RhYnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVM7O0FBRVQ7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQXdDO0FBQzVDO0FBQ0E7SUFDSSx5REFBMEM7QUFDOUM7QUFDQTtJQUNJLHlEQUF3QztBQUM1QztBQUNBO0lBQ0kseURBQXlDO0FBQzdDOztBQUVBO0lBQ0k7cUNBQ2lDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHRhYnMgKi9cXG5cXG4udGFicy5tZW51IC5saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi50YWJzID4gLmxpc3QgPiAuaXRlbSA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFicyA+IC5saXN0IC5pY29uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udGFicyA+IC5saXN0ID4gLml0ZW06bnRoLWNoaWxkKDEpIC5pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvaG9tZS5wbmdcXFwiKTtcXG59XFxuLnRhYnMgPiAubGlzdCA+IC5pdGVtOm50aC1jaGlsZCgyKSAuaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2JhbGxvdC5wbmdcXFwiKTtcXG59XFxuLnRhYnMgPiAubGlzdCA+IC5pdGVtOm50aC1jaGlsZCgzKSAuaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL3BsYXkucG5nXFxcIik7XFxufVxcbi50YWJzID4gLmxpc3QgPiAuaXRlbTpudGgtY2hpbGQoNCkgLmljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9waG90by5wbmdcXFwiKTtcXG59XFxuXFxuLnRhYnMgPiAubGlzdCA+IC5pdGVtLmFjdGl2ZSBzcGFuIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTYlKSBzZXBpYSg0MyUpIHNhdHVyYXRlKDE2OTMlKSBodWUtcm90YXRlKDE5NGRlZylcXG4gICAgICAgIGJyaWdodG5lc3MoOTYlKSBjb250cmFzdCg5MyUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiB0YWJzRHJvcGRvd24gKi9cXG5cXG4udGFic0Ryb3Bkb3duID4gLmxpc3QgPiA6bGFzdC1jaGlsZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhYnNEcm9wZG93biAuaGFtYnVyZ2VyIC5saXN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGJvdHRvbTogYXV0bztcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHMgZWFzZTtcXG4gICAgcm93LWdhcDogMTBweDtcXG59XFxuXFxuLnRhYnNEcm9wZG93biAuaGFtYnVyZ2VyLmFjdGl2ZSAubGlzdCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4udGFic0Ryb3Bkb3duIC5oYW1idXJnZXIgLml0ZW0ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGFic0Ryb3Bkb3duIC5oYW1idXJnZXIgLml0ZW0gPiBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3RhYnNEcm9wZG93bi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCOztBQUVqQjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogdGFic0Ryb3Bkb3duICovXFxuXFxuLnRhYnNEcm9wZG93biA+IC5saXN0ID4gOmxhc3QtY2hpbGQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YWJzRHJvcGRvd24gLmhhbWJ1cmdlciAubGlzdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBib3R0b206IGF1dG87XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDBzIGVhc2U7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxufVxcblxcbi50YWJzRHJvcGRvd24gLmhhbWJ1cmdlci5hY3RpdmUgLmxpc3Qge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnRhYnNEcm9wZG93biAuaGFtYnVyZ2VyIC5pdGVtIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRhYnNEcm9wZG93biAuaGFtYnVyZ2VyIC5pdGVtID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nhcm91c2VsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2Fyb3VzZWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Ryb3Bkb3duLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZHJvcGRvd24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hhbWJ1cmdlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hhbWJ1cmdlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhYnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWJzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWJzRHJvcGRvd24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWJzRHJvcGRvd24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9jc3MvY2Fyb3VzZWwuY3NzXCI7XG5cbmNvbnN0IGNyZWF0ZUNhcm91c2VsID0gKGNhcm91c2VsLCB3aWR0aCwgY291bnQpID0+IHtcbiAgICBjb25zdCB3cmFwID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi53cmFwXCIpO1xuICAgIGNvbnN0IGxpc3QgPSB3cmFwLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKTtcbiAgICBjb25zdCBpdGVtcyA9IGxpc3QucXVlcnlTZWxlY3RvckFsbChcImxpXCIpLmxlbmd0aDtcblxuICAgIGNvbnN0IGl0ZW1XaWR0aCA9IHdpZHRoOyAvLyBUaGUgd2lkdGggb2YgZWFjaCBsaSB0YWdcbiAgICBjb25zdCBpdGVtQ291bnQgPSBjb3VudDsgLy8gTnVtYmVyIG9mIGl0ZW1zIGRpc3BsYXllZCBwZXIgc2xpZGVcblxuICAgIGNvbnN0IHNjcm9sbEJ5UG9pbnRlck1vdmUgPSAoZSkgPT4ge1xuICAgICAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRlcklkID0gZS5wb2ludGVySWQ7XG5cbiAgICAgICAgbGV0IHNoaWZ0WCA9IGUuY2xpZW50WCAtIGxpc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBvblBvaW50ZXJNb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgb25Qb2ludGVyVXApO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKGUpIHtcbiAgICAgICAgICAgIGxpc3Quc2V0UG9pbnRlckNhcHR1cmUocG9pbnRlcklkKTtcblxuICAgICAgICAgICAgbGV0IG5ld0xlZnQgPVxuICAgICAgICAgICAgICAgIGUuY2xpZW50WCAtIHNoaWZ0WCAtIHdyYXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcblxuICAgICAgICAgICAgaWYgKG5ld0xlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3TGVmdCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByaWdodEVkZ2UgPSAoaXRlbXMgLSBpdGVtQ291bnQpICogaXRlbVdpZHRoO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3TGVmdCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdMZWZ0IDwgLXJpZ2h0RWRnZSkge1xuICAgICAgICAgICAgICAgIG5ld0xlZnQgPSAtcmlnaHRFZGdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bmV3TGVmdH1weClgO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyVXAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG9uUG9pbnRlclVwKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBvblBvaW50ZXJNb3ZlKTtcblxuICAgICAgICAgICAgbGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2Nyb2xsQnlQb2ludGVyTW92ZSxcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQ2Fyb3VzZWwgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVDeWNsZUNhcm91c2VsID0gKGNhcm91c2VsLCBvZmZzZXRJbmRleCwgaXRlbVdpZHRoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKTtcbiAgICBjb25zdCBkb3RzTGlzdCA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCIuZG90c0xpc3RcIik7XG5cbiAgICBsZXQgdGltZXIgPSBudWxsO1xuICAgIGxldCBkdXJhdGlvbiA9IG51bGw7XG4gICAgbGV0IGRpcmVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBhdXRvQ2Fyb3VzZWwgPSB7XG4gICAgICAgIHNldChtcywgZGlyKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IG1zO1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gZGlyXG4gICAgICAgICAgICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKFwiYXV0b0Nhcm91c2VsXCIpO1xuICAgICAgICB9LFxuICAgICAgICBhY3RpdmUoKSB7XG4gICAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoYXV0bywgZHVyYXRpb24pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBhdXRvKCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbEJ5Q2xpY2soZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoYXV0bywgZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdG9wKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3Qgc2Nyb2xsQnlDbGljayA9IChkaXJlY3Rpb24sIHNraXApID0+IHtcbiAgICAgICAgaWYgKGNhcm91c2VsLmNsYXNzTGlzdC5jb250YWlucyhcInNsaWRpbmdcIikpIHJldHVybjtcblxuICAgICAgICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKFwic2xpZGluZ1wiKTtcblxuICAgICAgICBjb25zdCBhY3RpdmVEb3QgPSBkb3RzTGlzdC5xdWVyeVNlbGVjdG9yKFwiLmRvdC5hY3RpdmVcIik7XG5cbiAgICAgICAgaWYgKGFjdGl2ZURvdCkge1xuICAgICAgICAgICAgYWN0aXZlRG90LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInByZXZcIjpcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmRleCAtPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke29mZnNldEluZGV4ICogLWl0ZW1XaWR0aH1weClgO1xuXG4gICAgICAgIGlmIChza2lwKSB7XG4gICAgICAgICAgICBvZmZzZXROb2RlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0LnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAuM3NcIjtcbiAgICAgICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgb2Zmc2V0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvZmZzZXROb2RlKCkge1xuICAgICAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicHJldlwiOlxuICAgICAgICAgICAgICAgICAgICBsaXN0LnByZXBlbmQobGlzdC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0SW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmQobGlzdC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEluZGV4IC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbUluZGV4ID0gbGlzdC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBsaTpudGgtY2hpbGQoJHtvZmZzZXRJbmRleCArIDF9KWBcbiAgICAgICAgICAgICkuZGF0YXNldC5pdGVtSW5kZXg7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvdCA9IGRvdHNMaXN0LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5kb3Q6bnRoLWNoaWxkKCR7K2N1cnJlbnRJdGVtSW5kZXggKyAxfSlgXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgbGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke29mZnNldEluZGV4ICogLWl0ZW1XaWR0aH1weClgO1xuXG4gICAgICAgICAgICBsaXN0LnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiO1xuXG4gICAgICAgICAgICBjYXJvdXNlbC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGluZ1wiKTtcblxuICAgICAgICAgICAgaWYgKCFza2lwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBvZmZzZXROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzY3JvbGxCeUNsaWNrLFxuICAgICAgICBhdXRvQ2Fyb3VzZWwsXG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUN5Y2xlQ2Fyb3VzZWwgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9jc3MvZHJvcGRvd24uY3NzXCI7XG5cbmNvbnN0IGNyZWF0ZURyb3Bkb3duID0gKGRyb3Bkb3duKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlSXRlbUhvdmVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW5jb21wbGV0ZVwiKSAmJlxuICAgICAgICAgICAgIWRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJpbmNvbXBsZXRlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW5jb21wbGV0ZVwiKSAmJlxuICAgICAgICAgICAgIWRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICAgICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHNldEl0ZW1Ib3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRJdGVtSG92ZXIoKSB7XG4gICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShcImluY29tcGxldGVcIik7XG5cbiAgICAgICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGNsb3NlSXRlbUhvdmVyKTtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBzZXRJdGVtSG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xvc2VJdGVtSG92ZXIoZSkge1xuICAgICAgICAgICAgaWYgKGUucmVsYXRlZFRhcmdldC5jbG9zZXN0KFwiLmRyb3Bkb3duXCIpKSByZXR1cm47XG5cbiAgICAgICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgY2xvc2VJdGVtSG92ZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZUl0ZW1Ib3ZlcixcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlRHJvcGRvd24gfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9jc3MvaGFtYnVyZ2VyLmNzc1wiO1xuXG5jb25zdCBjcmVhdGVIYW1idXJnZXIgPSAoaGFtYnVyZ2VyKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGhhbWJ1cmdlci5xdWVyeVNlbGVjdG9yKFwiLmxpc3RcIik7XG5cbiAgICBjb25zdCBhY3RpdmVIYW1idXJnZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChoYW1idXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG5cbiAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGNsb3NlTWVudSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTWVudShlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5saXN0XCIpID09PSBsaXN0KSByZXR1cm47XG5cbiAgICAgICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBjbG9zZU1lbnUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZUhhbWJ1cmdlcixcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlSGFtYnVyZ2VyIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gaGFuZGxlQ2Fyb3VzZWxMaXN0KGNhcm91c2VsLCBzb3VyY2VzLCB3aWR0aCkge1xuICAgIGNvbnN0IHdyYXAgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiLndyYXBcIik7XG4gICAgY29uc3QgbGlzdCA9IHdyYXAucXVlcnlTZWxlY3RvcihcIi5saXN0XCIpO1xuICAgIGNvbnN0IGRvdHNMaXN0ID0gd3JhcC5xdWVyeVNlbGVjdG9yKFwiLmRvdHNMaXN0XCIpO1xuXG4gICAgY29uc3QgaXRlbVdpZHRoID0gd2lkdGg7IC8vIFRoZSB3aWR0aCBvZiBlYWNoIGxpIHRhZyBhbmQgd3JhcCB0YWdcbiAgICBjb25zdCBvZmZzZXRJbmRleCA9IE1hdGguZmxvb3Ioc291cmNlcy5sZW5ndGggLyAyKTsgLy8gTGlzdCBpcyBvZmZzZXQgdG8gdGhlIG1pZGRsZSB0byBzaG93IHRoZSBmaXJzdCBwaWN0dXJlXG5cbiAgICBjb25zdCBjcmVhdGVJdGVtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpc09kZCA9IHNvdXJjZXMubGVuZ3RoICUgMiAhPT0gMDtcblxuICAgICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgIGlmIChpc09kZCkge1xuICAgICAgICAgICAgaW5kZXggPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlyc3RIYWxmID0gc291cmNlcy5zbGljZSgwLCBvZmZzZXRJbmRleCArIGluZGV4KTtcbiAgICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHNvdXJjZXMuc2xpY2Uob2Zmc2V0SW5kZXggKyBpbmRleCk7XG5cbiAgICAgICAgY29uc3Qgc3JjQXJyYXkgPSBbLi4uc2Vjb25kSGFsZiwgLi4uZmlyc3RIYWxmXTsgLy8gR2V0IHRoZSBzZWNvbmQgaGFsZiB0byB0aGUgZnJvbnRcblxuICAgICAgICBmb3IgKGxldCBzcmMgb2Ygc3JjQXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc291cmNlcy5maW5kSW5kZXgoKHVybCkgPT4gdXJsID09PSBzcmMpO1xuXG4gICAgICAgICAgICBpbWcuc3JjID0gc291cmNlc1tpbmRleF07XG5cbiAgICAgICAgICAgIGxpLmFwcGVuZChpbWcpO1xuICAgICAgICAgICAgbGkuY2xhc3NOYW1lID0gXCJpdGVtXCI7XG4gICAgICAgICAgICBsaS5kYXRhc2V0Lml0ZW1JbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgICBsaXN0LmFwcGVuZChsaSk7XG4gICAgICAgIH1cblxuICAgICAgICB3cmFwLnN0eWxlLndpZHRoID0gYCR7aXRlbVdpZHRofXB4YDtcblxuICAgICAgICBsaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7b2Zmc2V0SW5kZXggKiAtaXRlbVdpZHRofXB4KWA7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZURvdCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9IFwiZG90XCI7XG4gICAgICAgICAgICBsaS5hcHBlbmQoYnV0dG9uKTtcblxuICAgICAgICAgICAgbGkuZGF0YXNldC5kb3RJbmRleCA9IGk7XG5cbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG90c0xpc3QuYXBwZW5kKGxpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVJdGVtLFxuICAgICAgICBjcmVhdGVEb3QsXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgaGFuZGxlQ2Fyb3VzZWxMaXN0IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi4vY3NzL21haW4uY3NzXCI7XG5cbmltcG9ydCB7IGNyZWF0ZURyb3Bkb3duIH0gZnJvbSBcIi4vZHJvcGRvd25cIjtcbmltcG9ydCB7IGNyZWF0ZUhhbWJ1cmdlciB9IGZyb20gXCIuL2hhbWJ1cmdlclwiO1xuaW1wb3J0IHsgY3JlYXRlVGFicyB9IGZyb20gXCIuL3RhYnNcIjtcbmltcG9ydCB7IGNyZWF0ZUNhcm91c2VsIH0gZnJvbSBcIi4vY2Fyb3VzZWxcIjtcbmltcG9ydCB7IGNyZWF0ZUN5Y2xlQ2Fyb3VzZWwgfSBmcm9tIFwiLi9jaXJjdWxhckNhcm91c2VsXCI7XG5pbXBvcnQgeyBoYW5kbGVDYXJvdXNlbExpc3QgfSBmcm9tIFwiLi9oYW5kbGVDYXJvdXNlbExpc3RcIjtcblxuaW1wb3J0IGltYWdlIGZyb20gXCIuLi9pbWcvYmlnMS5qcGdcIjtcbmltcG9ydCBpbWFnZTIgZnJvbSBcIi4uL2ltZy9iaWcyLmpwZ1wiO1xuaW1wb3J0IGltYWdlMyBmcm9tIFwiLi4vaW1nL2JpZzMuanBnXCI7XG5pbXBvcnQgaW1hZ2U0IGZyb20gXCIuLi9pbWcvYmlnNC5qcGdcIjtcbmltcG9ydCBpbWFnZTUgZnJvbSBcIi4uL2ltZy9iaWc1LmpwZ1wiO1xuaW1wb3J0IGltYWdlNiBmcm9tIFwiLi4vaW1nL2JpZzYuanBnXCI7XG5pbXBvcnQgaW1hZ2U3IGZyb20gXCIuLi9pbWcvYmlnNy5qcGdcIjtcblxuY29uc3QgbWFpbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgY2lyY3VsYXJDYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwuY2lyY3VsYXJcIik7XG5cbiAgICBjb25zdCBzb3VyY2VzID0gZ2V0U291cmNlcygpO1xuICAgIGNvbnN0IGhhbGZMZW5ndGggPSBNYXRoLmZsb29yKHNvdXJjZXMubGVuZ3RoIC8gMik7XG4gICAgY29uc3QgaXRlbVdpZHRoID0gNTAwO1xuXG4gICAgY29uc3QgY2Fyb3VzZWxMaXN0ID0gaGFuZGxlQ2Fyb3VzZWxMaXN0KFxuICAgICAgICBjaXJjdWxhckNhcm91c2VsLFxuICAgICAgICBzb3VyY2VzLFxuICAgICAgICBpdGVtV2lkdGhcbiAgICApO1xuICAgIGNhcm91c2VsTGlzdC5jcmVhdGVJdGVtKCk7XG4gICAgY2Fyb3VzZWxMaXN0LmNyZWF0ZURvdCgpOyAgICBcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhY3RpdmVNZW51T25Qb2ludGVyT3Zlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGFjdGl2ZU1lbnVPblBvaW50ZXJEb3duKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGFjdGl2ZU1lbnVPblBvaW50ZXJVcCk7XG5cbiAgICBmdW5jdGlvbiBnZXRTb3VyY2VzKCkge1xuICAgICAgICByZXR1cm4gW2ltYWdlLCBpbWFnZTIsIGltYWdlMywgaW1hZ2U0LCBpbWFnZTUsIGltYWdlNiwgaW1hZ2U3XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmVNZW51T25Qb2ludGVyT3ZlcihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLmRyb3Bkb3duXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBkcm9wZG93biA9IGNyZWF0ZURyb3Bkb3duKGUudGFyZ2V0LmNsb3Nlc3QoXCIuZHJvcGRvd25cIikpO1xuXG4gICAgICAgICAgICBkcm9wZG93bi5hY3RpdmVJdGVtSG92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmVNZW51T25Qb2ludGVyVXAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5oYW1idXJnZXJcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbWJ1cmdlciA9IGNyZWF0ZUhhbWJ1cmdlcihlLnRhcmdldC5jbG9zZXN0KFwiLmhhbWJ1cmdlclwiKSk7XG5cbiAgICAgICAgICAgIGhhbWJ1cmdlci5hY3RpdmVIYW1idXJnZXIoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi50YWJzXCIpKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFicyA9IGNyZWF0ZVRhYnMoZS50YXJnZXQuY2xvc2VzdChcIi50YWJzXCIpKTtcblxuICAgICAgICAgICAgICAgIHRhYnMuYWN0aXZlVGFiKGUudGFyZ2V0LmNsb3Nlc3QoXCIuaXRlbVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWN0aXZlTWVudU9uUG9pbnRlckRvd24oZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5jYXJvdXNlbFwiKSkge1xuICAgICAgICAgICAgbGV0IGNhcm91c2VsID0gZS50YXJnZXQuY2xvc2VzdChcIi5jYXJvdXNlbFwiKTtcblxuICAgICAgICAgICAgaWYgKGNhcm91c2VsLmNsYXNzTGlzdC5jb250YWlucyhcImNpcmN1bGFyXCIpKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDYXJvdXNlbCA9IGNyZWF0ZUN5Y2xlQ2Fyb3VzZWwoXG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsLFxuICAgICAgICAgICAgICAgICAgICBoYWxmTGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBpdGVtV2lkdGhcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLmFycm93XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuYXJyb3dcIikuY2xhc3NMaXN0WzFdO1xuICAgICAgICAgICAgICAgICAgICBuZXdDYXJvdXNlbC5zY3JvbGxCeUNsaWNrKGRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCIuZG90XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREb3RJbmRleCA9XG4gICAgICAgICAgICAgICAgICAgICAgICArY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5kb3QuYWN0aXZlXCIpLmRhdGFzZXQuZG90SW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0RG90SW5kZXggPVxuICAgICAgICAgICAgICAgICAgICAgICAgK2UudGFyZ2V0LmNsb3Nlc3QoXCIuZG90XCIpLmRhdGFzZXQuZG90SW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3REb3RJbmRleCAtIGN1cnJlbnREb3RJbmRleDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBcIm5leHRcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IFwicHJldlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5hYnMoaW5kZXgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nhcm91c2VsLnNjcm9sbEJ5Q2xpY2soZGlyZWN0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q2Fyb3VzZWwgPSBjcmVhdGVDYXJvdXNlbChjYXJvdXNlbCwgNjAsIDQpO1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLmxpc3RcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2Fyb3VzZWwuc2Nyb2xsQnlQb2ludGVyTW92ZShlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuXG5leHBvcnQgeyBtYWluIH07XG5cbi8vIGRyb3Bkb3duIG1lbnVcblxuLy8gY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duXCIpO1xuLy8gY29uc3QgZHJvcGRvd25NZXRob2QgPSBjcmVhdGVEcm9wZG93bihkcm9wZG93bik7XG5cbi8vIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB7XG4vLyAgICAgZHJvcGRvd25NZXRob2QuYWN0aXZlSXRlbUhvdmVyKCk7XG4vLyB9KTtcblxuLy8gaGFtYnVyZ2VyIG1lbnVcblxuLy8gY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XG4vLyBjb25zdCBoYW1idXJnZXJNZXRob2QgPSBjcmVhdGVIYW1idXJnZXIoaGFtYnVyZ2VyKTtcblxuLy8gaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+IHtcbi8vICAgICBoYW1idXJnZXJNZXRob2QuYWN0aXZlSGFtYnVyZ2VyKCk7XG4vLyB9KVxuXG4vLyB0YWJzIG1lbnVcbi8vIFRvIHVzZSB0aGUgdGFic0Ryb3Bkb3duIG1lbnUsIHlvdSBuZWVkIHRvIGxvYWQgIGNyZWF0ZUhhbWJ1cmdlclxuXG4vLyBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzXCIpO1xuLy8gY29uc3QgdGFic01ldGhvZCA9IGNyZWF0ZVRhYnModGFicyk7XG5cbi8vIHRhYnMuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCAoZSkgPT4ge1xuLy8gICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLml0ZW1cIikpIHtcbi8vICAgICAgICAgdGFic01ldGhvZC5hY3RpdmVUYWIoZS50YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpKTtcbi8vICAgICB9XG4vLyB9KTtcblxuLy8gY2Fyb3VzZWwgbWVudVxuLy8gVG8gdXNlIHRoZSBjYXJvdXNlbCBtZW51LCB5b3UgbmVlZCB0byBsb2FkIGNyZWF0ZVRhYnNcblxuLy8gY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpO1xuLy8gY29uc3QgY2Fyb3VzZWxNZXRob2QgPSBjcmVhdGVDYXJvdXNlbChjYXJvdXNlbCk7XG5cbi8vIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCAoZSkgPT4ge1xuLy8gICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLmFycm93XCIpKSB7XG4vLyAgICAgICAgIGNvbnN0IGFycm93ID0gZS50YXJnZXQuY2xvc2VzdChcIi5hcnJvd1wiKS5jbGFzc0xpc3RbMV07XG4vLyAgICAgICAgIGNhcm91c2VsTWV0aG9kLnNjcm9sbEJ5Q2xpY2soYXJyb3cpO1xuLy8gICAgIH1cblxuLy8gICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLmxpc3RcIikpIHtcbi8vICAgICAgICAgY2Fyb3VzZWxNZXRob2Quc2Nyb2xsQnlQb2ludGVyTW92ZShlKTtcbi8vICAgICB9XG4vLyB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9jc3MvdGFicy5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy90YWJzRHJvcGRvd24uY3NzXCI7XG5cbmNvbnN0IGNyZWF0ZVRhYnMgPSAodGFicykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSB0YWJzLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKTtcbiAgICBjb25zdCBsaXN0Q2hpbGQgPSBBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgYWN0aXZlVGFiID0gKHRhYikgPT4ge1xuICAgICAgICBpZiAobGlzdENoaWxkLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gdGFiKSA9PT0gLTEpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlVGFiID0gbGlzdC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0uYWN0aXZlXCIpO1xuXG4gICAgICAgIGlmIChjdXJyZW50QWN0aXZlVGFiKSB7XG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlVGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRhYnMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgY2xvc2VNZW51KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNZW51KGUpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLnRhYnNcIikgPT09IHRhYnMpIHJldHVybjtcblxuICAgICAgICAgICAgdGFicy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBjbG9zZU1lbnUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZVRhYixcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVGFicyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4vY29tcG9uZW50cy9tYWluLmpzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=