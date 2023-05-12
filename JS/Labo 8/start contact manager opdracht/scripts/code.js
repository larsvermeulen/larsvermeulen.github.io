let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const gegevensPersonenUserInterface = (persoon) =>{

    let voornaam = document.getElementById("txtVoornaam");
    persoon.voornaam =  voornaam.value.trim();

    let familienaam = document.getElementById("txtFamilienaam");
    persoon.familienaam = familienaam.value.trim();

    let Geboortedat = document.getElementById("txtGeboorteDatum");
    peroon.famnaam = new Date(Geboortedat.value.trim());

    let mail = document.getElementById("txtEmail");
    persoon.mail = mail.value.trim();

     let aantalkids = document.getElementById("txtAantalKinderen");
     persoon.aantalkids = Math.floor(aantalkids.value.trim());
};

const userInterfacePersoon = (persoon) => {
    let voornaam = document.getElementById("txtVoornaam");
    voornaam.value = persoon.voornaam;

    let familienaam = document.getElementById("txtFamilienaam");
    familienaam.value = persoon.familienaam;

    let Geboortedat = document.getElementById("txtGeboorteDatum");
    Geboortedat.value = persoon.Geboortedat;

    let  mail = document.getElementById("txtEmail");
    mail.value = persoon.mail;

    let aantalkids = document.getElementById("txtAantalKinderen");
    aantalkids.value = persoon.aantalkids;


};

const voegPersoonToe = (persoon) =>{
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length -1;

};

const updatePersoon = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = lstPersonen.options[lstPersonen.selectedIndex];
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
};

const bewaarBewerktePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    valideer();
    let elements = document.getElementsByClassName("invalid");
    if (elements.length == 0) {
        // alles in orde, we mogen bewaren
        let persoon = {};
        if (lstPersonen.selectedIndex == -1) {
            // nieuwe persoon bewaren
            vulPersoonOpBasisVanUserInterface(persoon);
            personen.push(persoon);
            voegPersoonToeAanLijstInUserInterface(persoon);
        } else {
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonOpBasisVanUserInterface(persoon);
            updatePersoonInLijstInUserInterface(persoon);
        }
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    txtVoornaam.value = "";
    txtFamilienaam.value = "";
    txtGeboorteDatum.value = "";
    txtEmail.value = "";
    txtAantalKinderen.value = "";
    lstPersonen.selectedIndex = -1;

    clearAllErrors();
};

const bewerkGeselecteerdePersoon = (e) => {
    let index = e.target.selectedIndex;
    let persoon = personen[index];
    userInterfacePersoon(persoon);

    clearAllErrors();
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkGeselecteerdePersoon);
};

window.addEventListener("load", setup);