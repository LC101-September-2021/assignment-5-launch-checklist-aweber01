require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput.isEmpty()) {
       return "Empty";
   } else if (testInput.isNan()) {
       return "Not a Number";
   } else {
       return "Is a Number";
   }
}

function formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementByID("launchStatus");

    if (validateInput(pilot) === "Is a Number" || validateInput(pilot) === "Empty") {
        window.alert("Please enter a string value for pilot.")
    } else {
       let pilotStatus = document.getElementByID("pilotStatus");
       pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
    };

    if (validateInput(copilot) === "Is a Number" || validateInput(copilot) === "Empty") {
        window.alert("Please enter a string value for pilot.")
    } else {
        let copilotStatus = document.getElementByID("copilotStatus");
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch.`;
    };

    if (validateInput(Number(fuelLevel)) === "Not a Number" || validateInput  (Number(fuelLevel)) === "Empty") {
        window.alert("Please enter a numeric value for fuel level.")
    } else {
    let fuelStatus = document.getElementById("fuelStatus");
       if(fuelLevel < 10000) {
            faultyItems.style.visibility = visible;
            fuelStatus.innerHTML = "Fuel level to low to launch.";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
       } else {
            fuelStatus.innerHTML = "Fuel level sufficient for launch.";
       }
    };

    if (validateInput(Number(cargoLevel)) === "Not a Number" || validateInput  (Number(cargoLevel)) === "Empty") {
        window.alert("Please enter a numeric value for cargo level.")
    } else {
    let cargoStatus = document.getElementById("cargoStatus");
       if(cargoLevel > 10000) {
            faultyItems.style.visibility = visible;
            cargoStatus.innerHTML = "Cargo mass too high to launch.";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
       } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch.";
       }
   }
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
