const setDemo = new Set();
setDemo.add(1);
setDemo.add(2);
setDemo.add(NaN);
setDemo.add(NaN);
setDemo.add({});
setDemo.add({});
// setDemo.clear()
setDemo.delete(NaN)


for(let item of setDemo.entries()){
    // console.log(item)
}
setDemo.forEach((a,b,c)=>{
    console.log(a,b,c)
})

//数组去重
const arr = [1,2,3,1,2,3]
const  setDemo2 = new Set(arr);
console.log(setDemo2)
