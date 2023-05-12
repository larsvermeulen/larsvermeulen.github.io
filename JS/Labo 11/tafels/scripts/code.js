let tafels = [];

const setup = () => {
    let btnGO = document.getElementById("btnGo");
    btnGO.addEventListener("click", addtafel);

    let label = document.querySelector("label[for='txtStart']");
    label.addEventListener("click", () => {document.getElementById("txtStart").focus();});
};

const addtafel = () => {
    let txtStartGetal = document.getElementById("txtStart");
    let startGetal = parseInt(txtStartGetal.value);

    if (isNaN(startGetal)) {
        alert("Geen geldig getal");
    } else {
        let tafel = {
            start: startGetal,
            datum: new Date(),
        };
        createTafel(tafel);
    }
};

const createTafel = (tafelobj) => {
    let tabels = document.getElementById("tafels");
    let tabel = document.createElement("div");

    tabel.appendChild(createheader(tafelobj));
    tabel.setAttribute("class", "tafel");

    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("div");
        if (i % 2 == 0) {
            row.setAttribute("class", "even");
        }

        row.appendChild(document.createTextNode(tafelobj.start + " x " + i + " = " + (tafelobj.start * i)));
        tabel.appendChild(row);
    }

    tabels.appendChild(tabel);
};

const createheader = (tafel) => {
    let header = document.createElement("div");
    header.setAttribute("class", "header");

    let headerNode = document.createTextNode("Tafel van " + tafel.start + " aangemaakt op: " + tafel.datum.toTimeString().substring(0, 8));
    header.appendChild(headerNode);

    return header;
};

window.addEventListener("load", setup);
