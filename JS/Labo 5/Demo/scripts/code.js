const setup = () => {
    let imgChancer = document.getElementById("img");


    imgChancer.addEventListener("mouseover",change)

}
const change = () =>{
    document.getElementById("img").src ="./images/kat.jpg";
    document.getElementById("img").alt = "kat";
    document.getElementById("text").innerHTML = "foto van een kat";

}
window.addEventListener("load", setup);