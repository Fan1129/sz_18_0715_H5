export default ()=>{
    var set1 =new Set([1,2,3]);
    set1.add(4);
    set1.delete(1);

    for(var item of set1.keys()){
        console.log(item)
    }
    for(var item of set1.values()){
        console.log(item)
    }
    for(var item of set1.entries()){
        console.log(item)
    }

    set1.forEach((item)=>{
        console.log(item + "--")
    })
}