const setup = () => {
    let student = {}; // leeg object
    student.firstName = "jhon";
    student.lastName = "Doe";
    student.age = new Date(2000,1,1); //1Feb200
    student.eyeColor = "blue";

    console.log(student.firstName);

    let student1 = { // leeg object
    firstName: "jhon",
    lastName: "Doe",
    age: new Date(2000,1,1), //1Feb200
    eyeColor: "blue"}

    console.log (student1.age.toString());
// toISOString should always return the date in UTC (Z or +00:00).
// UTC = Coordinated Universal Time
//UTC is bijna gelijk aan Greenwich Mean Time (GMT). GMT is een zuiver astronomische tijd. Om het door de vertraagde aardrotatie veroorzaakte verschil te compenseren, moeten er schrikkelsecondes worden gebruikt. Het verschil is nooit meer dan een seconde en voor de meeste toepassingen dan ook niet van belang.
// the toISOString() method converts a Date object into a string, using the ISO standard.
    console.log (student.age.toISOString());
    console.log (student1.firstName);

// uitbreiding

    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address : {
            zipCode : 8500,
            city : "Kortrijk"
        }
    };

    console.log (student2.address.zipCode);



    let tekst = JSON.stringify(student);
    console.log (tekst);

    tekst = JSON.stringify(student2);
    console.log (tekst);

    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];
// omzetten script-object naar een JSON-object
    tekst = JSON.stringify(students);

    console.log (tekst);
// omzetten JSON-object naar script-object
    tekstJS = JSON.parse(tekst);
    console.log ("JsonParse " + tekstJS[0].firstName);


    tekst = JSON.stringify(students[1]);
    console.log (tekst);


}
window.addEventListener("load", setup);