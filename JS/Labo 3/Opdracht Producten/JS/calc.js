const setup = () => {
    console.log("setup");
    // let btnHerbereken = document.getElementsByClassName('btnHerbereken')[0];
    // btnHerbereken.addEventListener("click", calc);
    // btnHerbereken.style.display = "none";

    let txtAantallen = document.getElementsByClassName('aantal');
    for (let i = 0; i < txtAantallen.length; i++) {
        txtAantallen[i].addEventListener("change", update);
    }
};

const update = () => {
    let txtBtws = document.getElementsByClassName('btw');
    let txtAantallen = document.getElementsByClassName('aantal');
    let txtPrijzen = document.getElementsByClassName('prijs');
    let txtSubtotalen = document.getElementsByClassName('subtotaal');
    let txtTotaal = document.getElementsByClassName('totaal')[0];
    let totaal = 0;

    for (let i = 0; i < txtBtws.length; i++) {
        let aantal = parseFloat(txtAantallen[i].value.replace(',', '.'));
        let btw = parseFloat(txtBtws[i].innerHTML.replace(',', '.'));
        let prijs = parseFloat(txtPrijzen[i].innerHTML.replace(',', '.'));
        let subtotaal = aantal * prijs * (1 + (btw / 100));
        totaal += subtotaal;

        txtSubtotalen[i].textContent = subtotaal.toFixed(2).replace('.', ',') + " Eur";
    }
    txtTotaal.textContent = totaal.toFixed(2).replace('.', ',') + " Eur";
};

window.addEventListener("load", setup);