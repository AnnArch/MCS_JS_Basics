let money = parseFloat(prompt('Сколько у вас с собой денег?'))
let apples = parseInt(prompt('Сколько вы купили яблок'))
let bread = parseFloat(prompt('Сколько вы купили батонов хлеба?'))
let oneApple = parseFloat(prompt('Сколько стоит одно яблоко?'))
let oneBread = parseFloat(prompt('Сколько стоит один батон хлеба?'))


function total(price, quantility) {
	return price*quantility;
}



all = total(bread, oneBread)+total(apples, oneApple);

if(money >= all) {
	console.log("Вам хватает денег на покупки");
} else {
	console.log("Вам не хватает денег");
} 

