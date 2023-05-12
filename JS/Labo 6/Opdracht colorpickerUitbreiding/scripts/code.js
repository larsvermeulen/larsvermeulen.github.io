const setup = () => {

    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    // is voor de onmiddelijk update te hebben
    update();

    let save = document.getElementById("save");
    save.addEventListener("click",bewaar);
}

const update = () => {
    let rood=document.getElementById("sliderRood").value;
    let groen=document.getElementById("sliderGroen").value;
    let blauw=document.getElementById("sliderblauw").value;

    document.getElementById("txtRed").innerHTML=rood;
    document.getElementById("txtGreen").innerHTML=groen;
    document.getElementById("txtBlauw").innerHTML=blauw;

    let kleur=document.getElementById("kleur");
    kleur.style.backgroundColor="rgb("+rood+","+groen+","+blauw+")";
}

const bewaar = () =>{
    let element = document.getElementById("component");
    let box = builder();
    element.appendChild(box);
}
const configureBox = (box) =>{
    let red = document.getElementById("sliderRood").value;
    box.setAttribute("data-red",red);

    let green = document.getElementById("sliderblauw").value;

}
const builder = () =>{
    let box= document.createElement("div");
    let btndelete = document.createElement("input");

    box.className="kleur";

    btndelete.setAttribute("type", "button");
    btndelete.setAttribute("value","x");
    btndelete.addEventListener("click",deleteBox);

}

window.addEventListener("load", setup);