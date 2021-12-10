//const { formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    const form = this.document.querySelector("form");

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       pickPlanet(listedPlanets);
   });

   form.addEventListener("submit", event => {
        event.preventDefault();
        
        const pilot = this.document.getElementById("pilotName").value;
        const copilot = this.document.getElementById("copilotName").value;
        const fuelLevel = this.document.getElementById("fuelLevel").value;
        const cargoMass = this.document.getElementById("cargoMass").value;
        const faultyItems = this.document.getElementById("faultyItems");

        // console.log(pilot);
        // console.log(copilot);
        // console.log(fuelLevel);
        // console.log(cargoMass);
        
         formSubmission(this.document, faultyItems, pilot, copilot, fuelLevel, cargoMass);
         
    });
   
});