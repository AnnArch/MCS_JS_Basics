
window.onload = function(){
  const Myname = document.querySelector('.personName');
  const icon = document.querySelector('.icon');
  class Person {
    constructor(name) {
      this.name = name;
      this.happiness = 0;
    }
    hasCat(){
      return this.happiness++;
    }
    ﻿hasRest(){
    	return this.happiness++;
    }
    hasMoney(){
    	return this.happiness++;
    }
    isSunny(){
    	const APIKey = '9f08eae68d3994662db592e1dd72000f';
  	  const Mycity = 'Moscow';
    	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+Mycity+'&appid='+APIKey;
    	let xhr = new XMLHttpRequest();
    	xhr.open('GET', url, false);
    	xhr.send();
    	let DATA = JSON.parse(xhr.responseText);
    	let temp = (DATA.main.temp - 273);
    	if(temp >15){
    		return this.happiness++
    	}  else {
    		return this.happiness
    	 }
    }
  }

  const myForm = document.forms[0];
  myForm.onsubmit = (e) => {
    e.preventDefault();
    const name = myForm.elements.name.value; 
    const Cat = myForm.elements.cat.value;
    const Rest = myForm.elements.rest.value;
    const Money = myForm.elements.money.value;
    const Man = new Person(name);

    if (Cat === 'yes'){
      Man.hasCat();
    }
    if (Rest === 'yes'){
      Man.hasRest();
    }
    if (Money === 'yes'){
      Man.hasMoney();
    }
    Man.isSunny();
    Myname.innerHTML= name;

    if (Man.happiness == 4) {
      icon.innerHTML =  '😆';
    } else if (Man.happiness == 2 || Man.happines == 3) {
      icon.innerHTML = '😐';
    } else {
      icon.innerHTML = '☹️';
    }
  }
}