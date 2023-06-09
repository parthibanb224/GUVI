async function getCountries() {
  const all = await fetch("https://restcountries.com/v3.1/all");
  const data = await all.json();

  let card = document.getElementById("cards");
  data.forEach(country => {
    let div = document.createElement("div");
    div.setAttribute('class', 'col col-lg-4');
    div.innerHTML = `<div class="card my-3" style="width: 18rem; height:550px">
        <div class="card-header" style="height:70px">
        <h4 class="card-text text-center">${country.name.common}</h4>
    </div>
        <div class="card-body text-center">
            <img src="${country.flags.svg}" class="card-img-top" alt="${country.flags.alt}">
            <p class="card-text">
            Capital : ${country.capital}
            </p>
            <p class="card-text">
            Region : ${country.region}
            </p>
            <p class="card-text">
            Country Code : ${country.cca3}
            </p>
            <p class="card-text">
            Native Name : ${country.name.common}
            </p>
            <p class="card-text">
            Population : ${country.population}
            </p>
            <button onclick="getWeather(${country.latlng[0]},${country.latlng[1]})" type="button" id="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Click for Weather</button>
            <div class="modal" id="myModal">
              <div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <h4 class="modal-title">WEATHER REPORT:</h4>
                     <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                   </div>
                   <div id="report" class="modal-body">
                     
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                   </div>

                </div>
              </div>
            </div>
        </div>
    </div>
`
    card.append(div);
  })
}
getCountries();



function getWeather(lat, lng) {
  const latitude = lat;
  const longitude = lng;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8058f39594374fc2f6966bcad02c65df`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const result = document.getElementById('report');
      result.innerHTML = `Temperature : ${temperature}&deg;C <br> Humidity : ${humidity}&percnt; <br> Description : ${description}`;
    })
    .catch(error => console.log("Error", error));
}