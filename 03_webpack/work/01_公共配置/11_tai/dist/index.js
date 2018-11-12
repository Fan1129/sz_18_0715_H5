/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAjCAYAAACU9ioYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUZGREQyOTQxMDdCMTFFNDkzNkFEMkMxQzk1N0FBQkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUZGREQyOTUxMDdCMTFFNDkzNkFEMkMxQzk1N0FBQkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RkZERDI5MjEwN0IxMUU0OTM2QUQyQzFDOTU3QUFCQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RkZERDI5MzEwN0IxMUU0OTM2QUQyQzFDOTU3QUFCQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhbehtAAAADISURBVHja7JVLDgIhDIYpwwU8EoRjEziTe6GCQmJigBbZqPMnk86i86XPKSCiKHLO3bI5xFjRWqtGDpIBKzqq7xhIhAmK71v4OSUoNoSAMUbBVbceWusH2HuPKSUyUM4cjDHQot4C3JZyEzflLnBbU/Kc4ScptxpyQolTYF0nCnS6etB2eZe2j80J/AegqutWDHUgy+9sGiFnuvG3mgL1SZ335QjlahZqUHCkNuI7mwKMb4BaQ3ip1aUz0NeVM0q9L+dNeeouwADE9Eh21M993wAAAABJRU5ErkJggg=="

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transform_js__ = __webpack_require__(2);


function carousel(arr) {
  //布局
  var carouselWrap = document.querySelector(".carousel-wrap");

  if (carouselWrap) {
    var auto = function auto() {
      clearInterval(timer);
      timer = setInterval(function () {
        if (index == 1 - arr.length) {
          ulNode.style.transition = "none";
          index = 1 - arr.length / 2;
          __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode, "translateX", index * document.documentElement.clientWidth);
        }

        setTimeout(function () {
          index--;
          ulNode.style.transition = "1s transform";
          xiaoyuandian(index);
          __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode, "translateX", index * document.documentElement.clientWidth);
        }, 50);
      }, 2000);
    };

    var xiaoyuandian = function xiaoyuandian(index) {
      if (!pointsWrap) {
        return;
      }

      for (var i = 0; i < pointsSpan.length; i++) {
        pointsSpan[i].classList.remove("active");
      }

      pointsSpan[-index % pointslength].classList.add("active");
    };

    var pointslength = arr.length; //无缝

    var needCarousel = carouselWrap.getAttribute("needCarousel");
    needCarousel = needCarousel == null ? false : true;

    if (needCarousel) {
      arr = arr.concat(arr);
    }

    var ulNode = document.createElement("ul");
    __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode, "translateZ", 0);
    var styleNode = document.createElement("style");
    ulNode.classList.add("list");

    for (var i = 0; i < arr.length; i++) {
      ulNode.innerHTML += '<li><a href="javascript:;"><img src="' + arr[i] + '"/></a></li>';
    }

    styleNode.innerHTML = ".carousel-wrap > .list > li{width: " + 1 / arr.length * 100 + "%;}.carousel-wrap > .list{width: " + arr.length + "00%}";
    carouselWrap.appendChild(ulNode);
    document.head.appendChild(styleNode);
    var imgNodes = document.querySelector(".carousel-wrap > .list > li > a >img");
    setTimeout(function () {
      carouselWrap.style.height = imgNodes.offsetHeight + "px";
    }, 100);
    var pointsWrap = document.querySelector(".carousel-wrap > .points-wrap");

    if (pointsWrap) {
      for (var i = 0; i < pointslength; i++) {
        if (i == 0) {
          pointsWrap.innerHTML += '<span class="active"></span>';
        } else {
          pointsWrap.innerHTML += '<span></span>';
        }
      }

      var pointsSpan = document.querySelectorAll(".carousel-wrap > .points-wrap > span");
    }
    /*滑屏
     * 	1.拿到元素一开始的位置
     * 	2.拿到手指一开始点击的位置
     * 	3.拿到手指move的实时距离
     * 	4.将手指移动的距离加给元素
     * */

    /*
     * 防抖动
     * 
     * 1.判断用户首次滑屏的方向
     * 2.如果是x轴
     * 		以后不管用户怎么滑都会抖动
     * 3.如果是y轴
     * 		以后不管用户怎么滑都不会抖动	
     * */


    var index = 0; //手指一开始的位置

    var startX = 0;
    var startY = 0; //元素一开始的位置

    var elementX = 0;
    var elementY = 0; //var translateX =0;
    //首次滑屏的方向

    var isX = true;
    var isFirst = true;
    carouselWrap.addEventListener("touchstart", function (ev) {
      ev = ev || event;
      var TouchC = ev.changedTouches[0];
      ulNode.style.transition = "none"; //无缝

      if (needCarousel) {
        var index = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode, "translateX") / document.documentElement.clientWidth;

        if (-index === 0) {
          index = -pointslength;
        } else if (-index == arr.length - 1) {
          index = -(pointslength - 1);
        }

        __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode, "translateX", index * document.documentElement.clientWidth);
      }

      startX = TouchC.clientX;
      startY = TouchC.clientY;
      elementX = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode, "translateX");
      elementY = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode, "translateY"); //清楚定时器

      clearInterval(timer);
      isX = true;
      isFirst = true;
    });
    carouselWrap.addEventListener("touchmove", function (ev) {
      //看门狗  二次以后的防抖动
      if (!isX) {
        //咬住
        return;
      }

      ev = ev || event;
      var TouchC = ev.changedTouches[0];
      var nowX = TouchC.clientX;
      var nowY = TouchC.clientY;
      var disX = nowX - startX;
      var disY = nowY - startY; //首次判断用户的华东方向

      if (isFirst) {
        isFirst = false; //判断用户的滑动方向
        //x ---> 放行
        //y ---> 首次狠狠的咬住，并且告诉兄弟 下次也给我咬住

        if (Math.abs(disY) > Math.abs(disX)) {
          //y轴上滑
          isX = false; //首次防抖动

          return;
        }
      }

      __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode, "translateX", elementX + disX);
    });
    carouselWrap.addEventListener("touchend", function (ev) {
      ev = ev || event;
      index = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode, "translateX") / document.documentElement.clientWidth;
      index = Math.round(index);

      if (index > 0) {
        index = 0;
      } else if (index < 1 - arr.length) {
        index = 1 - arr.length;
      }

      xiaoyuandian(index);
      ulNode.style.transition = ".5s transform";
      __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode, "translateX", index * document.documentElement.clientWidth);

      if (needAuto) {
        auto();
      }
    }); //自动轮播

    var timer = 0;
    var needAuto = carouselWrap.getAttribute("needAuto");
    needAuto = needAuto == null ? false : true;

    if (needAuto) {
      auto();
    }
  }
}

