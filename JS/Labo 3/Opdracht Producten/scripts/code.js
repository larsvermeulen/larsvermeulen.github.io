const setup = () => {
    let btnHerberkenen = document.getElementById("btnHerberelenen");

    btnHerberkenen.addEventListener("click",onclick)

    let subtotaal = document.getElementsByClassName("aantal");
    for(let i = 0; i < subtotaal.length; i++) {
        subtotaal[i].addEventListener("change",update)
        subtotaal[i].addEventListener("input", update)
    }
}

const onclick = () =>{
    update();
}

const update = () =>{
    let aantal1 = document.getElementById("aantalProduct1").value;
    let aantal2 = document.getElementById("aantalProduct2").value;
    let aantal3 = document.getElementById("aantalProduct3").value;

    let prijs1 = document.getElementById("prijs1").value;
    let prijs2 = document.getElementById("prijs2").value;
    let prijs3 = document.getElementById("prijs3").value;

    let btw1 = document.getElementById("btw1").value;
    let btw2 = document.getElementById("btw2").value;
    let btw3 = document.getElementById("btw3").value;

    let som1 = (aantal1*prijs1)+((aantal1*prijs1)*btw1);
    let som2 = (aantal2*prijs2)+((aantal2*prijs2)*btw2);
    let som3 = (aantal3*prijs3)+((aantal3*prijs3)*btw3);
    console.log(prijs1);

    document.getElementById("subtotaalProduct1").innerHTML=som1;
    document.getElementById("subtotaalProdcut2").innerHTML=som2;
    document.getElementById("subtotaalProduct3").innerHTML=som3;

    let totaalsom = som1 + som2 + som3;

    document.getElementById("AlgemeenTotaal").innerHTML=totaalsom;

}
window.addEventListener("load", setup);