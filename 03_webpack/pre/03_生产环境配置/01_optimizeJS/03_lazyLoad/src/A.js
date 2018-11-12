require.include("./01_common.js");

var flag = "son1";

if(flag === "son1"){
    /*require.ensure(["./Ason1.js"], function(require22){
         require22("./Ason1.js");
    }, "son1")*/
    import(/* webpackChunkName:'Ason1' */"./Ason1.js").then(son1 =>{
        console.log(son1)
    })
}else if(flag === "son2"){
    /*require.ensure(["./Ason2.js"], function(require22){
         require22("./Ason2.js");
    }, "son2")*/
    import(/* webpackChunkName:'Ason2' */"./Ason2.js").then(son2 =>{
        console.log(son2)
    })
}

/*require.ensure(["jquery"], function(require22){
    var $ = require22("jquery");
}, "third")*/
import(/* webpackChunkName:'third' */"jquery").then($ =>{
    console.log($)
})

console.log("A.js")

export default 'A';