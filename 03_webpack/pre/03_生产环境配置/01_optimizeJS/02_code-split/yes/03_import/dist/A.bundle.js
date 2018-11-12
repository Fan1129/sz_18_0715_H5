webpackJsonp([3],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// require.include("./01_common.js");

var flag = "son1";

if(flag === "son1"){
    /*require.ensure(["./Ason1.js"], function(require22){
         require22("./Ason1.js");
    }, "son1")*/
    __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 1)).then(son1 =>{
        console.log(son1)
    })
}else if(flag === "son2"){
    /*require.ensure(["./Ason2.js"], function(require22){
         require22("./Ason2.js");
    }, "son2")*/
    __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 2)).then(son2 =>{
        console.log(son2)
    })
}

/*require.ensure(["jquery"], function(require22){
    var $ = require22("jquery");
}, "third")*/
__webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 3)).then($ =>{
    console.log($)
})

console.log("A.js")

/* harmony default export */ __webpack_exports__["default"] = ('A');

/***/ })
],[0]);