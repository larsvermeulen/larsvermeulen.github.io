const setup = () => {
    let node = document.getElementsByTagName("li");

    for(let i =0; i < node.length; i++){
        node[i].setAttribute("class","color");
    }

    let myPic = document.createElement('img');
    myPic.setAttribute("src",'hhtps')

    document.querySelector("body").appendChild(myPic);

}
window.addEventListener("load", setup);