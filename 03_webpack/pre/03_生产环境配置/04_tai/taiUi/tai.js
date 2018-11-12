import "../css/tai.less";
import damu from "./taiUiByDamu.js";
import xfz  from"./taiUiByXfz.js";
damu.CMCFMenuBtn();
damu.changeFocus();
damu.drag();
damu.swiper();

xfz.changeColor();
xfz.tap();
xfz.vMove();
xfz.head();


const mapDemo2 = new Map([["key-a","val-a"],["key-b","val-b"]]);
console.log(mapDemo2);