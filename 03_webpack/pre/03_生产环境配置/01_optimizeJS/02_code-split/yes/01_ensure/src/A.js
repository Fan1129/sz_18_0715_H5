import "./Ason1.js"
import "./Ason2.js"

require.ensure(["jquery"], function(require22){
        var $ = require22("jquery");
    }, "third")



console.log("A.js")

export default 'A';