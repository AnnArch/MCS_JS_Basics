let a = parseFloat(prompt('Сколько у вас с собой денег?'))
let b = parseInt(prompt('Сколько вы купили яблок'))
let c = parseFloat(prompt('Сколько вы купили батонов хлеба?'))
let b1 = parseFloat(prompt('Сколько стоит одно яблоко?'))
sum = b1*b
let c1 = parseFloat(prompt('Сколько стоит один батон хлеба?'))
sum2 = c*c1
i = a>=sum + sum2
document.body.innerHTML = i