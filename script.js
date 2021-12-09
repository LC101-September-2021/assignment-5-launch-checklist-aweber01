const { formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
   const submitButton = this.document.getElementById("formSubmit");
   const pilot = this.document.getElementById("pilotName");
   const copilot = this.document.getElementById("copilotName");
   const fuelLevel = this.document.getElementById("fuelLevel");
   const cargoMass = this.document.getElementById("cargoMass");
   const faultyItems = this.document.getElementById("faultyItems"); 

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

   submitButton.addEventListener("click", event => {
       formSubmission(this.document, faultyItems, pilot, copilot, fuelLevel, cargoMass);
    });
   
});