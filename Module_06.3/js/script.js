
const myForm = document.forms[0];
myForm.onsubmit = (e) => {
	e.preventDefault();
	const Mycity = myForm.elements.city.value;
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+Mycity+'&appid='+APIKey;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	let DATA = JSON.parse(xhr.responseText);
	mySpan.innerHTML = (DATA.main.temp - 273);
}