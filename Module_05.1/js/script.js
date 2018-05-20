
function moduleDeg(num){
	var deg = Math.round(Math.random() * (10 - 1)) + 1;
	var exp =  Math.pow(num, deg);
	console.log(deg);
	return Math.abs(exp);
}

var num = prompt('Введите число');
console.log(moduleDeg(num));
