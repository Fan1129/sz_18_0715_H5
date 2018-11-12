import "../css/tai.less";
import damu from "./taiUiByDamu.js";
import xfz  from"./taiUiByXfz.js";

import renderHtml from "../js/test/test";
var newUlNode = renderHtml();
var wrap = document.querySelector("#wrap");
wrap.appendChild(newUlNode);

damu.CMCFMenuBtn();
damu.changeFocus();
damu.drag();
damu.swiper();

xfz.changeColor();
xfz.tap();
xfz.vMove();
xfz.head();

console.log("test HMR 5")

if(module.hot){
    //接受当前模块的热更新
    // module.hot.accept();
    module.hot.accept(["../js/test/test"],function () {
        newUlNode.remove();

        var UlNode = renderHtml();
        wrap.appendChild(UlNode);

        newUlNode = UlNode;
    });
}
