const setup = () => {

    /* Soort event: Als je met muis over id lblCursus gaat zal functie change worden uitgevoerd */
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);

}

const  change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

const show = () => {
    let txtName = document.getElementById("txtName");

    if(txtName.value != ""){
        alert("jouw naam is " + txtName.value);

        /* pop up scherm */ console.log(`jouw naam is  ${txtName.value}`);
    }else {
        alert("gelieve een naam intevullen");
    }
}


window.addEventListener("load", setup);