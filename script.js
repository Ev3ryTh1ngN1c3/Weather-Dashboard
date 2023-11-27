var cityEl = document.getElementById('cityEl');
var datetimeEl = document.getElementById('datetime');
var humidityEl = document.getElementById('humidity');
var windspeedEl = document.getElementById('windspeed');

function check() {
    var date = document.getElementById("date").value;
    var d = new moment(date, 'YYYY-MM-DD');
    console.log(d)
}

function callAPI(e) {
    e.preventDefault()
    let city = e.target.country.value
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=617296c3e23d4dbf924a899ffb674899")
        .then(res => res.json())
        .then(data => {

            let today = data.list[0]
            const now = new Date();
            const currentDateTime = now.toLocaleString();
console.log(today)
            cityEl.innerText = city
            datetimeEl.innerText = currentDateTime
            humidityEl.innerText = today.main.humidity
            weather.innerText = today.weather[0].description
            windspeedEl.innerText = today.wind.speed

            temp.innerText = today.main.temp
            iconEl.src = "http://openweathermap.org/img/w/" + today.weather[0].icon + ".png";
            forecastsEl.innerHTML = ""
            for (let i = 1; i < data.list.length; i += 8) {
                let div = document.createElement("div")
                let day = data.list[i];
                let we = day.weather[0].description
                let temp = day.main.temp
              

                let src = "http://openweathermap.org/img/w/" + today.weather[0].icon + ".png";
                div.innerHTML = `
       <p>Weather:${we}   </p>
       <p>Temprature:${temp}   </p>
       <p>Icon: <img src=${src} /> </p>
     
     `
                forecastsEl.appendChild(div)



            }
        })
}