;

function dragNav() {
  //滑屏区域
  var wrap = document.querySelector(".damu-nav-drag-wrapper"); //滑屏元素

  var item = document.querySelector(".damu-nav-drag-wrapper .list"); //元素一开始的位置  手指一开始的位置

  var startX = 0;
  var elementX = 0;
  var minX = wrap.clientWidth - item.offsetWidth; //快速滑屏的必要参数

  var lastTime = 0;
  var lastPoint = 0;
  var timeDis = 1;
  var pointDis = 0;
  wrap.addEventListener("touchstart", function (ev) {
    ev = ev || event;
    var touchC = ev.changedTouches[0];
    startX = touchC.clientX;
    elementX = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateX");
    item.style.transition = "none";
    lastTime = new Date().getTime();
    lastPoint = touchC.clientX; //lastPoint = transform.less(item,"translateX");
    //清除速度的残留

    pointDis = 0;
    item.handMove = false;
  });
  wrap.addEventListener("touchmove", function (ev) {
    ev = ev || event;
    var touchC = ev.changedTouches[0];
    var nowX = touchC.clientX;
    var disX = nowX - startX;
    var translateX = elementX + disX;
    var nowTime = new Date().getTime();
    var nowPoint = touchC.clientX;
    timeDis = nowTime - lastTime;
    pointDis = nowPoint - lastPoint;
    lastTime = nowTime;
    lastPoint = nowPoint;
    /*手动橡皮筋效果
     * 
     * 在move的过程中，每一次手指touchmove真正的有效距离慢慢变小，元素的滑动距离还是在变大
     * 
     * pointDis：整个手指touchmove真正的有效距
     * 
     * translateX = transform.less(item,"translateX") + pointDis*scale;!!!
     * 
     * */

    if (translateX > 0) {
      item.handMove = true;
      var scale = document.documentElement.clientWidth / ((document.documentElement.clientWidth + translateX) * 1.5);
      translateX = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateX") + pointDis * scale;
    } else if (translateX < minX) {
      item.handMove = true;
      var over = minX - translateX;
      var scale = document.documentElement.clientWidth / ((document.documentElement.clientWidth + over) * 1.5);
      translateX = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateX") + pointDis * scale;
    }

    __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateX", translateX);
  });
  wrap.addEventListener("touchend", function (ev) {
    var translateX = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateX");

    if (!item.handMove) {
      //快速滑屏
      //速度越大  位移越远
      var speed = pointDis / timeDis;
      speed = Math.abs(speed) < 0.5 ? 0 : speed;
      var targetX = translateX + speed * 200;
      var time = Math.abs(speed) * 0.2;
      time = time < 0.8 ? 0.8 : time;
      time = time > 2 ? 2 : time; //快速滑屏的橡皮筋效果

      var bsr = "";

      if (targetX > 0) {
        targetX = 0;
        bsr = "cubic-bezier(.26,1.51,.68,1.54)";
      } else if (targetX < minX) {
        targetX = minX;
        bsr = "cubic-bezier(.26,1.51,.68,1.54)";
      }

      item.style.transition = time + "s " + bsr + " transform";
      __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateX", targetX);
    } else {
      //手动橡皮筋效果
      item.style.transition = "1s transform";

      if (translateX > 0) {
        translateX = 0;
        __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateX", translateX);
      } else if (translateX < minX) {
        translateX = minX;
        __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateX", translateX);
      }
    }
  });
}

