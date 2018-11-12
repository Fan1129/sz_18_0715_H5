import "../css/tai.less";
import damu from "./taiUiByDamu.js";
import xfz  from"./taiUiByXfz.js";
import mask from "./mask/mask";

/*var wrap = document.querySelector("#wrap");

var lastUL=mask();
wrap.appendChild(lastUL);*/


import "../img/1.jpg";
import "../img/2.jpg";
import "../img/3.jpg";
import "../img/4.jpg";
import "../img/5.jpg";

damu.CMCFMenuBtn();
damu.changeFocus();
damu.drag();
damu.swiper();

xfz.changeColor();
xfz.tap();
xfz.vMove();
xfz.head();


console.log("----")

/*if(module.hot){
    module.hot.accept(["./mask/mask.js"],()=>{
        //函数被调了
        //模块热跟新没有起作用（不是导出一个组件的时候模块热跟新是没问题的）
        console.log("-------")
        lastUL.remove();


        var newUL = document.createElement("ul");
        newUL.innerHTML=`<ul><li>6666</li></ul>`;
        wrap.appendChild(newUL);

        lastUL = newUL;
    })
}*/
