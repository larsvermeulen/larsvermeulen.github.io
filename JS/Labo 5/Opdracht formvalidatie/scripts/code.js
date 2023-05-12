
function setup() {
	const btnValideer = document.querySelector("#btnValideer");
	btnValideer.addEventListener("click", valideer);
}

function valideer() {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboorteDatum();
	valideerEmail();
	valideerAantalKinderen();

	const elements = document.querySelectorAll(".invalid");
	if (elements.length === 0) {
		window.alert("proficiat!");
	}
}

function valideerVoornaam() {
	const txtVoornaam = document.querySelector("#txtVoornaam");
	const voornaam = txtVoornaam.value;

	if (voornaam.length > 30) {
		reportError(txtVoornaam, "max. 30 karakters");
	} else {
		clearError(txtVoornaam);
	}
}

function valideerFamilienaam() {
	const txtFamilienaam = document.querySelector("#txtFamilienaam");
	const familienaam = txtFamilienaam.value;

	if (familienaam.length === 0) {
		reportError(txtFamilienaam, "verplicht veld");
	} else if (familienaam.length > 50) {
		reportError(txtFamilienaam, "max. 50 karakters");
	} else {
		clearError(txtFamilienaam);
	}
}

function valideerGeboorteDatum() {
	const txtGeboorteDatum = document.querySelector("#txtGeboorteDatum");
	const geboorteDatum = txtGeboorteDatum.value;

	if (geboorteDatum.length !== 10) {
		reportError(txtGeboorteDatum, "verplicht veld in formaat jjjj-mm-dd");
		return;
	}

	let formatCorrect = true;

	if (geboorteDatum.charAt(4) !== "-" || geboorteDatum.charAt(7) !== "-") {
		formatCorrect = false;
	}

	const yearText = geboorteDatum.substring(0, 4);
	if (!isPositiveNonZeroNumber(yearText)) {
		formatCorrect = false;
	}

	const monthText = geboorteDatum.substring(5, 7);
	if (!isPositiveNonZeroNumber(monthText)) {
		formatCorrect = false;
	}

	const dayText = geboorteDatum.substring(8, 10);
	if (!isPositiveNonZeroNumber(dayText)) {
		formatCorrect = false;
	}

	if (formatCorrect) {
		clearError(txtGeboorteDatum);
	} else {
		reportError(txtGeboorteDatum, "formaat is niet jjjj-mm-dd");
	}
}

function valideerEmail() {
	const txtEmail = document.querySelector("#txtEmail");
	const email = txtEmail.value;

	if (email.length === 0) {
		reportError(txtEmail, "verplicht veld");
		return;
	}

	let formatCorrect = true;
	const idx = email.indexOf("@");

	if (idx < 1 || idx === email.length - 1) {
		formatCorrect = false;
	}

	if (email.indexOf("@", idx + 1) !== -1) {
		formatCorrect = false;
	}

	if (formatCorrect) {
		clearError(txtEmail);
	} else {
		reportError(txtEmail, "geen geldig email adres");
	}
}

const valideerAantalKinderen = () => {
	let txtAantalKinderen = document.getElementById("txtAantalKinderen");
	let aantalKinderenText = txtAantalKinderen.value.trim();
	if (aantalKinderenText.length==0) {
		reportError(txtAantalKinderen, "verplicht veld");
	} else if (!isPositiveNumber(aantalKinderenText)) {
		reportError(txtAantalKinderen, "is geen positief getal");
	} else {
		let aantal=parseInt(aantalKinderenText);
		if (aantal>=99) {
			reportError(txtAantalKinderen, "te vruchtbaar");
		} else {
			clearError(txtAantalKinderen);
		}
	}
};

const isPositiveNumber = (text) => {
    if (isNaN(text)) {
        return false;
    } else {
        let number = parseInt(text, 10);
        return number >= 0;
    }
};

const isPositiveNonZeroNumber = (text) => {
    if (isNaN(text)) {
        return false;
    } else {
        let number = parseInt(text, 10);
        return number > 0;
    }
};

const reportError = (element, message) => {
	let elementId=element.getAttribute("id"); // bv. txtVoornaam
	let errElementId="err"+elementId.substring(3, elementId.length); // bv. errVoornaam
	let errElement=document.getElementById(errElementId);
	element.className="invalid";
	errElement.innerHTML = message;
};

const clearError = (element) => {
	let elementId=element.getAttribute("id"); // bv. txtVoornaam
	let errElementId="err"+elementId.substring(3, elementId.length); // bv. errVoornaam
	let errElement=document.getElementById(errElementId);
	element.className="";
	errElement.innerHTML = "";
};

window.addEventListener("load", setup);
