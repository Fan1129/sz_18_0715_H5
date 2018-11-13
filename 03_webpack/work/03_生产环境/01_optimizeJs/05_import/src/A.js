/*import  "./A-SON-1.js";
import  "./A-SON-2.js";*/
import _ from "lodash"
import $ from "jquery"
require.include("./COMMON.js");
var flag ="Ason1";

if(flag === "Ason1"){
    import(/* webpackChunkName:'ason' */"./A-SON-1.js").then((str) => {
        console.log(str)
    });
}else {
    import(/* webpackChunkName:'ason' */"./A-SON-2.js").then((str) => {
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