var cityEl = document.getElementById('cityEl');

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

            console.log(data)
            let today = data.list[0]
            const now = new Date();
            const currentDateTime = now.toLocaleString();
            // Current day date should be displayed as well
            // Also display humidity and wind speed
            cityEl.innerText = city
            weather.innerText = today.weather[0].description
            // Use the date element variable and set it's text to the 'today' variable
            temp.innerText = today.main.temp
            iconEl.src = "http://openweathermap.org/img/w/" + today.weather[0].icon + ".png";
            forecastsEl.innerHTML = ""
            for (let i = 1; i < data.list.length; i += 8) {
                let div = document.createElement("div")
                let day = data.list[i];
                let we = day.weather[0].description
                let temp = day.main.temp
                // create a variable for the humidity 
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

//Create a function for saving the city name to local storage
// Grab the value of input (this will the city)
// localStorage.setItem([key], [city name]) (You can use an array)

//Create a function for display the cities in local storage
// create a var and set it to localStorage.getItem([key]) (JSON.parse(localStorage.getItem()[key]) if you use an array)
// loop through the varaiable you created
// create a button using document.createElement('button')
// set the text of the button to the value (button = cityNames[i])
// append the button to an html element 