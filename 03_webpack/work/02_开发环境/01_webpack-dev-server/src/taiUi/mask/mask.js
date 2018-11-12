export default ()=>{

    var ulNode = document.createElement("ul");
    ulNode.style.position="absolute";
    ulNode.style.zIndex=997;
    ulNode.style.color="deeppink";
    ulNode.style.fontSize="50px";
    ulNode.innerHTML=`<li>1234</li>`;

    return ulNode;
}