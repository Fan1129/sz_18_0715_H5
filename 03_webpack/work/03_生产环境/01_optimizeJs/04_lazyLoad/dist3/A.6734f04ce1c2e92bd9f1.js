webpackJsonp(["A"],{

/***/ "./src/A.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/*import  "./A-SON-1.js";
import  "./A-SON-2.js";*/


undefined/*! require.include ./COMMON.js */;
var flag ="Ason1";
if(flag === "Ason1"){
    __webpack_require__.e/* require.ensure */("ASON1").then((()=>{
        __webpack_require__("./src/A-SON-1.js");
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
}else {
    __webpack_require__.e/* require.ensure */("ASON2").then((()=>{
        __webpack_require__("./src/A-SON-2.js");
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
}


console.log("A.js")

/***/ }),

/***/ "./src/COMMON.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (()=>{
    console.log("COMMON")
    return "common"
});

/***/ })

},["./src/A.js"]);