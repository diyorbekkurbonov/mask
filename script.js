const apiKey = "f13bc0df5833211f7975ed766d25c3e1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

var weatherCity = document.querySelector(".weather__city");
var  weatherTemp =document.querySelector(".weather__temprature");
var weatherWind = document.querySelector(".weather__info-item-text");
var weatherHumd = document.querySelector(".weather__info-item-texthumd");
var weatherImg = document.querySelector(".weather__icon");
var searchBtn = document.querySelector(".search button");
var searchInput = document.querySelector(".search input");
var weather = document.querySelector(".weather");
var nFound = document.querySelector(".request");
var hour = document.querySelector(".clock__hour");
var minute = document.querySelector(".clock__minute");
var animation = document.querySelector(".animation")
async function currentWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404){
    nFound.style.display="block";
    weather.style.display="none"
    animation.style.display="none"
    }
    else{
        nFound.style.display="none";
    const data =await response.json()
    console.log(data);
     weatherCity.innerHTML=data.name
     weatherHumd.innerHTML=data.main.humidity + "💧%"
     weatherWind.innerHTML=data.wind.speed  +"km/h"
     weatherTemp.innerHTML=Math.ceil(data.main.temp) +"°C"

     if(data.weather[0].main=="Wind"){
        weatherImg.src="images/wind.png"
     }
     else if(data.weather[0].main=="Clear"){
        weatherImg.src="images/clear.png"
     }
     else if(data.weather[0].main=="Clouds"){
        weatherImg.src="images/clouds.png"
     }
     else if(data.weather[0].main=="Rain"){
        weatherImg.src="images/Rain.png"
     }
     else if(data.weather[0].main=="Mist"){
        weatherImg.src="images/mist.png"
     }
     else if(data.weather[0].main=="Drizzle"){
        weatherImg.src="images/drizzle.png"
     }
     else if(data.weather[0].main=="Snow"){
        weatherImg.src="images/snow.png"
     }

     weather.style.display="block"
          
     animation.style.display="none"
    }
}


searchBtn.addEventListener("click", ()=>{
    currentWeather(searchInput.value);
    
});






function clock() {

    const time = new Date();
    let clockHour = time.getHours()
    let clockMinute =time.getMinutes()


    hour.innerHTML = clockHour < 10 ? '0' + clockHour : clockHour
    minute.innerHTML = clockMinute < 10 ? '0' + clockMinute : clockMinute
}

clock()