;

function vMove(wrap, callBack) {
  //滑屏区域
  //滑屏元素
  var item = wrap.children[0];
  __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateZ", 0.1); //元素一开始的位置  手指一开始的位置

  var start = {};
  var element = {};
  var minY = wrap.clientHeight - item.offsetHeight; //快速滑屏的必要参数

  var lastTime = 0;
  var lastPoint = 0;
  var timeDis = 1;
  var pointDis = 0;
  var isY = true;
  var isFirst = true; //即点即停

  var cleartime = 0;
  var Tween = {
    Linear: function Linear(t, b, c, d) {
      return c * t / d + b;
    },
    back: function back(t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }
  };
  wrap.addEventListener("touchstart", function (ev) {
    ev = ev || event;
    var touchC = ev.changedTouches[0]; //重置minY!!

    minY = wrap.clientHeight - item.offsetHeight;
    start = {
      clientX: touchC.clientX,
      clientY: touchC.clientY
    };
    element.y = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateY");
    element.x = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateX");
    item.style.transition = "none";
    lastTime = new Date().getTime();
    lastPoint = touchC.clientY; //lastPoint = transform.less(item,"translateY");
    //清除速度的残留

    pointDis = 0;
    item.handMove = false;
    isY = true;
    isFirst = true; //即点即停

    clearInterval(cleartime);

    if (callBack && typeof callBack["start"] === "function") {
      callBack["start"].call(item);
    }
  });
  wrap.addEventListener("touchmove", function (ev) {
    if (!isY) {
      return;
    }

    ev = ev || event;
    var touchC = ev.changedTouches[0];
    /*var nowY = touchC.clientY;
    var disY = nowY - startY;
    var translateY = elementY+disY;*/

    var now = touchC;
    var dis = {};
    dis.y = now.clientY - start.clientY;
    dis.x = now.clientX - start.clientX;
    var translateY = element.y + dis.y;

    if (isFirst) {
      isFirst = false;

      if (Math.abs(dis.x) > Math.abs(dis.y)) {
        isY = false;
        return;
      }
    }

    var nowTime = new Date().getTime();
    var nowPoint = touchC.clientY;
    timeDis = nowTime - lastTime;
    pointDis = nowPoint - lastPoint;
    lastTime = nowTime;
    lastPoint = nowPoint;
    /*手动橡皮筋效果
     * 
     * 在move的过程中，每一次手指touchmove真正的有效距离慢慢变小，元素的滑动距离还是在变大
     * 
     * pointDis：整个手指touchmove真正的有效距
     * 
     * translateY = transform.less(item,"translateY") + pointDis*scale;!!!
     * 
     * */

    if (translateY > 0) {
      item.handMove = true;
      var scale = document.documentElement.clientHeight / ((document.documentElement.clientHeight + translateY) * 1.5);
      translateY = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateY") + pointDis * scale;
    } else if (translateY < minY) {
      item.handMove = true;
      var over = minY - translateY;
      var scale = document.documentElement.clientHeight / ((document.documentElement.clientHeight + over) * 1.5);
      translateY = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateY") + pointDis * scale;
    }

    __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateY", translateY);

    if (callBack && typeof callBack["move"] === "function") {
      callBack["move"].call(item);
    }
  });
  wrap.addEventListener("touchend", function (ev) {
    var translateY = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateY");

    if (!item.handMove) {
      //快速滑屏
      //速度越大  位移越远
      var speed = pointDis / timeDis;
      speed = Math.abs(speed) < 0.5 ? 0 : speed;
      var targetY = translateY + speed * 200;
      var time = Math.abs(speed) * 0.2;
      time = time < 0.8 ? 0.8 : time;
      time = time > 2 ? 2 : time; //快速滑屏的橡皮筋效果
      //var bsr="";

      var type = "Linear";

      if (targetY > 0) {
        targetY = 0;
        type = "back"; //bsr = "cubic-bezier(.26,1.51,.68,1.54)";
      } else if (targetY < minY) {
        targetY = minY;
        type = "back"; //bsr = "cubic-bezier(.26,1.51,.68,1.54)";
      }
      /*item.style.transition=time+"s "+bsr+" transform";
      transform.less(item,"translateY",targetY);*/


      bsr(type, targetY, time);
    } else {
      //手动橡皮筋效果
      item.style.transition = "1s transform";

      if (translateY > 0) {
        translateY = 0;
        __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateY", translateY);
      } else if (translateY < minY) {
        translateY = minY;
        __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateY", translateY);
      }

      if (callBack && typeof callBack["end"] === "function") {
        callBack["end"].call(item);
      }
    }
  });

  function bsr(type, targetY, time) {
    clearInterval(cleartime); //当前次数

    var t = 0; //初始位置

    var b = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateY"); //最终位置 - 初始位置

    var c = targetY - b; //总次数

    var d = time * 1000 / (1000 / 60);
    cleartime = setInterval(function () {
      t++;

      if (callBack && typeof callBack["autoMove"] === "function") {
        callBack["move"].call(item);
      }

      if (t > d) {
        clearInterval(cleartime);

        if (callBack && typeof callBack["end"] === "function") {
          callBack["end"].call(item);
        }
      }

      var point = Tween[type](t, b, c, d);
      __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item, "translateY", point);
    }, 1000 / 60);
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  carousel: carousel,
  dragNav: dragNav,
  vMove: vMove
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ __webpack_exports__["a"] = ({
  css: function css(node, type, val) {
    if (_typeof(node) === "object" && typeof node["transform"] === "undefined") {
      node["transform"] = {};
    }

    if (arguments.length >= 3) {
      //设置
      var text = "";
      node["transform"][type] = val;

      for (var item in node["transform"]) {
        if (node["transform"].hasOwnProperty(item)) {
          switch (item) {
            case "translateX":
            case "translateY":
            case "translateZ":
              text += item + "(" + node["transform"][item] + "px)";
              break;

            case "scale":
              text += item + "(" + node["transform"][item] + ")";
              break;

            case "rotate":
              text += item + "(" + node["transform"][item] + "deg)";
              break;
          }
        }
      }

      node.style.transform = node.style.webkitTransform = text;
    } else if (arguments.length == 2) {
      //读取
      val = node["transform"][type];

      if (typeof val === "undefined") {
        switch (type) {
          case "translateX":
          case "translateY":
          case "rotate":
            val = 0;
            break;

          case "scale":
            val = 1;
            break;
        }
      }

      return val;
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function addClass(node, className) {
  var reg = new RegExp("\\b" + className + "\\b");

  if (!reg.test(node.className)) {
    node.className += " " + className;
  }
}

function removeClass(node, className) {
  if (node.className) {
    var reg = new RegExp("\\b" + className + "\\b");
    var classes = node.className;
    node.className = classes.replace(reg, "");

    if (/^\s*$/g.test(node.className)) {
      node.removeAttribute("class");
    }
  } else {
    node.removeAttribute("class");
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  addClass: addClass,
  removeClass: removeClass
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tai_less__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tai_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_tai_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taiUiByDamu_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taiUiByXfz_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_1_jpg__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_1_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_1_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_2_jpg__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_2_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_2_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_3_jpg__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_3_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_3_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_4_jpg__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_4_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__img_4_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__img_5_jpg__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__img_5_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__img_5_jpg__);








__WEBPACK_IMPORTED_MODULE_1__taiUiByDamu_js__["a" /* default */].CMCFMenuBtn();
__WEBPACK_IMPORTED_MODULE_1__taiUiByDamu_js__["a" /* default */].changeFocus();
__WEBPACK_IMPORTED_MODULE_1__taiUiByDamu_js__["a" /* default */].drag();
__WEBPACK_IMPORTED_MODULE_1__taiUiByDamu_js__["a" /* default */].swiper();
__WEBPACK_IMPORTED_MODULE_2__taiUiByXfz_js__["a" /* default */].changeColor();
__WEBPACK_IMPORTED_MODULE_2__taiUiByXfz_js__["a" /* default */].tap();
__WEBPACK_IMPORTED_MODULE_2__taiUiByXfz_js__["a" /* default */].vMove();
__WEBPACK_IMPORTED_MODULE_2__taiUiByXfz_js__["a" /* default */].head();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(6);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(10)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/less-loader/dist/cjs.js!./tai.less", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/less-loader/dist/cjs.js!./tai.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, ".carousel-wrap {\n  position: relative;\n}\n.carousel-wrap > .list {\n  list-style: none;\n  overflow: hidden;\n  position: absolute;\n}\n.carousel-wrap > .list > li {\n  float: left;\n}\n.carousel-wrap > .list > li > a {\n  display: block;\n}\n.carousel-wrap > .list > li > a > img {\n  display: block;\n  width: 100%;\n}\n.carousel-wrap > .points-wrap {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  z-index: 1;\n}\n.carousel-wrap > .points-wrap > span {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: green;\n  margin-left: 5px;\n}\n.carousel-wrap > .points-wrap > span.active {\n  background: deeppink;\n}\n.damu-nav-drag-wrapper {\n  position: relative;\n  width: 100%;\n  height: 2.62222222rem;\n  box-sizing: border-box;\n  background: #EEEEEE;\n  padding: 0.45925926rem 0 0.20740741rem 0;\n}\n.damu-nav-drag-wrapper:before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  background: black;\n}\n@media (-webkit-device-pixel-ratio: 2) {\n  .damu-nav-drag-wrapper:before {\n    transform: scaleY(0.5);\n  }\n}\n@media (-webkit-device-pixel-ratio: 3) {\n  .damu-nav-drag-wrapper:before {\n    transform: scaleY(0.33333333);\n  }\n}\n.damu-nav-drag-wrapper .list {\n  font-size: 0;\n  white-space: nowrap;\n  float: left;\n}\n.damu-nav-drag-wrapper .list > li {\n  height: 1.91111111rem;\n  line-height: 1.91111111rem;\n  font-size: 1rem;\n  display: inline-block;\n}\n.damu-nav-drag-wrapper .list > li a {\n  display: block;\n  height: 100%;\n  color: #020202;\n  padding: 0 0.56296296rem;\n}\n.damu-nav-drag-wrapper .list > li a.active {\n  background: #690;\n  color: #fff;\n}\n.clearfix,\n#wrap .content .tap-wrap .tap-content,\n#wrap .content .tap-wrap .tap-content ul {\n  *zoom: 1;\n}\n.clearfix:after,\n#wrap .content .tap-wrap .tap-content:after,\n#wrap .content .tap-wrap .tap-content ul:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n#wrap {\n  position: relative;\n  font-size: 0.23703704rem;\n  height: 100%;\n  overflow: hidden;\n  background: #EEEEEE;\n}\n#wrap .head {\n  position: absolute;\n  width: 100%;\n  background: #232323;\n  z-index: 8;\n}\n#wrap .head .head-top {\n  height: 2rem;\n}\n#wrap .head .head-top .logo {\n  float: left;\n  padding: 0.38518519rem 0.25185185rem 0.31111111rem 0.25185185rem;\n}\n#wrap .head .head-top .logo img {\n  width: 3.55555556rem;\n}\n#wrap .head .head-top .menuBtn {\n  float: left;\n  width: 1.91111111rem;\n  height: 2rem;\n  background: url(" + __webpack_require__(8) + ") no-repeat;\n  background-size: 1.21481481rem 3.45185185rem;\n  background-position: center 0.23703704rem;\n}\n#wrap .head .head-top .menuBtn.active {\n  background-position: center -1.77777778rem;\n}\n#wrap .head .head-top .btns {\n  padding-top: 0.31111111rem;\n  float: right;\n}\n#wrap .head .head-top .btns a {\n  float: left;\n  width: 1.64444444rem;\n  height: 1.15555556rem;\n  line-height: 1.15555556rem;\n  background: #690;\n  color: #ccc;\n  margin-right: 0.22222222rem;\n  font-size: 0.62222222rem;\n  text-align: center;\n  border-radius: 0.11851852rem;\n}\n#wrap .head .head-top .btns a.search {\n  width: 1.92592593rem;\n  height: 1.3037037rem;\n  line-height: 1.3037037rem;\n  color: #fff;\n  margin-right: 0.44444444rem;\n  margin-top: 0.04444444rem;\n  font-weight: bold;\n  border-radius: 0.14814815rem;\n}\n#wrap .head .head-bottom {\n  height: 1.52592593rem;\n  padding: 0.23703704rem;\n}\n#wrap .head .head-bottom form {\n  height: 100%;\n}\n#wrap .head .head-bottom form input[type='text'] {\n  float: left;\n  box-sizing: border-box;\n  height: 1.52592593rem;\n  width: 12.28148148rem;\n  background: #999999;\n  padding: 0.07407407rem 0.14814815rem;\n  border: 1px solid #5a5a5a;\n  font-size: 0.60740741rem;\n  color: #333333;\n  border-radius: 0.22222222rem 0 0 0.22222222rem;\n}\n#wrap .head .head-bottom form input[type='text']::-webkit-input-placeholder {\n  color: #333333;\n}\n#wrap .head .head-bottom form input[type='text']:focus {\n  background: white;\n}\n#wrap .head .head-bottom form input[type='submit'] {\n  float: right;\n  width: 3.00740741rem;\n  height: 1.52592593rem;\n  background: #414040;\n  color: #fff;\n  font-size: 0.60740741rem;\n  border-radius: 0 0.22222222rem 0.22222222rem 0;\n}\n#wrap .head .mask {\n  position: relative;\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  top: 2rem;\n  width: 100%;\n  padding: 0.14814815rem 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: none;\n}\n#wrap .head .mask:before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  background: deeppink;\n}\n@media (-webkit-device-pixel-ratio: 2) {\n  #wrap .head .mask:before {\n    transform: scaleY(0.5);\n  }\n}\n@media (-webkit-device-pixel-ratio: 3) {\n  #wrap .head .mask:before {\n    transform: scaleY(0.33333333);\n  }\n}\n#wrap .head .mask > li {\n  width: 22.5%;\n  height: 2rem;\n  font-size: 0.8rem;\n  line-height: 2rem;\n  text-align: center;\n  float: left;\n}\n#wrap .head .mask > li a {\n  color: white;\n}\n#wrap .content {\n  background: #EEEEEE;\n  position: absolute;\n  top: 4rem;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n#wrap .content .tap-wrap {\n  overflow: hidden;\n  width: 15.4962963rem;\n  background: #FFFFFF;\n  margin: 0 auto;\n}\n#wrap .content .tap-wrap .tap-head {\n  height: 2rem;\n  line-height: 2rem;\n}\n#wrap .content .tap-wrap .tap-head h2 {\n  float: left;\n  font-size: 1rem;\n}\n#wrap .content .tap-wrap .tap-head span {\n  float: right;\n  font-size: 0.8rem;\n}\n#wrap .content .tap-wrap .tap-nav {\n  position: relative;\n  height: 1.55555556rem;\n  line-height: 1.55555556rem;\n}\n#wrap .content .tap-wrap .tap-nav a {\n  float: left;\n  height: 1.55555556rem;\n  margin-right: 0.2962963rem;\n  font-size: 0.65185185rem;\n  text-align: center;\n  color: #6b6b6b;\n}\n#wrap .content .tap-wrap .tap-nav .smallG {\n  position: absolute;\n  left: 0;\n  bottom: 0.14814815rem;\n  height: 0.13333333rem;\n  background: #6f900d;\n  transition: 1s transform,1s width;\n}\n#wrap .content .tap-wrap .tap-content {\n  width: 300%;\n}\n#wrap .content .tap-wrap .tap-content ul {\n  float: left;\n  width: 33.3333%;\n}\n#wrap .content .tap-wrap .tap-content ul li {\n  box-sizing: border-box;\n  width: 7.4962963rem;\n  margin: 0.11851852rem;\n  padding: 0.07407407rem;\n  font-size: 0.59259259rem;\n  background: #efefef;\n  color: #000000;\n  overflow: hidden;\n  float: left;\n}\n#wrap .content .tap-wrap .tap-content ul li a img {\n  width: 100%;\n}\n#wrap .content .tap-wrap .tap-content ul li a span {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #605e5e;\n}\n#wrap .content .tap-wrap .tap-content ul li .tap-discuss .right {\n  float: left;\n  margin-right: 0.44444444rem;\n  vertical-align: middle;\n}\n#wrap .content .tap-wrap .tap-content ul li .tap-discuss .right span:nth-child(1) {\n  display: inline-block;\n  width: 0.5rem;\n  height: 0.5rem;\n  background: url(" + __webpack_require__(0) + ") no-repeat;\n}\n#wrap .content .tap-wrap .tap-content ul li .tap-discuss .left {\n  float: left;\n  vertical-align: middle;\n}\n#wrap .content .tap-wrap .tap-content ul li .tap-discuss .left span:nth-child(1) {\n  display: inline-block;\n  width: 0.5rem;\n  height: 0.5rem;\n  background: url(" + __webpack_require__(0) + ") no-repeat;\n  background-position: 0 -0.8rem;\n}\n#wrap .content .tap-wrap .tap-content .tap-loading {\n  background: url(" + __webpack_require__(9) + ") no-repeat;\n  background-position: center;\n  height: 10rem;\n  opacity: 0;\n}\n#wrap .scrollBar {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 4px;\n  height: 100%;\n  background: deeppink;\n  z-index: 9;\n  transition: 1s opacity;\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/menuBtn.png";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_damu_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_tools_js__ = __webpack_require__(3);



function swiper() {
  var arr = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
  __WEBPACK_IMPORTED_MODULE_0__js_damu_js__["a" /* default */].carousel(arr);
}

;

function drag() {
  __WEBPACK_IMPORTED_MODULE_0__js_damu_js__["a" /* default */].dragNav();
}

;

function changeFocus() {
  var inputText = document.querySelector("#wrap .head .head-bottom form input[type='text']");
  inputText.addEventListener("touchstart", function (ev) {
    ev = ev || event;
    this.focus();
    ev.stopPropagation();
    ev.preventDefault();
  });
  document.addEventListener("touchstart", function () {
    inputText.blur();
  });
}

;

function CMCFMenuBtn() {
  var menuBtn = document.querySelector("#wrap .head .head-top .menuBtn");
  var mask = document.querySelector("#wrap .head .mask"); //isXX:false  频道按钮
  //isXX:ture	  XX按钮

  var isXX = false;
  menuBtn.addEventListener("touchstart", function (ev) {
    ev = ev || event;
    var touchC = ev.changedTouches[0];

    if (!isXX) {
      __WEBPACK_IMPORTED_MODULE_1__js_tools_js__["a" /* default */].addClass(menuBtn, "active");
      mask.style.display = "block";
    } else {
      __WEBPACK_IMPORTED_MODULE_1__js_tools_js__["a" /* default */].removeClass(menuBtn, "active");
      mask.style.display = "none";
    }

    isXX = !isXX;
    ev.stopPropagation();
    ev.preventDefault();
  });
  document.addEventListener("touchstart", function () {
    if (isXX) {
      __WEBPACK_IMPORTED_MODULE_1__js_tools_js__["a" /* default */].removeClass(menuBtn, "active");
      mask.style.display = "none";
      isXX = !isXX;
    }
  });
  mask.addEventListener("touchstart", function (ev) {
    ev = ev || event;
    ev.stopPropagation();
    ev.preventDefault();
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  swiper: swiper,
  drag: drag,
  changeFocus: changeFocus,
  CMCFMenuBtn: CMCFMenuBtn
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_transform_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_tools_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_damu_js__ = __webpack_require__(1);




function head() {
  var aNodes = document.querySelectorAll("#wrap .head .head-top .btns a");
  var headBottom = document.querySelector("#wrap .head .head-bottom");
  var bar = document.querySelector("#wrap .scrollBar");
  var head = document.querySelector("#wrap .head");
  var h = head.offsetHeight;
  var flag = true;
  aNodes[0].addEventListener("touchend", function () {
    //滚动条滚过头部高度时
    if (__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(bar, "translateY") > h) {
      if (flag) {
        headBottom.style.display = "none";
      } else {
        headBottom.style.display = "block";
      }

      flag = !flag;
    }
  });
}

function vMove() {
  var headBottom = document.querySelector("#wrap .head .head-bottom");
  var head = document.querySelector("#wrap .head");
  var h = head.offsetHeight;
  var content = document.querySelector("#wrap .content");
  var wrap = document.querySelector("#wrap .content > div");
  var bar = document.querySelector("#wrap .scrollBar");
  var scale = document.documentElement.clientHeight / (head.offsetHeight + wrap.offsetHeight);
  bar.style.height = document.documentElement.clientHeight * scale + "px";
  var callback = {
    start: function start() {
      bar.style.opacity = 1;
    },
    move: function move() {
      var scale = __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(this, "translateY") / (wrap.offsetHeight - content.clientHeight); //scale = 实时距离/最大距离

      __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(bar, "translateY", -scale * (document.documentElement.clientHeight - bar.offsetHeight));

      if (__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(bar, "translateY") > h) {
        headBottom.style.display = "none"; //flag = false;
      } else if (__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(bar, "translateY") < h) {
        headBottom.style.display = "block"; //flag = true;
      }
    },
    autoMove: function autoMove() {
      var scale = __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(this, "translateY") / (wrap.offsetHeight - content.clientHeight); //scale = 实时距离/最大距离

      __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(bar, "translateY", -scale * (document.documentElement.clientHeight - bar.offsetHeight));
    },
    end: function end() {
      bar.style.opacity = 0;
    }
  };
  __WEBPACK_IMPORTED_MODULE_2__js_damu_js__["a" /* default */].vMove(content, callback);
}

;

function tap() {
  var wrap = document.querySelector("#wrap .content .tap-wrap");
  var contentNodes = document.querySelectorAll("#wrap .content .tap-wrap .tap-content"); //var  loadings =  document.querySelectorAll("#wrap .content .tap-wrap .tap-content .tap-loading");
  // var w = wrap.offsetWidth;

  var w = document.documentElement.clientWidth;

  for (var i = 0; i < contentNodes.length; i++) {
    move(contentNodes[i]);
  }

  function move(content) {
    //抽象小绿的下标
    var now = 0;
    var smallG = content.parentNode.querySelector(".tap-nav .smallG");
    var aNodes = content.parentNode.querySelectorAll(".tap-nav a");
    var loadings = content.querySelectorAll(".tap-loading");
    __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content, "translateX", -w);
    smallG.style.width = aNodes[0].offsetWidth + "px"; //滑屏逻辑 content既是滑屏区域又是滑屏元素
    //var startPoint={x:0,y:0};

    var startPoint = {};
    var elementPoint = {
      x: 0,
      y: 0
    };
    var isX = true;
    var isFirst = true; //在1/2 跳转时  让整个jump逻辑干干净净的只触发一次

    var isOver = false;
    content.addEventListener("touchstart", function (ev) {
      //isOver =false;
      if (isOver) {
        return;
      }

      ev = ev || event;
      var touchC = ev.changedTouches[0]; //快照
      //startPoint = {clientX:touchC.clientX,clientY:touchC.clientY};

      startPoint = touchC;
      elementPoint.x = __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content, "translateX");
      elementPoint.y = __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content, "translateY");
      isX = true;
      isFirst = true;
      content.style.transition = "none";
    });
    content.addEventListener("touchmove", function (ev) {
      if (isOver) {
        return;
      }

      if (!isX) {
        return;
      }

      ev = ev || event;
      var touchC = ev.changedTouches[0];
      var nowPoint = {};
      var dis = {
        x: 0,
        y: 0
      };
      nowPoint = touchC;
      dis.x = nowPoint.clientX - startPoint.clientX; //0

      dis.y = nowPoint.clientY - startPoint.clientY; //0

      if (isFirst) {
        isFirst = false;

        if (Math.abs(dis.y) > Math.abs(dis.x)) {
          isX = false;
          return;
        }
      }

      var translateX = elementPoint.x + dis.x;
      __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content, "translateX", translateX);
      jump(dis.x);
    });
    content.addEventListener("touchend", function (ev) {
      if (isOver) {
        return;
      }

      ev = ev || event;
      var touchC = ev.changedTouches[0];
      var nowPoint = {};
      var dis = {
        x: 0,
        y: 0
      };
      nowPoint = touchC;
      dis.x = nowPoint.clientX - startPoint.clientX;

      if (Math.abs(dis.x) <= w / 2) {
        content.style.transition = "1s transform";
        __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content, "translateX", -w);
      }
    }); //1/2 跳转  ---> 请求

    function jump(disX) {
      if (isOver) {
        return;
      }

      if (Math.abs(disX) > w / 2) {
        var endFn = function endFn() {
          /*
           循环定时器   				回调函数的头部第一行清定时器
          DOM2 绑定 transitionend事件    回调函数的头部第一行解绑事件
          */
          content.removeEventListener("transitionend", endFn);
          content.removeEventListener("webkitTransitionEnd", endFn);
          content.style.transition = "none";
          /*超过 1/2
           * 1.一开始loading图是隐藏的,loading图需要出现（ 1/2跳转后  请求发送前）
           * 2.发送请求  处理请求  完成数据的渲染
           * 		必须动画（content去0 或者 -2w位置）完成之后，再去进行这一系列的逻辑
           * 								----   content要回到-w的位置
           * */

          for (var i = 0; i < loadings.length; i++) {
            loadings[i].style.opacity = 1;
          } //对now进行控制
          //往右滑 --   往左滑++


          disX > 0 ? now-- : now++;

          if (now < 0) {
            now = aNodes.length - 1;
          } else if (now > aNodes.length - 1) {
            now = 0;
          }

          __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(smallG, "translateX", aNodes[now].offsetLeft);

          if (aNodes[now].offsetWidth != smallG.offsetWidth) {
            smallG.style.width = aNodes[now].offsetWidth + "px";
          } //发ajax请求  去服务端拿数据（学完node之后来发一发）
          //优雅


          setTimeout(function () {
            //成功  content要回到-w的位置  loading图隐藏
            for (var i = 0; i < loadings.length; i++) {
              loadings[i].style.opacity = 0;
            }

            __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content, "translateX", -w); //最后一步

            isOver = false;
          }, 2000);
        };

        isOver = true;
        content.style.transition = "1s transform";
        var targetX = disX > 0 ? 0 : -2 * w;
        __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content, "translateX", targetX); //请求一定要在动画执行完毕之后再发,

        content.addEventListener("transitionend", endFn);
        content.addEventListener("webkitTransitionEnd", endFn);
      }
    }
  }
}

;

function changeColor() {
  var list = document.querySelector("#wrap .content .damu-nav-drag-wrapper .list");
  var aNodes = document.querySelectorAll("#wrap .content .damu-nav-drag-wrapper .list>li a");
  list.addEventListener("touchstart", function () {
    this.isMove = false;
  });
  list.addEventListener("touchmove", function () {
    this.isMove = true;
  });
  list.addEventListener("touchend", function (ev) {
    if (this.isMove) {
      return;
    }

    ev = ev || event;
    var touchC = ev.changedTouches[0];

    for (var i = 0; i < aNodes.length; i++) {
      __WEBPACK_IMPORTED_MODULE_1__js_tools_js__["a" /* default */].removeClass(aNodes[i], "active");
    }

    __WEBPACK_IMPORTED_MODULE_1__js_tools_js__["a" /* default */].addClass(touchC.target, "active");
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  head: head,
  vMove: vMove,
  tap: tap,
  changeColor: changeColor
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/4.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/5.jpg";

/***/ })
/******/ ]);