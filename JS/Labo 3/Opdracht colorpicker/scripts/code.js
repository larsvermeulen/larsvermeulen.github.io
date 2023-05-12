const setup = () => {

    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    // is voor de onmiddelijk update te hebben
    update();
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
window.addEventListener("load", setup);