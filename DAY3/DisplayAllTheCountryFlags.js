var XMLHttpRequest = require('xhr2');

function requesData()
{
    let country=JSON.parse(this.responseText);
    country.forEach(element => {
         console.log(element.flags); 
    });
}
var request =new XMLHttpRequest();
request.addEventListener("load",requesData);
request.open("GET","https://restcountries.com/v3.1/all");
request.send();