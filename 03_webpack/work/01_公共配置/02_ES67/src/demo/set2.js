export default ()=>{
    var set1=new Set([1,2,3]);
    for(var item of set1.keys()){
        console.log(item);
    }
    console.log(set1);
}