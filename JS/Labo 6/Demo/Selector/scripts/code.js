const setup = () => {
   // let lstPar = document.getElementsByClassName("colorDiv");
    let lstParDiv = document.querySelectorAll("#myDIV > .color");

   /* for(let i=0; i<lstPar.length;i++){
        lstPar[i].addEventListener("click",change)
    }*/
     for(let i=0; i<lstParDiv.length;i++){
        lstPar[i].addEventListener("click",changeDiv)
    }
}

const change = (e) =>{
    e.target.className ="colorPar"
}

const changeDiv = (e) =>{ // parameter krijgt event binnen die het heeft veroorzaakt
    e.target.className = "colorParDiv";
}
window.addEventListener("load", setup);