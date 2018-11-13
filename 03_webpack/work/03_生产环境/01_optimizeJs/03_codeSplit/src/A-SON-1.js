// import comfn from "./COMMON.js";
// comfn()

require.ensure(["./COMMON.js"],()=>{
    var comfn = require("./COMMON.js");
    comfn()
},"buscommon")


console.log("A-SON-1")
export default "ason1"