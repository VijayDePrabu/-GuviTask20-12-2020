let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

request.send();

request.onload = function() {
    try{
    let allCountries = JSON.parse(this.response);
    console.log(allCountries);

    //  - Get all the countries from Asia continent /region using Filter function 
    let asianCountries =  allCountries.filter(country => (country.region === "Asia"))
    console.log("Asian Countries:");
    for(let i in asianCountries){
      console.log(asianCountries[i].name);
    }
    console.log("---- ");
// - Get all the countries with population of less than 2 lacs using Filter function
    let populationLessThanTwoLakhs = allCountries.filter(country => ( parseInt(country.population) <= 200000));
    console.log("Population Less Than Two Lakhs Countries:")
    for(let i in populationLessThanTwoLakhs){
      console.log(populationLessThanTwoLakhs[i].name);
    }
    console.log("---- ");
    //  - Print the following details name, capital, flag using forEach function 
    for(let i in allCountries){
      console.log("Name: " + allCountries[i].name);
      console.log("Capital: " + allCountries[i].capital);
      console.log("Flag: " + allCountries[i].flag);
      console.log("---- ");

    }

    // - Print the total population of countries using reduce function 
    let totalPopulation = allCountries.reduce( ((populationTemp , country) => (populationTemp + country.population)), 0 );
    console.log("totalPopulation: " + totalPopulation);
    console.log("---- ");

    // - Print the country which use US Dollars as currency. 
    let uSDollarsCountries =  allCountries.filter(country => (country.currencies[0].code === "USD"))
    console.log("Country which use US Dollars as currency:");

    for(let i in uSDollarsCountries){
      console.log(uSDollarsCountries[i].name);
    }
   }catch(error){
      
   }
}
