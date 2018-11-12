export default function renderHtml() {
    var  ul = document.createElement("ul");
    ul.style.position="absolute";
    ul.style.zIndex=999;
    ul.style.fontSize="100px";
    ul.style.color="red";
    ul.innerHTML=`
        <li>1-1</li>
        <li>1-2</li>
        <li>1-3</li>
        <li>1-4</li>
    `;
    return ul;
}