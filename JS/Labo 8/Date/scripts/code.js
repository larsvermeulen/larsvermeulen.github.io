const setup = () => {
    let start = new Date();
    console.log(start);
    // dag van de week(zondag is 0)
    console.log(start.getDay());
    // maand(januari is 0)
    console.log(start.getMonth());
    let month = start.getMonth()+1;
    //jaar
    console.log(start.getFullYear())
    let year = start.getFullYear();
    // dag van vandaag
    console.log(start.getDate());
    let day = start.getDate();
    // volledige datum van vandaag
    console.log(day + "-" + month + "-" + year + " " + start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds());

    // Datum afdrukken
    let event = new Date('2023-04-10T23:10:02');
    console.log(event.getDate());

    //Bepaal hoeveel dagen leef ik verkeerd
    let geboren = new Date('2002-10-15');
    let eind = new Date();
    let verschil = eind - geboren;
    let dagen = Math.floor(verschil / (1000 * 60 * 60 * 24));
    console.log(dagen);

    //Bepaal hoeveel dagen leef ik juist
    let geboren1 = new Date(2002,11,15);
    let eind1 = new Date();
    let verschil1 = eind1 - geboren1;
    let dagen1 = Math.floor(verschil1 / (1000 * 60 * 60 * 24));
    console.log(dagen1);

    let string = new Date('2023-04-10T23:10:02');
    console.log(event.getDate());

    console.log("toISOstring " + string.toISOString()); // GMT tijd + datum
    console.log("ToDateString " + string.toDateString()); // datum zonder uur
    console.log("ToTimeString " + string.toTimeString()); // tijd zonder datum



}
window.addEventListener("load", setup);