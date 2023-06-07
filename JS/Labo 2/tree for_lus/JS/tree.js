// JavaScript Document
const setup = () => {

    tree()

};

const tree = () =>{

    let x,y;

    let chr='';
    const  hoogte = 6;

    for(x=1; x <=hoogte; x++)   // hoogte
    {
        for (y=1; y <= x; y++)  // breedte
        {
            chr+="*";
        }
        console.log(chr);
        chr='';
    }
};

window.addEventListener("load", setup);




