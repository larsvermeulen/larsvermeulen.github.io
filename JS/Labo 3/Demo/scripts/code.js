const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // event basef programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onclick);
    btnTry.addEventListener("mouseout",mouseOut);

    //evetnlisterner CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent").addEventListener("click", changeContent);
}
// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered! <br>";
}
// mouseClickFunction
const onclick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked! <br>";
}
// MouseOutFunction
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out! <br>";
}

//changeCSS
const withoutBullets = () => {
    let i;
    let listItems = document.getElementsByTagName("li");
    for(i=0; i < listItems.length; i++){
      /*
            //eerste manier (slechte manier niet gebruiken)
            listItems[i].style.listStyleType="none";
            listItems[i].style.backgroundColor="red";
      *//*
            //tweede manier die classnamen komen vanuit style.css
            listItems[i].className = "listItemsStyleNone colorRed"
      */
            //Derde manier werken met een CLassList
           // Je maakt de if om de colorWhite te verwijderen uit de console. Alsje de fucntie withbullets hebt uitgevoerd
            // staat colorwhite als laatste in de log en kan je het dus niet meer rood maken
            if(listItems[i].classList.contains("colorWhite") && listItems[i].classList.contains("listItemsStyleDisc")){
                listItems[i].classList.remove("colorWhite");
                listItems[i].classList.remove("listItemsStyleDisc");
            }

            listItems[i].classList.add("listItemsStyleNone");
            listItems[i].classList.add("colorRed");
            console.log("output " + listItems[i].className);
    }
}
const withBullets = () => {
    let i;
    let listItems = document.getElementsByTagName("li");
    for(i=0; i < listItems.length; i++){
        /*
            //eerste manier (slechte manier niet gebruiker)
            listItems[i].style.listStyleType="disc";
            listItems[i].style.backgroundColor="white";
        *//*
            //tweede manier die classnamen komen vanuit style.css
            listItems[i].className = "listItemsStyleDisc colorWhite"
        */
            //Derde manier werken met een CLassList
            listItems[i].classList.add("listItemsStyleDisc");
            listItems[i].classList.add("colorWhite");
            console.log("output " + listItems[i].className);
    }
}

// difference between "textContent" and "innerHTML"
const changeContent = () => {
    document.getElementById("textContent").textContent = "<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML = "<a href='https://www.vives.be'>VIVES</a>";
}
window.addEventListener("load", setup);