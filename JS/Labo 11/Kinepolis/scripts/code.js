const setup = () => {

}
const CreateSeats = () => {
    var lstImages = document.getElementById("lstImages");
    for(let i = 0; i< seats.length; i++){
        if(i%8===0){
            let newLine = document.createElement('br');
            lstImages.appendChild(newLine);
        }
        let img = document.createElement('img');
        img.id = "seat"+i;
        lstImages.appendChild(img);
    }
}
window.addEventListener("load", setup);