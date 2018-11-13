/*import comfn from "./COMMON.js";
comfn()*/

require.ensure(["./COMMON.js"],()=>{
    var comfn = require("./COMMON.js");
    comfn()
},"buscommon")

console.log("A-SON-2")
export default "ason2"