import base from  "./css/base.css";

let flag =true;
setInterval(function () {
    if(flag){
        base.use();
    }else {
        base.unuse();
    }
    flag = !flag;
},1000)

