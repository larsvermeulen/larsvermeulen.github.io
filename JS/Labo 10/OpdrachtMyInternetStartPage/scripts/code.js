const setup = () => {
    let btnGO = document.getElementById("btnGo");
    btnGO.addEventListener("click",correctCommand)

    let lsHistory = JSON.parse(localStorage.getItem("history"));
    if(lsHistory){
        for(let i = 0; i<lsHistory.length; i++){
            createCardAndAppend(lsHistory[i].title, lsHistory[i].text, lsHistory[i].url);
        }
    }
};

const correctCommand = () => {
    let txtcommandinput = document.getElementById("commandoInput");
    let command = txtcommandinput.value;

    let regex = command.match("\/[a-z]{1} [a-z]*");

    if (regex != null) {
        let prefix = command.charAt(1);
            if(prefix === "y") {
                youtube(command.slice(3))

            }else if(prefix === "g"){
                google(command.slice(3))
            }else if(prefix === "i"){
                instagram(command.slice(3));
            }else if(prefix === "t"){
                twitter(command.slice(3));
            } else {
            alert("UNknow command prefix");
            }
        txtcommandinput.value = "";
    }else{
        alert("Invalid command");
    }
};

const google = (commandoSuffix) =>{
    let url = "https://www.google.com/search?q="+commandoSuffix;
    window.open(url, 'blank');
    createCardAndAppend("Google", commandoSuffix, url);
    saveLocalStorage("Google",commandoSuffix,url);
};

const instagram = (commandoSuffix) =>{
    let url = "https://www.instagram.com/"+commandoSuffix;
    window.open(url, 'blank');
    createCardAndAppend("Instagram", commandoSuffix, url);
    saveLocalStorage("Instagram",commandoSuffix,url);
};

const twitter = (commandoSuffix) =>{
    let url = "https://twitter.com/search?q="+commandoSuffix;
    window.open(url, 'blank');
    createCardAndAppend("Twitter", commandoSuffix, url);
    saveLocalStorage("Twitter",commandoSuffix,url);
};

const youtube = (commandoSuffix) =>{
    let url = "https://www.youtube.com/results?search_query="+commandoSuffix;
    window.open(url, 'blank');
    createCardAndAppend("Youtube", commandoSuffix, url);
    saveLocalStorage("Youtube",commandoSuffix,url);
};

const createCardAndAppend = (title, commandoSuffix, url) =>{
        let col4 = createElementWithClassName("div", "col-4");
        let card = createElementWithClassName("div", "card");
        card.classList.add(title.toLowerCase()+"-card");
        let cardBody = createElementWithClassName("div","card-body");
        let cardTitle = createElementWithClassNameAndText("h5","card-title",title);
        let cardText = createElementWithClassNameAndText("p","card-text",commandoSuffix);
        let linkGO = createLinkButton(url);
        linkGO.classList.add(title.toLowerCase()+"-button");

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(linkGO);
        card.appendChild(cardBody);
        col4.appendChild(card);

        let row = document.querySelector("#resultContainer > .row");

        row.appendChild(col4);
};

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
};

const saveLocalStorage = (title, commandoSuffix, url) => {
    let historyObject = {
        title: title,
        text: commandoSuffix,
        url: url
    };

    let lsHistory = JSON.parse(localStorage.getItem("history"));
    if(!lsHistory){
        lsHistory = [historyObject];
    }
    else {
        lsHistory.push(historyObject);
    }

    localStorage.setItem("history", JSON.stringify(lsHistory));
};


window.addEventListener("load", setup);