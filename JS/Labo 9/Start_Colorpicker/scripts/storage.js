const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let rgb = {
        red: red,
        green: green,
        blue: blue
    };

    let jsonText = JSON.stringify(rgb);
    localStorage.setItem("colorpicker.sliders", jsonText);
};

const restoreSliderValues = () => {
    let savedData = localStorage.getItem("colorpicker.sliders");
    if (savedData != null) {
        let rgb = JSON.parse(savedData);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green;
        document.getElementById("sldBlue").value = rgb.blue;
    }
};

const storeSwatches = () => {
    let rgbColors = [];
    let swatches = document.getElementsByClassName(" swatch");
    for(let i = 1; i < swatches.length; i++){
        let rbg = {
            red: swatches[i].getAttribute("data-red"),
            green: swatches[i].getAttribute("data-green"),
            blue: swatches[i].getAttribute("data-blue")
        };
        rgbColors.push(rbg);
    }
    let jsonText = JSON.stringify(rgbColors);
    localStorage.setItem("colorpicker.swatches", jsonText);
};

const restoreSwatches = () => {
    let storedSwatches = localStorage.getItem("colorpicker.swatches");
    if (storedSwatches != null) {
        let rgbColors = JSON.parse(storedSwatches);
        for (let i = 0; i < rgbColors.length; i++) {
            let rgb = rgbColors[i];
            addSwatchComponent(rgb.red, rgb.green, rgb.blue);

        }
    }

};
