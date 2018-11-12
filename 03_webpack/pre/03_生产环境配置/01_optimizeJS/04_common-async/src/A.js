import $ from "jquery";
var flag = "son1";
if(flag === "son1"){
    import(/* webpackChunkName:'Ason1' */"./Ason1.js").then(son1 =>{
        console.log(son1)
    })
}else if(flag === "son2"){
    import(/* webpackChunkName:'Ason2' */"./Ason2.js").then(son2 =>{
        console.log(son2)
    })
}

console.log("A.js",$.addClass)

export default 'A';