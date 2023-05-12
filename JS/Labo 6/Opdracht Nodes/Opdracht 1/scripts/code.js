const setup = () => {
    let pList = document.querySelectorAll("p");
    let pNode = document.createElement("p");
    let textNode = document.createTextNode("Good Job");
    pNode.appendChild(textNode);
    pList[0].parentNode.replaceChild(pNode, pList[0]);

}
window.addEventListener("load", setup);