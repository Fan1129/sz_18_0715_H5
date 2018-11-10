module.exports = function (css) {
    var testNode = document.querySelector("#test");
    testNode.onclick=function () {
        document.body.style.background="deeppink";
    }

    console.log(css);

    return css;
}