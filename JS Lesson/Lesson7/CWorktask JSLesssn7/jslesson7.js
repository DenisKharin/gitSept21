// 1 Створити функцію конструктор яка дозволяє створювати об'єкти car,
//   з властивостями модель, виробник, рік випуску, максимальна швидкість,
//   об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість}
//    на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі
//    `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості
//    на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
//
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і
//    додає його в поточний об'єкт car

// function CarsObjects(model, producer, year, maxspeed, capacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.capacity = capacity
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} км/год`);
//     };
//     this.info = function () {
//         for (const keys in this) {
//             if (typeof this[keys] !== 'function') {
//                 console.log(`${keys} - ${this[keys]}`);
//             }
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//         console.log(`Нова пiдвищена на ${newSpeed} км/год скорость, становить - ${this.maxspeed} км/год`);
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(`рік випуску - ${this.year}`);
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let cars1 = new CarsObjects('Daewoo Nexia', 'Korea', 1996, 240, 1.6);
// console.log(cars1);                     // первиннi даннi Cars
// cars1.addDriver('Denis Kharin');  // поставив виклик функцii addDriver перед iтеруванням
// cars1.drive();                          // iтеруванням в функцii this.info
// cars1.info();
// cars1.increaseMaxSpeed(30);
// cars1.drive();
// cars1.changeYear(2008);
// console.log(cars1);                     // змiненi даннi Cars

// 2 (Те саме, тільки через клас)
//    Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
//    виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//    додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю
//    ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі
//    `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної
//    швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
//
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним
//    набором полів, і додає його в поточний об'єкт car

// class CarsObject {
//     constructor(model, producer, year, maxspeed, capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.capacity = capacity;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} км/год`);
//     }
//
//     info () {
//         for (const keys in this) {
//             console.log(`${keys} - ${this[keys]}`);
//         }
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//         console.log(`Нова пiдвищена на ${newSpeed} км/год скорость, становить - ${this.maxspeed} км/год`);
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//         console.log(`рік випуску - ${this.year}`);
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
// let cars2 = new CarsObject('Daewoo Lanos', 'Ukraine', 2000,200,1.3);
// console.log(cars2);
// cars2.addDriver('Valeriy Pavlenko');
// cars2.drive();
// cars2.info();
// cars2.increaseMaxSpeed(30);
// cars2.drive();
// cars2.changeYear(2010);
// console.log(cars2);

// 3 створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.

function Sinderella (name, age, shoesize) {
    this.name = name;
    this.age = age;
    this.shoessize = shoesize;
}
//   Створити масив з 10 попелюшок.
let arrSinderellas = [
    new Sinderella('Anna', 64, 40),
    new Sinderella ('Julia', 36, 39),
    new Sinderella('Elena', 28, 38),
    new Sinderella('Ekaterina', 30, 37),
    new Sinderella('Lubov', 54, 41),
    new Sinderella('Olga', 23, 36),
    new Sinderella('Daniella', 20, 35),
    new Sinderella('Kruella', 70, 45),
    new Sinderella('Bogdana', 33, 42),
    new Sinderella('Irina', 45, 43)
];
console.log(arrSinderellas);

//   Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік,
//   туфелька яку він знайшов.

class Prince {
    constructor(name, age, findshoes) {
        this.name = name;
        this.age = age;
        this.findshoes = findshoes;
    }
}
let ourPrince = new Prince('Ptolemey', 37, 35);
console.log(`Is name our Prince - ${ourPrince.name}`);
console.log(`size of shoe found - ${ourPrince.findshoes}`);

//         За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let newPairPrinceAndSinderella = (ourPrince, arrSinderellas) => {
    for (const keys of arrSinderellas) {
        if (keys.shoessize === ourPrince.findshoes) {
            console.log(`Your Sinderella is - ${keys.name}`);
            console.log(`her size shoes - ${keys.shoessize}`);
        }
    }
}
newPairPrinceAndSinderella(ourPrince, arrSinderellas);

//         Додатково, знайти необхідну попелюшку за допомоги функції масиву
//         find та відповідного колбеку

let princess = arrSinderellas.find((item) => item.shoessize === ourPrince.findshoes);
console.log(princess);
