// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// c2da00dc335d42ab465a6c36a7930a68

const weatherApi = {
    key: "c2da00dc335d42ab465a6c36a7930a68",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on Keypress
searchInputBox.addEventListener('keypress',(event)=>{
    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
})

// Get Weather Report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report 
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if (weatherType.textContent == 'Clear') {
        
        document.body.style.backgroundImage = "url('img/background/clear.jpeg')";
        document.getElementById("img").src = "img/icon/clear.png";
    
    }
    else if (weatherType.textContent == 'Clouds') {
        
        document.body.style.backgroundImage = "url('img/background/clouds.jpeg')";
        document.getElementById("img").src = "img/icon/clouds.png";
    
    }
    else if (weatherType.textContent == 'Rain') {
    
        document.body.style.backgroundImage = "url('img/background/rain.jpeg')";
        document.getElementById("img").src = "img/icon/rain.png";
    
    }
    else if (weatherType.textContent == 'Snow') {
    
        document.body.style.backgroundImage = "url('img/background/snow.jpeg')";
        document.getElementById("img").src = "img/icon/snow.png";
    
    }
    else if (weatherType.textContent == 'Thunderstrom') {
    
        document.body.style.backgroundImage = "url('img/background/thunderstrom.jpeg')";
        document.getElementById("img").src = "img/icon/thunderstrom.png";
    
    }
    else if (weatherType.textContent == 'Drizzle') {
    
        document.body.style.backgroundImage = "url('img/background/drizzle.jpeg')";
        document.getElementById("img").src = "img/icon/drizzle.png";
    
    }
    else if (weatherType.textContent == 'Mist') {
    
        document.body.style.backgroundImage = "url('img/background/mist.jpeg')";
        document.getElementById("img").src = "img/icon/mist.png";
    
    }
    else if (weatherType.textContent == 'Smoke') {
    
        document.body.style.backgroundImage = "url('img/background/smoke.jpeg')";
        document.getElementById("img").src = "img/icon/smoke.png";
    
    }
    else if (weatherType.textContent == 'Haze') {
    
        document.body.style.backgroundImage = "url('img/background/haze.jpeg')";
        document.getElementById("img").src = "img/icon/haze.png";
    
    }
    else if (weatherType.textContent == 'Dust') {
    
        document.body.style.backgroundImage = "url('img/background/dust.png')";
        document.getElementById("img").src = "img/icon/dust.png";
    
    }
    else if (weatherType.textContent == 'Fog') {
    
        document.body.style.backgroundImage = "url('img/background/fog.jpg')";
        document.getElementById("img").src = "img/icon/fog.png";
    
    }
    else if (weatherType.textContent == 'Sand') {
    
        document.body.style.backgroundImage = "url('img/background/sand.png')";
        document.getElementById("img").src = "img/icon/sand.png";
    
    }
    else if (weatherType.textContent == 'Ash') {
    
        document.body.style.backgroundImage = "url('img/background/ash.jpg')";
        document.getElementById("img").src = "img/icon/ash.png";
    
    }
    else if (weatherType.textContent == 'Squall') {
    
        document.body.style.backgroundImage = "url('img/background/squall.jpeg')";
        document.getElementById("img").src = "img/icon/squall.png";
    
    }
    else if (weatherType.textContent == 'Tornado') {
    
        document.body.style.backgroundImage = "url('img/background/tornado.jpeg')";
        document.getElementById("img").src = "img/icon/tornado.png";
    
    }
    
}

// Date manage
function dateManage(dateArg){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`
}
