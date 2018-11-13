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
    __webpack_require__.e/* import() */("ason").then(__webpack_require__.bind(null, "./src/A-SON-1.js")).then((str) => {
        console.log(str)
    });
}else {
    __webpack_require__.e/* import() */("ason").then(__webpack_require__.bind(null, "./src/A-SON-2.js")).then((str) => {
        console.log(str)
    });
}

/*if(flag === "Ason1"){
    require.ensure(["./A-SON-1.js"],()=>{
        require("./A-SON-1.js");
    },"ASON1")
}else {
    require.ensure(["./A-SON-2.js"],()=>{
        require("./A-SON-2.js");
    },"ASON2")
}*/


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