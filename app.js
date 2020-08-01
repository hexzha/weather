// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// APP DATA
const weather = {};

weather.temperature = {
	unit : "celcius"
}

// APP CONSTS AND VARS
const KELVIN = 273;

// API KEY 
const KEY = "cda2f91c5a081399ad1c2828010675b5";

// CHECK IF BROWSER SUPPORTS GEOLOCATION 
if('geolocation' in navigator) {
	navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
	notificationElement.style.display = "block";
	notificaitonElement.innerHTML = "<p>Browser does not support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position) {
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;

	getWeather(latitude, longitude);
}

// SHOW GEOLOCATION SERVICES ERROR
function showError(error) {
	notificationElement.style.display = "block";
	notificationElement.innerHTML = `<p> ${error.message} </p>`; 
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude) {
	let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;

	console.log(api);
}




