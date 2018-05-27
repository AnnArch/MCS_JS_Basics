//Создайте класс Custumer, у которого будет имя в конструкторе и метод buy, выводящий в консоль слово “Куплено”.
//Создайте подкласс childCustumer, который наследует конструктор и метод Customer, 
//но имеет собственный метод getPresent, который выводит в консоль фразу “Шарик в подарок”

class Costumer {
  constructor(name) {
    this.name = name;
  }
  buy(){
    console.log('Куплено');
  }
}

class childCustumer extends Costumer{
  getPresent(){
    console.log('Шарик в подарок');
  }
}
const Man = new Costumer('Petya');
console.log(Man)
console.log(Man.buy())

const Child = new childCustumer('Vasya');
console.log(Child)
console.log(Child.getPresent())