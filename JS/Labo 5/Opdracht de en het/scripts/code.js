
const setup = () => {

    let eersteTekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let nieuwetekst = replacewords(eersteTekst,"de","het");
    console.log(nieuwetekst);
}


const replacewords = (str, eerste, tweede) =>{
    let words = str.split(" ");
    let nieuwezin ="";
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === eerste) {
            nieuwezin += tweede;
        } else {
            nieuwezin += words[i];
        }
        if (i < words.length - 1) { // voeg een spatie toe tussen de woorden, behalve na het laatste woord
            nieuwezin += " ";
        }
    }
    return nieuwezin;
}
window.addEventListener("load", setup);