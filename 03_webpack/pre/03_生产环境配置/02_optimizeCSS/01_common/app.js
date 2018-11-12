import "./less/index.less";
import "./js/buss2"

import(/* webpackChunkName:'async' */ "./js/buss.js").then(function (async) {
    console.log(async);
})