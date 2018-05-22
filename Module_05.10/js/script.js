
let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]
var names = []

for(key in crypto) {
names.push(crypto[key].name)
}

const headers = document.querySelectorAll("h1");

for(key in headers) {
headers[key].innerHTML = names[key]
}

var prices = []

for(key in crypto) {
prices.push(crypto[key].price)
}

const paragraphs = document.querySelectorAll("p");

for(key in paragraphs) {
paragraphs[key].innerHTML = prices[key]
}
const lines = document.querySelectorAll("div");

/*

Сначала сделала вот так:

for(key in lines) {
ines[key].style.width = prices[key] + "px"
}

Но потом решила, что здорово было бы рассчитать ширину полос в зависимости от ширины браузера
*/

//функция поиска максиального значения в массиве, нашла в гуглее :)
function getMaxOfArray(numArray) {
return Math.max.apply(null, numArray);
}

var maximum = getMaxOfArray(prices);

for(key in lines) {
lines[key].style.width = ((prices[key]/maximum)*100) + "%"
}

//В обоих случаях правда появляется ошибка (хоть и работает), как я поняла, из-за того, что массиву нельзя присваивать .style.width
 







