const mapDemo = new Map();
mapDemo.set("a-key","a-val");
mapDemo.set("b-key","b-val");

for(let item of mapDemo.entries()){
    console.log(item)
}
mapDemo.forEach((a,b,c)=>{
    console.log(a,b,c)
})



const mapDemo2 = new Map([["key-a","val-a"],["key-b","val-b"]]);
console.log(mapDemo2);
