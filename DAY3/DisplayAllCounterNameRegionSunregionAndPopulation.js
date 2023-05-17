let XMLHttpRequest = require('xhr2');
function printData()
{
    let country = JSON.parse(this.responseText);
    country.forEach(element => {
        console.log(element.name.common);
        console.log(element.region);
        console.log(element.subregion);
        console.log(element.population);
    });
}


let request = new XMLHttpRequest();
request.addEventListener("load",printData);
request.open("GET","https://restcountries.com/v3.1/all");
request.send();