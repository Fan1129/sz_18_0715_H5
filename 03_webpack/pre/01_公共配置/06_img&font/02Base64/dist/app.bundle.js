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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_index_css__);




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./index.css");

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(3);
exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "div{\r\n    width: 200px;\r\n    height: 200px;\r\n    border: 4px solid pink;\r\n}\r\n\r\n.a{\r\n    background: url(" + escape(__webpack_require__(5)) + ") no-repeat;\r\n}\r\n.b{\r\n    background: url(" + escape(__webpack_require__(6)) + ") no-repeat;\r\n}\r\n.c{\r\n    background: url(" + escape(__webpack_require__(7)) + ") no-repeat;\r\n}\r\n.d{\r\n    background: url(" + escape(__webpack_require__(8)) + ") no-repeat;\r\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bd461f7ea3f3501de79c349a9ecc4350.jpg";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 9 */
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

var	fixUrls = __webpack_require__(10);

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
/* 10 */
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
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
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
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
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
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);